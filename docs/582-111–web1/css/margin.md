# Margin
La propriété `margin` définit un espace vide devant être respecté autour d'un élément, bref une marge. Par défaut, cette propriété à une valeur de 0 permettant aux éléments de s'afficher un à la suite de l'autre sans espace vide** (collés un à l'autre)**, mais elle accepte l'ensemble des <u>unités de mesure CSS</u>.

!!!note

    Contrairement à padding, margin accepte les valeurs négatives.

Lorsqu'une seule valeur est fournie, celle-ci est appliquée aux 4 côtés de l'élément.

Dans l'exemple suivant, remarquez comment le changement de margin affecte l'espace autour du carré 2.

<iframe height="300" style="width: 100%;" scrolling="no" title="Margin" src="https://codepen.io/tim-momo/embed/WNKyjGW?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/WNKyjGW">
  Margin</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

!!!warning

    Les éléments aillant un `display: inline` **(span, a, etc.)** ne sont pas affectés par les marges verticales ↕️ par défaut.

## Sous-propriétés

Pour plus de contrôle, il est possible d'attribuer une valeur différente à chaque côté en utilisant les sous-propriétés suivantes:

- `margin-top`
- `margin-right`
- `margin-bottom`
- `margin-left`
Par exemple:
<iframe height="300" style="width: 100%;" scrolling="no" title="Margin - Sub-properties" src="https://codepen.io/tim-momo/embed/xxJzddd?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/xxJzddd">
  Margin - Sub-properties</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Syntaxe courte

Il est aussi possible d'attribuer les 4 côtés avec la syntaxe courte en les spécifiant un après l'autre en commençant par le haut et en tourant dans le sens des aiguilles d'une montre ⌚️ **(top, right, bottom et left)**.

Par exemple:
<iframe height="300" style="width: 100%;" scrolling="no" title="Margin - Multiple values" src="https://codepen.io/tim-momo/embed/xxJzdXr?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/xxJzdXr">
  Margin - Multiple values</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Syntaxe courte à deux valeurs
Lorsque seulement deux valeurs sont spécifiées la première est utilisée afin de déterminer la marge verticale ↕️ **(top et bottom)** et la deuxième la marge horizontale ↔️ **(left et right).
**
Par exemple:
<iframe height="300" style="width: 100%;" scrolling="no" title="Margin - Two values" src="https://codepen.io/tim-momo/embed/MWBXmQK?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/MWBXmQK">
  Margin - Two values</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Alignement horizontal ↔️

Les marges sont régulièrement utilisées afin de centrer horizontalement ↔️ des éléments dans leurs parents. Pour ce faire, il suffit d'attribuer la valeur `auto` aux marges de gauche et de droite.

<iframe height="300" style="width: 100%;" scrolling="no" title="Margin - Centered" src="https://codepen.io/tim-momo/embed/dyjKWem?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/dyjKWem">
  Margin - Centered</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

!!!note
    
    Cette technique de centrage est généralement utilisée avec la syntaxe à deux valeurs, soit margin: 0 auto;


!!!danger

    ERREUR FRÉQUENTE
    Pour centrer horizontalement un élément avec la propriété margin et la valeur auto, un élément doit être en display: block


## Combinaison de marges

À l'occasion, certaines marges sont combinées. C'est ce que les anglophones appellent **"margin collapse"**. Ce comportement peut paraître étrange à première vue, mais il respecte le concept de marge qui est de générer un espace vide entre un élément et ceux l'entourant.

L'exemple le plus commun est celui des paragraphes **(p)** qui ont un `margin-top` et un `margin-bottom` équivalent à la hauteur d'une lettre **(1em)**, soit une ligne. Si une image est insérée après un paragraphe, le `margin-bottom` de ce dernier s'assure qu'un espace équivalent à une ligne les sépare. Cependant, que se passe-t-il lorsque deux paragraphes se suivent?

Un espace équivalent à une seule ligne les sépare, car leurs marges sont combinées plutôt qu'additionnées.

Cependant, ce ne sont pas toutes les marges qui sont combinées. Seulement celles verticales ↕️.
