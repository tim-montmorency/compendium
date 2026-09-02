---
tags:
  - Cours 5
  - Vendredi 20 septembre
---

# Bootstrap 3/3

Dans ce cours, nous allons explorer les différentes composantes nécessitants du JavaScript avec Bootstrap.

## Installation du JavaScript

Pour utiliser les composantes JavaScript de Bootstrap, veuillez ajouter la librairie suivante dans le `<head>` de votre HTML :

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
```

## Alerte

<https://getbootstrap.com/docs/5.3/components/alerts/>

Une alerte permet d’afficher des messages avec des styles prédéfinis et des options de fermeture.

<iframe class="aspect-4-1" height="300" style="width: 100%;" scrolling="no" title="Alert" src="https://codepen.io/tim-momo/embed/GRbpgjQ?default-tab=&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/GRbpgjQ">
  Alert</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Il y a deux types d'alertes. Une simple sans interaction possible, l'autre est révocable.

```js title="HTML - Alerte simple"
<div class="alert alert-success fade show" role="alert">
  Félicitations 🥳
</div>
```

```js title="HTML - Alerte révocable"
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  Message plutôt important !
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
```

Pour l'alerte révocable, il faut ajouter la classe .alert-dismissible et la balise `<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>` pour fermer l'alerte.

## Modal

<https://getbootstrap.com/docs/5.3/components/modal>

Un « modal » est une fenêtre (popup) qui apparaît au-dessus du contenu principal.

<iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="Modal" src="https://codepen.io/tim-momo/embed/MWMaYoW?default-tab=&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/MWMaYoW">
  Modal</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

```html title="HTML"
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Ouvrir Modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <!-- Entête -->
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Titre du Modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <!-- Corps -->
      <div class="modal-body">
        Message super important
      </div>
      <!-- Pied -->
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
        <button type="button" class="btn btn-primary">Ok merci</button>
      </div>

    </div>
  </div>
</div>
```

## Liste déroulante

<https://getbootstrap.com/docs/5.3/components/dropdowns>

Les listes déroulantes (dropdown) permettent d’afficher une liste d’options lors du clic sur un bouton.

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Modal" src="https://codepen.io/tim-momo/embed/vYqoyZV?default-tab=&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/vYqoyZV">
  Modal</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

```html title="HTML"
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Autre action</a></li>
    <li><a class="dropdown-item" href="#">Quelque chose d'autre</a></li>
  </ul>
</div>
```

## Accordion

<https://getbootstrap.com/docs/5.3/components/accordion/>

L’accordion permet d’afficher et de masquer du contenu lié à une section spécifique.

<iframe class="aspect-3-2" height="300" style="width: 100%;" scrolling="no" title="Bootstrap - Liste déroulante" src="https://codepen.io/tim-momo/embed/gONVLGy?default-tab=&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/gONVLGy">
  Bootstrap - Liste déroulante</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

```html title="HTML"
<div class="accordion" id="accordionExample">

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordéon 1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Contenu de l'accordéon 1.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordéon 2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Contenu de l'accordéon 2.
      </div>
    </div>
  </div>

</div>
```

!!! warning "Plusieurs attributs sont nécessaires"

    Dans l'exemple ci-haut, observez d'abord que le contenant possède un `id` (accordionExample). Ce id sera utilisé dans les attributs `data-bs-parent`.

    Ensuite, chaque élément d'accordéon doit avoir son propre identifiant. Observez particulièrement le premier élément, puis ses `id` (headingOne et collapseOne). Analysez comment ils sont utilisés.

## Toast :bread:

<https://getbootstrap.com/docs/5.3/components/toasts/>

Les toasts sont des messages temporaires et révocables pour informer les utilisateurs.

<iframe height="300" style="width: 100%;" scrolling="no" title="Bootstrap - Accordéon" src="https://codepen.io/tim-momo/embed/abgeBaY?default-tab=&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/abgeBaY">
  Bootstrap - Accordéon</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

```html title="HTML"
<div class="toast show " role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <span class="me-2">🤩</span>
    <strong class="me-auto">Wow</strong>
    <small>Il y a 11 min</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    Non, mais quel joli message ?
  </div>
</div>
```

!!! warning "Caché par défaut !"

    Il faut ajouter la classe `show` au toast pour que ça s'affiche!

!!! info "Positionnement"

    Si on veut que le toast soit positionné en bas à droite par exemple, il faut simplement ajouter les toasts dans un conteneur (appelons le grille-pain pour le plaisir), puis on le déplace dans la page. Voici un exemple : `<div class="toast-container position-fixed bottom-0 end-0 p-3"> ... </div>`

## Barre de navigation

<https://getbootstrap.com/docs/5.3/components/navbar/>

La barre de navigation bootstrap est une navigation de site pensée pour l'accessibilité et le responsive.

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Navbar" src="https://codepen.io/tim-momo/embed/qBzOEMX?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/qBzOEMX">
  Navbar</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Notez dans le code qu'un conteneur se situe à l'intérieur de la barre de navigation. Or il n'est pas nécessaire de l'ajouter dans un conteneur préallablement.

```html title="HTML"
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Festival</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Programmation</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Le festival</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

!!! question "Y a-t-il un mode foncé ?"

    Ben oui! Il est possible de changer le thème de la barre de navigation en changeant les mentions `light` par `dark` dans les classes CSS.

!!! info "Breakpoints"

    La barre de navigation en version mobile s'active en fonction du breakpoint spécifié. Par exemple, dans l'exemple où un applique la classe `navbar-expand-lg`, cela signifie que la barre de navigation mobile s'activera à partir du breakpoint `md` en dessendant.

## Carousel Bootstrap

<https://getbootstrap.com/docs/5.3/components/carousel/>

Le carousel permet d’afficher une série d’images ou de contenus avec un effet de diaporama.

<iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="Bootstrap - Carousel" src="https://codepen.io/tim-momo/embed/yLdmVZb?default-tab=&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/yLdmVZb">
  Bootstrap - Carousel</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

```html title="HTML"
<div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://picsum.photos/id/172/800/600" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/id/185/800/600" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/id/135/800/600" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/id/213/800/600" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
```

## Carousel Swiper 🫡

<https://swiperjs.com/demos>

Bien qu'il soit super qu'une fonctionnalité de carrousel soit intégrée à Bootstrap, ce n'est vraiment pas le meilleur. Comme on dit, il « fait la job », mais sans plus.

Il est souvent préférable d'opter pour une librairie avec plus de flexibilité et d'options de configuration, comme [Swiper](https://swiperjs.com/).

### Installation

Inclure les fichiers suivants dans le HTML.

```html title="HTML"
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
```

```html title="HTML"
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
```

### Utilisation

```html title="HTML"
<div class="swiper mySwiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">Contenu de la slide A</div>
    <div class="swiper-slide">Contenu de la slide B</div>
    <div class="swiper-slide">Contenu de la slide C</div>
    <div class="swiper-slide">Contenu de la slide D</div>
  </div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-pagination"></div>
</div>
```

```js title="JavaScript"
document.addEventListener("DOMContentLoaded", function () {

  var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

});
```

### Images

Afin d'obtenir de meilleurs résultats, lorsque vous utilisez des images dans un carrousel, assurez vous qu'elles soient pleine largeur.

Avec Bootstrap, vous pouvez utiliser la classe `w-100` pour lui donner une dimension de 100%, ainsi que la classe `img-fluid` pour éviter des problèmes de ratio d'image.

```html
<img src="https://picsum.photos/800/600?random=1" class="img-fluid w-100" alt="...">
```

### Exemple

<iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="Swiper" src="https://codepen.io/tim-momo/embed/ExBqEdM?default-tab=&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/ExBqEdM">
  Swiper</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Maçonnerie

<https://masonry.desandro.com/options>

Masonry est une technique de mise en page utilisée pour organiser des éléments dans une grille asymétrique et fluide.

C'est la technique utilisée dans Pinterest.

![](./assets/images/pinterest.png)

Nous allons l'utiliser de pair avec Bootstrap.

### Installation

```html
<script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
```

### Utilisation

```html title="HTML"
<div class="row">
  <div class="col col-md-6">...</div>
  <div class="col col-md-6">...</div>
  <div class="col col-md-6">...</div>
  ...
</div>
```

```js title="JavaScript"
window.onload = function () {
  var grid = document.querySelector(".row");
  new Masonry(grid, {
    itemSelector: ".col",
    percentPosition: true,
    gutter: 0
  });
};
```

### Exemple

<iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="Masonry desandro" src="https://codepen.io/tim-momo/embed/BagXJbq?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/BagXJbq">
  Masonry desandro</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<!-- Barre de navigation
Alerte
Modal
Liste déroulante
Accordion
Swiperjs -->

## Devoirs

<div class="grid grid-1-2" markdown>
  ![](./assets/images/lalichee.png)

  <small>Devoir - Bootstrap</small><br>
  **[La lichée](./devoir/bs-devoir2.md){.stretched-link}**
</div>

<div class="grid grid-1-2" markdown>
  ![](./assets/images/lacritique.png)

  <small>PS1</small><br>
  **[La critique](./devoir/PS1.md){.stretched-link}**
</div>
