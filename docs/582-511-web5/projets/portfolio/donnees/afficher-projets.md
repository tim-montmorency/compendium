# Afficher les projets

!!! abstract "L'essentiel en 3 points"
    1. `main.js` attend les données de `chargerProjets()`, puis génère une carte par projet. Ce code est **le même pour toutes les sources** (JSON local, Google Sheets, Airtable).
    2. Une fonction `creerCarteProjet(projet)` transforme **un** projet en HTML. On l'applique à tout le tableau avec `map()`.
    3. Pour une structure multipages, `projet.html?id=cafe-du-coin` lit le paramètre `id` avec `URLSearchParams`, puis retrouve le bon projet avec `find()`.

[:material-arrow-left: Retour : choisir sa source](index.md){ .md-button }

!!! info "Avant de commencer"
    Votre `chargerProjets()` doit déjà fonctionner : le test `console.log(projets[0].titre)` affiche un titre dans la console. Sinon, retournez à la page de votre source.

## 1. Le conteneur dans le HTML

Dans `index.html`, un conteneur **vide** là où les cartes doivent apparaître. Les cartes que vous aviez codées à la main en HTML/CSS servent maintenant de **modèle** : on les retire du HTML, et on reproduit leur structure en JavaScript.

```html
<section class="projets">
  <h2 class="projets__titre">Projets</h2>
  <div class="projets__grille">
    <!-- les cartes sont générées par js/main.js -->
  </div>
</section>
```

!!! tip "Gardez votre CSS tel quel"
    Si le HTML généré par JavaScript utilise **exactement les mêmes classes** que vos cartes codées à la main, votre CSS s'applique sans aucune modification. Copiez la structure de votre carte actuelle avant de la retirer du HTML.

## 2. Une carte : `js/composants/carte-projet.js`

Une fonction qui reçoit **un** projet et retourne le HTML de **sa** carte, avec un gabarit littéral (les accents graves `` ` ``, et `${...}` pour insérer une valeur).

```js
// js/composants/carte-projet.js

function creerCarteProjet(projet) {
  return `
    <article class="carte-projet">
      <img class="carte-projet__image" src="${projet.image}" alt="${projet.titre}">
      <div class="carte-projet__contenu">
        <h3 class="carte-projet__titre">${projet.titre}</h3>
        <p class="carte-projet__meta">${projet.categorie} · ${projet.annee}</p>
        <p class="carte-projet__description">${projet.description}</p>
        <a class="carte-projet__lien" href="projet.html?id=${projet.id}">Voir le projet</a>
      </div>
    </article>
  `;
}
```

Adaptez les classes et la structure à **votre** design : c'est votre composant, pas celui-ci.

!!! note "Selon votre structure de navigation"
    - **Multipages** : le lien pointe vers `projet.html?id=${projet.id}` (section 5).
    - **One-pager avec modale** : un bouton plutôt qu'un lien, qui garde l'`id` du projet dans un attribut `data-` (section 4).
    - **One-pager avec carrousel** : même principe de carte, c'est votre composant carrousel qui les fait défiler.

### Les propriétés optionnelles

Un projet sans `lien` afficherait `href="undefined"`. On n'affiche un élément que si la propriété existe, avec l'opérateur ternaire :

```js
${projet.lien ? `<a class="carte-projet__externe" href="${projet.lien}" target="_blank">Voir en ligne</a>` : ''}
```

Lu à voix haute : « s'il y a un lien, affiche la balise `<a>`, sinon rien ».

## 3. Toutes les cartes : `js/main.js`

```js
// js/main.js

async function init() {
  const grille = document.querySelector('.projets__grille');

  try {
    const projets = await chargerProjets();
    grille.innerHTML = projets.map(creerCarteProjet).join('');
  } catch (erreur) {
    console.error(erreur);
    grille.innerHTML = '<p>Les projets n’ont pas pu être chargés.</p>';
  }
}

init();
```

Ligne par ligne :

- `await chargerProjets()` : on attend que les données arrivent, peu importe leur source.
- `projets.map(creerCarteProjet)` : chaque projet du tableau devient une chaîne de HTML. Résultat : un tableau de cartes.
- `.join('')` : on colle toutes ces chaînes ensemble en une seule.
- `grille.innerHTML = ...` : on insère le tout dans le conteneur, en une seule opération.
- `try` / `catch` : si le chargement échoue (fichier introuvable, jeton invalide, pas de réseau), l'utilisateur voit un message plutôt qu'une section vide, et l'erreur détaillée reste dans la console pour vous.

!!! note "Pourquoi un seul `innerHTML` plutôt qu'une boucle qui ajoute les cartes une à une?"
    Modifier le DOM une seule fois est plus rapide que le modifier à chaque tour de boucle. C'est aussi ce que vise l'indicateur de la grille d'évaluation sur le chargement efficace des données.

!!! warning "Gabarits et `innerHTML` : seulement avec vos propres données"
    Insérer du texte dans `innerHTML` est sans danger ici parce que les données sont **les vôtres**. Avec du texte saisi par des visiteurs (un formulaire, des commentaires), ce serait une faille XSS, que vous avez vue dans vos cours précédents.

## 4. One-pager avec modale

Dans la carte, un bouton qui garde l'identifiant du projet :

```js
<button class="carte-projet__bouton" data-id="${projet.id}">Voir le projet</button>
```

Dans `index.html`, une seule modale, vide, réutilisée pour tous les projets :

```html
<dialog class="modale">
  <div class="modale__contenu"></div>
  <button class="modale__fermer">Fermer</button>
</dialog>
```

Dans `main.js`, après avoir inséré les cartes :

```js
const modale = document.querySelector('.modale');

grille.addEventListener('click', (evenement) => {
  const bouton = evenement.target.closest('.carte-projet__bouton');
  if (!bouton) return; // le clic n'était pas sur un bouton de carte

  const projet = projets.find(p => p.id === bouton.dataset.id);
  modale.querySelector('.modale__contenu').innerHTML = `
    <h2>${projet.titre}</h2>
    <img src="${projet.image}" alt="${projet.titre}">
    <p>${projet.description}</p>
  `;
  modale.showModal();
});

document.querySelector('.modale__fermer')
  .addEventListener('click', () => modale.close());
```

- **Un seul écouteur sur la grille**, plutôt qu'un par carte : `closest()` retrouve le bouton cliqué. C'est la délégation d'événements.
- `dataset.id` lit l'attribut `data-id` du bouton.
- `find()` retrouve, dans le tableau déjà chargé, le projet qui a cet `id`. Aucun nouveau `fetch()`.
- `<dialog>` et `showModal()` : la modale native du navigateur, qui gère déjà le fond assombri et la touche Échap.

Ce code doit être placé **à l'intérieur** de `init()`, après la ligne `grille.innerHTML = ...`, pour avoir accès à la variable `projets`.

## 5. Multipages : `projet.html` et les paramètres d'URL

### Le principe

Chaque carte pointe vers la **même** page, avec un paramètre différent :

```text
projet.html?id=cafe-du-coin
projet.html?id=biome
```

Tout ce qui suit le `?` s'appelle la **chaîne de requête** (*query string*). Elle est composée de paires `nom=valeur`. `projet.html` est un gabarit vide : il lit l'`id` dans l'adresse, recharge les données, et affiche seulement le projet correspondant. Une seule page HTML pour tous vos projets, pas de routeur, pas de cadriciel.

### Le HTML de `projet.html`

Mêmes `<head>`, en-tête et pied de page que `index.html`, avec un conteneur vide pour le détail. Les scripts :

```html
<script src="js/data.js" defer></script>
<script src="js/projet.js" defer></script>
```

`data.js` est le **même fichier** que pour la page d'accueil : on réutilise `chargerProjets()` sans rien changer.

### Le code de `js/projet.js`

```js
// js/projet.js

async function afficherProjet() {
  const conteneur = document.querySelector('.projet');

  // 1. Lire l'id dans l'adresse : projet.html?id=cafe-du-coin
  const parametres = new URLSearchParams(window.location.search);
  const idProjet = parametres.get('id'); // "cafe-du-coin"

  try {
    // 2. Recharger les données (même fonction que sur la page d'accueil)
    const projets = await chargerProjets();

    // 3. Retrouver le bon projet
    const projet = projets.find(p => p.id === idProjet);

    if (!projet) {
      conteneur.innerHTML = '<p>Ce projet est introuvable.</p> <a href="index.html">Retour aux projets</a>';
      return;
    }

    // 4. L'afficher
    document.title = `${projet.titre} | Portfolio`;
    conteneur.innerHTML = `
      <h1 class="projet__titre">${projet.titre}</h1>
      <p class="projet__meta">${projet.categorie} · ${projet.annee}</p>
      <img class="projet__image" src="${projet.image}" alt="${projet.titre}">
      <p class="projet__description">${projet.description}</p>
      ${projet.video ? `<iframe class="projet__video" src="${projet.video}" title="Vidéo : ${projet.titre}" allowfullscreen></iframe>` : ''}
    `;
  } catch (erreur) {
    console.error(erreur);
    conteneur.innerHTML = '<p>Le projet n’a pas pu être chargé.</p>';
  }
}

afficherProjet();
```

- `window.location.search` : la partie de l'adresse qui commence au `?`, soit `"?id=cafe-du-coin"`.
- `new URLSearchParams(...)` : un objet qui sait lire cette chaîne. `.get('id')` retourne la valeur, ou `null` si le paramètre est absent.
- `find()` retourne le **premier** projet dont l'`id` correspond, ou `undefined` s'il n'y en a aucun. D'où le cas « introuvable » : quelqu'un peut toujours taper une adresse erronée.
- `document.title` : le titre de l'onglet change selon le projet, un détail qui fait professionnel.

!!! warning "Chaque `id` doit être unique"
    Deux projets avec le même `id`, et `find()` affichera toujours le premier. Pas d'espaces ni d'accents non plus : un `id` se retrouve dans une adresse web.

### Bonus : afficher la galerie

```js
${projet.galerie && projet.galerie.length ? `
  <div class="projet__galerie">
    ${projet.galerie.map(url => `<img src="${url}" alt="${projet.titre}">`).join('')}
  </div>
` : ''}
```

Le même patron que pour les cartes : `map()` puis `join('')`, cette fois à l'intérieur d'un gabarit.

## 6. Pièges fréquents

- **`undefined` affiché dans la page** : une propriété est mal nommée (`projet.Titre` au lieu de `projet.titre`) ou absente de vos données. Comparez avec un `console.log(projet)`.
- **`chargerProjets is not defined`** : `data.js` n'est pas lié dans cette page, ou il est lié **après** le script qui l'utilise.
- **Les cartes s'affichent mais sans style** : les classes générées en JS ne correspondent pas exactement à celles de votre CSS.
- **Rien ne s'affiche, aucune erreur** : vérifiez que le sélecteur de `querySelector('.projets__grille')` existe vraiment dans le HTML de cette page.
- **Texte alternatif** : `alt="${projet.titre}"` est un minimum. Pour de meilleures descriptions, ajoutez une propriété `alt` à vos données.

## 7. Avant de partir

- [ ] Les cartes de la page d'accueil sont générées à partir de vos données, plus aucune n'est écrite à la main dans le HTML.
- [ ] Le détail d'un projet s'affiche (modale, carrousel ou `projet.html`).
- [ ] Un projet sans `lien` ou sans `video` n'affiche pas `undefined`.
- [ ] Commit avec un message clair, ex. `Chargement des projets depuis projets.json`.
- [ ] Entrée dans `JOURNAL.md` pour chaque prompt Copilot délibéré (pas les complétions en ligne).
