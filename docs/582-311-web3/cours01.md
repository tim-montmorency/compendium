# Cours 1

<style>
  nav.md-nav--secondary > ul > li > nav > ul > li > nav {
    display: none;
  }
</style>

## Présentations

![](./assets/images/presentations.png)

<!-- ## Plan de cours

[PS1](https://tim-montmorency.com/timdoc/582-424MO/projet-app-festival-art-numerique/) -->

## Révision

### Web 2 (582 211 MO)

HTML : [Formulaire](https://tim-montmorency.com/timdoc/582-211MO/html/formulaire/), [Image](https://tim-montmorency.com/timdoc/582-211MO/html/image/), [Picture](https://tim-montmorency.com/timdoc/582-211MO/html/picture/)

CSS : [Margin](https://tim-montmorency.com/timdoc/582-211MO/css/margin/), [Padding](https://tim-montmorency.com/timdoc/582-211MO/css/padding/), [Display](https://tim-montmorency.com/timdoc/582-211MO/css/display/), [Position](https://tim-montmorency.com/timdoc/582-211MO/css/position/), [Media Queries](https://tim-montmorency.com/timdoc/582-211MO/css/media-queries/), [Sélecteurs](https://tim-montmorency.com/timdoc/582-211MO/css/selecteurs-avances/), [Aspect-ratio](https://tim-montmorency.com/timdoc/582-211MO/css/aspect-ratio/), [Flexbox 1](https://tim-montmorency.com/timdoc/582-211MO/css/flexbox/), [Flexbox 2](https://tim-montmorency.com/timdoc/582-211MO/css/flexbox-intermediaire/), [Flexbox 3](https://tim-montmorency.com/timdoc/582-211MO/css/flexbox-avance/)

### Programmation interactive (420 V11 MO)

  https://discovro-js.netlify.app/

## :simple-javascript: Révision JavaScript

![](./assets/images/javascript_banner.png)

### Pourquoi JavaScript ?

![Statistic: Most used programming languages among developers worldwide as of 2024 | Statista](https://www.statista.com/graphic/1/793628/worldwide-developer-survey-most-used-languages.jpg)

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

#### Variables

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

#### Opérateurs

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

#### Conditions :material-directions-fork

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

#### Tableaux et objets :material-table

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

#### Boucles :material-repeat

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

#### Fonctions :material-function

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

#### Manipulation du DOM :material-code-tags:{ .mdx-pulse }

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

#### Les événements :material-cursor-default-click

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

#### this 🤯

`this` fait référence au contexte dans lequel la fonction est exécutée

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

#### Sauvegarde :material-content-save

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

#### Mathématiques :scientist:

```js
Math.sqrt(81);
Math.random();
Math.max(1, 3);
Math.min(1, 3);
Math.floor(1.5);
Math.round(1.5);
Math.ceil(1.5);
```

#### Audio & Vidéo

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

---

### Introduction aux classes

#### Qu’est-ce qu’une classe ?

Une classe en JavaScript, c’est un peu comme une « recette » pour créer plusieurs objets similaires.

Imaginez que vous devez créer plusieurs personnages dans un jeu.

Au lieu de répéter le même code pour chaque personnage, vous pouvez utiliser une classe pour définir une « recette de personnage » et créer autant de personnages que vous voulez.

#### Pourquoi utiliser des classes ?

Sans les classes, chaque fois que vous voulez créer un nouvel objet avec les mêmes propriétés (ex: un personnage), vous devez tout réécrire pour chaque personnage: son nom, sa couleur de cheveux, sa grandeur, son poid, son QI, etc.

Avec une classe, vous écrivez le code une seule fois et pouvez ensuite l’utiliser pour créer plusieurs objets!

#### Comment ça fonctionne ?

```js
class Person {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet()
    console.log(`Salut, je m'appelle ${this.name} et j'ai ${this.age} ans.`);
  }
}

const person1 = new Person('Jeanne', 25);
person1.greet();
// Affiche "Salut, je m'appelle Jeanne et j'ai 25 ans."

const person2 = new Person('Félix', 641);
person2.greet();
// Affiche "Salut, je m'appelle Félix et j'ai 641 ans."
```

Quelques observations importantes dans l'exemple ci-dessus :

* Le nom d'une classe doit commencer par une majuscule. C'est une norme.
* Une fonction à l'intérieur d'une classe s'appelle une méthode.
* La fonction `constructor` est comme un modèle de départ qui assigne les variables de la classes.
* Les variables ne sont pas définies comme à l'habiture avec `let`, `var` ou `const`.

<div class="grid grid-1-2" markdown>
  ![](./assets/images/cent-ans.jpg)

  <small>Exercice - JavaScript</small><br>
  **[La guerre de 100 ans](./exercices/js-100ans.md){.stretched-link}**
</div>

## :octicons-terminal-16: Lignes de commandes

![](./assets/images/command.webp){ .w-100 }

La [ligne de commande](https://fr.wikipedia.org/wiki/Commandes_Unix) est un outil qui permet d’interagir avec un ordinateur en tapant des commandes textuelles.

On écris des lignes de commandes dans un CLI, aussi appelé « Terminal ».

*[CLI] : Command-Line Interface

![Terminal](./assets/images/terminal.png)

Contrairement à une interface graphique (GUI) où vous cliquez sur des boutons, ici, vous tapez directement ce que vous voulez faire.

*[GUI] : Graphical User Interface

Les lignes de commande sont très utile en développement web et pour configurer les serveurs, entre autres.

!!! info "Bon à savoir"

    * En ligne de commande, lorsqu'on voit `.` ou `./`, cela signifie le répertoire courant.
    * Lorsqu'on voit `..` ou `../`, ça signifie le répertoire parent.
    * On peut utiliser la touche ++tab++ pour compléter une ligne de commande.

### Où se trouve le terminal ?

* En **Windows**, utilisez l'application **PowerShell[^powershell]** plutôt que command prompt.
* En **macOS**, utilisez l'application **Terminal[^terminal_osx]**.
* En **Linux**, utilisez l'application **Terminal[^terminal_unix]**.

[^powershell]: [https://learn.microsoft.com/fr-ca/training/modules/introduction-to-powershell/](https://learn.microsoft.com/fr-ca/training/modules/introduction-to-powershell/)
[^terminal_osx]: [https://support.apple.com/fr-ca/guide/terminal/welcome/mac](https://support.apple.com/fr-ca/guide/terminal/welcome/mac)
[^terminal_unix]: [https://ubuntu.com/tutorials/command-line-for-beginners](https://ubuntu.com/tutorials/command-line-for-beginners) (en anglais)

### Position

Affichager l'emplacement avec « pwd »

*[pwd]: Acronyme pour « Print Working Directory » en anglais

=== "Windows"

    ![pwd](./assets/images/pwd.png)

=== "Ligne de commande"

    ```powershell
    pwd

    # Résultat : C:\Windows
    ```

### Navigation

#### Liste

Lister des fichiers et dossiers avec « ls »

*[ls]: Diminutif du mot « list » en anglais

=== "Windows"

    ![ls](./assets/images/ls.png)

=== "Ligne de commande"

    ```powershell
    ls
    ```

#### Déplacement

Changer de répertoire avec « cd »

*[cd]: Acronyme pour « Change Directory » en anglais

=== "Windows"

    ![cd](./assets/images/cd.png)

=== "Ligne de commande"

    ```powershell
    cd nom_du_dossier
    ```

    ```powershell
    cd ./nom_du_dossier # identique à la commande précédente
    ```

    ```powershell
    cd .. # Se déplace au répertoire parent
    ```

### Fichiers

#### Création

Créer un fichier avec « touch »

=== "Windows"

    ![touch](./assets/images/touch.png)

=== "Ligne de commande"

    ```bash
    touch nom_du_fichier.txt
    ```

#### Lecture

Lire le contenu d'un fichier avec « cat »

*[cat]: Diminutif du mot « concatenate » en anglais

=== "Windows"

    ![cat](./assets/images/cat.png)

=== "Ligne de commande"

    ```powershell
    cat nom_du_fichier.txt
    ```

#### Écriture

Écrire dans un fichier avec « echo »

```powershell
echo "Texte à ajouter" >> nom_du_fichier.txt
echo "Texte en deuxième ligne" >> nom_du_fichier.txt
echo "Texte en troisième ligne!" >> nom_du_fichier.txt
```

```powershell
echo "Finalement, remplace tout par ceci" > nom_du_fichier.txt
```

#### Déplacement

Déplacer, ou renommer!!, un fichier avec « mv »

*[mv]: Diminutif du mot « move » en anglais

```powershell
mv nom_du_fichier.txt nouveau_nom.txt
```

```powershell
mv nom_du_fichier.txt assets/nom_du_fichier.txt
```

#### Suppression

Supprimer un fichier ou un répertoire avec « rm »

=== "Windows"

    ![rm](./assets/images/rm.png)

=== "Ligne de commande"

    ```powershell
    rm nom_du_fichier.txt
    ```

### Dossiers

#### Création

Créer un fichier avec « mkdir »

*[mkdir]: Diminutif des mots « make » et « directory » en anglais

=== "Windows"

    ![mkdir](./assets/images/mkdir.png)

=== "Ligne de commande"

    ```powershell
    mkdir nom_du_dossier
    ```

#### Supprimer un dossier

Supprimer un dossier avec « rm -r ». L’option `-r` signifie récursif (recursive en anglais), ce qui permet de supprimer tout les contenus d'un dossier.

*[rm]: Diminutif du mot « remove »  en anglais

=== "Windows"

    ![rm](./assets/images/rm.png)

=== "Ligne de commande"

    ```powershell
    rm -r nom_du_dossier
    ```

<div class="grid grid-1-2" markdown>
  ![](./assets/images/mandala.jpeg)

  <small>Exercice - CLI</small><br>
  **[Mandala](./exercices/cli-mandala.md){.stretched-link}**
</div>
