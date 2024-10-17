---
tags:
  - Exercice
---

[:material-arrow-u-left-top: Bootcamp JavaScript](./js-bootcamp.md){.breadcrumb}

# Manipulation du DOM

![](../assets/images/dom_banner.png)

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

    Si votre sélection retourne une liste, vous pouvez utiliser [`forEach`](https://www.w3schools.com/jsref/jsref_foreach.asp) pour parcourir la liste.

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

**Objectif**

Manipulez le DOM pour ajouter, modifier et supprimer des éléments sur la page.

HTML de départ :

```html
<h2 id="title">Liste de films</h2>
<ul id="films">
  <li class="film">Alien</li>
  <li class="film">Blade runner</li>
  <li class="film">Dune</li>
  <li class="film">Spirited Away</li>
  <li class="film">Akira</li>
</ul>
```

**Instructions**

- [ ] Supprimer le 2e film.
