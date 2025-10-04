# FestiPixel – Exercice

## Contexte
Vous devez créer une mini-application *Vue.js (Options API)* qui affiche la programmation d’un festival fictif : *FestiPixel*.  

Les données proviennent d’un fichier *JSON* chargé via *Fetch API*.  

L’interface doit être présentée en *CSS Grid*, avec deux dispositions possibles : *uniform* (uniforme) et *featured* (en vedette).

L'interface doit *s'adapter selon le format de l'écran*, voir l'[aperçu](#apercu-du-resultat-final) afin d'appliquer le placement de la grille selon ce qui est attendu.



## Objectif

Mettre en pratique les notions suivantes :

- *Vue.js (Options API)* : `data`, `computed`, `methods`, directives (`v-model`, `v-for`, `v-if`, `:class`, `@click`, etc.).
- *Fetch API* : chargement de données externes via une méthode appelée par un bouton.
- *CSS Grid* : création de layouts responsives et avec mise en avant d’un artiste vedette.
- *Utilisation de fonctions utilitaires (helpers)* déjà fournies dans `utils.js`.



## Fichiers fournis

- `index.html` → squelette de l’application.
- `style.css` → base de styles + classes pour les deux layouts.
- `main.js` → code Vue à compléter.
- `data.json` → données des artistes.
- `utils.js` → *fonctions utilitaires prêtes* pour filtrer, chercher et trier les artistes.

> Vous n’avez pas besoin d’écrire vous-mêmes des fonctions complexes sur les tableaux (`sort`, `filter`, etc.).  
> Utilisez simplement les helpers de `utils.js` dans vos `computed` ou `methods`.



## Aperçu du résultat final

<div style="max-width: 1200px"><div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe src="https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=3d00fcc4-de09-4467-9b76-3f9c07f1248a&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen title="apercu-final.mp4" style="border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;"></iframe></div></div>



## Exigences fonctionnelles

### 1- Commente ton code

- Commente ton code et tout ce que tu fais, afin d'expliquer chaque partie et prouver ta compréhension
  - Commenter ton JavaScript.
  - Commenter dans le HTML lorsque tu utilises des directives Vue.js dans le HTML.
  - Commenter dans le CSS lorsque tu appliques une grille, explique ce que tu fais.

### 2- Création de l'app Vue

- Importer Vue.js 3
- Créer l'application Vue
- Dans cet exercice, nul besoin de faire une *composante* Vue. Tout se passe directement dans l'app Vue principale.

### 3- Chargement des données json

- Au clic du  bouton *« Charger la programmation »*, une *méthode Vue* charge les données de `data.json` via un `fetch`.
- Gérer les états de l'app à partir de la progression de ce `fetch` :  
  - `init` → afficher le bouton « Charger la programmation ».
  Représente l'état de départ lors l'initiation de l'app.
  - `loading` → afficher le message « Chargement… ».
  Représente l'état pendant l'opération de chargement des données du fichier `data.json`.
  - `error` → afficher un message d’erreur.
  Représente l'état dans le cas où le  chargement des données du fichier `data.json` échoue.
  - `loaded` → afficher la grille des cartes d'artistes.
  Représente l'état lorsque le données du `data.json` sont chargées et converties dans le format json.

### 4- Affichage en grille

- Chaque artiste s’affiche en tant que carte avec :
  - Nom  
  - Scène  
  - Heure (début–fin)  
  - Style  
  - Popularité (⭐ nombre)  
- Mise en page (layout) *CSS Grid* responsive :
  - Disposition sélectionnée de la grille:
    - *uniform* : Cartes toutes pareilles (même dimension).
      - Dans ce contexte, il faudra appliquer la classe `.grid--uniform` sur le conteneur de la grille.
    - *featured* : les cartes ayant le l’artiste vedette (`featured:true` dans `data.json`) occupe plus d’espace sur la grille. 
      - Dans ce contexte, il faudra appliquer la classe `grid-featured` sur le conteneur de la grille ainsi que la classe `.is-featured` sur les carte des artiste en vedette.
  - Requête média (media queries).
    - Appliquer les styles des 2 types de grille pour écran format moyen (se fier à l'[aperçu ci-haut](#apercu-du-resultat-final))
    - Appliquer les styles des 2 types de grille pour écran petit format (mobile) (se fier à l'[aperçu ci-haut](#apercu-du-resultat-final))

### 5- Filtres, recherche et tri des cartes d'artistes

- *Recherche par nom* (input texte)
- *Filtre par scène* (liste déroulante)
- Possibilité de *trier* les artistes par :
  - Heure (début ↑)
  - Popularité (↓)
  - Nom (A→Z)
- Vous devrez lier ces éléments de formulaires à des données de votre app Vue afin de les rendre fonctionnels.
- Afficher le nombre de résultats filtrés *x résultat(s)* sous le formulaire

### 6- Données, propriétés calculées et méthodes

- Définir les *données* de l'app Vue pour:

  - l'*état* de chargement des données, initialisée à `init`
  - un *tableau (array)* contenant les *données des artistes* chargée à partir de `data.json`
  - le contenu du champ *Recherche*
  - la *scène* sélectionnée
  - le *type de tri* sélectionné (heure, popularité, nom)
  - la *disposition* (layout) sélectionnée: `featured` ou `uniform`

- Définir une *propriété calculée* `gridClass()` qui génère le nom de la classe s'appliquant sur `.schedule` en fonction de la disponition sélectionnée: Soit `.grid--uniform` ou `.grid--featured`.

- Définir une  *propriété calculée* ` stages()` qui génère la liste des scènes en fonction des données chargées à partir du fichier `data.json`. Cette propriété calculé devra contenir la ligne qui suit (veuillez remplacer `artistsList` par le nom de la propriété que  vous avez données au *tableau (array) contenant les données chargée à partir de `data.json`*):

   ```js
   return [...new Set(this.artistsList.map(a => a.stage))].sort();
   ```

- Définir une *propriété calculée* `filteredAndSortedArtistsArr()` qui se base sur un tableau (array) qui contient la liste des artistes et leurs données et qui lui applique le pipeline suivant :

   *vedette en 1<sup>er</sup> → filtres/scène → recherche → tri (réordonner)*

  - Utiliser les helpers de `utils.js` :
    - `putFeaturedFirst(artistsArr)`
    - `filterByStage(artistsArr, selectedStage)`
    - `searchByName(artistsArr, searchTerm)`
    - `sortByMode(artistsArr, sortBy)`

  - Dans `filteredAndSortedArtistsArr`, enchaîner ces fonctions dans le bon ordre sur le tableau de données et retourner le tableau filtré par ces quatres fonctions.
    En fait, tiens, un petit cadeau 🎁 pour vous faciliter cette tâche. Voici littéralement le code à utiliser,  mais attention: il faut renommer les éléments `artistsArr`, `selectedStage`, `searchTerm` et `sortBy` par les noms de propriétés que vous avez choisies dans les données de votre app Vue.
    ```
    filteredAndSortedArtistsArr() {
      let arr = putFeaturedFirst(this.artistsArr);
      arr = filterByStage(arr, this.selectedStage);
      arr = searchByName(arr, this.searchTerm);
      arr = sortByMode(arr, this.sortBy);
      return arr;
    }
    ```
  - C'est cette propriété calculée `filteredAndSortedArtistsArr` qui permettra d'afficher les cartes d'artiste filtrées et/ou réordonnée dans l'élément `.schedule`.

- Définir une *méthode* pour charger les données du fichier `data.json` qui sera appelée au clic du bouton *« Charger la programmation »*
- Définir une *méthode* pour réinitialiser les champs du formulaire de filtre, triage et recherche à leur valeur initiale lors du chargement de la page.
- Définir une *méthode* pour appliquer les classes CSS aux cartes selon le contexte:
  - appliquer la classe `.is-featured` si l'artiste de la carte est en vedette.
  - appliquer la classe `.is-stage-STAGENAME` ou STAGENAME est le nom de la scène où l'artiste se produit.
    Cette méthode retourne (`return`) la valeur des classes CSS et elle sera appelée via l'attribut `v-bind:class` de la balise de la carte.

### 7- États d’interface UI

- Message clair en fonction de l'*état* du chargement des données
- Message clair si aucun résultat : *« Aucun artiste »*.
- Bouton *« Réinitialiser »* pour effacer les filtres et la recherche.
- Affichage du nombre de *résultat(s)*  selon la recherche et les filtres



## Contraintes

- Pas de framework CSS externe (pas de Bootstrap/Tailwind).
- Vue doit être chargée via le *CDN*.
- L’application doit être lancée via un *serveur local* (ex. *Live Server* dans VS Code).

<!--


## Livrables

- `index.html`, `style.css`, `main.js`, `data.json`, `utils.js`.
- Une application fonctionnelle respectant les consignes.
- Veuillez renommer le dossier *nom-prenom-exam-web5* avec votre nom.
- Veuillez compresser ce dossier en format *.zip* et le remettre dans Teams dans le Devoir nommé *Examen Web5*.
- Avant de quitter la classe, veuillez voir l'enseignante afin qu'elle confirme la réception de votre travail.



## Barème (100 points)

- 10pts → **Commentaires dans le code et dans l'exécution**
- 20pts → **Fetch via bouton & gestion des états**
- 20pts → **Grille responsive & layouts (uniform/featured) + version tablette + version mobile**
- 10pts → **Vue.js - importation, création de l'app, initialisation des données, nommage des données (bien nommées, de façon claire)** 
- 20pts → **Vue.js (computed `filteredAndSortedArtistsArr`, directives, events, data binding)**
- 10pts → **Filtre, recherche et tri fonctionnels et placés selon la grille**
- 10pts → **UX & accessibilité (messages à l'écran, labels, réinitialisation)**

-->
