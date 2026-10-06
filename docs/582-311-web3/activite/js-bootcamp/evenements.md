---
tags:
  - Exercice
---

# Événements

![](./evenements_banner.png)

## Matière à connaître

??? example "Événement"

    Un [événement](https://www.w3schools.com/jsref/dom_obj_event.asp) c'est une **action** qui se passe dans le site Web.

    Par exemple : l'utilisateur clique sur un bouton pour faire apparaître un message.

    * Le clic, c'est le **nom de l'événement**.
    * Le bouton est l'**élément** qui déclenche l'événement.
    * Le message qui apparait est la **réaction** à l'événement.

    Pour ajouter une gestion d'événement, voici la syntaxe :

    ```js
    élément.addEventListener(nom_de_l_événement, réaction);
    ```

??? example "Réaction"

    Pour définir la **réaction** à l'événement, on utilise une **fonction**. Voici 3 façons de définir une fonction :

    ```js title="Avec une fonction fléchée"
    monBouton.addEventListener('click', (e) => {
        alert('monBouton a été cliqué');
    });
    ```

    ```js title="Avec une fonction anonyme"
    monBouton.addEventListener('click', function(e){
        alert('monBouton a été cliqué');
    });
    ```

    ```js title="Avec une fonction nommée"
    function clic(e) {
      alert('monBouton a été cliqué');
    }
    monBouton.addEventListener('click', clic);
    ```

    La lettre `e` représente l'objet **événement** qui contient des informations sur l'événement déclenché. Son ajout est optionnel.

## Objectif

Afficher votre prénom et votre nom sur la page lorsqu'on clique sur un bouton.

## Résultat attendu

![type:video](./event.webm){.h-auto}

## Instructions

Dans le fichier `index.html` :

* [ ] Ajouter le code HTML suivant :

  ```html
  <div class="prenom"></div>
  <div id="nom"></div>

  <button>Salut!</button>
  ```

Dans le fichier `script.js` :

* [ ] Sélectionner chacun des éléments du DOM (les deux balises `div` et le bouton) et placer chaque sélection dans une variable
* [ ] Ajouter une gestion d'événement `click` sur le bouton qui affiche votre prénom dans la première `div` et votre nom dans la deuxième
* [ ] Vérifier dans le navigateur que le prénom et le nom apparaissent sur la page seulement après le clic
* [ ] Effectuer un `commit`, puis un `push`

<figure markdown>
![](./swift.gif){.w-50}
</figure>

[STOP]

## Solution

```js title="script.js"
const bouton = document.querySelector('button');
const divPrenom = document.querySelector('.prenom');
const divNom = document.getElementById('nom');

bouton.addEventListener('click', function(){
  divPrenom.innerHTML = 'JF';
  divNom.innerHTML = 'Cartier';
});
```
