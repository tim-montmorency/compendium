---
tags:
  - Cours 1
  - Vendredi 23 août
---

# Introduction

## Présentations

![](./assets/presentations.png)

## Web 3

[Plan de cours](./assets/plan_de_cours.pdf){ .md-button .md-button--primary }

## Révision du cours Web2

[Web2 582-211MO](https://tim-montmorency.com/timdoc/582-211MO)

## Révision JavaScript

![](./assets/javascript_banner.png)

### La base de la base

```js title="Commentaires"
// Ceci est un commentaire sur une seule ligne

/*
Ceci est un commentaire
sur plusieurs lignes
*/
```

```js title="Message"
console.log("Wubba Lubba Dub Dub!");
```

```js title="Message d’alerte"
alert("Wubba Lubba Dub Dub!");
```

### Variables

```js title="Types de variables"
let name = 'JF';
const age = 99;
var isStudent = false;
```

```js title="Valeurs"
let num = 10;       // Nombre entier (number)
let pi = 3.14;      // Nombre à virgule (number)
let str = 'Salut!'; // Chaine de caractères (string)
let isTrue = true;  // Booléen (boolean)
let empty = null;   // Nul (null)
let notDefined;     // Non défini (undefined)
let arr = [];       // Tableau (array)
let obj = {};       // Objet (object)
let fn = () => {}   // Fonction (function)
```

### Opérateurs 

```js
let sum = 10 + 5;        
let difference = 10 - 5; 
let product = 10 * 5;    
let quotient = 10 / 5;   
```

!!! tip "L’opérateur modulo"
    L’opérateur modulo `%` en JavaScript renvoie le reste de la division entière de deux nombres.
    ```js
    let modulo = 10 % 3; 
    ```

```js
let isEqual = 5 == '5';           
let isStrictEqual = 5 === '5';    

let isNotEqual = 5 != '5';        
let isStrictNotEqual = 5 !== '5'; 

let isGreater = 10 > 5;           
let isLess = 10 < 5;              
let isGreaterOrEqual = 10 >= 5;   
let isLessOrEqual = 10 <= 5;      
```

```js
let andOperator = true && false;  
let orOperator = true || false;   
let notOperator = !true;          
```

### Conditions :material-directions-fork:

```js
let score = 85;
let grade = 'Échec';

if (score >= 90) {
  grade = 'A';
} else if (score >= 80) {
  grade = 'B';
}

console.log(score);
```

!!! tip "Opérateur ternaire"
    ```js
    let grade = (score >= 90) ? 'A' : (score >= 80) ? 'B' : 'Échec';
    ```

### Tableaux et objets :material-table:

```js 
let fruits = ['Pomme', 'Banane', 'Cerise'];
console.log(fruits[1]);
```

```js
let person = {
  name: 'JF',
  age: 99,
  isStudent: false
};
console.log(person.name);
```

### Boucles :material-repeat:

```js title="for"
for (let i = 0; i < 5; i++) {
  console.log(i + ' 🦄');
}
```

```js title="for...in"
let person = {name: 'JF', age: 99, city: 'Laval'};
for (let key in person) {
  console.log(key + ' : ' + person[key]);
}
```

```js title="for...of"
let parts = ['👁️', '👃', '👄'];
for (let part of parts) {
  console.log(part);
}
```

```js title="forEach"
let numbers = ['JF', 99, '🌱', true];
numbers.forEach(function(number) {
  console.log(number);
});
```

### Fonctions :material-function:

```js title="Fonction"
function greet(name) {
  return 'Coucou ' + name + ' !';
}
```

```js title="« Variable fonction »"
const greet = function(name) {
  return 'Coucou ' + name + ' !';
};
```

```js title="Fonction fléchée"
const greet = (name) => {
  return 'Coucou ' + name + ' !';
};
```

### Manipulation du DOM :material-code-tags:{ .mdx-pulse } 

```js
let element = document.getElementById('demo');
let element2 = document.querySelector('.demo');
let elements = document.querySelectorAll('p');
let elements2 = document.getElementsByClassName("demo");
```

```js title="Classes"
element.classList.add('new-class');
element.classList.remove('old-class');
element.classList.toggle('active');
```

```js
element.innerHTML = 'JavaScript 🙌';
element.style.color = '#ABCDEF';
element.setAttribute('title', 'Petit tooltip pour ton info');
let titleAttribute = element.getAttribute('title');
element.removeAttribute('title');
```

### Les événements :material-cursor-default-click:

```html
<button id="miaw">Oui?</button>
```

```js
document.getElementById('miaw').addEventListener('click', function() {
  console.log('J’ai dis non!');
});
document.getElementById('miaw').addEventListener('mouseover', function() {
  console.log('Vous avez survolé le bouton!');
});
```

```html
<input type="text" id="champ" placeholder="Tapez quelque chose">
```

```js
document.getElementById('champ').addEventListener('focus', function() {
  console.log('Champ de saisie en focus');
});
document.getElementById('champ').addEventListener('blur', function() {
  console.log('Champ de saisie hors focus');
});
document.getElementById('champ').addEventListener('keyup', function(event) {
  console.log('Vous avez tapé : ' + event.target.value);
});
document.getElementById('champ').addEventListener('change', function(event) {
  console.log('La valeur a changé : ' + event.target.value);
});
```

[Liste d’événements du DOM](https://www.w3schools.com/jsref/dom_obj_event.asp)

### this 🤯

'this' fait référence à son contexte

```html
<button id="submit">Télécharger</button>
```

```js
document.getElementById('submit').addEventListener('click', function() {
  // Ici, "this" représente le bouton cliqué
  this.style.backgroundColor = 'lightblue';
  this.innerHTML = 'En cours';
});
```

### Sauvegarde :material-content-save:

```js title="LocalStorage"
localStorage.setItem("lastname", "Tremblay");
localStorage.getItem("lastname");
```

!!! info "Limite de stockage"
    La capacité maximale de stockage est d'environ 5 MB par domaine.

```js title="SessionStorage"
// Pour l'onglet
sessionStorage.setItem("lastname", "Gagnon");
sessionStorage.getItem("lastname");
```

### Mathématiques :scientist:

```js
Math.sqrt(81);
Math.random();
Math.max(1, 3);
Math.min(1, 3);
Math.floor(1.5);
Math.round(1.5);
Math.ceil(1.5);
```

### Audio & Vidéo

```html
<audio id="mozart" controls muted>
  <source src="mozart.mp3" type="audio/mp3">
  Votre navigateur ne supporte pas l'élément audio.
</audio>

<video id="loop" width="320" height="240" controls muted>
  <source src="loop.mp4" type="video/mp4">
  Votre navigateur ne supporte pas l'élément vidéo.
</video>
```

```js
let audio = document.getElementById('mozart');
audio.play();
audio.pause();
audio.playbackRate = 1.5; // 1.5x la vitesse normale
audio.currentTime = 10; // Saute à 10 secondes

let video = document.getElementById('loop');
video.play();
video.pause();
video.playbackRate = 0.5;
video.currentTime = 0;
```

!!! warning "Lecture automatique"
    De nombreux navigateurs imposent des restrictions sur la lecture automatique (*autoplay*) des médias en raison de préoccupations concernant l’expérience utilisateur et la consommation de données. Par conséquent, l'utilisateur doit souvent interagir avec la page pour déclencher une lecture. Cependant, il est généralement possible de contourner cette restriction en coupant initialement le son du média à l'aide de l'attribut `muted`.


## Bootstrap

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
