# Exercice : du JSON à la carte

!!! abstract "L'essentiel en 3 points"
    1. Avant de toucher à votre portfolio, on réactive les 5 notions JavaScript qui servent à afficher des projets : tableau d'objets, accès aux propriétés, `forEach`, gabarit littéral, `fetch`.
    2. **Partie 1** : 5 petits défis dans la console du navigateur. **Partie 2** : un mini-projet guidé, en 4 étapes, qui affiche des cartes à partir d'un fichier JSON.
    3. C'est exactement le mécanisme de votre portfolio, en miniature et sur des données neutres. Ensuite, vous le transposez chez vous.

## Partie 1 : échauffement dans la console

Ouvrez n'importe quelle page dans votre navigateur, puis la console : **F12**, onglet **Console**.

Copiez-collez ce tableau dans la console, puis appuyez sur Entrée :

```js
const projects = [
  { id: 'cafe-du-coin', title: 'Café du coin', category: 'Design web', year: '2025' },
  { id: 'biome', title: 'Biome', category: '3D', year: '2025' },
  { id: 'echo', title: 'Écho', category: 'Interactivité', year: '2024' }
];
```

Pour chaque défi, écrivez **une** ligne de code dans la console. On fait le corrigé ensemble, un défi à la fois.

| # | Défi | Résultat attendu |
|---|---|---|
| 1 | Affichez le titre du **2e** projet | `Biome` |
| 2 | Affichez l'année de **chaque** projet, avec `forEach` | `2025`, `2025`, `2024` |
| 3 | Avec un gabarit littéral, fabriquez la phrase « Biome (2025) » à partir du 2e projet | `"Biome (2025)"` |
| 4 | Retrouvez le projet dont l'`id` est `echo`, avec `find` | `{ id: 'echo', title: 'Écho', ... }` |
| 5 | Transformez le tableau en liste de titres, avec `map` | `['Café du coin', 'Biome', 'Écho']` |

!!! tip "Coincé?"
    - Le premier élément d'un tableau est à l'index **0**.
    - `forEach`, `find` et `map` reçoivent une fonction : `projects.forEach(project => ...)`.
    - Un gabarit littéral s'écrit entre accents graves : `` `${...}` ``.
    - Si la console affiche « has already been declared », rechargez la page (F5) et recollez le tableau.

Chaque notion est expliquée, avec des exemples, dans le [récap JS](../../js/recap-js.md).

## Partie 2 : du JSON à la carte

### Dossier de départ

[📥 Télécharger les fichiers de départ](./ex-json-cartes-depart.zip){ .md-button }

```text
ex-json-cartes-depart/
├── index.html          ← une grille vide : .projects__grid
├── style.css           ← déjà prêt, on n'y touche pas
├── js/
│   └── main.js         ← vide : c'est ici que vous codez
├── data/
│   └── projects.json   ← 3 projets
└── assets/images/
```

Décompressez, ouvrez le dossier dans VS Code, puis clic droit sur `index.html` → **Open with Live Server**.

!!! danger "Live Server obligatoire"
    `fetch()` ne fonctionne pas si vous ouvrez `index.html` en double-cliquant (adresse `file:///...`). Il faut un serveur local : Live Server.

Ouvrez aussi `data/projects.json` pour voir la forme des données : un tableau de 3 objets, avec les propriétés `id`, `title`, `description`, `category`, `year`, `image` et, pour certains, `link`.

On avance **ensemble**, une étape à la fois. À chaque étape : on code, on vérifie dans le navigateur, puis on passe à la suivante.

### Étape 1 : charger les données avec `fetch()`

**Objectif** : voir les 3 projets apparaître dans la console.

1. Écrivez une fonction `async loadProjects()` qui va chercher `data/projects.json`, le convertit avec `.json()` et retourne le tableau.
2. Écrivez une fonction `async init()` qui attend `loadProjects()` et affiche le résultat avec `console.table()`.
3. Appelez `init()`.

**Vérification** : dans la console, un tableau de 3 lignes, une par projet.

??? success "Solution (avec `async` / `await`)"
    ```js
    async function loadProjects() {
      const response = await fetch('data/projects.json');
      const projects = await response.json();
      return projects;
    }

    async function init() {
      const projects = await loadProjects();
      console.table(projects);
    }

    init();
    ```

??? success "Solution (avec `.then()`)"
    ```js
    function loadProjects() {
      return fetch('data/projects.json')
        .then(response => response.json());
    }

    function init() {
      loadProjects().then(projects => {
        console.table(projects);
      });
    }

    init();
    ```

    Avec cette version, le code des étapes suivantes va **à l'intérieur** du `.then(projects => { ... })`.

### Étape 2 : parcourir le tableau avec `forEach`

**Objectif** : afficher le titre de chaque projet dans la console, un par ligne.

Dans `init()`, après le `console.table()`, parcourez `projects` avec `forEach` et affichez `project.title`.

**Vérification** : `Café du coin`, `Biome`, `Écho` dans la console.

??? success "Solution"
    ```js
    projects.forEach(project => {
      console.log(project.title);
    });
    ```

### Étape 3 : un gabarit littéral pour **une** carte

**Objectif** : la carte du **premier** projet apparaît dans la page.

1. Écrivez une fonction `createProjectCard(project)` qui **retourne** le HTML d'une carte, avec un gabarit littéral. Les classes CSS sont déjà prêtes dans `style.css` :

    ```html
    <article class="project-card">
      <img class="project-card__image" src="..." alt="...">
      <div class="project-card__content">
        <h3 class="project-card__title">...</h3>
        <p class="project-card__meta">catégorie · année</p>
        <p class="project-card__description">...</p>
      </div>
    </article>
    ```

2. Dans `init()`, sélectionnez `.projects__grid` et insérez-y la carte de `projects[0]` avec `innerHTML`.

**Vérification** : une carte « Café du coin », avec son image, dans la page.

??? success "Solution"
    ```js
    function createProjectCard(project) {
      return `
        <article class="project-card">
          <img class="project-card__image" src="${project.image}" alt="${project.title}">
          <div class="project-card__content">
            <h3 class="project-card__title">${project.title}</h3>
            <p class="project-card__meta">${project.category} · ${project.year}</p>
            <p class="project-card__description">${project.description}</p>
          </div>
        </article>
      `;
    }
    ```

    Dans `init()` :

    ```js
    const grid = document.querySelector('.projects__grid');
    grid.innerHTML = createProjectCard(projects[0]);
    ```

### Étape 4 : toutes les cartes

**Objectif** : une carte par projet, sans écrire une seule carte à la main.

Remplacez la ligne de l'étape 3 : parcourez `projects` avec `forEach`, et **ajoutez** la carte de chaque projet à la grille.

**Vérification** : 3 cartes dans la page. Ajoutez un 4e projet dans `projects.json` et rechargez : une 4e carte apparaît, sans toucher au HTML.

??? success "Solution"
    ```js
    const grid = document.querySelector('.projects__grid');

    projects.forEach(project => {
      grid.innerHTML += createProjectCard(project);
    });
    ```

    `+=` **ajoute** au contenu existant, alors que `=` le **remplacerait** à chaque tour de boucle (il ne resterait que la dernière carte).

??? note "Autre façon : `map()` + `join()`"
    ```js
    grid.innerHTML = projects.map(createProjectCard).join('');
    ```

    `map()` transforme chaque projet en HTML, `join('')` colle le tout, et on insère en **une seule** fois. C'est la version utilisée dans les pages du portfolio. Les deux sont correctes : choisissez celle que vous comprenez le mieux.

### Bonus : le lien, seulement s'il existe

**Objectif** : afficher « Voir en ligne » sur les cartes qui ont un `link`, et rien sur les autres.

Dans `createProjectCard()`, ajoutez le lien avec un **opérateur ternaire** : `condition ? si vrai : si faux`.

**Vérification** : « Café du coin » et « Écho » ont un lien, « Biome » n'en a pas, et aucun `undefined` n'apparaît.

??? success "Solution"
    ```js
    ${project.link ? `<a class="project-card__link" href="${project.link}">Voir en ligne</a>` : ''}
    ```

    À placer dans le gabarit, sous la description.

## Et maintenant, votre portfolio

Vous venez de coder, en petit, tout ce que votre portfolio doit faire. Pour le transposer :

- votre `loadProjects()` va dans `js/data.js`, avec l'adresse de **votre** source;
- votre `createProjectCard()` va dans `js/components/project-card.js`, avec **vos** classes et **votre** structure de carte;
- votre `init()` va dans `js/main.js`.

[:material-database: Charger les données du portfolio](../../projets/portfolio/donnees/index.md){ .md-button .md-button--primary }
