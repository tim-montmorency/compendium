# Position

Le flux normal, ou ce que les anglophones appellent le **“flow”**, est la façon dont les éléments sont affichés dans une page web lorsqu’aucun style ne leur est appliqué.

## Flux normal

- éléments block **(div, p, section, etc.)** ==>  positionnés un à la suite de l’autre
- éléments inline **(span, strong, em, etc.)** ==> positionnés un à côté de l’autre 

À titre de base comparative, chaque exemple sur cette page utilise le gabarit suivant 👇 

- composé d'éléments en `display: block`;
- placés un en dessous de l’autre
- la propriété `position` de ces boites fluctue d'un exemple à l'autre afin d'illustrer la différence engendrée par cette propriété.

Un `top: 15vmin`; a aussi été attribué à la boite afin de mettre en évidence l'impact de `position`.

<iframe height="300" style="width: 100%;" scrolling="no" title="Position: reference" src="https://codepen.io/tim-momo/embed/PoBRxKb?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/PoBRxKb">
  Position: reference</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## static

Par défaut, le navigateur attribue la position `static` à tous les éléments. La particularité principale de cette position est que les propriétés `top`, `right`, `bottom`, `left` ou encore `z-index` n’ont aucun impact sur ces éléments 🚫.

<small>Cette valeur de position à pour objectif de positionner les éléments comme le ferait le code HTML sans l’intervention du CSS. On remarque donc que la propriété `top` n'affecte aucunement la boite</samll>

<iframe height="300" style="width: 100%;" scrolling="no" title="Position: static" src="https://codepen.io/tim-momo/embed/abjYQLx?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/abjYQLx">
  Position: static</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## relative

Les éléments en `position: relative`; se positionnent d'abord en fonction du flux normal de la page. Ils sont ensuite déplacés relativement à cet emplacement, d'où leur nom `position: relative`;.

<small>On remarque donc dans l'exemple ci-dessous que la boite est décalée d'une demi-hauteur de boite par rapport à sa position normale dans le flux.</small>

<iframe height="300" style="width: 100%;" scrolling="no" title="Position: relative" src="https://codepen.io/tim-momo/embed/qByoQVe?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/qByoQVe">
  Position: relative</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## absolute

Les éléments en `position: absolute`; ignorent complètement le flux de la page et se positionnent en fonction du parent le plus près aillant une position autre que static.

<small>On remarque dans l'exemple ci-dessous que les éléments respectant le flux se positionnent exactement comme si la boite 2 n'existait pas **(aucun espace vide entre la boite 1 et la 3)**. La boite 2 quant à elle se positionne par rapport au `<body>` qui en l'absence de parent avec une position devient sont point de référence.</small>

<iframe height="300" style="width: 100%;" scrolling="no" title="Position: absolute" src="https://codepen.io/tim-momo/embed/wvxmQye?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/wvxmQye">
  Position: absolute</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## fixed

Les éléments en `position: fixed`; ressemblent aux éléments en <u>position absolute</u>. Tout comme eux, ils ignorent le flux de la page. Cependant, plutôt que de se positionner en fonction d'un parent, ils se positionnent en fonction de la fenêtre **(viewport)**.

<small>On remarque dans l'exemple ci-dessous que les éléments respectant le flux se positionnent exactement comme si la boite 2 n'existait pas **(aucun espace vide entre la boite 1 et la 3)**. La boite 2 quant à elle se positionne par rapport à la fenêtre, donc même si la page défile, la boite reste fixe.</small>

<iframe height="300" style="width: 100%;" scrolling="no" title="Position: fixed" src="https://codepen.io/tim-momo/embed/JjBLeLg?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/JjBLeLg">
  Position: fixed</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## sticky

Les éléments en `position: sticky`; ressemblent aux éléments en <u>position static</u>. Tout comme eux, ils se positionnent d'abord en fonction du flux normal de la page. Cependant, lorsqu'une de leurs propriétés `top`, `right`, `bottom` ou `left` correspond au défilement de la page, l'élément devient fixe.

<small>Dans l'exemple ci-dessous, la boite 2 n'est à priori pas affectée par la propriété `top`. Cependant, lorsque la page défile et que la boite se trouve à une distance du sommet équivalente à la valeur de sa propriété `top`, celle-ci devient fixe et arrête de défiler avec le reste de la page.</small>

<iframe height="300" style="width: 100%;" scrolling="no" title="Position: sticky" src="https://codepen.io/tim-momo/embed/xxJWQzv?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/xxJWQzv">
  Position: sticky</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## Exercices

<div class="grid grid-auto" markdown>

![Capture d’écran, le 2024-10-15 à 21 08 49](https://github.com/user-attachments/assets/0a4e7d2b-0a9e-4d93-b45f-6b314bbbd486)

  **Cat in the box - Niveaux 1 à 13**<br>
  _Utilisez la propriété position afin de déplacer les chats dans leurs boites respectives._<br>
  [Cat in the box - Niveaux 1 à 13](https://cdpn.io/smnarnold/debug/ZEpZWPB)
</div>
