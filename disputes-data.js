/* ============================================================
   LA BOÎTE À DISPUTES — dataset (fictif, anonymisé)
   Messages plus longs et réalistes (2-4 phrases), format stories.
   Catégorie "Intime" = sujets plus piquants (jalousie, ex, corps, fidélité).
   ============================================================ */
window.DISPUTES = [
  {
    id:"d01", cat:"Intime", emoji:"💋", title:"Il a triché, et ne comprend toujours pas le problème",
    a:"Léa", b:"Maxime", hook:"« Ça ne voulait rien dire. » Elle, si.",
    msgs:[
      {r:"A",n:"Léa",t:"J'ai trouvé les messages avec elle, frr. Tu lui écris des trucs que tu me dis même plus depuis des mois, et vous vous êtes vus deux fois « pour un verre entre collègues ». Je t'ai laissé une semaine pour venir m'en parler tout seul. T'as rien dit."},
      {r:"B",n:"Maxime",t:"Genre il s'est rien passé de ouf, on a juste discuté et bu un verre, c'est toi qui pars en vrille total. J'allais rien te dire parce que je savais direct que t'allais faire une prise de tête pour rien, à fouiller mon tel comme une PJ."},
      {r:"A",n:"Léa",t:"Nan mais t'inverses complet là. Le problème c'est pas que j'ai découvert, c'est CE que j'ai découvert. « Il s'est rien passé » pendant que tu lui envoies des trucs doux à minuit, ça c'est pas rien pour moi, askip."},
      {r:"B",n:"Maxime",t:"Ok j'ai géré ça comme un chacal, mais j'ai l'impression que quoi que je dise là tu vas juste tout prendre en négatif direct. Jsp même ce que tu veux que je te réponde de plus."},
    ],
    v:{ pctA:81, pctB:19,
      analyse:"Maxime, la question n'est pas de savoir si un acte physique a eu lieu — c'est de savoir si tu as entretenu, en secret, une proximité émotionnelle que tu réservais auparavant à Léa. Des mots tendres à minuit à quelqu'un d'autre, deux rencontres cachées, et surtout le choix conscient de ne rien dire tant que tu n'étais pas découvert : ce n'est pas une maladresse, c'est un choix répété. Gros point pour Léa. Ce qui inquiète le plus dans cet échange, ce n'est même pas la proximité avec cette collègue — c'est que tu ne te remets jamais en question sans qu'on te pousse dans tes retranchements, et que ta dernière phrase transforme encore Léa en problème plutôt que d'assumer le tien. Le vrai sujet : Léa a besoin de voir un vrai remords, pas une gestion de crise.",
      pacteA:"Je dis ce dont j'ai besoin pour reconstruire la confiance, précisément, sans deviner.",
      pacteB:"Je nomme ce que j'ai fait sans minimiser, et j'arrête de retourner la faute vers toi.",
      mot:"La confiance ne se répare pas en minimisant — elle se répare en regardant en face." }
  },
  {
    id:"d08", cat:"Couple", emoji:"🍝", title:"Il a mangé mes restes du resto",
    a:"Clara", b:"Malik", hook:"Une boîte de pâtes truffe. Un frigo. Un crime.",
    msgs:[
      {r:"A",n:"Clara",t:"J'avais gardé mes pâtes à la truffe du resto de mon anniv, celles que j'avais à peine touchées exprès pour les savourer peinarde ce soir. Je rentre du sport, la boîte est clean vide dans l'évier, et toi tu maté la télé comme si de rien. Même pas un mot laissé."},
      {r:"B",n:"Malik",t:"Y'avait aucune étiquette avec ton prénom dessus, et dans ce frigo ce qui traîne se mange depuis toujours, c'est la règle tacite chez nous. J'avais une petite dalle à minuit, j'ai pris ce qu'y avait, jsp que c'était si important pour toi."},
      {r:"A",n:"Clara",t:"« Ce qui traîne », sérieux ? C'était rangé tout en haut, dans MA boîte, avec mon nom écrit au marqueur, tu l'as forcément vu frr. C'est pas une question de règle de frigo, tu savais très bien d'où ça venait et pourquoi c'était spécial pour moi."},
      {r:"B",n:"Malik",t:"Ok j'ai vu ton nom, j'ai juste zappé l'idée que ça puisse compter à ce point pour un plat. J'aurais dû demander avant, jsp que ça allait devenir une prise de tête pareille."},
    ],
    v:{ pctA:66, pctB:34,
      analyse:"Malik, « ce qui traîne se mange » ne fonctionne plus quand la boîte est étiquetée à ton nom et rangée en évidence — tu l'as vu, tu l'admets toi-même. Ce n'est donc pas une question de règle floue du frigo, mais d'un choix conscient de consommer quelque chose qui portait clairement une intention. Point pour Clara. Mais Clara, un aliment n'est jamais qu'un aliment : ce que tu défends vraiment, c'est le droit de prolonger un beau souvenir d'anniversaire, pas des pâtes en tant que telles. Malik a « consommé » ton souvenir sans s'en rendre compte, et le vrai sujet dépasse le frigo : chez vous, rien n'est vraiment identifié comme sacré ou intouchable, et ça finit par créer ces petites intrusions qui piquent plus qu'elles n'en ont l'air.",
      pacteA:"Je dirai ce qui compte vraiment pour moi avant qu'un objet ne devienne le symbole d'une frustration.",
      pacteB:"Avant de finir quelque chose qui semble spécial, je demande. Trois secondes, zéro drame ensuite.",
      mot:"La prochaine boîte de pâtes truffe, partagez-la à deux." }
  },
  {
    id:"d02", cat:"Intime", emoji:"👀", title:"Elle revoit son ex, « juste un ami »",
    a:"Thibault", b:"Camille", hook:"Sept déjeuners en deux mois. « Juste un ami », dit-elle.",
    msgs:[
      {r:"A",n:"Thibault",t:"J'suis tombé sur votre historique en t'empruntant mon chargeur. Sept déj avec ton ex en deux mois, et tu m'en as jamais parlé une seule fois. Si c'était vraiment rien, pourquoi je l'apprends par hasard et pas par toi direct ?"},
      {r:"B",n:"Camille",t:"Parce que je savais que t'allais réagir exactement comme ça, en montant un truc de rien en drama total. C'est un ami, on parle de sa vie, de son taf, rien de spécial franchement. Si je t'en avais parlé t'aurais fait une scène pour du vent."},
      {r:"A",n:"Thibault",t:"Sept fois en deux mois c'est pas « rien de spécial », c'est une vraie place dans ta life que tu m'as cachée frère. Le sujet c'est même pas lui en vrai, c'est que tu savais que ça allait me piquer et t'as choisi le silence."},
      {r:"B",n:"Camille",t:"Ok le silence c'était une erreur, j'aurais dû assumer direct dès le début. Mais je vais pas sacrifier une amitié juste parce que ça te fait cocher des cases dans ta tête."},
    ],
    v:{ pctA:70, pctB:30,
      analyse:"Camille, personne ne te demande de sacrifier une amitié — mais sept rendez-vous réguliers gardés secrets ne relèvent plus de la simple discrétion, c'est une omission entretenue. Le fait que Thibault l'apprenne par accident, et non par toi, en dit long : tu savais que ce n'était pas neutre, sinon tu l'aurais mentionné en passant, comme n'importe quel déjeuner ordinaire. Point pour Thibault. Cela dit, Thibault, ta réaction ne doit pas devenir un contrôle de ses fréquentations — le sujet n'est pas « cet ex est interdit », c'est « rien ne devrait être cachée entre nous ». Camille le reconnaît en fin de dispute, ce qui est un bon point de départ : la transparence n'exclut pas les amitiés, elle exclut juste le secret.",
      pacteA:"Je ne te demande pas de rompre cette amitié, juste de ne plus rien me cacher à son sujet.",
      pacteB:"Je te parle de lui ouvertement désormais, sans filtrer ce que je crains que tu penses.",
      mot:"Une amitié honnête n'a jamais besoin d'être cachée." }
  },
  {
    id:"d09", cat:"Couple", emoji:"🎮", title:"Il a raté notre dîner pour une game",
    a:"Emma", b:"Lucas", hook:"Table réservée à 20h. Lui, en pleine ranked, « deux minutes ».",
    msgs:[
      {r:"A",n:"Emma",t:"J'avais réservé la table depuis deux semaines pour notre premier anniv de couple. À 20h t'étais encore en pleine ranked, casque vissé, tu m'as dit « deux minutes, on est en train de win, je peux pas quitter là ». On est arrivés à 21h passées, le resto avait déjà redonné notre table."},
      {r:"B",n:"Lucas",t:"C'était une game importante avec mon squad, si j'avais quit en plein milieu j'aurais fait perdre du LP à quatre potes qui comptaient sur moi ce soir-là, plus ça compte comme un abandon qui pénalise tout le monde. Je pouvais pas juste déco en pleine ranked sans prévenir."},
      {r:"A",n:"Emma",t:"Donc ton classement sur un jeu passe avant notre soirée qu'on avait prévue ensemble depuis un bail. C'est exactement le truc que je te remonte depuis des mois, tu captes jamais avant qu'il soit trop tard, askip."},
      {r:"B",n:"Lucas",t:"Dit comme ça je capte mieux à quel point ça a dû te vénère de m'attendre pour rien pendant une heure. J'aurais grave pu prévenir mon squad à l'avance que j'étais indispo après 19h45, y'a pas mort d'homme."},
    ],
    v:{ pctA:78, pctB:22,
      analyse:"Lucas, un engagement envers ton équipe en ligne peut être réel et légitime — perdre une game classée par abandon, ça compte pour de vrai. Mais ça se planifie à l'avance, et ça ne passe jamais devant un dîner d'anniversaire réservé depuis deux semaines. Faire perdre la table à Emma pour ne pas plomber une partie de rang, c'était un choix, et clairement le mauvais : gros point pour Emma. Le vrai sujet dépasse le jeu vidéo lui-même : Emma ne t'attaque pas sur ta passion, elle constate un classement de priorités où elle finit systématiquement en dernier quand un imprévu numérique se présente. Une passion n'est jamais le problème ; c'est le moment où elle t'empêche d'honorer la personne en face de toi qui l'est vraiment.",
      pacteA:"Je dirai mon besoin de me sentir prioritaire sans mépriser ta passion pour autant.",
      pacteB:"Je préviens mon équipe des dates qui comptent, à l'avance. Emma passe avant la ranked, sans exception.",
      mot:"Une passion se planifie. Un anniversaire ne se rejoue jamais." }
  },
  {
    id:"d03", cat:"Intime", emoji:"🔥", title:"« Mon corps m'appartient », dit-elle",
    a:"Nora", b:"Yanis", hook:"Elle danse serrée en soirée. Il rentre en silence.",
    msgs:[
      {r:"A",n:"Nora",t:"En soirée hier j'ai dansé collée avec Rayan, on riait, on chill un peu, et alors ? J't'ai jamais trompé, j't'ai jamais mytho, mais mon corps il est à moi et j'ai le droit de m'amuser sans que ce soit un crime chaque fois."},
      {r:"B",n:"Yanis",t:"J'te dis pas que tu m'appartiens, mais on est en couple wesh, et te voir danser comme ça avec un autre sans même un regard vers moi, ça m'a foutu un seum monstre toute la soirée. C'est pas ton corps le sujet, c'est ce que ÇA me fait à moi."},
      {r:"A",n:"Nora",t:"Donc je dois me censurer à chaque soirée pour gérer ta jalousie ? On a jamais posé clairement ce qu'on s'autorise dans ce couple, tu peux pas m'en vouloir sur une règle qu'on a jamais fixée ensemble, c'est chelou ton truc."},
      {r:"B",n:"Yanis",t:"C'est vrai qu'on en a jamais vraiment causé, chacun suppose sa version. Mais j'ai quand même besoin de savoir où sont les limites nous deux, même si c'est pas écrit noir sur blanc."},
    ],
    v:{ pctA:52, pctB:48,
      analyse:"Sujet délicat, et vous avez tous les deux une part de raison. Nora, ton corps t'appartient, c'est un fait, et personne ne devrait te dicter comment t'amuser par principe — mais un couple n'est pas fait que d'individus séparés, c'est aussi un accord tacite ou explicite sur ce qui se vit à deux. Yanis, ta blessure est réelle et légitime, sans pour autant que tu aies le droit de la transformer en interdiction générale de son comportement. Le vrai sujet ici n'est ni l'autonomie ni la jalousie : c'est que vous n'avez jamais défini ensemble ce que votre couple autorise ou non — exclusivité stricte, liberté totale, ou entre-deux. Tant que cette conversation n'aura pas eu lieu clairement, ce genre de soirée recommencera, avec la même incompréhension des deux côtés.",
      pacteA:"J'accepte de parler cadre avec toi, sans le vivre comme une atteinte à ma liberté.",
      pacteB:"Je nomme mes limites sans exiger qu'elles deviennent les tiennes par défaut.",
      mot:"La liberté et l'amour ont juste besoin d'un cadre dit à voix haute." }
  },
  {
    id:"d10", cat:"Couple", emoji:"🧹", title:"La charge mentale invisible",
    a:"Hélène", b:"Bruno", hook:"« Tu n'avais qu'à demander. » Elle a demandé, pendant 4 ans.",
    msgs:[
      {r:"A",n:"Hélène",t:"Les rdv médecin des enfants, les cadeaux d'anniv pour toute la famille, le stock de PQ, le dentiste, les papiers d'école : c'est moi, tout le temps, sans exception depuis quatre ans. Quand je craque et que je te le dis, tu réponds toujours « t'avais qu'à demander », mais demander c'est encore une charge mentale en plus pour moi."},
      {r:"B",n:"Bruno",t:"Mais je t'aide dès que tu me dis précisément quoi faire, je passe l'aspi, je fais la vaisselle presque tous les soirs, je récupère les enfants deux fois par semaine. Je refuse jamais une tâche qu'on me donne, tu peux pas dire que je glande à la maison."},
      {r:"A",n:"Hélène",t:"« Dès que je te dis quoi faire », voilà exactement le souci que je pointe depuis le début frère. T'es un exécutant nickel qui attend les ordres, moi je suis la cheffe de projet 24/7 qui a jamais de vraie pause tête, et c'est pas du tout la même fatigue."},
      {r:"B",n:"Bruno",t:"J'crois que j'avais jamais capté que penser à tout, anticiper tout, c'était un taf en soi, à part des tâches elles-mêmes. Je voyais que les trucs concrets à faire, jamais la charge invisible d'y penser en amont."},
    ],
    v:{ pctA:79, pctB:21,
      analyse:"Hélène, tu mets des mots précis sur l'une des inégalités les plus invisibles du couple moderne : la différence fondamentale entre exécuter une tâche qu'on te donne et porter la responsabilité complète d'y penser, de l'anticiper, de la planifier. « Tu n'avais qu'à demander » place toute la charge d'anticipation sur toi seule, et c'est épuisant précisément parce que ça ne se voit jamais de l'extérieur. Gros point pour toi. Bruno, tu n'es ni paresseux ni de mauvaise foi — tu participes réellement quand on te sollicite — mais tu confonds depuis longtemps « aider ponctuellement » et « co-porter la charge au même niveau », et ta prise de conscience finale est le vrai point de départ d'un changement. Tant que l'un demande et l'autre exécute, il n'y a pas deux adultes qui gèrent un foyer ensemble, il y en a un qui délègue en permanence et un qui obéit sans jamais anticiper.",
      pacteA:"Je lâche des domaines entiers de gestion au lieu de tout superviser depuis le dessus.",
      pacteB:"Je prends la responsabilité complète de domaines précis : je pense, j'anticipe, je gère sans qu'on me le demande.",
      mot:"Partager la charge, ce n'est pas aider — c'est porter, ensemble, au même niveau." }
  },
  {
    id:"d04", cat:"Intime", emoji:"📱", title:"Il est toujours actif sur Grindr",
    a:"Thomas", b:"Karim", hook:"« Actif à l'instant. » Sur l'appli qu'il jure avoir supprimée.",
    msgs:[
      {r:"A",n:"Thomas",t:"On s'était mis d'accord il y a trois mois : exclusifs, applis supprimées. Hier sur le compte d'un pote je tombe sur le tien, « actif à l'instant », avec nos photos de vacances en profil. Tu m'avais juré l'avoir supprimée frère, askip c'était réglé."},
      {r:"B",n:"Karim",t:"Je l'ai gardée juste pour causer avec des potes du milieu, je capte aucun message de drague, c'est devenu limite un réseau social pour moi. J't'ai pas menti sur l'essentiel, on reste exclusifs, ça bouge pas."},
      {r:"A",n:"Thomas",t:"Le souci c'est pas si tu dragues ou pas, c'est que tu m'as dit un truc et t'as fait l'inverse en douce pendant trois mois. Si c'était vraiment rien de grave, pourquoi tu m'as pas juste dit au lieu de me laisser croire que c'était clean ?"},
      {r:"B",n:"Karim",t:"Parce que je savais que ça allait te chauffer même si mon intention était clean. En le disant là, ouais, ça reste un mytho par omission, j'ai pas d'autre mot."},
    ],
    v:{ pctA:74, pctB:26,
      analyse:"Karim, l'intention derrière l'appli — discuter, réseauter — n'est peut-être pas malveillante, mais ce n'est pas la question posée. La question, c'est : un accord explicite pris à deux (supprimer les applis, être exclusifs) a été rompu en silence pendant trois mois, et découvert par accident plutôt que dit ouvertement. Ce point est net en faveur de Thomas. Ta lucidité finale — reconnaître que le silence ressemble à un mensonge même sans mauvaise intention — est précieuse et montre que tu peux entendre l'impact sans minimiser. Le vrai sujet : dans un couple, un accord qu'on ne respecte plus doit être renégocié à voix haute, jamais contourné en douce, même pour des raisons qui semblent inoffensives de l'intérieur.",
      pacteA:"Je te dis ma peur sans t'accuser d'avance la prochaine fois qu'un doute apparaît.",
      pacteB:"Je supprime vraiment l'appli, et si nos règles doivent changer, j'en parle avant, pas après.",
      mot:"Un accord de couple se renégocie à voix haute, jamais en silence." }
  },
  {
    id:"d11", cat:"Couple", emoji:"🎂", title:"Il a oublié mon anniversaire, pas le match",
    a:"Awa", b:"Greg", hook:"Minuit, aucun message. Mais un rappel « MATCH 21H » depuis une semaine.",
    msgs:[
      {r:"A",n:"Awa",t:"Minuit pile, mon anniv commence, zéro message de toi. Le lendemain midi, toujours rien. Mais sur le frigo y'a un post-it « MATCH 21H » que t'as toi-même collé y'a une semaine. Explique-moi comment ton cerveau classe les priorités là."},
      {r:"B",n:"Greg",t:"J'ai eu une semaine chaotique au taf, j'étais noyé sous les dossiers en retard, j'allais te le souhaiter direct en rentrant avec un vrai cadeau prévu depuis un moment. Tu me laisses même pas dix minutes avant de m'accuser de tout zapper."},
      {r:"A",n:"Awa",t:"« Noyé » au point d'oublier ma date de naissance, mais pas au point d'oublier un match planifié une semaine avant ? C'est exactement ce contraste qui me met le seum, Greg, pas l'oubli en lui-même."},
      {r:"B",n:"Greg",t:"Dit comme ça, ouais, j'ai clairement mis de l'énergie pour noter le match et zéro pour ta date pourtant tout aussi prévisible. J'ai aucune excuse solide à te sortir là-dessus, askip."},
    ],
    v:{ pctA:82, pctB:18,
      analyse:"Greg, « j'étais noyé » ne tient plus la route quand tu as trouvé, dans cette même semaine surchargée, la ressource mentale nécessaire pour noter un match de foot sur un post-it collé au frigo. Ce contraste dit tout : ce n'est pas un problème de mémoire défaillante, c'est un problème d'attention sélective, consciente ou non. Gros point pour Awa. À ton crédit, tu le reconnais rapidement en fin de dispute sans te chercher d'excuses tordues, ce qui est précieux et rare. Le vrai sujet : Awa ne réclame pas un cadeau somptueux, elle réclame de compter, dans ta tête, autant que ce qui t'enthousiasme spontanément. Un anniversaire oublié pendant qu'un match reste noté envoie un message involontaire mais réel sur l'ordre de tes priorités.",
      pacteA:"Je dis mon besoin de compter pour toi au lieu d'encaisser en silence chaque année qui passe.",
      pacteB:"Je mets tes dates importantes dans mon agenda exactement comme mes matchs. Tu passes en tête, sans exception.",
      mot:"Ce qu'on prend le temps de noter, c'est ce qui compte vraiment." }
  },
  {
    id:"d05", cat:"Intime", emoji:"💌", title:"Elle textote encore avec son ex",
    a:"Sarah", b:"Diane", hook:"« Bonne nuit ma belle. » De son ex. À 23h58.",
    msgs:[
      {r:"A",n:"Sarah",t:"Ton tel a vibré sur la table, notif affichée : « bonne nuit ma belle » de ton ex, à minuit moins deux. Ça fait six mois qu'on est ensemble et je découvre que vous vous envoyez encore des mots doux tous les soirs. Tu m'en as jamais causé, c'est chelou."},
      {r:"B",n:"Diane",t:"C'est une habitude gardée depuis notre rupture, y'a plus rien de romantique pour moi là-dedans, c'est devenu un rituel affectueux entre nous genre vieilles potes. Je capte que ça paraisse bizarre de dehors, mais pour moi c'est validé, aucun sujet."},
      {r:"A",n:"Sarah",t:"« Bonne nuit ma belle » chaque soir, c'est pas neutre pour moi même si toi tu le vis pas comme ça. Le fait que tu m'en aies jamais parlé alors que c'est quotidien, ça me fait sentir hors jeu d'un truc intime qui existait avant moi."},
      {r:"B",n:"Diane",t:"Ok je capte mieux, c'est pas une question de confiance en mon ex, c'est que tu te sens mise sur le côté d'un rituel qui te paraît chelou vu de dehors. Je peux lui en causer, ou changer la formule, sans couper le contact total."},
    ],
    v:{ pctA:63, pctB:37,
      analyse:"Diane, garder une tendresse avec une ex après une rupture peut être sain et ne mérite pas d'être jugé en soi — mais un rituel quotidien et affectueux gardé secret pendant six mois de relation, ce n'est plus une simple habitude anodine, c'est un espace intime que Sarah découvre sans y avoir jamais été invitée. Léger avantage à Sarah, pas parce que ton amitié est un problème, mais parce que le secret autour d'elle en devient un. Ta proposition finale — en parler avec ton ex plutôt que couper — est la bonne approche : mature, sans sacrifice inutile. Le vrai sujet : Sarah ne demande pas la fin de cette amitié, elle demande à ne plus la découvrir par surprise sur un écran qui s'allume à minuit.",
      pacteA:"Je dis mon malaise sans exiger la fin de cette amitié, juste plus de visibilité dessus.",
      pacteB:"J'intègre Sarah dans ce que je vis avec mon ex, au lieu de le garder dans un coin secret.",
      mot:"Une tendresse passée n'a pas besoin d'être secrète pour rester sincère." }
  },
  {
    id:"d19", cat:"Amis", emoji:"💸", title:"Elle ne rembourse jamais sa part",
    a:"Manon", b:"Jade", hook:"Trois ans d'amitié fidèle, 400 € de restos « on partage moitié-moitié ».",
    msgs:[
      {r:"A",n:"Manon",t:"À chaque resto qu'on fait ensemble depuis des années c'est toujours la même phrase : « je te fais un virement ce soir sans faute ». Le virement il arrive jamais, à aucun moment. J'ai fait les comptes récemment : presque 400 balles cumulés sur trois ans. Là j'ai avancé tout notre week-end à Lisbonne et tu esquives depuis, askip."},
      {r:"B",n:"Jade",t:"T'as vraiment gardé des comptes précis pendant trois ans sur notre amitié ? Je pensais qu'entre vraies potes on calculait pas les trucs comme ça. Ça me met super mal à l'aise que t'aies un tableau Excel sur notre relation, sérieux."},
      {r:"A",n:"Manon",t:"J'ai rien compté au début, jusqu'à ce que ça devienne systématique et que ça pèse sérieux sur mon budget mensuel. J'suis clairement pas ta banque perso dispo à volonté, frr."},
      {r:"B",n:"Jade",t:"Ok je te dois vraiment de l'argent, j'assume total maintenant. Mais t'aurais pu m'en causer avant que ça devienne officiellement un dossier chiffré entre nous."},
    ],
    v:{ pctA:69, pctB:31,
      analyse:"Manon, une dette occasionnelle entre amies proches, on laisse généralement couler sans y penser deux fois. Mais 400 euros accumulés de façon systématique qui pèsent concrètement sur ton budget personnel, ce n'est plus du tout anodin : point clair pour toi sur ce sujet précis. Jade, te sentir gênée par un « tableau Excel » évoqué est parfaitement humain et compréhensible, mais c'est surtout un écran de fumée pratique : tu détournes la conversation vers la culpabilisation de Manon au lieu d'aborder frontalement le remboursement qui traîne depuis trois ans. Le vrai sujet : Manon a laissé filer volontairement pendant trois années entières par peur sincère d'abîmer votre amitié, et ce silence prolongé a laissé la dette gonfler jusqu'à cette explosion actuelle. Une amitié solide survit très bien à un « tu me dois 400 euros » dit clairement ; elle survit beaucoup moins bien à un ressentiment accumulé secrètement pendant des années.",
      pacteA:"Je parlerai d'argent immédiatement la prochaine fois, avant que la situation ne pourrisse silencieusement entre nous.",
      pacteB:"Je te rembourse intégralement par échéances dès cette semaine précise. Fini les « ce soir sans faute » qui restent sans suite concrète.",
      mot:"Les bons comptes font vraiment les amitiés qui durent longtemps et sereinement." }
  },
  {
    id:"d06", cat:"Intime", emoji:"🎭", title:"Sorti en boîte comme célibataire",
    a:"Adrien", b:"Nathan", hook:"Alliance retirée avant d'entrer. « Pour pas se prendre la tête. »",
    msgs:[
      {r:"A",n:"Adrien",t:"Un pote m'a envoyé une story où on te voit en boîte hier soir, sans ton alliance, en train de chauffer un mec au bar. Tu m'avais dit « sortie entre potes tranquille ». Enlever ton alliance avant d'entrer, c'est pas un oubli frère, c'est un choix clair."},
      {r:"B",n:"Nathan",t:"Je l'ai enlevée parce que dans ce milieu-là, dire qu'on est marié ça change tout dans le regard des gens, tu deviens invisible ou tu prends une étiquette direct. Ça veut pas dire que je cherchais autre chose, je voulais juste danser peinard sans qu'on me case."},
      {r:"A",n:"Adrien",t:"Le souci c'est pas que tu danses ou que tu t'amuses, c'est que t'effaces volontairement notre mariage dans un endroit précis, comme si j'étais une case à cocher selon l'ambiance. Ça me fait sentir que notre couple existe genre seulement quand ça t'arrange."},
      {r:"B",n:"Nathan",t:"Dit comme ça je capte que ça ressemble à de la honte alors que c'est pas ça pour moi — mais l'effet est le même pour toi au final, et c'est ça qui compte, pas mon intention de base."},
    ],
    v:{ pctA:69, pctB:31,
      analyse:"Nathan, la pression sociale que tu décris dans certains milieux est réelle et personne ne la nie — mais retirer son alliance avant d'entrer n'est pas une simple précaution, c'est un geste actif qui efface Adrien de l'équation, dans un lieu précis, à un moment précis. Point pour Adrien : ce n'est pas une question de flirt ou de liberté, c'est une question de visibilité de votre couple, qui semble conditionnelle selon le contexte. Ta phrase finale est juste et courageuse : peu importe l'intention derrière le geste, c'est l'effet ressenti par ton mari qui doit primer dans cette discussion. Le vrai sujet : Adrien a besoin de sentir que votre mariage existe partout, pas seulement là où c'est confortable de l'assumer.",
      pacteA:"Je dis ce que je ressens sans transformer ça en jugement sur le milieu que tu fréquentes.",
      pacteB:"Je garde mon alliance, ou j'en parle avant si je ne me sens pas de la porter ce soir-là.",
      mot:"Un mariage ne devrait jamais être une case qu'on coche selon l'endroit." }
  },
  {
    id:"d12", cat:"Couple", emoji:"💍", title:"Elle a dit oui, puis a tout raconté avant lui",
    a:"Romain", b:"Chloé", hook:"La demande était un secret. Le groupe familial l'a su avant lui.",
    msgs:[
      {r:"A",n:"Romain",t:"Je te fais ma demande, moment que j'avais préparé pendant des semaines, tu dis oui les larmes aux yeux. On avait dit ensemble qu'on annonçait aux deux familles dimanche. Samedi soir, ma mère m'appelle en pleurant de joie : t'avais déjà tout balancé sur le groupe famille avec douze photos."},
      {r:"B",n:"Chloé",t:"J'étais tellement à fond de bonheur que ça a débordé tout seul, c'est la plus belle nouvelle de ma life et je pouvais pas la garder encore 24h. Tu m'en veux vraiment d'avoir été trop hype pour me contenir ?"},
      {r:"A",n:"Romain",t:"J't'en veux zéro d'être heureuse, ça me touche même grave. Ce qui me fait mal c'est que tu m'as volé le moment qu'on devait vivre à deux : je voulais voir en vrai la tête de ma mère, pas recevoir son appel après coup, une fois que tout était déjà joué sans moi."},
      {r:"B",n:"Chloé",t:"J'ai vraiment pas capté cette dimension sur le moment, j'étais à fond sur mon nuage et j'ai pas réalisé que je te privais d'un souvenir qu'on avait construit ensemble."},
    ],
    v:{ pctA:58, pctB:42,
      analyse:"Chloé, ta joie débordante est sincère et personne ne te reproche d'être heureuse — c'est même adorable de te voir dans cet état. Mais un moment convenu explicitement à deux, « on l'annonce ensemble dimanche », que tu court-circuites la veille sans même y penser, ça prive Romain d'un souvenir qui n'appartenait pas qu'à toi seule. Léger avantage à Romain sur ce point précis. Le vrai sujet dépasse l'annonce elle-même : vous vivez le bonheur à deux vitesses différentes. Chloé a besoin de partager immédiatement vers l'extérieur pour décupler sa joie, quand Romain préfère d'abord la savourer en intimité avant de la livrer au monde. Aucune des deux façons n'est mauvaise en soi — mais un projet commun mérite un accord commun avant d'être partagé, même quand l'émotion pousse à déborder.",
      pacteA:"Je dis ce qui compte pour moi avant l'événement, pas ma déception seulement après coup.",
      pacteB:"Pour nos grands moments à deux, je propose « on annonce quand ensemble ? » avant de publier quoi que ce soit.",
      mot:"La plus belle nouvelle mérite d'être vécue à deux, en premier." }
  },
  {
    id:"d07", cat:"Intime", emoji:"🌙", title:"Un baiser volé « qui ne compte pas »",
    a:"Inès", b:"Julien", hook:"Un after, un slow, un baiser. « C'était rien », dit-il.",
    msgs:[
      {r:"A",n:"Inès",t:"Ta best m'a raconté, toute gênée, qu'à l'after de vendredi t'as embrassé une fille pendant un slow. Tu m'en as jamais causé, j'ai dû l'apprendre par une tierce personne qui culpabilisait de me le cacher. Ça fait trois jours que tu me souris comme si de rien était."},
      {r:"B",n:"Julien",t:"C'était un moment d'alcool et de musique, ça a duré même pas dix secondes, ça représente rien de ce que je ressens pour toi. Je t'en ai pas causé parce que je savais que ça allait prendre des proportions de ouf pour un geste qui sur le moment voulait rien dire."},
      {r:"A",n:"Inès",t:"« Ça voulait rien dire » ça efface pas que tu m'as mytho par omission pendant trois jours en faisant style normal. C'est pas la durée du bisou le souci, c'est que t'as choisi le silence plutôt que la franchise, encore une fois sur un truc chaud."},
      {r:"B",n:"Julien",t:"T'as raison, j'ai évité le sujet par peur de ta réaction, et ce choix était pire que le bisou en lui-même. J'ai zéro excuse valable pour ces trois jours de silence."},
    ],
    v:{ pctA:77, pctB:23,
      analyse:"Julien, un baiser sous l'effet de l'alcool dans une soirée arrosée arrive, et beaucoup de couples le traversent — le vrai problème de cette dispute n'est même pas là. C'est que tu as passé trois jours à sourire normalement à Inès en sachant qu'elle ne savait pas, et qu'elle ne l'a appris que par une tierce personne rongée de culpabilité. Ce silence prolongé, ce théâtre du quotidien pendant que tu portais un secret, pèse plus lourd que le geste lui-même. Gros point pour Inès. Ta reconnaissance finale, sans minimiser ni te chercher d'excuse, est le bon réflexe — trop tardif, mais réel. Le vrai sujet : Inès ne pourra reconstruire la confiance que si l'honnêteté devient immédiate, pas arrachée après coup par une preuve extérieure.",
      pacteA:"Je laisse une vraie chance à l'honnêteté immédiate de Julien, sans repartir en enquête permanente.",
      pacteB:"Je dis les choses inconfortables tout de suite, même quand j'ai peur de ta réaction.",
      mot:"Le silence pèse toujours plus lourd que la maladresse qu'il cache." }
  },
  {
    id:"d16", cat:"Famille", emoji:"🎄", title:"Noël chez sa mère ou la mienne ?",
    a:"Léa", b:"Antoine", hook:"Deux familles qui attendent. Un seul 25 décembre. Zéro solution en vue.",
    msgs:[
      {r:"A",n:"Léa",t:"Ça fait trois années d'affilée qu'on passe le 25 chez ta mère, zéro alternance. Cette année c'est censé être mon tour, et ma grand-mère elle vieillit sérieux, je veux être là pour elle. Tu me réponds « on verra » depuis six semaines sans jamais trancher, c'est relou."},
      {r:"B",n:"Antoine",t:"Ma mère prépare son Noël depuis octobre, elle a déjà tout commandé pour nous recevoir. Si on annule maintenant elle va être dévastée et je vais culpabiliser toute l'année derrière, tu captes le délire ?"},
      {r:"A",n:"Léa",t:"Et ma propre culpabilité à moi si je rate peut-être un des derniers Noël de ma grand-mère, elle compte pour du beurre dans l'équation ? Tu mets jamais nos deux détresses sur la même balance, askip."},
      {r:"B",n:"Antoine",t:"C'est vraiment pas ce que j'essaie de dire. Mais ma mère elle vit seule toute l'année, la tienne elle a toute une famille autour, c'est différent selon moi."},
    ],
    v:{ pctA:72, pctB:28,
      analyse:"Léa, tu as l'argument objectif du temps qui passe : trois années identiques d'affilée chez la même famille, plus l'urgence réelle de ta grand-mère vieillissante. Antoine, ta loyauté envers ta mère isolée est belle et compréhensible en soi, mais elle t'a progressivement transformé en otage silencieux : répondre « on verra » pendant six semaines entières, c'est éviter la décision plutôt que la peser honnêtement des deux côtés. Point net pour Léa sur ce dossier. Le vrai sujet dépasse largement Noël lui-même : Antoine, tu as tellement peur de décevoir ta propre mère que tu finis par décevoir ta compagne par défaut, année après année, sans même t'en rendre pleinement compte. Tant que tu ne poseras pas une limite tendre mais ferme avec elle, Léa passera toujours en second — et aucune dinde de Noël ne réparera durablement ce déséquilibre installé.",
      pacteA:"Je propose une vraie alternance écrite et actée entre nos deux familles, pas une bataille répétée chaque décembre.",
      pacteB:"Je parle à ma mère avec amour mais fermeté assumée. Cette année, sans détour, on va chez Léa comme prévu.",
      mot:"On peut aimer sa mère et choisir pleinement sa compagne. Les deux à la fois." }
  },
  {
    id:"d21", cat:"Intime", emoji:"👻", title:"Il parle encore à son ex, en cachette",
    a:"Yasmine", b:"Enzo", hook:"Un appel de 47 minutes. Le numéro enregistré sous « Assurance ».",
    msgs:[
      {r:"A",n:"Yasmine",t:"J'ai vu un appel de 47 minutes sur ta facture en ligne, enregistré sous « Assurance ». J'ai composé le numéro par curiosité : c'est ton ex qui a décroché. Ça fait combien de temps que vous vous parlez planqués derrière un faux nom dans ton répertoire, frr ?"},
      {r:"B",n:"Enzo",t:"Genre trois mois, on avait juste besoin de solder des trucs du passé, y'avait des sujets jamais réglés entre nous. Je l'ai mise sous faux nom parce que je savais que t'allais capter le truc de travers direct."},
      {r:"A",n:"Yasmine",t:"« Solder des trucs » pendant 47 minutes, planqué sous faux nom, trois mois de suite ? Wesh Enzo, tu m'as mytho à chaque fois que je te demandais si tu lui parlais encore. C'est pas un malentendu, c'est un choix que t'as fait chaque jour, c'est giga chelou."},
      {r:"B",n:"Enzo",t:"Ouais j'ai menti, direct, aucune excuse à sortir. Je savais que c'était limite alors j'ai préféré cacher plutôt que gérer la discu avec toi."},
    ],
    v:{ pctA:80, pctB:20,
      analyse:"Enzo, un faux nom dans le répertoire pendant trois mois pour cacher des appels d'une quasi-heure, ce n'est plus de la discrétion, c'est une stratégie de dissimulation active et réfléchie. « Solder des trucs du passé » ne justifie ni la durée, ni la récurrence, ni surtout le mensonge répété chaque fois que Yasmine posait directement la question. Gros point pour elle. Ta franchise en fin de dispute, sans te trouver d'excuse, est le seul point positif ici, mais elle arrive après des mois de dissimulation organisée. Le vrai sujet : ce n'est pas le contact avec l'ex qui est en cause en soi, c'est le mensonge systématique qui l'a entouré. Yasmine ne pourra jamais te faire confiance tant que « cacher » restera ton réflexe face à un sujet inconfortable.",
      pacteA:"Je dis clairement ce que j'ai besoin de savoir, sans t'accuser à l'avance sur tout.",
      pacteB:"Je supprime le faux nom, et si je dois lui parler, tu le sais, sans détour.",
      mot:"Un faux nom dans le répertoire, c'est déjà un mensonge en soi." }
  },
  {
    id:"d20", cat:"Amis", emoji:"🎤", title:"Il a annulé mon anniversaire pour un date",
    a:"Dylan", b:"Marco", hook:"« Je serai là, c'est sûr. » Deux heures avant : « désolé, imprévu ».",
    msgs:[
      {r:"A",n:"Dylan",t:"Pour mon anniv j'avais réservé une salle depuis des semaines et compté sur toi, t'avais confirmé genre dix fois « je serai là c'est sûr ». À 18h, deux heures avant, tu m'écris « désolé mec, imprévu ». J'apprends après, par un pote commun, que ton « imprévu » c'était un date Tinder prévu depuis plusieurs jours."},
      {r:"B",n:"Marco",t:"Ça faisait des semaines que je causais avec cette fille en ligne, elle était dispo que ce soir-là, c'était vraiment ma seule chance de la voir. Je me suis dit que tu comprendrais, on est frères depuis quinze ans quand même."},
      {r:"A",n:"Dylan",t:"Justement, quinze ans d'amitié, et tu me lâches pour un premier date au dernier moment sans même me prévenir avant ? Si tu m'avais dit la vérité une semaine avant j'aurais capté sans souci. Là c'est le mytho sur le motif et le timing catastro qui posent vraiment problème."},
      {r:"B",n:"Marco",t:"Ouais... j'ai carrément menti sur le motif parce que je savais que ça sonnerait mal une fois dit clair. Et te lâcher deux heures avant, c'est indéfendable de ma part, je le reconnais direct maintenant."},
    ],
    v:{ pctA:80, pctB:20,
      analyse:"Marco, deux fautes distinctes se cumulent clairement contre toi dans cette histoire : le lâchage à peine deux heures avant un événement réservé de longue date, et surtout le mensonge délibéré sur le motif réel de ton absence. Une rencontre amoureuse qui compte vraiment pour toi peut parfaitement se défendre en soi — mais elle se dit honnêtement à l'avance, pas en abandonnant un ami proche la veille avec un faux prétexte fabriqué de toutes pièces. Gros point pour Dylan sur ce dossier. À ton honneur cependant, tu ne te caches pas derrière des excuses fumeuses une fois confronté aux faits. Le vrai sujet : Dylan ne t'en veut pas fondamentalement d'avoir une vie amoureuse active, il t'en veut sincèrement d'avoir été traité comme l'option qu'on écarte sans ménagement dès qu'une opportunité plus excitante se présente, et surtout d'avoir été mené en bateau sciemment. Quinze années de confiance méritent objectivement la vérité, même quand elle est inconfortable à formuler sur le moment.",
      pacteA:"Je dirai ma déception réelle au lieu de ravaler silencieusement et de m'éloigner progressivement sans explication.",
      pacteB:"Je serai honnête sur mes choix personnels, même inconfortables à assumer, et je ne lâche plus jamais au tout dernier moment.",
      mot:"Quinze années d'amitié valent largement une vérité inconfortable, même tardive." }
  },
  {
    id:"d22", cat:"Intime", emoji:"🏋️", title:"Des « conseils sport » le week-end, téléphone verrouillé",
    a:"Lucas", b:"Manon", hook:"Un message samedi 9h : « t'as bien dormi ? » De son pote de salle.",
    msgs:[
      {r:"A",n:"Manon",t:"Ton pote de la salle, celui qui te donne soi-disant des conseils programme, il t'écrit un samedi à 9h « t'as bien dormi ? ». Des conseils sport un week-end à cette heure-là, sérieux ? Et dès que je m'approche de ton tel tu le retournes ou tu le mets en veille direct, c'est chelou."},
      {r:"B",n:"Lucas",t:"C'est un coach informel, il connaît un max de trucs sur la prise de masse, on papote un peu de tout aussi, c'est un pote quoi. Je retourne mon tel par réflexe, pas parce que je cache un truc, j'ai juste horreur qu'on mate par-dessus mon épaule."},
      {r:"A",n:"Manon",t:"« Par réflexe » depuis six mois, systématique, rien que quand c'est lui qui écrit ? Si c'était vraiment que du sport, montre-moi la conversation deux secondes, ça devrait pas te bloquer."},
      {r:"B",n:"Lucas",t:"J'ai... j'ai pas vraiment envie de te le montrer en fait, pas parce qu'il se passe un truc, mais parce que j'ai l'impression que ça va être capté de travers alors que c'est vraiment rien pour moi."},
    ],
    v:{ pctA:71, pctB:29,
      analyse:"Lucas, « c'est vraiment rien » perd toute crédibilité au moment où tu refuses de montrer une conversation soi-disant anodine, alors que Manon ne demande même pas de couper ce contact, juste de voir. Ce refus précis, à ce moment précis, en dit plus que n'importe quel message retrouvé. Point pour Manon. Le sport n'est probablement pas le vrai sujet des échanges, et ce n'est même plus la question : c'est le réflexe systématique de dissimulation dès qu'un prénom précis apparaît à l'écran qui inquiète légitimement Manon. Le vrai sujet : une relation où l'un cache son téléphone par principe installe un climat de suspicion permanente, que le contenu soit innocent ou non.",
      pacteA:"Je demande à voir une fois, calmement, sans en faire une habitude de surveillance permanente.",
      pacteB:"Je te montre la conversation sans détour. Si j'ai rien à cacher, autant le prouver simplement.",
      mot:"Ce qu'on refuse de montrer devient toujours plus suspect que ce qu'on montre." }
  },
  {
    id:"d14", cat:"Coloc", emoji:"🧽", title:"La vaisselle qui « trempe » depuis 4 jours",
    a:"Yasmine", b:"Hugo", hook:"« Ça trempe. » Quatre-vingt-seize heures plus tard, ça trempe encore.",
    msgs:[
      {r:"A",n:"Yasmine",t:"Ça fait officiellement quatre jours que ta poêle « trempe » peinarde dans notre évier. On peut même plus se laver les mains sans toucher ton gratin fossilisé qui commence à puer sévère dans toute la cuisine. Tu comptes la laver quand, dans deux semaines ?"},
      {r:"B",n:"Hugo",t:"Elle trempe justement pour qu'elle parte toute seule sans effort de ma part, c'est une vraie stratégie de flemmard assumé. Et toi tu laisses tes cheveux partout dans la douche, on en fait pas tout un plat non plus."},
      {r:"A",n:"Yasmine",t:"Mes cheveux ils dégagent pas une odeur de cadavre dans notre cuisine commune à tous les deux, frr. Assume juste ta poêle sale au lieu de comparer avec un truc qui a rien à voir en vrai niveau nuisance."},
      {r:"B",n:"Hugo",t:"Ok je la lave ce soir, direct. Mais arrête aussi de checker mon évier comme une inspectrice d'hygiène qui débarque à l'improviste, c'est chelou ton truc."},
    ],
    v:{ pctA:73, pctB:27,
      analyse:"Hugo, « ça trempe pour partir tout seul » après quatre jours complets, ce n'est plus une stratégie, c'est de la procrastination habillée en méthode personnelle. L'espace est commun et partagé, l'odeur devient publique pour tout le monde : large point pour Yasmine sur ce sujet précis. Cela dit, Yasmine, ressortir systématiquement les cheveux dans la douche comme argument révèle que tu tiens toi aussi un compteur mental de fautes — et un compteur en coloc, ça finit toujours par mal tourner un jour ou l'autre. Le vrai sujet : vous n'avez jamais fixé de règles claires et écrites ensemble, donc chacun juge l'autre selon ses propres standards personnels de propreté. Un accord simple, du type « vaisselle sale lavée le soir même sans exception », vous éviterait probablement dix disputes similaires à l'avenir.",
      pacteA:"J'arrête mon compteur mental de fautes et je propose une vraie règle commune établie ensemble.",
      pacteB:"Je lave dans la journée qui suit, jamais « un jour vague ». La stratégie du trempage prolongé, c'est terminé.",
      mot:"Une coloc qui pose ses règles clairement, c'est une coloc qui dure longtemps." }
  },
  {
    id:"d23", cat:"Intime", emoji:"🔐", title:"Le code du téléphone a changé, et lui trouve ça bizarre",
    a:"Karim", b:"Lisa", hook:"Même code depuis 3 ans. Changé du jour au lendemain. Sans explication.",
    msgs:[
      {r:"A",n:"Karim",t:"Ça fait trois ans qu'on a le même code sur nos tels, on se les prêtait sans y penser. La semaine dernière, sans un mot, tu l'as changé, et là tu réagis chelou dès que je tends la main vers le tien. Il se passe quoi exactement ?"},
      {r:"B",n:"Lisa",t:"J'ai juste eu envie d'un peu plus d'intimité sur mon tel, ça a rien à voir avec toi précisément, bcp de gens ont un espace privé même en couple. Je vois pas pourquoi ça devient un sujet de dispute du jour au lendemain."},
      {r:"A",n:"Karim",t:"Le souci c'est pas l'intimité en soi, c'est que ça arrive pile après ton nouveau poste où t'as changé d'équipe, et que t'évites clair mon regard quand j'en parle. Si c'était vraiment neutre, tu m'en aurais causé toi-même au lieu que je le découvre en essayant d'ouvrir ton tel comme d'hab."},
      {r:"B",n:"Lisa",t:"D'accord, c'est vrai que le timing avec le nouveau poste ça peut paraître suspect vu de dehors, et j'aurais dû t'en causer au lieu de changer le code en douce sans un mot."},
    ],
    v:{ pctA:56, pctB:44,
      analyse:"Match plutôt serré. Lisa, réclamer un espace personnel sur son téléphone est un droit légitime, même en couple installé depuis longtemps — l'intimité numérique n'est pas automatiquement suspecte. Léger avantage à Karim cependant, pas sur le fond du droit à l'intimité, mais sur la méthode : changer le code en silence, sans un mot, juste après un changement professionnel notable, ça crée mécaniquement un doute qui aurait pu être évité par une simple phrase d'explication. Le vrai sujet : ce n'est pas le code en lui-même qui pose problème, c'est le silence soudain autour d'un changement d'habitude qui existait depuis trois ans. Un nouveau besoin d'intimité se dit, il ne s'installe pas en cachette du jour au lendemain.",
      pacteA:"Je respecte ton besoin d'intimité numérique sans le prendre automatiquement pour un aveu de culpabilité.",
      pacteB:"J'annonce mes changements de règles perso au lieu de les imposer en silence du jour au lendemain.",
      mot:"Un nouveau besoin d'intimité se dit à voix haute, il ne s'installe jamais en cachette." }
  },
  {
    id:"d13", cat:"Couple", emoji:"📵", title:"Le téléphone au lit, chaque soir",
    a:"Océane", b:"Rayan", hook:"« Bonne nuit » à l'écran. Jamais à elle, en vrai.",
    msgs:[
      {r:"A",n:"Océane",t:"Tous les soirs depuis des mois c'est la même scène : on se couche, tu scrolles genre 45 minutes minimum, l'écran bleu éclaire la piaule dans le noir, et moi je fixe le plafond à côté. On se dit même plus bonne nuit en se regardant vraiment, c'est devenu un réflexe zombie."},
      {r:"B",n:"Rayan",t:"C'est mon seul vrai moment pour décompresser de toute la journée, laisser mon cerveau se vider avant de dormir. Et toi aussi t'es sur ton tel parfois le soir, on va pas se mentir là-dessus."},
      {r:"A",n:"Océane",t:"Parfois ouais, ça m'arrive, c'est vrai. Mais toi c'est tous les soirs sans exception, 45 minutes pile, et nos derniers mots avant de dormir c'est plus « bonne nuit », c'est le silence d'un scroll qui a remplacé notre connexion du soir."},
      {r:"B",n:"Rayan",t:"C'est vrai qu'on se parle presque plus le soir avant de dormir, j'avais même pas capté tellement c'est devenu auto. Ça m'a filé entre les doigts sans que je décide vraiment un truc."},
    ],
    v:{ pctA:68, pctB:32,
      analyse:"Rayan, décompresser après une longue journée est un besoin réel et légitime, et Océane n'est pas non plus totalement exempte d'écran le soir — mais quarante-cinq minutes tous les soirs sans exception, ce n'est plus vraiment de la décompression, c'est devenu un remplacement systématique de la connexion du soir. Point pour Océane. Le vrai sujet dépasse largement le téléphone en tant qu'objet : c'est le tout dernier moment de la journée, celui où un couple se retrouve enfin seul, calme, qui s'est fait progressivement coloniser par le scroll sans qu'aucun des deux ne le décide vraiment. Ta prise de conscience finale est juste et honnête : personne n'a choisi cette habitude, elle s'est simplement installée toute seule avec le temps.",
      pacteA:"Je propose un petit rituel du soir à deux plutôt que de fixer le plafond en silence chaque soir.",
      pacteB:"Je pose le téléphone quinze minutes avant de dormir. Ces minutes-là nous appartiennent, à nous deux.",
      mot:"Les derniers mots du jour méritent un vrai regard, pas un écran allumé." }
  },
  {
    id:"d25", cat:"Intime", emoji:"📍", title:"La géoloc Snap l'a menée devant la boîte de nuit",
    a:"Sofia", b:"Ryan", hook:"3h du matin. Le berceau vide de papa. Snap Map ne ment pas.",
    msgs:[
      {r:"A",n:"Sofia",t:"Notre fils avait trois semaines, il pleurait à 3h du mat, je me retourne pour te réveiller et ton côté du lit est vide, zéro message, rien. J'ai ouvert Snap Map par réflexe, j'ai vu ton point exact devant le Mirage, j'ai pris le bébé dans son siège auto et j'ai conduit jusque là-bas. Je t'ai trouvé en train de causer, très proche, avec une meuf devant l'entrée."},
      {r:"B",n:"Ryan",t:"C'est une amie d'un pote, on discutait juste en sortant prendre l'air, il se passait absolument rien de plus entre nous. Je pensais rentrer dans dix minutes max, je voulais pas te réveiller pour un truc aussi court."},
      {r:"A",n:"Sofia",t:"T'es sorti en pleine nuit sans un mot, pendant que je gère seule un nouveau-né qui hurle, et je te retrouve collé à une inconnue devant une boîte à 3h du mat. Même si vraiment rien s'est passé, le simple fait que tu sois là-bas, à cette heure, sans me prévenir, ça détruit une confiance qui devrait être totale en ce moment précis."},
      {r:"B",n:"Ryan",t:"T'as complet raison, peu importe qu'il se soit rien passé de plus, j'aurais jamais dû sortir sans te prévenir avec un nouveau-né à la maison. Je capte que le contexte à lui seul c'est déjà une trahison de ta confiance, indépendamment de ce qui s'est vraiment dit là-bas."},
    ],
    v:{ pctA:88, pctB:12,
      analyse:"Ryan, l'affirmation « il se passait rien » n'efface absolument pas la gravité de la situation : sortir en pleine nuit, sans un mot, pendant que ta compagne gère seule un nourrisson de trois semaines, pour te retrouver proche d'une inconnue devant une boîte de nuit à 3h du matin. Même dans l'hypothèse la plus innocente, le contexte lui-même constitue déjà une faute de confiance majeure envers Sofia, à un moment où elle a le plus besoin de sentir que tu es un partenaire présent et fiable. Gros point pour elle, sans discussion possible. Ta reconnaissance finale, sans minimiser ni te chercher d'excuse sur le contexte, est le strict minimum ici, mais elle est au moins honnête. Le vrai sujet dépasse largement cette soirée précise : Sofia a besoin de sentir, dans les mois qui suivent une naissance, qu'elle peut compter sur toi sans avoir à suivre ta position GPS en pleine nuit.",
      pacteA:"Je dis mon besoin vital de sécurité et de présence en ce moment précis, sans m'excuser de le demander.",
      pacteB:"Je ne sors plus sans prévenir, jamais, surtout maintenant. Ta confiance passe avant toute soirée.",
      mot:"Un nouveau-né a besoin de deux parents présents, pas d'un GPS pour retrouver l'un d'eux." }
  },
  {
    id:"d17", cat:"Famille", emoji:"👶", title:"Sa mère débarque sans prévenir avec le bébé",
    a:"Julie", b:"Marc", hook:"« Je passais dans le coin. » À 7h30. Avec un double des clés.",
    msgs:[
      {r:"A",n:"Julie",t:"Ta mère a un double de nos clés officiellement « pour les urgences ». Ce matin elle débarque à 7h30 pendant que j'allaite, en peignoir je te rappelle, avec un « je passais dans le coin ». Elle a pris le bébé des bras sans même demander. J'ai plus aucune intimité chez moi, c'est chaud."},
      {r:"B",n:"Marc",t:"Elle est folle de son petit-fils, elle veut juste aider un max. Tu sais à quel point elle attendait ce bébé. Lui retirer les clés maintenant ça va la briser complet, j'en suis sûr."},
      {r:"A",n:"Julie",t:"Et moi dans tout ça ? Je me sens genre en visite permanente dans mon propre appart. J'ai besoin de souffler, de créer notre bulle à trois, pas d'être checkée à 7h30 du mat sans prévenir."},
      {r:"B",n:"Marc",t:"Je capte ta détresse, sincère... mais entre ma mère et toi je me sens complet écartelé, sans savoir comment gérer sans blesser l'une de vous deux."},
    ],
    v:{ pctA:76, pctB:24,
      analyse:"Julie, une jeune mère a un droit fondamental à son intimité, particulièrement durant les premières semaines fragiles après l'accouchement. Une belle-mère qui entre avec les clés à 7h30 et prend le bébé sans demander la moindre autorisation, aussi aimante soit-elle par ailleurs, franchit clairement une frontière essentielle. Net avantage pour toi sur ce point précis. Marc, ton amour sincère pour ta mère et ta peur réelle de la « briser » émotionnellement sont compréhensibles, mais ils t'ont placé en position de spectateur passif pendant que ta compagne étouffe littéralement chez elle. Le vrai sujet : tu dois passer du statut d'« écartelé entre deux femmes » à celui de protecteur affirmé de votre foyer commun. Poser un cadre clair à ta mère — sonner avant d'entrer, prévenir systématiquement, rendre les clés — n'est absolument pas la trahir, c'est simplement protéger la bulle dont votre nouveau-né a désespérément besoin pour grandir sereinement.",
      pacteA:"Je dis mon besoin vital d'intimité sans culpabiliser, c'est parfaitement légitime dans ma situation.",
      pacteB:"Je parle à ma mère avec toute ma tendresse mais fermement : on sonne désormais, on prévient toujours avant. Je protège notre bulle familiale.",
      mot:"Un nid a besoin de calme véritable pour grandir sereinement. Protégez le vôtre sans culpabiliser." }
  },
  {
    id:"d26", cat:"Intime", emoji:"🎭", title:"Le jeu de la jalousie qui a complètement dérapé",
    a:"Chloé", b:"Nathan", hook:"Elle voulait le rendre jaloux. Il a proposé de regarder.",
    msgs:[
      {r:"A",n:"Chloé",t:"En soirée, j'ai dragué exprès un mec devant toi, pour te tester et voir si t'allais réagir, si tu tenais encore vraiment à moi. Sauf que toi, au lieu d'être jaloux ou même un peu affecté, t'as eu l'air à fond hype par la situation, et tu m'as même proposé qu'on aille plus loin tous les trois. Je me sens complet perdue là, je capte plus rien à ce qui se passe entre nous."},
      {r:"B",n:"Nathan",t:"Je pensais sincère bien faire en restant cool et ouvert plutôt que de faire une scène de jalousie possessive comme tu sembles l'attendre de moi. Te voir sûre de toi comme ça, ça m'a clairement chauffé sur le moment, je vais pas mentir là-dessus, mais je voulais pas non plus passer pour un control freak avec toi."},
      {r:"A",n:"Chloé",t:"Le souci c'est pas que t'aies pas fait de scène, ça j'apprécie clair en soi. Le souci c'est que je testais si tu tenais à moi de façon exclusive, et ta réaction m'a donné l'impression totale inverse, genre j'étais interchangeable à tes yeux à ce moment-là."},
      {r:"B",n:"Nathan",t:"Je capte mieux maintenant que mon envie sincère de rester détendu et ouvert d'esprit a été reçue par toi comme un vrai désintérêt, alors que c'était vraiment pas mon intention profonde derrière tout ça."},
    ],
    v:{ pctA:48, pctB:52,
      analyse:"Situation délicate où personne n'a vraiment tort, mais où un vrai malentendu de fond s'est installé. Chloé, provoquer volontairement la jalousie pour tester l'engagement de l'autre est une stratégie risquée et souvent contre-productive : elle demande une réaction précise et attendue à l'avance, ce qui n'est jamais garanti, surtout de la part de quelqu'un qui a une philosophie de couple différente de la tienne. Léger avantage à Nathan sur ce point précis. Nathan, ta réaction n'a rien d'une faute en soi — l'ouverture d'esprit et l'absence de possessivité sont des qualités réelles — mais tu n'as manifestement pas capté ce que Chloé cherchait vraiment à vérifier ce soir-là, à savoir son exclusivité à tes yeux, pas ta tolérance générale. Le vrai sujet : vous n'avez jamais vraiment parlé ensemble de ce que votre couple signifie en termes d'exclusivité et de jalousie normale versus excessive, et ce test improvisé en soirée a révélé un vrai flou entre vous deux plutôt que de le résoudre.",
      pacteA:"Je pose directement la question de l'exclusivité qu'on veut, plutôt que de tester par des mises en scène risquées.",
      pacteB:"Je dis clairement ce que je ressens vraiment, sans jouer la carte de l'ouverture d'esprit par réflexe social.",
      mot:"Ce qu'on veut vraiment savoir, ça se demande — ça ne se teste jamais vraiment bien." }
  },
  {
    id:"d28", cat:"Amis", emoji:"💔", title:"Jessica parle au même mec que son crush",
    a:"Inès", b:"Jessica", hook:"« C'est juste un ami. » Le même « ami » qu'Inès kiffe depuis six mois.",
    msgs:[
      {r:"A",n:"Inès",t:"Ça fait six mois que je te bassine avec mon crush pour Adam, tu connais chaque détail, chaque message, tu m'as même aidée à choisir mes réponses. Je viens de découvrir que vous causez quasi tous les jours toi et lui, sans que tu m'en parles une seule fois, c'est chaud."},
      {r:"B",n:"Jessica",t:"On se suit juste depuis un moment sur les réseaux, c'est lui qui m'a écrit en premier en fait, je voyais pas ça comme un sujet à te raconter en détail. C'est vraiment rien de spécial entre nous, on parle de tout et de rien, des trucs classiques."},
      {r:"A",n:"Inès",t:"« Rien de spécial » tous les jours, avec le mec pour qui tu sais très bien que je craque depuis six mois entiers ? Tu m'as laissée te confier chaque étape de mes sentiments pendant que toi tu construisais une proximité quotidienne avec lui en silence total, askip."},
      {r:"B",n:"Jessica",t:"En le disant comme ça, je capte que j'aurais dû t'en parler dès le premier message qu'il m'a envoyé, par respect basique pour toi et ce que tu ressens. J'crois que j'ai évité le sujet parce que je savais que ça te ferait de la peine."},
    ],
    v:{ pctA:75, pctB:25,
      analyse:"Jessica, le fait qu'Adam ait écrit en premier ne change rien au problème de fond : tu savais depuis six mois entiers qu'Inès craquait pour lui, tu as recueilli chacune de ses confidences sur le sujet, et pendant ce temps tu construisais toi-même une proximité quotidienne avec lui sans jamais le mentionner. Ce silence prolongé pèse lourd, gros point pour Inès. Ta reconnaissance finale, sincère, montre que tu savais au fond que ce silence n'était pas anodin, même si tu as choisi de l'éviter par peur de la blesser. Le vrai sujet : entre amies proches, un crush confié mérite au minimum d'être respecté par une transparence immédiate, pas par un silence de six mois qui laisse le champ libre à une proximité parallèle et cachée.",
      pacteA:"Je dis ma blessure sans transformer ça en interdiction totale de lui parler pour Jessica.",
      pacteB:"Je coupe ou j'espace ce contact avec Adam, et je serai transparente sur ce genre de situation à l'avenir.",
      mot:"Un crush confié entre amies mérite plus qu'un silence de six mois." }
  },
  {
    id:"d15", cat:"Coloc", emoji:"🔥", title:"Son copain vit ici sans jamais participer",
    a:"Adam", b:"Sofia", hook:"Trois personnes dans l'appart. Deux sur le bail. Une qui vide le frigo.",
    msgs:[
      {r:"A",n:"Adam",t:"Ton mec est là six soirs sur sept depuis deux mois. Il utilise l'eau chaude tous les jours, le chauffage, notre wifi, il vide régulièrement le frigo commun. On paie les charges à deux officiellement, mais on vit clairement à trois au quotidien. Soit il participe, soit il lève un peu le pied."},
      {r:"B",n:"Sofia",t:"C'est mon mec, il dort dans MA chambre, il prend littéralement zéro place en plus dans l'appart commun. Tu veux vraiment qu'on facture mon histoire d'amour comme une coloc payante, sérieux ?"},
      {r:"A",n:"Adam",t:"Je facture zéro ton histoire d'amour, je facture les 30% de charges en plus qu'on paie depuis qu'il squatte pratiquement full time ici. Regarde juste la dernière facture d'élec, elle a explosé ce mois-ci, c'est chaud."},
      {r:"B",n:"Sofia",t:"Ok la facture a vraiment monté, c'est un fait, je peux pas nier. Mais le mot « squatte » il est relou venant de toi, c'est quelqu'un que j'aime à fond, pas un chacal qui traîne."},
    ],
    v:{ pctA:71, pctB:29,
      analyse:"Adam, ta demande reste purement factuelle : une présence quasi permanente qui consomme concrètement les charges communes doit logiquement contribuer d'une façon ou d'une autre. La facture qui grimpe nettement te donne objectivement raison sur le fond. Point pour toi. Sofia, l'amour n'est absolument pas en cause ici et personne ne le remet en question — mais « il ne prend pas de place » devient faux dès qu'on parle concrètement d'eau chaude, de chauffage et de nourriture partagée au quotidien. Le vrai sujet : une frontière floue et jamais posée entre « invité occasionnel » et « habitant à temps plein » qui pèse financièrement sur Adam seul. La solution n'est pas d'exclure ton amour de l'appartement, c'est simplement de nommer la réalité ensemble : au-delà d'un certain nombre de nuits par mois, on participe équitablement.",
      pacteA:"Je propose un seuil clair de nuits et une participation équitable, sans jamais viser ta relation en elle-même.",
      pacteB:"J'accepte qu'il participe financièrement aux charges quand il est présent aussi souvent. C'est simplement juste envers toi.",
      mot:"L'amour est gratuit. L'eau chaude, elle, ne l'est jamais." }
  },
  {
    id:"d24", cat:"Couple", emoji:"🤰", title:"Enceinte, elle fait tout ; lui, il sort",
    a:"Fatou", b:"Bastien", hook:"Sept mois de grossesse. Lui, trois soirs par semaine entre potes.",
    msgs:[
      {r:"A",n:"Fatou",t:"J'suis à sept mois de grossesse, je fais le ménage, les courses, la bouffe, je range la chambre du bébé toute seule le soir en rentrant du taf. Toi, trois soirs sur sept tu sors boire des coups avec tes potes jusqu'à minuit passé, comme si de rien, comme si j'allais pas accoucher dans six semaines."},
      {r:"B",n:"Bastien",t:"Je bosse toute la journée aussi, j'ai besoin de souffler un minimum avec mes potes avant que le rythme change complet avec le bébé, c'est presque ma dernière période tranquille. Je pensais pas que sortir de temps en temps ça allait être vu comme un abandon total de ma part."},
      {r:"A",n:"Fatou",t:"« Souffler » pendant que moi je porte physiquement ce bébé toute la journée ET que je gère toute la maison en plus le soir, c'est clairement pas la même charge entre nous. Tu profites de tes dernières soirées peinardes, moi j'ai zéro moment tranquille depuis des mois."},
      {r:"B",n:"Bastien",t:"Dit comme ça, ouais, je capte que j'ai clairement sous-estimé à quel point tu portais tout toute seule pendant que moi je continuais ma vie sociale presque normale, sans vraiment rien changer."},
    ],
    v:{ pctA:83, pctB:17,
      analyse:"Bastien, « souffler avant que le rythme change » sonne raisonnable en théorie, mais en pratique ça se traduit par une grossesse portée quasi seule par Fatou pendant que ta vie sociale continue normalement, presque inchangée. Le déséquilibre physique et mental est total : elle porte l'enfant, gère la maison, et encaisse ton absence répétée, pendant que tu gardes ton confort social intact. Gros point pour Fatou. Ta prise de conscience finale est honnête et nécessaire, mais elle arrive tard, après des mois où le déséquilibre s'est installé sans que tu le questionnes vraiment. Le vrai sujet : une grossesse ne suspend pas la vie sociale de l'un des deux parents, mais elle exige un rééquilibrage concret et immédiat de la charge à la maison, pas juste des bonnes intentions verbales.",
      pacteA:"Je dis clairement ce dont j'ai besoin maintenant, pas seulement après avoir craqué en silence.",
      pacteB:"Je réduis mes sorties et je prends une vraie part de la charge à la maison, dès maintenant, sans attendre l'accouchement.",
      mot:"Porter un enfant à deux, ça commence bien avant la naissance." }
  },
  {
    id:"d18", cat:"Famille", emoji:"📞", title:"Il appelle sa mère cinq fois par jour",
    a:"Selin", b:"Gaël", hook:"Dîner, cinéma, intimité : le téléphone sonne systématiquement. C'est toujours maman.",
    msgs:[
      {r:"A",n:"Selin",t:"Ta mère t'appelle genre cinq fois par jour, et tu décroches à chaque fois, même au resto, même au ciné, même au lit en plein moment à deux. Hier soir en plein moment tendre, ton tel sonne, tu réponds « oui maman ? » sans même hésiter une seconde. Je me sens en option C dans mon couple."},
      {r:"B",n:"Gaël",t:"Elle est âgée et vit seule, si je réponds pas direct je flippe qu'il lui soit arrivé un truc grave. Tu voudrais que j'ignore ma propre mère qui m'a élevé seule ? C'est aussi une question de respect basique envers elle."},
      {r:"A",n:"Selin",t:"J'te demande pas de l'ignorer, j'te demande juste de pas décrocher systématique en plein moment à deux pour un appel qui presse jamais vraiment. Rappeler dix minutes après, ça change tout pour moi."},
      {r:"B",n:"Gaël",t:"C'est vrai que par pur réflexe je décroche toujours, même quand objectivement rien presse dans l'instant. Je pourrais grave filtrer et rappeler juste après, sans la négliger pour autant."},
    ],
    v:{ pctA:67, pctB:33,
      analyse:"Selin, tu ne demandes absolument pas à Gaël de délaisser sa mère âgée et vivant seule — tu demandes uniquement que les moments d'intimité ne soient pas systématiquement interrompus pour des appels rarement urgents dans les faits. Cette nuance précise est parfaitement juste : point pour toi. Gaël, ton inquiétude légitime pour une mère seule est tout à fait honorable et compréhensible, mais « décrocher par pur réflexe même quand rien ne presse objectivement » révèle une automaticité qui déborde largement sur ton couple au quotidien. Ta solution finale — filtrer intelligemment et rappeler juste après — est exactement la bonne approche à adopter. Le vrai sujet : être un bon fils présent et un bon partenaire présent ne s'opposent absolument pas entre eux, sauf quand le premier réflexe automatique efface systématiquement le second sans même y réfléchir.",
      pacteA:"Je dis mon besoin réel de moments protégés sans jamais attaquer frontalement ta relation à ta mère.",
      pacteB:"Je filtre intelligemment les appels dans nos moments privilégiés à deux et je rappelle juste après. Personne n'est réellement négligé dans cette approche.",
      mot:"On peut être un fils présent ET un partenaire présent, sans jamais sacrifier l'un pour l'autre." }
  },
  {
    id:"d27", cat:"Intime", emoji:"🥊", title:"Elle parle encore à celui qui l'a frappé",
    a:"Théo", b:"Léa", hook:"Il l'a mis à terre en soirée. Elle continue de lui écrire, « il est marrant ».",
    msgs:[
      {r:"A",n:"Théo",t:"Le mec qui m'a mis un coup de poing en pleine soirée y'a deux mois, celui qui m'a littéralement envoyé au sol devant tout le monde, je viens de voir que tu continues à lui écrire régulièrement sur Insta. Tu trouves ça normal de rester proche de quelqu'un qui m'a frappé sans provoc de ma part ?"},
      {r:"B",n:"Léa",t:"Ce qu'il t'a fait ce soir-là c'était clairement pas ok, j'étais furax contre lui aussi à ce moment-là. Mais en dehors de ça il est vraiment marrant, on cause de trucs qui ont rien à voir avec cette histoire, je vois pas le rapport direct entre les deux."},
      {r:"A",n:"Théo",t:"Le rapport c'est que t'as vu quelqu'un me frapper au visage, et malgré ça tu choisis de garder un lien avec lui parce qu'il te fait rire. J'ai l'impression que ma propre douleur et la trahison que je ressens comptent moins pour toi que son humour à lui, c'est chaud."},
      {r:"B",n:"Léa",t:"En le disant comme ça, je capte que ça doit vraiment te faire mal de me voir continuer ce contact, même à distance, avec quelqu'un qui t'a fait du mal physique. J'avais compartimenté les deux trucs dans ma tête sans vraiment penser à ce que ça représentait pour toi."},
    ],
    v:{ pctA:79, pctB:21,
      analyse:"Léa, l'humour de quelqu'un n'efface jamais un acte de violence physique qu'il a commis envers ton propre compagnon. Séparer « il est drôle » et « il a frappé Théo » dans deux compartiments mentaux différents, c'est précisément ce qui blesse le plus profondément ici : ça revient à dire que sa personnalité pèse plus lourd, dans ta balance, que ce qu'il a fait subir à Théo. Gros point pour lui. Ta prise de conscience finale est sincère et montre une vraie écoute, mais elle souligne aussi à quel point ce lien n'avait jamais été vraiment questionné avant cette dispute. Le vrai sujet : maintenir un contact volontaire avec quelqu'un qui a frappé son partenaire envoie un message involontaire mais réel sur l'échelle de priorités, même sans mauvaise intention consciente de ta part.",
      pacteA:"Je dis clairement ce que je ressens sans minimiser la gravité de ce qui s'est passé entre eux.",
      pacteB:"Je coupe ce contact. Ta sécurité et ta dignité comptent plus que son humour à lui.",
      mot:"Le rire de quelqu'un ne rachète jamais un coup porté à celui qu'on aime." }
  },
];
