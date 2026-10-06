---
tags:
  - Exercice
---

# Les boucles

![](./boucles_banner.png)

## Matière à connaître

??? example "Boucle"

    Une boucle permet de répéter plusieurs fois le même code. À chaque **itération**, le code se répète, mais il traite une information différente.

??? example "Itération"

    Une **itération** est une seule exécution d’une boucle.

    Chaque passage à travers la boucle est appelé une itération.

    Par exemple, si le code dans une boucle s’exécute 5 fois, on dit qu’il y a eu 5 itérations.

??? example "Incrémentation"

    Ce qu'on appelle incrémentation c'est quand on augmente la valeur d’une variable.

    Par exemple, si on écrit

    ```js
    let i = 0;

    i++; // Additionne 1 à la variable `i`. On dit alors qu'on incrémente `i` de 1.
    i = i + 1; // Donne exactement le même résultat que `i++`;
    ```

??? example "Boucle for"

    En programmation, il existe plusieurs façons d'effectuer des boucles.

    La boucle `for` est idéale lorsque vous savez à l’avance combien de fois vous devez répéter un bout de code.

    Une boucle `for` s'écrit de la manière suivante :

    ```js
    for (initialisation; condition; incrémentation) {
        // Code à répéter
    }
    ```

    * **Initialisation** : Déclare et initialise une variable qui va nous servir de compteur. Le compteur sert à garder le fil. Il sert à savoir où on est rendu dans la boucle.
    * **Condition** : Tant que cette condition est vraie, la boucle continue de boucler! C'est la partie qui décide quand la boucle se termine.
    * **Incrémentation** : Modifie la variable compteur après chaque itération (généralement en l’incrémentant de 1).

    ```js title="Exemple"
    let fruits = ["Pomme", "Banane", "Orange"];

    // Tant que la variable `i` est plus petite que `fruits.length` (3), on effectue une nouvelle itération.
    for (let i = 0; i < fruits.length; i++) {
        console.log("Fruit : " + fruits[i]);
    }
    ```

??? example "Boucle for..in"

    En programmation, il existe plusieurs façons d’effectuer des boucles.

    La boucle `for..in` est idéale pour parcourir chaque élément d’un objet.

    Une boucle `for..in` s'écrit de la manière suivante :

    ```js
    let objet = {
        cle1: valeurX,
        cle2: valeurY,
        cle3: valeurZ
    };
    for (let cle in objet) {
        // Code à exécuter pour chaque clé
    }
    ```

    * **Clé** : La clé est l’identifiant dans un objet. Chaque clé a toujours une valeur associée.
    * **Objet** : Un objet c'est ce qui regroupe toutes les informations relatives à un même sujet.

    ```js title="Exemple"
    let personne = {
        nom: "Alice",
        age: 25,
        profession: "Étudiante"
    };

    for (let cle in personne) {
        console.log(cle + " : " + personne[cle]);
    }

    // Résultat dans la console :
    // nom : Alice
    // age : 25
    // profession : Étudiante
    ```

## Objectif

Imaginez que vous devez envoyer un seul courriel à une liste de destinataires.

L’exercice consiste à produire le champ « destinataires » du courriel à partir d’un tableau de courriels et d’une boucle `for` en JavaScript.

Un destinataire multiple, c’est simplement une chaîne de caractères composée de courriels séparés par une virgule et une espace.

## Résultat attendu

```text title="Console"
sophie.lemieux@cmontmorency.qc.ca, nicolas.fortier@cmontmorency.qc.ca, emma.caron@cmontmorency.qc.ca, olivier.mercier@cmontmorency.qc.ca, isabelle.bellefeuille@cmontmorency.qc.ca, quentin.bergeron@cmontmorency.qc.ca
```

## Instructions

Dans le fichier `script.js` :

* [ ] Ajouter le tableau des courriels : 

  ```js
  let courriels = [
      "sophie.lemieux@cmontmorency.qc.ca",
      "nicolas.fortier@cmontmorency.qc.ca",
      "emma.caron@cmontmorency.qc.ca",
      "olivier.mercier@cmontmorency.qc.ca",
      "isabelle.bellefeuille@cmontmorency.qc.ca",
      "quentin.bergeron@cmontmorency.qc.ca"
  ];
  ```

### Étape 1

* [ ] Ajouter une boucle `for` qui affiche chaque courriel du tableau dans la console, un par ligne
* [ ] Vérifier dans la console :

  ```txt title="Console"
  sophie.lemieux@cmontmorency.qc.ca
  nicolas.fortier@cmontmorency.qc.ca
  emma.caron@cmontmorency.qc.ca
  olivier.mercier@cmontmorency.qc.ca
  isabelle.bellefeuille@cmontmorency.qc.ca
  quentin.bergeron@cmontmorency.qc.ca
  ```

* [ ] Effectuer un `commit` avec le message « Parcourir le tableau »

### Étape 2

* [ ] Avant la boucle, déclarer une variable `destinataires` qui contient une string vide
* [ ] Dans la boucle, remplacer le `console.log` par l'ajout du courriel à la fin de `destinataires`

  ??? question "Comment ajouter du texte à la fin d'une variable ?"
    
      ```js
      texte += "abc";
      
      // Équivaut à : texte = texte + "abc";
      ```

      Cette opération se nomme « une concaténation ».

* [ ] **Après** la boucle, afficher `destinataires` dans la console
* [ ] Vérifier dans la console (les courriels sont collés, c'est normal) :

  ```txt title="Console"
  sophie.lemieux@cmontmorency.qc.canicolas.fortier@cmontmorency.qc.caemma.caron@cmontmorency.qc.caolivier.mercier@cmontmorency.qc.caisabelle.bellefeuille@cmontmorency.qc.caquentin.bergeron@cmontmorency.qc.ca
  ```

* [ ] Effectuer un `commit` avec le message « Concaténation »

### Étape 3

* [ ] Dans la boucle, ajouter une virgule et une espace (`", "`) après chaque courriel
* [ ] Vérifier dans la console (il reste une virgule de trop à la fin) :

  ```txt title="Console"
  sophie.lemieux@cmontmorency.qc.ca, nicolas.fortier@cmontmorency.qc.ca, emma.caron@cmontmorency.qc.ca, olivier.mercier@cmontmorency.qc.ca, isabelle.bellefeuille@cmontmorency.qc.ca, quentin.bergeron@cmontmorency.qc.ca, 
  ```

* [ ] Effectuer un `commit` avec le message « Séparateurs »

### Étape 4

* [ ] Ajouter une condition `if` dans la boucle pour ne pas ajouter de virgule après le **dernier** courriel
* [ ] Ne pas utiliser la méthode `join()`

  ??? tip "Indice"

      Le dernier courriel se trouve à l'index `courriels.length - 1`.

* [ ] Vérifier que la console affiche le résultat attendu
* [ ] Effectuer un `commit` avec le message « Finition », puis un `push`

<figure markdown>
![](./meeseek.gif){.w-50}
</figure>

[STOP]

## Solution

```js
let courriels = [
    "sophie.lemieux@cmontmorency.qc.ca",
    "nicolas.fortier@cmontmorency.qc.ca",
    "emma.caron@cmontmorency.qc.ca",
    "olivier.mercier@cmontmorency.qc.ca",
    "isabelle.bellefeuille@cmontmorency.qc.ca",
    "quentin.bergeron@cmontmorency.qc.ca"
];

let destinataires = "";

for (let i = 0; i < courriels.length; i++) {
    destinataires += courriels[i];
    if (i < courriels.length - 1) {
        destinataires += ", ";
    }
}

console.log(destinataires);
```
