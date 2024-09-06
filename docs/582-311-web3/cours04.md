---
tags:
  - Cours 4
  - Vendredi 13 septembre
---

[STOP]

# Bootstrap 2/3

— Utilitaires et comportement de défilement
— Icônes

## Carte


## [Bouton](https://getbootstrap.com/docs/5.3/components/buttons/)

<iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="Button" src="https://codepen.io/tim-momo/embed/abgOzzm?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/abgOzzm">
  Button</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

```html title="Dimensions"
<button class="btn btn-primary btn-sm">Petit</button>
<button class="btn btn-primary">Normal</button>
<button class="btn btn-primary btn-lg">Large</button>
```

```html title="Style outline"
<button class="btn btn-outline-primary">Normal</button>
```

```html title="État désactivé"
<button class="btn btn-primary" disabled>Bouton</button>
```

### Image

La classe CSS `.img-fluid` est utilisée pour rendre les images réactives (responsive). Cette classe applique les styles nécessaires pour que l’image s’adapte automatiquement à la largeur de son conteneur, tout en conservant son ratio original.

```html
<img src="image.jpg" alt="Texte alternatif" class="img-fluid">
```

<iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="Form" src="https://codepen.io/tim-momo/embed/dyBYbqr?default-tab=result&theme-id=50210" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/dyBYbqr">
  Form</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Display

Les classes CSS de type `display` sont construites de la façon suivante : `d-{affichage}` et `d-{breakpoint}-{affichage}`

<div class="grid cards" markdown>

-   **Affichage**

    ---

    `none`, `inline`, `inline-block`, `block`, `grid`, `inline-grid`, `table`, `table-cell`, `table-row`, `flex`, `inline-flex`

</div>

On utilise souvent ces classes afin de déterminer ce qui doit être affiché sur certains breakpoints.

| Taille d'écran                                              | Classe                                |
|-------------------------------------------------------------|---------------------------------------|
| :material-eye-off:{.text-danger} Caché sur tous             | `.d-none`                             |
| :material-eye-off:{.text-danger} Caché uniquement sur xs    | `.d-none` `.d-sm-block`               |
| :material-eye-off:{.text-danger} Caché uniquement sur sm    | `.d-sm-none` `.d-md-block`            |
| :material-eye-off:{.text-danger} Caché uniquement sur md    | `.d-md-none` `.d-lg-block`            |
| :material-eye-off:{.text-danger} Caché uniquement sur lg    | `.d-lg-none` `.d-xl-block`            |
| :material-eye-off:{.text-danger} Caché uniquement sur xl    | `.d-xl-none` `.d-xxl-block`           |
| :material-eye-off:{.text-danger} Caché uniquement sur xxl   | `.d-xxl-none`                         |
| :material-eye:{.text-success} Visible partout               | `.d-block`                            |
| :material-eye:{.text-success} Visible uniquement sur xs     | `.d-block` `.d-sm-none`               |
| :material-eye:{.text-success} Visible uniquement sur sm     | `.d-none` `.d-sm-block` `.d-md-none`  |
| :material-eye:{.text-success} Visible uniquement sur md     | `.d-none` `.d-md-block` `.d-lg-none`  |
| :material-eye:{.text-success} Visible uniquement sur lg     | `.d-none` `.d-lg-block` `.d-xl-none`  |
| :material-eye:{.text-success} Visible uniquement sur xl     | `.d-none` `.d-xl-block` `.d-xxl-none` |
| :material-eye:{.text-success} Visible uniquement sur xxl    | `.d-none` `.d-xxl-block`              |

<iframe  class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Espacements" src="https://codepen.io/tim-momo/embed/OJeyJqz?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/OJeyJqz">
  Espacements</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Display Flex

justify content
align-items

## [Formulaire](https://getbootstrap.com/docs/5.3/forms/overview/)

<iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="Form" src="https://codepen.io/tim-momo/embed/XWLmrqZ?default-tab=result&theme-id=50210" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/XWLmrqZ">
  Form</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>