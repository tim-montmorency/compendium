[:material-arrow-u-left-top: Cours 4](../cours04.md){.breadcrumb}

# Un voyage pixelisé

Exercice sur le déplacement par pixel, la détection des bords du canvas ainsi que le contrôle des touches du clavier.

## Résultat attendu

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Phaser - Déplacement WASD PUBLIC" src="https://codepen.io/tim-momo/embed/poXXJWe?default-tab=&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/poXXJWe">
  Phaser - Déplacement WASD PUBLIC</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Consignes

- [ ] Veuillez effectuer un fork du [Codepen de départ](https://codepen.io/tim-momo/pen/WNqqvbv).
- [ ] Dans la fonction `create()`, ajoutez une variable de vitesse de déplacement. Assignez la valeur `3`.
- [ ] Dans la fonction `create()`, ajoutez 4 variables de détection de clavier pour les touches: `W`, `A`, `S` et `D`.
- [ ] Dans la fonction `create()`, affichez l'image de fond d'écran.
- [ ] Dans la fonction `create()`, affichez l'image du personnage au centre du canvas.
- [ ] Dans la fonction `move()`, déplacez le personnage avec les touches W, A, S, D (W = Haut, A = Gauche, S = Bas, D = Droite)
- [ ] Dans la fonction `setConstraint()`, limitez le déplacement du personnage aux contours du canvas. Astuce : pensez à l'`origin` et aux dimensions de l'image. Celle-ci doit être entièrement contenue entre les contours du canvas.
