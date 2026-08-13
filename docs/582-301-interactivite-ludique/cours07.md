# Cours 7

!!! abstract ":material-comment-check: Jalon formatif F1 — Prototype jouable"
    En deuxième partie de séance, je passe vous voir individuellement. **Attendu :** un greybox navigable, un personnage contrôlable, une interaction, un début et une fin. Laid, mais jouable d'un bout à l'autre.

    Vous repartez avec un avis écrit et une liste de tâches déposée en *issues* dans votre dépôt.

<!-- ## Déroulement de la séance

| Temps | Activité |
|---|---|
| 0h00 – 1h10 | Théorie du son et audio dans Unity |
| 1h10 – 1h25 | Pause |
| 1h25 – 1h50 | Audio Mixer et snapshots |
| 1h50 – 2h05 | Démo FMOD / Wwise |
| 2h05 – 2h30 | Consignes de l'atelier backlog |
| 2h30 – 3h35 | Atelier backlog + rotation F1 | -->

## Bloc 1 — Le son

### Les 4 fonctions du son dans un jeu

### Les couches d'une bande sonore de jeu

### Formats : lequel pour quoi?

### L'audio dans Unity : 3 pièces

### 2D vs 3D : *spatial blend* et atténuation

### Ambiance en boucle, son localisé, *one shot*

### L'Audio Mixer

#### Les groupes : régler 40 sons d'un coup

#### Les effets par groupe

#### Les paramètres exposés : brancher un slider du menu Options

#### Les snapshots

!!! example "Trois usages de snapshot"
    Étouffer le jeu quand le menu pause s'ouvre. Passer en « sous l'eau » en entrant dans une zone. Baisser la musique pendant un dialogue. Le tout déclenchable par ETB.

### Déclencher un son : ETB, *Animation Event*, script

### Où trouver des sons — et l'obligation de citer

### Culture du métier : FMOD et Wwise

!!! warning "Démo seulement"
    On regarde, on ne l'installe pas. FMOD repose sur des threads que WebGL ne supporte pas — et tout le monde publie en WebGL au [cours 11](./cours11.md). Vous repartez avec le vocabulaire, pas avec les problèmes.

## Bloc 2 — Le backlog de production

!!! tip "Pourquoi maintenant et pas au cours 5"
    Un backlog écrit avant le prototype est une liste de features **imaginées**. Écrit après, c'est une liste de features **rencontrées** — tu sais maintenant que ta caméra donne la nausée et que ta porte ne s'ouvre pas. C'est aussi la pratique réelle des studios : le plan de production s'écrit à la fin de la pré-production, quand le prototype a désamorcé les risques.

### MoSCoW : `Must`, `Should`, `Could`, `Won't`

### Une carte = une séance de labo

!!! danger "« Faire le niveau » n'est pas une carte"
    C'est un aveu. Si une carte ne tient pas dans deux heures, elle n'est pas décomposée. Et la décomposition **est** la compétence d'estimation.

### Ordonner par risque, pas par confort

### Tenir le tableau dans GitHub Projects

### `closes #12` : le commit qui ferme la carte

## Pratique

## Devoirs

<!-- Savoirs essentiels touchés (note pour l'enseignant) :

-->

<!--
================================================================
NOTES DE RÉDACTION — à supprimer une fois la séance écrite
================================================================
À rapatrier depuis .archive/ (voir .archive/MIGRATION.md) :
  - .archive/cours08.md  § Les 4 fonctions du son dans un jeu
                         § Les couches d'une bande sonore de jeu
                         § Formats : lequel pour quoi?
                         § L'audio dans Unity : 3 pièces
                         § Où trouver des sons - et l'obligation de citer
  - .archive/cours11.md  § Planifier une production : les issues GitHub
  - .archive/exercices/cours08-sonoriser-ton-jeu.md

À écrire à neuf : Audio Mixer au complet, démo FMOD/Wwise, tout le
bloc backlog, et la grille d'avis écrit du jalon F1.

À créer : exercices/cours07-backlog.md
================================================================
-->
