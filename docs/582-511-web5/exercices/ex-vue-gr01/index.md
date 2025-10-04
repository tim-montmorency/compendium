# FestiPixel – Exercice (Évaluation)

## Contexte
Vous devez créer une mini-application **Vue.js (Options API)** qui affiche la programmation d’un festival fictif : **FestiPixel**.  
Les données proviennent d’un fichier **JSON** chargé via **Fetch API**.  
L’interface doit être présentée en **CSS Grid**, avec deux dispositions possibles : **uniform** (uniforme) et **featured** (en vedette).
L'interface doit **s'adapter selon le format de l'écran**, voir l'aperçu afin d'appliquer le placement de la grille selon ce qui est attendu.

---

## Objectif
Mettre en pratique les notions suivantes :
- **Vue.js (Options API)** : `data`, `computed`, `methods`, directives (`v-model`, `v-for`, `v-if`, `:class`, `@click`, etc.).
- **Fetch API** : chargement de données externes via une méthode appelée par un bouton.
- **CSS Grid** : création de layouts responsives et avec mise en avant d’un artiste vedette.
- **Utilisation de fonctions utilitaires (helpers)** déjà fournies dans `utils.js`.

---

## Fichiers fournis
- `index.html` → squelette de l’application.
- `style.css` → base de styles + classes pour les deux layouts.
- `main.js` → code Vue à compléter.
- `data.json` → données des artistes.
- `utils.js` → **fonctions utilitaires prêtes** pour filtrer, chercher et trier les artistes.

> Vous n’avez pas besoin d’écrire vous-mêmes des fonctions complexes sur les tableaux (`sort`, `filter`, etc.).  
> Utilisez simplement les helpers de `utils.js` dans vos `computed` ou `methods`.

---

## Exigences fonctionnelles

1. **Création de l'app Vue**
   - Importer Vue.js 3
   - Créer l'application Vue

2. **Chargement des données**
   - Au clic du  bouton **« Charger la programmation »**, une **méthode Vue** fait appel à `fetch('./data.json')`.  
   - Gérer les états de l'app à partir de la progression de ce fetch :  
     - `init` → afficher le bouton « Charger la programmation ». Représente l'état de départ lors l'initiation de l'app.
     - `loading` → afficher le message « Chargement… ». Représente l'état pendant l'opération de chargement des données du fichier `data.json`.
     - `error` → afficher un message d’erreur. Représente l'état dans le cas où le  chargement des données du fichier `data.json` échoue.
     - `loaded` → afficher la grille des cartes d'artistes: représente l'état lorsque le données du `data.json` sont chargées et converties dans le format json.

3. **Affichage en grille**
   - Chaque artiste s’affiche en tant que carte avec :
     - Nom  
     - Scène  
     - Heure (début–fin)  
     - Style  
     - Popularité (⭐ nombre)  
   - Mise en page (layout) **CSS Grid** responsive :
     - Disposition sélectionnée de la grille:
       - **uniform** : Cartes toutes pareilles (même dimension). 
         - Dans ce contexte, il faudra appliquer la classe `.grid--uniform` sur le conteneur de la grille.
       - **featured** : les cartes ayant le l’artiste vedette (`featured:true` dans `data.json`) occupe plus d’espace sur la grille. 
         - Dans ce contexte, il faudra appliquer la classe `grid-featured` sur le conteneur de la grille ainsi que la classe `.is-featured` sur les carte des artiste en vedette.
     - Requête média (media queries).
        - Appliquer les styles des 2 types de grille pour écran format moyen (se fier à l'aperçu)
        - Appliquer les styles des 2 types de grille pour écran petit format (mobile) (se fier à l'aperçu)

4. **Filtres et recherche**
   - **Recherche par nom** (input texte).
   - **Filtre par scène** (liste déroulante).
   - Afficher le nombre de résultats filtrés **x résultat(s)** sous le formulaire

5. **Tri**
   - Possibilité de trier les artistes par :
     - Heure (début ↑)
     - Popularité (↓)
     - Nom (A→Z)

6. **Vue.js**
   - Définir les **données** de l'app Vue pour:
      - l'état de chargement des données, initialisée à `init`
      - un tableau (array) contenant les données chargée à partir de `data.json`
      - le contenu du champ **Recherche**
      - la scène sélectionnée
      - le type de tri sélectionné (heure, popularité, nom)
      - la disposition (layout) sélectionnée: `featured` ou `uniform`
   - Définir une **propriété calculée** `gridClass()` qui génère le nom de la classe s'appliquant sur `.schedule` en fonction de la disponition sélectionnée: Soit `.grid--uniform` ou `.grid--featured`.
   - Définir une  **propriété calculée** ` stages()` qui génère la liste des scènes en fonction des données chargées à partir du fichier `data.json`. Cette propriété calculé devra contenir la ligne qui suit (veuillez remplacer `artistsList` par le nom de la propriété que  vous avez données au **tableau (array) contenant les données chargée à partir de `data.json`**):
     ```js
     return [...new Set(this.artistsList.map(a => a.stage))].sort();
     ```

   - Définir une **propriété calculée** `filteredAndSortedArtistsArr()` contenant un tableau (array) qui contient la liste des artistes et leurs données et qui lui applique le pipeline suivant :

     ```
     vedette en premier → filtre par scène → recherche par nom → tri (réordonner par...)
     ```

     - Utiliser les helpers de `utils.js` :
        - `putFeaturedFirst(artistsList)`
        - `filterByStage(artistsList, selectedStage)`
        - `searchByName(artistsList, searchTerm)`
        - `sortByMode(artistsList, sortBy)`
     - Dans `filteredAndSortedArtistsArr`, enchaîner ces fonctions dans le bon ordre.
     - C'est cette propriété qui permettra d'afficher les cartes d'artiste filtrées et/ou réordonnée dans l'élément `.schedule`.

   - Définir une **méthode** pour charger les données du fichier `data.json` qui sera appelée au clic du bouton **« Charger la programmation »**
   - Définir une **méthode** pour réinitialiser les champs du formulaire de filtre, triage et recherche.
   - Définir une **méthode** pour appliquer les classes CSS aux cartes selon le contexte: 
     - appliquer la classe `.is-featured` si l'artiste de la carte est en vedette
     - appliquer la classe `.is-stage-STAGENAME` ou STAGENAME est le nom de la scène où l'artiste se produit


7. **États d’interface**
   - Message clair si aucun résultat : « Aucun artiste ».
   - Bouton « Réinitialiser » pour effacer les filtres et la recherche.

---

## Contraintes
- Pas de framework CSS externe (pas de Bootstrap/Tailwind).
- Vue doit être chargée via le CDN fourni dans `index.html`.
- L’application doit être lancée via un **serveur local** (ex. *Live Server* dans VS Code), pas avec `file://` (sinon `fetch` échoue).

---

## Livrables
- `index.html`, `style.css`, `main.js`, `data.json`, `utils.js`.
- Une application fonctionnelle respectant les consignes.
- Facultatif : un court `README.md` personnel expliquant vos choix.

---

## Barème (100 points)

- **Fetch via bouton & gestion des états** → 20 pts  
- **Grille responsive & layouts (uniform/featured) + version tablette + version mobile** → 25 pts  
- **Vue.js - importation, création de l'app, initialisation des données, nommage des données (bien nommées, de façon claire)** → 10 pts  
- **Vue.js (computed `filteredAndSortedArtistsArr`, directives, events, data binding)** → 25 pts  
- **Filtre, recherche et tri** → 10 pts
- **UX & accessibilité (messages à l'écran, labels, réinitialisation)** → 10 pts  
