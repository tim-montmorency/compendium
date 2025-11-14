# Cours 11.2 PHASE INTERACTIVITÉ

Vendredi 14 novembre


<!-- 
- considérer repousser tout d'un cours (donc une demi semaine) car celui-ci est trop intense. 
- les remises y compris.
- ce qui ferait en sorte qu'il ny aurait pas de présentation à la fin mais ils gagneraient un cours supp pour travailler et la remise serait faite disons 3 jours après le cours 15.2
-->

## Rappel impotant! *Vue 3*, version *Option API*

Vous codez avec la version *Vue 3* et surtout vous rappeler qu'on utilise présentement l'*Options API*.

Dans le cadre de ce cours, n'oubliez pas de toujours consulter la docmentation avec l'<em>API Options</em> <img src="./vue/assets/vuejs-options-api-petit.png" alt="Bouton à bascule pour activer Options API dans la documentation Vue.js" style="width: 130px;">

N'allez surtout pas prendre des code n'importe où sans vous rappeler de cette importante information.



## Retour sur routes

<div class="class-content-link">
  <img src="./vue/assets/logo-vue.svg">
  <a href="./vue/router-and-views.html">Routes entre les différentes <em>views</em> (pages)</a>
</div>

### Exercice Routes

[Exercice des routes parmis les chapitres](./exercices/vue-router-chapters/)


## Cours: Pinia

*Pinia* une bibliothèque (`store`) de gestion d'état pour les application Vue.js

<div class="class-content-link">
  <img src="./vue/assets/logo-vue.svg">
  <a href="./vue/pinia.html"><em>Pinia</em>: bibliothèque (<code>store</code>)</a>
</div>


## Cours: Les méthodes de l'objet Array en JavaScript

[Liste des méthodes de l'objet Array sur w3School](https://www.w3schools.com/js/js_array_reference.asp)

Exemples:

- `length`
- `push()`
- `sort()`
- `slice()`
- `splice()`
- `findIndex()`
- `reduce()`
- `find()`
- `shift()`
- `pop()`
- `concat()`


## Travail en classe Mise en place de store *Pinia*

En plus du travail de cours précédents (cours 10.2 et 11.1), voici ce qui s'ajoute:

### *Mémoire interactive*

#### Création des stores Pinia

- `useMuseumStore.js` (structure de base)
- `useMemoryStore.js` (structure de base)

#### Développement des composants clés

- `RoomCard.vue` (carte de salle)
- `MemoryCard.vue` (carte de mémoire)
- `MemoryList.vue` (liste ou grille des mémoires)

### *Trace ton chemin*

#### Création des stores Pinia

- `useStoryStore.js` (chapitres, navigation)
- `usePlayerStore.js` (état du joueur)
