---
tags:
  - Exercice
---

[:material-arrow-u-left-top: Bootcamp JavaScript](./js-bootcamp.md){.breadcrumb}

# Objets

![](../assets/images/objets_banner.png)

## Matière à connaître

!!! example "Objet"

    Un objet en JavaScript est une liste de propriétés.

    ```js
    let monObjet = {
      cleA: valeurA,
      cleB: valeurB,
      cleC: valeurC
    };
    ```

!!! example "Propriété"

    Une propriété est composée d'un identifiant (appelé clé) et d'une valeur.

    On peut accéder aux propriétés d’un objet en utilisant la notation par point `.` ou par crochets `[]`.

    ```js
    console.log( monObjet.cleA );
    console.log( monObjet['cleA'] );
    ```

    ```js title="Ajout de propriété"
    monObjet.cleD = 1337;
    ```

    ```js title="Suppression de propriété"
    delete monObjet.cleD;
    ```

**Objectif**

Créez et manipulez un objet représentant une planète du système solaire.

**Instructions**

* [ ] Créez une variable «planete» de type objet.
* [ ] Ajouter les propriétés  `nom`, `rayon` et `masse` d'une planète de [votre choix](https://sites.uni.edu/morgans/astro/course/Notes/section4/planets1.html).
* [ ] Modifiez la valeur de la propriété nom pour qu’elle soit en majuscules.
* [ ] Affichez l’objet dans la console.
* [ ] **Ajoutez** une nouvelle propriété `anneaux` avec la valeur `true` ou `false` en fonctione de la planète choisie.
* [ ] Affichez l’objet dans la console.
* [ ] **Supprimez** la propriété anneaux de l’objet.
* [ ] Affichez l’objet dans la console.

## Solution

```js
let planete = {
  nom: "Terre",
  rayon: 6378,
  masse: 6.0e24 // 6000000000000000000000000
};
planete.nom = planete.nom.toUpperCase();
console.log(planete);
planete.anneaux = false;
console.log(planete);
delete planete.anneaux;
console.log(planete);
```
