---
tags:
  - Exercice
---

# Les conditions (`if`)

![](./conditions_banner.png)

## Matière à connaître

??? example "Condition"

    Une condition permet de prendre des **décisions**. Le résultat d'une condition est soit **vrai** ou **faux**.

    La structure de base utilise les instructions `if` et `else`.

    ```js
    if (conditionA) {
        // Code à exécuter si la condition est vraie
    } else if (conditionB) {
        // Code à exécuter si la conditionA est fausse et la conditionB est vraie
    } else {
        // Code à exécuter si toutes les conditions sont fausses
        // Aussi appelé un fallback.
    }
    ```

    Quelques exemples :

    ```js
    let age = 15;

    if(age > 19) {
         // Code à exécuter si :
         //  - l'âge est plus grand que 19
    }

    if(age < 19 && age > 16) {
         // Code à exécuter si :
         //  - l'âge est plus petit que 19
         //  ET
         //  - l'âge est plus grand que 16

         // Autrement dit, code à exécuter si l'âge est de 17 ou 18
    }

    if(age > 19 || age <= 16 || age === 18) {
        // Code à exécuter si :
        //  - l'âge est plus grand que 19
        //  OU
        //  - l'âge est plus petit ou égal à 16
        //  OU
        //  - l'âge est égal à 18
    }
    ```

??? example "Critères"

    Les **critères** définissent les conditions qui doivent être remplies.

    Voyez cela comme des **exigences** ou des **règles** à respecter.

    ```js
    let age = 15;

    // Critères
    const critere1 = age < 19; // Age plus petit que 19
    const critere2 = age > 16; // Age plus grand que 16

    // Condition pour vérifier si tous les critères sont remplis
    if (critere1 && critere2) {
        // Code à exécuter
    }
    ```

## Objectif

Utiliser une **condition** pour décider si une personne est admissible à un programme.

Pour être admissible, il faut remplir **les deux critères** :

* être étudiant(e)
* être âgé(e) d'au moins 18 ans

## Résultat attendu

Chaque cas s'ajoute à la suite des précédents dans la console.

```txt title="Console : Cas 1"
25 ans, étudiant(e) : false
N'est pas admissible au programme
```

```txt title="Console : Cas 2"
100 ans, étudiant(e) : true
Admissible au programme
```

```txt title="Console : Cas 3"
18 ans, étudiant(e) : true
Admissible au programme
```

```txt title="Console : Cas 4"
16 ans, étudiant(e) : true
N'est pas admissible au programme
```

## Instructions

Dans le fichier `script.js` :

* [ ] Ajouter les variables de départ :

  ```js
  let age = 25;
  let estEtudiant = false;
  ```

### Cas 1

* [ ] Afficher dans la console l'âge et le statut d'étudiant(e) comme dans le résultat attendu
* [ ] Ajouter une condition avec `if` et `else` qui vérifie les critères (voir Objectif) et affiche dans la console le message approprié : « Admissible au programme » ou « N'est pas admissible au programme »
* [ ] Vérifier dans la console que l'affichage correspond au résultat attendu
* [ ] Effectuer un `commit` avec le message « Cas 1 »

### Cas 2

* [ ] Ne pas effacer le code du Cas 1
* [ ] Sous le code du Cas 1, assigner de nouvelles valeurs aux variables (`age = 100` et `estEtudiant = true`), puis copier-coller l'affichage et la condition du Cas 1.
* [ ] Vérifier dans la console que l'affichage correspond au résultat attendu
* [ ] Effectuer un `commit` avec le message « Cas 2 »

### Cas 3

* [ ] Même chose avec `age = 18` et `estEtudiant = true`
* [ ] Vérifier dans la console que l'affichage correspond au résultat attendu
* [ ] Effectuer un `commit` avec le message « Cas 3 »

### Cas 4

* [ ] Même chose avec `age = 16` et `estEtudiant = true`
* [ ] Vérifier dans la console que l'affichage correspond au résultat attendu
* [ ] Effectuer un `commit` avec le message « Cas 4 », puis un `push`


<figure markdown>
![](./Philosoraptor.jpg){.w-50}
</figure>

!!! question "Trouvez-vous que vous répétez souvent le même code ?"

    C'est normal ! On verra comment éviter ça dans l'exercice sur les **fonctions**.

[STOP]

## Solution

```js
// Cas 1
let age = 25;
let estEtudiant = false;
console.log(age + " ans, étudiant(e) : " + estEtudiant);
if (estEtudiant && age >= 18) {
    console.log("Admissible au programme");
} else {
    console.log("N'est pas admissible au programme");
}

// Cas 2
age = 100;
estEtudiant = true;
console.log(age + " ans, étudiant(e) : " + estEtudiant);
if (estEtudiant && age >= 18) {
    console.log("Admissible au programme");
} else {
    console.log("N'est pas admissible au programme");
}

// Cas 3
age = 18;
estEtudiant = true;
console.log(age + " ans, étudiant(e) : " + estEtudiant);
if (estEtudiant && age >= 18) {
    console.log("Admissible au programme");
} else {
    console.log("N'est pas admissible au programme");
}

// Cas 4
age = 16;
estEtudiant = true;
console.log(age + " ans, étudiant(e) : " + estEtudiant);
if (estEtudiant && age >= 18) {
    console.log("Admissible au programme");
} else {
    console.log("N'est pas admissible au programme");
}
```
