# Plan de cours

## Approche pédagogique

Deux jeux dans la session : une prise en main au cours 1 (tutoriel Get Started With Unity en classe), un **jeu express** guidé au cours 2 (« I don't know what I'm doing, but I made a game »), puis **LE jeu de session**, démarré dès la séance 3 et construit couche par couche jusqu'à sa publication en ligne. Tous les concepts nécessaires sont vus **avant la séance 10**; ensuite, place à la production, avec des capsules d'enrichissement non bloquantes. L'élève passe environ 12 séances sur son propre jeu.

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

**Contraintes dures :** 1 mécanique principale, 1 niveau, assets Synty seulement. GDD verrouillé après validation (séance 3).

### Rituels

* **GitHub dès le début du jeu de session (séance 3)** : un dépôt par élève, commit de fin de séance, README comme devlog, issues comme liste de tâches (dès la séance 10)
* **À chaque jalon** : test croisé par les pairs (grille d'observation) + présentation éclair devant la classe


## Déroulement des 15 séances

### Phase 1 - Prise en main et jeu express (S1–S2)

| # | Séance | Contenu | Jalon |
|---|--------|---------|-------|
| 1 | [Moteur de jeu et prise en main](./cours01.md) | Moteurs, ludisme, boucles de jeu; **tutoriel Get Started With Unity en classe** (à finir en devoir) | |
| 2 | [I made a game](./cours02.md) | **Jeu express complet en une séance** : monde Synty, personnage (prefab), trigger de victoire, build, **mise en ligne itch.io**; document de conception (**GDD**) | **Jalon 0** : un jeu complet, en ligne |

### Phase 2 - Le jeu de session, couche par couche (S3–S10)

| # | Séance | Contenu | Jalon |
|---|--------|---------|-------|
| 3 | [GDD et démarrage](./cours03.md) | Game loop, scope, validation et verrouillage des GDD, **versionning (Git/GitHub)**, environnement navigable | Remise **GDD (10 %)** |
| 4 | [Contrôles et programmation minimum](./cours04.md) | C# de survie, Input System, debugging | |
| 5 | [Interactions et progression](./cours05.md) | Affordance/agentivité, triggers, clé/porte par rétro-ingénierie | |
| 6 | [Caméra, scènes et menu](./cours06.md) | Caméra 2D/3D, transitions, flux titre → jeu → fin | |
| 7 | [Le son](./cours07.md) | Intégration et déclenchement d'échantillons | **Jalon 1 (15 %)** + rétroaction objectif 1 |
| 8 | [HUD et rétroaction au joueur](./cours08.md) | HUD, succès/échec, UX de base | |
| 9 | [Animation et états](./cours09.md) | Animator, détection et indication d'état | |
| 10 | [Consolidation : tranche verticale](./cours10.md) | Intégration, rattrapage, plan de production (issues) | **Jalon 2 (25 %)** + rétroaction objectif 2 |

### Phase 3 - Production (S11–S15)

| # | Séance | Capsule (non bloquante) | Jalon |
|---|--------|--------------------------|-------|
| 11 | [Production](./cours11.md) | Level design | |
| 12 | [Production](./cours12.md) | Game feel et effets | |
| 13 | [Production](./cours13.md) | Publication en ligne (WebGL, itch.io) | |
| 14 | [Production](./cours14.md) | Tests par les pairs, gel des fonctionnalités | Build de validation publié |
| 15 | [Remise et présentation](./cours15.md) | - | **Projet final (50 %)** |


## Évaluations sommatives

| Évaluation | Séance | Pondération |
|------------|--------|-------------|
| GDD enrichi (9 éléments + moodboard + médias cités) | S3 | 10 % |
| Jalon 1 - build navigable avec médias intégrés (objectif 1) | S7 | 15 % |
| Jalon 2 - tranche verticale, tous les systèmes (objectif 2) | S10 | 25 % |
| Projet final - jeu complet publié en ligne | S15 | 50 % |

Les jalons évaluent **le même jeu en construction** : personne ne repart de zéro, et personne ne joue sa session sur une seule remise. La grille du projet final inclut la citation des médias externes et la qualité du dépôt (commits réguliers, README, issues).

## Couverture des savoirs essentiels

Tous les savoirs essentiels des deux objectifs sont enseignés avant la séance 10 : objectif 1 (logiciels, installation, environnement navigable, caméra 2D, classement des fichiers, images, sons, animation, compilation) en S1–S7 et S9; objectif 2 (notions d'interaction, programmation, menu, déplacement, interactions, collisions, transitions, progression, clé/porte, HUD, succès/échec, échantillons, états du personnage) en S2–S10. La compilation est pratiquée dès S2, puis à chaque jalon et en WebGL à partir de S13. Les deux activités de rétroaction exigées ont lieu aux jalons S7 et S10. Level design, game feel, publication, sauvegardes, performance et versionning sont des enrichissements hors devis, en capsules non bloquantes ou en rituels.
