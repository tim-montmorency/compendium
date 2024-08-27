[:material-arrow-u-left-top: Cours 1](../cours01.md){ .breadcrumb }

# Installation de base

## Objectif

Faire l'installation de base du projet de session, votre jeu vidéo!

## Consignes

- [ ] Créer la structure de fichiers.
- [ ] Dans la fonction `create()`, définir les valeurs initiales `x`, `y` et `scale` de la tête.
- [ ] Animer la tête avec la commande `this.tweens.add`.
- [ ] Pour chaque nuage, appeler la fonction `moveCloud()`.
- [ ] Dans la fonction `moveCloud()`, définir les valeurs initiales :material-dice-multiple:aléatoires `x`, `y`, `alpha` et `scale` du nuage reçu en argument.
- [ ] Animer le nuage reçu en argument avec la commande `this.tweens.add`.
- [ ] Lorsque l'animation est terminée (`onComplete`), appeler de nouveau la fonction `moveCloud()` afin de recommencer une nouvelle animation.