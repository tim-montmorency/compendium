# Padding
La propriété `padding` définit l'espace entre le contenu et ses extrémités. Par défaut, cette propriété à une valeur de 0 permettant au contenu de s'afficher a même les extrémités de l'élément, mais elle accepte l'ensemble des unités de mesure CSS.

Lorsqu'une seule valeur est fournie, celle-ci est appliquée aux 4 côtés de l'élément.

Par exemple:
<iframe height="300" style="width: 100%;" scrolling="no" title="Padding" src="https://codepen.io/tim-momo/embed/rNrKjeY?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/rNrKjeY">
  Padding</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

!!!warning

    La propriété `padding` n’accepte pas les valeurs négatives.

## Sous-propriétés

Pour plus de contrôle, il est possible d'attribuer une valeur différente à chaque côté en utilisant les sous-propriétés suivantes:

- `padding-top`
- `padding-right`
- `padding-bottom`
- `padding-left`

Par exemple:
<iframe height="300" style="width: 100%;" scrolling="no" title="Padding - Sub-properties" src="https://codepen.io/tim-momo/embed/OJwEWbV?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/OJwEWbV">
  Padding - Sub-properties</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Syntaxe courte

Il est aussi possible d'attribuer les 4 côtés avec la syntaxe courte en les spécifiant un après l'autre en commençant par le haut et en tournant dans le sens des aiguilles d'une montre ⌚️ **(top, right, bottom et left)**.

Par exemple:
<iframe height="300" style="width: 100%;" scrolling="no" title="Padding - Multiple values" src="https://codepen.io/tim-momo/embed/BaPVpRj?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/BaPVpRj">
  Padding - Multiple values</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Ratio à partir de %

Lorsqu'une valeur de `padding` est définie en pourcentage **(%)**, que ce soit à l'horizontale **(left/right)** ↔️ ou vertical **(top/bottom)** ↕️, celle-ci **se base toujours sur la largeur** de l'élément.

Autrement dit, si un élément mesure 100x20px et que padding-bottom: 100% lui est ajouté, sa hauteur finale sera de 120px (20x de haut + 100px de padding-bottom).

Cette particularité est souvent exploitée afin de créer des éléments ayant un ratio spécifique. Par exemple, afin d'obtenir un format 16/9 il suffit de ramener la valeur de hauteur de cette fraction en pourcentage, soit` 9 ÷ 16 x 100% = 56.25%`.

```
.element {
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; // 16/9
}
```
Cet élément serait donc toujours dans un format 16/9, peu importe la largeur de son parent.
