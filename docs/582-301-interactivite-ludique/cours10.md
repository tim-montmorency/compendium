<!--
Piste — Packages en lien avec le feedback
- DOTween (Asset Store, gratuit) : animations par code en une ligne (échelle, secousse, fondu) — utile pour le game feel d'un ramassage ou d'un bouton.
-->

# Cours 10

[STOP]

!!! tip "Où tu devrais être rendu"
    Ta zone 1 est finie, ton PNJ patrouille, et ton premier build WebGL est en ligne sur une page privée.

    **Cette semaine :** les particules, les projectiles et le *game feel*.

    ⏭️ **Le jalon 3 est dans deux séances**, et c'est un dépôt : toutes les mécaniques branchées, les trois zones parcourables **et habillées**, build WebGL en ligne. L'habillage des zones 2 et 3 ne se fait pas en une soirée — commence-le cette semaine, en parallèle.

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

https://assetstore.unity.com/packages/vfx/particles/particle-pack-127325

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

## Trello

### Nouvelles cartes

**Rétroaction**

- `Must` Créer le signal de réussite (son, particule, HUD)
- `Must` Créer le signal d'échec (son, particule, HUD)
- `Must` Lier trois systèmes de particules à des événements du jeu

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
