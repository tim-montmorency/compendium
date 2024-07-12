# Bootstrap

![](./assets/bootstrap_banner.png)

Bootstrap est un cadriciel (*framework*) front-end qui offre une structure de styles et de mise en page permettant aux développeurs de ne pas réinventer la roue à chaque projet. Il fournit une [collection de composants](https://getbootstrap.com/docs/5.3/examples/cheatsheet/) (*components*) préconçus et de classes CSS qui facilitent la création de sites web réactifs (*responsive*).

### Installation

Pour [installer Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/download) sur votre site, vous n'avez qu'à inclure ces balises dans votre HTML.

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
```

!!! question "integrity & crossorigin"
    L’attribut `integrity` est utilisé pour des raisons de sécurité. C'est le hash (sommes de contrôle cryptographiques) du fichier original.
    L’attribut, `crossorigin` pour sa part, indique que la requête à cdn.jsdelivr.net doit être faite sans envoyer de témoins (cookies), identifiants ou autres informations de l’utilisateur.

```html title="Aperçu du HTML de base"
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
  <body>
    <!-- Code de la page ici -->

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>
```

### Couleurs

Les [couleurs bootstrap](https://getbootstrap.com/docs/5.3/customize/color/) sont représentées avec des identifiants auxquels sont assignées des couleurs par défaut. 

* **Primary** = Bleu
* **Secondary** = Gris
* **Success** = Vert
* **Danger** = Rouge
* **Warning** = Jaune
* **Info** = Bleu pâle
* **Light** = Gris pâle
* **Dark** = Gris foncé

Heureusement, chaque couleur est représentée par une variable CSS. Ainsi, on peut réécrire toutes les couleurs de Bootstrap. 

```css
:root {
  /* La couleur Primary initialement bleue devient indigo */
  --bs-primary: #6610f2;
  --bs-primary-rgb: 102, 16, 242;
}
```

En cas de doute, on peut vérifier dans l'inspecteur du navigateur. Toutes les variables y sont!

![](./assets/bootstrap_inspector.png)

#### Plein de classes CSS tout cuit dans l'bec

```css title="Classes préparées par Bootstrap"
.text-primary
.bg-primary
.border-primary
.btn-primary
.btn-outline-primary
.alert-primary
.badge-primary
.table-primary 
.link-primary
```

<iframe class="aspect-3-2" height="300" style="width: 100%;" scrolling="no" title="Couleurs" src="https://codepen.io/tim-momo/embed/MWMwYeY?default-tab=html%2Cresult&editable=true&theme-id=50210" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/MWMwYeY">
  Couleurs</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Boutons

<iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="Button" src="https://codepen.io/tim-momo/embed/abgOzzm?default-tab=html%2Cresult&theme-id=50210" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/abgOzzm">
  Button</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


https://getbootstrap.com/docs/5.3/components/buttons/
