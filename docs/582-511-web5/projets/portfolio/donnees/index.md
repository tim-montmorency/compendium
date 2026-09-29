# Charger les données du portfolio

!!! abstract "L'essentiel en 3 points"
    1. Vos projets ne sont pas écrits dans le HTML : ils vivent dans une **source de données** (JSON local, Google Sheets ou Airtable) et sont chargés en JavaScript avec `fetch()`.
    2. Peu importe la source, `js/data.js` doit toujours retourner **la même chose** : un tableau de projets, avec les mêmes noms de propriétés.
    3. Le code qui affiche vos projets (cartes, modale, `project.html`) est **identique pour tout le monde**. Changer de source plus tard ne demande de modifier que `data.js`.

## Le principe

![Schéma : une source de données au choix, lue par fetch() dans data.js, qui retourne un tableau de projets utilisé pour les cartes et pour le détail](./assets/schema-chargement-donnees.svg)

Chaque page-source ci-dessous vous guide jusqu'à **votre** version de `loadProjects()`. Ensuite, tout le monde continue sur la même page : *Afficher les projets*.

## Choisir sa source

C'est le choix que vous avez justifié dans `PLANIFICATION.md` au cours 3.2.

| Source | Pour qui | Modifier le contenu sans toucher au code | Compte requis |
|---|---|---|---|
| **JSON local** | Tout le monde. Choix par défaut, le plus simple et le plus fiable. | Non : on modifie le fichier, puis on commit | Aucun |
| **Google Sheets + opensheet** | Ceux qui ont un compte Google personnel et aiment travailler dans un tableur. | Oui | Google |
| **Airtable** | Ceux qui veulent une vraie interface de gestion de données (images hébergées, types de champs). | Oui | Airtable (n'importe quel courriel, incluant celui du collège) |

!!! tip "Dans le doute : JSON local"
    Une base de données en ligne n'est pas plus « avancée » en soi. Elle est utile seulement si vous voulez vraiment modifier votre contenu sans toucher au code ni redéployer.

[:material-code-json: JSON local (et conversion depuis Excel)](json-local.md){ .md-button }

[:material-google-spreadsheet: Google Sheets + opensheet](google-sheets-opensheet.md){ .md-button }

[:material-table-large: Airtable](airtable.md){ .md-button }

## Le format commun des données

Toutes les sources doivent produire des projets qui ont **exactement ces noms de propriétés**. C'est ce qui permet au code d'affichage d'être le même pour tout le monde.

| Propriété | Obligatoire | Contenu | Exemple |
|---|---|---|---|
| `id` | Oui | Identifiant unique, sans espaces ni accents. Sert à `project.html?id=...` | `cafe-du-coin` |
| `title` | Oui | Titre du projet | `Café du coin` |
| `description` | Oui | Courte description | `Identité visuelle et site web...` |
| `category` | Oui | Type de projet | `Design web` |
| `year` | Oui | Année de réalisation | `2025` |
| `image` | Oui | Chemin ou URL de l'image principale | `assets/images/cafe.jpg` |
| `link` | Non | Lien externe (site en ligne, Behance, dépôt...) | `https://...` |
| `video` | Non | Lien d'intégration (embed) complet YouTube ou Vimeo | `https://www.youtube.com/embed/...` |
| `gallery` | Non | Plusieurs images supplémentaires (tableau d'URL) | `["assets/images/cafe-2.jpg", ...]` |

!!! warning "Noms de propriétés : en anglais, en minuscules, sans espaces ni accents"
    `category`, pas `Category` ni `catégorie`. En JavaScript, `project.category` fonctionne; une majuscule ou un accent de trop donne `undefined`, une source de bogues garantie. Ça vaut pour les clés de votre JSON, les en-têtes de colonnes de votre Google Sheet et les noms de champs d'Airtable. Revoir : [Récap : objets et propriétés](../../../js/recap-js.md#objets)

!!! tip "Commencez par un seul projet, dupliqué"
    Remplissez d'abord **un** projet complet, puis dupliquez-le 3 ou 4 fois en changeant seulement l'`id` et le `title`. Vous allez sûrement ajuster vos propriétés en codant vos cartes et votre détail : c'est plus simple avec un seul vrai projet à corriger. Le vrai contenu vient une fois la structure stable.

Vous pouvez ajouter d'autres propriétés propres à votre portfolio (ex. `tools`, `client`, `role`). Gardez simplement la même règle de nommage, et le même nom dans toutes vos données.

## Où va le code

Selon l'[arborescence du dépôt](../arborescence-portfolio.md) :

| Fichier | Rôle | Revoir |
|---|---|---|
| `js/data.js` | Déclarer la fonction `loadProjects()` : aller chercher les données avec `fetch()`, de façon asynchrone (`async`/`await` ou `.then()`), et les **retourner** dans le format commun. Si la réponse n'est pas correcte (`response.ok` faux), elle **signale** l'erreur avec `throw`. C'est le seul fichier qui change selon la source de vos données. | [fetch et async](../../../js/recap-js.md#async), [erreurs](../../../js/recap-js.md#erreurs) |
| `js/components/project-card.js` | Déclarer la fonction `createProjectCard(project)` : elle transforme **un** projet en HTML (une carte) et le **retourne**. Elle n'insère rien dans la page. | [gabarits littéraux](../../../js/recap-js.md#gabarits) |
| `js/main.js` | Le chef d'orchestre, dans une fonction `init()` : elle appelle et attend `loadProjects()` (`async`/`await` ou `.then()`), puis insère une carte par projet dans la page. C'est ici qu'on **attrape** les erreurs (`try`/`catch` ou `.catch()`) pour afficher un message au visiteur. **N'oubliez pas d'appeler `init();`** à la fin du fichier : déclarer une fonction ne l'exécute pas. | [async](../../../js/recap-js.md#async), [forEach](../../../js/recap-js.md#foreach), [map et join](../../../js/recap-js.md#map-filter-find), [erreurs](../../../js/recap-js.md#erreurs) |
| `js/components/modal.js` | Seulement pour un one-pager avec modale : la logique d'ouverture et de fermeture. | [délégation](../../../js/recap-js.md#delegation), [dataset](../../../js/recap-js.md#dataset), [find](../../../js/recap-js.md#map-filter-find) |
| `js/project.js` | Seulement en multipages : le point d'entrée de `project.html` (lit l'`id` dans l'adresse, attend `loadProjects()`, affiche **un** projet). | [URLSearchParams](../../../js/recap-js.md#urlsearchparams), [find](../../../js/recap-js.md#map-filter-find) |
| `data/projects.json` | Seulement si vous avez choisi le JSON local. | [JSON](../../../js/recap-js.md#json) |

Dans le `<head>` de `index.html`, dans cet ordre :

```html
<script src="js/data.js" defer></script>
<script src="js/components/project-card.js" defer></script>
<script src="js/main.js" defer></script>
```

`defer` exécute les scripts après la lecture du HTML, et dans l'ordre où ils sont écrits : `main.js` peut donc utiliser les fonctions déclarées dans les deux fichiers précédents. Si vous avez une modale, ajoutez `js/components/modal.js` avant `main.js`.

Dans `project.html` (multipages seulement) : `js/data.js`, puis `js/project.js`.

!!! info "Signaler l'erreur dans `data.js`, l'attraper dans `main.js`"
    Ne mettez **pas** de `try`/`catch` dans `data.js` : l'erreur serait « avalée », `loadProjects()` ne retournerait rien, et `main.js` planterait plus loin avec un message incompréhensible (`Cannot read properties of undefined`). `data.js` lance l'erreur (`throw`), `main.js` l'attrape et affiche un message. Revoir : [Récap : gérer les erreurs](../../../js/recap-js.md#erreurs)

## La suite

Une fois votre source prête et `loadProjects()` testée dans la console :

[:material-cards-outline: Afficher les projets (et page project.html)](afficher-projets.md){ .md-button .md-button--primary }
