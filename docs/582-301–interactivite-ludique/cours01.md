# Cours 1 - Bienvenue!

## Ordre du jour

1. Présentations
1. Plan de cours 
1. Révision des notions acquises en JavaScript et retour sur le cours « 420 V11 MO – Programmation interactive »
1. Pause ⏸️
1. Matière
1. Pause ⏸️
1. Exercices
1. Devoir

---

## Révision JavaScript

### La base de la base

```js
// Voici un beau commentaire!
/* En voilà un deuxième 🙀 */
console.log("L’enfer, c’est les autres. - Jean-Paul Sartre (Huis Clos)");
```

```js
alert("L’enfer, c’est les autres. - Jean-Paul Sartre (Huis Clos)");
```

### Variables

```js
let name = 'JF';
const age = 99;
var isStudent = false;
```

```js
let num = 10;       // Nombre (number)
let str = 'Salut!'; // Chaine de caractères (string)
let isTrue = true;  // Booléen (boolean)
let empty = null;   // Nul (null)
let notDefined;     // Non défini (undefined)
```

### Opérateurs

```js
let sum = 10 + 5;
let difference = 10 - 5;
let product = 10 * 5;
let quotient = 10 / 5;
let remainder = 10 % 3;
```

```js
let isEqual = 5 == '5';           // vrai
let isStrictEqual = 5 === '5';    // faux
let isNotEqual = 5 != '5';        // faux
let isStrictNotEqual = 5 !== '5'; // vrai
let isGreater = 10 5;           // vrai
let isLess = 10 < 5;              // faux
let isGreaterOrEqual = 10 >= 5;   // vrai
let isLessOrEqual = 10 <= 5;      // faux
```

```js
let andOperator = true && false;  // faux
let orOperator = true || false;   // vrai
let notOperator = !true;          // faux
```

### Conditions

```js
let score = 85;

let grade = 'C';
if (score >= 90) {
  grade = 'A';
} else if (score >= 80) {
  grade = 'B';
}

console.log(score);
```

!!! tip "Opérateur ternaire"
    ```js
    let grade = (score >= 90) ? 'A' : (score >= 80) ? 'B' : 'C';
    ```

### Boucles

```js
for (let i = 0; i < 100000; i++) {
  console.log(i + ' $');
}
```

```js title="for...in"
let person = {name: 'JF', age: 99, city: 'Laval'};
for (let key in person) {
  console.log(key + ' : ' + person[key]);
}
```

```js title="for...of"
let fruits = ['Pomme', 'Banane', 'Cerise'];
for (let fruit of fruits) {
  console.log(fruit);
}
```

```js title="forEach"
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number);
});
```

### Fonctions

```js
function greet(name) {
  return 'Coucou ' + name + ' !';
}
```

```js title="Variable fonction"
const greet = function(name) {
  return 'Coucou ' + name + ' !';
};
```

```js title="Fonction fléchée"
const greet = (name) => {
  return 'Coucou ' + name + ' !';
};
```

### Tableaux et objets

```js 
let fruits = ['Pomme', 'Banane', 'Cerise'];
console.log(fruits[1]); // Banane
```

```js
let person = {
  name: 'JF',
  age: 99,
  isStudent: false
};
console.log(person.name); // JF
```

### Manipulation du DOM

```js
let element = document.getElementById('demo');
let element2 = document.querySelector('.class');
let elements = document.querySelectorAll('p');
```

```js
element.innerHTML = 'Trop facile JavaScript!';
element.style.color = 'blue';
element.setAttribute('title', 'Petit tooltip pour ton info');
```

### Événements

```html
<button id="submit">Oui</button>
```

```js
document.getElementById('submit').addEventListener('click', function() {
  alert('Non!');
});
```

### this 🤯

```html
<button id="submit">Télécharger</button>
```

```js
document.getElementById('submit').addEventListener('click', function() {
  // 'this' fait référence au bouton cliqué
  this.style.backgroundColor = 'lightblue';
  this.innerHTML = 'En cours';
});
```

---

## Matière

### Présentation du cadriciel

[Phaser.js](https://phaser.io/)
![phaser](https://github.com/jfcmontmorency/jfcmontmorency.github.io/assets/142059735/7890bb14-8d94-44a1-a6f7-8c519adf4d28)

### Installation

À venir...

### Arborescence

Voici à quoi pourrait et devrait ressembler la structure[^unity] de votre jeu.

```
NomDuJeu
│
├── index.html 
├── assets
│   ├── images
│   │   ├── backgrounds
│   │   ├── fx
│   │   ├── characters
│   │   ├── ui
│   │   └── items
│   ├── audio
│   │   ├── music
│   │   └── sfx
│   └── fonts
│       └── nes.ttf
├── src
│   ├── css
│   |   └── main.css
│   └── js
│       ├── main.js
│       ├── scenes
│       │   ├── Game.js
│       │   ├── GameOver.js
│       │   ├── MainMenu.js
│       │   └── Preloader.js
│       └── characters
│           ├── Player.js
│           └── Enemy.js
└── vendor
    └── phaser.min.js 
```

[^unity]: [Bonnes pratiques pour organiser votre jeu vidéo](https://unity.com/how-to/organizing-your-project) (En anglais)

---

## Exercices

À venir

---

## Devoir

À venir
