# :simple-vuedotjs:  Les composants Vue : navigateur de chapitres et barre de progression

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Avec Vue, **on change une donnée, et la page suit**. Plus besoin d'ajouter ou de retirer des classes à la main : on décrit le HTML une fois, Vue le tient à jour.
2. **Deux composants, une personne par composant** : le navigateur de chapitres (`js/navigation.js`) et la barre de progression (`js/progression.js`). Chacun a trois parties : `data`, `methods` et `mounted`.
3. Il fonctionne aux deux phases : à la *phase 1*{ .w5-phase .w5-phase-1 }, la liste des chapitres est **lue dans le HTML**; à la *phase 2*{ .w5-phase .w5-phase-2 }, elle vient de **`data.json`**. Les composants, eux, ne changent pas.

</div>

## Pourquoi Vue, ici? { #pourquoi }

Un navigateur de chapitres se fait aussi en JavaScript seul. Vue est là pour deux raisons :

1. **C'est comme ça que le web se construit aujourd'hui.** React, Vue, Svelte : la plupart des interfaces professionnelles reposent sur la même idée. Vue est la porte d'entrée la plus douce : rien à installer, et une organisation en cases (`data`, `methods`...) proche des classes JS que vous connaissez.
2. **Cette idée change votre façon de coder.** En JavaScript seul, vous dites **comment** changer la page. Avec Vue, vous décrivez **à quoi** elle doit ressembler selon vos données.

En JavaScript seul, à chaque changement de chapitre :

```js
function setActive(index) {
  links[index].classList.add("actif");
  title.textContent = chapters[index].titre;
}
```

<iframe src="https://tim-montmorency.com/Fragment/v/?f=w5-vue-oubli-actif&onglets=js,resultat&actif=resultat" class="aspect-3-2" style="width:100%;border:0" loading="lazy"></iframe>


Voyez-vous l'oubli? La classe `actif` n'est jamais retirée des anciens liens. Après trois chapitres, trois liens sont en rouge. Le piège du code qui dit *comment* : tout ce qu'on ajoute, il faut penser à l'enlever.

Avec Vue, on décrit l'état une fois, dans le HTML :

```html
<a :class="{ actif: index === activeChapterIndex }">
```

On change le chapitre actif, et Vue met à jour tout ce qui en dépend. Un élément de plus qui dépend du chapitre actif? Une ligne de plus dans le HTML, rien d'autre à retoucher. C'est la **réactivité**.

## Installer Vue { #installer }

Par CDN, comme GSAP, sans *build*. Dans `index.html`, **avant** `main.js`, la version de **développement** pendant que vous codez :

```html
<!-- Vue, version de développement : messages d'erreur clairs -->
<script src="https://cdn.jsdelivr.net/npm/vue@3.5.13/dist/vue.global.js">
</script>
<script type="module" src="js/main.js"></script>
```

`Vue` est alors disponible partout, y compris dans vos modules, sans `import`.

!!! tip "Avant de publier : la version de production"
    Remplacez `vue.global.js` par `vue.global.prod.js` : trois fois plus légère, sans les messages de développement. Un bogue apparaît après le changement? Revenez à `vue.global.js` pour lire ses messages. Voir [la documentation de Vue](https://fr.vuejs.org/guide/best-practices/production-deployment.html#without-build-tools){ :target="_blank" }.

## Le HTML : deux zones que Vue contrôle { #html }

Chaque composant vit dans **sa zone** de `index.html` : `#barre-progression` pour la barre, `#navigation` pour le navigateur. Vue contrôle ces zones et leurs enfants, **rien d'autre**. Vos chapitres, eux, restent à vous et à GSAP.

Chaque `TODO` dit à qui il revient : **barre** ou **navigateur**.

```html
<div id="barre-progression" v-cloak>
  <!-- TODO barre : un :style qui applique transform: scaleX(...),
       avec la valeur de progress -->
  <div class="progression"></div>
</div>

<div id="navigation" v-cloak>
  <nav class="chapitres-nav" aria-label="Chapitres">
    <ol>
      <!-- TODO navigateur : répéter ce <li> pour chaque chapitre de chapters,
           avec une :key unique (l'id du chapitre) -->
      <li>
        <!-- TODO navigateur : le href mène à la section (# + son id) -->
        <!-- TODO navigateur : la classe actif, seulement si c'est le
             chapitre actif (son index est égal à activeChapterIndex) -->
        <!-- TODO navigateur : aria-current="step", seulement pour le
             chapitre actif -->
        <!-- TODO navigateur : au clic, appeler goTo(), sans le saut
             habituel du lien -->
        <a href="#">
          <!-- TODO navigateur : afficher le titre du chapitre -->
        </a>
      </li>
    </ol>
  </nav>
</div>
```

Chaque `TODO` se règle avec une des notions de ce tableau : tout ce qu'il faut savoir de Vue pour vos composants.

| Dans le HTML | Nom | Ce que ça fait |
|---|---|---|
| `{{ chapter.titre }}` | Interpolation | Affiche la valeur d'une donnée. Quand elle change, le texte change. |
| `v-for="... in chapters"` | Directive `v-for` | Répète l'élément pour chaque chapitre du tableau. C'est le `forEach` de Vue, directement dans le HTML. |
| `:key="chapter.id"` | Clé | Un identifiant unique par élément répété : Vue s'en sert pour s'y retrouver. |
| `:class="{ actif: ... }"` | Classe dynamique | Ajoute la classe `actif` **si** la condition est vraie, et la retire sinon. |
| `:style`, `:href`, `:aria-current` | Attribut lié (`v-bind`) | Le deux-points veut dire : « la valeur est du JavaScript, pas du texte ». `:style` reçoit un objet, comme `:class`. Forme longue : `v-bind:href`. |
| `@click.prevent="goTo(...)"` | Événement (`v-on`) | Appelle une méthode au clic. `.prevent`, c'est le `event.preventDefault()` : le lien ne saute pas brusquement. Forme longue : `v-on:click`. |
| `v-cloak` | Directive `v-cloak` | Cache la zone **tant que Vue n'a pas démarré** (voir le CSS plus bas). |

Le CSS qui va avec `v-cloak`, dans `commun.css` :

```css
[v-cloak] {
  display: none;
}
```

## Le JavaScript : deux fichiers, trois parties chacun { #js }

Un fichier par composant, une personne par fichier. Ce qui est fourni, c'est du calcul, sans Vue. Les `TODO`, c'est à vous. Le code fourni n'a **aucun commentaire**, et c'est voulu : commentez-le dans vos mots, pour montrer que vous le comprenez. Ça vaut aussi pour le HTML, `main.js` et le CSS de cette page.

### Le navigateur : `js/navigation.js` { #js-navigation }

```js
export function createNavigation(chapters) {
  Vue.createApp({
    data() {
      return {
        // TODO navigateur : 2 données, avec ces noms (le HTML les utilise)
        // - chapters : la liste reçue en paramètre
        // - activeChapterIndex : le chapitre à l'écran (au départ : 0)
      };
    },

    methods: {
      goTo(id) {
        const reduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        // TODO navigateur : faire défiler jusqu'à la section qui a cet id,
        // avec scrollIntoView() : "auto" si reduced, sinon "smooth"
      },

      updateActive() {
        const middle = window.innerHeight / 2;
        this.chapters.forEach((chapter, index) => {
          const section = document.getElementById(chapter.id);
          if (section.getBoundingClientRect().top <= middle) {
            // TODO navigateur : ce chapitre devient le chapitre actif
          }
        });
      },
    },

    mounted() {
      // TODO navigateur : à chaque défilement de la fenêtre ("scroll"),
      // appeler updateActive, avec l'option { passive: true }
      // TODO navigateur : puis appeler updateActive une première fois
    },
  }).mount("#navigation");
}
```

### La barre : `js/progression.js` { #js-progression }

```js
export function createProgressBar() {
  Vue.createApp({
    data() {
      return {
        // TODO barre : 1 donnée, avec ce nom (le HTML l'utilise)
        // - progress : de 0 (en haut) à 1 (en bas de la page), au départ : 0
      };
    },

    methods: {
      updateProgress() {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        // TODO barre : progress vaut la distance défilée divisée par max,
        // ou 0 si max n'est pas plus grand que 0
      },
    },

    mounted() {
      // TODO barre : à chaque défilement de la fenêtre ("scroll"),
      // appeler updateProgress, avec l'option { passive: true }
      // TODO barre : puis appeler updateProgress une première fois
    },
  }).mount("#barre-progression");
}
```

!!! warning "Les `TODO` ne restent pas dans votre code final"
    Les commentaires `TODO` sont des **instructions** pour vous. Remplacez chacun par votre code, puis **effacez-le**. Dans votre récit final, il ne reste **aucun** `TODO` : seulement vos propres commentaires, qui expliquent ce que fait le code. Pour vérifier : ++ctrl+shift+f++ dans VS Code, cherchez `TODO`.

!!! danger "À la défense (cours 15.1, mer. 9 déc.), chaque ligne compte"
    À la [défense individuelle](index.md#calendrier), en privé, vous expliquerez chaque ligne de **votre** composant, et vous devrez pouvoir la modifier en direct. Un code copié sans être compris se voit tout de suite.

Bloqué? Un indice à la fois :

??? tip "Indice navigateur : `data()`"
    Deux paires `clé: valeur`, séparées par une virgule. La valeur de `chapters`, c'est le paramètre reçu par `createNavigation(chapters)`.

??? tip "Indice navigateur : `goTo()`"
    `document.getElementById(id)` trouve la section. La méthode `scrollIntoView()` reçoit un objet d'options, avec une clé `behavior` (sans « u »!). Pour choisir entre deux valeurs : `condition ? siVrai : siFaux`.

??? tip "Indice navigateur : le chapitre actif"
    Dans une méthode, on change une donnée avec `this`. La boucle vous donne déjà l'`index` du chapitre.

??? tip "Indice barre : `:style`"
    `:style` reçoit un objet : la propriété CSS, puis sa valeur. La valeur est une chaîne, comme `scaleX(0.5)` : collez du texte et la donnée `progress` avec `+`.

??? tip "Indice barre : `progress`"
    `window.scrollY` : la distance déjà défilée, en pixels. Pour choisir entre deux valeurs : `condition ? siVrai : siFaux`. Dans une méthode, on change une donnée avec `this`.

??? tip "Indice pour les deux : `mounted()`"
    `window.addEventListener(type, fonction, options)`. La fonction, c'est votre méthode, `this.updateActive` ou `this.updateProgress`, **sans parenthèses** : on la donne, on ne l'appelle pas. L'appel « une première fois », lui, prend des parenthèses. Un exemple complet, avec `"resize"` : [Le cycle de vie : `mounted()`](../../vue/mounted.md#syntaxe).

Toujours coincé? Les étapes de la démo, faites en classe, sont le meilleur point de départ : venez me voir.

### Les trois parties { #quatre-parties }

Un composant, c'est une classe JS en plus guidé : vous remplissez des cases.

| Partie | Son rôle | Dans une classe JS |
|---|---|---|
| `data()` | Les **données qui peuvent changer**. Quand l'une change, Vue met à jour le HTML. | Les propriétés (`this.score`) |
| `methods` | Les **actions**, appelées par un événement (`@click`) ou par votre code. | Les méthodes |
| `mounted()` | S'exécute **une fois**, quand le composant est branché : on y écoute le défilement. Voir [Le cycle de vie : `mounted()`](../../vue/mounted.md). | Le constructeur |

`createApp({...}).mount("#navigation")` crée le composant et le branche sur sa zone, comme un `querySelector`. Deux composants, deux zones : chacun ne voit que la sienne. Dans une méthode, `this.chapters` ou `this.progress` désignent les données de `data()`.

!!! warning "`this` dans Vue : pas de fonction fléchée dans `methods`"
    Écrivez `goTo(id) { ... }`, jamais `goTo: (id) => { ... }` : une [fonction fléchée](../../js/recap-js.md#fonctions-flechees) n'a pas son propre `this`, et `this.chapters` serait `undefined`. À l'intérieur d'une méthode, par contre, elle est la bonne : dans le `forEach` de `updateActive()`, elle **garde** le `this` du composant.

## Brancher le composant dans `main.js` { #brancher }

Le navigateur reçoit la liste des chapitres en paramètre : `createNavigation(chapters)`. La barre, elle, n'a besoin de rien : `createProgressBar()`. Seul l'endroit d'où vient la liste change d'une phase à l'autre.

`main.js` est un fichier **commun** : chaque personne y ajoute son `import` et son appel. Prévenez-vous avant de le modifier.

### À la *phase 1*{ .w5-phase .w5-phase-1 } : la liste, lue dans le HTML { #brancher-phase-1 }

Vos sections sont écrites à la main dans `index.html`. On en fait une liste avec leur `id` et le texte de leur `<h2>` :

```js
import { createNavigation } from "./navigation.js";
import { createProgressBar } from "./progression.js";

const sectionsNodeList = document.querySelectorAll(".chapitre");

const chaptersArr = Array.from(sectionsNodeList).map((section) => ({
  id: section.id,
  titre: section.querySelector("h2").textContent,
}));

createNavigation(chaptersArr);
createProgressBar();
```

`Array.from()` transforme le résultat de `querySelectorAll` en vrai tableau, pour pouvoir utiliser `.map()` : voir [Récap JS : `map()` et `join()`](../../js/recap-js.md#map-join).

### À la *phase 2*{ .w5-phase .w5-phase-2 } : la liste, reçue de `data.json` { #brancher-phase-2 }

Les chapitres de `data.json` ont déjà un `id` et un `titre`. On les passe directement, **après** avoir construit les sections :

```js
recit.innerHTML = chapters
  .map((chapter, index) => createChapter(chapter, chapterModules[index]))
  .join("");

createNavigation(chapters);
createProgressBar();
```

!!! warning "Après les sections, pas avant"
    `updateActive()` cherche les sections avec `getElementById`, et `updateProgress()` mesure la hauteur de la page. Si les composants démarrent avant que les sections existent, le navigateur affiche une erreur et la barre calcule mal. Appelez-les **après** le `innerHTML`.

## Le CSS de départ { #css }

Un point de départ, à mettre à votre image : votre palette, votre typographie.

```css
.progression {
  position: fixed;
  inset: 0 0 auto 0;
  height: 4px;
  background: var(--accent);
  transform-origin: left;
  z-index: 10;
}

.chapitres-nav {
  position: fixed;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  z-index: 10;
}

.chapitres-nav a.actif {
  font-weight: 700;
  color: var(--accent);
}
```

La barre utilise `transform: scaleX()` plutôt que `width` : `transform` ne recalcule pas la mise en page, l'animation reste fluide.

## Votre composant à vous { #votre-composant }

Les deux composants sont imposés, **une personne par composant** : l'une fait le navigateur de chapitres, l'autre la barre de progression. Inscrivez qui fait quoi dans la matrice du cahier de charges.

Prenez le code de cette page comme **départ**, puis faites-le vôtre :

- **Le navigateur** : des points plutôt que des titres, des numéros de chapitre, une icône par chapitre (ajoutez une clé dans vos chapitres). Sur mobile, il prend de la place : affichez seulement le chapitre actif, et la liste au toucher (`v-if`, une donnée `isOpen`).
- **La barre** : verticale plutôt qu'horizontale, plus épaisse, un pourcentage affiché avec `{{ }}`, une forme qui rappelle votre thème.

Chaque personne explique les données, les directives et les méthodes de **son** composant à la [défense](index.md#calendrier) (cours 15.1, mer. 9 déc.).

!!! tip "Avec ScrollTo, une extension GSAP"
    Dans `goTo()`, vous pouvez remplacer `scrollIntoView()` par [ScrollTo](../../js/gsap-scrollto.md) : il tient compte des sections épinglées, et la durée et l'*easing* se règlent. Chargez le plugin par CDN et enregistrez-le dans `main.js`.

## Les erreurs fréquentes { #erreurs }

| Ce que vous voyez | La cause probable |
|---|---|
| Les `{{ }}` s'affichent tels quels | Vue n'est pas chargé, ou chargé **après** `main.js`. Ou la zone n'a pas le bon `id` dans `mount()`. |
| `Vue is not defined` dans la console | La balise `<script>` de Vue manque, ou elle est placée après `main.js`. |
| `Cannot read properties of null` dans `updateActive()` | Un chapitre de la liste n'a pas de section avec cet `id`. Ou le composant démarre avant les sections (*phase 2*{ .w5-phase .w5-phase-2 }). |
| `this.chapters` est `undefined` | Une fonction fléchée dans `methods`. |
| Rien ne change au défilement | La méthode (`updateActive` ou `updateProgress`) n'est pas branchée dans `mounted()`, ou elle ne modifie pas sa donnée avec `this`. |
| La barre reste vide | Le `:style` manque, ou la chaîne est mal formée : vérifiez `scaleX(` et `)` dans l'inspecteur. |

## Pour aller plus loin { #plus-loin }

Les pages de référence sur Vue, si vous voulez creuser une notion :

- [Création d'une app](../../vue/creation-app.md)
- [Interpolation](../../vue/interpolation.md)
- [Boucle `v-for`](../../vue/boucle.md)
- [Classe dynamique](../../vue/classe-dynamique.md)
- [Méthodes et événements](../../vue/methodes-evenements.md)
- [Condition `v-if`](../../vue/condition.md)

## Références

- [Vue.js : guide officiel, en français](https://fr.vuejs.org/guide/introduction.html){ :target="_blank" }
- [Vue.js : utiliser Vue par CDN](https://fr.vuejs.org/guide/quick-start.html#using-vue-from-cdn){ :target="_blank" }
- [MDN : `scrollIntoView()`](https://developer.mozilla.org/fr/docs/Web/API/Element/scrollIntoView){ :target="_blank" }
