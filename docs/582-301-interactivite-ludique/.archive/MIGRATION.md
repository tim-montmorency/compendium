# Carte de migration - ancien plan → nouveau plan

Les fichiers `cours03.md` à `cours15.md` de l'**ancien** découpage sont conservés dans ce dossier `.archive/` (ignoré par MkDocs, car préfixé d'un point). Presque rien n'est à jeter : le contenu **se déplace**.

Cette carte indique, bloc par bloc, où va chaque section. À utiliser au moment de rédiger chaque nouvelle séance.

## Vue d'ensemble

| Ancien fichier | Ancien titre | Destination principale |
|----------------|--------------|------------------------|
| `cours03.md` | I made a game (2/2) | → **c03** (personnage) + **c04** (materials, son) + **c05** (GDD) |
| `cours04.md` | Concevoir : la boucle, le scope, le GDD | → **c05** |
| `cours05.md` | Validation du GDD et démarrage | → **c05** (validation, Git) + **c09** (greyboxing) |
| `cours06.md` | Contrôles et programmation minimum | → **c05** (C# de survie) |
| `cours07.md` | Interactions et progression | → **c03** (clé/porte) + **c05** (notions d'interaction) |
| `cours08.md` | Le son | → **c07** |
| `cours09.md` | Caméra, HUD et rétroaction | → **c04** (Canvas, HUD) + **c06** (caméra, Cinemachine) |
| `cours10.md` | Animation et états | → **c06** |
| `cours11.md` | Consolidation : tranche verticale | → **c07** (backlog, issues) + **c09** (tranche verticale) |
| `cours12.md` | Level design | → **c09** |
| `cours13.md` | Publication et game feel | → **c08** (game feel, particules) + **c09** (post-processing) + **c11** (WebGL, itch.io, sauvegarde) |
| `cours14.md` | Playtests et gel | → **c12** + **c14** |
| `cours15.md` | Remise et présentation | → **c15** |

## Détail par section

### → Nouveau cours 03 - Personnage et progression

| Source | Section |
|--------|---------|
| `.archive/cours03.md` | Ajouter un personnage jouable · Première personne · Troisième personne · Le tag `Player` · Compiler ton jeu |
| `.archive/cours07.md` | Rappel et approfondissement : les triggers · Les conditions techniques · Tags et layers · Le patron clé/porte |

**À écrire à neuf :** rigging Mixamo d'un T-pose Synty, réglage de l'avatar humanoïde, substitution du mesh dans le Third Person Controller.

### → Nouveau cours 04 - Interface, habillage et premier script

| Source | Section |
|--------|---------|
| `.archive/cours09.md` | Canvas, EventSystem, boutons · Les interfaces de jeu : un petit zoo · Les 3 règles du HUD · Les ancres · Le feedback |
| `.archive/cours03.md` | Les materials · Bonus : changer un material en jeu |
| `.archive/cours05.md` | Les materials : la couleur de ton monde · Le versionning : la ceinture de sécurité |

**À écrire à neuf :** TextMeshPro (import des essentiels, polices custom), script fourni branché sur `Button.onClick`, création du tableau GitHub Projects.

### → Nouveau cours 05 - Concevoir, écrire, démarrer

| Source | Section |
|--------|---------|
| `.archive/cours04.md` | La boucle de jeu : des verbes, pas une ambiance · La condition de victoire · Le scope : faisons le calcul · Les 5 pièges classiques du GDD · Le cahier des charges commun · Atelier |
| `.archive/cours05.md` | La validation : cinq minutes, et c'est verrouillé |
| `.archive/cours06.md` | Anatomie d'un script · Les variables · Le temps : Update et deltaTime · Les conditions · Les méthodes · La Console |
| `.archive/cours07.md` | Qu'est-ce qu'une interaction? · Les 4 notions d'interaction (interacteur, affordance, engagement, agentivité) |
| `.archive/cours03.md` | Les prefabs · Et maintenant, TON jeu : le document de conception (GDD) |

**À écrire à neuf :** techniques narratives, devlog (format imposé), liste de sprint 8 cartes + colonne `Won't`, générer des GameObjects par script, **kit de scripts prêts à brancher**.

### → Nouveau cours 06 - Animation, caméra et états

| Source | Section |
|--------|---------|
| `.archive/cours10.md` | Tu sais déjà animer · Trois principes d'animation · Les 3 pièces de l'animation Unity · La machine à états · L'état du personnage : détecter, puis montrer |
| `.archive/cours09.md` | La caméra est un choix de design · Orthographique vs perspective · Cinemachine · Rappel : le flux de scènes |
| `.archive/cours13.md` | Les transitions de scène en douceur |

**À écrire à neuf :** Blend Tree, *Animation Events*, Cinemachine en profondeur (damping, dead zone, confiner, priority blending), **le 2.5D** (side-scroller, vue de dessus, isométrique), Timeline et *Signal Emitter*.

### → Nouveau cours 07 - Le son et le backlog

| Source | Section |
|--------|---------|
| `.archive/cours08.md` | Les 4 fonctions du son dans un jeu · Les couches d'une bande sonore · Formats · L'audio dans Unity : 3 pièces · Où trouver des sons et l'obligation de citer |
| `.archive/cours11.md` | Planifier une production : les issues GitHub |

**À écrire à neuf :** Audio Mixer (groupes, effets, paramètres exposés, snapshots), démo FMOD/Wwise, atelier backlog MoSCoW, règle de la carte de 2 h, ordonnancement par risque.

### → Nouveau cours 08 - Particules, VFX et game feel

| Source | Section |
|--------|---------|
| `.archive/cours13.md` | Capsule 2 - Game feel · Pourquoi ça marche · La boîte à outils · Le Particle System en 5 réglages |

**À écrire à neuf :** projectiles (`Instantiate`, `AddForce`, détection d'impact), trails, decals, mention VFX Graph.

### → Nouveau cours 09 - Lumière et level design

| Source | Section |
|--------|---------|
| `.archive/cours12.md` | Le level design : l'espace qui raconte la boucle · Le rythme : tension et repos · Le cercle de Dan Harmon · Les lumières : l'outil de guidage n° 1 · Guider sans flèches · La lisibilité · Placer l'objectif · La forme de ton niveau |
| `.archive/cours13.md` | Le post-processing : le filtre Instagram de ton jeu |
| `.archive/cours05.md` | Le greyboxing : valider l'espace avant de le décorer |
| `.archive/cours11.md` | La tranche verticale : le concept industriel du jour |

**À écrire à neuf :** types de lumières et *baking* (lightmaps, Light Probes, objets statiques), skybox et brouillard, une recette Shader Graph.

### → Nouveau cours 10 - PNJ et intelligence artificielle

**Entièrement à écrire.** Aucune source dans l'ancien plan : NavMesh, `NavMeshAgent`, patrouille par waypoints, détection (distance, cône de vision, `Raycast`), machine à états du PNJ, PNJ non hostile.

### → Nouveau cours 11 - Publication et persistance

| Source | Section |
|--------|---------|
| `.archive/cours13.md` | Pourquoi publier (vraiment) · WebGL : ton jeu devient une page web · La page itch.io · Crédits et licences · En survol (optionnel) : sauvegarder des données |

**À écrire à neuf :** `PlayerPrefs` en profondeur (le bloc archivé n'est qu'un survol), Profiler et performance.

### → Nouveau cours 12 - Tests utilisateurs et plan de production

| Source | Section |
|--------|---------|
| `.archive/cours14.md` | Tu es aveugle à ton propre jeu · La règle d'or : observer en silence · Trier le feedback |
| `extra/heuristiques.md` | (déjà en place, à lier) |

**À écrire à neuf :** protocole de playtest formalisé, grille d'observation, revue de backlog.

### → Nouveau cours 13 - Production + capsule

**À écrire à neuf** (structure d'atelier). Capsules puisées dans `extra/` : accessibilité, [leaderboard UGS](../extra/leaderboard-ugs.md), localisation, ScriptableObjects, [recettes avancées](../extra/recettes-avancees.md).

### → Nouveau cours 14 - Production et gel

| Source | Section |
|--------|---------|
| `.archive/cours14.md` | Où investir la dernière semaine (le polish payant) |

**À écrire à neuf :** checklist de finition, procédure de gel, build de validation.

### → Nouveau cours 15 - Remise et présentations

| Source | Section |
|--------|---------|
| `.archive/cours15.md` | Remise · La présentation : vendre son jeu en 3 minutes |

**À ajouter :** la démonstration des *issues* `must` fermées (critère de 25 % de la grille finale).

## Exercices

Le dossier `exercices/` suit lui aussi l'ancien découpage. Copie conservée dans `.archive/exercices/`.

| Ancien fichier | Nouveau numéro |
|----------------|----------------|
| `cours03-personnage-habillage-victoire.md` | → c03 (personnage) et c04 (habillage) - **à scinder** |
| `cours04-atelier-gdd.md` | → c05 |
| `cours05-demarrer-ton-jeu.md` | → c05 |
| `cours06-controles-et-premier-script.md` | → c04 (premier script) et c05 (C#) - **à scinder** |
| `cours07-cle-porte.md` | → c03 |
| `cours08-sonoriser-ton-jeu.md` | → c07 |
| `cours09-camera-hud-et-feedback.md` | → c04 (HUD) et c06 (caméra) - **à scinder** |
| `cours10-animations-et-etats.md` | → c06 |
| `cours11-tranche-verticale.md` | → c09 (F2) |
| `cours12-level-design.md` | → c09 |
| `cours13-publication-et-game-feel.md` | → c08 (game feel) et c11 (publication) - **à scinder** |
| `cours14-playtests.md` | → c12 |
| `cours15-remise.md` | → c15 |

**Manquants à créer :** exercice PNJ/NavMesh (c10), atelier backlog (c07), capsules (c13).
