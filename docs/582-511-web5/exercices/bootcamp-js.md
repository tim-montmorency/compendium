# **Exercice** Bootcamp JS

## 1. Écouteurs d’événements (`addEventListener`)

**Résumé**  
Un écouteur d’événement permet d’exécuter du code lorsqu’une action spécifique est détectée (clic, survol, touche clavier, etc.).  
On l’attache à un élément du DOM.

**Exemple**

```html
<button class="btn">Clique-moi</button>
```

```js
const bouton = document.querySelector(".btn");
bouton.addEventListener("click", function() {
  alert("Bouton cliqué!");
});
```

**Exercice**  
*En HTML*

- [ ] Créer un bouton “Changer la couleur”.

*En Javascript*

- [ ] Lorsqu’on clique dessus, changer la couleur de fond de la page en bleu🔵.



## 2. Sélecteurs d’éléments du DOM

**Résumé**  
On utilise `document.querySelector`, `getElementById()`, `getElementsByClassName()` ou `document.querySelectorAll` pour cibler un ou plusieurs éléments dans la page.  

- `querySelector`, `getElementById()` → le premier élément correspondant  
- `querySelectorAll`, `getElementsByClassName()`→ un tableau (`array`) qui liste tous les éléments correspondants  

**Exemple**
```js
const titre = document.querySelector("h1");
const tousLesParagraphes = document.querySelectorAll("p");

titre.style.color = "red";
console.log(tousLesParagraphes.length);
```

**Exercice**
*En HTML*

- [ ] Créer un bouton “Changer”.
- [ ] Créer une liste à puces `<ul> <li>` pour lister le nom des quatre filles du groupe K-pop *Blackpink* (tu peux chercher leur nom sur Internet).

*En JavaScript*

- [ ] Sélectionner le bouton et écoute l'événement `click`sur celui-ci.
- [ ] En JavaScript, sélectionner tous les `<li>` de cette liste à puce.
- [ ] Au clic du bouton, remplacer le contenu de chaque balise `<li>` par le texte "membre d'un groupe K-pop".



## 3. Modifications du DOM

**Résumé**  

On peut modifier le texte (`innerText` / `textContent`), les attributs, le style, ajouter ou supprimer des éléments via `createElement`, `appendChild`, `removeChild`, `innerHTML`, `insertAdjacentHTML()` etc. 

**Exemple**

```js
const titre = document.querySelector("h1");
titre.textContent = "Nouveau titre";
titre.style.fontSize = "40px";
```

**Exercice** 

- [ ] Dans le même exercice que le #2 (*Blackpink*), créer un autre bouton “Ajouter une chanteuse” qui ajoute un nouvel `<li>` dans la liste à chaque clic. Vous pouvez y inscrire le nom de votre chanteuse préférée.  


## 4. Tableaux (`array`)

**Résumé**  
Un tableau permet de stocker une liste de valeurs. On peut les parcourir avec des boucles.  

**Exemple**

```js
const fruits = ["pomme", "banane", "orange"];
console.log(fruits[1]); // banane
fruits.push("kiwi"); // ajoute à la fin
```

**Exercice**  

- [ ] Créer un tableau avec 5 villes ou lieu que tu aimerais visiter un jour. Afficher chaque ville dans la console avec une boucle `forEach`.  


## 5. Objets (`{}`)

**Résumé**  
Un objet regroupe des propriétés (clés/valeurs). Chaque propriété peut contenir une valeur primitive, un tableau ou une fonction.  

**Exemple**

```js
const etudiant = {
  nom: "Alice",
  age: 20,
  programme: "Intégration multimédia"
};

console.log(etudiant.nom);
```

**Exercice**  

- [ ] Créer un objet `film` avec les propriétés `titre`, `année`, `réalisateur`. Afficher une phrase complète en console :  `"Inception est réalisé par Christopher Nolan en 2010."`  

## 6. Boucles (`forEach` avec liste du DOM)

**Résumé**  
`forEach` permet de parcourir un tableau ou une *NodeList* (liste d’éléments du DOM).  

**Exemple**

```js
const items = document.querySelectorAll("li");
items.forEach((item, index) => {
  item.textContent = `Item numéro ${index+1}`;
});
```

**Exercice**  

*En HTML*

- [ ] Créer une liste `<ul>` avec 5 `<li>`. 

*En JavaScript*

- [ ] Utiliser `forEach` pour changer la couleur de fond de chaque `<li>` en fonction de son index (pair = bleu, impair = rose).  


## 7. Fetch API

**Résumé**  
`fetch` permet de récupérer des données depuis une API (ou un fichier JSON). C’est une fonction asynchrone qui retourne une promesse.  

**Exemple**
```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => {
    console.log(data.title);
  });
```

**Exercice**  

- [ ] Récupérer les données de l’API `https://jsonplaceholder.typicode.com/users`.
- [ ] Afficher les noms des utilisateurs dans une liste `<ul>` sur la page.  
