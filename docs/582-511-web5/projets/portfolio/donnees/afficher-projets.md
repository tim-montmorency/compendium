# Afficher les projets

!!! abstract "L'essentiel en 3 points"
    1. `main.js` attend les données de `loadProjects()`, puis génère une carte par projet. Ce code est **le même pour toutes les sources** (JSON local, Google Sheets, Airtable).
    2. Une fonction `createProjectCard(project)` transforme **un** projet en HTML. On l'applique ensuite à tout le tableau.
    3. Pour une structure multipages, `project.html?id=cafe-du-coin` lit le paramètre `id` avec `URLSearchParams`, puis retrouve le bon projet avec `find()`.

[:material-arrow-left: Retour : choisir sa source](index.md){ .md-button }

!!! info "Avant de commencer"
    - Votre `loadProjects()` doit déjà fonctionner : le test `console.log(projects[0].title)` affiche un titre dans la console. Sinon, retournez à la page de votre source.
    - Vous avez fait l'[exercice « Du JSON à la carte »](../../../exercices/ex-json-cartes/index.md) : c'est le même mécanisme. Cette page vous guide pour l'appliquer à **votre** portfolio.

!!! tip "Comment utiliser cette page"
    Cette page ne contient **pas** de code complet à copier-coller : votre portfolio n'a pas la même structure que celui du voisin. Vous y trouverez les étapes, les notions clés et des squelettes à compléter. Écrivez votre code vous-mêmes, et ouvrez le [récap JS](../../../js/recap-js.md) quand une notion vous échappe.

## 1. Le conteneur dans le HTML

Dans `index.html`, un conteneur **vide** là où les cartes doivent apparaître. Les cartes que vous aviez codées à la main en HTML/CSS servent maintenant de **modèle** : on les retire du HTML, et on reproduit leur structure en JavaScript.

```html
<div class="projects__grid">
  <!-- les cartes sont générées par js/main.js -->
</div>
```

!!! tip "Gardez votre CSS tel quel"
    Si le HTML généré par JavaScript utilise **exactement les mêmes classes** que vos cartes codées à la main, votre CSS s'applique sans aucune modification. Copiez la structure de votre carte actuelle avant de la retirer du HTML.

## 2. Une carte : `js/components/project-card.js`

Une fonction qui reçoit **un** projet et **retourne** le HTML de **sa** carte, avec un gabarit littéral : les accents graves `` ` `` et `${...}` pour insérer une valeur.

Le squelette, à compléter avec **votre** structure de carte et **vos** classes :

```js
function createProjectCard(project) {
  return `
    <article class="project-card">
      <h3 class="project-card__title">${project.title}</h3>
      <!-- à vous : image, catégorie, année, description, lien ou bouton... -->
    </article>
  `;
}
```

!!! question "À vérifier avant de continuer"
    Dans la console : `createProjectCard(projects[0])` doit retourner une chaîne de HTML complète, avec les vraies valeurs de votre premier projet.

**Selon votre structure de navigation**, la carte se termine par :

- **Multipages** : un lien vers `project.html?id=` suivi de l'`id` du projet (section 5).
- **One-pager avec modale** : un bouton qui garde l'`id` du projet dans un attribut `data-id` (section 4).
- **One-pager avec carrousel** : même principe de carte, c'est votre composant carrousel qui les fait défiler.

### Les propriétés optionnelles

Un projet sans `link` afficherait `href="undefined"`. On n'affiche un élément que si la propriété existe, avec l'**opérateur ternaire** :

```js
${condition ? `HTML si vrai` : ''}
```

Lu à voix haute : « si la condition est vraie, affiche ce HTML, sinon rien ». À vous de l'appliquer à `project.link`, `project.video`, etc.

## 3. Toutes les cartes : `js/main.js`

`main.js` est le chef d'orchestre. Sa fonction `init()` fait 3 choses, dans cet ordre :

```js
async function init() {
  // 1. Sélectionner le conteneur .projects__grid
  // 2. Attendre les projets : await loadProjects()
  // 3. Insérer une carte par projet dans le conteneur
}

init();
```

Pour l'étape 3, deux façons, déjà vues dans l'exercice :

| Façon | Idée |
|---|---|
| `forEach` + `+=` | Pour chaque projet, **ajouter** sa carte au `innerHTML` du conteneur. |
| `map()` + `join('')` | Transformer tout le tableau en cartes, coller le tout, puis l'insérer en **une seule** fois. |

!!! note "Laquelle choisir?"
    Les deux fonctionnent. `map()` + `join('')` modifie le DOM une seule fois, ce qui est un peu plus efficace : c'est ce que vise l'indicateur de la grille d'évaluation sur le chargement efficace des données. Choisissez celle que vous comprenez et pouvez expliquer.

### Gérer l'échec du chargement

Un chargement peut échouer : fichier introuvable, jeton invalide, pas de réseau. Sans gestion d'erreur, la section reste vide et le visiteur ne sait pas pourquoi. Entourez les étapes 2 et 3 :

| Syntaxe | Structure |
|---|---|
| `async` / `await` | `try { ... } catch (error) { ... }` |
| `.then()` | `loadProjects().then(projects => { ... }).catch(error => { ... })` |

Dans le `catch` : un `console.error(error)` pour vous, et un court message dans le conteneur pour le visiteur.

Utilisez la même syntaxe que dans votre `data.js`.

!!! warning "Gabarits et `innerHTML` : seulement avec vos propres données"
    Insérer du texte dans `innerHTML` est sans danger ici parce que les données sont **les vôtres**. Avec du texte saisi par des visiteurs (un formulaire, des commentaires), ce serait une faille XSS, que vous avez vue dans vos cours précédents.

## 4. One-pager avec modale

**Le principe** : une seule modale, vide, réutilisée pour tous les projets. Au clic sur une carte, on la remplit avec le bon projet, puis on l'ouvre.

Dans `index.html`, l'élément natif `<dialog>`, qui gère déjà le fond assombri et la touche Échap :

```html
<dialog class="modal">
  <div class="modal__content"></div>
  <button class="modal__close">Fermer</button>
</dialog>
```

Les étapes, **dans** `init()`, après l'insertion des cartes (pour avoir accès à `projects`) :

1. Un **seul** écouteur `click` sur le conteneur des cartes, plutôt qu'un par carte : c'est la **délégation d'événements**.
2. Dans l'écouteur, retrouver le bouton cliqué, s'il y en a un.
3. Lire son `data-id`.
4. Retrouver le projet correspondant dans le tableau déjà chargé.
5. Remplir `.modal__content` avec un gabarit littéral, puis ouvrir la modale.
6. Ailleurs : le bouton « Fermer » ferme la modale.

Les outils dont vous avez besoin :

| Notion | Ce que ça fait |
|---|---|
| `event.target.closest('.votre-bouton')` | Retrouve le bouton cliqué, même si on a cliqué sur un élément à l'intérieur. `null` si le clic était ailleurs. |
| `bouton.dataset.id` | Lit l'attribut `data-id` d'un élément. |
| `projects.find(p => p.id === ...)` | Retourne **le** projet qui a cet `id`. Aucun nouveau `fetch()`. |
| `modal.showModal()` / `modal.close()` | Ouvre et ferme un `<dialog>`. |

## 5. Multipages : `project.html` et les paramètres d'URL

### Le principe

Chaque carte pointe vers la **même** page, avec un paramètre différent :

```text
project.html?id=cafe-du-coin
project.html?id=biome
```

Tout ce qui suit le `?` s'appelle la **chaîne de requête** (*query string*). Elle est composée de paires `nom=valeur`. `project.html` est un gabarit vide : il lit l'`id` dans l'adresse, recharge les données, et affiche seulement le projet correspondant. Une seule page HTML pour tous vos projets, pas de routeur, pas de cadriciel.

### Le HTML de `project.html`

Mêmes `<head>`, en-tête et pied de page que `index.html`, avec un conteneur vide pour le détail. Les scripts :

```html
<script src="js/data.js" defer></script>
<script src="js/project.js" defer></script>
```

`data.js` est le **même fichier** que pour la page d'accueil : on réutilise `loadProjects()` sans rien changer.

### Lire l'`id` dans l'adresse

C'est la seule notion vraiment nouvelle aujourd'hui :

```js
const params = new URLSearchParams(window.location.search);
const projectId = params.get('id'); // "cafe-du-coin", ou null si absent
```

- `window.location.search` : la partie de l'adresse qui commence au `?`, soit `"?id=cafe-du-coin"`.
- `new URLSearchParams(...)` : un objet qui sait lire cette chaîne.
- `.get('id')` : la valeur du paramètre `id`.

### Les étapes de `js/project.js`

```js
async function showProject() {
  // 1. Sélectionner le conteneur du détail
  // 2. Lire l'id dans l'adresse (ci-dessus)
  // 3. Attendre les projets : await loadProjects()
  // 4. Retrouver LE projet qui a cet id, avec find()
  // 5. S'il n'existe pas : message « introuvable » + lien de retour, puis return
  // 6. Sinon : remplir le conteneur avec un gabarit littéral
}

showProject();
```

Sans oublier la gestion d'erreur, comme dans `main.js`.

!!! tip "Deux détails qui font professionnel"
    - `document.title` : changez le titre de l'onglet pour celui du projet.
    - Le cas « introuvable » (étape 5) : quelqu'un peut toujours taper une adresse erronée. Testez-le avec `project.html?id=nimporte-quoi`.

!!! warning "Chaque `id` doit être unique"
    Deux projets avec le même `id`, et `find()` affichera toujours le premier. Pas d'espaces ni d'accents non plus : un `id` se retrouve dans une adresse web.

### Bonus : afficher la galerie

`project.gallery` est un tableau d'URL. C'est le même patron que pour les cartes, mais à l'intérieur d'un gabarit : transformer chaque URL en `<img>`, puis coller le tout. Et seulement si la galerie existe (ternaire).

## 6. Pièges fréquents

- **`undefined` affiché dans la page** : une propriété est mal nommée (`project.Title` au lieu de `project.title`) ou absente de vos données. Comparez avec un `console.log(project)`.
- **`loadProjects is not defined`** : `data.js` n'est pas lié dans cette page, ou il est lié **après** le script qui l'utilise.
- **Une seule carte s'affiche, la dernière** : `=` au lieu de `+=` dans une boucle `forEach`.
- **Les cartes s'affichent mais sans style** : les classes générées en JS ne correspondent pas exactement à celles de votre CSS.
- **Rien ne s'affiche, aucune erreur** : vérifiez que le sélecteur de votre `querySelector()` existe vraiment dans le HTML de cette page.
- **Le clic sur une carte ne fait rien** : l'écouteur est placé avant l'insertion des cartes, ou le sélecteur de `closest()` ne correspond pas à la classe de votre bouton.
- **Texte alternatif** : `alt="${project.title}"` est un minimum. Pour de meilleures descriptions, ajoutez une propriété `alt` à vos données.

## 7. Avant de partir

- [ ] Les cartes de la page d'accueil sont générées à partir de vos données, plus aucune n'est écrite à la main dans le HTML.
- [ ] Le détail d'un projet s'affiche (modale, carrousel ou `project.html`).
- [ ] Un projet sans `link` ou sans `video` n'affiche pas `undefined`.
- [ ] Vous pouvez expliquer chaque ligne de votre code, sans l'aide de Copilot.
- [ ] Commit avec un message clair, ex. `Chargement des projets depuis projects.json`.
- [ ] Entrée dans `JOURNAL.md` pour chaque prompt Copilot délibéré (pas les complétions en ligne).
