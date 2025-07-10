# Image
La balise `<img> `permet d'afficher une image. Seul son attribut `src` est obligatoire puisqu'il spécifie **le chemin** vers l'image à afficher.

Par exemple:
<iframe height="300" style="width: 100%;" scrolling="no" title="Img" src="https://codepen.io/tim-momo/embed/KKBbwYW?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/KKBbwYW">
  Img</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Alt

L'attribut `alt`, bien que non obligatoire, est fortement recommandé puisqu'il permet de fournir une description alternative dans le cas où l'image ne puisse être chargée **(chemin brisé)**.

Par exemple:
<iframe height="300" style="width: 100%;" scrolling="no" title="Img - Alt" src="https://codepen.io/tim-momo/embed/bGjONPe?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/bGjONPe">
  Img - Alt</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Il permet aussi aux lecteurs ayant recours à un assistant vocal d'avoir une brève description du contenu de l'image. Il est donc conseillé d'être concis et d'éviter les termes vagues.

👌

```
<img src="image.png" alt="carré vert, bleu et rouge">
```
🚫

```
<img src="image.png" alt="image">
```

!!! note

    Si l’image ne contient pas de contenu informatif, mais uniquement esthétique, par exemple une image d’une ligne diagonale utilisée entre deux blocs de contenu, il est suggéré d’inscrire `alt=""` afin d’indiquer que l’image est purement décorative.

## Width & Height

Les attributs `width` et `height` permettent de spécifier la dimension intrinsèque de l'image. C'est à dire sa dimension d'origine si celle-ci n'était pas manipulée en CSS. Ces attributs ne doivent pas spécifier d'unité de mesure. Le navigateur assumera automatiquement que ces valeurs sont exprimées en pixels **(px)**.

Par exemple:
<iframe height="300" style="width: 100%;" scrolling="no" title="Img - Width &amp; Height" src="https://codepen.io/tim-momo/embed/qByLdWL?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/qByLdWL">
  Img - Width &amp; Height</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Spécifier la dimension intrinsèque d'une image permet au navigateur d'afficher une page plus rapidement. Sans ces attributs, le navigateur doit attendre que l'image ait terminé de charger afin d'obtenir ses dimensions et ensuite calculer l'espace à y allouer. Si ces informations sont déjà fournies via des attributs, le navigateur peut calculer le rendu de la page de façon ininterrompu.

👌

```
<img src="image.png" width="100" height="100">
```

🚫

```
<img src="image.png" width="100px" height="100px">
```

## Classe et ID

Comme toute balise HTML, il est possible d'attribuer une classe ou un id à une image afin de pouvoir la manipuler en CSS ou JavaScript par la suite.

## Loading

L'attribut `loading` permet d'indiquer la priorité de chargement d'une image. Par défaut, le navigateur tente de charger toutes images en accordant une légère priorité à celles visibles au chargement de la page dans la fenêtre. Cependant il est possible de lui spécifier différentes valeurs:

- `auto` comportement normal, soit l'équivalent de ne pas mettre l'attribut.
- `lazy` attendre que l'image soit sur le point d'être visible avant de la chargée. Donc si un usager ne fait jamais défiler la page jusqu'à celle-ci, l'image ne sera jamais chargée. Cette option permet d'accélérer le chargement de la page 🏁.
- `eager` indique de charger l'image le plus rapidement possible, peu importe sa position dans la page.

Par exemple, pour faire du **"lazy-loading"**:
<iframe height="300" style="width: 100%;" scrolling="no" title="Img - Loading" src="https://codepen.io/tim-momo/embed/PoBXqPZ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/PoBXqPZ">
  Img - Loading</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

!!! warning

    Si une image est visible au chargement de la page, il est recommandé de ne pas lui ajouter l’attribut loading="lazy" afin de forcer son chargement le plus rapidement possible.
