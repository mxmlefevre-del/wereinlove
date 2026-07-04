/* ============================================================
   LA BOÎTE À DISPUTES — 30 histoires publiées (anonymisées, fictives)
   Chaque dispute = un feuilleton : messages A/B alternés puis verdict IA.
   Format prévu pour l'affichage en "stories" (frames) partageables.
   ============================================================ */
window.DISPUTES = [
  {
    id:"d01", cat:"Couple", emoji:"🍝", title:"Il a mangé mes restes du resto",
    a:"Clara", b:"Malik", hook:"Une boîte de pâtes truffe. Un frigo. Un crime.",
    msgs:[
      {r:"A",n:"Clara",t:"J'avais GARDÉ mes pâtes à la truffe du resto d'anniversaire, celles que j'ai à peine touchées pour les savourer tranquille. Je rentre : boîte vide dans l'évier. Il les a mangées « parce qu'il avait un petit creux à minuit »."},
      {r:"B",n:"Malik",t:"Il n'y avait aucun post-it, aucun nom dessus. Dans ce frigo, ce qui traîne se mange, c'est la règle depuis toujours. Si c'était sacré, fallait le dire."},
      {r:"A",n:"Clara",t:"« Ce qui traîne » ? C'était RANGÉ, tout en haut, dans MA boîte. Tu savais très bien d'où ça venait."},
      {r:"B",n:"Malik",t:"Ok, j'aurais pu demander. Mais tu en fais un drame national pour des pâtes. On en rachète."},
    ],
    v:{ pctA:66, pctB:34,
      analyse:"Malik, « ce qui traîne se mange » ne tient pas quand la boîte est rangée, pleine, et vient clairement d'un dîner spécial. Tu le savais. Point pour Clara. Mais Clara, un aliment n'est jamais qu'un aliment : ce que tu défends, c'est le droit de prolonger un beau moment, pas des pâtes. Malik a « consommé » ton souvenir sans s'en rendre compte. Le vrai sujet : chez vous, rien n'est identifié comme « à moi », et ça finit par créer des micro-intrusions. Une étagère à chacun réglerait 90% de vos futures guerres de frigo.",
      pacteA:"Je mettrai un mot sur ce qui compte vraiment, au lieu d'attendre qu'il devine.",
      pacteB:"Avant de finir un truc qui a l'air « spécial », je demande. Trois secondes, zéro drame.",
      mot:"La prochaine boîte truffe, partagez-la à deux. 🍝" }
  },
  {
    id:"d02", cat:"Couple", emoji:"📱", title:"Elle like les photos de son ex",
    a:"Théo", b:"Inès", hook:"Un like à 23h47. Sur une photo de plage. De l'ex.",
    msgs:[
      {r:"A",n:"Théo",t:"Je tombe sur une notif : tu as liké une photo de ton ex. À minuit moins le quart. Une photo de lui en maillot. Explique-moi comment je dois le prendre."},
      {r:"B",n:"Inès",t:"C'était un like machinal en scrollant, je ne l'ai même pas calculé. On est restés en bons termes, ça date de six ans. Tu fais une montagne d'un doigt sur un écran."},
      {r:"A",n:"Théo",t:"Un « doigt sur un écran » qui atterrit pile sur ton ex torse nu, à une heure où tu me disais être crevée. C'est le timing qui me pique."},
      {r:"B",n:"Inès",t:"Donc maintenant je dois justifier chaque like ? Tu veux mon téléphone aussi ?"},
    ],
    v:{ pctA:52, pctB:48,
      analyse:"Match serré. Inès, un like à un ex n'a rien de criminel — mais dire « j'étais crevée » puis scroller son maillot à minuit, ça envoie un signal, même involontaire. Théo, ta blessure est légitime, mais tu glisses vite vers le contrôle (« ton téléphone aussi »), et là tu perds le terrain. Le vrai sujet n'est pas ce like : c'est que Théo a besoin d'être rassuré sur sa place, et qu'Inès vit ça comme une mise sous surveillance. Vous ne parlez pas du même problème.",
      pacteA:"Je dirai « j'ai eu peur » au lieu de « justifie-toi » — ça change tout.",
      pacteB:"Je comprends que le timing l'ait piqué ; je le rassure au lieu de me braquer.",
      mot:"Ce n'est pas le like le problème, c'est la place. Redonnez-vous la vôtre. 💞" }
  },
  {
    id:"d03", cat:"Coloc", emoji:"🧽", title:"La vaisselle qui « trempe » depuis 4 jours",
    a:"Yasmine", b:"Hugo", hook:"« Ça trempe. » 96 heures plus tard, ça trempe toujours.",
    msgs:[
      {r:"A",n:"Yasmine",t:"Quatre jours que ta poêle « trempe » dans l'évier. On ne peut plus se laver les mains sans toucher ton gratin fossilisé. Tu la laves quand, en 2027 ?"},
      {r:"B",n:"Hugo",t:"Elle trempe justement pour partir toute seule, c'est de la stratégie. Et toi tu laisses tes cheveux dans la douche, on n'en fait pas un procès."},
      {r:"A",n:"Yasmine",t:"Mes cheveux ne dégagent pas une odeur de cadavre dans la cuisine commune. Assume ta poêle."},
      {r:"B",n:"Hugo",t:"Ok je la lave ce soir. Mais arrête de checker mon évier comme un inspecteur d'hygiène."},
    ],
    v:{ pctA:74, pctB:26,
      analyse:"Hugo, « ça trempe pour partir tout seul » après quatre jours, c'est de la procrastination habillée en méthode. L'espace est commun, l'odeur est publique : large point pour Yasmine. Cela dit, Yasmine, ressortir les cheveux dans la douche révèle que tu tiens un compteur — et un compteur en coloc, ça finit toujours mal. Le vrai sujet : vous n'avez jamais fixé de règles claires, donc chacun juge l'autre selon SES standards. Un mini-accord (« vaisselle sale = lavée le soir même ») vous éviterait dix disputes.",
      pacteA:"J'arrête le compteur mental et je propose une vraie règle commune.",
      pacteB:"Je lave dans la journée, pas dans « un jour ». La stratégie-trempage, c'est fini.",
      mot:"Une coloc qui pose ses règles, c'est une coloc qui dure. 🧽" }
  },
  {
    id:"d04", cat:"Couple", emoji:"🎁", title:"Il a offert le même cadeau qu'à son ex",
    a:"Sarah", b:"Kevin", hook:"Le même parfum. Le même mot. Elle l'a découvert sur Insta.",
    msgs:[
      {r:"A",n:"Sarah",t:"Je découvre que le parfum « choisi rien que pour moi » avec le petit mot « pour ma personne préférée », c'est EXACTEMENT le même cadeau et le même mot que tu avais posté pour ton ex il y a trois ans. J'ai fouillé, j'ai retrouvé le post. Copié-collé."},
      {r:"B",n:"Kevin",t:"C'est un parfum que j'adore et que j'offre parce que je le trouve magnifique, pas pour te comparer. Et je ne me souvenais même pas d'avoir écrit ça avant."},
      {r:"A",n:"Sarah",t:"« Ma personne préférée », mot pour mot, tu ne t'en souvenais pas ? J'ai l'impression d'être une réédition."},
      {r:"B",n:"Kevin",t:"Tu transformes une maladresse en trahison. Je t'aime, TOI. Un parfum ne change pas ça."},
    ],
    v:{ pctA:61, pctB:39,
      analyse:"Kevin, offrir un parfum que tu aimes, aucun problème. Recopier au mot près une dédicace déjà utilisée pour une ex, c'est le geste qui transforme une attention en pilote automatique. Point pour Sarah — pas pour le cadeau, pour le manque de sur-mesure. Mais Sarah, fouiller trois ans en arrière et parler de « réédition » montre une insécurité qui existait avant ce parfum. Le vrai sujet : tu as besoin de te sentir unique, et Kevin croit prouver son amour par les objets alors que c'est l'intention qui te touche.",
      pacteA:"Je dirai à Kevin ce qui me fait me sentir unique, au lieu d'enquêter.",
      pacteB:"J'arrête le copier-coller sentimental : chaque mot pour Sarah sera pour elle.",
      mot:"Ce n'est pas le flacon qui compte, c'est l'intention dedans. 🎁" }
  },
  {
    id:"d05", cat:"Famille", emoji:"🎄", title:"Noël chez sa mère ou la mienne ?",
    a:"Léa", b:"Antoine", hook:"Deux familles, un 25 décembre, zéro solution.",
    msgs:[
      {r:"A",n:"Léa",t:"Ça fait TROIS ans qu'on passe le 25 chez ta mère. Cette année c'est mon tour, ma grand-mère vieillit et je veux être là. Tu réponds « on verra » depuis six semaines."},
      {r:"B",n:"Antoine",t:"Ma mère prépare Noël depuis octobre, elle a déjà tout commandé. Si on annule, elle va être dévastée et je vais culpabiliser pendant un an."},
      {r:"A",n:"Léa",t:"Et MA culpabilité à moi si je rate peut-être un des derniers Noëls de ma grand-mère, elle compte pour du beurre ?"},
      {r:"B",n:"Antoine",t:"Ce n'est pas ce que je dis. Mais ma mère est seule, la tienne a toute la famille autour."},
    ],
    v:{ pctA:70, pctB:30,
      analyse:"Léa, tu as l'argument du temps (3 ans de suite chez sa mère) et l'urgence (ta grand-mère). Antoine, ta loyauté envers ta mère seule est belle, mais elle t'a transformé en otage : « on verra » pendant six semaines, c'est éviter la décision, pas la peser. Point net pour Léa. Le vrai sujet dépasse Noël : Antoine, tu as tellement peur de décevoir ta mère que tu déçois ta compagne par défaut. Tant que tu ne poseras pas de limite tendre à ta mère, Léa passera toujours après — et ça, aucune dinde ne le réparera.",
      pacteA:"Je propose une vraie alternance écrite, pas une bataille chaque décembre.",
      pacteB:"Je parle à ma mère avec amour ET fermeté. Cette année, on va chez Léa.",
      mot:"On peut aimer sa mère et choisir sa compagne. Les deux. 🎄" }
  },
  {
    id:"d06", cat:"Couple", emoji:"🐕", title:"Le chien dort dans le lit, ou pas",
    a:"Camille", b:"Nicolas", hook:"35 kilos de golden entre eux. Chaque nuit.",
    msgs:[
      {r:"A",n:"Camille",t:"Notre lit fait 140. Toi, moi, et 35 kilos de golden qui s'étale en travers. Je dors sur 20 cm, je me réveille avec des poils dans la bouche. Il a un panier NEUF qu'il ignore."},
      {r:"B",n:"Nicolas",t:"Il a peur la nuit, il gémit dans son panier, ça me fend le cœur. Et avoue que quand il pose sa tête sur toi le matin, tu fonds."},
      {r:"A",n:"Camille",t:"Je fonds trois secondes puis je passe la journée cassée en deux. On n'a pas fait l'amour depuis qu'il squatte le milieu du lit, tu remarques ça aussi ?"},
      {r:"B",n:"Nicolas",t:"Là tu exagères, c'est pas le chien qui gère notre couple quand même…"},
    ],
    v:{ pctA:63, pctB:37,
      analyse:"Camille, ton corps qui trinque et surtout l'intimité qui disparaît, c'est du concret : point pour toi. Nicolas, ta tendresse pour le chien est sincère, mais tu utilises son « il a peur » pour éviter de fixer une limite — et ta phrase « c'est pas le chien qui gère notre couple » sonne faux quand… il est littéralement au milieu du lit. Le vrai sujet n'est pas l'animal : c'est que Camille se sent reléguée au bord, au sens propre comme au figuré. Ré-instaurer le lit comme votre territoire à deux, c'est protéger le couple, pas punir le chien.",
      pacteA:"Je dis mon manque d'intimité clairement, sans passer par le chien.",
      pacteB:"On ré-apprend le panier au chien, en douceur. Le lit redevient à nous.",
      mot:"Aimez le chien. Gardez le lit. 🐕" }
  },
  {
    id:"d07", cat:"Amis", emoji:"💸", title:"Elle ne rembourse jamais sa part",
    a:"Manon", b:"Jade", hook:"Trois ans d'amitié, 400 € de restos « on fait 50/50 ».",
    msgs:[
      {r:"A",n:"Manon",t:"À chaque resto : « je te fais un virement ce soir ». Le virement n'arrive jamais. J'ai fait les comptes : presque 400 € sur trois ans. Là j'ai avancé le week-end à Lisbonne et tu esquives depuis."},
      {r:"B",n:"Jade",t:"Tu as gardé les comptes pendant TROIS ANS ? Je pensais qu'entre amies on ne comptait pas comme ça. Ça me met super mal à l'aise que tu aies un tableau Excel sur notre amitié."},
      {r:"A",n:"Manon",t:"Je ne comptais pas, jusqu'à ce que ça devienne systématique et que ça pèse sur MON budget. Je ne suis pas ta banque."},
      {r:"B",n:"Jade",t:"Ok je te dois de l'argent, j'assume. Mais tu aurais pu m'en parler avant que ça devienne un dossier."},
    ],
    v:{ pctA:68, pctB:32,
      analyse:"Manon, une dette occasionnelle entre amies, on laisse couler. 400 € systématiques qui pèsent sur ton budget, non : point pour toi. Jade, se sentir gênée par un « tableau Excel » est humain, mais c'est un écran de fumée : tu retournes la culpabilité vers Manon au lieu de rembourser. Le vrai sujet : Manon a laissé filer trois ans par peur d'abîmer l'amitié, et ce silence a laissé la dette gonfler jusqu'à l'explosion. Une amitié survit très bien à « tu me dois 400 € » ; elle survit mal au ressentiment accumulé en secret.",
      pacteA:"Je parlerai d'argent tout de suite la prochaine fois, avant que ça pourrisse.",
      pacteB:"Je te rembourse par échéances dès cette semaine. Fini les « ce soir » sans suite.",
      mot:"Les bons comptes font les amitiés qui durent. 💸" }
  },
  {
    id:"d08", cat:"Couple", emoji:"🎮", title:"Il a raté notre dîner pour un raid en ligne",
    a:"Emma", b:"Lucas", hook:"Réservation à 20h. Lui, casque vissé, « deux minutes ».",
    msgs:[
      {r:"A",n:"Emma",t:"Table réservée depuis deux semaines pour nos un an. 20h. À 20h15 tu es encore en raid, casque sur les oreilles, « deux minutes, on peut pas lâcher là ». On est arrivés à 21h, le resto avait donné la table."},
      {r:"B",n:"Lucas",t:"C'était un raid de guilde, si je lâche en plein milieu je plombe sept autres personnes qui comptent sur moi. Je ne pouvais pas juste déconnecter."},
      {r:"A",n:"Emma",t:"Donc sept inconnus passent avant notre anniversaire. C'est exactement le problème, en fait."},
      {r:"B",n:"Lucas",t:"Tu résumes ma passion à « sept inconnus ». C'est important pour moi aussi, ce jeu."},
    ],
    v:{ pctA:78, pctB:22,
      analyse:"Lucas, un raid peut être un engagement réel envers une équipe — mais ça se planifie, et ça ne passe jamais devant un dîner d'anniversaire réservé depuis deux semaines. Faire perdre la table à Emma pour ne pas « plomber » des joueurs, c'est un choix, et il était mauvais : gros point pour Emma. Le vrai sujet : Emma n'attaque pas ton jeu, elle constate un classement des priorités où elle finit deuxième. Une passion n'est pas le problème ; c'est le moment où elle t'empêche d'honorer la personne en face de toi qui l'est.",
      pacteA:"Je dirai « j'ai besoin de me sentir prioritaire » sans mépriser sa passion.",
      pacteB:"Je préviens ma guilde des dates qui comptent. Emma passe avant le raid.",
      mot:"Une passion se planifie. Un anniversaire ne se rejoue pas. 🎮" }
  },
  {
    id:"d09", cat:"Couple", emoji:"💍", title:"Elle a dit oui… puis a tout raconté avant lui",
    a:"Romain", b:"Chloé", hook:"La demande était secrète. Le groupe familial l'a su avant lui.",
    msgs:[
      {r:"A",n:"Romain",t:"Je te fais ma demande, moment magique, tu dis oui. Je voulais l'annoncer ensemble à nos deux familles le dimanche. Le samedi, ma mère m'appelle en pleurant de joie : tu avais déjà tout balancé sur le groupe famille avec 12 photos."},
      {r:"B",n:"Chloé",t:"J'étais tellement heureuse que ça a débordé ! C'est la plus belle nouvelle de ma vie, je ne pouvais pas la garder douze heures. Tu m'en veux d'être heureuse ?"},
      {r:"A",n:"Romain",t:"Je t'en veux de m'avoir volé LE moment qu'on devait vivre ensemble. Je voulais voir le visage de ma mère, pas recevoir son appel après coup."},
      {r:"B",n:"Chloé",t:"Je n'ai pas pensé à ça sur le coup, j'étais sur mon nuage. Ce n'était pas contre toi."},
    ],
    v:{ pctA:57, pctB:43,
      analyse:"Chloé, ta joie qui déborde est adorable et sincère — personne ne te reproche d'être heureuse. Mais un moment convenu à deux (« on l'annonce ensemble dimanche ») que tu court-circuites la veille, ça prive Romain d'un souvenir irremplaçable. Léger avantage à Romain. Le vrai sujet : vous vivez le bonheur à deux vitesses. Chloé partage vers l'extérieur pour le décupler ; Romain veut d'abord le savourer en intimité. Aucune façon n'est mauvaise — mais un projet commun (une demande, une annonce) mérite un accord commun avant d'être livré au monde.",
      pacteA:"Je dis à Chloé ce qui compte pour moi AVANT, pas ma déception après.",
      pacteB:"Pour les grands moments à deux, je demande « on annonce quand ? » avant de poster.",
      mot:"La plus belle nouvelle mérite d'être vécue à deux, d'abord. 💍" }
  },
  {
    id:"d10", cat:"Coloc", emoji:"🔥", title:"Son copain vit ici sans payer de loyer",
    a:"Adam", b:"Sofia", hook:"3 personnes dans l'appart. 2 sur le bail. 1 qui mange tout.",
    msgs:[
      {r:"A",n:"Adam",t:"Ton copain est là 6 nuits sur 7. Il utilise l'eau chaude, le chauffage, le wifi, il vide le frigo. On paie les charges à deux mais on vit à trois. Soit il participe, soit il lève un peu le pied."},
      {r:"B",n:"Sofia",t:"C'est mon copain, il dort dans MA chambre, il ne prend pas de place en plus. Tu veux vraiment me facturer mon histoire d'amour ?"},
      {r:"A",n:"Adam",t:"Je ne facture pas ton amour, je facture 30% de charges en plus depuis qu'il squatte. Regarde la dernière facture d'élec, elle a explosé."},
      {r:"B",n:"Sofia",t:"Ok la facture a monté, c'est vrai. Mais « squatte » c'est méchant, c'est quelqu'un que j'aime."},
    ],
    v:{ pctA:72, pctB:28,
      analyse:"Adam, ta demande est factuelle : une présence quasi permanente qui consomme les charges communes doit contribuer. La facture qui grimpe te donne raison. Point pour toi. Sofia, l'amour n'est pas en cause — mais « il ne prend pas de place » est faux dès qu'on parle d'eau chaude, de chauffage et de frigo. Le vrai sujet : une frontière floue entre « invité » et « habitant » qui pèse financièrement sur Adam. La solution n'est pas d'expulser l'amour, c'est de nommer la réalité : au-delà de X nuits par mois, on participe. Rien de méchant, juste de l'équité.",
      pacteA:"Je propose un seuil clair et une participation, sans viser ta relation.",
      pacteB:"J'accepte qu'il participe aux charges quand il est là autant. C'est juste.",
      mot:"L'amour est gratuit. L'eau chaude, non. 🔥" }
  },
  {
    id:"d11", cat:"Couple", emoji:"📸", title:"Il ne me prend jamais en photo",
    a:"Noémie", b:"Sami", hook:"200 photos de paysages. 0 d'elle. Le voyage entier.",
    msgs:[
      {r:"A",n:"Noémie",t:"Une semaine en Grèce. Je regarde ta pellicule : 200 photos de couchers de soleil, de plats, de ruelles. De MOI ? Zéro. Pas une. J'ai l'impression de ne pas avoir existé pendant ce voyage."},
      {r:"B",n:"Sami",t:"Je vis les moments au lieu de les mettre en scène. Je te regarde en vrai, pas à travers un écran. Je pensais que tu apprécierais qu'on soit présents au lieu de faire des shootings."},
      {r:"A",n:"Noémie",t:"Sauf que tu prends 200 photos de bâtiments. Donc c'est pas « vivre l'instant », c'est juste que je ne suis pas dans le cadre."},
      {r:"B",n:"Sami",t:"Aïe. Dit comme ça… je n'avais pas réalisé le déséquilibre."},
    ],
    v:{ pctA:69, pctB:31,
      analyse:"Sami, la défense « je vis l'instant » s'effondre net face à 200 photos de ruelles : si tu shootes des bâtiments mais jamais elle, ce n'est pas une philosophie, c'est un angle mort. Point pour Noémie. Ceci dit, Noémie, derrière la photo il y a un besoin plus grand : te sentir vue, choisie, mise au centre. Une image n'est qu'un symptôme. Le vrai sujet : Sami exprime peu par les gestes symboliques, et toi tu en as besoin pour te sentir aimée. Ça se corrige facilement — encore faut-il le dire en clair plutôt qu'en comptant les photos.",
      pacteA:"Je dis « j'ai besoin de me sentir vue » plutôt que de compter les clichés.",
      pacteB:"Je te photographie, toi. Tu es le plus beau paysage du voyage, et je te le montre.",
      mot:"Le plus beau décor du voyage, c'était vous deux. 📸" }
  },
  {
    id:"d12", cat:"Famille", emoji:"👶", title:"Sa mère débarque sans prévenir avec le bébé",
    a:"Julie", b:"Marc", hook:"« Je passais dans le coin. » À 7h30. Avec les clés.",
    msgs:[
      {r:"A",n:"Julie",t:"Ta mère a un double des clés « pour les urgences ». Ce matin elle débarque à 7h30 pendant que j'allaite, en peignoir je te rappelle, « je passais dans le coin ». Elle a pris le bébé des bras sans demander. Je n'ai plus aucune intimité."},
      {r:"B",n:"Marc",t:"Elle est folle de son petit-fils, elle veut juste aider. Tu sais à quel point elle attendait ce bébé. Lui retirer les clés, ça va la briser."},
      {r:"A",n:"Julie",t:"Et moi ? Je me sens en visite chez moi. J'ai besoin de souffler, de créer notre bulle à trois, pas d'être inspectée à 7h30."},
      {r:"B",n:"Marc",t:"Je comprends… mais entre ma mère et toi, je me sens écartelé, je ne sais pas comment faire."},
    ],
    v:{ pctA:75, pctB:25,
      analyse:"Julie, une jeune mère a droit à son intimité, surtout dans les premières semaines. Une belle-mère qui entre avec les clés à 7h30 et prend le bébé sans demander, aussi aimante soit-elle, franchit une frontière. Net point pour toi. Marc, ton amour pour ta mère et ta peur de la « briser » sont réels, mais ils t'ont mis en position de spectateur pendant que ta compagne étouffe. Le vrai sujet : Marc doit passer d'« écartelé » à « protecteur du foyer ». Poser un cadre à sa mère (sonner, prévenir, rendre les clés) n'est pas la trahir : c'est protéger la bulle dont ton enfant a besoin.",
      pacteA:"Je dis mon besoin d'intimité sans culpabiliser, c'est légitime.",
      pacteB:"Je parle à ma mère avec tendresse : on sonne, on prévient. Je protège notre bulle.",
      mot:"Un nid a besoin de calme pour grandir. Protégez le vôtre. 👶" }
  },
  {
    id:"d13", cat:"Couple", emoji:"🚗", title:"Elle conduit, il commente. Tout le temps.",
    a:"Fatou", b:"Damien", hook:"« Freine. Là. LÀ. » 400 km de copilote non désiré.",
    msgs:[
      {r:"A",n:"Fatou",t:"400 km de route. 400 km de « freine », « double pas », « tu es trop à droite », « attention le camion ». J'ai mon permis depuis 12 ans, zéro accident. Toi tu as bousillé deux voitures. Mais c'est moi qu'on corrige."},
      {r:"B",n:"Damien",t:"Je fais juste attention à notre sécurité, je vois des trucs que tu ne vois pas forcément. Ce n'est pas contre toi, c'est du réflexe."},
      {r:"A",n:"Fatou",t:"Ton « réflexe » me déconcentre et me stresse. C'est justement TON stress qui rend la route dangereuse, pas ma conduite."},
      {r:"B",n:"Damien",t:"Ok, peut-être que j'en fais trop. Mais avoue que parfois tu freines tard."},
    ],
    v:{ pctA:71, pctB:29,
      analyse:"Fatou, les faits sont de ton côté : 12 ans sans accident contre deux voitures abîmées, c'est un argument d'autorité difficile à contredire. Un copilotage permanent qui stresse la conductrice augmente le risque au lieu de le réduire : point pour toi. Damien, ton intention (la sécurité) est bonne mais ton exécution est contre-productive, et le « avoue que tu freines tard » en fin de dispute montre que tu as du mal à lâcher le contrôle. Le vrai sujet : ce n'est pas la conduite, c'est la confiance. Commenter en continu, c'est dire « je ne te fais pas confiance » — même sans le penser.",
      pacteA:"Je dis calmement « laisse-moi conduire » au lieu d'accumuler puis d'exploser.",
      pacteB:"Je me tais et je respire. Tu conduis mieux que moi, la preuve est chiffrée.",
      mot:"Faire confiance, c'est aussi lâcher le volant imaginaire. 🚗" }
  },
  {
    id:"d14", cat:"Couple", emoji:"🎂", title:"Il a oublié mon anniversaire (mais pas le match)",
    a:"Awa", b:"Greg", hook:"Aucun message à 00h. Mais un rappel pour le match à 21h.",
    msgs:[
      {r:"A",n:"Awa",t:"Minuit, mon anniversaire, aucun message de toi. Le lendemain midi, rien. Mais tu avais mis un rappel « MATCH 21H » sur le frigo depuis une semaine. Tu vois le classement dans ta tête, là ?"},
      {r:"B",n:"Greg",t:"J'ai eu une semaine de dingue au boulot, j'étais complètement noyé. J'allais te le souhaiter en rentrant, avec un cadeau. Tu ne me laisses même pas le temps."},
      {r:"A",n:"Awa",t:"« Noyé » mais pas au point d'oublier ton match. C'est ça qui fait mal, Greg. La charge mentale, tu la réserves à ce qui t'amuse."},
      {r:"B",n:"Greg",t:"C'est vrai que dit comme ça… j'ai mis de l'énergie sur le match et zéro sur ta date. Je n'ai pas d'excuse."},
    ],
    v:{ pctA:80, pctB:20,
      analyse:"Greg, « j'étais noyé » ne tient pas quand on a trouvé la ressource mentale de noter un match une semaine à l'avance. Ce contraste dit tout : ce n'est pas un problème de mémoire, c'est un problème d'attention sélective. Gros point pour Awa. À ton crédit, tu le reconnais à la fin sans te défendre, et c'est précieux. Le vrai sujet : Awa ne réclame pas un cadeau, elle réclame de compter autant que ce qui t'enthousiasme. Un anniversaire oublié pendant qu'un match est noté, c'est un message involontaire sur la hiérarchie de ton cœur. À toi de le corriger.",
      pacteA:"Je dis « j'ai besoin de compter pour toi » au lieu d'encaisser en silence.",
      pacteB:"Je mets TES dates dans mon agenda comme mes matchs. Tu passes en tête.",
      mot:"Ce qu'on note, c'est ce qui compte. Note-la. 🎂" }
  },
  {
    id:"d15", cat:"Amis", emoji:"🤐", title:"Elle a répété mon secret à tout le groupe",
    a:"Rania", b:"Lucie", hook:"« Je pensais qu'ils savaient déjà. » Ils ne savaient pas.",
    msgs:[
      {r:"A",n:"Rania",t:"Je t'ai confié UNE chose, en te disant « ça reste entre nous ». Trois jours après, tout le groupe est au courant. Une amie m'a même dit « désolée pour ta nouvelle ». Je me suis sentie trahie et nue devant tout le monde."},
      {r:"B",n:"Lucie",t:"Je pensais sincèrement qu'ils étaient déjà au courant, tu en avais parlé si librement devant moi que j'ai cru que c'était public. Je suis vraiment désolée, ce n'était pas malveillant."},
      {r:"A",n:"Rania",t:"« Librement devant TOI » parce que je te faisais confiance. Ce n'est pas parce que je te le dis à toi que c'est ouvert à tous."},
      {r:"B",n:"Lucie",t:"Tu as raison. J'ai confondu « me le dire » et « le rendre public ». Je m'en veux."},
    ],
    v:{ pctA:64, pctB:36,
      analyse:"Rania, un secret explicitement confié (« ça reste entre nous ») qui se retrouve dans tout le groupe, c'est une faute de confiance, même sans intention de nuire. Point pour toi. Lucie, ta méprise est crédible — se confier à quelqu'un peut donner l'illusion que « c'est déjà su » — et ton mea culpa est franc, ce qui compte énormément. Le vrai sujet : la frontière entre « je te le dis à toi » et « c'est public » doit être dite à voix haute, parce qu'elle n'est jamais évidente pour celui qui écoute. Une amitié survit à une gaffe reconnue ; elle survit mal au déni.",
      pacteA:"Je dirai clairement « ça, personne d'autre » quand c'est vraiment confidentiel.",
      pacteB:"Devant un secret, je demande « je peux en parler ? » avant. Toujours.",
      mot:"Un secret confié est un cadeau fragile. Protégez-le. 🤐" }
  },
  {
    id:"d16", cat:"Couple", emoji:"🧳", title:"Elle fait les valises 3h avant, lui la veille",
    a:"Inès", b:"Paul", hook:"Vol à 6h. Lui, 2h du matin, cherche son passeport.",
    msgs:[
      {r:"A",n:"Inès",t:"Vol à 6h. À 2h du matin tu retournes l'appart pour trouver ton passeport, tu n'as rien préparé. Résultat : je n'ai pas dormi, on a failli le rater, et j'ai géré TES affaires en plus des miennes. Encore."},
      {r:"B",n:"Paul",t:"On l'a eu, le vol, non ? Je fonctionne dans l'urgence, ça me réussit. Toi tu prépares tes valises trois jours avant et tu stresses pour rien pendant 72h."},
      {r:"A",n:"Inès",t:"Je ne stresse pas « pour rien », je stresse parce que je sais que je vais devoir gérer ton bordel à ta place. Ton « urgence », c'est ma charge mentale."},
      {r:"B",n:"Paul",t:"Ok, c'est vrai que c'est souvent toi qui rattrapes. Je n'avais pas vu ça comme ça."},
    ],
    v:{ pctA:66, pctB:34,
      analyse:"Paul, « on l'a eu le vol » masque le vrai coût : ta désorganisation devient systématiquement le travail d'Inès. Fonctionner dans l'urgence est un choix personnel légitime — tant qu'il ne se paie pas sur le sommeil et la charge mentale de l'autre. Point pour Inès. Cela dit, Inès, préparer trois jours avant peut aussi déborder sur Paul en pression ambiante. Le vrai sujet : vous avez deux rapports au temps opposés, et aujourd'hui c'est toujours le même qui absorbe le stress de l'autre. La solution n'est pas de vous convertir mutuellement, mais de séparer les responsabilités : chacun gère SES affaires, point.",
      pacteA:"J'arrête de rattraper ses oublis. Ses affaires, c'est son périmètre.",
      pacteB:"Je prépare MON sac la veille au soir. Mon urgence ne déborde plus sur toi.",
      mot:"Deux rythmes peuvent cohabiter — sans que l'un porte l'autre. 🧳" }
  },
  {
    id:"d17", cat:"Couple", emoji:"💬", title:"Il raconte notre vie privée à ses potes",
    a:"Maya", b:"Yanis", hook:"Ses potes savaient. Pour la dispute. Pour tout.",
    msgs:[
      {r:"A",n:"Maya",t:"On voit tes potes samedi. L'un d'eux me lance en rigolant « alors, réconciliés depuis jeudi ? ». Ils savaient TOUT de notre dispute, dans les détails. Tu leur racontes notre intimité comme un feuilleton ?"},
      {r:"B",n:"Yanis",t:"Ce sont mes meilleurs amis, je leur parle de ma vie, c'est normal. Je décompresse avec eux. Toi tu en parles bien à ta sœur, non ?"},
      {r:"A",n:"Maya",t:"À ma sœur, en privé, une personne. Pas à un groupe de cinq gars qui me regardent ensuite en coin. La différence est énorme."},
      {r:"B",n:"Yanis",t:"Ouais… en fait je n'ai jamais réfléchi à ce que TOI tu ressentais quand ils te croisent après."},
    ],
    v:{ pctA:62, pctB:38,
      analyse:"Maya, il y a une vraie différence entre confier ses états d'âme à UNE personne de confiance et livrer les détails de votre intimité à un groupe qui te reçoit ensuite avec des sous-entendus. Point pour toi. Yanis, se confier à ses amis est sain — le problème n'est pas QUE tu parles, c'est QUOI et À QUEL NIVEAU de détail. Le vrai sujet : vous n'avez jamais défini ce qui relève du « nous » privé et ce qui peut sortir. Yanis a besoin de décompresser, Maya a besoin de ne pas être exposée. Les deux besoins sont compatibles — avec une règle claire sur ce qui reste dedans.",
      pacteA:"Je dis ce qui me met mal à l'aise d'être partagé, sans t'interdire tes potes.",
      pacteB:"Nos détails intimes restent entre nous. Je décompresse sans tout exposer.",
      mot:"Ce qui se vit à deux se protège à deux. 💬" }
  },
  {
    id:"d18", cat:"Coloc", emoji:"🌡️", title:"La guerre du thermostat",
    a:"Bilal", b:"Enzo", hook:"Lui : 19°C, pull. Elle : 24°C, débardeur. Facture : 💸",
    msgs:[
      {r:"A",n:"Bilal",t:"Je te retrouve à monter le chauffage à 24°C en débardeur alors qu'on avait dit 20 pour la facture. Moi je mets un pull et j'assume. La dernière facture a pris 40%. On paie 50/50, je te rappelle."},
      {r:"B",n:"Enzo",t:"Je suis frileux, à 20°C je me caille, je n'arrive pas à bosser. Mettre un pull chez soi en permanence c'est déprimant. Le confort, ça a un prix aussi."},
      {r:"A",n:"Bilal",t:"Un prix qu'on partage à parts égales alors que c'est TON confort à toi. Si tu veux du 24, paie la différence."},
      {r:"B",n:"Enzo",t:"…Pas faux. Si je pousse le chauffage pour moi, c'est logique que j'en paie une part de plus."},
    ],
    v:{ pctA:60, pctB:40,
      analyse:"Bilal, une consigne commune (20°C) rompue unilatéralement avec +40% sur une facture partagée, ça penche de ton côté. Enzo, être frileux est une réalité physique, pas un caprice — mais imposer TON confort au portefeuille commun sans compensation, c'est là que ça coince. Le vrai sujet : vous confondez « équité » et « moitié-moitié aveugle ». Payer 50/50 un chauffage réglé pour un seul des deux n'est pas équitable. La solution qu'Enzo trouve lui-même en fin de dispute est la bonne : celui qui pousse le curseur paie le supplément. Confort respecté, facture juste.",
      pacteA:"J'accepte un thermostat un peu plus haut si le surcoût est partagé justement.",
      pacteB:"Je monte le chauffage si j'en paie la part supplémentaire. Logique.",
      mot:"L'équité, ce n'est pas 50/50 — c'est chacun selon son curseur. 🌡️" }
  },
  {
    id:"d19", cat:"Couple", emoji:"🥘", title:"« Tu ne cuisines jamais » vs « tu critiques toujours »",
    a:"Salomé", b:"Victor", hook:"Il cuisine une fois. Elle recale le sel. Guerre ouverte.",
    msgs:[
      {r:"A",n:"Salomé",t:"Je cuisine tous les soirs depuis des mois. Le jour où tu t'y mets enfin, super — sauf que je fais juste remarquer que c'est un peu salé et tu claques la porte. J'ai le droit de donner mon avis, non ?"},
      {r:"B",n:"Victor",t:"Je fais l'effort une fois, et la première chose que j'entends c'est une critique. Forcément que ça me coupe l'envie de recommencer. Un merci d'abord, ça aurait tué quelqu'un ?"},
      {r:"A",n:"Salomé",t:"J'ai dit « c'est bon mais un peu salé ». Ce n'est pas un procès. Si tu prends toute remarque comme une attaque, on ne va jamais y arriver."},
      {r:"B",n:"Victor",t:"Peut-être que j'ai été susceptible… mais toi tu vas droit au défaut sans voir l'effort."},
    ],
    v:{ pctA:54, pctB:46,
      analyse:"Presque à égalité. Salomé, ton avis est légitime et « bon mais un peu salé » n'a rien d'un procès — tu portes la charge des repas depuis des mois, ça compte. Mais Victor, quand quelqu'un se lance pour la première fois, le premier mot qu'il entend oriente sa suite : commencer par le défaut, même léger, éteint l'élan. Vous avez tous les deux raison sur un point et tort sur l'autre. Le vrai sujet : Salomé veut du partage en cuisine, Victor veut de la reconnaissance quand il essaie. Un « merci d'avoir cuisiné » AVANT le retour sur le sel, et l'un comme l'autre obtiennent ce qu'ils cherchent.",
      pacteA:"Je commence par valoriser l'effort avant de glisser une remarque.",
      pacteB:"J'accueille un retour sans le prendre pour une attaque. Et je recommence.",
      mot:"Encourager l'élan aujourd'hui, c'est dîner à deux demain. 🥘" }
  },
  {
    id:"d20", cat:"Couple", emoji:"📵", title:"Le téléphone au lit, chaque soir",
    a:"Océane", b:"Rayan", hook:"« Bonne nuit » à l'écran. Jamais à elle.",
    msgs:[
      {r:"A",n:"Océane",t:"Tous les soirs, même scène : on se couche, tu scrolles 45 minutes, écran bleu dans le noir, moi je fixe le plafond. On ne se dit même plus bonne nuit en se regardant. J'ai l'impression de dormir à côté d'un écran, pas d'un mec."},
      {r:"B",n:"Rayan",t:"C'est mon seul moment pour décompresser de la journée, je décroche le cerveau. Toi aussi tu es sur ton téléphone parfois, on ne va pas se mentir."},
      {r:"A",n:"Océane",t:"Parfois, oui. Toi c'est TOUS les soirs, 45 minutes, sans exception. Nos derniers mots avant de dormir, c'est plus « bonne nuit », c'est le silence d'un scroll."},
      {r:"B",n:"Rayan",t:"…C'est vrai qu'on ne se parle plus le soir. Je ne m'en étais pas rendu compte, ça m'a filé entre les doigts."},
    ],
    v:{ pctA:67, pctB:33,
      analyse:"Rayan, décompresser est un besoin réel, et Océane n'est pas exempte d'écran — mais 45 minutes tous les soirs sans exception, ça ne « décompresse » plus, ça remplace la connexion du soir. Point pour Océane. Le vrai sujet dépasse le téléphone : c'est le dernier moment de la journée, celui où un couple se retrouve, qui a été colonisé par le scroll. Ta prise de conscience finale (« ça m'a filé entre les doigts ») est juste : personne n'a décidé ça, l'habitude s'est installée seule. Reprendre 10 minutes sans écran avant de dormir, ce n'est pas une punition — c'est récupérer votre couple là où il se perd.",
      pacteA:"Je propose un rituel du soir à deux plutôt que de fixer le plafond en silence.",
      pacteB:"Je pose le téléphone 15 minutes avant de dormir. Ces minutes sont à nous.",
      mot:"Les derniers mots du jour méritent un visage, pas un écran. 📵" }
  },
  {
    id:"d21", cat:"Famille", emoji:"🍽️", title:"Sa sœur s'invite à tous nos dîners",
    a:"Nadia", b:"Fabien", hook:"Dîner en amoureux prévu. Sa sœur, déjà à table.",
    msgs:[
      {r:"A",n:"Nadia",t:"On avait prévu un dîner tous les deux, j'avais cuisiné, allumé des bougies. Je sors de la douche : ta sœur est installée au salon, « je passais dire coucou ». Elle est restée tout le repas. Encore. C'est la quatrième fois ce mois-ci."},
      {r:"B",n:"Fabien",t:"Elle traverse une période difficile depuis sa rupture, je ne peux pas la mettre dehors. Elle se sent seule, notre appart c'est un refuge pour elle."},
      {r:"A",n:"Nadia",t:"Je compatis vraiment pour elle. Mais notre couple aussi a besoin de moments à deux. Là, on n'en a plus un seul. Son refuge est en train de devenir notre absence d'intimité."},
      {r:"B",n:"Fabien",t:"Je suis pris entre elle et toi et je gère mal. Je n'ose pas lui dire non, alors je te sacrifie toi. Formulé comme ça, c'est pas ok."},
    ],
    v:{ pctA:69, pctB:31,
      analyse:"Nadia, ta compassion pour ta belle-sœur est réelle et tu ne demandes pas de la rejeter — juste de préserver des moments à deux. Quatre dîners « en amoureux » colonisés en un mois, c'est trop : point pour toi. Fabien, ton cœur est au bon endroit, mais « je n'ose pas lui dire non alors je te sacrifie » est le nœud du problème, et tu le nommes toi-même avec lucidité. Le vrai sujet : soutenir ta sœur et protéger ton couple ne s'opposent pas — sauf quand l'un se fait TOUJOURS au prix de l'autre. Des moments dédiés à ta sœur ET des soirées protégées à deux : les deux sont possibles avec un cadre que toi seul peux poser.",
      pacteA:"Je propose des moments dédiés à ta sœur, pour protéger nos soirées à deux.",
      pacteB:"Je fixe un cadre tendre à ma sœur. Certaines soirées sont à nous, sans culpabilité.",
      mot:"Aider les siens sans s'oublier soi-même : c'est possible. 🍽️" }
  },
  {
    id:"d22", cat:"Couple", emoji:"💰", title:"Elle a vidé le compte commun pour des soldes",
    a:"Karim", b:"Léna", hook:"Compte commun « pour les projets ». Moins 600 € en soldes.",
    msgs:[
      {r:"A",n:"Karim",t:"Le compte commun, on l'a créé POUR notre projet d'appart, on met chacun 300 € par mois dedans. Je regarde : -600 €, dépensés en soldes. Manteau, sacs, chaussures. Notre apport, tu l'as transformé en dressing."},
      {r:"B",n:"Léna",t:"C'étaient des soldes exceptionnelles, -70%, j'ai fait des affaires en or, j'ai économisé plus que dépensé au fond. Et je compte tout rembourser le mois prochain, calme-toi."},
      {r:"A",n:"Karim",t:"« Économiser en dépensant », c'est le raisonnement qui a vidé notre projet. Ce compte n'était pas à toi, il était à NOUS, avec un but précis."},
      {r:"B",n:"Léna",t:"Tu as raison sur le fond… je n'aurais pas dû toucher à ce compte-là. Je me suis emballée."},
    ],
    v:{ pctA:76, pctB:24,
      analyse:"Léna, « j'ai économisé en dépensant » est le sophisme classique des soldes — on ne fait pas d'économie en achetant ce qu'on n'avait pas prévu. Mais le vrai problème n'est même pas la dépense : c'est d'avoir puisé dans un compte à finalité commune et convenue (l'appart) pour des achats personnels. Ça, c'est une rupture de pacte : gros point pour Karim. À ton crédit, tu le reconnais vite et sans te braquer. Le vrai sujet : la frontière entre « argent perso » et « argent projet » doit être étanche, sinon le compte commun devient un self-service et le projet meurt en silence. Un compte projet qu'on ne touche pas, un compte perso pour les coups de cœur : simple et sain.",
      pacteA:"Je propose des comptes séparés du projet, pour que l'apport reste sacré.",
      pacteB:"Je ne touche plus au compte projet. Mes coups de cœur sortent de MON compte.",
      mot:"Un projet à deux se protège comme un trésor. 💰" }
  },
  {
    id:"d23", cat:"Couple", emoji:"👗", title:"« Tu ne me trouves plus belle »",
    a:"Prune", b:"Adrien", hook:"Elle se prépare une heure. Il ne lève pas les yeux.",
    msgs:[
      {r:"A",n:"Prune",t:"Je me suis préparée une heure pour notre sortie, robe neuve, tout. Je descends, tu es sur le canap, tu lèves à peine les yeux : « ok on y va ? ». Pas un mot. Avant tu me regardais. Là je me sens invisible."},
      {r:"B",n:"Adrien",t:"Mais je te trouve belle tous les jours, tu le sais ! Je ne vais pas faire un discours à chaque fois. C'est évident pour moi, tu n'as pas besoin que je le dise."},
      {r:"A",n:"Prune",t:"« Évident pour toi » ne me sert à rien si je ne l'entends jamais. Ce n'est pas un discours que je demande, c'est un regard, trois mots."},
      {r:"B",n:"Adrien",t:"Je pensais bien faire en trouvant ça acquis… mais c'est pas parce que je le pense que tu le ressens. J'ai zappé ça."},
    ],
    v:{ pctA:65, pctB:35,
      analyse:"Adrien, « c'est évident donc pas besoin de le dire » est l'un des pièges les plus courants de l'amour installé : ce qui n'est pas exprimé n'est pas reçu. Prune ne quémande pas un compliment, elle réclame d'exister dans ton regard. Point pour elle. Ta bonne foi n'est pas en cause — tu penses vraiment qu'elle est belle — mais un sentiment gardé en silence ne nourrit personne. Le vrai sujet : Prune a besoin de mots et de regards pour se sentir désirée ; toi, tu crois que la constance suffit à tout dire. Les deux sont réels, mais c'est TOI qui as le pouvoir de combler le manque, en trois secondes et trois mots.",
      pacteA:"Je dis « j'ai besoin que tu me le montres » sans le vivre comme une faiblesse.",
      pacteB:"Je te le dis ET je te regarde. Ce qui est évident pour moi deviendra audible pour toi.",
      mot:"L'évidence tue en silence. Dites-la à voix haute. 👗" }
  },
  {
    id:"d24", cat:"Amis", emoji:"🎤", title:"Il a annulé mon anniv pour un date",
    a:"Dylan", b:"Marco", hook:"« Je serai là c'est sûr. » 18h : « désolé un imprévu ». L'imprévu s'appelait Julia.",
    msgs:[
      {r:"A",n:"Dylan",t:"Mon anniv, j'avais réservé une salle, compté sur toi, tu avais confirmé dix fois « je serai là c'est sûr ». À 18h, deux heures avant : « désolé mec, imprévu ». J'apprends après que « l'imprévu », c'était un date Tinder. Tu m'as lâché pour une inconnue."},
      {r:"B",n:"Marco",t:"Ça faisait des semaines que je parlais à cette fille, elle n'était dispo QUE ce soir-là, c'était ma seule chance. Je me suis dit que tu comprendrais, on est potes depuis 15 ans."},
      {r:"A",n:"Dylan",t:"Justement, 15 ans, et tu me lâches pour un premier date au dernier moment ? Si tu m'avais dit la vérité une semaine avant, j'aurais compris. Là c'est le mensonge et le timing qui puent."},
      {r:"B",n:"Marco",t:"Ouais… j'ai menti sur le motif parce que je savais que c'était moche. Et lâcher deux heures avant, c'est indéfendable. Désolé."},
    ],
    v:{ pctA:79, pctB:21,
      analyse:"Marco, deux fautes se cumulent : le lâchage deux heures avant un événement réservé, et surtout le mensonge sur le motif. Une rencontre qui compte peut se défendre — mais elle se dit à l'avance et honnêtement, pas en abandonnant un ami la veille avec un faux prétexte. Gros point pour Dylan. À ton honneur, tu ne te caches pas derrière des excuses à la fin. Le vrai sujet : Dylan ne t'en veut pas d'avoir une vie amoureuse, il t'en veut d'avoir été traité comme l'option qu'on jette quand mieux se présente — et d'avoir été mené en bateau. La confiance de 15 ans mérite la vérité, même quand elle est inconfortable.",
      pacteA:"Je dirai ma déception au lieu de ravaler et de m'éloigner en silence.",
      pacteB:"Je serai honnête sur mes choix, même moches, et je ne lâche plus au dernier moment.",
      mot:"Quinze ans d'amitié valent bien une vérité. 🎤" }
  },
  {
    id:"d25", cat:"Couple", emoji:"🧹", title:"La charge mentale invisible",
    a:"Hélène", b:"Bruno", hook:"« Tu n'avais qu'à demander. » Elle a passé 4 ans à demander.",
    msgs:[
      {r:"A",n:"Hélène",t:"Rendez-vous médecin des enfants, cadeaux d'anniversaire, stock de PQ, dentiste, listes de courses, papiers de l'école : c'est moi, tout, tout le temps. Quand je craque tu réponds « tu n'avais qu'à demander ». Mais demander, c'est ENCORE du travail. Le travail de penser à tout, tu ne le vois même pas."},
      {r:"B",n:"Bruno",t:"Mais je t'aide dès que tu me dis quoi faire ! Je passe l'aspi, je fais la vaisselle, je vais chercher les enfants. Je ne refuse jamais. Tu ne peux pas dire que je ne fais rien."},
      {r:"A",n:"Hélène",t:"« Dès que je te dis quoi faire », voilà le problème. Tu es un exécutant qui attend les ordres. Moi je suis la cheffe de projet H24 qui n'a jamais de pause mentale. Ce n'est pas la même fatigue."},
      {r:"B",n:"Bruno",t:"…Je crois que je n'avais jamais compris que « penser à tout » était un travail en soi. Je voyais juste les tâches, pas la charge de les anticiper."},
    ],
    v:{ pctA:77, pctB:23,
      analyse:"Hélène, tu mets des mots sur l'une des inégalités les plus invisibles du couple : la différence entre EXÉCUTER une tâche et PORTER la responsabilité d'y penser. « Tu n'avais qu'à demander » place toute la charge d'anticipation sur toi, et c'est épuisant précisément parce que ça ne se voit pas. Gros point pour toi. Bruno, tu n'es ni paresseux ni de mauvaise foi — tu aides réellement — mais tu confonds « aider » et « co-porter », et ta prise de conscience finale est le vrai début de la solution. Le vrai sujet : tant que l'un demande et l'autre exécute, il n'y a pas deux adultes qui gèrent, il y en a un qui délègue et un qui obéit. Prendre des DOMAINES entiers (pas des tâches) rééquilibre tout.",
      pacteA:"Je lâche des domaines entiers au lieu de tout superviser, et j'accepte le lâcher-prise.",
      pacteB:"Je prends la responsabilité COMPLÈTE de domaines à moi. Je pense, j'anticipe, je gère.",
      mot:"Partager la charge, ce n'est pas aider — c'est porter, ensemble. 🧹" }
  },
  {
    id:"d26", cat:"Couple", emoji:"🎧", title:"Il écoute ses vocaux devant moi",
    a:"Zoé", b:"Tom", hook:"Un vocal d'une inconnue, haut-parleur, au dîner. « C'est rien. »",
    msgs:[
      {r:"A",n:"Zoé",t:"Au dîner, ton téléphone sonne, tu mets un vocal sur haut-parleur : une voix de fille, « coucou toi, tu m'as trop manqué, rappelle-moi vite ». Tu souris, tu coupes, « c'est rien, une amie ». Je te connais depuis deux ans, cette « amie » je ne l'ai jamais entendue une seule fois."},
      {r:"B",n:"Tom",t:"C'est vraiment une amie d'enfance, on s'est reconnectés récemment, c'est tout ! Le « tu m'as manqué » c'est sa façon de parler à tout le monde, elle est comme ça. Tu vois le mal partout."},
      {r:"A",n:"Zoé",t:"Peut-être. Mais tu la mentionnes jamais, tu souris bizarrement, et quand je demande tu balayes en « c'est rien ». C'est l'opacité qui me met mal, pas le vocal."},
      {r:"B",n:"Tom",t:"Ok, c'est vrai que je ne t'ai jamais parlé d'elle et que « c'est rien » ça ferme la porte. Je peux comprendre que ça crée un doute."},
    ],
    v:{ pctA:58, pctB:42,
      analyse:"Zoé, tu ne accuses pas sur des preuves d'infidélité — tu pointes une opacité, et tu as raison de distinguer les deux. Une amie d'enfance retrouvée, c'est plausible ; mais ne jamais la mentionner en deux ans puis balayer par « c'est rien », ça crée un flou que Tom entretient sans le vouloir. Léger avantage à toi. Tom, tu n'es peut-être coupable de rien — sauf de fermer la porte au lieu de rassurer, et tu le reconnais. Le vrai sujet : ce n'est pas la fille, c'est la transparence. Le doute ne naît pas d'un vocal, il naît d'un « c'est rien » qui empêche d'en parler. La clarté dissout ce que le mystère nourrit.",
      pacteA:"Je dis « j'ai besoin de transparence » plutôt que de soupçonner en silence.",
      pacteB:"Je te parle d'elle ouvertement. La clarté vaut mieux qu'un « c'est rien » qui inquiète.",
      mot:"Le doute meurt à la lumière. Éclairez, ne fermez pas. 🎧" }
  },
  {
    id:"d27", cat:"Coloc", emoji:"🎶", title:"Ses soirées jusqu'à 4h du matin",
    a:"Wassim", b:"Jordan", hook:"Réveil 6h30. Basse dans le mur jusqu'à l'aube.",
    msgs:[
      {r:"A",n:"Wassim",t:"Je bosse, réveil 6h30. Toi tu es étudiant, tu invites du monde trois soirs par semaine, musique à fond, rires, jusqu'à 4h. Le mur tremble. J'ai fait une réunion importante hier en dormant debout à cause de ta soirée du mardi."},
      {r:"B",n:"Jordan",t:"C'est chez moi aussi, j'ai le droit d'avoir une vie sociale ! Tu voudrais quoi, que je vive comme un moine parce que toi tu te lèves tôt ? On a des rythmes différents, c'est tout."},
      {r:"A",n:"Wassim",t:"Une vie sociale oui, jusqu'à 4h en semaine avec la basse dans mon mur, non. Je ne te demande pas d'arrêter, je te demande de baisser le son après minuit en semaine. C'est pas la lune."},
      {r:"B",n:"Jordan",t:"Bon… dit comme ça, en semaine je peux baisser d'un cran après minuit. Le week-end par contre je lâche rien."},
    ],
    v:{ pctA:64, pctB:36,
      analyse:"Wassim, le droit de dormir la nuit en semaine quand on travaille prime sur le droit de faire la fête à 4h à travers un mur commun — surtout que tu ne demandes ni le silence ni l'arrêt, juste une limite raisonnable après minuit en semaine. Point pour toi. Jordan, ta vie sociale est totalement légitime, et le week-end tu as raison de la défendre — mais « vivre comme un moine » est un homme de paille : personne ne t'a demandé ça. Le vrai sujet : deux rythmes de vie opposés sous un même toit, qui ne peuvent cohabiter que par un compromis explicite. Semaine calme après minuit / week-end libre : le deal que Jordan trouve lui-même est exactement le bon.",
      pacteA:"Je formule une limite précise (« après minuit en semaine ») au lieu d'accumuler.",
      pacteB:"Je baisse d'un cran en semaine après minuit. Le week-end reste à moi.",
      mot:"Deux rythmes, un toit, un compromis : et tout le monde dort. 🎶" }
  },
  {
    id:"d28", cat:"Couple", emoji:"✈️", title:"Elle a booké les vacances sans me demander",
    a:"Idris", b:"Manon", hook:"Vol, hôtel, dates : tout réservé. Il l'apprend par mail.",
    msgs:[
      {r:"A",n:"Idris",t:"Je reçois un mail de confirmation : vol pour la Sicile, hôtel, dates posées, 1400 € débités. Tu as TOUT réservé sans m'en parler une seule fois. J'apprends mes propres vacances par une notif. Et j'ai un impératif boulot exactement sur ces dates."},
      {r:"B",n:"Manon",t:"Je voulais te faire une surprise ! Ça fait des mois que tu dis qu'on ne part jamais, alors j'ai pris les choses en main. Je pensais te faire plaisir, et toi tu me tombes dessus."},
      {r:"A",n:"Idris",t:"L'intention est adorable, vraiment. Mais une surprise qui engage 1400 € et une semaine de MON agenda, ça aurait mérité au moins de vérifier mes dispos. Là je vais devoir gérer un conflit au boulot."},
      {r:"B",n:"Manon",t:"Tu as raison, dans mon élan je n'ai pas pensé à checker tes dates. La surprise ne devait pas devenir un problème pour toi."},
    ],
    v:{ pctA:55, pctB:45,
      analyse:"Match presque nul. Manon, ton geste part d'une vraie générosité et répond à un manque réel qu'Idris exprimait (« on ne part jamais ») — ça compte énormément, et Idris le reconnaît. Mais une surprise qui engage 1400 € communs ET une semaine de l'agenda de l'autre franchit la ligne entre « attention » et « décision unilatérale ». Léger avantage à Idris sur la méthode, pas sur l'intention. Le vrai sujet : vous voulez la même chose (partir, raviver le couple), mais l'un agit en solo par amour quand l'autre a besoin d'être associé aux décisions qui l'engagent. La bonne surprise, c'est la destination — pas les dates imposées.",
      pacteA:"Je reconnais l'intention avant de pointer le problème, elle le mérite.",
      pacteB:"Je garde la surprise sur le lieu, mais je vérifie tes dispos avant de réserver.",
      mot:"La plus belle surprise, c'est celle qu'on peut vraiment vivre à deux. ✈️" }
  },
  {
    id:"d29", cat:"Famille", emoji:"📞", title:"Il appelle sa mère 5 fois par jour",
    a:"Selin", b:"Gaël", hook:"Dîner, ciné, intimité : le téléphone sonne. C'est maman.",
    msgs:[
      {r:"A",n:"Selin",t:"Ta mère t'appelle cinq fois par jour et tu décroches à CHAQUE fois, même au restaurant, même au ciné, même au lit. Hier soir moment intime, téléphone qui sonne, tu réponds « oui maman ? ». Je me sens en troisième position dans mon propre couple."},
      {r:"B",n:"Gaël",t:"Elle est âgée, elle vit seule, si je ne réponds pas je m'inquiète qu'il lui soit arrivé quelque chose. Tu voudrais que j'ignore ma propre mère ? C'est aussi une question de respect."},
      {r:"A",n:"Selin",t:"Je ne te demande pas de l'ignorer, je te demande de ne pas décrocher en plein moment à deux pour un appel qui n'est presque jamais une urgence. Rappeler dix minutes après, ça change tout."},
      {r:"B",n:"Gaël",t:"C'est vrai que par réflexe je décroche toujours, même quand rien ne presse. Je pourrais filtrer et rappeler, sans la négliger."},
    ],
    v:{ pctA:66, pctB:34,
      analyse:"Selin, tu ne demandes pas à Gaël de délaisser sa mère âgée — tu demandes que les moments d'intimité ne soient pas systématiquement interrompus pour des appels rarement urgents. Cette nuance est juste : point pour toi. Gaël, ton inquiétude pour une mère seule est légitime et honorable, mais « décrocher par réflexe même quand rien ne presse » révèle une automaticité qui déborde sur ton couple. Ta solution finale (filtrer et rappeler) est exactement la bonne. Le vrai sujet : être un bon fils et un bon partenaire ne s'opposent pas — sauf quand le premier réflexe efface systématiquement le second. Rappeler dix minutes plus tard n'abandonne personne ; ça remet chaque relation à sa juste place.",
      pacteA:"Je dis mon besoin de moments protégés sans attaquer ta relation à ta mère.",
      pacteB:"Je filtre les appels dans nos moments à deux et je rappelle juste après. Personne n'est négligé.",
      mot:"On peut être un fils présent ET un partenaire présent. 📞" }
  },
  {
    id:"d30", cat:"Couple", emoji:"🎬", title:"Elle spoile toutes les séries",
    a:"Ravi", b:"Amélie", hook:"« Attends tu vas voir, celui-là il meurt à la fin. » Épisode 1.",
    msgs:[
      {r:"A",n:"Ravi",t:"On lance une nouvelle série ENSEMBLE, épisode 1, et à la dixième minute tu lâches « ah lui tu vas l'adorer, dommage qu'il meure à la fin ». Tu l'avais déjà vue en cachette sans me le dire, ET tu spoiles. Tu m'as tué trois séries comme ça ce mois-ci."},
      {r:"B",n:"Amélie",t:"Ça m'échappe, je suis tellement enthousiaste que ça sort tout seul ! Et puis savoir la fin ça n'enlève pas le plaisir du chemin, au contraire on apprécie mieux les détails. Tu dramatises pour une série."},
      {r:"A",n:"Ravi",t:"« Pour une série » c'était censé être un moment à deux, ma découverte, ma surprise. Tu me la voles à chaque fois. Et regarder sans moi alors qu'on avait dit qu'on la commençait ensemble, ça aussi ça pique."},
      {r:"B",n:"Amélie",t:"Ok, le coup de la regarder en avance en cachette, c'est pas fair-play, j'avoue. Et le spoil je peux vraiment me retenir si je fais l'effort."},
    ],
    v:{ pctA:70, pctB:30,
      analyse:"Amélie, deux choses se cumulent contre toi : regarder en avance une série promise « à deux » (une petite trahison du rituel), puis spoiler la surprise de Ravi. « Savoir la fin n'enlève rien » est ton opinion — mais ce n'est pas la sienne, et c'est LUI que ça prive de plaisir. Point pour Ravi. Ton honnêteté finale (« pas fair-play, j'avoue ») joue en ta faveur. Le vrai sujet est plus tendre qu'il n'y paraît : regarder une série ensemble, c'est un rituel de couple, un moment de découverte partagée. En prenant de l'avance et en spoilant, tu casses sans le vouloir un petit rendez-vous qui compte pour Ravi. Le retenir, c'est protéger ce rituel.",
      pacteA:"Je dis que ce rituel compte pour moi, au lieu de râler après coup.",
      pacteB:"Je regarde EN MÊME TEMPS que toi et je garde mes révélations pour moi. Promis.",
      mot:"Certaines découvertes se savourent à deux, sans raccourci. 🎬" }
  }
];
