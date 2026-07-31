# Cours 7 | Alpine.js

[STOP]

<!-- **Savoirs :** #11 Sauvegarde côté client (localStorage) · #15 Interactivité · #18 Introduction à un cadriciel JavaScript -->

*[CDN]: Content Delivery Network
*[DOM]: Document Object Model
*[npm]: Node Package Manager

![](./assets/images/alpinejs-banner.jpg){.w-100}

Au cours 4, vos composantes DaisyUI vous ont donné de l'interactivité « gratuite »&nbsp;: un `drawer` qui s'ouvre, des `tabs` qui changent… le tout **sans JavaScript**, grâce à des astuces HTML/CSS.

Mais ces astuces ont des limites. Dès qu'on veut de la **vraie logique** - compter, filtrer une liste, réagir à une saisie, **retenir** un choix après un rechargement - il faut une couche de programmation. C'est le rôle d'**[Alpine.js](https://alpinejs.dev/)** 🏔️&nbsp;: de la réactivité qu'on **saupoudre directement dans le HTML**.

## Cadriciel ou librairie ?

Depuis le début de la session, vous utilisez des **cadriciels** (Tailwind, DaisyUI). Alpine en est un aussi, mais côté JavaScript. En quoi est-ce différent d'une simple **librairie**&nbsp;?

| | Librairie | Cadriciel (_framework_) |
| :--- | :--- | :--- |
| **Qui appelle qui** | *Vous* appelez son code quand vous voulez | *Lui* appelle votre code selon ses règles |
| **Analogie** | Une boîte à outils | Un plan de maison |
| **Exemple** | `Math.random()`, `fetch()` (on les appelle) | Tailwind, DaisyUI, Alpine |

Alpine est un **cadriciel JavaScript léger**&nbsp;: on ne l'appelle pas, on **décrit** le comportement voulu avec des attributs `x-`, et Alpine s'occupe du reste.

!!! note "Le JavaScript, on le connaît déjà"

    Alpine ne remplace pas le JavaScript&nbsp;: il l'accueille. Les expressions que vous écrivez dans les directives (`count++`, `message.length`, `theme === 'dark'`) sont du **JS pur**, celui vu en Programmation interactive. Alpine se contente de le brancher au DOM.

## Pourquoi Alpine ?

L'idée d'Alpine est simple&nbsp;: **rendre le JavaScript courant plus facile à gérer**. Les tâches d'interface qu'on répète tout le temps - réagir à un clic, afficher ou masquer un élément, parcourir une liste, lier un champ de formulaire - deviennent de **courtes directives dans le HTML**, au lieu de longs blocs de code.

| Tâche courante | Sans Alpine (JS à la main) | Avec Alpine |
| :--- | :--- | :--- |
| Réagir à un **clic** | `querySelector` + `addEventListener` | `@click="…"` |
| **Afficher / masquer** | modifier `element.style.display` | `x-show="…"` |
| **Répéter** une liste | une boucle + `innerHTML` | `x-for="…"` |
| **Lier** un champ | lire `.value` puis resynchroniser | `x-model="…"` |

Comparez le même bouton bascule, à la main puis avec Alpine&nbsp;:

=== "JavaScript à la main"

    ```html
    <button id="btn">Basculer</button>
    <p id="msg" style="display:none">Coucou 👋</p>

    <script>
      const btn = document.querySelector('#btn')
      const msg = document.querySelector('#msg')
      let ouvert = false
      btn.addEventListener('click', () => {
        ouvert = !ouvert
        msg.style.display = ouvert ? 'block' : 'none'
      })
    </script>
    ```

=== "Alpine"

    ```html
    <div x-data="{ ouvert: false }">
      <button @click="ouvert = !ouvert">Basculer</button>
      <p x-show="ouvert">Coucou 👋</p>
    </div>
    ```

À gauche, on doit aller **chercher** les éléments, poser un écouteur, puis mettre le DOM à jour soi-même (style **impératif**). À droite, on **décrit** l'état voulu et Alpine garde la page synchronisée tout seul (style **déclaratif**). C'est ça, la **réactivité**&nbsp;: on change une donnée, l'affichage suit.

!!! warning "Alpine n'enlève pas le JavaScript"

    Les expressions restent du JS pur (`compteur++`, `message.length`). Alpine enlève la **tuyauterie** répétitive autour des tâches d'interface courantes, pas la logique. Résultat&nbsp;: on écrit **moins** de code, et un code **plus proche du HTML**.

## Installation

Alpine s'installe de deux façons. Pour un test rapide, le CDN suffit. Pour votre projet **Digger** (déjà sous Vite), on privilégie le module npm.

=== ":material-flash: CDN (rapide)"

    ```html title="index.html"
    <head>
      ...
      <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
    </head>
    ```

    !!! warning "N'oubliez pas le `defer`"

        Sans l'attribut `defer`, Alpine s'exécute avant que le HTML soit chargé et rien ne fonctionne.

=== ":simple-vite: npm (projet Vite)"

    ```bash
    npm install alpinejs
    ```

    ```js title="src/main.js"
    import Alpine from 'alpinejs'

    window.Alpine = Alpine
    Alpine.start()
    ```

    !!! warning "Un seul `Alpine.start()`"

        Appelez `Alpine.start()` **une seule fois** par page, sinon vous aurez plusieurs instances d'Alpine en conflit.

!!! danger "Le piège `x-cloak`"

    Au chargement, il y a un bref instant où Alpine n'est pas encore prêt&nbsp;: les éléments cachés peuvent « flasher » à l'écran. La parade&nbsp;: ajoutez l'attribut `x-cloak` sur ces éléments **et** cette règle CSS&nbsp;:

    ```css
    [x-cloak] { display: none !important; }
    ```

## Premier composant

Tout part de la directive **`x-data`**&nbsp;: elle déclare un « composant » et son **état** (un objet JavaScript). Tout ce qui est à l'intérieur de la balise peut lire et modifier cet état.

```html
<div x-data="{ ouvert: false }">
  <button x-on:click="ouvert = !ouvert">Basculer</button>

  <p x-show="ouvert">Coucou 👋</p>
</div>
```

Trois choses se passent&nbsp;:

1. `x-data="{ ouvert: false }"` crée un état avec une variable `ouvert`.
2. `x-on:click` inverse `ouvert` à chaque clic.
3. `x-show` affiche le `<p>` **seulement** quand `ouvert` est vrai.

C'est ça, la **réactivité**&nbsp;: on change une donnée, et l'affichage se met à jour tout seul. Plus besoin de `document.querySelector` ni de manipuler le DOM à la main.

<!-- CODEPEN: Premier composant Alpine (bouton bascule x-show) -->

## Les directives essentielles

Une **directive** est un attribut HTML qui commence par `x-`. En voici le tableau de référence&nbsp;:

| Directive | Rôle |
| :--- | :--- |
| [`x-data`](https://alpinejs.dev/directives/data) | Déclare un composant et son état (objet) |
| [`x-text`](https://alpinejs.dev/directives/text) | Insère du **texte** dans l'élément |
| [`x-html`](https://alpinejs.dev/directives/html) | Insère du **HTML** dans l'élément |
| [`x-bind`](https://alpinejs.dev/directives/bind) (`:`) | Lie un **attribut** à une expression |
| [`x-on`](https://alpinejs.dev/directives/on) (`@`) | Écoute un **événement** |
| [`x-model`](https://alpinejs.dev/directives/model) | Liaison **bidirectionnelle** sur un champ |
| [`x-show`](https://alpinejs.dev/directives/show) | Affiche / masque (via `display`) |
| [`x-if`](https://alpinejs.dev/directives/if) | Ajoute / retire du DOM (sur `<template>`) |
| [`x-for`](https://alpinejs.dev/directives/for) | Boucle sur une liste (sur `<template>`) |
| [`x-init`](https://alpinejs.dev/directives/init) | Exécute du code à l'initialisation |
| [`x-transition`](https://alpinejs.dev/directives/transition) | Anime l'apparition / la disparition |
| [`x-ref`](https://alpinejs.dev/directives/ref) | Nomme un élément pour y accéder via `$refs` |
| [`x-cloak`](https://alpinejs.dev/directives/cloak) | Cache l'élément tant qu'Alpine n'est pas prêt |

### `x-text` et `x-html`

Affichent une valeur dans l'élément.

```html
<div x-data="{ nom: 'Digger' }">
  <p>Bonjour <span x-text="nom"></span> !</p>
</div>
```

!!! warning "`x-html` = danger potentiel"

    `x-html` injecte du HTML brut. Ne l'utilisez **jamais** avec du contenu venant de l'utilisateur&nbsp;: c'est une porte d'entrée aux attaques XSS. Dans le doute, `x-text`.

### `x-on` (`@`) - les événements

Écoute un événement et exécute une expression. `x-on:click` s'écrit aussi `@click` (raccourci).

```html
<div x-data="{ compteur: 0 }">
  <button @click="compteur++">+1</button>
  <span x-text="compteur"></span>
</div>
```

On peut écouter n'importe quel événement (`@input`, `@submit`, `@keyup`…) et ajouter des **modificateurs**&nbsp;:

| Modificateur | Effet |
| :--- | :--- |
| `@submit.prevent` | Annule le comportement par défaut (`preventDefault`) |
| `@click.outside` | Se déclenche au clic **hors** de l'élément |
| `@keyup.enter` | Uniquement sur la touche Entrée |
| `@click.once` | Une seule fois |

### `x-model` - la liaison bidirectionnelle

Synchronise un champ de formulaire avec l'état, dans les **deux sens**&nbsp;: on tape, l'état change; l'état change, le champ suit.

```html
<div x-data="{ message: '' }">
  <input type="text" x-model="message" class="input" placeholder="Écrivez…">
  <p>Aperçu en direct : <span x-text="message"></span></p>
  <p x-text="message.length + ' caractères'"></p>
</div>
```

<!-- CODEPEN: x-model, aperçu en direct + compteur de caractères -->

### `x-show` ou `x-if` ?

Les deux gèrent l'affichage conditionnel, mais **différemment** - une distinction classique en entrevue 😉.

| | `x-show` | `x-if` |
| :--- | :--- | :--- |
| Mécanisme | Bascule `display: none` | Ajoute/retire du DOM |
| L'élément existe dans le DOM | Toujours | Seulement si vrai |
| S'utilise sur | N'importe quel élément | Une balise `<template>` |
| Idéal pour | Ce qu'on montre/cache souvent | Ce qui est lourd ou rarement affiché |

```html title="x-if exige un <template>"
<div x-data="{ connecte: false }">
  <template x-if="connecte">
    <p>Bienvenue !</p>
  </template>
</div>
```

### `x-bind` (`:`) - lier un attribut

Rend n'importe quel attribut dynamique. `x-bind:class` s'écrit `:class`.

```html
<div x-data="{ actif: true }">
  <button :class="actif ? 'btn btn-primary' : 'btn btn-ghost'">
    État
  </button>
</div>
```

!!! tip "Combo avec DaisyUI"

    `:class` est parfait pour basculer les **classes sémantiques** DaisyUI (`btn-primary`, `badge-error`…) selon l'état. C'est là qu'Alpine et DaisyUI brillent ensemble.

### `x-for` - répéter une liste

Boucle sur un tableau, toujours sur une balise `<template>` avec une clé `:key`.

```html
<ul x-data="{ fruits: ['Pomme', 'Kiwi', 'Mangue'] }">
  <template x-for="fruit in fruits" :key="fruit">
    <li x-text="fruit"></li>
  </template>
</ul>
```

## Les propriétés magiques

En plus des directives, Alpine offre des **magies** (préfixe `$`) accessibles dans les expressions.

| Magie | Rôle |
| :--- | :--- |
| [`$el`](https://alpinejs.dev/magics/el) | L'élément DOM courant |
| [`$refs`](https://alpinejs.dev/magics/refs) | Les éléments marqués `x-ref` |
| [`$event`](https://alpinejs.dev/directives/on#accessing-the-event-object) | L'objet événement natif |
| [`$watch`](https://alpinejs.dev/magics/watch) | Observe une propriété et réagit |
| [`$store`](https://alpinejs.dev/magics/store) | Accès à un état **global** partagé |
| [`$dispatch`](https://alpinejs.dev/magics/dispatch) | Émet un événement personnalisé |
| [`$persist`](https://alpinejs.dev/plugins/persist) | Sauvegarde une valeur dans `localStorage` (plugin) |

## Sauvegarder l'état : `localStorage` et `$persist`

Voici le chaînon manquant du cours 4&nbsp;: le bouton `theme-controller` changeait le thème, mais **oubliait** le choix au rechargement. Pour s'en souvenir, il faut écrire dans le **`localStorage`** du navigateur.

Le `localStorage`, c'est un petit espace de stockage clé/valeur qui **survit** aux rechargements et à la fermeture de l'onglet.

=== "À la main (JavaScript pur)"

    ```js
    // Écrire
    localStorage.setItem('theme', 'dark')
    // Lire
    const theme = localStorage.getItem('theme')
    ```

=== "Avec le plugin $persist (Alpine)"

    ```html
    <div x-data="{ compteur: $persist(0) }">
      <button @click="compteur++" x-text="compteur"></button>
    </div>
    ```

    Rechargez la page&nbsp;: le compteur garde sa valeur 🎉. Alpine s'occupe de tout.

### Installer le plugin Persist

=== ":material-flash: CDN"

    Le plugin va **avant** le cœur d'Alpine.

    ```html
    <script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/persist@3.x.x/dist/cdn.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
    ```

=== ":simple-vite: npm"

    ```bash
    npm install @alpinejs/persist
    ```

    ```js title="src/main.js"
    import Alpine from 'alpinejs'
    import persist from '@alpinejs/persist'

    Alpine.plugin(persist)
    window.Alpine = Alpine
    Alpine.start()
    ```

!!! tip "Nommer la clé de stockage"

    Par défaut, la clé du `localStorage` reprend le nom de la variable. Pour éviter les collisions, on la nomme avec `.as()`&nbsp;:

    ```html
    <div x-data="{ compteur: $persist(0).as('digger-compteur') }"></div>
    ```

### Exemple complet : un sélecteur de thème persistant

On réunit tout&nbsp;: état (`x-data`), liaison d'attribut (`:data-theme`), événement (`@click`) et persistance (`$persist`). Le thème DaisyUI choisi est **retenu** d'une visite à l'autre.

```html
<html x-data="{ theme: $persist('light') }" :data-theme="theme">
  <body>
    <button class="btn" @click="theme = (theme === 'light' ? 'dark' : 'light')">
      Thème : <span x-text="theme"></span>
    </button>
  </body>
</html>
```

<!-- CODEPEN: Sélecteur de thème DaisyUI persistant avec Alpine ($persist) -->

!!! success "Ce qu'on vient de faire"

    On a couvert l'**interactivité** (savoir #15), l'**introduction à un cadriciel JS** (savoir #18) et la **sauvegarde côté client** (savoir #11) - le tout en restant proche du HTML. Exactement ce que le cours exige, sans la lourdeur d'un gros _framework_.

## Exercice

<!-- À COMPLÉTER : carte d'exercice Alpine (dossier activite/alpine à créer), même gabarit que les cartes du cours 2. -->

- [ ] Ajoutez à votre projet **Digger** un sélecteur de thème clair/sombre en Alpine, **persistant** via `$persist`.
- [ ] Créez un mini-formulaire de contact avec un **compteur de caractères** en direct (`x-model` + `x-text`).
- [ ] Affichez une liste d'éléments avec `x-for`, et un bouton qui en ajoute un.
