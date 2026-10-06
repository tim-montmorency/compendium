---
tags:
  - Exercice
---

# Opérateurs arithmétiques

![](./operateurs_banner.png)

## Matière à connaître

??? example "Opérateur"

    Un [opérateur arithmétique](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators#op%C3%A9rateurs_arithm%C3%A9tiques) effectue une opération mathématique entre deux valeurs. 
    
    Les principaux opérateurs arithmétiques en JavaScript sont :

    * **Addition (`+`)**
    * **Soustraction (`-`)**
    * **Multiplication (`*`)**
    * **Division (`/`)**

    ```js
    let somme = 10 + 5;       // 15
    let difference = 10 - 5;  // 5
    let produit = 10 * 5;     // 50
    let quotient = 10 / 5;    // 2
    ```

## Objectif

Utiliser les **opérateurs arithmétiques** de base.

## Résultat attendu

```txt title="Console"
Première variable : 55
Deuxième variable : 26
Somme : 81
Différence : 29
Produit : 1430
Quotient : 2.1153846153846154
```

## Instructions

Dans le fichier `script.js` :

* [ ] Créer deux variables et attribuer un nombre différent à chacune d’elles. Ne pas prendre les mêmes nombres que dans le résultat attendu.
* [ ] En utilisant les deux variables, calculer leur **somme** (addition), leur **différence** (soustraction), leur **produit** (multiplication) et leur **quotient** (division). Créer une variable pour chaque opération afin de rendre le code plus propre et lisible.
* [ ] Afficher les informations dans la console.
* [ ] Effectuer un `commit`, puis un `push`

<figure markdown>
![](./operator.gif){.w-50}
</figure>

[STOP]

## Solution

```js
let premiereVariable = 11;
let deuxiemeVariable = 22;

let somme = premiereVariable + deuxiemeVariable;
let difference = premiereVariable - deuxiemeVariable;
let produit = premiereVariable * deuxiemeVariable;
let quotient = premiereVariable / deuxiemeVariable;

console.log("Première variable : " + premiereVariable);
console.log("Deuxième variable : " + deuxiemeVariable);
console.log("Somme : " + somme);
console.log("Différence : " + difference);
console.log("Produit : " + produit);
console.log("Quotient : " + quotient);
```
