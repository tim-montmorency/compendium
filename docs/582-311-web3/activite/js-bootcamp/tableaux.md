---
tags:
  - Exercice
---

# Tableaux

![](./tableaux_banner.png)

## Matière à connaître

??? example "Tableau (array)"

    Un tableau (ou *array*) est une liste de valeurs qu'on place entre crochets `[]`. 
    
    Chaque valeur est séparée par une virgule.

    ```js
    let monTableau = [
      valeurA,
      valeurB,
      valeurC
    ];
    ```

    👉 Pas de virgule après la dernière valeur

??? example "Index"

    Dans un tableau, chaque valeur a une position appelée `index`. 
    
    L’index commence toujours à `0`.

    ```js
    console.log( monTableau[1] ); // l'index 1 représente le deuxième élément
    ```

??? example "Méthodes"

    Lorsqu’on crée un tableau, des méthodes sont disponibles. Voici quelques-unes des plus courantes :

    * `push()` : Ajoute une valeur à la fin du tableau
    * `pop()` : Supprime le dernier élément du tableau.
    * `unshift()` : Ajoute un ou plusieurs éléments au début du tableau.
    * `shift()` : Supprime le premier élément du tableau.

## Objectif

Ajouter et manipuler les valeurs d’un tableau.

## Résultat attendu

```txt title="Console"
['Mercure', 'Vénus', 'Terre', 'Mars', 'Jupiter', 'Saturne', 'Uranus', 'Neptune']
['Mercure', 'Vénus', 'TERRE', 'Mars', 'Jupiter', 'Saturne', 'Uranus', 'Neptune']
['Mercure', 'Vénus', 'TERRE', 'Mars', 'Jupiter', 'Saturne', 'Uranus', 'Neptune', 'Pluton']
['Mercure', 'Vénus', 'TERRE', 'Mars', 'Jupiter', 'Saturne', 'Uranus', 'Neptune']
```

## Instructions

Dans le fichier `script.js` :

* [ ] Déclarer une variable de type tableau
* [ ] Dans le tableau, ajouter les noms des 8 planètes de notre système solaire
* [ ] Afficher le tableau dans la console
* [ ] En JavaScript, sélectionner la **Terre** dans le tableau et changer son nom en majuscules à l'aide de la méthode `toUpperCase()`
* [ ] Afficher le tableau dans la console
* [ ] Ajouter "Pluton" à la fin du tableau à l'aide de la bonne **méthode** 🧠
* [ ] Afficher le tableau dans la console
* [ ] Supprimer "Pluton" du tableau à l'aide de la bonne **méthode** 🧠
* [ ] Afficher le tableau dans la console
* [ ] Effectuer un `commit`, puis un `push`

<figure markdown>
![](./tim-eric.gif){.w-50}
</figure>

[STOP]

## Solution

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
console.log(planetes);
planetes[2] = planetes[2].toUpperCase();
console.log(planetes);
planetes.push("Pluton");
console.log(planetes);
planetes.pop();
console.log(planetes);
```
