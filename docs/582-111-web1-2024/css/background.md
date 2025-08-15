# Background
La propriété background et ses différentes sous-propriétés permettent de contrôler l'apparence de l'arrière-plan d'un élément.

## background-color

La propriété background-color permet de définir la couleur d'arrière-plan d'un élément. Cette propriété accepte différentes unités de couleur.

Par exemple:

- Nom, ex: green
- Code hexadécimal (hex), ex: #3FC774
- RGB, ex: rgb(63, 199, 116)
- RGBA, ex: rgba(63, 199, 116, 1)
- HSL, ex: hsl(143, 55%, 51%)


!!!note

    Tous les exemples ci-dessus ☝️ correspondent à la couleur verte, mais écrit dans des formats différents.

<iframe height="300" style="width: 100%;" scrolling="no" title="Background-color" src="https://codepen.io/tim-momo/embed/vYadMOe?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/vYadMOe">
  Background-color</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## background-image

La propriété `background-image` permet de définir une image d'arrière-plan à un élément. Elle accepte une ou plusieurs images et des fonctions permettant de générer un dégradé.

Afin d'illustrer les différents comportements associés aux images d'arrière-plan, l'image ci-dessous 👇 sera utilisée dans les exemples suivants.


![square](https://github.com/user-attachments/assets/5dea1be8-8d24-4deb-b979-f88a4cf29764){ style="display: block; margin: 0 auto" }


## Image
L'option la plus simple consiste à afficher une image.



!!!note

    Remarquez comment l’image se répête par défaut

## Dégradé
Il est possible de générer un dégradé à titre d'image d'arrière-plan en utilisant les fonctions CSS `linear-gradient()` et `radial-gradient()`. La première fonction génère un dégradé linéaire, tandis que la deuxième génère un dégradé circulaire.

Par exemple:

```
background-image: linear-gradient(#3FC774, #3C38BA);
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Background-image: Linear vs Radial gradients" src="https://codepen.io/tim-momo/embed/jOpZRag?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/jOpZRag">
  Background-image: Linear vs Radial gradients</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## Combinaison
Il est possible de donner plus d'une valeur d'image d'arrière-plan. Pour ce faire, il est nécessaire de séparer chaque valeur avec une virgule.

Par exemple:

```
background-image: url('dessus.jpg'), url('dessous.jpg');
```
<iframe height="300" style="width: 100%;" scrolling="no" title="Background-image: Multiple" src="https://codepen.io/tim-momo/embed/poZaBKv?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/poZaBKv">
  Background-image: Multiple</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

!!!warning
      
      La première valeur passée à la propriété background-image correspond à l’élément sur le dessus et ainsi de suite.

      

## background-repeat

La propriété `background-repeat` définit la façon dont une image en arrière-plan est répétée. Cette valeur accepte plusieurs valeurs:

- `repeat` **(par défaut)**
- `no-repeat`
- `repeat-x`
- `repeat-y`
- Etc.


## repeat vs no-repeat

À gauche, `background-repeat: repeat`; indique de répéter l'image d'arrière-plan aussi souvent que nécessaire afin de couvrir l'ensemble de l'élément.

À droite, `background-repeat: no-repeat`; indique au contraire de ne pas répéter l'image d'arrière-plan.

<iframe height="300" style="width: 100%;" scrolling="no" title="Background-repeat: repeat vs no-repeat" src="https://codepen.io/tim-momo/embed/yLqvrZe?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/yLqvrZe">
  Background-repeat: repeat vs no-repeat</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## repeat-x vs repeat-y

À gauche, `background-repeat: repeat-x`; indique de répéter l'image d'arrière-plan sur l'axe des X uniquement ↔️.

Tandis qu'à droite, `background-repeat: repeat-y`; indique à l'opposé de répéter l'image d'arrière-plan sur l'axe des Y uniquement ↕️.

<iframe height="300" style="width: 100%;" scrolling="no" title="Background-repeat: repeat-x vs repeat-y" src="https://codepen.io/tim-momo/embed/bGjLJXb?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/bGjLJXb">
  Background-repeat: repeat-x vs repeat-y</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## background-position

La propriété `background-position` permet de définir la position d'un arrière-plan. Il est possible de définir deux valeurs correspondant à la position X et Y dudit arrière-plan dans son élément. Ces valeurs peuvent-être n'importe quelle unité CSS **(px, %, em, etc.)**, ainsi que certains mots-clés **(top, bottom, left, right)**.

À gauche, b`ackground-position: 75% 25%`; positionne l'arrière-plan à 75% horizontalement et 25% verticalement.

Tandis qu'à droite, `background-position: center bottom`; positionne l'arrière-plan au centre et au bas de son élément.

<iframe height="300" style="width: 100%;" scrolling="no" title="Background-position" src="https://codepen.io/tim-momo/embed/WNKMBvv?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/WNKMBvv">
  Background-position</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## background-size

Par défaut, une image en arrière-plan affichera en fonction de sa dimension réelle. Cependant, la propriété `background-size` permet de contrôler la dimension de ladite image.

Il est possible de définir deux valeurs, correspondant à la largeur et la hauteur de l'arrière-plan utilisé. Ces valeurs peuvent-être n'importe quelle unité CSS **(px, %, em, etc.)** ou encore le mot-clé `auto`, indiquant d'ajuster proportionnellement une dimension en fonction de l'autre.

Par exemple, l'image de référence, normalement carrée, peut-être déformée si deux valeurs ne correspondant pas à ses proportions d'origine lui sont attribuées, comme dans l'exemple de gauche avec `background-size: 80px 40px`;.

Tandis qu'à droite, `background-size: 50%` auto; indique à l'image d'arrière-plan de prendre une demi-largeur et de s'ajuster automatiquement sur la hauteur afin de garder le ratio original de l'image.

<iframe height="300" style="width: 100%;" scrolling="no" title="Background-size: CSS unites" src="https://codepen.io/tim-momo/embed/bGjLXKJ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/bGjLXKJ">
  Background-size: CSS unites</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


Mots-clé
En plus des unités CSS, la propriété `background-size` accepte aussi des mots-clé.

Par exemple, à gauche, `background-size: contain;` garde le ratio de l'image d'arrière-plan intact et la redimensionne de sorte qu'elle soit entièrement visible dans l'élément. 🚫 rognage.

Tandis qu'à droite, `background-size: cover`; garde aussi le ratio de l'image d'arrière-plan intact, mais la redimensionne de sorte que l'élément soit entièrement recouverte par elle. Quitte à rogner certaines parties de l'image.

<iframe height="300" style="width: 100%;" scrolling="no" title="Background-size: Contain vs Cover" src="https://codepen.io/tim-momo/embed/zYLRgJN?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/zYLRgJN">
  Background-size: Contain vs Cover</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Syntaxe courte

La propriété `background` permet de définir toutes les propriétés précédemment mentionnées en une seule ligne. Si la valeur d'une sous-propriété est omise, elle est alors considérée comme étant définie avec sa valeur par défaut.

Par exemple:

```
.demo {
  background-image: url('image.png');
  background-size: 100px 100px;
  background-repeat: no-repeat;
}
```

Est équivalent à:

```
.demo {
  background: url('image.png') 100px 100px no-repeat;
}
```


## Outils

<div class="grid grid-auto" markdown>
![Capture d’écran, le 2024-10-15 à 20 30 37](https://github.com/user-attachments/assets/889b6bdf-7326-4486-9888-f08d44b4b2e4)

  **CSS3 Patterns Gallery**<br>
  _Collection d’arrière-plans CSS réalisés à partir de dégradés pouvant être utilisés sur des projets._<br>
  [CSS3 Patterns Gallery](https://projects.verou.me/css3patterns/)

  
</div>

## Exercices
<div class="grid grid-auto" markdown>

![Capture d’écran, le 2024-10-15 à 20 32 41](https://github.com/user-attachments/assets/390d5d87-792e-4f09-b1ec-1832f0029b14)

  **Background - Candy Crush**<br>
  _Pour cet exercice, vous devrez recréer des mises en page inspirées du jeux Candy Crush en mettant à profit vos connaissances sur la propriété CSS background._<br>
  [Background - Candy Crush](../exercices/candy-crush.md)
</div>
