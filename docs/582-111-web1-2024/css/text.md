# Text

Plusieurs propriétés CSS permettent de contrôler l'apparence d'un texte. Voici quelques-unes des propriétés les plus courantes.

## text-align

La propriété `text-align`, comme son nom l'indique, sert à déterminer l'alignement horizontal du texte. Différentes options sont disponibles:

- `left` <b>(par défaut)</b>
- `right`
- `center`
- `justify`

<iframe height="300" style="width: 100%;" scrolling="no" title="Text-align" src="https://codepen.io/tim-momo/embed/QWBBGwJ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/QWBBGwJ">
  Text-align</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## text-decoration

La propriété `text-decoration` est une propriété raccourcie permettant d'ajouter ou de retirer une ligne à un texte. Par exemple, les navigateurs utilisent cette propriété afin de différencier les liens des textes normaux en les soulignant.

Cette propriété accepte plusieurs arguments, tel que le type de ligne, sa couleur et son style.

<iframe height="300" style="width: 100%;" scrolling="no" title="Text-decoration" src="https://codepen.io/tim-momo/embed/KKBBNdE?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/KKBBNdE">
  Text-decoration</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## text-transform

La propriété `text-transform` permet de modifier un texte. Cette propriété accepte diverses valeurs:

- `none` n'a aucun impact **(par défaut)**.
- `lowercase` transforme le texte en minuscules.
- `uppercase` transforme le texte en majuscules.
- `capitalize` transform en majuscule la première lettre de chaque mot.


## text-stroke

La propriété `-webkit-text-stroke` bien que non standard, d'où sont préfix `-webkit`, est supportée par tous les navigateurs majeurs. Cette propriété accepte deux valeurs. L'épaisseur du trait entourant le le texte et la couleur du trait en question.

<iframe height="300" style="width: 100%;" scrolling="no" title="Text-stroke" src="https://codepen.io/tim-momo/embed/VwBBmmW?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/VwBBmmW">
  Text-stroke</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

!!!danger

    ERREUR FRÉQUENTE
    Lorsque le prefix -webkit est oublié, l’effet ne s’affiche pas.


## text-shadow

La propriété `text-shadow` permet d'ajouter une ombre à un texte. Cette propriété nécessite un décalage sur les X ou Y afin d'être visible par défaut. Une 3e valeur peut être ajoutée afin de spécifier le niveau de flou souhaité pour l'ombre. Finalement, une 4e valeur permet d'indiquer la couleur de l'ombre qui par défaut est de la même couleur que le texte.

<iframe height="300" style="width: 100%;" scrolling="no" title="Text-shadow" src="https://codepen.io/tim-momo/embed/rNrrWjV?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/rNrrWjV">
  Text-shadow</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Il est possible d'ajouter plusieurs ombres à un même texte si désiré en séparant chaque ombre par une virgule.

**Par exemple:**

`.element {
  text-shadow: 2px 2px red, 4px 4px blue;
}`


## Exercices

<div class="grid grid-auto" markdown>

<img width="185" alt="Capture d’écran, le 2024-10-22 à 20 42 18" src="https://github.com/user-attachments/assets/6d289ff1-3dae-4e1e-9c30-848ef57998e9">



  **Text - Focus**<br>
  _Pour cet exercice, vous devez manipuler les propriétés de texte en CSS afin de recréer un effet typographique._<br>
  [Text - Focus](../exercices/focus.md)
</div>
