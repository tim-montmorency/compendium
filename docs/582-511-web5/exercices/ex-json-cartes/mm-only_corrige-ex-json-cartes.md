# Corrigé : du JSON à la carte (cours 5.2)

Notes pour l'enseignante, pas une page à publier.

## Partie 1 : défis dans la console (10-15 min)

Mode Wooclap : un défi à la fois, 1 à 2 minutes chacun, on demande à quelqu'un de dicter sa ligne, on l'exécute au projecteur, puis on passe au suivant.

| # | Solution | Notion à nommer |
|---|---|---|
| 1 | `projects[1].title` | L'index commence à 0. On lit de gauche à droite : le tableau → l'élément `[1]` → la propriété `.title`. |
| 2 | `projects.forEach(project => console.log(project.year))` | `forEach` exécute la fonction une fois par élément. `project` (singulier) = l'élément du tour. |
| 3 | `` `${projects[1].title} (${projects[1].year})` `` | Accents graves, `${}` insère une valeur. C'est l'outil qui fabriquera le HTML des cartes. |
| 4 | `projects.find(project => project.id === 'echo')` | Retourne **un** objet (ou `undefined`). Servira à `project.html?id=echo` ou à la modale. |
| 5 | `projects.map(project => project.title)` | Retourne un **nouveau tableau** de même longueur. Comparer avec `forEach`, qui ne retourne rien. |

Pièges probables :

- `projects[2].title` au défi 1 (index qui commence à 1 dans leur tête).
- Guillemets simples au lieu d'accents graves au défi 3 : `${...}` s'affiche tel quel.
- `=` au lieu de `===` au défi 4 : erreur ou mauvais résultat, bon moment pour le rappeler.
- Défi 5 : si quelqu'un propose `forEach`, l'essayer au projecteur : ça retourne `undefined`. Excellente démonstration de la différence.

## Partie 2 : exercice guidé (30-40 min)

Code en direct, eux en même temps. Laisser 2-3 minutes par étape pour qu'ils essaient **avant** de montrer la solution. Circuler.

Points à dire à voix haute :

- **Étape 1** : `fetch()` retourne une promesse, pas les données. `await` attend. Montrer ce qui arrive sans `await` : `console.log(fetch('data/projects.json'))` affiche `Promise {<pending>}`.
- **Étape 1** : si rien ne s'affiche, regarder l'onglet Réseau (404? mauvais chemin?) et vérifier Live Server.
- **Étape 3** : `createProjectCard` **retourne** du texte, elle n'affiche rien. C'est `innerHTML` qui l'insère. Séparer « fabriquer » et « insérer ».
- **Étape 4** : le piège du `=` au lieu de `+=` (une seule carte affichée, la dernière). Le laisser arriver, puis le faire expliquer.
- **Étape 4** : ajouter un 4e projet dans le JSON en direct. C'est le moment « wow » : une carte de plus, zéro HTML.
- **Transition** : « Votre portfolio, c'est exactement ça. Seules l'adresse du `fetch` et la structure de votre carte changent. »

## Solution complète de `js/main.js`

```js
// ÉTAPE 1 : charger les données avec fetch()
async function loadProjects() {
  const response = await fetch('data/projects.json');
  const projects = await response.json();
  return projects;
}

// ÉTAPE 3 : un gabarit littéral pour UNE carte (+ BONUS : ternaire)
function createProjectCard(project) {
  return `
    <article class="project-card">
      <img class="project-card__image" src="${project.image}" alt="${project.title}">
      <div class="project-card__content">
        <h3 class="project-card__title">${project.title}</h3>
        <p class="project-card__meta">${project.category} · ${project.year}</p>
        <p class="project-card__description">${project.description}</p>
        ${project.link ? `<a class="project-card__link" href="${project.link}">Voir en ligne</a>` : ''}
      </div>
    </article>
  `;
}

async function init() {
  const projects = await loadProjects();
  console.table(projects);

  // ÉTAPE 2 : forEach
  projects.forEach(project => {
    console.log(project.title);
  });

  // ÉTAPE 4 : toutes les cartes
  const grid = document.querySelector('.projects__grid');
  projects.forEach(project => {
    grid.innerHTML += createProjectCard(project);
  });
}

init();
```

Testée dans Chromium : 3 cartes, 2 liens « Voir en ligne », aucune erreur.
