# Box-shadow
La propriété `box-shadow` permet d'ajouter une ombre à un élément. Par défaut, la couleur de l'ombre correspond à la couleur du texte de l'élément en question.

Afin d'être visible, une ombre nécessite d'être décalée de son parent. Pour ce faire, il faut lui attribuer une valeur de décalage sur les X, les Y ou les deux.

Par exemple:

<iframe height="300" style="width: 100%;" scrolling="no" title="Box-shadow - Basic" src="https://codepen.io/tim-momo/embed/yLqqjrG?default-tab=html%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/yLqqjrG">
  Box-shadow - Basic</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Couleur

Pour spécifier la couleur d'ombrage, il suffit d'ajouter une unité de couleur à la fin.

<iframe height="300" style="width: 100%;" scrolling="no" title="Box-shadow - Color" src="https://codepen.io/tim-momo/embed/mdjjLYm?default-tab=html%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/mdjjLYm">
  Box-shadow - Color</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Flou

Normalement, une ombre n'est pas nettement découpée. Heureusement, il est possible de la flouter grâce à une 3e valeur insérée avant la couleur. En anglais, cette valeur est nommée le **"blur"**.

<iframe height="300" style="width: 100%;" scrolling="no" title="Box-shadow - Blur" src="https://codepen.io/tim-momo/embed/dyjjeBX?default-tab=html%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/dyjjeBX">
  Box-shadow - Blur</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Étendu

En ajoutant une 4e valeur, il est possible d'augmenter/diminuer la taille d'une ombre afin que sa dimension ne soit pas identique à celle de son élément référent. En anglais, cette valeur est nommée le **"spread"**.

<iframe height="300" style="width: 100%;" scrolling="no" title="Box-shadow - Spread" src="https://codepen.io/tim-momo/embed/JjBBZjY?default-tab=html%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/JjBBZjY">
  Box-shadow - Spread</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Direction

Par défaut, les ombres sont projetées vers l'extérieur de leurs éléments, donnant ainsi l'impression qu'ils sont surélevés. Cependant, il est possible de changer la direction des ombres afin qu'elles soient projetées vers l'intérieur de leurs éléments, créant ainsi une illusion de profondeur.

Pour ce faire, il faut ajouter le mot-clé `inset` comme premier argument au `box-shadow`.

Par exemple:

<iframe height="300" style="width: 100%;" scrolling="no" title="Box-shadow - Inset" src="https://codepen.io/tim-momo/embed/qByyKEZ?default-tab=html%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/qByyKEZ">
  Box-shadow - Inset</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## Inspecteur

L'inspecteur est d'une aide précieuse lorsque l'on manipule un élément avec une ombre. Lorsque l'on examine la propriété CSS `box-shadow` dans l'inspecteur, on remarque à sa droite un icône de carré sous un autre carré rappelant une ombre. Lorsque cliqué, cet icône affiche une interface visuelle permettant de modifier facilement les valeurs de cette propriété.

![type:video](https://github.com/user-attachments/assets/90289e99-978f-445d-98c6-be2a57041d25)

