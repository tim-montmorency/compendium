---
tags:
  - Exercice
---

[:material-arrow-u-left-top: Bootcamp JavaScript](./js-bootcamp.md){.breadcrumb}

# Fonctions

![](../assets/images/fonctions_banner.png)

## Matière à connaître

!!! example "Fonction"

    Une fonction c'est un bloc de code qu'on peut utiliser plusieurs fois.

    Le nom de la fonction doit idéalement contenir un verbe pour expliquer l'action qu'elle doit faire.

    Elle recoit parfois des **paramètres** et **renvoie** (`return`) parfois une valeur. Ça dépend de ce qu'on veut en faire.

    ```js
    function nomDeMaFonction(paramètres){
      return valeur;
    }
    ```

!!! example "Paramètres"

    Les fonctions peuvent recevoir des données qu'on leur transmet. Ces données s'appellent des **paramètres** (ou arguments).

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

!!! example "Fonction fléchée"

    Une fonction fléchée c'est juste une manière plus contemporaine d’écrire des fonctions en JavaScript.

    ```js
    const nomDeMaFonction = (param1, param2, param3) => {

    };
    ```

## Objectif

À l'aide d'une boucle et d'une fonction, calculez le total de la facture.

Code de départ :

```js
const TPS = 0.05; // 5%
const TVQ = 0.09975; // 9,975%
const facture = [
  { item: "Costume d'Halloween", cout: 58.99 },
  { item: "Bonbons", cout: 185.49 },
  { item: "Décorations d'Halloween", cout: 94.00 },
];
```

## Résultat attendu

```console
Total de la facture : 389.17$
```

Indice

Si votre résultat donne `Total de la facture : 389.16738000000004$` c'est que vous avez réussi l'exercice ! Pour conserver seulement 2 chiffres après la virgule, vous pouvez utiliser la méthode `toFixed(2)`. Par exemple : `totalFacture.toFixed(2)`;

## Instructions

- [ ] Ajouter une fonction `calculerLesTaxes` qui recoit le paramètre `cout` et qui retourne un total (avec les taxes).
- [ ] Commencez par calculer un à un les totaux pour chaque item de la facture, puis additionnez les pour obtenir le résultat attendu.
- [ ] Afficher le total de la facture dans la console.
- [ ] Maintenant, utilisez une boucle `for` pour effectuer l'addition des totaux.
- [ ] Afficher le total de la facture dans la console.

## Solution

```js
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
