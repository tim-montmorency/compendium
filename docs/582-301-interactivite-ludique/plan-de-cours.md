# Plan de cours

## Attitudes professionnelles

Deux attitudes sont inscrites au devis départemental pour ce cours, et **les deux sont évaluées** : la **rigueur** (tenue du carnet de bord, réalisation des tâches des jalons, finition) et la **créativité** (cohérence du parti pris, décisions de conception assumées). Elles pèsent ensemble 24 des 70 points du projet final, plus les 10 % du carnet de bord.

## Approche pédagogique

Deux jeux dans la session.

D'abord un **jeu express** construit en classe des séances 1 à 3 : environnement, personnage, progression, fin, build. Aucun code écrit par l'élève - le **Collider Event System** fait le travail. Il se dépose la veille de la séance 4 : tout le monde a alors un jeu complet, compilé, qui se termine. C'est la première évaluation des acquis Unity.

Ensuite - une fois qu'on sait ce que coûte une porte - on conçoit **LE jeu de session** (séance 4), qu'on construit couche par couche jusqu'à sa publication en ligne. Tous les concepts nécessaires aux deux objectifs ministériels sont vus **avant la séance 12**; ensuite, place à la production.

!!! note "Pourquoi le CES avant le code?"
    Le Collider Event System permet, dès la séance 2, de déclencher une animation, une lumière, un changement d'état, une méthode d'un script, une texture, un son, un changement de scène - et de conditionner tout ça à une distance, une touche, un regard de caméra ou la valeur d'une variable custom. Autrement dit : **toute la logique de jeu du cours est accessible sans écrire une ligne.** Le C# arrive plus tard, non pas comme le prix d'entrée, mais comme un outil pour ce que le CES ne fait pas.

!!! note "Pourquoi concevoir au cours 4 et pas au cours 1?"
    Un GDD écrit avant d'avoir touché à Unity est une liste de souhaits. Après trois séances passées à fabriquer un jeu, l'élève a une intuition de la charge de travail - et son scope devient réaliste tout seul. C'est le remède au piège numéro un du cours : le jeu trop grand.

### Cahier des charges commun du jeu de session

Liberté totale sur le thème et l'univers; obligations techniques identiques pour tous :

* Environnement navigable construit avec les assets Synty (POLYGON Sampler Pack)
* Personnage contrôlable, animé, avec états détectés (idle / marche / course / saut / action)
* **Trois zones** distinctes et **trois portes** utilisant **trois types de *gating* différents**, dont au moins un vrai système clé/serrure
* Menu fonctionnel (titre → jeu → fin) et HUD
* Indications **visuelles et sonores** des réussites et des échecs
* Échantillons sonores déclenchés par les événements du jeu
* Éclairage travaillé et post-traitement
* Build compilé et **publié en ligne (itch.io, WebGL)** avec README et crédits des médias

**Contraintes dures :** 1 mécanique principale, 1 niveau en 3 zones, assets Synty seulement (+ médias libres cités). Durée de jeu : **3 minutes minimum, 10 maximum**. GDD verrouillé après validation (séance 4).

L'énoncé complet, ses 33 exigences et ses 12 étapes sont dans [Travail final — Le jeu de session](./devoirs/projet-final.md).

### Rituels

* **GitHub dès la séance 4** : un dépôt par élève, commit de fin de séance, README comme **devlog** (capture d'écran + 3 lignes). La tenue du tableau et du devlog est **notée** à la S7 et à la S14 (carnet de bord, 5 % chacun)
* **Un seul outil de suivi : GitHub Projects**, par-dessus les *issues* du dépôt. Liste de sprint à la S4, backlog complet à la S7, revue à chaque jalon. Pas de Trello en parallèle - deux sources de vérité, c'est un élève qui répond « c'était dans l'autre outil ». Bonus : un commit contenant `closes #12` ferme la carte tout seul, ce qui donne enfin une raison d'écrire de vrais messages de commit.
* **Fin de chaque séance** : 10 min de « montre ton écran au voisin » - test croisé informel
* **Structure des séances de la phase 3** : matière en première partie, puis **atelier avec rotation individuelle** de l'enseignant - c'est là que se font les jalons formatifs
* **À chaque jalon formatif** : avis écrit + liste de tâches nominative déposée en *issues* GitHub

### Limites volontaires

Certains sujets sont ouverts sans être approfondis. C'est délibéré : chacun est un cours à lui seul, et les creuser coûterait la production du jeu de session.

| Sujet | Ce qu'on fait | Ce qu'on ne fait pas | Séance |
|-------|---------------|----------------------|--------|
| **IA / PNJ** | NavMesh, patrouille par waypoints, détection par distance et cône de vision, machine à états simple | Arbres de comportement, systèmes de dialogue à embranchements, combat à états multiples | S10 |
| **Shader Graph** | Une seule recette montée en direct (dissolution ou eau), copiable telle quelle | Théorie des nœuds, mathématiques de shader, exercice noté | S9 |
| **Sauvegarde** | `PlayerPrefs` : progression, options, meilleur score | Sérialisation JSON, chemins de fichiers, versionnage et corruption des sauvegardes | S11 |
| **Middleware audio** | Démo de 15 min (FMOD, Wwise) pour le vocabulaire | Installation, intégration, banques - incompatible avec la contrainte WebGL | S7 |
| **VFX Graph** | Mention de son existence | Enseignement; le Particle System couvre tous les besoins du cours | S8 |

Un élève avancé peut dépasser ces limites de son propre chef - c'est ce à quoi servent les capsules de la S13. Mais aucune évaluation n'en dépend.

---

## Déroulement des 15 séances

### Phase 1 - Le jeu express, sans code (S1–S3)

| # | Séance | Cœur de la séance | Jalon |
|---|--------|-------------------|-------|
| 1 | [Moteur de jeu et prise en main](./cours01.md) | Théorie du jeu, moteurs, **Get Started With Unity** | :material-check-decagram: **Devoir 01 (2 %)** — vérifié au début de la S2 |
| 2 | [Physique, triggers et monde Synty](./cours02.md) | Dossiers, physique, colliders, scènes, **CES**, Synty + URP | |
| 3 | [Personnage et progression](./cours03.md) | Starter Assets 1re/3e personne, *gating* par CES, habillage Synty du personnage, build | :material-check-decagram: **Jeu express (13 %)** — déposé la veille de la S4 |

### Phase 2 - Concevoir, puis outiller (S4–S5)

| # | Séance | Cœur de la séance | Jalon |
|---|--------|-------------------|-------|
| 4 | [Concevoir et planifier](./cours04.md) | Boucle de jeu, scope, narration, **atelier GDD**, GitHub, devlog, liste de sprint | :material-check-decagram: **GDD (5 %)** |
| 5 | [Interface et premier code](./cours05.md) | Canvas, TextMeshPro, menu, HUD, script fourni, **C# de survie**, prefabs, kit de scripts | |

### Phase 3 - Couche par couche (S6–S11)

| # | Séance | Cœur de la séance | Jalon |
|---|--------|-------------------|-------|
| 6 | [Animation, caméra et états](./cours06.md) | Animator, machine à états, Cinemachine, 2.5D, transitions de scènes, cinématique (Timeline) | |
| 7 | [Le son et le backlog](./cours07.md) | Sources 2D/3D, spatialisation, Audio Mixer, licences; **backlog MoSCoW** | :material-comment-check: **F1 - Prototype jouable** + :material-check-decagram: **Carnet de bord 1 (5 %)** |
| 8 | [Particules, VFX et *game feel*](./cours08.md) | Particle System, projectiles (Instantiate), *juice* | |
| 9 | [Lumière et level design](./cours09.md) | Materials, lumières, *baking*, post-traitement, greyboxing → dressing, guidage | :material-comment-check: **F2 - Tranche verticale** + rétroaction objectif 1 |
| 10 | [PNJ et intelligence artificielle](./cours10.md) | NavMesh, patrouille, détection, machine à états simple | |
| 11 | [Publication et persistance](./cours11.md) | Build WebGL, itch.io, README/crédits, sauvegarde, performance | |

### Phase 4 - Production (S12–S15)

| # | Séance | Cœur de la séance | Jalon |
|---|--------|-------------------|-------|
| 12 | [Tests utilisateurs et plan de production](./cours12.md) | Heuristiques, protocole de playtest, *issues* et priorisation | :material-comment-check: **F3 - Alpha** + rétroaction objectif 2 |
| 13 | [Production + capsule](./cours13.md) | Atelier encadré; capsule d'enrichissement au choix | |
| 14 | [Production + gel](./cours14.md) | Atelier encadré, gel des fonctionnalités | :material-comment-check: **F4 - Bêta / RC** publiée + :material-check-decagram: **Carnet de bord 2 (5 %)** |
| 15 | [Remise et présentations](./cours15.md) | Oraux | :material-check-decagram: **Projet final (70 %)** |

:material-check-decagram: évaluation sommative &nbsp;·&nbsp; :material-comment-check: jalon formatif avec rencontre individuelle

---

## Détail des séances

### S1 - Moteur de jeu et prise en main *(fait)*

* Ludisme, expérience ludique, genres, boucles de jeu, *gating*
* Panorama des moteurs; pourquoi Unity
* Installation Unity Hub, interface, panneaux, notion d'asset
* **En classe** : tutoriel *Get Started With Unity* (à terminer en devoir)

### S2 - Physique, triggers et monde Synty *(fait)*

* Création de projet, **structure de dossiers** et hygiène de nommage
* Rigidbody, masse, gravité, contraintes; Box vs Mesh Collider; `isTrigger`
* Scènes multiples et changement de scène
* **Collider Event System** : réponses (détruire, déplacer, activer/désactiver, jouer un son, charger une scène, appeler une méthode) et conditions (distance, touche, regard de caméra, variable custom)
* POLYGON Sampler Pack : import, **conversion des materials vers URP**, assemblage d'un environnement solide et navigable

### S3 - Personnage et progression

* **Starter Assets: Character Controllers (URP)** : import, prise en main
    * Première personne (installation immédiate)
    * Troisième personne (la caméra Cinemachine est déjà configurée dans le package - on l'utilise sans l'expliquer, le démontage arrive en S6)
    * Notion d'**Input System** (survol : où sont les touches, comment en ajouter une)
* Le tag `Player` et pourquoi tout en dépend
* **Gating** (rappel S1) mis en œuvre concrètement avec le CES : clé → porte, zone bloquée, variable custom vérifiée plus loin
* **Habiller le personnage** : substitution du mannequin gris par un personnage **T-pose Synty** dans le Third Person Controller — sans *rigging*, donc sans animation pour l'instant. L'auto-rigger **Mixamo** et l'avatar humanoïde sont reportés à la **S6**, où ils servent enfin à quelque chose
* Premier build local

!!! tip "Ajout recommandé"
    Terminer la séance par **un build qui se lance en dehors de Unity**. Voir son jeu dans une fenêtre autonome à la troisième semaine change complètement le rapport au projet.

### S4 - Concevoir et planifier

**Le jeu express est déposé la veille**, ce qui libère la séance et permet d'ouvrir sur un retour collectif à chaud.

* **Retour sur les jeux express** : ce qui a marché, ce qui a coûté cher
* **Boucle de jeu** : action → rétroaction → progression; boucle courte vs boucle longue
* **Les 4 notions d'interaction** : interacteur, affordance, engagement, agentivité
* **Condition de victoire**, et pourquoi un jeu sans fin n'est pas un jeu
* **Scope** : les 5 pièges (jeu trop grand, mécanique floue, trop d'assets, narration sans support, pas de fin)
* **Techniques narratives** : narration environnementale, *show don't tell*, narration par le level design, notes/objets, cinématique minimale
* **Atelier GDD en classe**, puis validation et **verrouillage** du document
* **GitHub** : dépôt, `.gitignore` Unity, premier commit, `README.md` comme **devlog** (format imposé : capture + 3 lignes + ce qui bloque), création du tableau **GitHub Projects**
* **Liste de sprint** (20 min, à ne pas confondre avec un backlog) :
    * **8 cartes maximum**, un seul objectif - se rendre au prototype jouable de la S7
    * **La colonne `Won't`** : trois choses écrites noir sur blanc qu'on ne fera **pas** dans cette version. Couper le multijoueur ou les cinq niveaux ne demande pas d'avoir codé quoi que ce soit - ça demande de regarder son GDD en face. C'est de la conception, donc ça se fait maintenant.
    * Le vrai backlog attend la S7, une fois le prototype construit
* **Démarrage du greybox** du jeu de session

!!! warning "La séance où on n'ouvre presque pas Unity"
    Quatre heures de conception pour un groupe de 3e session, c'est le risque de cette séance. Deux garde-fous : la mise en place de GitHub est concrète et manuelle, et la séance **se termine par le greybox** — les élèves repartent avec l'éditeur ouvert, pas seulement avec un document.

!!! note "Pourquoi planifier ici plutôt qu'après le menu"
    La mémoire du jeu express est encore chaude. Un élève qui vient de finir un jeu estime mieux qu'un élève qui vient de faire un menu. Le GDD est aussi verrouillé une semaine plus tôt, ce qui laisse trois séances avant le prototype F1 au lieu de deux.

### S5 - Interface et premier code

* **Canvas** : modes de rendu, ancrages, résolution de référence, `CanvasScaler`
* **TextMeshPro** : import des essentiels, polices custom, matériaux de texte
* **HUD** : les 3 règles, les ancres, tenir à toutes les résolutions
* **Menu** titre → jeu → fin : boutons, navigation, `Time.timeScale` pour la pause
* **Le feedback** : la moitié de l'agentivité
* **Premier script** : un `MonoBehaviour` fourni, branché sur `Button.onClick`
    * Le code est **donné**, commenté ligne par ligne; l'élève ne l'écrit pas, il le lit et le branche
    * Objectif : démystifier - une heure plus tard, il écrira le sien
* **C# de survie** : variables, `Start`/`Update`, `public` (et pourquoi ça apparaît dans l'Inspector), conditions, méthodes, `GetComponent`, `Debug.Log`
* **Usage cool** : générer des GameObjects par script (`Instantiate` dans une boucle) - grille, cercle, dispersion aléatoire
* **Prefabs custom** : créer, instancier, variantes, override, prefab imbriqué
* **Kit de scripts prêts à brancher** remis à cette séance : compteur, minuterie, santé/dégâts, collectible, *spawner*, changement de scène différé, *screen shake*, suivi d'objet. Chaque script est commenté, exposé dans l'Inspector, et appelable depuis un CES. Vu que le C# reste volontairement minimal, ce kit détermine directement le plafond de ce que les élèves peuvent fabriquer - il s'enrichit d'une séance à l'autre.

!!! note "Démystifier, puis enseigner"
    Le script fourni vient **avant** le C# de survie, dans la même séance. C'est l'ordre qui compte : on prouve d'abord que le code n'est qu'un composant de plus, ensuite on l'ouvre.

    Les *materials* sont partis en S9 avec la passe visuelle - cette séance est déjà bien assez chargée.

### S6 - Animation, caméra et états

**Bloc 1 - États du personnage**

* **Animator** : contrôleur, états, paramètres (`bool`, `float`, `trigger`), transitions et conditions
* **Machine à états** appliquée au personnage : idle, marche, course, saut, action - détection et indication de l'état
* **Blend Tree** simple (marche → course)
* **Rigging du T-pose Synty via Mixamo** (reporté de la S3), avatar **humanoïde** et *retargeting* — le personnage arrête enfin de glisser les bras en croix
* Animations Mixamo appliquées au perso Synty; *Animation Events*
* Animer des objets du décor (porte, plateforme, mécanisme) avec la fenêtre **Animation**

**Bloc 2 - Caméra**

* **Cinemachine** : démontage de la caméra utilisée sans le savoir depuis la S3
    * *Virtual Camera*, priorités, *follow / look at*, *body* et *aim*
    * *Damping*, *dead zone*, *soft zone* - pourquoi une caméra qui suit trop bien donne la nausée
    * *Confiner* (Cinemachine Confiner) pour empêcher la caméra de traverser les murs
    * Changement de caméra par CES (*priority blending*)
* **Perspective vs orthographique**, et le **2.5D** comme cadrage du cours : un monde 3D, mais une caméra et un déplacement contraints sur un plan
    * Trois cas montés en démo : *side-scroller* orthographique, vue de dessus, isométrique
    * Verrouillage d'un axe de déplacement; *parallax* obtenu gratuitement en 3D
    * Pourquoi presque tout ce qu'on appelle « 2D » dans l'industrie moderne est en fait du 2.5D

**Bloc 3 - Mise en scène**

* **Transitions de scènes** propres : `SceneManager`, écran de chargement, fondu
* **Cinématique** : Timeline + Cinemachine, verrouillage des contrôles pendant la cutscene, *Signal Emitter*
* Déclenchement du tout par CES

!!! note "Sur le savoir essentiel « caméra 2D »"
    Le cours est entièrement en 3D. Plutôt que de faire une parenthèse 2D artificielle, le savoir est couvert par le **2.5D** : caméra orthographique, contrainte d'axe, cadrage plat. L'élève sait configurer une caméra 2D à la fin de la séance - il l'a simplement fait dans un monde 3D, ce qui correspond à la pratique réelle.

### S7 - Le son (et backlog de production)

**Bloc 1 - Le son**

* `AudioListener`, `AudioSource`, `AudioClip`; import et formats
* **2D vs 3D** : *spatial blend*, courbes d'atténuation, *doppler*
* Ambiance en boucle, son localisé, *one shot*
* **Audio Mixer** : la console de mixage intégrée de Unity
    * **Groupes** (bus) : musique / SFX / UI / ambiance - chaque `AudioSource` est routée vers un groupe, on règle 40 sons d'un coup
    * Effets par groupe : *lowpass*, *reverb*, *compressor*, *duck volume*
    * **Paramètres exposés** : brancher un slider du menu Options sur le volume d'un groupe
    * **Snapshots** : un instantané de tous les réglages du mixeur, rappelable et *interpolable* dans le temps. Trois usages concrets - étouffer le jeu quand le menu pause s'ouvre, passer en « sous l'eau » en entrant dans une zone, baisser la musique pendant un dialogue. Le tout déclenchable par CES.
* Déclenchement : par CES, par *Animation Event*, par script fourni
* **Sources et licences** : freesound, Kenney, Pixabay - et l'obligation de créditer dans le README
* **Culture du métier (15 min, démo seulement)** : FMOD et Wwise, ce que sont les *middlewares* audio et pourquoi les studios les utilisent - sans les installer

**Bloc 2 - Atelier backlog (pendant la rotation F1)**

* **Construction du backlog de production**, maintenant que le prototype existe
    * **MoSCoW** : `Must` (sans ça ce n'est pas mon jeu) · `Should` (ça le rend bon) · `Could` (si le temps le permet) · `Won't` (repris et enrichi depuis la S4)
    * **Une carte = une séance de labo maximum (~2 h).** « Faire le niveau » n'est pas une carte, c'est un aveu. La décomposition *est* la compétence d'estimation.
    * **Ordonnancement par risque** : on construit d'abord ce qui est inconnu ou effrayant, pas ce qui est confortable. L'ordre spontané - du plus facile au plus difficile - garantit de découvrir le problème bloquant à la S13.
    * Tenu dans **GitHub Projects**, par-dessus les *issues* du dépôt

!!! abstract "Jalon formatif F1 - Prototype jouable"
    Rotation individuelle pendant que la classe construit son backlog. Attendu : greybox navigable, personnage contrôlable, une interaction, un début et une fin. C'est le premier contrôle de scope réel - un GDD trop gros se voit ici, et il reste huit semaines pour corriger le tir.

    La rencontre se fait **le tableau ouvert** : au lieu de demander « où en es-tu? », on valide les priorités à chaud et les tâches de l'enseignant s'ajoutent au même endroit, dans le même format que celles de l'élève.

    C'est aussi le moment où se corrige le **carnet de bord 1 (5 %)** : quatre observables binaires, trois minutes, écran ouvert.

!!! tip "Pourquoi le backlog ici et pas à la S4"
    Un backlog écrit avant le prototype est une liste de features **imaginées**; écrit après, c'est une liste de features **rencontrées**. À la S7, l'élève sait ce qu'une heure de son propre travail produit - et il connaît ses problèmes : sa caméra donne la nausée, sa porte ne s'ouvre pas. C'est la pratique réelle des studios : le backlog de production s'écrit à la fin de la pré-production, une fois que le prototype a désamorcé les risques du design.

    Bénéfice pratique : construire son backlog est un travail individuel et silencieux qui ne demande pas la présence de l'enseignant. C'est le meilleur usage possible des deux heures de rotation.

!!! warning "Pourquoi pas FMOD dans le pipeline du cours"
    FMOD est gratuit en usage non commercial et sous les seuils indie, donc la licence n'est pas l'obstacle. Les vrais obstacles : c'est un **deuxième logiciel** à apprendre en parallèle de Unity, et surtout **FMOD s'entend mal avec WebGL** - il repose sur des threads que WebGL ne supporte pas, ce qui impose une initialisation par clic utilisateur, des scènes proxy pour charger les banques, et du son qui saute au changement d'onglet. Comme tout le monde publie en WebGL sur itch.io à la S11, ce serait acheter des problèmes. Le montrer 15 minutes en démo donne le vocabulaire sans le coût.

!!! tip "Ajout recommandé"
    Un **exercice de sonorisation à l'aveugle** : on joue le jeu d'un camarade sans le son et on liste les 5 moments qui en réclament un. Rapide, et ça règle le problème du « j'ai mis une musique et c'est tout ».

### S8 - Particules, VFX et *game feel*

* **Particle System** : modules essentiels (emission, shape, over lifetime, collision), materials de particules
* Recettes : poussière de pas, étincelles, fumée, ramassage d'objet, portail
* **Projectiles** : `Instantiate` (reprise de S5), `Destroy`, `Rigidbody.AddForce`, détection d'impact, *object pooling* (mention)
* **Trails**, *decals*, mention de VFX Graph (sans l'enseigner)
* **Game feel / juice** : *screen shake*, *hit stop*, mise à l'échelle au ramassage, courbes d'animation, cumul son + particule + UI sur un même événement

### S9 - Lumière et level design

* **Lumières** : directionnelle, point, spot; temps réel vs *baked*; *Light Probes*
* **Lightmapping** : paramètres, objets statiques, temps de calcul
* Skybox, brouillard, émission, *ambient light*
* **Post-traitement URP** : `Volume`, bloom, vignette, *color adjustments*, *depth of field*, *tonemapping*
* **Level design** : du greybox au décor final, métriques (largeur de couloir, hauteur de saut), lisibilité, guidage du joueur (lumière, couleur, ligne de fuite, contraste), rythme du niveau
* **Shader Graph** : **une seule** recette montée en direct (dissolution ou eau)
* **Devoir** : premier build WebGL déposé sur une page itch.io privée (fonctionnel avant tout, pas beau) - les surprises de build WebGL ne doivent pas être découvertes la semaine de la remise finale

!!! abstract "Jalon formatif F2 - Tranche verticale"
    Rotation individuelle en deuxième partie. Attendu : **un segment court mais fini** - habillé, animé, sonorisé, éclairé. Pas le jeu au complet : l'échantillon qui prouve le niveau de qualité visé. C'est aussi la **rétroaction sur l'objectif 1**, tous les savoirs de médias visuels et sonores étant maintenant enseignés.

!!! note "Contenir l'ambition - Shader Graph"
    **Une** recette, montée en direct, du début à la fin. Pas de théorie des nœuds, pas de mathématiques de shader, pas d'exercice noté. L'objectif est que l'élève sache que l'outil existe et qu'il puisse copier la recette dans son jeu. Shader Graph est un cours à lui seul; s'y engager ici, c'est perdre la passe d'éclairage et de level design, qui rapporte dix fois plus visuellement.

### S10 - PNJ et intelligence artificielle

* **NavMesh** : *baking*, `NavMeshAgent`, zones, obstacles
* Patrouille par waypoints; poursuite; retour au poste
* **Détection** : distance, cône de vision, `Raycast` (ligne de vue)
* Machine à états simple du PNJ (patrouille → alerte → poursuite → perte de trace)
* PNJ non hostile : marchand, guide, dialogue déclenché par CES
* Rétroaction du PNJ : animation, son, indicateur visuel

!!! note "Contenir l'ambition - IA"
    **NavMesh + patrouille + détection, point.** Pas d'arbre de comportement, pas de *behavior tree* d'asset store, pas de système de dialogue à embranchements, pas de combat à états multiples. Un PNJ qui patrouille, qui voit le joueur et qui le poursuit produit déjà 90 % de la tension recherchée - et c'est faisable en une séance. Tout ce qui va au-delà est un piège à scope, autant pour l'enseignant que pour l'élève : ça mange trois semaines de production et ça finit rarement dans le build final.

### S11 - Publication et persistance

* **Build Settings** : plateformes, scènes incluses, icône, résolution, *Player Settings*
* **WebGL** : contraintes (pas de fenêtres natives, compression, taille), temps de build, pièges fréquents
* **itch.io** : page de projet, upload, *embed*, visuels de page, description, crédits
* `README.md` final et **crédits des médias** *(critère de la grille finale)*
* **Sauvegarde** : `PlayerPrefs` - progression (dernier niveau atteint), options (volume, sensibilité), meilleur score. `SetInt` / `SetFloat` / `SetString`, `Save`, `DeleteAll` pour tester.
    * Amené comme **ce qu'il y a sous la case `Persistent`** du CES, utilisée sans le savoir depuis la S3
    * **Atelier du script custom** : l'exigence B6 du projet demande un script C# écrit par l'élève. Ceux qui n'en ont pas encore repartent d'ici avec le leur - le meilleur score sauvegardé est le sujet de repli, court et utile.
* **Performance** : Profiler en survol, *batching*, nombre de lumières temps réel, taille des textures

!!! note "Contenir l'ambition - sauvegarde"
    **`PlayerPrefs` suffit.** Les jeux du cours ont un niveau et une mécanique : il n'y a rien à sérialiser qui ne tienne pas dans trois clés. La sérialisation JSON, les chemins de fichiers, la gestion des versions de sauvegarde et la corruption de données sont un sujet de session avancée. Mentionner que JSON existe pour les états complexes, et passer à autre chose.

!!! note "Le premier upload a déjà eu lieu"
    Le devoir de la S9 impose un build WebGL déposé sur une page privée. La séance 11 sert donc à **régler les problèmes déjà rencontrés** plutôt qu'à les découvrir : compression, taille des banques, chemins d'assets, temps de chargement.

### S12 - Tests utilisateurs et plan de production

* **Dépôt de l'alpha** en début de séance : build WebGL publié en ligne
* Pourquoi tester : ce qu'on ne peut pas voir soi-même dans son propre jeu
* **Heuristiques** d'utilisabilité appliquées au jeu (voir [heuristiques](./extra/heuristiques.md))
* **Protocole de playtest** : consigne minimale, *think aloud*, ne jamais aider, observer sans expliquer
* Rotation en classe : chaque élève teste 3 jeux, remplit une grille d'observation
* Dépouillement : trier les observations, distinguer bogue / friction / préférence
* **Revue de backlog** : traduire les observations en *issues*, re-prioriser le tableau, déplacer en `Won't` ce qui ne rentrera plus

!!! abstract "Jalon formatif F3 - Alpha (*feature complete*)"
    Rotation individuelle pendant les tests croisés. Attendu : **toutes les mécaniques du GDD branchées**, niveau complet parcourable, build WebGL en ligne. Après ce point, plus aucune fonctionnalité nouvelle. C'est le jalon le plus déterminant : la liste de tâches qui en sort est celle sur laquelle se joue la finition, et c'est la **rétroaction sur l'objectif 2**.

    Les observations des pairs recueillies le jour même alimentent directement la rencontre - l'élève arrive avec des données, pas avec ses impressions.

### S13 - Production + capsule

* Atelier encadré sur les *issues* prioritaires
* **Capsule d'enrichissement** (30-45 min, non bloquante), au choix selon le groupe :
    * Accessibilité (contrastes, taille de texte, remappage, options de confort)
    * [Tableau des meneurs avec Unity Gaming Services](./extra/leaderboard-ugs.md)
    * Localisation FR/EN
    * ScriptableObjects pour les données de jeu
    * [Recettes avancées](./extra/recettes-avancees.md)

### S14 - Production et gel

* Atelier encadré
* **Gel des fonctionnalités** : plus rien de nouveau, on corrige et on polit
* Checklist de finition : le jeu se lance, se termine, se recommence; aucun mur invisible non voulu; le son ne sature pas; le menu fonctionne
* **Build de validation publié** en fin de séance
* Préparation de l'oral

!!! abstract "Jalon formatif F4 - Bêta / *release candidate*"
    Dernière rotation individuelle. Attendu : **contenu complet**, fonctionnalités gelées, build de validation en ligne. On passe ensemble les *issues* `must` encore ouvertes : ce qui reste à la fin de cette rencontre est exactement ce qui sera vérifié à la S15. Aucune surprise possible à la remise.

    C'est aussi le moment où se corrige le **carnet de bord 2 (5 %)**.

### S15 - Remise et présentations

* Remise du **projet final (70 %)** - version *gold*
* Oraux : 5 min par élève
    * concept et boucle de jeu
    * **les tâches reçues aux jalons et ce qui en a été fait** - l'élève ouvre son dépôt et montre les *issues* fermées
    * une difficulté technique et comment elle a été résolue
    * ce qui serait fait autrement
* Démonstration jouée en direct depuis la page itch.io

---

## Évaluation

Six notes, dont quatre légères, et **quatre jalons de rétroaction individuelle**. L'état du jeu n'est noté qu'une seule fois, à la toute fin.

| Évaluation | Séance | Pondération |
|------------|--------|-------------|
| **Devoir 01** - tutoriel *Get Started With Unity*, capture du build publié | vérifié au début de la S2 | 2 % |
| **Jeu express** - acquis Unity (environnement, personnage, physique, trigger, scènes, habillage, build) | déposé la veille de la S4 | 13 % |
| **GDD** - concept, boucle, scope, niveau, médias prévus, ambiance | S4 | 5 % |
| **Carnet de bord 1** - mise en place du backlog | S7, pendant F1 | 5 % |
| **Carnet de bord 2** - tenue du carnet | S14, pendant F4 | 5 % |
| **Projet final** - jeu complet publié, README et crédits, oral | S15 | 70 % |

Les quatre premières notes arrivent tôt et sont légères : **25 % de la note finale est acquise avant la S15**. Elles mesurent quatre choses distinctes - un pipeline technique parcouru au complet (devoir 01), les gestes Unity de l'objectif 1 en situation (jeu express), un scope verrouillé par écrit (GDD), et la tenue du suivi de production (carnet de bord).

**L'état du jeu, lui, n'est jamais noté avant la remise finale.** Les quatre jalons produisent un avis écrit et une liste de tâches nominative, pas une note : un élève ne peut donc pas perdre de points sur une chose qu'on ne lui a pas encore enseignée ou signalée. Ce qui est noté en cours de route, c'est la **régularité** - que le backlog vive et que le devlog se remplisse semaine après semaine. C'est le seul élément du dispositif qui ne se rattrape pas la veille de la remise.

### Le carnet de bord

Même logique qu'un cahier de laboratoire : on note **la tenue du suivi**, jamais l'état du jeu. Des observables binaires, vérifiables **écran ouvert en trois minutes** pendant la rotation individuelle qui a déjà lieu à chaque jalon - donc aucune correction hors classe.

**Carnet de bord 1 - mise en place · S7, pendant F1 · 5 %**

| Observable | Pts |
|------------|-----|
| Le tableau **GitHub Projects** existe et est alimenté depuis la S4 | 1 |
| Backlog **priorisé MoSCoW**, avec la colonne `Won't` réellement remplie | 2 |
| Cartes **découpées** : aucune ne dépasse une séance de labo (pas de « faire le niveau ») | 1 |
| **Devlog** : au moins 3 entrées au format imposé (capture + 3 lignes + ce qui bloque) | 1 |

**Carnet de bord 2 - tenue · S14, pendant F4 · 5 %**

| Observable | Pts |
|------------|-----|
| **Devlog tenu** : une entrée par séance depuis la S7 (deux manquantes tolérées) | 2 |
| **Issues des jalons F1 à F3 traitées** : fermées, ou reportées explicitement et assumées | 1 |
| **Backlog vivant** : cartes déplacées, repriorisées, ajoutées en cours de route | 1 |
| **Commits liés aux issues** (`closes #12`) et messages lisibles | 1 |

!!! tip "Pourquoi ça fonctionne comme levier"
    Un élève qui ne touche pas à son jeu pendant trois semaines ne peut pas fabriquer un devlog crédible la veille : les dates de commit et l'historique du tableau sont horodatés. C'est la seule pièce du dispositif qu'on **ne peut pas rattraper à la dernière minute** - et c'est exactement ce qu'on cherche.

### Jalons formatifs et rencontres individuelles

Chaque jalon suit le même déroulé : **matière en première partie de séance, puis rotation individuelle** pendant que la classe travaille. La rencontre produit un **avis écrit** - commentaires, recommandations, et une **liste de tâches nominative**.

| # | Séance | Nom de production | État attendu du jeu |
|---|--------|-------------------|---------------------|
| **F1** | S7 | **Prototype jouable** (*first playable*) | Greybox navigable, personnage contrôlable, une interaction, un début et une fin. Laid, mais jouable de bout en bout. |
| **F2** | S9 | **Tranche verticale** (*vertical slice*) | Un segment court mais **fini** : habillé, animé, sonorisé, éclairé. C'est l'échantillon qui prouve le niveau de qualité visé. → rétroaction objectif 1 |
| **F3** | S12 | **Alpha** (*feature complete*) | Toutes les mécaniques du GDD sont branchées, le niveau complet est parcourable, build WebGL en ligne. Plus aucune fonctionnalité à ajouter après ce point. → rétroaction objectif 2 |
| **F4** | S14 | **Bêta / *release candidate*** | Contenu complet, gel des fonctionnalités, build de validation publié. Correctifs et polissage seulement. |

La remise de la S15 correspond au ***gold*** : la version qu'on expédie.

!!! note "Pourquoi ce vocabulaire"
    *First playable*, *vertical slice*, alpha, bêta, RC, gold : c'est la terminologie réelle des studios, et chaque terme désigne un **état vérifiable** du jeu, pas un pourcentage d'avancement. L'élève apprend à répondre à « où en es-tu? » autrement que par « à peu près à moitié ». La seule adaptation : bêta et RC sont fusionnés en un seul jalon - quinze semaines ne permettent pas de les séparer honnêtement.

### La liste de tâches comme levier d'équité

C'est le mécanisme central du dispositif. À chaque jalon, l'élève repart avec une liste de tâches **calibrée par l'enseignant** :

* un projet ambitieux reçoit des tâches de **resserrement** : couper, finir, stabiliser
* un projet mince reçoit des tâches d'**approfondissement** : ajouter une couche, densifier le niveau, travailler la rétroaction

L'objectif n'est pas que tout le monde livre le même jeu, mais que **tout le monde fournisse un effort comparable**. La calibration est la responsabilité de l'enseignant, pas de l'élève.

**Traçabilité.** Chaque tâche devient une *issue* GitHub dans le dépôt de l'élève, étiquetée `f1`, `f2`, `f3` ou `f4`, et distinguée en :

* **`must`** - exigée, comptée dans l'évaluation finale
* **`should`** - recommandée, valorisée sans être exigée

L'élève peut **négocier** une tâche au moment de la rencontre; ce qui est retenu est consigné. Rien d'oral : en cas de désaccord à la fin de la session, seule la trace écrite compte.

### Grille du projet final (70 %)

Détail complet des exigences dans [Travail final — Le jeu de session](./devoirs/projet-final.md).

| Critère | Ce qu'on regarde | Pondération |
|---------|------------------|-------------|
| **Objectif 1 - intégration des médias** | Visuel, animation, son, lumière, caméra *(sections D et E du socle)* | 18 % |
| **Objectif 2 - actions et progression** | Structure, portes, interactions, rétroaction *(sections A, B, C)* | 18 % |
| **Créativité et cohérence du parti pris** | Intention nommée et tenue, zones réellement distinctes, détournement d'un outil, décisions justifiées à l'oral *(section H)* | 12 % |
| **Rigueur - réalisation des tâches des jalons** | *Issues* `must` fermées, démontrées à l'oral | 12 % |
| **Finition et publication** | Build WebGL, itch.io, README, crédits, carte de preuves, aucun défaut visible *(section G)* | 5 % |
| **Oral et démonstration** | Concept, tâches reçues et ce qui en a été fait, une difficulté technique et sa résolution, ce qui serait fait autrement | 5 % |

**Les savoirs essentiels se notent en présent / absent** - l'exigence fonctionne ou elle ne fonctionne pas, il n'y a rien à discuter. **Créativité et rigueur se notent en qualité**, et pèsent ensemble 24 % des 70 : ce sont les deux attitudes professionnelles inscrites au devis départemental, et c'est là que se joue la différence entre deux jeux qui cochent les mêmes cases. Un jeu bâclé peut obtenir tous ses points de savoirs et perdre les deux attitudes.

**Aucun point d'ampleur nulle part.** Une quatrième zone ou une deuxième mécanique ne rapporte rien. Le chemin le plus court vers une bonne note est de livrer exactement le socle, avec une intention claire, très bien fait.

!!! note "La carte de preuves"
    À la remise, le README contient une table indiquant, pour chaque exigence du socle, **où elle se trouve et comment y accéder en jouant**. La règle : **ce qui n'est pas déclaré n'est pas corrigé**. L'enseignant ne cherche pas les fonctionnalités dans le jeu, il va où l'élève lui dit d'aller - en retour, une exigence déclarée est garantie d'être regardée.

!!! warning "Filet de sécurité"
    Avec 70 % sur une seule remise, un projet abandonné en fin de session reste lourd de conséquences - même si 25 % de la note est déjà acquise avant la S15. Deux garde-fous supplémentaires : le build **alpha de la S12 est publié en ligne** et sert d'artéfact de repli si rien n'est remis à la S15; et les quatre jalons rendent tout décrochage visible dès la S7, avec sept semaines pour réagir.

---

## Couverture des savoirs essentiels

Tous les savoirs essentiels des deux objectifs sont enseignés **avant la séance 12**.

**Objectif 1 - intégrer des médias visuels et sonores dans une expérience ludique**

| Savoir | Séances |
|--------|---------|
| Logiciels et installation | S1 |
| Classement des fichiers | S2, S4 (dépôt) |
| Environnement navigable | S2, S3, S9 |
| Intégration d'images et de médias visuels | S2, S8, S9 |
| Sons et échantillons | S3 (survol), S7 (profondeur) |
| Animation | S6 (rigging + Animator) |
| Configuration d'une caméra 2D | S6, traité en **2.5D** : orthographique, contrainte d'axe, cadrage plat dans un monde 3D |
| Compilation | S3, puis à chaque jalon; WebGL à partir de S11 |

**Objectif 2 - programmer des actions ludiques pour la progression**

| Savoir | Séances |
|--------|---------|
| Notions d'interaction, affordance, agentivité | S1, S4 |
| Collisions et déclenchement d'événements | S2, S3 |
| Transitions de scènes | S2, S6 |
| Interface virtuelle et menu | S5 |
| Environnement de programmation | S5 (script fourni, puis C#) |
| Déplacement d'un personnage | S3 (sans code), S5 |
| Interactions virtuelles, système clé/porte | S3, S5 |
| Progression selon la réussite ou l'échec | S3 (CES + variables), S6, S10 |
| HUD, indication des réussites et échecs | S5, S8 |
| Échantillons sonores déclenchés | S7 |
| États du personnage détectés et animés | S6 |

Les deux activités de rétroaction exigées ont lieu aux jalons formatifs **F2 (S9, objectif 1)** et **F3 (S12, objectif 2)**, sous forme de rencontre individuelle avec avis écrit.

!!! note "Écart assumé au devis"
    Le devis mentionne la « configuration d'une caméra 2D ». Le cours étant intégralement en 3D, ce savoir est enseigné sous l'angle du **2.5D** (S6) : caméra orthographique, déplacement contraint sur un plan, cadrage plat. C'est la seule liberté prise avec les savoirs essentiels, et elle est délibérée - elle correspond à la façon dont l'industrie fabrique aujourd'hui les jeux dits « 2D ».

Level design, éclairage, VFX, PNJ, publication web, sauvegarde, performance, tests utilisateurs et versionning dépassent le devis ministériel : ils sont enseignés parce qu'ils correspondent à la pratique réelle, mais ne sont jamais bloquants pour la réussite du cours.
