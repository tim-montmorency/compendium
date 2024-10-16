# Flux
Le flux ou encore ce que les anglophones appellent le **“flow”** consiste en l’affichage de base des éléments dans une page avant que des styles ne leur soient appliqués. 

Par défaut, les éléments sont **“respectueux”** les uns des autres. C'est-à-dire qu’ils s’affichent les uns à côté ou un en dessous des autres sans jamais se superposer, gardant ainsi l’ensemble du contenu visible, peu importe la dimension dudit contenu ou encore de la page.


## Ordre d'affichage

Les éléments s’affichent selon leur ordre d’apparition dans le code HTML. Autrement dit, l’élément apparaissant en premier dans le code sera aussi celui apparaissant en premier dans la page et ainsi de suite pour tous les éléments suivants.

Par exemple, voici 3 éléments numérotés de 1 à 3. Tous les éléments affichés respectent l’ordre établi dans le code:

<iframe height="300" style="width: 100%;" scrolling="no" title="Flow - Display" src="https://codepen.io/tim-momo/embed/ZEjxqKe?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/ZEjxqKe">
  Flow - Display</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Ordre d’empilage

Un élément HTML peut contenir d’autres éléments. Lorsqu’un élément est enfant d’un autre, celui-ci s’affiche par-dessus son parent. Ainsi, si plusieurs éléments sont emboîtés, celui à la fin de la chaîne se retrouvera sur le dessus, alors que celui au début se retrouvera en dessous.

Par exemple:

<iframe height="300" style="width: 100%;" scrolling="no" title="Flow - Stack" src="https://codepen.io/tim-momo/embed/QWBmZqy?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/QWBmZqy">
  Flow - Stack</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
