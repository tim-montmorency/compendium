# Récap JS : les concepts clés

!!! abstract "L'essentiel en 3 points"
    1. Vous avez déjà tout vu dans vos cours précédents : cette page réactive seulement ce qui sert à charger et afficher les données de votre portfolio.
    2. Le fil conducteur : des **données** (un tableau d'objets) → du **HTML** généré (gabarits littéraux, `map()`) → une **page** qui réagit (DOM, événements).
    3. Chaque concept a un exemple tiré d'un portfolio. Gardez cette page ouverte pendant que vous codez.

Pour aller plus loin sur chaque notion : [aide-mémoire JS](https://jfcmontmorency.github.io/aide-memoire/){ :target="_blank" } (celui de vos sessions précédentes) et [MDN en français](https://developer.mozilla.org/fr/docs/Web/JavaScript){ :target="_blank" }.

!!! info "Les noms dans le code : en anglais"
    Variables, fonctions, classes CSS, propriétés de vos données, noms de fichiers : on les écrit en anglais (`project.title`, `loadProjects()`, `.project-card`, `data/projects.json`). C'est le standard en programmation, et c'est ce que vous lirez dans toute documentation ou tout code professionnel. Les **contenus** (titres, descriptions, messages affichés) restent en français, bien sûr.

## 1. Variables : `const` et `let`

`const` pour une valeur qu'on ne réassigne pas (le cas le plus fréquent), `let` pour une valeur qui change. On n'utilise plus `var`.

```js
const name = 'Marie Tremblay';  // ne changera pas
let activeProject = 0;          // changera quand on clique sur « suivant »
activeProject = activeProject + 1;
```

!!! tip "Par défaut : `const`"
    Commencez toujours par `const`. Si le navigateur se plaint (`Assignment to constant variable`), c'est que vous vouliez vraiment `let`.

## 2. Types de base

```js
const title = 'Café du coin';   // chaîne de caractères (string)
const year = 2025;              // nombre (number)
const isFeatured = true;        // booléen (boolean)
let link;                       // undefined : déclaré, mais sans valeur
const video = null;             // null : « volontairement vide »
```

`typeof` indique le type d'une valeur, pratique pour déboguer :

```js
console.log(typeof year); // "number"
```

## 3. Gabarits littéraux

Des chaînes entre accents graves `` ` ``, dans lesquelles on insère une valeur avec `${...}`. C'est **l'outil principal** pour fabriquer du HTML avec des données.

```js
const title = 'Café du coin';
const year = 2025;

const html = `<h3>${title} (${year})</h3>`;
// "<h3>Café du coin (2025)</h3>"
```

Ils acceptent plusieurs lignes, ce qui garde le HTML lisible :

```js
const card = `
  <article class="project-card">
    <h3 class="project-card__title">${title}</h3>
  </article>
`;
```

## 4. Objets { #objets }

Un objet regroupe les informations d'**une** chose (un projet) sous forme de paires `propriété: valeur`.

```js
const project = {
  id: 'cafe-du-coin',
  title: 'Café du coin',
  category: 'Design web',
  year: '2025'
};

console.log(project.title);     // "Café du coin"
console.log(project['year']);   // "2025" : même chose, autre notation
console.log(project.client);    // undefined : la propriété n'existe pas
```

### Accéder aux propriétés : point ou crochets

| Notation | Quand l'utiliser | Exemple |
|---|---|---|
| Le point `.` | Presque toujours : le nom de la propriété est connu d'avance | `project.title` |
| Les crochets `[' ']` | Quand le nom de la propriété est **dans une variable** | `project[property]` |

```js
const property = 'category';
console.log(project[property]);   // "Design web"
// project.property chercherait une propriété qui s'appelle littéralement « property »
```

### Propriétés imbriquées

Une propriété peut contenir un tableau ou un autre objet. On enchaîne simplement les accès, de gauche à droite :

```js
const project = {
  title: 'Biome',
  gallery: ['biome-1.jpg', 'biome-2.jpg'],
  client: { name: 'Musée', city: 'Laval' }
};

project.gallery[0];     // "biome-1.jpg"
project.client.city;    // "Laval"
```

Référence : [accesseurs de propriétés (MDN)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Property_accessors){ :target="_blank" }

## 5. Tableaux

Une liste ordonnée de valeurs. Le premier élément est à l'index **0**.

```js
const categories = ['Design web', '3D', 'Vidéo'];

console.log(categories[0]);       // "Design web"
console.log(categories.length);   // 3
categories.push('Illustration');  // ajoute à la fin
```

## 6. Tableaux d'objets

**La structure de vos données de projets**, peu importe la source (JSON, Google Sheets, Airtable) : un tableau, dans lequel chaque élément est un objet-projet.

```js
const projects = [
  { id: 'cafe-du-coin', title: 'Café du coin', year: '2025' },
  { id: 'biome', title: 'Biome', year: '2025' }
];

console.log(projects[1].title);  // "Biome"
console.log(projects.length);    // 2
```

On lit de gauche à droite : `projects` → l'élément `[1]` → sa propriété `.title`.

## 7. Fonctions

Un bloc de code réutilisable, qui reçoit des **paramètres** et peut **retourner** une valeur.

```js
function createTitle(project) {
  return `<h3>${project.title}</h3>`;
}

createTitle({ title: 'Biome' }); // "<h3>Biome</h3>"
```

### Fonctions fléchées

Une écriture plus courte, qu'on voit surtout en paramètre d'une autre fonction (`map`, `addEventListener`...).

```js
const createTitle = (project) => `<h3>${project.title}</h3>`;
```

Sur une seule ligne, sans accolades, le `return` est implicite.

## 8. Conditions et opérateur ternaire

```js
if (project.link) {
  console.log('Ce projet a un lien externe');
} else {
  console.log('Pas de lien');
}
```

Le **ternaire** fait la même chose en une expression : très utile **à l'intérieur** d'un gabarit littéral, pour afficher un élément seulement s'il existe.

```js
// condition ? si vrai : si faux
const linkHtml = project.link ? `<a href="${project.link}">Voir en ligne</a>` : '';
```

!!! note "Valeurs « fausses »"
    Dans une condition, `undefined`, `null`, `''` (chaîne vide), `0` et `false` sont considérés comme faux. `if (project.link)` est donc vrai seulement si `link` existe **et** n'est pas vide.

## 9. Parcourir un tableau : `forEach` et `for...of` { #foreach }

Pour **faire quelque chose** avec chaque élément.

```js
projects.forEach((project) => {
  console.log(project.title);
});

// équivalent
for (const project of projects) {
  console.log(project.title);
}
```

### Dans votre portfolio : afficher une carte par projet

```js
const grid = document.querySelector('.projects__grid');

projects.forEach((project) => {
  grid.insertAdjacentHTML('beforeend', `
    <article class="project-card">
      <h3 class="project-card__title">${project.title}</h3>
    </article>
  `);
});
```

`insertAdjacentHTML('beforeend', ...)` ajoute le HTML **à la fin** du conteneur, sans effacer ce qui y est déjà.

!!! note "`forEach` ou `map()` + `join()`?"
    Les deux affichent les mêmes cartes. `forEach` est souvent plus intuitif : « pour chaque projet, ajoute une carte ». `map()` + `join()` (section suivante) construit tout le HTML d'abord, puis l'insère en **une seule** fois, ce qui est un peu plus efficace. C'est la version utilisée dans les pages de gestion des données, mais pour une dizaine de projets, la différence est imperceptible. Choisissez celle que vous comprenez le mieux.

Référence : [forEach (MDN)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach){ :target="_blank" }

## 10. Transformer, filtrer, trouver : `map`, `filter`, `find`

Les trois méthodes de tableau qui font le gros du travail dans un portfolio.

**`map()`** : transforme **chaque** élément, retourne un **nouveau tableau** de même longueur.

```js
const titles = projects.map(project => project.title);
// ["Café du coin", "Biome"]

const cards = projects.map(project => `<h3>${project.title}</h3>`);
// ["<h3>Café du coin</h3>", "<h3>Biome</h3>"]
```

**`join()`** : colle les éléments d'un tableau en une seule chaîne. Toujours après un `map()` qui produit du HTML.

```js
cards.join('');
// "<h3>Café du coin</h3><h3>Biome</h3>"
```

**`filter()`** : garde seulement les éléments qui respectent une condition.

```js
const projects3D = projects.filter(project => project.category === '3D');
```

**`find()`** : retourne le **premier** élément qui respecte la condition, ou `undefined`.

```js
const project = projects.find(p => p.id === 'biome');
// { id: 'biome', title: 'Biome', ... }
```

| Méthode | Retourne | Usage typique |
|---|---|---|
| `map()` | Un tableau transformé | Projets → cartes HTML |
| `filter()` | Un tableau plus court | Filtrer par catégorie |
| `find()` | **Un** élément (ou `undefined`) | Le projet qui correspond à l'`id` de l'URL |

## 11. Sélectionner des éléments du DOM

```js
const grid = document.querySelector('.projects__grid');       // le premier qui correspond
const cards = document.querySelectorAll('.project-card');     // tous (une NodeList)

cards.forEach(card => console.log(card));
```

Mêmes sélecteurs qu'en CSS : `.classe`, `#id`, `balise`, `.parent .enfant`.

!!! warning "`null` : l'élément n'existe pas"
    Si `querySelector()` ne trouve rien, il retourne `null`, et la ligne suivante plante avec `Cannot read properties of null`. Vérifiez l'orthographe du sélecteur, et que l'élément est bien dans le HTML de **cette** page.

## 12. Modifier le DOM : `textContent`, `innerHTML`, `classList`

```js
const title = document.querySelector('.project__title');
title.textContent = 'Biome';                 // du texte seulement

const grid = document.querySelector('.projects__grid');
grid.innerHTML = '<p>Chargement...</p>';     // du HTML, interprété

const nav = document.querySelector('.navigation');
nav.classList.add('navigation--open');
nav.classList.remove('navigation--open');
nav.classList.toggle('navigation--open');    // ajoute ou retire
```

!!! warning "`innerHTML` : seulement avec vos propres données"
    `innerHTML` interprète le HTML qu'on lui donne. Avec vos propres données de projets, aucun problème. Avec du texte saisi par un visiteur (formulaire, commentaires), ce serait une faille XSS : on utiliserait alors `textContent`.

## 13. Événements : `addEventListener`

```js
const themeButton = document.querySelector('.theme-toggle');

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
```

### Attributs `data-` et `dataset`

Pour garder une information dans le HTML (ex. l'`id` d'un projet) et la relire au clic.

```html
<button class="project-card__button" data-id="biome">Voir</button>
```

```js
button.addEventListener('click', () => {
  console.log(button.dataset.id); // "biome"
});
```

### Délégation d'événements

Un **seul** écouteur sur le parent, plutôt qu'un par carte. Indispensable quand les cartes sont générées en JavaScript : elles n'existent pas encore quand la page se charge.

```js
grid.addEventListener('click', (event) => {
  const button = event.target.closest('.project-card__button');
  if (!button) return; // le clic n'était pas sur un bouton

  console.log(button.dataset.id);
});
```

## 14. JSON { #json }

Un format **texte** pour échanger des données, avec la même structure qu'un tableau d'objets JavaScript, mais des règles plus strictes : guillemets doubles partout, pas de virgule finale, pas de commentaires.

```json
[
  { "id": "biome", "title": "Biome", "year": "2025" }
]
```

```js
JSON.parse('{"title":"Biome"}');   // texte JSON → objet JS
JSON.stringify({ title: 'Biome' }); // objet JS → texte JSON
```

Avec `fetch()`, `response.json()` fait le `JSON.parse()` pour vous.

| | Objet JavaScript | JSON |
|---|---|---|
| Nature | Du code | Du **texte** (un fichier, une réponse d'API) |
| Clés | `title` ou `'title'` | Toujours `"title"`, guillemets doubles |
| Textes | `'...'` ou `"..."` | Toujours `"..."` |
| Virgule finale, commentaires | Permis | Interdits |
| Valeurs possibles | Tout, y compris des fonctions | Texte, nombre, `true`/`false`, `null`, tableau, objet |

Une fois converti par `response.json()`, votre JSON **devient** un tableau d'objets JavaScript ordinaire : on y accède avec le point (`project.title`), on le parcourt avec `forEach` ou `map()`.

Référence : [structure du JSON (MDN)](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Scripting/JSON#structure_du_json){ :target="_blank" }

## 15. Asynchrone : `fetch`, `async` / `await` et `.then()` { #async }

`fetch()` va chercher une ressource (un fichier, une API). La réponse **n'arrive pas tout de suite** : quelques millisecondes pour un fichier local, parfois plus pour une API. Pendant ce temps, la page continue de s'afficher et de réagir.

### Une promesse, en bref { #promesses }

`fetch()` ne retourne donc pas les données, mais une **promesse** : un objet qui représente un résultat **à venir**. Une promesse est toujours dans l'un de ces trois états :

| État | Ce que ça veut dire | Dans votre portfolio | Comment on le traite |
|---|---|---|---|
| En attente (*pending*) | La réponse n'est pas encore arrivée | Les projets se chargent | On attend |
| Tenue (*fulfilled*) | Le résultat est arrivé | Les projets sont reçus | `await` ou `.then()` |
| Rompue (*rejected*) | Quelque chose a échoué | Fichier introuvable, réseau coupé, jeton invalide | `try` / `catch` ou `.catch()` |

C'est tout ce qu'il faut retenir pour le portfolio : on ne crée pas de promesses soi-même, on **attend** celles que retourne `fetch()`.

Référence : [Promise (MDN)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise){ :target="_blank" }

### Attendre la réponse : deux syntaxes

Deux syntaxes pour attendre qu'elle soit résolue, sans bloquer la page :

- **`async` / `await`** : `await` met la fonction en pause jusqu'à la réponse. Le code se lit de haut en bas, une étape par ligne. `await` n'est permis que dans une fonction `async`.
- **`.then()`** : on donne à la promesse une fonction à exécuter quand la réponse arrive. Chaque étape s'enchaîne à la précédente.

**Avec `async` / `await`**

```js
async function loadProjects() {
  const response = await fetch('data/projects.json'); // 1. la réponse du serveur
  const projects = await response.json();              // 2. le contenu, converti
  return projects;                                      // 3. un tableau de projets
}
```

**Avec `.then()`**

```js
function loadProjects() {
  return fetch('data/projects.json')          // 1. la réponse du serveur
    .then(response => response.json());       // 2. le contenu, converti; 3. un tableau de projets
}
```

Les deux versions font exactement la même chose. Choisissez celle avec laquelle vous êtes le plus à l'aise, et gardez la même partout dans votre projet.

!!! warning "Une fonction `async` retourne toujours une promesse"
    `const projects = loadProjects();` ne donne **pas** les projets, mais une promesse. Il faut `await loadProjects()` (dans une autre fonction `async`) ou `loadProjects().then(...)`.

## 16. Gérer les erreurs : `try` / `catch` et `.catch()` { #erreurs }

Un chargement peut échouer : fichier introuvable, réseau coupé, jeton invalide. On attrape l'erreur pour afficher un message plutôt qu'une page vide. Chaque syntaxe a sa façon de faire.

**Avec `async` / `await`**

```js
async function init() {
  try {
    const projects = await loadProjects();
    console.log(projects);
  } catch (error) {
    console.error(error);
    document.querySelector('.projects__grid').innerHTML =
      '<p>Les projets n’ont pas pu être chargés.</p>';
  }
}
```

**Avec `.then()`**

```js
function init() {
  loadProjects()
    .then(projects => console.log(projects))
    .catch(error => {
      console.error(error);
      document.querySelector('.projects__grid').innerHTML =
        '<p>Les projets n’ont pas pu être chargés.</p>';
    });
}
```

## 17. Paramètres d'URL : `URLSearchParams`

Lire les informations après le `?` d'une adresse, comme `project.html?id=biome`.

```js
const params = new URLSearchParams(window.location.search);
const id = params.get('id'); // "biome", ou null si absent
```

## 18. Déboguer : la console

```js
console.log(projects);         // afficher une valeur
console.table(projects);       // un tableau d'objets en vrai tableau, très lisible
console.error('Oups');         // en rouge
```

!!! tip "Le réflexe"
    Quelque chose ne s'affiche pas? Avant de demander à Copilot, faites un `console.log()` de la valeur juste avant la ligne qui pose problème. La plupart du temps, la valeur n'est pas celle que vous pensiez (`undefined`, mauvais nom de propriété, tableau vide).

Et dans l'inspecteur du navigateur (F12) :

- onglet **Console** : vos `console.log()` et les erreurs, avec le fichier et la ligne en cause;
- onglet **Réseau** (*Network*) : vos requêtes `fetch()`, leur statut (200 = OK, 404 = introuvable, 401 = non autorisé) et la réponse reçue.

## Tout ensemble

Les concepts de cette page, réunis dans le patron que vous allez coder pour votre portfolio :

```js
async function init() {                                      // 15. async
  const grid = document.querySelector('.projects__grid');    // 11. DOM
  try {                                                      // 16. try / catch
    const projects = await loadProjects();                   // 15. fetch, 6. tableau d'objets
    grid.innerHTML = projects                                // 12. innerHTML
      .map(project => `
        <article class="project-card">
          <h3>${project.title}</h3>
          ${project.link ? `<a href="${project.link}">Voir</a>` : ''}
        </article>
      `)                                                     // 10. map, 3. gabarit, 8. ternaire
      .join('');                                             // 10. join
  } catch (error) {
    console.error(error);                                    // 18. console
  }
}

init();
```

La même chose avec `.then()` :

```js
function init() {
  const grid = document.querySelector('.projects__grid');
  loadProjects()                                             // 15. fetch, .then()
    .then(projects => {
      grid.innerHTML = projects
        .map(project => `
          <article class="project-card">
            <h3>${project.title}</h3>
            ${project.link ? `<a href="${project.link}">Voir</a>` : ''}
          </article>
        `)
        .join('');
    })
    .catch(error => console.error(error));                   // 16. .catch()
}

init();
```

[:material-database: Charger les données du portfolio](../projets/portfolio/donnees/index.md){ .md-button .md-button--primary }
