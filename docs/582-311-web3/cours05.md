---
tags:
  - Cours 5
  - Vendredi 20 septembre
---

[STOP]

# Bootstrap 3/3

## Composantes JavaScript 🍬

Pour utiliser les composantes JavaScript de Bootstrap, veuillez ajouter la librairie suivante :

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
```

### [Alerte](https://getbootstrap.com/docs/5.3/components/alerts/)

Classe .alert-dismissible et `<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Alert" src="https://codepen.io/tim-momo/embed/GRbpgjQ?default-tab=html%2Cresult&editable=true&theme-id=50210" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/GRbpgjQ">
  Alert</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Modal

Les modals permettent d’afficher du contenu dans une fenêtre flottante (popup) au-dessus de l’interface principale.

```html
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Ouvrir Modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Titre du Modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Message super important
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
        <button type="button" class="btn btn-primary">Ok merci</button>
      </div>
    </div>
  </div>
</div>
```

Démonstration

<iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="Modal" src="https://codepen.io/tim-momo/embed/MWMaYoW?default-tab=result&theme-id=50210" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/MWMaYoW">
  Modal</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Liste déroulante

Les listes déroulantes (dropdown) permettent d’afficher une liste d’options lors du clic sur un bouton.

```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Autre action</a></li>
    <li><a class="dropdown-item" href="#">Quelque chose d'autre</a></li>
  </ul>
</div>
```

## Carousel

Le carousel permet d’afficher une série d’images ou de contenus avec un effet de diaporama.

```html
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="image1.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="image2.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="image3.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Précédent</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Suivant</span>
  </button>
</div>
```

## Accordion

L’accordion permet d’afficher et de masquer du contenu lié à une section spécifique.

```html
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

Démonstration

<iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="Modal" src="https://codepen.io/tim-momo/embed/bGPVNMZ?default-tab=result&theme-id=50210" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/bGPVNMZ">
  Modal</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Toast :bread:

Les toasts sont des messages temporaires affichés à l’écran pour informer les utilisateurs.

```html
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
  <div class="toast-header">
    <strong class="me-auto">Notification</strong>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    Ceci est un message toast.
  </div>
</div>
```

```js
var toastEl = document.querySelector('.toast');
var toast = new bootstrap.Toast(toastEl);
toast.show();
```

## Navigation

```html
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
          <a class="nav-link" href="#">Billetterie</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Hébergement</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Expérience</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Le festival</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

Démonstration

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Navbar" src="https://codepen.io/tim-momo/embed/qBzOEMX?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/qBzOEMX">
  Navbar</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## Carrousel

## Maçonnerie
