# Cours 6

<!-- ## Déroulement de la séance

| Temps | Activité |
|---|---|
| 0h00 – 1h10 | Animator et machine à états |
| 1h10 – 1h25 | Pause |
| 1h25 – 2h15 | Cinemachine et le 2.5D |
| 2h15 – 2h50 | Transitions de scènes et Timeline |
| 2h50 – 3h35 | Atelier | -->

## Bloc 1 — Les états du personnage

### Tu sais déjà animer

### Trois principes d'animation qui changent tout

### Les 3 pièces de l'animation Unity

### Du T-pose Synty au personnage animé : le rigging Mixamo

!!! note "Reporté du cours 3"
    Au [cours 3](./cours03.md), le personnage Synty a simplement remplacé le mannequin gris : il glisse en T-pose. C'est ici qu'on lui donne un **squelette** (auto-rigger [Mixamo](https://www.mixamo.com)), un **avatar humanoïde**, et donc l'accès à toutes les animations humanoïdes — celles des Starter Assets, celles de Mixamo, et plus tard celles des PNJ du [cours 10](./cours10.md).

    Prévoir un **plan B** : Mixamo n'est plus maintenu par Adobe et a déjà connu des pannes de plusieurs jours. Garder des personnages Synty déjà riggés sur le lecteur de classe.

### L'Animator : contrôleur, états, paramètres

### La machine à états : le cerveau

### Le Blend Tree : marche → course

### Détecter l'état, puis le montrer

### Les *Animation Events*

### Animer le décor : porte, plateforme, mécanisme

## Bloc 2 — La caméra

### La caméra est un choix de design, pas un réglage

### Cinemachine : la caméra qui se règle au lieu de se programmer

#### Virtual Camera, priorités, *follow* et *look at*

#### *Body* et *aim*

#### *Damping*, *dead zone*, *soft zone*

#### Le Confiner : empêcher la caméra de traverser les murs

#### Changer de caméra par CES

### Orthographique vs perspective

### Le 2.5D

!!! note "Le savoir essentiel « caméra 2D », traité autrement"
    Ce cours est entièrement en 3D. Plutôt qu'une parenthèse 2D artificielle, on couvre le savoir par le **2.5D** : un monde en trois dimensions, mais une caméra et un déplacement contraints sur un plan. C'est comme ça que l'industrie fabrique aujourd'hui la plupart des jeux dits « 2D ».

#### Le *side-scroller* orthographique

#### La vue de dessus

#### L'isométrique

#### Verrouiller un axe de déplacement

#### Le *parallax*, gratuit en 3D

## Bloc 3 — La mise en scène

### Le flux de scènes, en propre

### `SceneManager`, écran de chargement, fondu

### La cinématique : Timeline + Cinemachine

### Verrouiller les contrôles pendant la cutscene

### Le *Signal Emitter*

## Pratique

## Devoirs

<!-- Savoirs essentiels touchés (note pour l'enseignant) :

-->

<!--
================================================================
NOTES DE RÉDACTION — à supprimer une fois la séance écrite
================================================================
À rapatrier depuis .archive/ (voir .archive/MIGRATION.md) :
  - .archive/cours10.md  § Tu sais déjà animer
                         § Trois principes d'animation qui changent tout
                         § Les 3 pièces de l'animation Unity
                         § La machine à états : le cerveau
                         § L'état du personnage : détecter, puis montrer
  - .archive/cours09.md  § La caméra est un choix de design
                         § Orthographique vs perspective
                         § Cinemachine
                         § Rappel : le flux de scènes
  - .archive/cours13.md  § Les transitions de scène en douceur
  - .archive/exercices/cours10-animations-et-etats.md
  - .archive/exercices/cours09-camera-hud-et-feedback.md (partie caméra)

À écrire à neuf : Blend Tree, Animation Events, Cinemachine en profondeur
(damping, dead zone, confiner, priority blending), TOUT le bloc 2.5D,
Timeline et Signal Emitter.
================================================================
-->
