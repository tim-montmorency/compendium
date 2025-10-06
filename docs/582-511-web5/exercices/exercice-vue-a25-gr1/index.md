# FestiPixel – Exercice

## Contexte

Vous devez créer une mini-application *Vue.js (Options API)* qui affiche la programmation d’un festival fictif : *FestiPixel* (nul besoin de faire de composante pour cet exercice).

Les données proviennent d’un fichier *JSON* chargé via *Fetch API*.  

L’interface doit être présentée en *CSS Grid*, avec deux dispositions possibles : *uniform* (uniforme) et *featured* (en vedette).

L'interface doit *s'adapter selon le format de l'écran*, voir l'[aperçu](#apercu-du-resultat-final) afin d'appliquer le placement de la grille selon ce qui est attendu.


## Objectif

Mettre en pratique les notions suivantes :

- *Vue.js (Options API)* : `data`, `computed`, `methods`, directives (`v-model`, `v-for`, `v-if`, `:class`, `@click`, etc.).
- *Fetch API* : chargement de données externes via une méthode appelée par un bouton.
- *CSS Grid* : création de layouts responsives et avec mise en avant d’un artiste vedette.
- *Utilisation de fonctions utilitaires (helpers)* déjà fournies dans `utils.js`.


## Démarrage

[📥 Télécharger fichiers de départ](./nom-prenom-web5-exam.zip){ .md-button }


### Fichiers fournis

- `index.html` → squelette de l’application.
- `style.css` → base de styles + classes pour les deux layouts.
- `main.js` → code Vue à compléter.
- `data.json` → données des artistes.
- `utils.js` → *fonctions utilitaires prêtes* pour filtrer, chercher et trier les artistes.
- `logo.svg` → image du logo du festival.

> Vous n’avez pas besoin d’écrire vous-mêmes des fonctions complexes sur les tableaux (`sort`, `filter`, etc.).  
> Utilisez simplement les helpers de `utils.js` dans vos `computed` ou `methods`.



## Aperçu du résultat final

<div style="max-width: 1280px"><div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe src="https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=3d00fcc4-de09-4467-9b76-3f9c07f1248a&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="1280" height="720" frameborder="0" scrolling="no" allowfullscreen title="apercu-final.mp4" style="border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;"></iframe></div></div>

## Exigences fonctionnelles

!!! tip
    Les exigences fonctionnelles ne sont pas des étapes à faire en ordre une après l'autre. Ici, elles vous sont regroupée par thème.
    Je vous conseille de les lire en entier avant de débuter. Vous devrez organiser vous-même vos étapes en fonction de ces exigences.
    N'hésitez pas aussi à vous référer à l'aperçu vidéo afin de ne rien oublier pour le résultat final.


### 1- Commente ton code

- [ ] Commente ton code et tout ce que tu fais, afin d'expliquer chaque partie et prouver ta compréhension
  - Commenter ton JavaScript.
  - Commenter dans le HTML lorsque tu utilises des directives Vue.js dans le HTML.
  - Commenter dans le CSS lorsque tu appliques une grille, explique ce que tu fais.

### 2- Création de l'app Vue

- [x] Importer Vue.js 3
- [x] Créer l'application Vue
> Dans cet exercice, nul besoin de faire une *composante* Vue. Tout se passe directement dans l'app Vue principale.

### 3- Chargement des données json

- [x] Au clic du  bouton *« Charger la programmation »*, une *méthode Vue* charge les données de `data.json` via un `fetch`.
- [x] Gérer les états de l'app à partir de la progression de ce `fetch` et afficher conditionnellement à cet état des messages dans l'interface:
  - `init` → *SI* l'état est à `init`: afficher le bouton « Charger la programmation ».
  Représente l'état de départ lors l'initiation de l'app.
  - `loading` → *SI* l'état est à `loading`: afficher le message « Chargement… ».
  Représente l'état pendant l'opération de chargement des données du fichier `data.json`.
  - `error` → *SI* l'état est à `error`: afficher un message d’erreur.
  Représente l'état dans le cas où le  chargement des données du fichier `data.json` échoue.
  - `loaded` → *SI* l'état est à `loaded`: afficher la grille des cartes d'artistes.
  Représente l'état lorsque le données du `data.json` sont chargées et converties dans le format json.

### 4- Affichage en grille (CSS Grid)

- [ ] Les 5 éléments de formulaire s'affiche dans un grille de 5 colonnes.
  - Requête média (media queries): sur petit écran, tous les champs sont un par dessus l'autre (se fier à l'[aperçu ci-haut](#apercu-du-resultat-final)).
- [ ] Les éléments de chaue carte d'artiste s’affichent dans un grille à l'intérieur de la carte en tant que:
  - Nom  
  - Scène  
  - Heure (début–fin)  
  - Style  
  - Popularité (⭐ nombre)  
- [ ] Mise en page (layout) *CSS Grid* responsive :
  - Disposition sélectionnée de la grille:
    - *uniform* : Cartes toutes pareilles (même dimension, variable mais minimum de largeur de 220px), le *nombre de colonne automatique* dépendant de l'espace disponible dans l'écran.
      - Dans ce contexte, il faudra appliquer la classe `.grid--uniform` sur le conteneur de la grille.
    - *featured* : les cartes ayant le l’artiste vedette (`featured:true` dans `data.json`) occupe plus d’espace sur la grille. Il y a *4 colonnes* sur grand écran (desktop).
      - Dans ce contexte, il faudra appliquer la classe `grid-featured` sur le conteneur de la grille ainsi que la classe `.is-featured` sur les carte des artiste en vedette.
  - Requête média (media queries).
    - Appliquer les styles des 2 types de grille pour écran format moyen (se fier à l'[aperçu ci-haut](#apercu-du-resultat-final)). `grid-featured` en 3 colonnes et `.grid--uniform` le *nombre de colonne et automatique*.
    - Appliquer les styles des 2 types de grille pour écran petit format (mobile) (se fier à l'[aperçu ci-haut](#apercu-du-resultat-final)). Peu importe quel type de grille, tout est en 1 seule colonne et prend toute la largeur.

### 5- Filtres, recherche et tri des cartes d'artistes

- [x] *Recherche par nom* (input texte)
- [x] *Filtre par scène* (liste déroulante)
- [x] Possibilité de *trier* les artistes par :
  - Heure (début ↑)
  - Popularité (↓)
  - Nom (A→Z)
- [x] Choix de la *disposition* (layout) des carte : *featured (Mise en vedette)* ou *uniform (Uniforme)*
- [ ] Vous devrez lier ces éléments de formulaires à des données de votre app Vue afin de les rendre fonctionnels.
- [ ] Afficher le nombre de résultats filtrés *x résultat(s)* sous le formulaire

### 6- Données, propriétés calculées et méthodes

- [x] Définir les *données* de l'app Vue pour:

  - l'*état* de chargement des données, initialisée à `init`
  - un *tableau (array)* contenant les *données des artistes* chargée à partir de `data.json`
  - le contenu du champ *Recherche*
  - la *scène* sélectionnée
  - le *type de tri* sélectionné (`time` (heure), `pop` (popularité), `name` (nom))
  - la *disposition* (layout) sélectionnée: `featured` ou `uniform`. Initialisez la à `featuted` par défaut.
- [ ] Si vous avez déjà fait le fetch vers `data.json` (ou lorsque vous le ferez), veuillez populer la donnée correspondant au *tableau (array) contenant les données des artistes* avec les données reçues du fetch (ceci se fera après avoir reçu et converti les données en json).
- [x] Définir une *propriété calculée* `gridClass()` qui génère le nom de la classe s'appliquant sur `.schedule` en fonction de la *disposition* sélectionnée: Soit `.grid--uniform` ou `.grid--featured`.
  - Ensuite appliquer cette *propriété calculée* `gridClass()` là où c'est pertinent.

- [ ] Définir une  *propriété calculée* `stagesArr()` qui génère la liste des scènes en fonction des données chargées à partir du fichier `data.json`.
  - Cette propriété calculé devra contenir la ligne qui suit (veuillez remplacer `artistsList` par le nom de la propriété que  vous avez données au *tableau (array) contenant les données chargée à partir de `data.json`*):
    ```js
    return [...new Set(this.artistsList.map(a => a.stage))].sort();
    ```
  - Ensuite appliquer cette *propriété calculée* `stagesArr()` là où c'est pertinent.

- [ ] Définir une *propriété calculée* `filteredAndSortedArtistsArr()` qui se base sur un tableau (array) qui contient la liste des artistes et leurs données et qui lui applique le pipeline suivant :

   *vedette en 1<sup>er</sup> → filtres/scène → recherche → tri (réordonner)*

  - Utiliser les helpers de `utils.js` :
    - `putFeaturedFirst(artistsArr)`
    - `filterByStage(artistsArr, selectedStage)`
    - `searchByName(artistsArr, searchTerm)`
    - `sortByMode(artistsArr, sortBy)`

  - Dans `filteredAndSortedArtistsArr`, enchaîner ces fonctions dans le bon ordre sur le tableau de données et retourner le tableau filtré par ces quatres fonctions.
  En fait, tiens, un petit cadeau 🎁 pour vous faciliter cette tâche. Voici littéralement le code à utiliser. Mais attention: il faut renommer les éléments `artistsArr`, `selectedStage`, `searchTerm` et `sortBy` par les noms de propriétés que vous avez choisies dans les données de votre app Vue.
  ```
  filteredAndSortedArtistsArr() {
    /* Réordonner vedette en 1<sup>er</sup> */
    let arr = putFeaturedFirst(this.artistsArr);

    /* Appliquer le filtres/scène selon ce qui est sélectionné dans la liste de scène */
    arr = filterByStage(arr, this.selectedStage);

    /* Appliquer la recherche par nom selon ce qui est inscrit dans le champ de recherche */
    arr = searchByName(arr, this.searchTerm);

    /* Réordonner selon ce qui est sélectionné dans la liste de tri */
    arr = sortByMode(arr, this.sortBy);

    /* Pour vous aider à visuealiser les données dans la console */
    console.log(arr);

    /* La propriété calculée actuelle retourne un tableau d'artistes filtré et réordonné */
    return arr;
  }
  ```
  - Utiliser ensuite cette propriété calculée `filteredAndSortedArtistsArr` pour afficher les cartes d'artiste filtrées et/ou réordonnée dans l'élément `.schedule`.

- [ ] Si ce n'était pas déjà fait, définir une *méthode* pour charger les données du fichier `data.json`.
  - Cette méthode est appelée au clic du bouton *« Charger la programmation »*
- [ ] Définir une *méthode* pour réinitialiser les champs du formulaire de filtre, triage et recherche à leur valeur initiale lors du chargement de la page. Noubliez pas que le champ disposition doit être réinitialisé à sa valeur de base soit `featured`.
  - Cette méthode est appelée au clic du bouton *« Réinitialiser les filtres »*
- [ ] Définir une *méthode* pour appliquer les classes CSS aux cartes.
  - Selon le contexte:
    - appliquer la classe `.is-featured` si l'artiste de la carte est en vedette.
    - appliquer la classe `.is-stage-STAGENAME` ou `STAGENAME` est le nom de la scène où l'artiste se produit.
  - Cette méthode retourne (`return`) la valeur des classes CSS.
  - Cette méthode est appelée dans l'attribut `v-bind:class` de la balise de la carte.

### 7- États d’interface UI

- [ ] Message clair en fonction de l'*état* du chargement des données via `section.message`.
- [ ] Message clair si aucun résultat : *« Aucun artiste »* via `p.empty`.
- [ ] Bouton *« Réinitialiser »* permettant d'effacer les filtres et la recherche.
- [ ] Affichage du nombre de *résultat(s)* selon la recherche et les filtres activés par l'utilisateur.

## Contraintes

- Pas de framework CSS externe (pas de Bootstrap/Tailwind).
- Vue doit être chargée via le *CDN*.
- L’application doit être lancée via un *serveur local* (ex. *Live Server* dans VS Code).


## Livrables (Remise)

- `index.html`, `style.css`, `main.js`, `data.json`, `utils.js`, `logo.svg`.
- Une application fonctionnelle respectant les consignes.
- Veuillez renommer le dossier *nom-prenom-exam-web5* avec votre nom.
- Veuillez compresser ce dossier en format *.zip* et le remettre dans Teams dans le Devoir nommé *Examen Web5*.
- Avant de quitter la classe, veuillez voir l'enseignante afin qu'elle confirme la réception de votre travail.

## Barème (100 points)

- 10pts → **Commentaires dans le code et dans l'exécution**
- 20pts → **Fetch via bouton "Charger la programmation" & gestion des états**
- 20pts → **Grille CSS responsive & layouts (uniform/featured) + version tablette + version mobile. Grille sur formulaire.**
- 10pts → **Vue.js - importation, création de l'app, initialisation des données, nommage des données (bien nommées, de façon claire)** 
- 20pts → **Vue.js (methods, computed (dont entre autre `filteredAndSortedArtistsArr`), directives (v-for v-if), events (v-on:click), data binding ({{ }} , v-bind:, v-model))**
- 10pts → **Filtre, recherche et tri fonctionnels et placés selon la grille**
- 10pts → **UX & accessibilité (messages à l'écran, nb de résultats, réinitialisation)**

