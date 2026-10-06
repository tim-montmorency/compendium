---
tags:
  - Exercice
---

# Objets

![](./objets_banner.png)

## Matière à connaître

??? example "Objet"

    Un objet en JavaScript est une liste de propriétés.

    ```js
    let monObjet = {
      cleA: valeurA,
      cleB: valeurB,
      cleC: valeurC
    };
    ```

??? example "Propriété"

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

## Objectif

Créer et manipuler un objet représentant une planète du système solaire.

## Résultat attendu

Avec la planète de votre choix :

```txt title="Console"
{nom: 'TERRE', rayon: 6378, masse: 6e+24}
{nom: 'TERRE', rayon: 6378, masse: 6e+24, anneaux: false}
{nom: 'TERRE', rayon: 6378, masse: 6e+24}
```

## Instructions

Dans le fichier `script.js` :

* [ ] Créer une variable `planete` de type objet
* [ ] Ajouter les propriétés `nom`, `rayon` et `masse` d'une planète de votre choix, sauf la Terre : 

  | Planète | Rayon (km) | Masse (kg) |
  |---|---:|---:|
  | Mercure | 2 439 | 3.3 × 10<sup>23</sup> |
  | Vénus | 6 052 | 4.9 × 10<sup>24</sup> |
  | <span class="opacity-50">Terre</span> | <span class="opacity-50">6 378</span> | <span class="opacity-50">6.0 × 10<sup>24</sup></span> |
  | Mars | 3 398 | 6.4 × 10<sup>23</sup> |
  | Jupiter | 71 494 | 1.9 × 10<sup>27</sup> |
  | Saturne | 60 330 | 5.7 × 10<sup>26</sup> |
  | Uranus | 25 559 | 8.7 × 10<sup>25</sup> |
  | Neptune | 24 750 | 1.0 × 10<sup>26</sup> |

* [ ] Modifier la valeur de la propriété nom pour qu’elle soit en majuscules à l'aide de la méthode `toUpperCase()`
* [ ] Afficher l’objet dans la console
* [ ] **Ajouter** une nouvelle propriété `anneaux` avec la valeur `true` ou `false` en fonction de la planète choisie.
* [ ] Afficher l’objet dans la console
* [ ] **Supprimer** la propriété `anneaux` de l’objet.
* [ ] Afficher l’objet dans la console
* [ ] Effectuer un `commit`, puis un `push`

<figure markdown>
![](./neptune.gif){.w-50}
</figure>

[STOP]

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
