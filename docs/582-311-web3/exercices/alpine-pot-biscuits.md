---
tags:
  - Exercice
  - Alpine
---

# 🍪 Pot à biscuits

L'objectif de cet exercice est de faire un **premier composant Alpine**&nbsp;: un pot à biscuits qu'on remplit et qu'on vide à coups de clics, avec quelques messages qui apparaissent selon son contenu.

Tout ce qu'il faut a été vu aujourd'hui&nbsp;: `x-data`, `x-text`, `@click` et `x-show`. Le reste, c'est du JavaScript du camp d'entraînement.

<!-- ![](../assets/images/alpine-pot-biscuits.png){.w-100 data-zoom-image} -->

## Résultat attendu

Une page avec un pot à biscuits. Trois boutons permettent d'**ajouter**, de **manger** et de **vider** les biscuits. Le nombre de biscuits s'affiche en direct, et des messages apparaissent quand le pot est vide ou trop plein.

## Instructions

### Mise en place

- [ ] Créez un nouveau projet Vite (gabarit **Vanilla**, JavaScript)&nbsp;:

    ```bash
    npm create vite@latest pot-a-biscuits
    cd pot-a-biscuits
    npm install
    ```

- [ ] Installez Alpine&nbsp;:

    ```bash
    npm install alpinejs
    ```

- [ ] Videz `src/main.js` et remplacez son contenu par l'importation d'Alpine et `Alpine.start()`
- [ ] Videz le `<body>` de `index.html` en gardant la balise `<script type="module" src="/src/main.js">`
- [ ] Lancez le serveur avec `npm run dev`

### Le pot

- [ ] Créez une `<div>` qui porte un `x-data` avec une propriété `biscuits` qui vaut `3`
- [ ] Dans cette `<div>`, affichez le nombre de biscuits avec `x-text`
- [ ] Ajoutez un bouton **Ajouter** qui augmente `biscuits` de 1
- [ ] Ajoutez un bouton **Manger** qui diminue `biscuits` de 1
- [ ] Ajoutez un bouton **Vider** qui remet `biscuits` à 0

### Les messages

- [ ] Affichez « Le pot est vide 😢 » **seulement** quand il n'y a plus de biscuits (`x-show`)
- [ ] Affichez « Ça déborde ! » **seulement** quand il y a 10 biscuits ou plus
- [ ] Faites en sorte que **Manger** ne fasse pas descendre le compteur sous 0

    ??? question "Indice"

        Une condition peut s'écrire directement dans l'expression du `@click`. Le camp d'entraînement a présenté l'opérateur ternaire et le `&&`.

### Pour aller plus loin

- [ ] Affichez une rangée d'émojis 🍪 à la place du nombre&nbsp;: la méthode `.repeat()` des chaînes de caractères peut servir dans un `x-text`
- [ ] Ajoutez une deuxième propriété `ouvert` et un bouton qui ouvre ou ferme le couvercle&nbsp;: les biscuits ne s'affichent que si le pot est ouvert

[STOP]

## Solution de référence

```js title="src/main.js"
import Alpine from 'alpinejs'

window.Alpine = Alpine
Alpine.start()
```

```html title="index.html"
<!doctype html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Pot à biscuits</title>
</head>
<body>
  <div x-data="{ biscuits: 3, ouvert: true }">
    <h1>Pot à biscuits</h1>

    <button @click="ouvert = !ouvert" x-text="ouvert ? 'Fermer le pot' : 'Ouvrir le pot'"></button>

    <div x-show="ouvert">
      <p>Biscuits : <span x-text="biscuits"></span></p>
      <p x-text="'🍪'.repeat(biscuits)"></p>
    </div>

    <button @click="biscuits++">Ajouter</button>
    <button @click="biscuits > 0 && biscuits--">Manger</button>
    <button @click="biscuits = 0">Vider</button>

    <p x-show="biscuits === 0">Le pot est vide 😢</p>
    <p x-show="biscuits >= 10">Ça déborde !</p>
  </div>

  <script type="module" src="/src/main.js"></script>
</body>
</html>
```
