# Cours 10

!!! tip "Où tu devrais être rendu"
    Ta zone 1 est finie, et ton premier build WebGL est en ligne sur une page privée.

    **Cette semaine :** ton PNJ.

    ⏭️ **Le jalon 3 est dans deux séances**, et c'est un dépôt : toutes les mécaniques branchées, les trois zones parcourables **et habillées**, build WebGL en ligne. L'habillage des zones 2 et 3 ne se fait pas en une soirée — commence-le cette semaine, en parallèle du PNJ.

<!-- ## Déroulement de la séance

| Temps | Activité |
|---|---|
| 0h00 – 0h50 | NavMesh et NavMeshAgent |
| 0h50 – 1h20 | Patrouille par waypoints |
| 1h20 – 1h35 | Pause |
| 1h35 – 2h20 | Détection : distance, cône de vision, Raycast |
| 2h20 – 2h50 | La machine à états du PNJ |
| 2h50 – 3h35 | Atelier | -->

## Le NavMesh

### Ce que c'est : une carte de ce qui est marchable

### Le *baking* du NavMesh

### Le `NavMeshAgent`

### Zones et obstacles

## Faire bouger un PNJ

### La patrouille par waypoints

### La poursuite

### Le retour au poste

## La détection

### Par distance : simple et souvent suffisant

### Le cône de vision

### Le `Raycast` : la ligne de vue

!!! tip "L'ordre des tests compte"
    Distance, puis angle, puis ligne de vue. Un `Raycast` coûte plus cher qu'une soustraction — inutile de le lancer si le joueur est à cinquante mètres.

## La machine à états du PNJ

### Patrouille → alerte → poursuite → perte de trace

### Les temporisations : pourquoi un PNJ ne doit pas réagir instantanément

## Le PNJ non hostile

### Le marchand, le guide

### Le dialogue déclenché par CES

## La rétroaction du PNJ

### L'animation

!!! tip "Habiller et animer un PNJ"
    Même recette qu'au [cours 6](./cours06.md) : un personnage **T-pose Synty** passé dans [Mixamo](https://www.mixamo.com) pour le squelette, `Animation Type: Humanoid`, puis les animations de marche et de course récupérées directement sur Mixamo. Un PNJ qui patrouille avec une vraie animation de marche vaut dix lignes de code de plus.

### Le son

### L'indicateur visuel

!!! note "Contenir l'ambition"
    NavMesh, patrouille et détection : **ça suffit**. Pas d'arbre de comportement, pas de *behavior tree* d'asset store, pas de dialogue à embranchements, pas de combat à états multiples. Un PNJ qui patrouille, qui te voit et qui te poursuit produit déjà 90 % de la tension recherchée — et c'est faisable en une séance. Tout ce qui va au-delà mange trois semaines de production et finit rarement dans le build final.

## Pratique

## Devoirs

<!-- Savoirs essentiels touchés (note pour l'enseignant) :

-->

<!--
================================================================
NOTES DE RÉDACTION — à supprimer une fois la séance écrite
================================================================
SÉANCE ENTIÈREMENT À ÉCRIRE — aucune source dans l'ancien plan.

Prévoir : exercices/cours10-pnj-et-navmesh.md
Prévoir : un ou deux scripts pour le kit (PatrolAgent, VisionCone).
================================================================
-->
