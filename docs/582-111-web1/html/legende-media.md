#Légende de média
La balise `<figure>` permet d'associer un élément **(image, vidéo, diagramme, etc.)** à une légende `<figcaption>`. Ainsi, les moteurs de recherche comprennent le lien étroit unissant les deux éléments.

Par exemple:
<iframe height="300" style="width: 100%;" scrolling="no" title="Figcaption" src="https://codepen.io/tim-momo/embed/LYXWEQj?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/LYXWEQj">
  Figcaption</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

La balise `<figcaption>` peut être avant ou après l'élément quelle décrit, tant qu'elle est enfant direct de la balise `<figure>`.

👌

```
<figure>
  <img src="image.png">
  <figcaption>...</figcaption>
</figure>
```
<br>
<br>
🚫

```
<figure>
  <img src="image.png">
  <div>
    <figcaption>...</figcaption>
  </div>
</figure>
```

!!! danger

    **ERREUR FRÉQUENTE**
    Si un espace indésirable affiche entre une image et sa légende (figcaption), il est probable que cet espace soit créé par le display: inline; par défaut de l’image.

    Pour s’en débarrasser, il suffit de changer son display à block; dans le CSS.

!!! tip

    📖 EN SAVOIR PLUS
    [Article MDN à propos de la balise figure.](https://developer.mozilla.org/fr/docs/Web/HTML/Element/figure)
