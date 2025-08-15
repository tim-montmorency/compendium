# Border
La propriété `border` a une vocation principalement esthétique, permettant d'ajouter une bordure à un élément.

## border-width

La sous-propriété `border-width` permet de définir la taille de la bordure. Cette valeur peut-être n'importe quelle unité de mesure CSS.

**Par exemple:**

<iframe height="300" style="width: 100%;" scrolling="no" title="Border-width" src="https://codepen.io/tim-momo/embed/rNrKMRN?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/rNrKMRN">
  Border-width</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## border-style

Comme son nom l'indique, cette propriété permet de définir le style de la bordure.

Styles disponibles:

- `none` <b>(par défaut)</b>
- `solid` ligne standard <b>(plus commun)</b>
- `dotted` pointillé
- `dashed` hachuré
- `double` double ligne
- `groove` bordure 3D donnant l'impression que le bordure a été gravée
- `ridge` bordure 3D donnant l'impression que la bordure ressort
- `inset` bordure 3D donnant l'impression que l'élément est enfoncé
- `outset` bordure 3D donnant l'impression que l'élément ressort

<iframe height="300" style="width: 100%;" scrolling="no" title="Border-style" src="https://codepen.io/tim-momo/embed/QWBxKXY?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/QWBxKXY">
  Border-style</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## border-color

Permets de définir la couleur de la bordure.

**Par exemple:**

<iframe height="300" style="width: 100%;" scrolling="no" title="Border-color" src="https://codepen.io/tim-momo/embed/rNrKWNV?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/rNrKWNV">
  Border-color</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Syntaxe courte

Il est aussi possible de définir ces trois propriétés avec une syntaxe courte en utilisant simplement la propriété border et en lui passant les différentes valeurs mentionnées précédemment.

**Par exemple:**

<iframe height="300" style="width: 100%;" scrolling="no" title="Border" src="https://codepen.io/tim-momo/embed/eYjKBNN?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/eYjKBNN">
  Border</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## border-radius

Permets de définir des coins arrondis sur un élément.

<iframe height="300" style="width: 100%;" scrolling="no" title="Border-radius" src="https://codepen.io/tim-momo/embed/QWBxGjP?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/QWBxGjP">
  Border-radius</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Si chaque coin d'un élément est arrondi jusqu'à sa moitié, les coins arrondis se rejoignent et créer un ovale. Si l'élément est aussi haut que large, cet ovale devient alors un cercle comme dans l'exemple ci-dessus lorsque la dernière option est sélectionnée.

!!!note

    Cette propriété s’applique qu’une bordure soit visible ou non sur l’élément.

### Contrôle des coins individuellement
Il est possible de contrôler individuellement chaque coin d'un élément afin de créer des formes particulières. Pour ce faire, il est possible d'utiliser les propriétés:

- `border-top-left-radius`
- `border-top-right-radius`
- `border-bottom-right-radius`
- `border-bottom-left-radius`

Ou encore de spécifier les multiples valeurs à même la propriété. Les coins sont spécifiés dans le sens des aiguilles d'une montre ⌚️ en commençant à partir du coin supérieur gauche.

**Par exemple:**

<iframe height="300" style="width: 100%;" scrolling="no" title="Border-radius - Multiple values" src="https://codepen.io/tim-momo/embed/KKBeNmK?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/KKBeNmK">
  Border-radius - Multiple values</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Outils

<div class="grid grid-auto" markdown>

<img width="184" alt="Capture d’écran, le 2024-10-22 à 20 55 48" src="https://github.com/user-attachments/assets/dcde1942-65d7-4f5f-acb0-83451d56769a">



  **Fancy border-radius**<br>
  _Générateur de border-radius._<br>
  [Fancy border-radius](https://9elements.github.io/fancy-border-radius/)
</div>





## Exercices

<div class="grid grid-auto" markdown>

<img width="183" alt="Capture d’écran, le 2024-10-22 à 20 53 32" src="https://github.com/user-attachments/assets/c14b13a9-1243-480e-addb-fa8fb0133798">


  **Border-radius - Q-bitz**<br>
  _Pour cet exercice vous devez recréer un motif à partir de tuiles contenant des formes, comme dans le célèbre jeu de scociété Q-bitz._<br>
  [Border-radius - Q-bitz](../exercices/q-bitz.md)
</div>
