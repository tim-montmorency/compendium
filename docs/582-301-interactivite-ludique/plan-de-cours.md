# Plan de cours

## Approche pédagogique

Deux jeux dans la session. D'abord une prise en main au cours 1 (tutoriel Get Started With Unity en classe), puis un **jeu express** guidé sur deux séances (« I don't know what I'm doing, but I made a game ») : un jeu complet, publié, qui sert de **première évaluation des acquis Unity**. Ce n'est qu'ensuite - une fois qu'on sait ce que coûte une porte - qu'on conçoit **LE jeu de session**, construit couche par couche de la séance 5 jusqu'à sa publication en ligne. Tous les concepts nécessaires sont vus **avant la séance 11**; ensuite, place à la production, avec des capsules d'enrichissement non bloquantes.

!!! note "Pourquoi concevoir au cours 4 et pas au cours 1?"
    Un GDD écrit avant d'avoir touché à Unity est une liste de souhaits. Après deux séances passées à fabriquer un jeu, l'élève a une intuition de la charge de travail - et son scope devient réaliste tout seul. C'est le remède au piège numéro un du cours : le jeu trop grand.

### Cahier des charges commun du jeu de session

Liberté totale sur le thème et l'univers; obligations techniques identiques pour tous :

* Environnement navigable construit avec les assets Synty (POLYGON Sampler Pack)
* Personnage contrôlable
* Système de progression type clé/porte
* HUD et indications visuelles et sonores des réussites et échecs
* Échantillons sonores déclenchés par les événements du jeu
* États du personnage détectés et animés
* Menu (titre → jeu → fin)
* Build compilé et **publié en ligne (itch.io, WebGL)** avec README et crédits

**Contraintes dures :** 1 mécanique principale, 1 niveau, assets Synty seulement. GDD verrouillé après validation (séance 5).

### Rituels

* **GitHub dès le début du jeu de session (séance 5)** : un dépôt par élève, commit de fin de séance, README comme devlog, issues comme liste de tâches (dès la séance 11)
* **À chaque jalon** : test croisé par les pairs (grille d'observation) + présentation éclair devant la classe


## Déroulement des 15 séances

### Phase 1 - Prise en main et jeu express (S1–S3)

| # | Séance | Contenu | Jalon |
|---|--------|---------|-------|
| 1 | [Moteur de jeu et prise en main](./cours01.md) | Moteurs, ludisme, boucles de jeu; **tutoriel Get Started With Unity en classe** (à finir en devoir) | |
| 2 | [I made a game (1/2)](./cours02.md) | Projet, classement des fichiers, prefabs; monde Synty navigable et personnage jouable | |
| 3 | [I made a game (2/2)](./cours03.md) | Colliders et triggers, scènes, menu minimal, build, **mise en ligne itch.io**; introduction au **GDD** | **Jalon 0** : un jeu complet, en ligne |

### Phase 2 - Conception et démarrage (S4–S5)

| # | Séance | Contenu | Jalon |
|---|--------|---------|-------|
| 4 | [Concevoir : la boucle, le scope, le GDD](./cours04.md) | Boucle de jeu, victoire programmable, scope, les 5 pièges; **atelier GDD en classe** | Remise **jeu express (10 %)** |
| 5 | [Validation du GDD et démarrage](./cours05.md) | Validation et verrouillage des GDD, greyboxing et métriques, materials, **versionning (Git/GitHub)** | Remise **GDD (10 %)** |

### Phase 3 - Le jeu de session, couche par couche (S6–S11)

| # | Séance | Contenu | Jalon |
|---|--------|---------|-------|
| 6 | [Contrôles et programmation minimum](./cours06.md) | C# de survie, Input System, debugging | |
| 7 | [Interactions et progression](./cours07.md) | Affordance/agentivité, triggers, clé/porte par rétro-ingénierie | |
| 8 | [Le son](./cours08.md) | Intégration et déclenchement d'échantillons | **Jalon 1 (15 %)** + rétroaction objectif 1 |
| 9 | [Caméra, HUD et rétroaction](./cours09.md) | Caméra 2D/3D, flux titre → jeu → fin soigné, HUD, succès/échec | |
| 10 | [Animation et états](./cours10.md) | Animator, détection et indication d'état | |
| 11 | [Consolidation : tranche verticale](./cours11.md) | Intégration, rattrapage, plan de production (issues) | **Jalon 2 (20 %)** + rétroaction objectif 2 |

### Phase 4 - Production (S12–S15)

| # | Séance | Capsule (non bloquante) | Jalon |
|---|--------|--------------------------|-------|
| 12 | [Production](./cours12.md) | Level design | |
| 13 | [Production](./cours13.md) | Publication en ligne (WebGL, itch.io) et game feel | |
| 14 | [Production](./cours14.md) | Tests par les pairs, gel des fonctionnalités | Build de validation publié |
| 15 | [Remise et présentation](./cours15.md) | - | **Projet final (45 %)** |


## Évaluations sommatives

| Évaluation | Séance | Pondération |
|------------|--------|-------------|
| Jeu express - acquis Unity (environnement, personnage, trigger, scènes, build, publication) | S4 | 10 % |
| GDD enrichi (11 éléments + moodboard + médias cités) | S5 | 10 % |
| Jalon 1 - build navigable avec médias intégrés (objectif 1) | S8 | 15 % |
| Jalon 2 - tranche verticale, tous les systèmes (objectif 2) | S11 | 20 % |
| Projet final - jeu complet publié en ligne | S15 | 45 % |

Les deux premières évaluations arrivent **tôt** et sont de nature différente : une pratique (le jeu express, qui mesure directement les gestes Unity de l'objectif 1) et une écrite (le GDD). Les jalons, eux, évaluent **le même jeu en construction** : personne ne repart de zéro, et personne ne joue sa session sur une seule remise. La grille du projet final inclut la citation des médias externes et la qualité du dépôt (commits réguliers, README, issues).

## Couverture des savoirs essentiels

Tous les savoirs essentiels des deux objectifs sont enseignés avant la séance 11.

**Objectif 1 - intégrer des médias visuels et sonores dans une expérience ludique :** logiciels et installation (S1), classement des fichiers et environnement navigable (S2, S5), intégration d'images (S2, S9), sons (S8), animation (S10), caméra 2D (S9), compilation (S3, puis à chaque jalon, et en WebGL à partir de S13). Le **jeu express (S4)** évalue à lui seul la majorité de ces savoirs, en situation.

**Objectif 2 - programmer des actions ludiques pour la progression :** notions d'interaction (S4 en conception, S7 en profondeur), collisions et déclenchement d'événements (S3, S7), transitions de scènes et interface virtuelle/menu (S3, S9), environnement de programmation et déplacement (S6), interactions virtuelles et système clé/porte (S7), progression selon la réussite (S7, S11), HUD et indication des réussites et échecs (S9), échantillons sonores déclenchés (S8), états du personnage détectés et animés (S10).

Les deux activités de rétroaction exigées ont lieu aux jalons S8 et S11. Level design, game feel, publication web, sauvegardes, performance et versionning sont des enrichissements hors devis, en capsules non bloquantes ou en rituels.
