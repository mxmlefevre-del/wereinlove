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
      {r:"A",n:"Léa",t:"J'ai trouvé les messages avec elle. Tu lui as dit des choses que tu ne me dis plus depuis des mois, et vous vous êtes vus deux fois « pour boire un verre entre collègues ». Je t'ai laissé une semaine pour m'en parler de toi-même. Tu ne l'as pas fait."},
      {r:"B",n:"Maxime",t:"Il ne s'est rien passé de grave, on a juste parlé et bu un verre, c'est toi qui montes tout en trahison nationale. Je n'allais pas t'en parler parce que je savais que tu réagirais exactement comme ça, en fouillant mon téléphone comme une enquêtrice."},
      {r:"A",n:"Léa",t:"Tu inverses les rôles : le problème, ce n'est pas que j'ai découvert, c'est ce que j'ai découvert. « Il ne s'est rien passé de grave » pendant que tu lui écris des choses tendres à minuit, ce n'est pas rien pour moi."},
      {r:"B",n:"Maxime",t:"Ok j'ai été maladroit, mais j'ai l'impression que quoi que je dise là tout de suite, ce sera de toute façon la fin du monde pour toi. Je ne sais même pas ce que tu attends que je dise."},
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
      {r:"A",n:"Clara",t:"J'avais gardé mes pâtes à la truffe du restaurant de mon anniversaire, celles que j'avais à peine touchées exprès pour les savourer tranquillement ce soir. Je rentre du sport, la boîte est vide dans l'évier, et toi tu es devant la télé comme si de rien n'était. Tu ne m'as même pas laissé un mot."},
      {r:"B",n:"Malik",t:"Il n'y avait aucun post-it, aucune étiquette avec ton prénom dessus, et dans ce frigo, ce qui traîne se mange depuis toujours, c'est une règle tacite entre nous. J'avais une petite fringale à minuit et j'ai pris ce qu'il y avait, je ne savais même pas que c'était si important pour toi."},
      {r:"A",n:"Clara",t:"« Ce qui traîne », sérieusement ? C'était rangé tout en haut du frigo, dans ma boîte à moi, avec mon nom écrit dessus au marqueur, tu l'as forcément vu. Ce n'est pas une question de règle du frigo, c'est que tu savais très bien d'où ça venait et pourquoi c'était spécial pour moi."},
      {r:"B",n:"Malik",t:"D'accord, j'ai vu ton prénom, j'ai juste zappé l'idée que ça puisse compter à ce point pour un plat. J'aurais dû demander avant, je ne pensais pas que ça deviendrait un sujet de dispute pareil."},
    ],
    v:{ pctA:66, pctB:34,
      analyse:"Malik, « ce qui traîne se mange » ne fonctionne plus quand la boîte est étiquetée à ton nom et rangée en évidence — tu l'as vu, tu l'admets toi-même. Ce n'est donc pas une question de règle floue du frigo, mais d'un choix conscient de consommer quelque chose qui portait clairement une intention. Point pour Clara. Mais Clara, un aliment n'est jamais qu'un aliment : ce que tu défends vraiment, c'est le droit de prolonger un beau souvenir d'anniversaire, pas des pâtes en tant que telles. Malik a « consommé » ton souvenir sans s'en rendre compte, et le vrai sujet dépasse le frigo : chez vous, rien n'est vraiment identifié comme sacré ou intouchable, et ça finit par créer ces petites intrusions qui piquent plus qu'elles n'en ont l'air.",
      pacteA:"Je dirai ce qui compte vraiment pour moi avant qu'un objet ne devienne le symbole d'une frustration.",
      pacteB:"Avant de finir quelque chose qui semble spécial, je demande. Trois secondes, zéro drame ensuite.",
      mot:"La prochaine boîte de pâtes truffe, partagez-la à deux." }
  },
  {
    id:"d04", cat:"Intime", emoji:"📱", title:"Il est toujours actif sur Grindr",
    a:"Thomas", b:"Karim", hook:"« Actif à l'instant. » Sur l'appli qu'il jure avoir supprimée.",
    msgs:[
      {r:"A",n:"Thomas",t:"On s'est mis d'accord il y a trois mois pour être exclusifs et supprimer les applis de rencontre. Hier soir, sur le compte d'un pote qui cherchait un profil, je tombe sur le tien, « actif à l'instant », avec des photos qu'on a prises ensemble en vacances. Tu m'avais juré l'avoir supprimée."},
      {r:"B",n:"Karim",t:"Je l'ai gardée juste pour discuter avec des potes du milieu, je ne cherche personne, je ne réponds à aucun message de drague, c'est presque devenu comme un réseau social pour moi. Je ne t'ai pas menti sur l'essentiel, on est exclusifs et ça ne change pas."},
      {r:"A",n:"Thomas",t:"Le problème, ce n'est pas si tu dragues ou pas, c'est que tu m'as dit une chose et fait l'inverse en silence pendant trois mois. Si garder l'appli n'était pas grave, pourquoi ne pas simplement me le dire au lieu de me laisser croire qu'elle avait disparu ?"},
      {r:"B",n:"Karim",t:"Parce que je savais que ça te contrarierait même si mon intention était innocente, alors j'ai évité le sujet au lieu de l'assumer. En le disant comme ça, je réalise que ce n'est pas très différent de mentir."},
    ],
    v:{ pctA:74, pctB:26,
      analyse:"Karim, l'intention derrière l'appli — discuter, réseauter — n'est peut-être pas malveillante, mais ce n'est pas la question posée. La question, c'est : un accord explicite pris à deux (supprimer les applis, être exclusifs) a été rompu en silence pendant trois mois, et découvert par accident plutôt que dit ouvertement. Ce point est net en faveur de Thomas. Ta lucidité finale — reconnaître que le silence ressemble à un mensonge même sans mauvaise intention — est précieuse et montre que tu peux entendre l'impact sans minimiser. Le vrai sujet : dans un couple, un accord qu'on ne respecte plus doit être renégocié à voix haute, jamais contourné en douce, même pour des raisons qui semblent inoffensives de l'intérieur.",
      pacteA:"Je te dis ma peur sans t'accuser d'avance la prochaine fois qu'un doute apparaît.",
      pacteB:"Je supprime vraiment l'appli, et si nos règles doivent changer, j'en parle avant, pas après.",
      mot:"Un accord de couple se renégocie à voix haute, jamais en silence." }
  },
  {
    id:"d14", cat:"Coloc", emoji:"🧽", title:"La vaisselle qui « trempe » depuis 4 jours",
    a:"Yasmine", b:"Hugo", hook:"« Ça trempe. » Quatre-vingt-seize heures plus tard, ça trempe encore.",
    msgs:[
      {r:"A",n:"Yasmine",t:"Ça fait officiellement quatre jours que ta poêle « trempe » tranquillement dans notre évier commun. On ne peut même plus se laver les mains correctement sans toucher ton gratin fossilisé qui commence à sentir vraiment mauvais dans toute la cuisine. Tu comptes la laver quand exactement, dans deux semaines ?"},
      {r:"B",n:"Hugo",t:"Elle trempe justement pour qu'elle parte toute seule sans effort de ma part, c'est une vraie stratégie de flemmard assumé. Et de ton côté tu laisses systématiquement tes cheveux partout dans la douche, on n'en fait pas tout un procès pour autant."},
      {r:"A",n:"Yasmine",t:"Mes cheveux ne dégagent absolument pas une odeur de cadavre ambulant dans notre cuisine commune à tous les deux. Assume juste ta poêle sale au lieu de comparer avec un problème qui n'a rien à voir en termes de nuisance réelle."},
      {r:"B",n:"Hugo",t:"D'accord, je vais la laver ce soir sans plus attendre. Mais arrête aussi de surveiller mon évier comme une inspectrice d'hygiène qui débarque à l'improviste."},
    ],
    v:{ pctA:73, pctB:27,
      analyse:"Hugo, « ça trempe pour partir tout seul » après quatre jours complets, ce n'est plus une stratégie, c'est de la procrastination habillée en méthode personnelle. L'espace est commun et partagé, l'odeur devient publique pour tout le monde : large point pour Yasmine sur ce sujet précis. Cela dit, Yasmine, ressortir systématiquement les cheveux dans la douche comme argument révèle que tu tiens toi aussi un compteur mental de fautes — et un compteur en coloc, ça finit toujours par mal tourner un jour ou l'autre. Le vrai sujet : vous n'avez jamais fixé de règles claires et écrites ensemble, donc chacun juge l'autre selon ses propres standards personnels de propreté. Un accord simple, du type « vaisselle sale lavée le soir même sans exception », vous éviterait probablement dix disputes similaires à l'avenir.",
      pacteA:"J'arrête mon compteur mental de fautes et je propose une vraie règle commune établie ensemble.",
      pacteB:"Je lave dans la journée qui suit, jamais « un jour vague ». La stratégie du trempage prolongé, c'est terminé.",
      mot:"Une coloc qui pose ses règles clairement, c'est une coloc qui dure longtemps." }
  },
  {
    id:"d09", cat:"Couple", emoji:"🎮", title:"Il a raté notre dîner pour un raid en ligne",
    a:"Emma", b:"Lucas", hook:"Table réservée à 20h. Lui, casque vissé, « deux minutes ».",
    msgs:[
      {r:"A",n:"Emma",t:"J'avais réservé notre table depuis deux semaines pour notre premier anniversaire de couple. À 20h, tu étais encore en plein raid, casque sur les oreilles, tu m'as dit « deux minutes, on ne peut pas lâcher là en plein milieu ». On est arrivés à 21h passées, le restaurant avait déjà redonné notre table à quelqu'un d'autre."},
      {r:"B",n:"Lucas",t:"C'était un raid de guilde important, si j'avais lâché en plein milieu j'aurais plombé sept autres personnes qui comptaient sur moi ce soir-là pour terminer ce donjon qu'on préparait depuis des semaines. Je ne pouvais pas juste déconnecter sans prévenir tout le monde."},
      {r:"A",n:"Emma",t:"Donc sept inconnus derrière un écran passent avant notre soirée d'anniversaire qu'on avait planifiée ensemble depuis longtemps. C'est exactement le problème que je te remonte depuis des mois, tu ne le vois juste jamais avant qu'il soit trop tard."},
      {r:"B",n:"Lucas",t:"Formulé comme ça, je comprends mieux à quel point ça a dû être blessant de m'attendre pour rien pendant une heure. J'aurais pu prévenir la guilde à l'avance que ce soir j'étais indisponible après 19h45."},
    ],
    v:{ pctA:78, pctB:22,
      analyse:"Lucas, un engagement envers une équipe de jeu peut être réel et légitime — mais ça se planifie à l'avance, et ça ne passe jamais devant un dîner d'anniversaire réservé depuis deux semaines. Faire perdre la table à Emma pour ne pas « plomber » des coéquipiers en ligne, c'était un choix, et clairement le mauvais : gros point pour Emma. Le vrai sujet dépasse le jeu vidéo lui-même : Emma ne t'attaque pas sur ta passion, elle constate un classement de priorités où elle finit systématiquement en dernier quand un imprévu numérique se présente. Une passion n'est jamais le problème ; c'est le moment où elle t'empêche d'honorer la personne en face de toi qui l'est vraiment.",
      pacteA:"Je dirai mon besoin de me sentir prioritaire sans mépriser ta passion pour autant.",
      pacteB:"Je préviens ma guilde des dates qui comptent à l'avance. Emma passe avant le raid, sans exception.",
      mot:"Une passion se planifie. Un anniversaire ne se rejoue jamais." }
  },
  {
    id:"d16", cat:"Famille", emoji:"🎄", title:"Noël chez sa mère ou la mienne ?",
    a:"Léa", b:"Antoine", hook:"Deux familles qui attendent. Un seul 25 décembre. Zéro solution en vue.",
    msgs:[
      {r:"A",n:"Léa",t:"Ça fait trois années consécutives qu'on passe systématiquement le 25 décembre chez ta mère à toi, sans aucune alternance. Cette année c'est censé être mon tour, et ma grand-mère vieillit sérieusement, je veux vraiment être présente auprès d'elle. Tu me réponds « on verra » depuis maintenant six semaines complètes sans jamais trancher."},
      {r:"B",n:"Antoine",t:"Ma mère prépare son repas de Noël depuis le mois d'octobre déjà, elle a déjà tout commandé et organisé pour nous recevoir. Si on annule maintenant à la dernière minute, elle va être complètement dévastée et je vais culpabiliser pendant toute une année entière derrière."},
      {r:"A",n:"Léa",t:"Et ma propre culpabilité à moi, si je rate peut-être l'un des derniers Noëls de ma grand-mère pendant qu'elle est encore là, elle ne compte pour rien dans cette équation ? Tu ne sembles jamais mettre nos deux détresses sur la même balance équitable."},
      {r:"B",n:"Antoine",t:"Ce n'est vraiment pas ce que j'essaie de dire, loin de là. Mais ma mère vit seule toute l'année, alors que la tienne a toute une famille nombreuse autour d'elle en permanence, c'est different selon moi."},
    ],
    v:{ pctA:72, pctB:28,
      analyse:"Léa, tu as l'argument objectif du temps qui passe : trois années identiques d'affilée chez la même famille, plus l'urgence réelle de ta grand-mère vieillissante. Antoine, ta loyauté envers ta mère isolée est belle et compréhensible en soi, mais elle t'a progressivement transformé en otage silencieux : répondre « on verra » pendant six semaines entières, c'est éviter la décision plutôt que la peser honnêtement des deux côtés. Point net pour Léa sur ce dossier. Le vrai sujet dépasse largement Noël lui-même : Antoine, tu as tellement peur de décevoir ta propre mère que tu finis par décevoir ta compagne par défaut, année après année, sans même t'en rendre pleinement compte. Tant que tu ne poseras pas une limite tendre mais ferme avec elle, Léa passera toujours en second — et aucune dinde de Noël ne réparera durablement ce déséquilibre installé.",
      pacteA:"Je propose une vraie alternance écrite et actée entre nos deux familles, pas une bataille répétée chaque décembre.",
      pacteB:"Je parle à ma mère avec amour mais fermeté assumée. Cette année, sans détour, on va chez Léa comme prévu.",
      mot:"On peut aimer sa mère et choisir pleinement sa compagne. Les deux à la fois." }
  },
  {
    id:"d02", cat:"Intime", emoji:"👀", title:"Elle revoit son ex, « juste un ami »",
    a:"Thibault", b:"Camille", hook:"Sept déjeuners en deux mois. « Juste un ami », dit-elle.",
    msgs:[
      {r:"A",n:"Thibault",t:"Je suis tombé sur votre historique de messages en te prêtant mon chargeur pour ton téléphone. Sept déjeuners avec ton ex en deux mois, que tu ne m'as jamais mentionnés une seule fois. Si c'était vraiment anodin, pourquoi je l'apprends par hasard et pas par toi ?"},
      {r:"B",n:"Camille",t:"Parce que je savais que tu réagirais exactement comme ça, en y voyant un drame alors que c'est juste un ami avec qui j'ai un passé, on parle de nos vies, de son nouveau travail, de rien de spécial. Si je t'en avais parlé, tu m'aurais fait une scène pour rien."},
      {r:"A",n:"Thibault",t:"Sept fois en deux mois, ce n'est pas « rien de spécial », c'est une vraie place dans ton quotidien que tu m'as cachée. Le sujet ce n'est même pas lui, c'est que tu as anticipé ma réaction et choisi le silence plutôt que la transparence."},
      {r:"B",n:"Camille",t:"Ok le silence était sans doute une erreur, j'aurais dû t'en parler ouvertement dès le début. Mais je refuse qu'on me demande de choisir entre mes amitiés passées et toi."},
    ],
    v:{ pctA:70, pctB:30,
      analyse:"Camille, personne ne te demande de sacrifier une amitié — mais sept rendez-vous réguliers gardés secrets ne relèvent plus de la simple discrétion, c'est une omission entretenue. Le fait que Thibault l'apprenne par accident, et non par toi, en dit long : tu savais que ce n'était pas neutre, sinon tu l'aurais mentionné en passant, comme n'importe quel déjeuner ordinaire. Point pour Thibault. Cela dit, Thibault, ta réaction ne doit pas devenir un contrôle de ses fréquentations — le sujet n'est pas « cet ex est interdit », c'est « rien ne devrait être cachée entre nous ». Camille le reconnaît en fin de dispute, ce qui est un bon point de départ : la transparence n'exclut pas les amitiés, elle exclut juste le secret.",
      pacteA:"Je ne te demande pas de rompre cette amitié, juste de ne plus rien me cacher à son sujet.",
      pacteB:"Je te parle de lui ouvertement désormais, sans filtrer ce que je crains que tu penses.",
      mot:"Une amitié honnête n'a jamais besoin d'être cachée." }
  },
  {
    id:"d19", cat:"Amis", emoji:"💸", title:"Elle ne rembourse jamais sa part",
    a:"Manon", b:"Jade", hook:"Trois ans d'amitié fidèle, 400 € de restos « on partage moitié-moitié ».",
    msgs:[
      {r:"A",n:"Manon",t:"À chaque restaurant qu'on fait ensemble depuis des années, c'est systématiquement la même phrase : « je te fais un virement ce soir sans faute ». Le virement en question n'arrive jamais réellement, à aucun moment. J'ai fait précisément les comptes récemment : presque 400 euros accumulés sur trois années complètes. Là, j'ai avancé intégralement notre week-end à Lisbonne et tu esquives clairement depuis mon dernier message à ce sujet."},
      {r:"B",n:"Jade",t:"Tu as vraiment gardé des comptes précis pendant trois années entières sur notre amitié ? Je pensais sincèrement qu'entre vraies amies proches, on ne calculait pas les choses de cette façon comptable. Ça me met terriblement mal à l'aise que tu aies visiblement un tableau Excel détaillé sur notre relation d'amitié."},
      {r:"A",n:"Manon",t:"Je ne comptais absolument rien au départ, jusqu'à ce que ça devienne un schéma systématique et que ça commence sérieusement à peser sur mon propre budget mensuel. Je ne suis clairement pas ta banque personnelle disponible à volonté."},
      {r:"B",n:"Jade",t:"D'accord, je te dois réellement de l'argent, j'assume totalement cette responsabilité maintenant. Mais tu aurais peut-être pu m'en parler bien avant que ça ne devienne officiellement un dossier chiffré entre nous deux."},
    ],
    v:{ pctA:69, pctB:31,
      analyse:"Manon, une dette occasionnelle entre amies proches, on laisse généralement couler sans y penser deux fois. Mais 400 euros accumulés de façon systématique qui pèsent concrètement sur ton budget personnel, ce n'est plus du tout anodin : point clair pour toi sur ce sujet précis. Jade, te sentir gênée par un « tableau Excel » évoqué est parfaitement humain et compréhensible, mais c'est surtout un écran de fumée pratique : tu détournes la conversation vers la culpabilisation de Manon au lieu d'aborder frontalement le remboursement qui traîne depuis trois ans. Le vrai sujet : Manon a laissé filer volontairement pendant trois années entières par peur sincère d'abîmer votre amitié, et ce silence prolongé a laissé la dette gonfler jusqu'à cette explosion actuelle. Une amitié solide survit très bien à un « tu me dois 400 euros » dit clairement ; elle survit beaucoup moins bien à un ressentiment accumulé secrètement pendant des années.",
      pacteA:"Je parlerai d'argent immédiatement la prochaine fois, avant que la situation ne pourrisse silencieusement entre nous.",
      pacteB:"Je te rembourse intégralement par échéances dès cette semaine précise. Fini les « ce soir sans faute » qui restent sans suite concrète.",
      mot:"Les bons comptes font vraiment les amitiés qui durent longtemps et sereinement." }
  },
  {
    id:"d05", cat:"Intime", emoji:"💌", title:"Elle textote encore avec son ex",
    a:"Sarah", b:"Diane", hook:"« Bonne nuit ma belle. » De son ex. À 23h58.",
    msgs:[
      {r:"A",n:"Sarah",t:"Ton téléphone a vibré sur la table, notification affichée : « Bonne nuit ma belle » de ton ex, à minuit moins deux. Ça fait six mois qu'on est ensemble et je découvre que vous vous écrivez encore des petits mots doux tous les soirs. Tu ne m'en as jamais parlé."},
      {r:"B",n:"Diane",t:"C'est une habitude qu'on a gardée depuis notre rupture, ça n'a plus rien de romantique pour moi, c'est juste devenu un rituel affectueux entre nous, comme entre vieilles amies. Je comprends que ça puisse sembler bizarre vu de l'extérieur, mais pour moi ce n'est pas un sujet."},
      {r:"A",n:"Sarah",t:"« Bonne nuit ma belle » tous les soirs, ce n'est pas neutre pour moi, même si tu ne le vis pas comme romantique. Le fait que tu ne m'en aies jamais parlé, alors que c'est quotidien, me fait sentir exclue d'un rituel intime qui existait avant moi et continue sans que je sache où il s'arrête."},
      {r:"B",n:"Diane",t:"Je comprends mieux maintenant que ce n'est pas une question de confiance en mon ex, mais de me sentir mise à l'écart d'un rituel qui te semble bizarre venant de l'extérieur. Je peux en discuter avec elle, ou changer la formule, sans couper le contact complètement."},
    ],
    v:{ pctA:63, pctB:37,
      analyse:"Diane, garder une tendresse avec une ex après une rupture peut être sain et ne mérite pas d'être jugé en soi — mais un rituel quotidien et affectueux gardé secret pendant six mois de relation, ce n'est plus une simple habitude anodine, c'est un espace intime que Sarah découvre sans y avoir jamais été invitée. Léger avantage à Sarah, pas parce que ton amitié est un problème, mais parce que le secret autour d'elle en devient un. Ta proposition finale — en parler avec ton ex plutôt que couper — est la bonne approche : mature, sans sacrifice inutile. Le vrai sujet : Sarah ne demande pas la fin de cette amitié, elle demande à ne plus la découvrir par surprise sur un écran qui s'allume à minuit.",
      pacteA:"Je dis mon malaise sans exiger la fin de cette amitié, juste plus de visibilité dessus.",
      pacteB:"J'intègre Sarah dans ce que je vis avec mon ex, au lieu de le garder dans un coin secret.",
      mot:"Une tendresse passée n'a pas besoin d'être secrète pour rester sincère." }
  },
  {
    id:"d10", cat:"Couple", emoji:"🧹", title:"La charge mentale invisible",
    a:"Hélène", b:"Bruno", hook:"« Tu n'avais qu'à demander. » Elle a demandé, pendant 4 ans.",
    msgs:[
      {r:"A",n:"Hélène",t:"Les rendez-vous médecin des enfants, les cadeaux d'anniversaire pour toute la famille, le stock de papier toilette, le dentiste, les papiers de l'école : c'est moi, tout le temps, sans exception depuis quatre ans. Quand je craque et que je te le dis, tu réponds toujours « tu n'avais qu'à demander », mais demander, c'est encore un travail mental que je dois faire en plus."},
      {r:"B",n:"Bruno",t:"Mais je t'aide dès que tu me dis précisément quoi faire, je passe l'aspirateur, je fais la vaisselle presque tous les soirs, je vais chercher les enfants à l'école deux fois par semaine. Je ne refuse jamais une tâche qu'on me donne, tu ne peux pas dire que je ne fais rien à la maison."},
      {r:"A",n:"Hélène",t:"« Dès que je te dis quoi faire », voilà exactement le problème que je pointe depuis le début. Tu es un excellent exécutant qui attend les ordres, alors que moi je suis la cheffe de projet vingt-quatre heures sur vingt-quatre qui n'a jamais de vraie pause mentale, et ce n'est pas du tout la même fatigue."},
      {r:"B",n:"Bruno",t:"Je crois que je n'avais vraiment jamais compris que penser à tout, anticiper tout, était un travail en soi, distinct des tâches elles-mêmes. Je voyais uniquement les tâches concrètes à accomplir, jamais la charge invisible de devoir y penser en amont."},
    ],
    v:{ pctA:79, pctB:21,
      analyse:"Hélène, tu mets des mots précis sur l'une des inégalités les plus invisibles du couple moderne : la différence fondamentale entre exécuter une tâche qu'on te donne et porter la responsabilité complète d'y penser, de l'anticiper, de la planifier. « Tu n'avais qu'à demander » place toute la charge d'anticipation sur toi seule, et c'est épuisant précisément parce que ça ne se voit jamais de l'extérieur. Gros point pour toi. Bruno, tu n'es ni paresseux ni de mauvaise foi — tu participes réellement quand on te sollicite — mais tu confonds depuis longtemps « aider ponctuellement » et « co-porter la charge au même niveau », et ta prise de conscience finale est le vrai point de départ d'un changement. Tant que l'un demande et l'autre exécute, il n'y a pas deux adultes qui gèrent un foyer ensemble, il y en a un qui délègue en permanence et un qui obéit sans jamais anticiper.",
      pacteA:"Je lâche des domaines entiers de gestion au lieu de tout superviser depuis le dessus.",
      pacteB:"Je prends la responsabilité complète de domaines précis : je pense, j'anticipe, je gère sans qu'on me le demande.",
      mot:"Partager la charge, ce n'est pas aider — c'est porter, ensemble, au même niveau." }
  },
  {
    id:"d15", cat:"Coloc", emoji:"🔥", title:"Son copain vit ici sans jamais participer",
    a:"Adam", b:"Sofia", hook:"Trois personnes dans l'appart. Deux sur le bail. Une qui vide le frigo.",
    msgs:[
      {r:"A",n:"Adam",t:"Ton copain est présent six nuits sur sept depuis maintenant deux mois. Il utilise l'eau chaude tous les jours, le chauffage, notre wifi, il vide régulièrement le frigo commun. On paie les charges à deux officiellement, mais on vit clairement à trois au quotidien. Soit il participe financièrement, soit il lève un peu le pied sur sa présence."},
      {r:"B",n:"Sofia",t:"C'est mon copain, il dort dans ma chambre à moi, il ne prend littéralement aucune place supplémentaire dans l'appartement commun. Tu veux vraiment qu'on facture officiellement mon histoire d'amour comme une colocation payante ?"},
      {r:"A",n:"Adam",t:"Je ne facture absolument pas ton histoire d'amour, je facture les trente pour cent de charges en plus qu'on paie depuis qu'il squatte pratiquement à temps plein ici. Regarde simplement la dernière facture d'électricité, elle a littéralement explosé ce mois-ci."},
      {r:"B",n:"Sofia",t:"D'accord, la facture a vraiment monté, c'est un fait indéniable que je ne peux pas nier. Mais le mot « squatte » est méchant venant de toi, c'est quelqu'un que j'aime profondément, pas un intrus quelconque."},
    ],
    v:{ pctA:71, pctB:29,
      analyse:"Adam, ta demande reste purement factuelle : une présence quasi permanente qui consomme concrètement les charges communes doit logiquement contribuer d'une façon ou d'une autre. La facture qui grimpe nettement te donne objectivement raison sur le fond. Point pour toi. Sofia, l'amour n'est absolument pas en cause ici et personne ne le remet en question — mais « il ne prend pas de place » devient faux dès qu'on parle concrètement d'eau chaude, de chauffage et de nourriture partagée au quotidien. Le vrai sujet : une frontière floue et jamais posée entre « invité occasionnel » et « habitant à temps plein » qui pèse financièrement sur Adam seul. La solution n'est pas d'exclure ton amour de l'appartement, c'est simplement de nommer la réalité ensemble : au-delà d'un certain nombre de nuits par mois, on participe équitablement.",
      pacteA:"Je propose un seuil clair de nuits et une participation équitable, sans jamais viser ta relation en elle-même.",
      pacteB:"J'accepte qu'il participe financièrement aux charges quand il est présent aussi souvent. C'est simplement juste envers toi.",
      mot:"L'amour est gratuit. L'eau chaude, elle, ne l'est jamais." }
  },
  {
    id:"d17", cat:"Famille", emoji:"👶", title:"Sa mère débarque sans prévenir avec le bébé",
    a:"Julie", b:"Marc", hook:"« Je passais dans le coin. » À 7h30. Avec un double des clés.",
    msgs:[
      {r:"A",n:"Julie",t:"Ta mère possède un double de nos clés officiellement « pour les urgences uniquement ». Ce matin elle débarque chez nous à 7h30 pendant que j'allaite tranquillement, en peignoir je te rappelle, avec un simple « je passais dans le coin par hasard ». Elle a pris notre bébé dans ses bras sans même me demander mon accord au préalable. Je n'ai plus aucune intimité chez moi désormais."},
      {r:"B",n:"Marc",t:"Elle est folle amoureuse de son petit-fils, elle veut simplement aider autant qu'elle peut. Tu sais à quel point elle attendait ce bébé depuis des années. Lui retirer les clés maintenant, ça va vraiment la briser émotionnellement, j'en suis certain."},
      {r:"A",n:"Julie",t:"Et moi dans tout ça ? Je me sens littéralement en visite permanente dans mon propre logement. J'ai désespérément besoin de souffler un peu, de créer notre bulle intime à trois, pas d'être inspectée à 7h30 du matin sans prévenir."},
      {r:"B",n:"Marc",t:"Je comprends ta détresse, sincèrement... mais entre ma mère et toi, je me sens complètement écartelé au milieu, sans savoir comment gérer la situation sans blesser l'une de vous deux."},
    ],
    v:{ pctA:76, pctB:24,
      analyse:"Julie, une jeune mère a un droit fondamental à son intimité, particulièrement durant les premières semaines fragiles après l'accouchement. Une belle-mère qui entre avec les clés à 7h30 et prend le bébé sans demander la moindre autorisation, aussi aimante soit-elle par ailleurs, franchit clairement une frontière essentielle. Net avantage pour toi sur ce point précis. Marc, ton amour sincère pour ta mère et ta peur réelle de la « briser » émotionnellement sont compréhensibles, mais ils t'ont placé en position de spectateur passif pendant que ta compagne étouffe littéralement chez elle. Le vrai sujet : tu dois passer du statut d'« écartelé entre deux femmes » à celui de protecteur affirmé de votre foyer commun. Poser un cadre clair à ta mère — sonner avant d'entrer, prévenir systématiquement, rendre les clés — n'est absolument pas la trahir, c'est simplement protéger la bulle dont votre nouveau-né a désespérément besoin pour grandir sereinement.",
      pacteA:"Je dis mon besoin vital d'intimité sans culpabiliser, c'est parfaitement légitime dans ma situation.",
      pacteB:"Je parle à ma mère avec toute ma tendresse mais fermement : on sonne désormais, on prévient toujours avant. Je protège notre bulle familiale.",
      mot:"Un nid a besoin de calme véritable pour grandir sereinement. Protégez le vôtre sans culpabiliser." }
  },
  {
    id:"d03", cat:"Intime", emoji:"🔥", title:"« Mon corps m'appartient », dit-elle",
    a:"Nora", b:"Yanis", hook:"Elle danse serrée en soirée. Il rentre en silence.",
    msgs:[
      {r:"A",n:"Nora",t:"En soirée hier, j'ai dansé collée avec Rayan, on riait, on flirtait un peu, et alors ? Je ne t'ai jamais trompé, je ne t'ai jamais menti, mais mon corps m'appartient et j'ai le droit de m'amuser et de plaire sans que ce soit un crime envers toi."},
      {r:"B",n:"Yanis",t:"Je ne te dis pas que tu m'appartiens, mais on est en couple, et te voir danser comme ça avec un autre devant moi, sans un regard, ça m'a fait mal toute la soirée. Ce n'est pas ton corps le sujet, c'est ce que je ressens, moi, en le voyant."},
      {r:"A",n:"Nora",t:"Donc je devrais me censurer à chaque soirée pour gérer ta jalousie ? On n'a jamais parlé clairement de ce qu'on s'autorise ou pas dans ce couple, tu ne peux pas m'en vouloir pour une règle qu'on n'a jamais posée ensemble."},
      {r:"B",n:"Yanis",t:"C'est vrai qu'on n'en a jamais parlé franchement, chacun suppose ce que l'autre accepte. Mais j'ai quand même besoin de savoir où sont les limites de notre couple, même si elles ne sont pas écrites."},
    ],
    v:{ pctA:52, pctB:48,
      analyse:"Sujet délicat, et vous avez tous les deux une part de raison. Nora, ton corps t'appartient, c'est un fait, et personne ne devrait te dicter comment t'amuser par principe — mais un couple n'est pas fait que d'individus séparés, c'est aussi un accord tacite ou explicite sur ce qui se vit à deux. Yanis, ta blessure est réelle et légitime, sans pour autant que tu aies le droit de la transformer en interdiction générale de son comportement. Le vrai sujet ici n'est ni l'autonomie ni la jalousie : c'est que vous n'avez jamais défini ensemble ce que votre couple autorise ou non — exclusivité stricte, liberté totale, ou entre-deux. Tant que cette conversation n'aura pas eu lieu clairement, ce genre de soirée recommencera, avec la même incompréhension des deux côtés.",
      pacteA:"J'accepte de parler cadre avec toi, sans le vivre comme une atteinte à ma liberté.",
      pacteB:"Je nomme mes limites sans exiger qu'elles deviennent les tiennes par défaut.",
      mot:"La liberté et l'amour ont juste besoin d'un cadre dit à voix haute." }
  },
  {
    id:"d11", cat:"Couple", emoji:"🎂", title:"Il a oublié mon anniversaire, pas le match",
    a:"Awa", b:"Greg", hook:"Minuit, aucun message. Mais un rappel « MATCH 21H » depuis une semaine.",
    msgs:[
      {r:"A",n:"Awa",t:"Minuit pile, mon anniversaire commence, et aucun message de ta part. Le lendemain midi non plus, toujours rien. Mais sur le frigo, il y a un post-it « MATCH 21H » que tu as collé toi-même il y a une semaine entière. Explique-moi comment ton cerveau classe les priorités."},
      {r:"B",n:"Greg",t:"J'ai eu une semaine complètement dingue au travail, j'étais noyé sous les dossiers en retard, et j'allais te le souhaiter dès que je rentrais avec un vrai cadeau préparé depuis longtemps. Tu ne me laisses même pas dix minutes avant de m'accuser de tout oublier."},
      {r:"A",n:"Awa",t:"« Noyé » au point d'oublier ma date de naissance, mais pas au point d'oublier un match de foot planifié une semaine à l'avance ? C'est exactement ce contraste-là qui me fait mal, Greg, pas le simple oubli en lui-même."},
      {r:"B",n:"Greg",t:"Dit comme ça, effectivement, c'est vrai que j'ai mis de l'énergie mentale pour noter le match et zéro pour ta date pourtant tout aussi prévisible. Je n'ai vraiment aucune excuse solide à te donner là-dessus."},
    ],
    v:{ pctA:82, pctB:18,
      analyse:"Greg, « j'étais noyé » ne tient plus la route quand tu as trouvé, dans cette même semaine surchargée, la ressource mentale nécessaire pour noter un match de foot sur un post-it collé au frigo. Ce contraste dit tout : ce n'est pas un problème de mémoire défaillante, c'est un problème d'attention sélective, consciente ou non. Gros point pour Awa. À ton crédit, tu le reconnais rapidement en fin de dispute sans te chercher d'excuses tordues, ce qui est précieux et rare. Le vrai sujet : Awa ne réclame pas un cadeau somptueux, elle réclame de compter, dans ta tête, autant que ce qui t'enthousiasme spontanément. Un anniversaire oublié pendant qu'un match reste noté envoie un message involontaire mais réel sur l'ordre de tes priorités.",
      pacteA:"Je dis mon besoin de compter pour toi au lieu d'encaisser en silence chaque année qui passe.",
      pacteB:"Je mets tes dates importantes dans mon agenda exactement comme mes matchs. Tu passes en tête, sans exception.",
      mot:"Ce qu'on prend le temps de noter, c'est ce qui compte vraiment." }
  },
  {
    id:"d06", cat:"Intime", emoji:"🎭", title:"Sorti en boîte comme célibataire",
    a:"Adrien", b:"Nathan", hook:"Alliance retirée avant d'entrer. « Pour pas se prendre la tête. »",
    msgs:[
      {r:"A",n:"Adrien",t:"Un ami m'a envoyé une story où on te voit en boîte hier soir, sans ton alliance, en train de flirter ouvertement avec un mec au bar. Tu m'avais dit que tu sortais « entre potes tranquille ». Retirer ton alliance avant d'entrer, ce n'est pas un oubli, c'est un choix."},
      {r:"B",n:"Nathan",t:"Je l'ai enlevée parce que dans ce milieu-là, dire qu'on est marié change complètement comment les gens te traitent, on devient invisible ou on te colle une étiquette. Ça ne veut pas dire que je cherchais autre chose, je voulais juste danser et m'amuser sans qu'on me case tout de suite."},
      {r:"A",n:"Adrien",t:"Le problème n'est pas que tu danses ou que tu t'amuses, c'est que tu effaces volontairement notre mariage dans un endroit précis, comme si j'étais une case à cocher selon le contexte. Ça me fait sentir que notre couple existe seulement quand ça t'arrange."},
      {r:"B",n:"Nathan",t:"Dit comme ça, je réalise que ça ressemble à de la honte alors que ce n'en est pas — mais l'effet est le même pour toi, et c'est ça qui compte au final, pas mon intention."},
    ],
    v:{ pctA:69, pctB:31,
      analyse:"Nathan, la pression sociale que tu décris dans certains milieux est réelle et personne ne la nie — mais retirer son alliance avant d'entrer n'est pas une simple précaution, c'est un geste actif qui efface Adrien de l'équation, dans un lieu précis, à un moment précis. Point pour Adrien : ce n'est pas une question de flirt ou de liberté, c'est une question de visibilité de votre couple, qui semble conditionnelle selon le contexte. Ta phrase finale est juste et courageuse : peu importe l'intention derrière le geste, c'est l'effet ressenti par ton mari qui doit primer dans cette discussion. Le vrai sujet : Adrien a besoin de sentir que votre mariage existe partout, pas seulement là où c'est confortable de l'assumer.",
      pacteA:"Je dis ce que je ressens sans transformer ça en jugement sur le milieu que tu fréquentes.",
      pacteB:"Je garde mon alliance, ou j'en parle avant si je ne me sens pas de la porter ce soir-là.",
      mot:"Un mariage ne devrait jamais être une case qu'on coche selon l'endroit." }
  },
  {
    id:"d20", cat:"Amis", emoji:"🎤", title:"Il a annulé mon anniversaire pour un date",
    a:"Dylan", b:"Marco", hook:"« Je serai là, c'est sûr. » Deux heures avant : « désolé, imprévu ».",
    msgs:[
      {r:"A",n:"Dylan",t:"Pour mon anniversaire, j'avais réservé une salle entière depuis des semaines et compté sérieusement sur ta présence, tu avais confirmé au moins dix fois différentes « je serai là c'est absolument sûr ». À 18h précises, deux heures seulement avant l'événement, tu m'écris « désolé mec, un imprévu de dernière minute ». J'apprends ensuite, par un ami commun, que ton « imprévu » était en réalité un date Tinder programmé depuis plusieurs jours."},
      {r:"B",n:"Marco",t:"Ça faisait littéralement des semaines que je discutais avec cette fille en ligne, et elle n'était disponible que ce soir précis-là, c'était vraiment ma seule et unique chance de la rencontrer enfin. Je me suis dit intérieurement que tu comprendrais la situation, on est amis depuis quinze années entières quand même."},
      {r:"A",n:"Dylan",t:"Justement, quinze années d'amitié fidèle, et tu me lâches littéralement pour un tout premier date au tout dernier moment possible sans même me prévenir à l'avance ? Si tu m'avais dit la vérité une semaine avant l'événement, j'aurais probablement compris sans problème majeur. Là, c'est clairement le mensonge sur le motif et le timing catastrophique qui posent vraiment problème entre nous."},
      {r:"B",n:"Marco",t:"Ouais... j'ai effectivement menti sciemment sur le motif réel parce que je savais pertinemment que ça sonnerait mal une fois dit clairement. Et te lâcher deux heures seulement avant ton événement, c'est objectivement indéfendable de ma part, je le reconnais sans détour maintenant."},
    ],
    v:{ pctA:80, pctB:20,
      analyse:"Marco, deux fautes distinctes se cumulent clairement contre toi dans cette histoire : le lâchage à peine deux heures avant un événement réservé de longue date, et surtout le mensonge délibéré sur le motif réel de ton absence. Une rencontre amoureuse qui compte vraiment pour toi peut parfaitement se défendre en soi — mais elle se dit honnêtement à l'avance, pas en abandonnant un ami proche la veille avec un faux prétexte fabriqué de toutes pièces. Gros point pour Dylan sur ce dossier. À ton honneur cependant, tu ne te caches pas derrière des excuses fumeuses une fois confronté aux faits. Le vrai sujet : Dylan ne t'en veut pas fondamentalement d'avoir une vie amoureuse active, il t'en veut sincèrement d'avoir été traité comme l'option qu'on écarte sans ménagement dès qu'une opportunité plus excitante se présente, et surtout d'avoir été mené en bateau sciemment. Quinze années de confiance méritent objectivement la vérité, même quand elle est inconfortable à formuler sur le moment.",
      pacteA:"Je dirai ma déception réelle au lieu de ravaler silencieusement et de m'éloigner progressivement sans explication.",
      pacteB:"Je serai honnête sur mes choix personnels, même inconfortables à assumer, et je ne lâche plus jamais au tout dernier moment.",
      mot:"Quinze années d'amitié valent largement une vérité inconfortable, même tardive." }
  },
  {
    id:"d12", cat:"Couple", emoji:"💍", title:"Elle a dit oui, puis a tout raconté avant lui",
    a:"Romain", b:"Chloé", hook:"La demande était un secret. Le groupe familial l'a su avant lui.",
    msgs:[
      {r:"A",n:"Romain",t:"Je te fais ma demande en mariage, moment que j'avais préparé pendant des semaines, tu dis oui les larmes aux yeux. On avait convenu ensemble d'annoncer la nouvelle à nos deux familles réunies le dimanche suivant. Le samedi soir, ma mère m'appelle en pleurant de joie : tu avais déjà tout publié sur le groupe famille avec douze photos différentes."},
      {r:"B",n:"Chloé",t:"J'étais tellement submergée de bonheur que ça a débordé tout seul, c'est la plus belle nouvelle de toute ma vie et je ne pouvais pas la garder pour moi pendant encore vingt-quatre heures entières. Tu m'en veux vraiment d'avoir été trop heureuse pour me contenir ?"},
      {r:"A",n:"Romain",t:"Je ne t'en veux absolument pas d'être heureuse, ça me touche même énormément. Ce qui me fait mal, c'est que tu m'as volé le moment qu'on avait décidé ensemble de vivre à deux : je voulais voir en direct le visage de ma mère apprendre la nouvelle, pas recevoir son appel émue après coup, une fois que tout était déjà joué sans moi."},
      {r:"B",n:"Chloé",t:"Je n'ai vraiment pas pensé à cette dimension-là sur le moment, j'étais complètement sur mon nuage et je n'ai pas réalisé que je te privais d'un souvenir qu'on avait construit ensemble comme projet commun."},
    ],
    v:{ pctA:58, pctB:42,
      analyse:"Chloé, ta joie débordante est sincère et personne ne te reproche d'être heureuse — c'est même adorable de te voir dans cet état. Mais un moment convenu explicitement à deux, « on l'annonce ensemble dimanche », que tu court-circuites la veille sans même y penser, ça prive Romain d'un souvenir qui n'appartenait pas qu'à toi seule. Léger avantage à Romain sur ce point précis. Le vrai sujet dépasse l'annonce elle-même : vous vivez le bonheur à deux vitesses différentes. Chloé a besoin de partager immédiatement vers l'extérieur pour décupler sa joie, quand Romain préfère d'abord la savourer en intimité avant de la livrer au monde. Aucune des deux façons n'est mauvaise en soi — mais un projet commun mérite un accord commun avant d'être partagé, même quand l'émotion pousse à déborder.",
      pacteA:"Je dis ce qui compte pour moi avant l'événement, pas ma déception seulement après coup.",
      pacteB:"Pour nos grands moments à deux, je propose « on annonce quand ensemble ? » avant de publier quoi que ce soit.",
      mot:"La plus belle nouvelle mérite d'être vécue à deux, en premier." }
  },
  {
    id:"d18", cat:"Famille", emoji:"📞", title:"Il appelle sa mère cinq fois par jour",
    a:"Selin", b:"Gaël", hook:"Dîner, cinéma, intimité : le téléphone sonne systématiquement. C'est toujours maman.",
    msgs:[
      {r:"A",n:"Selin",t:"Ta mère t'appelle littéralement cinq fois par jour en moyenne, et tu décroches systématiquement à chaque fois, même au restaurant, même en plein cinéma, même au lit pendant un moment intime entre nous. Hier soir précisément, en plein moment tendre à deux, ton téléphone sonne, tu réponds directement « oui maman ? » sans même hésiter une seconde. Je me sens en troisième position dans mon propre couple au quotidien."},
      {r:"B",n:"Gaël",t:"Elle est âgée maintenant et vit complètement seule, si je ne réponds pas immédiatement je m'inquiète sérieusement qu'il lui soit arrivé quelque chose de grave. Tu voudrais sincèrement que j'ignore délibérément ma propre mère qui m'a élevé seule ? C'est aussi une question fondamentale de respect filial envers elle."},
      {r:"A",n:"Selin",t:"Je ne te demande absolument pas de l'ignorer complètement, je te demande simplement de ne pas décrocher systématiquement en plein moment à deux pour un appel qui n'est presque jamais réellement urgent en pratique. Rappeler dix minutes après le moment intime, ça change vraiment tout pour moi."},
      {r:"B",n:"Gaël",t:"C'est vrai que par pur réflexe automatique je décroche toujours, même quand objectivement rien ne presse vraiment dans l'instant. Je pourrais tout à fait filtrer intelligemment et rappeler juste après, sans jamais la négliger pour autant."},
    ],
    v:{ pctA:67, pctB:33,
      analyse:"Selin, tu ne demandes absolument pas à Gaël de délaisser sa mère âgée et vivant seule — tu demandes uniquement que les moments d'intimité ne soient pas systématiquement interrompus pour des appels rarement urgents dans les faits. Cette nuance précise est parfaitement juste : point pour toi. Gaël, ton inquiétude légitime pour une mère seule est tout à fait honorable et compréhensible, mais « décrocher par pur réflexe même quand rien ne presse objectivement » révèle une automaticité qui déborde largement sur ton couple au quotidien. Ta solution finale — filtrer intelligemment et rappeler juste après — est exactement la bonne approche à adopter. Le vrai sujet : être un bon fils présent et un bon partenaire présent ne s'opposent absolument pas entre eux, sauf quand le premier réflexe automatique efface systématiquement le second sans même y réfléchir.",
      pacteA:"Je dis mon besoin réel de moments protégés sans jamais attaquer frontalement ta relation à ta mère.",
      pacteB:"Je filtre intelligemment les appels dans nos moments privilégiés à deux et je rappelle juste après. Personne n'est réellement négligé dans cette approche.",
      mot:"On peut être un fils présent ET un partenaire présent, sans jamais sacrifier l'un pour l'autre." }
  },
  {
    id:"d07", cat:"Intime", emoji:"🌙", title:"Un baiser volé « qui ne compte pas »",
    a:"Inès", b:"Julien", hook:"Un after, un slow, un baiser. « C'était rien », dit-il.",
    msgs:[
      {r:"A",n:"Inès",t:"Ta meilleure amie m'a raconté, mal à l'aise, qu'à l'after de vendredi tu as embrassé une fille pendant un slow. Tu ne m'en as jamais parlé, j'ai dû l'apprendre par une tierce personne qui culpabilisait de me le cacher. Ça fait trois jours que tu me souris comme si de rien n'était."},
      {r:"B",n:"Julien",t:"C'était un moment d'alcool et de musique, ça n'a duré même pas dix secondes, ça ne représente rien de ce que je ressens pour toi. Je ne t'en ai pas parlé parce que je savais que ça prendrait des proportions énormes pour un geste qui, sur le moment, ne voulait rien dire du tout."},
      {r:"A",n:"Inès",t:"« Ça ne voulait rien dire » n'efface pas que tu m'as menti par omission pendant trois jours en te comportant normalement. Ce n'est pas la durée du baiser le problème, c'est que tu as choisi le silence plutôt que l'honnêteté, encore une fois face à quelque chose d'inconfortable."},
      {r:"B",n:"Julien",t:"Tu as raison, j'ai évité le sujet parce que j'avais peur de ta réaction, et ce choix a été pire que le baiser lui-même. Je n'ai pas de bonne excuse pour ces trois jours de silence."},
    ],
    v:{ pctA:77, pctB:23,
      analyse:"Julien, un baiser sous l'effet de l'alcool dans une soirée arrosée arrive, et beaucoup de couples le traversent — le vrai problème de cette dispute n'est même pas là. C'est que tu as passé trois jours à sourire normalement à Inès en sachant qu'elle ne savait pas, et qu'elle ne l'a appris que par une tierce personne rongée de culpabilité. Ce silence prolongé, ce théâtre du quotidien pendant que tu portais un secret, pèse plus lourd que le geste lui-même. Gros point pour Inès. Ta reconnaissance finale, sans minimiser ni te chercher d'excuse, est le bon réflexe — trop tardif, mais réel. Le vrai sujet : Inès ne pourra reconstruire la confiance que si l'honnêteté devient immédiate, pas arrachée après coup par une preuve extérieure.",
      pacteA:"Je laisse une vraie chance à l'honnêteté immédiate de Julien, sans repartir en enquête permanente.",
      pacteB:"Je dis les choses inconfortables tout de suite, même quand j'ai peur de ta réaction.",
      mot:"Le silence pèse toujours plus lourd que la maladresse qu'il cache." }
  },
  {
    id:"d13", cat:"Couple", emoji:"📵", title:"Le téléphone au lit, chaque soir",
    a:"Océane", b:"Rayan", hook:"« Bonne nuit » à l'écran. Jamais à elle, en vrai.",
    msgs:[
      {r:"A",n:"Océane",t:"Tous les soirs depuis des mois, c'est exactement la même scène : on se couche, tu scrolles pendant quarante-cinq minutes minimum, l'écran bleu éclaire la chambre dans le noir, et moi je fixe le plafond à côté de toi. On ne se dit même plus bonne nuit en se regardant vraiment dans les yeux, c'est devenu un réflexe automatique et distant."},
      {r:"B",n:"Rayan",t:"C'est mon seul vrai moment pour décompresser complètement de toute la journée, laisser mon cerveau se vider avant de dormir. Et toi aussi tu es sur ton téléphone parfois le soir, on ne va pas se mentir sur ce point-là non plus."},
      {r:"A",n:"Océane",t:"Parfois oui, ça m'arrive, c'est vrai. Mais toi c'est tous les soirs sans exception, quarante-cinq minutes pile, et nos derniers mots avant de dormir ne sont plus vraiment « bonne nuit », c'est le silence d'un scroll ininterrompu qui a remplacé notre connexion du soir."},
      {r:"B",n:"Rayan",t:"C'est vrai qu'on ne se parle presque plus vraiment le soir avant de dormir, je ne m'en étais même pas rendu compte tellement c'est devenu automatique. Ça m'a filé entre les doigts sans que je le décide consciemment à aucun moment."},
    ],
    v:{ pctA:68, pctB:32,
      analyse:"Rayan, décompresser après une longue journée est un besoin réel et légitime, et Océane n'est pas non plus totalement exempte d'écran le soir — mais quarante-cinq minutes tous les soirs sans exception, ce n'est plus vraiment de la décompression, c'est devenu un remplacement systématique de la connexion du soir. Point pour Océane. Le vrai sujet dépasse largement le téléphone en tant qu'objet : c'est le tout dernier moment de la journée, celui où un couple se retrouve enfin seul, calme, qui s'est fait progressivement coloniser par le scroll sans qu'aucun des deux ne le décide vraiment. Ta prise de conscience finale est juste et honnête : personne n'a choisi cette habitude, elle s'est simplement installée toute seule avec le temps.",
      pacteA:"Je propose un petit rituel du soir à deux plutôt que de fixer le plafond en silence chaque soir.",
      pacteB:"Je pose le téléphone quinze minutes avant de dormir. Ces minutes-là nous appartiennent, à nous deux.",
      mot:"Les derniers mots du jour méritent un vrai regard, pas un écran allumé." }
  },
];
