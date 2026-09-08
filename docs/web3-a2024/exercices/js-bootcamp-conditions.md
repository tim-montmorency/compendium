---
tags:
  - Exercice
---

[:material-arrow-u-left-top: Bootcamp JavaScript](./js-bootcamp.md){.breadcrumb}

# Les conditions (if)

![](../assets/images/conditions_banner.png)

## Matière à connaître

!!! example "Condition"

    Une **condition** permet de prendre des décisions. Le résultat d'une condition est soit **vrai** ou **faux**.

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

    Voici quelques exemples de condition :

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

    if(age > 19 || age <= 16 || age == 18) {
        // Code à exécuter si :
        //  - l'âge est plus grand que 19
        //  OU
        //  - l'âge est plus petit ou égal à 16
        //  OU
        //  - l'âge est égal à 18
    }
    ```

!!! example "Critères"

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

## Exercice

Utiliser des **conditions** pour prendre des **décisions** dans votre code.

Vous devez utiliser ces variables :

```js
let age = 25;
let estEtudiante = false;
```

**Critères** d'admissibilité : Pour être admissible au programme, il faut être étudiante et être agée d'au moins 18 ans.

## Résultat attendu

```console title="Lorsque la condition est vraie"
Admissible au programme
```

```console title="Lorsque la condition est fausse"
N'est pas admissible au programme
```

## Instructions

- [ ] Ajoutez une condition en utilisant les variables données. La condition doit valider les critères spécifiés.
- [ ] Afficher dans la console un message pour chaque conditions.
- [ ] Tester la condition en changeant la valeur des variables.

## Solution

```js
let age = 25;
let estEtudiante = false;

if (estEtudiante && age >= 18) {
    console.log("Admissible au programme");
} else {
    console.log("N'est pas admissible au programme");
}

// age = 20;
// estEtudiante = true;
// if (estEtudiante && age >= 18) {
//     console.log("Admissible au programme");
// } else {
//     console.log("N'est pas admissible au programme");
// }

// age = 16;
// estEtudiante = true;
// if (estEtudiante && age >= 18) {
//     console.log("Admissible au programme");
// } else {
//     console.log("N'est pas admissible au programme");
// }

// age = 22;
// estEtudiante = false;
// if (estEtudiante && age >= 18) {
//     console.log("Admissible au programme");
// } else {
//     console.log("N'est pas admissible au programme");
// }
```
