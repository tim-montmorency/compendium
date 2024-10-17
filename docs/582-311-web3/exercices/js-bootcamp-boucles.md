---
tags:
  - Exercice
---

[:material-arrow-u-left-top: Bootcamp JavaScript](./js-bootcamp.md){.breadcrumb}

# Les boucles

![](../assets/images/boucles_banner.png)

## Matière à connaître

!!! example "Boucle"

    Une boucle permet de répéter plusieurs fois le même code. À chaque **itération**, le code se répète, mais il traite une information différente.

!!! example "Itération"

    Une **itération** est une seule exécution d’une boucle.

    Chaque passage à travers la boucle est appelé une itération.

    Par exemple, si le code dans une boucle s’exécute 5 fois, on dit qu’il y a eu 5 itérations.

!!! example "Incrémentation"

    Ce qu'on appelle incrémentation c'est quand on augmente la valeur d’une variable.

    Par exemple, si on écrit

    ```js
    let i = 0;

    i++; // Additionne 1 à la variable `i`. On dit alors qu'on incrémente `i` de 1.
    i = i + 1; // Donne exactement le même résultat que `i++`;
    ```

!!! example "Boucle for"

    En programmation, il existe plusieurs façons d'effectuer des boucles.

    La boucle `for` est idéale lorsque vous savez à l’avance combien de fois vous devez répéter un bout de code.

    Un boucle `for` s'écrit de la manière suivante :

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

    // Tant que la variable `i` est plus petite que `fruit.length` (3), on effectue une nouvelle itération.
    for (let i = 0; i < fruits.length; i++) {
        console.log("Fruit : " + fruits[i]);
    }
    ```

## Exercice

Imaginez que vous devez envoyer un seul courriel à une liste de destinataires.

L’exercice consiste à produire le contenu du destinataire multiple à partir d’un tableau de courriels et d’une boucle `for` en JavaScript.

Vous devez utiliser ce tableau :

```js
let courriels = [
    "marie.tremblay@cmontmorency.qc.ca",
    "jean.gagnon@cmontmorency.qc.ca",
    "lucie.boucher@cmontmorency.qc.ca",
    "maxime.dubois@cmontmorency.qc.ca",
    "sophie.lemieux@cmontmorency.qc.ca",
    "nicolas.fortier@cmontmorency.qc.ca",
    "emma.caron@cmontmorency.qc.ca",
    "olivier.mercier@cmontmorency.qc.ca",
    "isabelle.bellefeuille@cmontmorency.qc.ca",
    "quentin.bergeron@cmontmorency.qc.ca"
];
```

Un destinataire multiple, c’est simplement une chaîne de caractères composée de courriels séparés par une virgule.

## Résultat attendu

```console
marie.tremblay@cmontmorency.qc.ca, jean.gagnon@cmontmorency.qc.ca, lucie.boucher@cmontmorency.qc.ca, maxime.dubois@cmontmorency.qc.ca, sophie.lemieux@cmontmorency.qc.ca, nicolas.fortier@cmontmorency.qc.ca, emma.caron@cmontmorency.qc.ca, olivier.mercier@cmontmorency.qc.ca, isabelle.bellefeuille@cmontmorency.qc.ca, quentin.bergeron@cmontmorency.qc.ca
```

## Instructions

- [ ] Ajoutez à votre code le tableau contenant une liste de courriels des destinataires.
- [ ] Ajoutez une boucle `for` pour parcourir chaque courriel du tableau et construire une chaîne de caractères où les adresses sont séparées par une virgule. Attention, il ne doit pas y avoir de virgule après le dernier courriel.
- [ ] Affichez dans la console la chaine de caractère des courriels séparés par une virgule.

[STOP]

!!! example "Boucle for..in"

    En programmation, il existe plusieurs façons d’effectuer des boucles.

    La boucle `for..in` est idéale pour parcourir chaque élément d’un objet.

    Un boucle `for..in` s'écrit de la manière suivante :

    ```js
    let objet = {
        clé1: valeurX,
        clé2: valeurY,
        clé3: valeurZ
    };
    for (let clé in objet) {
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

```js
let courriels = [
    "marie.tremblay@cmontmorency.qc.ca",
    "jean.gagnon@cmontmorency.qc.ca",
    "lucie.boucher@cmontmorency.qc.ca",
    "maxime.dubois@cmontmorency.qc.ca",
    "sophie.lemieux@cmontmorency.qc.ca",
    "nicolas.fortier@cmontmorency.qc.ca",
    "emma.caron@cmontmorency.qc.ca",
    "olivier.mercier@cmontmorency.qc.ca",
    "isabelle.bellefeuille@cmontmorency.qc.ca",
    "quentin.bergeron@cmontmorency.qc.ca"
];

let listeDestinataires = "";

for (let i = 0; i < courriels.length; i++) {
    if (i !== 0) {
        listeDestinataires += ", ";
    }
    listeDestinataires += courriels[i];
}

console.log(listeDestinataires);
```
