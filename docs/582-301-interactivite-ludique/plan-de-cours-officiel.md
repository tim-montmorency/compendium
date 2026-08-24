# Plan de cours — 582-301-MO

*[CES]: Collider Event System
*[GDD]: Game Design Document
*[URP]: Universal Render Pipeline
*[HUD]: Head-Up Display
*[PNJ]: Personnage non joueur
*[RC]: Release candidate

!!! info "Ce document"
    Version destinée aux élèves : **le calendrier des 15 séances** et **le détail des évaluations**, avec les savoirs essentiels rattachés à chacune. La version pédagogique complète (justifications, limites volontaires, dispositif d'encadrement) se trouve dans [plan de cours — version détaillée](./plan-de-cours.md).

## Le cours en bref

| Spécifications | Valeur |
|---|---|
| Code | 582-301-MO |
| Titre | Interactivité ludique |
| Pondération | 2-2-1 |
| Unités | 1⅔ |
| Heures d'enseignement | 60 h |
| Séances | 15 |
| Session | 3 |
| Logiciel | Unity 6 (URP) |

### Objectifs ministériels

* **Objectif 1** — Intégrer des médias visuels et sonores dans une expérience ludique
* **Objectif 2** — Programmer des actions ludiques qu'un interacteur doit accomplir pour pouvoir progresser

### Attitudes professionnelles

* **Rigueur** — réalisation des tâches reçues aux jalons, finition, classement des fichiers et des médias
* **Créativité** — cohérence du parti pris, décisions de conception assumées

Les deux sont **évaluées**, à même le projet final : elles pèsent 24 de ses 80 points.

### Deux jeux dans la session

**① Le jeu express** (S1 à S3) — un jeu complet construit en classe, sans écrire une ligne de code : environnement, personnage, progression, fin, build. Il sert d'évaluation des acquis Unity.

**② Le jeu de session** (S4 à S15) — conçu à la S4, une fois qu'on sait ce que coûte une porte, puis construit couche par couche jusqu'à sa publication en ligne. Tous les savoirs essentiels sont enseignés **avant la S12**; les quatre dernières séances sont consacrées à la production.

!!! note "Cahier des charges du jeu de session"
    Liberté totale sur le thème; obligations techniques identiques pour tous : **trois zones** distinctes et navigables en assets Synty · **trois portes** utilisant **trois types de *gating* différents**, dont au moins un vrai système clé/serrure · personnage contrôlable et animé, avec états détectés · menu et HUD · indications **visuelles et sonores** des réussites et des échecs · échantillons sonores déclenchés par le jeu · une cinématique déclenchée par une action · un PNJ · éclairage et post-traitement · build **publié en ligne** (itch.io, WebGL) avec README et crédits.

    **Contraintes dures :** 1 mécanique principale, 1 niveau en 3 zones, assets Synty seulement (+ médias libres cités). Durée de jeu : **3 minutes minimum, 10 maximum**. GDD remis avant la S5, validé individuellement puis verrouillé à la S5.

    L'énoncé complet — socle d'exigences, 12 étapes séance par séance, backlog de départ — est dans [Travail final — Le jeu de session](./devoirs/projet-final.md).

---

## Calendrier des 15 séances

| # | Séance | Cœur de la séance | Jalon |
|---|--------|-------------------|-------|
| | **Phase 1 — Le jeu express, sans code** | | |
| 1 | [Moteur de jeu et prise en main](./cours01.md) | Théorie du jeu, moteurs, interface Unity, *Get Started With Unity* | :material-check-decagram: **Devoir 01 (2 %)** — vérifié à la S2 |
| 2 | [Physique, triggers et monde Synty](./cours02.md) | Dossiers, physique, colliders, scènes, **CES**, Synty + URP | |
| 3 | [Personnage et progression](./cours03.md) | Starter Assets 1<sup>re</sup>/3<sup>e</sup> personne, *gating* par CES, habillage Synty, build | :material-check-decagram: **Jeu express (13 %)** — la veille de la S4 |
| | **Phase 2 — Concevoir, puis outiller** | | |
| 4 | [Concevoir et planifier](./cours04.md) | Boucle de jeu, scope, narration, **atelier GDD**, devlog, liste de sprint, croquis | :material-check-decagram: **GDD (5 %)** — remis avant la S5 |
| 5 | [Ouvrir le chantier : HUD et premier code](./cours05.md) | Canvas, TextMeshPro, HUD, premier script, **C# de survie**, prefabs · **validation individuelle des GDD** | |
| | **Phase 3 — Couche par couche** | | |
| 6 | [Animation, caméra et états](./cours06.md) | Animator, machine à états, rigging, Cinemachine, 2.5D, **menu**, transitions, cinématique | |
| 7 | [Le son et le backlog](./cours07.md) | Sources 2D/3D, spatialisation, Audio Mixer, licences; backlog MoSCoW | :material-comment-check: **F1 — Prototype jouable** |
| 8 | [Lumière et level design](./cours08.md) | Lumières, *baking*, post-traitement, greyboxing → dressing, guidage | |
| 9 | [Particules, VFX et *game feel*](./cours09.md) | Particle System, projectiles, *juice* | :material-comment-check: **F2 — Tranche verticale**<br>+ rétroaction **objectif 1** |
| 10 | [PNJ et intelligence artificielle](./cours10.md) | NavMesh, patrouille, détection, machine à états simple | |
| 11 | [Publication et persistance](./cours11.md) | Build WebGL, itch.io, README et crédits, sauvegarde, performance | |
| | **Phase 4 — Production** | | |
| 12 | [Tests utilisateurs et plan de production](./cours12.md) | Heuristiques, protocole de playtest, *issues* et priorisation | :material-comment-check: **F3 — Alpha**<br>+ rétroaction **objectif 2** |
| 13 | [Production + capsule](./cours13.md) | Atelier encadré; capsule d'enrichissement au choix | |
| 14 | [Production + gel](./cours14.md) | Atelier encadré, gel des fonctionnalités, préparation de l'oral | :material-comment-check: **F4 — Bêta / RC** publiée |
| 15 | [Remise et présentations](./cours15.md) | Oraux et démonstrations | :material-check-decagram: **Projet final (80 %)** |

:material-check-decagram: évaluation sommative &nbsp;·&nbsp; :material-comment-check: jalon formatif avec rencontre individuelle

!!! note "Les semaines sans jalon ne sont pas des semaines sans travail"
    Seules les séances portant un jalon exigent un état précis du jeu **ce jour-là**. Entre les deux, l'élève avance selon les étapes de son [énoncé de projet](./devoirs/projet-final.md) - et chaque séance s'ouvre sur un repère « où tu devrais être rendu », qui indique la direction sans créer d'échéance.


### Contenu détaillé, séance par séance

**S1 — Moteur de jeu et prise en main**

* Ludisme, expérience ludique, genres, boucles de jeu, *gating*
* Panorama des moteurs de jeu; pourquoi Unity
* Installation d'Unity Hub, interface, panneaux, notion d'asset
* En classe : tutoriel *Get Started With Unity*

**S2 — Physique, triggers et monde Synty**

* Création de projet, structure de dossiers et hygiène de nommage
* `Rigidbody`, masse, gravité, contraintes; Box vs Mesh Collider; `isTrigger`
* Scènes multiples et changement de scène
* **Collider Event System** : réponses (détruire, déplacer, activer, jouer un son, charger une scène, appeler une méthode) et conditions (distance, touche, regard de caméra, variable)
* POLYGON Sampler Pack : import, conversion des materials vers URP, assemblage d'un environnement navigable

**S3 — Personnage et progression**

* Starter Assets: Character Controllers (URP), 1<sup>re</sup> et 3<sup>e</sup> personne; survol de l'Input System
* Le tag `Player` et pourquoi tout en dépend
* *Gating* concret avec l'CES : clé → porte, zone bloquée, variable vérifiée plus loin
* Habillage du personnage : substitution du mannequin gris par un personnage T-pose Synty
* Premier build local

**S4 — Concevoir et planifier**

* Retour collectif sur les jeux express
* Boucle de jeu : action → rétroaction → progression; boucle courte vs longue
* Les 4 notions d'interaction : interacteur, affordance, engagement, agentivité
* Condition de victoire; scope et ses 5 pièges
* Techniques narratives : narration environnementale, level design narratif, cinématique minimale
* **Atelier GDD** — le document est **remis avant la S5**
* Le format imposé du devlog (capture + 3 lignes + ce qui bloque)
* Liste de sprint (8 cartes max) et colonne `Won't`, **sur papier**; croquis du niveau avec les 3 zones et les 3 portes

**S5 — Ouvrir le chantier : HUD et premier code**

*Validation individuelle des GDD pendant que la classe monte son projet : création du projet Unity, synchronisation GitHub, greybox de la zone 1 et HUD.*

* Canvas : modes de rendu, ancrages, `CanvasScaler`; TextMeshPro
* HUD : les 3 règles, les ancres, tenir à toutes les résolutions
* Le *feedback* comme moitié de l'agentivité
* Premier script fourni, commenté, branché sur `Button.onClick`
* C# de survie : variables, `Start`/`Update`, `public`, conditions, méthodes, `GetComponent`, `Debug.Log`
* Prefabs custom, variantes, `Instantiate`
* **Kit de scripts prêts à brancher** : compteur, minuterie, santé, collectible, *spawner*, *screen shake*…

**S6 — Animation, caméra et états**

* Animator : contrôleur, états, paramètres, transitions; **machine à états** du personnage (idle / marche / course / saut / action)
* Blend Tree; rigging du T-pose Synty, avatar humanoïde et *retargeting*; *Animation Events*
* Animer le décor (porte, plateforme, mécanisme)
* Cinemachine : *virtual camera*, priorités, *follow / look at*, *damping*, *confiner*, changement de caméra par CES
* **Caméra 2D traitée en 2.5D** : orthographique vs perspective, contrainte d'axe, *side-scroller*, vue de dessus, isométrique, *parallax*
* Transitions de scènes propres, écran de chargement, fondu; cinématique (Timeline + Signal Emitter)

**S7 — Le son et le backlog**

* `AudioListener`, `AudioSource`, `AudioClip`; formats et import
* 2D vs 3D : *spatial blend*, atténuation; ambiance en boucle, son localisé, *one shot*
* **Audio Mixer** : groupes, effets, paramètres exposés, *snapshots* déclenchés par CES
* Déclenchement par CES, par *Animation Event*, par script
* Sources et licences (Freesound, Kenney, Pixabay); obligation de créditer
* Culture du métier : FMOD et Wwise en démo
* Atelier **backlog MoSCoW** dans GitHub Projects

**S8 — Lumière et level design**

* Lumières directionnelle / point / spot; temps réel vs *baked*; *Light Probes*, lightmapping
* Skybox, brouillard, émission, lumière ambiante
* Post-traitement URP : `Volume`, bloom, vignette, *color adjustments*, *depth of field*
* Level design : du greybox au décor final, métriques, lisibilité, guidage du joueur, rythme
* Shader Graph : une recette montée en direct

**S9 — Particules, VFX et *game feel***

* Particle System : modules essentiels, materials de particules
* Recettes : poussière de pas, étincelles, fumée, ramassage, portail
* Projectiles : `Instantiate`, `Destroy`, `AddForce`, détection d'impact
* *Trails*, *decals*, mention de VFX Graph
* *Game feel* : *screen shake*, *hit stop*, courbes, cumul son + particule + UI sur un même événement
* Devoir : premier build WebGL sur une page itch.io privée

**S10 — PNJ et intelligence artificielle**

* NavMesh : *baking*, `NavMeshAgent`, zones et obstacles
* Patrouille par waypoints, poursuite, retour au poste
* Détection : distance, cône de vision, `Raycast`
* Machine à états du PNJ : patrouille → alerte → poursuite → perte de trace
* PNJ non hostile (marchand, guide, dialogue par CES); rétroaction animée, sonore et visuelle

**S11 — Publication et persistance**

* Build Settings et Player Settings; contraintes et pièges du **WebGL**
* **itch.io** : page de projet, upload, *embed*, visuels, description
* `README.md` final et crédits des médias
* Sauvegarde avec `PlayerPrefs` : progression, options, meilleur score
* Performance : Profiler, *batching*, lumières temps réel, taille des textures

**S12 — Tests utilisateurs et plan de production**

* Dépôt de l'**alpha** en début de séance
* Heuristiques d'utilisabilité appliquées au jeu
* Protocole de playtest : consigne minimale, *think aloud*, ne jamais aider
* Rotation en classe : chaque élève teste 3 jeux et remplit une grille d'observation
* Dépouillement : bogue / friction / préférence; traduction en *issues* et re-priorisation

**S13 — Production + capsule**

* Atelier encadré sur les *issues* prioritaires
* Capsule d'enrichissement au choix : accessibilité, tableau des meneurs, localisation, ScriptableObjects, recettes avancées

**S14 — Production et gel**

* Atelier encadré; **gel des fonctionnalités**
* Checklist de finition : le jeu se lance, se termine, se recommence
* Build de validation publié en fin de séance; préparation de l'oral

**S15 — Remise et présentations**

* Remise du projet final (version *gold*)
* Oral de 5 min : concept et boucle, tâches reçues aux jalons et ce qui en a été fait, une difficulté technique résolue, ce qui serait fait autrement
* Démonstration jouée en direct depuis la page itch.io

---

## Évaluations

Quatre notes seulement, et **quatre jalons de rétroaction individuelle** entre les deux dernières. L'état de ton jeu n'est noté qu'une seule fois, à la toute fin.

| # | Évaluation | Séance | Pondération |
|---|------------|--------|-------------|
| 1 | **[Le devoir 01](./devoirs/get-started-with-unity.md)** — *Get Started With Unity* | vérifié au début de la S2 | **2 %** |
| 2 | **[Le jeu express](./devoirs/protolude/index.md)** — acquis Unity | déposé la veille de la S4 | **13 %** |
| 3 | **[Le GDD de ton jeu de session](./devoirs/gdd-jeu.md)** | remis avant la S5 | **5 %** |
| 4 | **[Le projet final](./devoirs/projet-final.md)** — jeu complet publié + oral | S15 | **80 %** |
| | | **Total** | **100 %** |

Les trois premières arrivent tôt et sont légères : **20 % de la note est acquise avant la S15**. Elles mesurent trois choses différentes — un pipeline technique parcouru au complet, les gestes Unity de l'objectif 1 en situation, et un scope verrouillé par écrit.

**Tout le reste de la session est formatif.** Les quatre jalons produisent un avis écrit et une liste de tâches nominative, pas une note : tu ne peux pas perdre de points sur une chose qu'on ne t'a pas encore enseignée ou signalée. Mais ce qui t'est demandé aux jalons **revient au projet final**, par le critère *réalisation des tâches* — la rétroaction compte, simplement plus tard et tu le sais d'avance.

---

### Évaluation 1 — Le devoir 01 (2 %)

**Séance 1 · vérifié au début de la séance 2**

Terminer le tutoriel *Get Started With Unity* commencé en classe, jusqu'à la dernière étape : **le build web publié sur Unity Play**. Ce qui est corrigé, c'est la **capture de ton jeu publié** — pas le tutoriel. L'artéfact prouve à lui seul que Unity est installé, configuré et fonctionnel, et que le pipeline de compilation a été parcouru au complet.

**Barème :** tout ou rien. Capture déposée sur Léa = **2 / 2**, sinon **0**.

!!! abstract "Savoirs essentiels évalués"
    **Objectif 1** — Installation et configuration des ressources nécessaires · Compilation de l'application

---

### Évaluation 2 — Le jeu express (13 %)

**Séance 3 · à déposer la veille de la séance 4**

Démontrer la maîtrise des **gestes de base d'Unity** vus aux séances 2 et 3 : créer et ranger un projet, construire un environnement solide au service d'un objectif, y placer un personnage contrôlable, l'habiller (matériaux, son) et déclencher un événement de victoire. C'est une évaluation des **acquis techniques**, pas du talent de designer : le jeu est volontairement minuscule, ce qui est noté c'est qu'il **fonctionne** et qu'il soit **propre**.

**Ce qu'il faut remettre**

1. Le dossier du projet Unity compressé — sans `Library/` ni `Builds/`
2. Le build compressé séparément : le jeu doit se lancer sans ouvrir Unity

**Grille — 13 points**

| Critère | Ce qu'on regarde | Points |
|---|---|---|
| **Environnement** | Un monde en prefabs Synty : un départ, un parcours, une arrivée identifiable. Le décor sert l'objectif, le chemin est lisible. Materials convertis (rien en magenta) | 2 |
| **Qualité technique de l'environnement** | On ne traverse pas le décor et on ne tombe jamais dans le vide : sol continu, colliders, murs invisibles aux limites, passages assez larges | 2 |
| **Prérequis et personnage** | Un prérequis sépare le joueur de sa victoire, et une interaction en débloque une autre (condition CES). Le Starter Assets (1<sup>re</sup> **ou** 3<sup>e</sup> personne) fonctionne : déplacement, saut, caméra | 3 |
| **Physique** | Au moins un objet autre que le personnage utilise réellement la physique | 1 |
| **Détection et victoire** | Un **CES** correctement configuré déclenche la fin par un changement de scène | 1 |
| **Structure de fichier** | L'arborescence vue à la S2 est respectée; les imports restent à la racine d'`Assets` | 1 |
| **Compilation** | Un build autonome qui se lance et se joue du début à la fin | 1 |
| **Rigueur et créativité** | Qualité générale d'exécution, et créativité démontrée par l'environnement et l'interaction | 2 |
| | **Total** | **13** |

[Consignes détaillées et modèle de remise](./devoirs/protolude/index.md)

!!! abstract "Savoirs essentiels évalués"
    **Objectif 1** — Logiciels d'intégration d'expériences ludiques · Installation et configuration des ressources nécessaires · Classement des fichiers et des médias · Création d'un environnement virtuel navigable · Intégration d'images dans l'environnement virtuel · Intégration de médias sonores dans l'environnement virtuel · Compilation de l'application

    **Objectif 2** — Déplacement dans l'environnement virtuel · Interactions virtuelles · Détection de collisions pour le déclenchement d'évènements · Transitions de scènes · Progression en fonction de la réussite d'une action · Programmation d'un système de clé et de porte

---

### Évaluation 3 — Le GDD de ton jeu de session (5 %)

**Ébauché en atelier à la séance 4 · remis avant la séance 5 · validé individuellement et verrouillé à la séance 5**

Concevoir le jeu qui sera réalisé pendant toute la session. Le document est validé avec toi, un par un, puis **verrouillé** : on réfléchit maintenant, on construit ensuite. Format : PDF ou lien Figma. Le concept et le moodboard iront ensuite dans le README du dépôt GitHub.

La remise se fait **avant** la séance 5, et pas en fin de séance 4 : un GDD bâclé dans les vingt dernières minutes du cours n'est pas un GDD, et la validation suppose que l'enseignant ait pu le lire.

**Les 14 éléments à remettre**

| # | Élément | Attendu |
|---|---------|---------|
| 1 | Titre | Provisoire, ça se change |
| 2 | Genre | |
| 3 | Jeu de référence | Quel jeu existant inspire le tien? |
| 4 | Concept | 2 à 3 phrases : de quoi s'agit-il, qui est le joueur? |
| 5 | **Parti pris en une phrase** | « Un jeu lent et inquiétant dans une station vide. » C'est l'intention que tu devras tenir, et elle est évaluée au critère **créativité** |
| 6 | Boucle de jeu centrale | Ce que le joueur *fait*, encore et encore, en **verbes d'action concrets** |
| 7 | Victoire et défaite | Conditions explicites. Pas de défaite? Justifie-le ici |
| 8 | **Tes 3 zones** | Ce qui distingue chacune : lieu, palette, ambiance sonore, ce qu'on y fait |
| 9 | **Tes 3 portes** | Le **type de *gating*** de chacune. Trois types **différents**, dont au moins un vrai système clé/serrure |
| 10 | **Découpage technique** | 3 scènes séparées ou 1 monde continu? Et pourquoi |
| 11 | Croquis du niveau | À main levée, avec les 3 zones et les 3 portes identifiées |
| 12 | Assets Synty prévus | Quels éléments du POLYGON Sampler Pack? |
| 13 | Moodboard | 4 à 8 images de référence |
| 14 | Médias externes cités | Sons, musiques ou images hors Synty, avec source et licence |

!!! important "Contraintes dures"
    1 mécanique principale · 1 niveau en 3 zones · assets Synty seulement · 3 à 10 minutes de jeu. Le cahier des charges technique commun s'applique. Le thème et l'univers sont entièrement libres.

!!! abstract "Savoirs essentiels évalués"
    **Objectif 2** — Notions d'interaction : interacteur, affordance, engagement et agentivité · Présentation des actions à accomplir · Conception de la progression en fonction de la réussite d'une action

    Le GDD sert aussi de **plan de couverture** : c'est là que l'élève s'engage sur les médias visuels et sonores (objectif 1) qu'il devra intégrer d'ici la S15.

!!! tip "Préparation formative"
    L'[analyse d'un jeu existant](./devoirs/gdd.md) — même canevas, appliqué à un jeu qu'on connaît déjà — se fait avant la séance 4. Aucune note : c'est l'échauffement, et les analyses sont mises en commun en classe.

---

### Le suivi de production — formatif, non noté

À chaque jalon, la rencontre se fait **tableau ouvert**. Ce n'est pas noté : c'est la liste de ce que je regarde, et **tout ce qui manque repart en *issue* `must`** — donc au critère *réalisation des tâches* du projet final.

**À la S7 (F1)** — le tableau GitHub Projects alimenté depuis la S4 · un backlog priorisé MoSCoW avec la colonne `Won't` remplie · des cartes découpées · au moins 3 entrées de devlog · l'arborescence conforme à la convention de la S2 · les crédits amorcés au README pour les médias déjà utilisés.

**À la S14 (F4)** — un devlog par séance depuis la S7 · les *issues* des jalons F1 à F3 fermées ou reportées explicitement · un backlog vivant et des commits liés aux *issues* · l'arborescence tenue · les crédits complets.

!!! note "Pourquoi ce n'est pas noté"
    L'objectif de ce cours est de **faire** un jeu, pas de gérer un projet. Aucun savoir essentiel du devis ne porte sur la gestion de projet — le tableau, le backlog et le devlog sont des **rituels de métier**, utiles, mais qui ne sont pas la compétence évaluée.

!!! tip "Les crédits, à faire au fur et à mesure"
    C'est la tâche que tout le monde reporte. Les inscrire à chaque jalon te coûte cinq minutes; les reconstituer de mémoire la veille de la remise t'en coûtera deux heures, et il t'en manquera. Ils comptent au critère **finition** du projet final.

---

### Évaluation 4 — Le projet final (80 %)

**Séance 15 · version *gold***

Un jeu complet, publié en ligne, présenté à l'oral. La remise comprend le dépôt GitHub à jour (avec devlog et *issues*), la page itch.io avec le build WebGL fonctionnel, le README et les crédits des médias.

**Grille**

| Critère | Ce qu'on regarde | Pondération |
|---------|------------------|-------------|
| **Intégration des médias — objectif 1** | Visuel, animation, son, lumière, caméra : environnement habillé, images intégrées, médias sonores, éléments animés, cinématique *(sections D et E du socle)* | **22 %** |
| **Actions et progression — objectif 2** | Structure en 3 zones, 3 portes, interactions, collisions, HUD, indications de réussite et d'échec, états du personnage *(sections A, B, C)* | **22 %** |
| **Créativité et cohérence du parti pris** | Intention nommée au GDD et tenue, zones réellement distinctes, détournement d'un outil du cours, décisions justifiées à l'oral *(section H)* | **12 %** |
| **Rigueur — réalisation des tâches des jalons** | Les *issues* `must` issues des quatre rencontres sont fermées, et démontrées à l'oral | **12 %** |
| **Finition et publication** | Build WebGL fonctionnel, page itch.io, README, **crédits des médias**, arborescence du projet, carte de preuves; aucun défaut visible; le jeu se lance, se termine et se recommence *(section G)* | **7 %** |
| **Oral et démonstration** | Concept et boucle, tâches reçues et traitées, une difficulté technique résolue, ce qui serait fait autrement | **5 %** |
| | **Total** | **80 %** |

!!! note "Comment le socle se traduit en note"
    **Les savoirs essentiels se notent en présent / absent** : chaque exigence du socle fonctionne, ou elle ne fonctionne pas. Il n'y a rien à discuter.

    **Créativité et rigueur se notent en qualité**, et pèsent ensemble 24 des 80 points. C'est là que se joue la différence entre deux jeux qui cochent les mêmes cases — et ce sont les deux attitudes professionnelles inscrites au devis.

    **Aucun point d'ampleur nulle part.** Une quatrième zone ou une deuxième mécanique ne rapporte rien. Le chemin le plus court vers une bonne note est de livrer exactement le socle, avec une intention claire, très bien fait.

!!! warning "La carte de preuves"
    À la remise, ton README contient une table indiquant, pour chaque exigence du socle, **où elle se trouve et comment y accéder en jouant**. La règle : **ce qui n'est pas déclaré n'est pas corrigé**. Je ne cherche pas tes fonctionnalités dans ton jeu, je vais où tu me dis d'aller — en retour, une exigence déclarée est garantie d'être regardée.

!!! abstract "Savoirs essentiels évalués"
    **Objectif 1** — Création d'un environnement virtuel navigable · Configuration de la caméra virtuelle (traitée en 2.5D) · Classement des fichiers et des médias · Intégration d'images dans l'environnement virtuel · Intégration de médias sonores dans l'environnement virtuel · Animation d'éléments visuels · Compilation de l'application

    **Objectif 2** — Notions d'interaction · Environnement de programmation · Fonctionnement d'une interface virtuelle (menu) · Déplacement dans l'environnement virtuel · Interactions virtuelles · Détection de collisions pour le déclenchement d'évènements · Transitions de scènes · Progression en fonction de la réussite d'une action · Système de clé et de porte · Intégration d'un HUD · Indication visuelle et sonore des réussites et échecs · Déclenchement d'échantillons sonores · Détection de l'état du personnage · Indication visuelle et animation de l'état du personnage

!!! warning "Filet de sécurité"
    Le build **alpha de la S12 est publié en ligne** et sert d'artéfact de repli si rien n'est remis à la S15. Les quatre jalons rendent tout décrochage visible dès la S7, avec sept semaines pour réagir.

---

### Les quatre jalons formatifs

Chaque jalon suit le même déroulé : matière en première partie de séance, puis **rotation individuelle** pendant que la classe travaille. La rencontre produit un **avis écrit** — commentaires, recommandations, et une **liste de tâches nominative** déposée en *issues* GitHub, étiquetées `must` (exigée, comptée dans l'évaluation finale) ou `should` (recommandée, valorisée sans être exigée).

| # | Séance | Nom de production | État attendu du jeu |
|---|--------|-------------------|---------------------|
| **F1** | S7 | **Prototype jouable** (*first playable*) | Les 3 zones traversables en greybox, les 3 portes fonctionnelles, un début et une fin. Laid, mais jouable de bout en bout |
| **F2** | S9 | **Tranche verticale** (*vertical slice*) | Un segment court mais **fini** : habillé, animé, sonorisé, éclairé — l'échantillon qui prouve le niveau de qualité visé<br>:material-comment-check: **Activité de rétroaction — objectif 1** |
| **F3** | S12 | **Alpha** (*feature complete*) | Toutes les mécaniques du GDD branchées, niveau complet parcourable, build WebGL en ligne. Plus aucune fonctionnalité après ce point<br>:material-comment-check: **Activité de rétroaction — objectif 2** |
| **F4** | S14 | **Bêta / *release candidate*** | Contenu complet, fonctionnalités gelées, build de validation publié. Correctifs et polissage seulement |

La remise de la S15 correspond au ***gold*** : la version qu'on expédie.

!!! note "La liste de tâches comme levier d'équité"
    Un projet ambitieux reçoit des tâches de **resserrement** (couper, finir, stabiliser); un projet mince reçoit des tâches d'**approfondissement** (ajouter une couche, densifier, travailler la rétroaction). L'objectif n'est pas que tout le monde livre le même jeu, mais que **tout le monde fournisse un effort comparable**. L'élève peut négocier une tâche pendant la rencontre; ce qui est retenu est consigné par écrit.

---

## Couverture des savoirs essentiels

Tous les savoirs essentiels des deux objectifs sont enseignés **avant la séance 12**.

### Objectif 1 — Intégrer des médias visuels et sonores dans une expérience ludique

| Savoir essentiel | Enseigné | Évalué |
|---|---|---|
| Logiciels d'intégration d'expériences ludiques | S1 | Jeu express |
| Choix du logiciel | S1 | — |
| Installation et configuration des ressources nécessaires | S1, S2 | Jeu express |
| Création d'un environnement virtuel navigable | S2, S3, S9 | Jeu express · Projet final |
| Configuration de la caméra virtuelle 2D | S6 *(traité en 2.5D)* | Projet final |
| Classement des fichiers et des médias | S2, S4, S11 | Jeu express · Projet final *(critère finition)* |
| Intégration d'images dans l'environnement virtuel | S2, S8, S9 | Jeu express · Projet final |
| Intégration de médias sonores dans l'environnement virtuel | S3 *(survol)*, S7 | Jeu express · Projet final |
| Animation d'éléments visuels | S6, S8 | Projet final |
| Compilation de l'application | S3, S11 *(WebGL)* | Jeu express · Projet final |

:material-comment-check: **Activité de rétroaction — objectif 1 :** jalon **F2** (S9), rencontre individuelle avec avis écrit sur la tranche verticale.

### Objectif 2 — Programmer des actions ludiques qu'un interacteur doit accomplir pour pouvoir progresser

| Savoir essentiel | Enseigné | Évalué |
|---|---|---|
| Notions d'interaction : interacteur, affordance, engagement, agentivité | S1, S4 | GDD · Projet final |
| Environnement de programmation | S5 | Projet final |
| Fonctionnement d'une interface virtuelle (menu) | S5 (HUD), S6 (menu) | Projet final |
| Déplacement dans l'environnement virtuel | S3 *(sans code)*, S5, S6 | Jeu express · Projet final |
| Interactions virtuelles | S2, S3, S5 | Jeu express · Projet final |
| Détection de collisions pour le déclenchement d'évènements | S2, S3 | Jeu express · Projet final |
| Transitions de scènes | S2, S6 | Jeu express · Projet final |
| Progression en fonction de la réussite d'une action | S3, S6, S10 | Jeu express · GDD · Projet final |
| Programmation d'un système de clé et de porte | S3, S5 | Jeu express · Projet final |
| Intégration d'une interface graphique HUD | S5, S8 | Projet final |
| Indication visuelle et sonore des réussites et échecs | S5, S7, S8 | Projet final |
| Déclenchement d'échantillons sonores | S3 *(survol)*, S7 | Jeu express · Projet final |
| Détection de l'état du personnage | S6, S10 | Projet final |
| Indication visuelle et animation de l'état du personnage | S6 | Projet final |

:material-comment-check: **Activité de rétroaction — objectif 2 :** jalon **F3** (S12), rencontre individuelle avec avis écrit sur l'alpha.

!!! note "Écart assumé au devis"
    Le devis mentionne la « configuration de la caméra virtuelle 2D ». Le cours étant intégralement en 3D, ce savoir est enseigné sous l'angle du **2.5D** (S6) : caméra orthographique, déplacement contraint sur un plan, cadrage plat. C'est la seule liberté prise avec les savoirs essentiels, et elle est délibérée — elle correspond à la façon dont l'industrie fabrique aujourd'hui les jeux dits « 2D ».

!!! info "Contenus hors devis"
    Level design, éclairage, VFX, PNJ, publication web, sauvegarde, performance, tests utilisateurs et versionnement dépassent le devis ministériel. Ils sont enseignés parce qu'ils correspondent à la pratique réelle du métier, mais ne sont **jamais bloquants** pour la réussite du cours.
