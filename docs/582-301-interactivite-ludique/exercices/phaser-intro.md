[:material-arrow-u-left-top: Cours 1](../cours01.md){ .breadcrumb }

# Installation de base

Exercice sur le concept d'animation interpolée (Tween) en Phaser.

## Objectif

L’objectif de cet exercice est d’abord d’animer la tête de haut en bas.  Il est ensuite question d’animer les 6 nuages.

Chaque nuage doit apparaître à une position aléatoire et se diriger de gauche à droite.

Lorsque l’animation est terminée, il faut redéfinir une position aléatoire et recommencer l’animation.

Résultat 👇

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Tween - Exercice RÉSULTAT" src="https://codepen.io/tim-momo/embed/bGyyWLy?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/bGyyWLy">
  Tween - Exercice RÉSULTAT</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Consignes

- [ ] Faire une copie (:material-source-branch:fork) de l'[exercice incomplet](https://codepen.io/tim-momo/pen/xxNNdop).
- [ ] Dans la fonction `create()`, définir les valeurs initiales `x`, `y` et `scale` de la tête.
- [ ] Animer la tête avec la commande `this.tweens.add`.
- [ ] Pour chaque nuage, appeler la fonction `moveCloud()`.
- [ ] Dans la fonction `moveCloud()`, définir les valeurs initiales :material-dice-multiple:aléatoires `x`, `y`, `alpha` et `scale` du nuage reçu en argument.
- [ ] Animer le nuage reçu en argument avec la commande `this.tweens.add`.
- [ ] Lorsque l'animation est terminée (`onComplete`), appeler de nouveau la fonction `moveCloud()` afin de recommencer une nouvelle animation.