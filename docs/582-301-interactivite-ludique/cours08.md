# Cours 8

<!-- ## Déroulement de la séance

| Temps | Activité |
|---|---|
| 0h00 – 0h50 | Le Particle System |
| 0h50 – 1h20 | Recettes de particules |
| 1h20 – 1h35 | Pause |
| 1h35 – 2h20 | Projectiles : Instantiate, AddForce, impact |
| 2h20 – 3h00 | Game feel : la boîte à outils |
| 3h00 – 3h35 | Atelier | -->

## Le Particle System

### Les modules essentiels

### Le Particle System en 5 réglages

### Les materials de particules

### Recettes

#### Poussière de pas

#### Étincelles

#### Fumée

#### Ramassage d'objet

#### Portail

### Trails et decals

### VFX Graph : ce que c'est, et pourquoi on ne l'ouvre pas

## Les projectiles

### `Instantiate` : le retour

### `Destroy` et la durée de vie

### `Rigidbody.AddForce`

### Détecter l'impact

### L'*object pooling*, en une phrase

## Le *game feel*

### Pourquoi ça marche

### La boîte à outils

#### Le *screen shake*

#### Le *hit stop*

#### La mise à l'échelle au ramassage

#### Les courbes d'animation

### La règle du cumul

!!! tip "Un événement, trois canaux"
    Ramasser une pièce, ce n'est pas un son. C'est un son **plus** une particule **plus** un chiffre qui bouge dans le HUD **plus** un petit *pop* d'échelle. Séparément, chacun est anodin. Ensemble, c'est ce qui fait qu'on veut le refaire.

## Pratique

## Devoirs

<!-- Savoirs essentiels touchés (note pour l'enseignant) :

-->

<!--
================================================================
NOTES DE RÉDACTION — à supprimer une fois la séance écrite
================================================================
À rapatrier depuis .archive/ (voir .archive/MIGRATION.md) :
  - .archive/cours13.md  § Capsule 2 - Game feel
                         § Pourquoi ça marche
                         § La boîte à outils
                         § Le Particle System en 5 réglages
  - .archive/exercices/cours13-publication-et-game-feel.md (partie game feel)

À écrire à neuf : les recettes de particules, tout le bloc projectiles
(Instantiate, AddForce, impact, pooling), trails et decals.

Rappel : Instantiate a été introduit au cours 5 (générer des GameObjects).
C'est ici qu'il trouve son usage.
================================================================
-->
