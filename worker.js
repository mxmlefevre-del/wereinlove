/**
 * we're in love — Worker "wereinlove-verdict"
 * Reçoit les deux versions d'une dispute, demande le verdict à Claude,
 * renvoie un JSON : { pctA, pctB, analyse, pacteA, pacteB, motDeLaFin }
 *
 * Déploiement :
 *   1. dash.cloudflare.com → Workers & Pages → Create Worker → "wereinlove-verdict"
 *   2. Coller ce code
 *   3. Settings → Variables → Add secret : ANTHROPIC_API_KEY = votre clé Anthropic
 *   4. Deploy, puis copier l'URL du worker dans app.html (WORKER_URL)
 */

const CORS = {
  "Access-Control-Allow-Origin": "*", // en prod : "https://wereinlove.app"
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") return new Response(null, { headers: CORS });
    if (request.method !== "POST")
      return json({ error: "POST only" }, 405);

    let body;
    try { body = await request.json(); }
    catch { return json({ error: "JSON invalide" }, 400); }

    // Reformulation d'un message avant affichage au partenaire (ton adouci, mêmes faits)
    if (body && body.action === "reformulate") {
      const { text, authorName, recipientName } = body;
      if (!text || !authorName) return json({ error: "Texte ou auteur manquant." }, 400);

      const sys = `Tu reformules le message d'une personne en couple avant que son/sa partenaire ne le lise sur "we're in love".
Objectif : garder exactement les mêmes faits et le même ressenti, mais adoucir le ton pour que ce soit lisible et constructif — sans minimiser, sans accuser, sans juger.
Écris à la première personne, comme si ${authorName} parlait directement à ${recipientName || "son/sa partenaire"}.
Renvoie UNIQUEMENT le texte reformulé, sans préambule, sans guillemets, sans backticks, 1 à 2 phrases de plus que l'original maximum.`;

      try {
        const r = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": env.ANTHROPIC_API_KEY,
            "anthropic-version": "2023-06-01",
          },
          body: JSON.stringify({
            model: "claude-sonnet-4-6",
            max_tokens: 500,
            system: sys,
            messages: [{ role: "user", content: text.slice(0, 2200) }],
          }),
        });
        if (!r.ok) {
          const t = await r.text();
          return json({ error: "API Anthropic: " + r.status, detail: t.slice(0, 300) }, 502);
        }
        const data = await r.json();
        const reformulated = (data.content || []).map(c => c.text || "").join("").trim();
        return json({ reformulated: reformulated || text }, 200);
      } catch (e) {
        return json({ error: "Erreur interne: " + e.message }, 500);
      }
    }

    const { title, nameA, nameB, context, messages } = body || {};
    if (!title || !nameA || !nameB || !Array.isArray(messages) || messages.length < 2)
      return json({ error: "Il faut les deux versions avant le verdict." }, 400);

    // Garde-fous : taille limitée
    const thread = messages.slice(0, 10).map(m =>
      `[${m.role === "A" ? nameA : nameB}] ${String(m.text).slice(0, 2200)}`
    ).join("\n\n");

    const ctx = context
      ? `Contexte du couple : ensemble depuis ${context.duree || "durée inconnue"}, mode de vie : ${context.vie || "non précisé"}.`
      : "";

    const system = `Tu es le médiateur de "we're in love", une application française qui aide les couples à sortir de leurs disputes.
Ton style : direct et tranchant sur les faits, mais toujours chaleureux et du côté du couple. Tu tutoies chacun. Tu n'humilies jamais personne. Tu peux avoir de l'humour léger.

Tu rends un verdict en JSON STRICT, sans aucun texte autour, sans backticks, avec exactement ces clés :
{
  "pctA": <entier 0-100, part de raison de ${nameA}>,
  "pctB": <entier, = 100 - pctA>,
  "analyse": "<6 à 9 phrases : le verdict. Tranche clairement (qui a raison et pourquoi), nomme ce que chacun a bien/mal fait, puis montre le vrai sujet sous la dispute — ce que chacun essaie de dire à l'autre.>",
  "pacteA": "<1 à 2 phrases : l'engagement concret que tu proposes à ${nameA}, formulé à la première personne.>",
  "pacteB": "<1 à 2 phrases : idem pour ${nameB}.>",
  "motDeLaFin": "<1 phrase douce et complice pour clore, qui rappelle qu'ils s'aiment.>"
}

Règles :
- Ne renvoie jamais 50/50 : tranche, c'est le contrat de l'application (écarts entre 52/48 et 85/15).
- Fonde le verdict uniquement sur ce qui est écrit, sans inventer de faits.
- Si les messages contiennent des signes de violence, d'abus ou de détresse grave, mets pctA et pctB à 50, et utilise "analyse" pour dire avec tact que cette situation dépasse une dispute de couple ordinaire et mérite l'aide d'un professionnel ou d'un service d'aide (3919 en France si pertinent) ; pas de pactes dans ce cas (chaînes vides).`;

    const userMsg = `Dispute : "${title}"
${ctx}
${nameA} a créé la dispute. Voici l'échange complet, dans l'ordre :

${thread}

Rends ton verdict JSON maintenant.`;

    try {
      const r = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1200,
          system,
          messages: [{ role: "user", content: userMsg }],
        }),
      });

      if (!r.ok) {
        const t = await r.text();
        return json({ error: "API Anthropic: " + r.status, detail: t.slice(0, 300) }, 502);
      }

      const data = await r.json();
      const raw = (data.content || []).map(c => c.text || "").join("").trim()
        .replace(/^```json/i, "").replace(/^```/, "").replace(/```$/, "").trim();

      let verdict;
      try { verdict = JSON.parse(raw); }
      catch { return json({ error: "Réponse IA non parsable" }, 502); }

      // Normalisation défensive
      let pctA = Math.max(0, Math.min(100, parseInt(verdict.pctA) || 50));
      verdict.pctA = pctA;
      verdict.pctB = 100 - pctA;
      verdict.analyse = String(verdict.analyse || "").slice(0, 2000);
      verdict.pacteA = String(verdict.pacteA || "").slice(0, 400);
      verdict.pacteB = String(verdict.pacteB || "").slice(0, 400);
      verdict.motDeLaFin = String(verdict.motDeLaFin || "").slice(0, 300);

      return json(verdict, 200);
    } catch (e) {
      return json({ error: "Erreur interne: " + e.message }, 500);
    }
  },
};

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json", ...CORS },
  });
}
