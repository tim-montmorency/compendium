# Récap JS : les concepts clés

!!! abstract "L'essentiel en 3 points"
    1. Vous avez déjà tout vu dans vos cours précédents : cette page réactive seulement ce qui sert à charger et afficher les données de votre portfolio.
    2. Le fil conducteur : des **données** (un tableau d'objets) → du **HTML** généré (gabarits littéraux, `map()`) → une **page** qui réagit (DOM, événements).
    3. Chaque concept a un exemple tiré d'un portfolio. Gardez cette page ouverte pendant que vous codez.

Pour aller plus loin sur chaque notion : [aide-mémoire JS](https://jfcmontmorency.github.io/aide-memoire/){ :target="_blank" } (celui de vos sessions précédentes) et [MDN en français](https://developer.mozilla.org/fr/docs/Web/JavaScript){ :target="_blank" }.

## 1. Variables : `const` et `let`

`const` pour une valeur qu'on ne réassigne pas (le cas le plus fréquent), `let` pour une valeur qui change. On n'utilise plus `var`.

```js
const nom = 'Marie Tremblay';   // ne changera pas
let projetActif = 0;            // changera quand on clique sur « suivant »
projetActif = projetActif + 1;
```

!!! tip "Par défaut : `const`"
    Commencez toujours par `const`. Si le navigateur se plaint (`Assignment to constant variable`), c'est que vous vouliez vraiment `let`.

## 2. Types de base

```js
const titre = 'Café du coin';   // chaîne de caractères (string)
const annee = 2025;             // nombre (number)
const enVedette = true;         // booléen (boolean)
let lien;                       // undefined : déclaré, mais sans valeur
const video = null;             // null : « volontairement vide »
```

`typeof` indique le type d'une valeur, pratique pour déboguer :

```js
console.log(typeof annee); // "number"
```

## 3. Gabarits littéraux

Des chaînes entre accents graves `` ` ``, dans lesquelles on insère une valeur avec `${...}`. C'est **l'outil principal** pour fabriquer du HTML avec des données.

```js
const titre = 'Café du coin';
const annee = 2025;

const html = `<h3>${titre} (${annee})</h3>`;
// "<h3>Café du coin (2025)</h3>"
```

Ils acceptent plusieurs lignes, ce qui garde le HTML lisible :

```js
const carte = `
  <article class="carte-projet">
    <h3 class="carte-projet__titre">${titre}</h3>
  </article>
`;
```

## 4. Objets

Un objet regroupe les informations d'**une** chose (un projet) sous forme de paires `propriété: valeur`.

```js
const projet = {
  id: 'cafe-du-coin',
  titre: 'Café du coin',
  categorie: 'Design web',
  annee: '2025'
};

console.log(projet.titre);      // "Café du coin"
console.log(projet['annee']);   // "2025" : même chose, autre notation
console.log(projet.client);     // undefined : la propriété n'existe pas
```

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
const projets = [
  { id: 'cafe-du-coin', titre: 'Café du coin', annee: '2025' },
  { id: 'biome', titre: 'Biome', annee: '2025' }
];

console.log(projets[1].titre);   // "Biome"
console.log(projets.length);     // 2
```

On lit de gauche à droite : `projets` → l'élément `[1]` → sa propriété `.titre`.

## 7. Fonctions

Un bloc de code réutilisable, qui reçoit des **paramètres** et peut **retourner** une valeur.

```js
function creerTitre(projet) {
  return `<h3>${projet.titre}</h3>`;
}

creerTitre({ titre: 'Biome' }); // "<h3>Biome</h3>"
```

### Fonctions fléchées

Une écriture plus courte, qu'on voit surtout en paramètre d'une autre fonction (`map`, `addEventListener`...).

```js
const creerTitre = (projet) => `<h3>${projet.titre}</h3>`;
```

Sur une seule ligne, sans accolades, le `return` est implicite.

## 8. Conditions et opérateur ternaire

```js
if (projet.lien) {
  console.log('Ce projet a un lien externe');
} else {
  console.log('Pas de lien');
}
```

Le **ternaire** fait la même chose en une expression : très utile **à l'intérieur** d'un gabarit littéral, pour afficher un élément seulement s'il existe.

```js
// condition ? si vrai : si faux
const htmlLien = projet.lien ? `<a href="${projet.lien}">Voir en ligne</a>` : '';
```

!!! note "Valeurs « fausses »"
    Dans une condition, `undefined`, `null`, `''` (chaîne vide), `0` et `false` sont considérés comme faux. `if (projet.lien)` est donc vrai seulement si `lien` existe **et** n'est pas vide.

## 9. Parcourir un tableau : `forEach` et `for...of`

Pour **faire quelque chose** avec chaque élément.

```js
projets.forEach((projet) => {
  console.log(projet.titre);
});

// équivalent
for (const projet of projets) {
  console.log(projet.titre);
}
```

## 10. Transformer, filtrer, trouver : `map`, `filter`, `find`

Les trois méthodes de tableau qui font le gros du travail dans un portfolio.

**`map()`** : transforme **chaque** élément, retourne un **nouveau tableau** de même longueur.

```js
const titres = projets.map(projet => projet.titre);
// ["Café du coin", "Biome"]

const cartes = projets.map(projet => `<h3>${projet.titre}</h3>`);
// ["<h3>Café du coin</h3>", "<h3>Biome</h3>"]
```

**`join()`** : colle les éléments d'un tableau en une seule chaîne. Toujours après un `map()` qui produit du HTML.

```js
cartes.join('');
// "<h3>Café du coin</h3><h3>Biome</h3>"
```

**`filter()`** : garde seulement les éléments qui respectent une condition.

```js
const projets3D = projets.filter(projet => projet.categorie === '3D');
```

**`find()`** : retourne le **premier** élément qui respecte la condition, ou `undefined`.

```js
const projet = projets.find(p => p.id === 'biome');
// { id: 'biome', titre: 'Biome', ... }
```

| Méthode | Retourne | Usage typique |
|---|---|---|
| `map()` | Un tableau transformé | Projets → cartes HTML |
| `filter()` | Un tableau plus court | Filtrer par catégorie |
| `find()` | **Un** élément (ou `undefined`) | Le projet qui correspond à l'`id` de l'URL |

## 11. Sélectionner des éléments du DOM

```js
const grille = document.querySelector('.projets__grille');     // le premier qui correspond
const cartes = document.querySelectorAll('.carte-projet');      // tous (une NodeList)

cartes.forEach(carte => console.log(carte));
```

Mêmes sélecteurs qu'en CSS : `.classe`, `#id`, `balise`, `.parent .enfant`.

!!! warning "`null` : l'élément n'existe pas"
    Si `querySelector()` ne trouve rien, il retourne `null`, et la ligne suivante plante avec `Cannot read properties of null`. Vérifiez l'orthographe du sélecteur, et que l'élément est bien dans le HTML de **cette** page.

## 12. Modifier le DOM : `textContent`, `innerHTML`, `classList`

```js
const titre = document.querySelector('.projet__titre');
titre.textContent = 'Biome';                 // du texte seulement

const grille = document.querySelector('.projets__grille');
grille.innerHTML = '<p>Chargement...</p>';   // du HTML, interprété

const nav = document.querySelector('.navigation');
nav.classList.add('navigation--ouverte');
nav.classList.remove('navigation--ouverte');
nav.classList.toggle('navigation--ouverte'); // ajoute ou retire
```

!!! warning "`innerHTML` : seulement avec vos propres données"
    `innerHTML` interprète le HTML qu'on lui donne. Avec vos propres données de projets, aucun problème. Avec du texte saisi par un visiteur (formulaire, commentaires), ce serait une faille XSS : on utiliserait alors `textContent`.

## 13. Événements : `addEventListener`

```js
const bouton = document.querySelector('.theme__bouton');

bouton.addEventListener('click', () => {
  document.body.classList.toggle('theme-sombre');
});
```

### Attributs `data-` et `dataset`

Pour garder une information dans le HTML (ex. l'`id` d'un projet) et la relire au clic.

```html
<button class="carte-projet__bouton" data-id="biome">Voir</button>
```

```js
bouton.addEventListener('click', () => {
  console.log(bouton.dataset.id); // "biome"
});
```

### Délégation d'événements

Un **seul** écouteur sur le parent, plutôt qu'un par carte. Indispensable quand les cartes sont générées en JavaScript : elles n'existent pas encore quand la page se charge.

```js
grille.addEventListener('click', (evenement) => {
  const bouton = evenement.target.closest('.carte-projet__bouton');
  if (!bouton) return; // le clic n'était pas sur un bouton

  console.log(bouton.dataset.id);
});
```

## 14. JSON

Un format **texte** pour échanger des données, avec la même structure qu'un tableau d'objets JavaScript, mais des règles plus strictes : guillemets doubles partout, pas de virgule finale, pas de commentaires.

```json
[
  { "id": "biome", "titre": "Biome", "annee": "2025" }
]
```

```js
JSON.parse('{"titre":"Biome"}');   // texte JSON → objet JS
JSON.stringify({ titre: 'Biome' }); // objet JS → texte JSON
```

Avec `fetch()`, `reponse.json()` fait le `JSON.parse()` pour vous.

## 15. Asynchrone : `fetch`, `async` / `await`

`fetch()` va chercher une ressource (un fichier, une API). La réponse **n'arrive pas tout de suite** : `fetch()` retourne une **promesse**. `await` attend qu'elle soit résolue, sans bloquer la page. `await` n'est permis que dans une fonction `async`.

```js
async function chargerProjets() {
  const reponse = await fetch('data/projets.json'); // 1. la réponse du serveur
  const projets = await reponse.json();              // 2. le contenu, converti
  return projets;                                     // 3. un tableau de projets
}
```

La même chose avec `.then()`, si c'est la syntaxe que vous avez apprise :

```js
fetch('data/projets.json')
  .then(reponse => reponse.json())
  .then(projets => console.log(projets));
```

!!! warning "Une fonction `async` retourne toujours une promesse"
    `const projets = chargerProjets();` ne donne **pas** les projets, mais une promesse. Il faut `await chargerProjets()` (dans une autre fonction `async`) ou `chargerProjets().then(...)`.

## 16. Gérer les erreurs : `try` / `catch`

Un chargement peut échouer : fichier introuvable, réseau coupé, jeton invalide. `try` / `catch` permet d'afficher un message plutôt qu'une page vide.

```js
async function init() {
  try {
    const projets = await chargerProjets();
    console.log(projets);
  } catch (erreur) {
    console.error(erreur);
    document.querySelector('.projets__grille').innerHTML =
      '<p>Les projets n’ont pas pu être chargés.</p>';
  }
}
```

## 17. Paramètres d'URL : `URLSearchParams`

Lire les informations après le `?` d'une adresse, comme `projet.html?id=biome`.

```js
const parametres = new URLSearchParams(window.location.search);
const id = parametres.get('id'); // "biome", ou null si absent
```

## 18. Déboguer : la console

```js
console.log(projets);          // afficher une valeur
console.table(projets);        // un tableau d'objets en vrai tableau, très lisible
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
async function init() {                                        // 15. async
  const grille = document.querySelector('.projets__grille');   // 11. DOM
  try {                                                        // 16. try / catch
    const projets = await chargerProjets();                    // 15. fetch, 6. tableau d'objets
    grille.innerHTML = projets                                 // 12. innerHTML
      .map(projet => `                                          
        <article class="carte-projet">
          <h3>${projet.titre}</h3>
          ${projet.lien ? `<a href="${projet.lien}">Voir</a>` : ''}
        </article>
      `)                                                       // 10. map, 3. gabarit, 8. ternaire
      .join('');                                               // 10. join
  } catch (erreur) {
    console.error(erreur);                                     // 18. console
  }
}

init();
```

[:material-database: Charger les données du portfolio](../projets/portfolio/donnees/index.md){ .md-button .md-button--primary }
