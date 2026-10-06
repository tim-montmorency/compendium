---
tags:
  - Exercice
---

# Les variables et les types

![](../assets/images/variables_banner.png)

## Matière à connaître

??? example "Variable"

    C'est un mot qui sauvegarde une valeur. Vous pouvez lui donner le nom que vous voulez.

    Ex: `let profDeWeb = "Marie-Michelle";`. Dans cet exemple, `profDeWeb` est le nom de la variable et `Marie-Michelle` est sa valeur.

??? example "Déclaration de variable"

    C'est la partie (ou l'endroit) dans le code où une variable est créée et est rendue disponible pour être utilisée.

    Important : Avec `let`, il n'est pas possible de redéclarer une variable existante.

    ```js
    let age = 99;
    let age = 55; // ❌ Erreur
    ```

??? example "Initialisation de variable"

    C'est le processus d'assigner une valeur initiale à une variable au moment de sa déclaration ou plus tard dans le code.

    ```js
    let age = 99;  // Déclaration et initialisation
    let nom;       // Déclaration
    nom = "JF";    // Initialisation
    ```

??? example "Type de variable"

    Un type c'est comme une catégorie de variable. Les types de base sont les nombres, les textes, les booléens, les tableaux et les objets.

    ```js
    let age = 99;                               // Type : Nombre (number)
    let nom = "JF";                             // Type : Texte (string)
    let estEtudiant = true;                     // Type : Booléen (boolean)
    let fruits = ["Pomme", "Banane", "Orange"]; // Type : Tableau (array)
    let personne = { nom: "JF", age: 99 };      // Type : Objet (object)
    ```

??? example "Console"

    C’est un espace dans le navigateur où tu peux afficher des messages pour comprendre ce que fait ton programme. C’est aussi là que s’affichent les messages d’erreur si ton programme rencontre un problème.

    ![](../assets/images/console.png){ data-zoom-image }

    [Comment ouvrir les outils pour les développeurs Chrome ?](https://developer.chrome.com/docs/devtools/open?hl=fr)

## Objectif

Déclarer des **variables** de différents **types** et les afficher dans la **console**.

## Résultat attendu

Avec vos propres valeurs :

```txt
Nom : JF
Âge : 99
Est étudiant(e) : false
```

## Instructions

Travaillez dans le fichier `script.js` du dossier de cet exercice (voir la [structure du bootcamp](./js-bootcamp.md)).

* [ ] Déclarez une variable de type chaîne de caractères (string) pour stocker votre nom.
* [ ] Déclarez une variable de type nombre (number) pour stocker votre âge.
* [ ] Déclarez une variable de type booléen (boolean) pour indiquer si vous êtes étudiant(e).
* [ ] Affichez chaque variable dans la console, une par ligne, précédée d'un libellé comme dans le résultat attendu.

[STOP]

## Solution

```js
let nom = "JF";
let age = 99;
let estEtudiant = false;
console.log("Nom : " + nom);
console.log("Âge : " + age);
console.log("Est étudiant(e) : " + estEtudiant);
```
