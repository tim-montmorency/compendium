# Source : Google Sheets + opensheet

!!! abstract "L'essentiel en 3 points"
    1. Vos projets sont dans une feuille Google Sheets, une ligne par projet. Vous les modifiez dans le tableur, le site se met à jour sans toucher au code.
    2. [opensheet](https://github.com/benborgers/opensheet) est un petit service gratuit qui transforme une feuille partagée en JSON : une seule URL, aucune clé d'API, aucun jeton à cacher.
    3. La réponse est déjà un tableau d'objets, presque identique à un `projects.json` local.

[:material-arrow-left: Retour : choisir sa source](index.md){ .md-button }

!!! info "Pour qui?"
    Pour ceux qui ont un **compte Google personnel**. Au collège, tout le monde n'en a pas : si ce n'est pas votre cas, choisissez le JSON local ou Airtable.

## 1. Préparer les données

1. Créer une nouvelle feuille dans Google Sheets.
2. Renommer l'onglet du bas (par défaut « Feuille 1 ») en `Projects`, **sans espace ni accent**.
3. **Première ligne = noms de propriétés** du [format commun](index.md#le-format-commun-des-donnees) : `id`, `title`, `description`, `category`, `year`, `image`, `link`, `video`, `gallery`.
4. Une ligne par projet à partir de la ligne 2.

| id | title | description | category | year | image | link | gallery |
|---|---|---|---|---|---|---|---|
| cafe-du-coin | Café du coin | Identité visuelle... | Design web | 2025 | https://... | https://... | https://...2.jpg, https://...3.jpg |
| biome | Biome | Modélisation 3D... | 3D | 2025 | https://... | | |

!!! warning "Les images doivent être des URL"
    Une image **insérée dans une cellule** (Insertion → Image) ne passe pas dans le JSON. La colonne `image` doit contenir du **texte** : soit une URL complète (`https://...`), soit un chemin vers une image de votre dépôt (`assets/images/cafe-du-coin.jpg`).

Pour la `gallery`, on écrit plusieurs URL dans la même cellule, **séparées par des virgules**. Le code de `data.js` les transformera en tableau.

## 2. Obtenir l'URL

### Partager la feuille en lecture

**Partager** (en haut à droite) → **Accès général** → **Tous les utilisateurs disposant du lien** → rôle **Lecteur**.

!!! note "Ce que ça veut dire"
    N'importe qui avec le lien peut *lire* la feuille. C'est normal : ce sont les mêmes informations que celles affichées publiquement sur votre portfolio. Ne mettez rien de privé dans cette feuille.

### Trouver l'ID de la feuille

Dans l'adresse de votre feuille, l'ID est la longue chaîne entre `/d/` et `/edit` :

```text
https://docs.google.com/spreadsheets/d/1AbC2dEf3GhI4jKl5MnO6pQr7StU8vWx9Yz/edit#gid=0
                                       └──────────── ID de la feuille ────────┘
```

### Construire l'URL opensheet

```text
https://opensheet.elk.sh/ID_DE_LA_FEUILLE/Projects
```

Le dernier segment est le **nom de l'onglet**. Collez cette URL directement dans votre navigateur : vous devez voir vos projets en JSON. Si oui, la source est prête.

## 3. Le code de `js/data.js`

C'est le même `loadProjects()` que pour le JSON local (voir l'[exercice « Du JSON à la carte »](../../../exercices/ex-json-cartes/index.md) et la [page JSON local](json-local.md#3-le-code-de-jsdatajs)). Deux choses changent.

### 1. L'adresse du `fetch()`

C'est de la configuration : gardez l'ID et le nom de l'onglet dans des constantes en haut du fichier, faciles à retrouver.

```js
const SHEET_ID = '1AbC2dEf3GhI4jKl5MnO6pQr7StU8vWx9Yz'; // votre ID
const SHEET_NAME = 'Projects';

// l'adresse à passer à fetch() :
`https://opensheet.elk.sh/${SHEET_ID}/${SHEET_NAME}`
```

### 2. La galerie : du texte au tableau

Si vous n'utilisez pas de galerie, rien à faire : la réponse est déjà dans le format commun, retournez-la telle quelle.

Sinon, dans la feuille, la galerie est un **texte** (`"url1, url2"`). Le format commun attend un **tableau** (`["url1", "url2"]`). Avant de retourner les données :

1. Parcourez les lignes avec `map()`, pour produire un nouveau tableau de projets.
2. Pour chaque ligne, recopiez toutes les colonnes avec la syntaxe de décomposition : `{ ...row }`.
3. Remplacez `gallery` par sa version en tableau : `split(',')` coupe le texte à chaque virgule, et `trim()` retire les espaces autour de chaque URL.
4. Si la cellule est vide, `gallery` doit être un tableau vide `[]` (ternaire).

!!! question "À vérifier"
    `console.log(projects[0].gallery)` doit afficher un tableau d'URL, pas un texte.

## 4. Pièges propres à cette source

- **Tout arrive en texte**, même les nombres : `year` vaut `"2025"`, pas `2025`. Pour notre format commun, c'est correct. Si un jour vous devez trier ou calculer, convertissez avec `Number(project.year)`.
- **Les en-têtes de colonnes deviennent les noms de propriétés**, caractère pour caractère. `Title` avec une majuscule ou `title ` avec une espace à la fin donnent des propriétés différentes de `title`.
- **Cellules vides** : prévoyez que la propriété puisse être vide ou absente (ex. un projet sans `link`). Le code d'affichage doit le gérer, on le voit dans la page suivante.
- **Délai de mise à jour** : opensheet garde la réponse en cache quelques secondes. Si une modification n'apparaît pas tout de suite, attendez un peu et rechargez.
- **Erreur dans la réponse** : si l'URL affiche un message d'erreur plutôt que vos données, vérifiez le partage (« Tous les utilisateurs disposant du lien ») et le nom exact de l'onglet.

!!! note "Un service gratuit maintenu par une seule personne"
    opensheet fonctionne très bien, mais il n'offre aucune garantie. Pour un portfolio scolaire, c'est un compromis raisonnable. Pour un site professionnel à long terme, gardez en tête qu'une copie en JSON local est toujours possible : **Fichier → Télécharger → CSV**, puis la même conversion que pour Excel ([JSON local](json-local.md#2-option-produire-le-json-a-partir-dexcel)).

## 5. Vérifier que ça fonctionne

Temporairement, à la fin de `data.js` :

```js
loadProjects().then(projects => console.log(projects[0].title));
```

Vous voyez le titre de votre premier projet dans la console? Retirez cette ligne de test et passez à l'affichage.

[:material-cards-outline: Afficher les projets](afficher-projets.md){ .md-button .md-button--primary }
