---
tags:
  - Exercice
  - Alpine
---

# 🌗 Jour et nuit

L'objectif de cet exercice est de **basculer le thème d'une page entre clair et sombre** avec Alpine, et surtout de faire en sorte que **le choix survive au rechargement** de la page.

Un visiteur qui a choisi le mode sombre ne devrait pas avoir à le rechoisir à chaque visite&nbsp;: c'est exactement ce que fait le plugin **Persist**, qui range la valeur dans le `localStorage` du navigateur.

<!-- ![](../assets/images/alpine-jour-nuit.png){.w-100 data-zoom-image} -->

## Résultat attendu

Une page DaisyUI avec un interrupteur dans la barre de navigation. Au clic, tout le site bascule de thème. On recharge la page&nbsp;: le thème choisi est toujours là.

## Indices

Deux directives suffisent&nbsp;: `x-data` pour créer l'état, `:data-theme` pour le brancher sur le `<html>`.

Dans la [documentation d'Alpine](https://alpinejs.dev/plugins/persist), cherchez `$persist`. C'est la propriété magique qui fait toute la différence entre un thème qui tient et un thème qui s'oublie 😜

## Instructions

### Mise en place

- [ ] Repartez de votre projet **Digger** (cours 3 et 4) ou créez un nouveau projet Vite
- [ ] Installez Alpine et le plugin Persist&nbsp;:

    ```bash
    npm install alpinejs @alpinejs/persist
    ```

- [ ] Dans `main.js`, importez Alpine, enregistrez le plugin **avant** `Alpine.start()`

### Le thème

- [ ] Sur la balise `<html>`, déclarez un `x-data` contenant une propriété `theme` initialisée avec `$persist('light')`
- [ ] Liez l'attribut `data-theme` de DaisyUI à cette propriété avec `:data-theme`
- [ ] Ajoutez dans la barre de navigation une case à cocher portant la classe DaisyUI `theme-controller`
- [ ] Au `change` de la case, faites basculer `theme` entre `'light'` et votre **thème maison** créé au cours 4
- [ ] Affichez le nom du thème courant à côté de l'interrupteur avec `x-text`

### Vérification

- [ ] Choisissez le mode sombre, rechargez la page&nbsp;: le thème doit tenir
- [ ] Ouvrez les DevTools → onglet **Application** → **Local Storage** et retrouvez la clé créée par `$persist`

!!! tip "Pourquoi ça marche"

    `$persist` intercepte chaque changement de la propriété et l'écrit dans le `localStorage`. Au chargement suivant, Alpine relit la valeur avant d'afficher quoi que ce soit. C'est le **savoir essentiel 11**&nbsp;: la sauvegarde dynamique de données côté client.

[STOP]

## Solution de référence

```html title="index.html"
<html lang="fr" x-data="{ theme: $persist('light') }" :data-theme="theme">
  <!-- … -->
  <label class="swap swap-rotate">
    <input type="checkbox" class="theme-controller"
           @change="theme = theme === 'light' ? 'digger' : 'light'" />
    <span class="swap-on">🌙</span>
    <span class="swap-off">☀️</span>
  </label>
  <span x-text="theme"></span>
</html>
```

```js title="main.js"
import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'

Alpine.plugin(persist)
window.Alpine = Alpine
Alpine.start()
```
