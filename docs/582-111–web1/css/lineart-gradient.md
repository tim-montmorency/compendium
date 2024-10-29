# Linear-gradient
La propriété `background-image` accepte la fonction `linear-gradient()`. Comme son nom l'indique, celle-ci permet de définir un dégradé. Pour générer un dégradé, il faut minimalement attribuer deux couleurs en paramètre à la fonction.

Par exemple, pour définir un dégradé de vert à bleu:

`background-image: linear-gradient(#00c774, #3c38ba);`

<iframe height="300" style="width: 100%;" scrolling="no" title="Linear-gradient" src="https://codepen.io/tim-momo/embed/gOjjpdQ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/gOjjpdQ">
  Linear-gradient</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Orientation

Par défaut, les dégradés sont verticaux. Cependant, il est possible de spécifier une direction particulière en le spécifiant dans le premier paramètre de la fonction `linear-gradient()`.

Le plus simple est d'utiliser en début de fonction des mots-clés indiquant la direction.

Par exemple:

- `to top`
- `to right`
- `to bottom **(par défaut)**`
- `to left`

<iframe height="300" style="width: 100%;" scrolling="no" title="Linear-gradient - Direction" src="https://codepen.io/tim-momo/embed/rNrrxGP?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/rNrrxGP">
  Linear-gradient - Direction</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Pour créer des dégradés diagonaux, il est possible de spécifier une deuxième direction dans le mot-clé.

Par exemple:

- `to top left`
- `to top right`
- `to bottom left`
- `to bottom right`

<iframe height="300" style="width: 100%;" scrolling="no" title="Linear-gradient - Direction diagonaux" src="https://codepen.io/tim-momo/embed/NWBBxwX?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/NWBBxwX">
  Linear-gradient - Direction diagonaux</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Degrés

Il est aussi possible de spécifier une rotation en termes de degrés pour plus de précision.

Par exemple:

`background-image: linear-gradient(90deg, #00c774, #3c38ba);`

Serait l'équivalent de `to right`. Donc il serait possible de spécifier au degré prêt l'axe du dégradé souhaité.

## Points d'arrêt

Par défaut, lorsqu'aucun point d'arrêt n'est spécifié, les couleurs sont distribuées de façon égale.

Par exemple un dégradé à trois couleurs, sans point d'arrêt, donc égales, génère de 0 à 50% une fusion du vert vers le bleu et de 50% à 100% une fusion de bleu vert le rouge.

`background: linear-gradient(to right, #00c774, #3c38ba, #ff8487);`

<iframe height="300" style="width: 100%;" scrolling="no" title="Linear-gradient - 3 colors" src="https://codepen.io/tim-momo/embed/ExppPoB?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/ExppPoB">
  Linear-gradient - 3 colors</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Il est cependant possible de définir un point d'arrêt après une couleur afin de spécifier à partir de quel point cette couleur doit commencer à fusionner avec la suivante.

Par exemple, pour contrôler la distribution du vert:

<iframe height="300" style="width: 100%;" scrolling="no" title="Linear-gradient - Point d'arrêt" src="https://codepen.io/tim-momo/embed/rNrrxJR?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/rNrrxJR">
  Linear-gradient - Point d'arrêt</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
