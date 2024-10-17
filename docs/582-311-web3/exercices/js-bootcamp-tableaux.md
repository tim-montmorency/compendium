---
tags:
  - Exercice
---

[:material-arrow-u-left-top: Bootcamp JavaScript](./js-bootcamp.md){.breadcrumb}

# Tableaux

![](../assets/images/tableaux_banner.png)

## Matière à connaître

!!! example "Tableau (array)"

    Un tableau, ou *array*, est une liste de valeurs qu'on place entre crochets `[]`. Chaque valeur est séparée par une virgule.

    ```js
    let monTableau = [
      valeurA,
      valeurB,
      valeurC
    ];
    ```

!!! example "index"

    Dans un tableau, chaque valeur a une position appelée `index`. L’index commence toujours à `0`.

    ```js
    console.log( monTableau[1] ); // 1 représente l'index

    // valeurB est affiché dans la console
    ```

!!! example "Méthodes"

    Lorsqu’on créé un tableau, des méthodes (ou fonctions) sont disponibles.  Voici quelques-unes des plus courantes :

    * `push()` : Ajoute une valeur à la fin du tableau
    * `pop()` : Supprime le dernier élément du tableau.
    * `unshift()` : Ajoute un ou plusieurs éléments au début du tableau.
    * `shift()` : Supprime le premier élément du tableau.

## Exercice

Ajoutez et manipulez les valeurs d’un tableau.

## Instructions

* [ ] Déclarez une variable de type tableau
* [ ] Dans le tableau, ajoutez les noms de chaque planète de notre système solaire
* [ ] Une fois la **définition** du tableau effectuée, sélectionnez la **Terre** dans le tableau et modifiez son nom pour qu'il soit écrit en majuscules.
* [ ] Affichez le tableau dans la console
* [ ] Ajoutez "Pluton" à la fin du tableau à l'aide d'une **méthode** (choisissez la bonne)
* [ ] Affichez le tableau dans la console
* [ ] Supprimez "Pluton" du tableau à l'aide d'une **méthode** (choisissez la bonne)
* [ ] Affichez le tableau dans la console

[STOP]

```js
let planetes = [
  "Mercure",
  "Vénus",
  "Terre",
  "Mars",
  "Jupiter",
  "Saturne",
  "Uranus",
  "Neptune"
];
planetes[2] = planetes[2].toUpperCase();
console.log(planetes);
planetes.push("Pluton");
console.log(planetes);
planetes.pop();
console.log(planetes);
```