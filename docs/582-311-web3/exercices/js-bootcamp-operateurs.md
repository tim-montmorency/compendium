---
tags:
  - Exercice
---

[:material-arrow-u-left-top: Bootcamp JavaScript](./js-bootcamp.md){.breadcrumb}

# Opérateurs arithmétiques

![](../assets/images/operateurs_banner.png)

## Matière à connaître

!!! example "Opérateur"

    Un opérateur arithmétique effectue une opération mathématique entre deux valeurs. Les principaux opérateurs arithmétiques en JavaScript sont :

    - **Addition (`+`)**
    - **Soustraction (`-`)**
    - **Multiplication (`*`)**
    - **Division (`/`)**

    ```js
    let somme = 10 + 5;       // 15
    let difference = 10 - 5;  // 5
    let produit = 10 * 5;     // 50
    let quotient = 10 / 5;    // 2
    ```

## Exercice

Utiliser les **opérateurs arithmétiques** de base.

## Résultat attendu

```console
Première variable : 55
Deuxième variable : 26
Somme : 81
Différence : 29
Produit : 1430
Quotient : 2.1153846153846154
```

## Instructions

* [ ] Créez deux variables et attribuez un nombre différent à chacune d’elles. Ne prenez pas les mêmes nombres que dans le résultat attendu.
* [ ] En utilisant vos deux variables, calculez leur somme (addition), leur différence (soustraction), leur produit (multiplication) et leur quotient (division). Créez une variable pour chaque opération afin de rendre le code plus propre et lisible.
* [ ] Affichez les informations dans la console.

[STOP]

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
