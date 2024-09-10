[:material-arrow-u-left-top: Cours 3](../cours03.md){.breadcrumb}

# Combat lunaire

L'objectif de cet exercice est réaliser un premier jeu tout simple avec un changement de scène.

## Résultat attendu

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Phaser - Combat Lunaire SOLUTION" src="https://codepen.io/tim-momo/embed/ExBrMVP/e032356e9e7f86e3bca9e14bd1cb3c36?default-tab=&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/ExBrMVP/e032356e9e7f86e3bca9e14bd1cb3c36">
  Phaser - Combat Lunaire SOLUTION</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Coordonnées pour le crop de l'image `img`

<div class="grid" markdown>

* 32, 32, 224, 32 (7 PV)
* 32, 96, 224, 32 (6 PV)
* 32, 160, 224, 32 (5 PV)
* 32, 224, 224, 32 (4 PV)
* 32, 288, 224, 32 (3 PV)
* 32, 352, 224, 32 (2 PV)
* 32, 416, 224, 32 (1 PV)
* 32, 480, 224, 32 (0 PV)

![](../assets/images/1bitbars400.png)

</div>

## Consignes

* [ ] Effectuez un fork du [codepen de départ](https://codepen.io/tim-momo/pen/abgXMON/a8d9d48c6b52c7a88a191ca2cdf7c18e)
* [ ] Ajoutez l'attrivut `pixelArt: true` à l'objet `config`
* [ ] Ajoutez l'image `ground` en bas du canvas avec un scale approprié (`setScale()`)
* [ ] Ajoutez l'image `img` dans le canvas
* [ ] Appliquez un crop afin d'afficher l'image à 7 PV
* [ ] Corrigez la position de l'image `img`
* [ ] Ajoutez l'image `moon` en haut à droite du canvas.
* [ ] Corrigez le scale de la lune.
* [ ] Rendez la lune cliquable avec `setInteractive()`
* [ ] Lorsqu'on clique sur la lune, on doit afficher un différent crop de l'image `img` et recorrigez la position
* [ ] Lorsque le dernier click est effectué, on doit afficher la scène "gameover"
