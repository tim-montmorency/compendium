---
tags:
  - Exercice
---

# Fonctions

![](./fonctions_banner.png)

## Matière à connaître

??? example "Fonction"

    Une fonction c'est un bloc de code qu'on peut utiliser plusieurs fois.

    Le nom de la fonction doit idéalement contenir un verbe pour expliquer l'action qu'elle doit faire.

    Elle reçoit parfois des **paramètres** et **renvoie** (`return`) parfois une valeur. Ça dépend de ce qu'on veut en faire.

    ```js
    function nomDeMaFonction(paramètres){
      return valeur;
    }
    ```

??? example "Paramètres"

    Les fonctions peuvent recevoir des données qu'on leur transmet. Dans la définition de la fonction, on les appelle des **paramètres**. Lors de l'appel, les valeurs qu'on transmet s'appellent des **arguments**.

    > On dit qu'on « appelle » une fonction lorsqu'on veut l'utiliser, puis on lui « passe » des arguments.

    ```js
    function nomDeMaFonction(param1, param2) {

    }

    nomDeMaFonction(arg1, arg2);
    ```

    **Exemple concret**

    ```js
    function additionner(a, b) {
        let resultat = a + b;
        return resultat;
    }

    let total1 = additionner(5, 3);
    let total2 = additionner(10, 20);
    ```

??? example "Fonction fléchée"

    Une fonction fléchée c'est juste une manière plus contemporaine d’écrire des fonctions en JavaScript.

    ```js
    const nomDeMaFonction = (param1, param2, param3) => {

    };
    ```

## Objectif

À l'aide d'une boucle et d'une fonction, calculer le total d'une facture, taxes incluses.

## Résultat attendu

```txt title="Console"
Total de la facture : 389.17$
```

## Instructions

Dans le fichier `script.js` :

* [ ] Ajouter le code de départ :

  ```js
  const TPS = 0.05; // 5%
  const TVQ = 0.09975; // 9,975%
  const facture = [
    { item: "Costume d'Halloween", cout: 58.99 },
    { item: "Bonbons", cout: 185.49 },
    { item: "Décorations d'Halloween", cout: 94.00 },
  ];
  ```

### Étape 1

* [ ] Ajouter une fonction `calculerLesTaxes` qui reçoit le paramètre `cout` et qui retourne le coût incluant les taxes (TPS et TVQ)
* [ ] Tester la fonction avec le coût du premier item et afficher le résultat dans la console :

  ```js
  console.log( calculerLesTaxes(facture[0].cout) );
  ```

* [ ] Vérifier dans la console :

  ```txt title="Console"
  67.8237525
  ```

* [ ] Effectuer un `commit` avec le message « Fonction calculerLesTaxes »

### Étape 2

* [ ] Appeler la fonction une fois pour **chaque** item de la facture (`facture[0]`, `facture[1]` et `facture[2]`), puis additionner les résultats dans une variable `totalFacture`
* [ ] Afficher le total de la facture dans la console
* [ ] Vérifier dans la console :

  ```txt title="Console"
  Total de la facture : 389.16738000000004$
  ```

  !!! note "Trop de décimales ?"

      Pour conserver seulement 2 chiffres après la virgule, utiliser la méthode `toFixed(2)`. 
      
      Par exemple : `totalFacture.toFixed(2)`.

* [ ] Arrondir le total à 2 décimales et vérifier que la console affiche le résultat attendu
* [ ] Effectuer un `commit` avec le message « Total un à un »

### Étape 3

> Que se passerait-il si la facture contenait 50 items ? Une boucle fera le travail à votre place.

* [ ] Remplacer les appels un à un par une boucle `for` qui parcourt la facture et additionne le total de chaque item dans `totalFacture`
* [ ] Vérifier dans la console que le total est toujours le même que le résultat attendu
* [ ] Effectuer un `commit` avec le message « Total avec une boucle »
* [ ] Effectuer un `push`

<figure markdown>
![](./invoice.gif){.w-50}
</figure>

[STOP]

## Solution

```js title="script.js"
const TPS = 0.05; // 5%
const TVQ = 0.09975; // 9,975%
const facture = [
  { item: "Costume d'Halloween", cout: 58.99 },
  { item: "Bonbons", cout: 185.49 },
  { item: "Décorations d'Halloween", cout: 94.00 },
];

function calculerLesTaxes(cout) {
  const totalTps = cout * TPS;
  const totalTVQ = cout * TVQ;
  return cout + totalTps + totalTVQ;
}

let totalFacture = 0;
for (let i = 0; i < facture.length; i++) {
  const cout = facture[i].cout;
  const totalAvecTaxes = calculerLesTaxes(cout);
  totalFacture += totalAvecTaxes;
}

console.log("Total de la facture : " + totalFacture.toFixed(2) + "$");
```
