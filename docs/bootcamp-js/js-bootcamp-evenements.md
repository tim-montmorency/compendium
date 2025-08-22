---
tags:
  - Exercice
---

# Événements

![](./assets/img/evenements_banner.png)

## Matière à connaître

!!! example "Événement"

    Un [événement](https://www.w3schools.com/jsref/dom_obj_event.asp) c'est une **action** qui se passe dans le site Web.

    Par exemple : l'utilisateur clique sur un bouton pour faire apparaître un message.

    * Le clic, c'est le **nom de l'événement**.
    * Le bouton est l'**élément** qui déclenche l'événement.
    * Le message qui apparait est la **réaction** à l'événement.

    Pour ajouter une gestion d'événement, voici la syntaxe :

    ```js
    élément.addEventListener(nom_de_l_événement, réaction);
    ```

!!! example "Réaction"

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

En cliquant sur le bouton, vous devez ajouter votre prénom et nom dans les balises `div`.

Code de départ :

```html
<div class="prenom"></div>
<div id="nom"></div>

<button id="toto">Salut!</button>
```

## Instructions

* [ ] Sélectionnez chacun des éléments du DOM, soit les balises `div` et le bouton.
* [ ] Chaque sélection doit être placée dans une variable.
* [ ] Ajoutez une gestion d'événement sur le bouton pour que lorsque vous le cliquez, il affiche votre prénom et nom dans les balises `div`.

[STOP]

## Solution

```js
const bouton = document.getElementById('toto');
const divPrenom = document.querySelector('.prenom');
const divNom = document.getElementById('nom');

bouton.addEventListener('click', function(){
  divPrenom.innerHTML = 'JF';
  divNom.innerHTML = 'Cartier';
});
```
