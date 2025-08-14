---
tags:
  - Exercice
---

# Manipulation du DOM

![](./assets/img/dom_banner.png)

## Matière à connaître

!!! example "DOM"

    Le DOM (Document Object Model) c'est le code HTML de la page.

!!! example "Attribut"

    En HTML, un attribut c'est une information supplémentaire sur une balise (tag).

    ```html
    <p id="un-beau-bonjour" class="des belles classes">Bonjour</p>
    <!-- id et class sont des attributs -->
    ```

!!! example "Sélecteur"

    Un sélecteur c'est une façon de sélectionner des éléments du DOM.

    Certains sélecteurs sélectionnent un élément à la fois, d'autres sélectionnent plusieurs éléments.

    ```js
    // Sélectionne **un seul** élément par son attribut `id`.
    let maSelectionA = document.getElementById(id);

    // Sélectionne le premier élément qui correspond au sélecteur CSS donné.
    let maSelectionB = document.querySelector(selecteur_css);

    // Sélectionne tous les éléments qui correspondent au sélecteur CSS. Retourne une liste!
    let maSelectionC = document.querySelectorAll(selecteur_css);
    ```

!!! example "Sélecteur CSS"

    Un sélecteur CSS s'écrit de la même manière qu'en CSS.

    ```js
    let maSelection = document.querySelector('.container .p:first-child');
    ```

!!! example "Manipulation"

    ```js title="Modifier la sélection"
    maSelection.innerHTML = "Nouveau contenu";
    ```

    ```js title="Supprimer la sélection"
    maSelection.remove();
    ```

## Objectif

Manipulez le DOM pour ajouter, modifier et supprimer des éléments sur la page.

Code de départ :

```html
<h2 id="title">Liste de films</h2>
<ul id="films">
  <li class="film" data-annee="1979">Alien</li>
  <li class="film" data-annee="1988">Akira</li>
  <li class="film" data-annee="1982">Blade runner</li>
  <li class="film" data-annee="2021">Dune</li>
  <li class="film" data-annee="2001">Spirited Away</li>
</ul>
```

## Indices

* Rappelez-vous que `getAttribute()` permet de récupérer la valeur d'un attribut HTML.
* Rappelez-vous que `classList.add()` sert à ajouter une classe à une balise HTML.

## Instructions

- [ ] Créez une variable `films` qui contient toutes les balises `li` de la liste de films. Pour cela, il faut utiliser le bon sélecteur ;)
- [ ] À l'aide d'une boucle `for`, ajoutez l'année après chaque titre de film (ex : Alien (1979)). Vous pouvez trouver l'année dans l'attribut `data-annee` de chaque balise `li`.
- [ ] Observez admirativement votre beau travail.
- [ ] À l'aide d'une deuxième boucle `for`, ajoutez la classe CSS `prehistorique` aux films réalisés avant l'an 2000.
- [ ] Ajouter un fichier `style.css` pour ajouter un style de votre choix aux films préhistoriques. N'oubliez pas de lier le fichier dans `index.html`.
- [ ] Hochez la tête en guise de satisfaction.
- [ ] À l'aide d'une troisième boucle `for` et d'une variable, trouvez le moyen de supprimer le film le plus vieux de la liste.
- [ ] Contemplez glorieusement votre accomplissement.

[STOP]

## Solution

```js
const films = document.querySelectorAll('#films .film');
for (let i = 0; i < films.length; i++) {
  const annee = films[i].getAttribute('data-annee');
  films[i].textContent += ` (${annee})`;
}

for (let i = 0; i < films.length; i++) {
  const annee = films[i].getAttribute('data-annee');
  if (annee < "2000") {
    films[i].classList.add('prehistorique');
  }
}

let oldestFilm = films[0];
for (let i = 1; i < films.length; i++) {
  const currentYear = films[i].getAttribute('data-annee');
  const oldestYear = oldestFilm.getAttribute('data-annee');
  if (currentYear < oldestYear) {
    oldestFilm = films[i];
  }
}
oldestFilm.remove();
```
