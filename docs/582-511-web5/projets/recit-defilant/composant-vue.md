# :simple-vuedotjs:  Le composant Vue : navigateur de chapitres et barre de progression

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Avec Vue, **on change une donnée, et la page suit**. Plus besoin d'ajouter ou de retirer des classes à la main : on décrit le HTML une fois, Vue le tient à jour.
2. Votre composant tient dans **un seul fichier**, `js/navigation.js`, avec trois parties : `data`, `methods` et `mounted`.
3. Il fonctionne aux deux phases : à la *phase 1*{ .w5-phase .w5-phase-1 }, la liste des chapitres est **lue dans le HTML**; à la *phase 2*{ .w5-phase .w5-phase-2 }, elle vient de **`data.json`**. Le composant, lui, ne change pas.

</div>

## Pourquoi Vue, ici? { #pourquoi }

Soyons honnêtes : un navigateur de chapitres se fait aussi en JavaScript seul. Vue n'est pas là parce qu'il est indispensable pour ce composant, mais pour deux raisons.

**1. C'est comme ça que le web se construit aujourd'hui.** React, Vue, Svelte, Angular : la plupart des interfaces professionnelles utilisent un cadriciel, et ils reposent tous sur la même idée. Vue est la porte d'entrée la plus douce : rien à installer, et une écriture proche des classes JS que vous connaissez. Votre composant, c'est un terrain d'entraînement petit et sans risque.

**2. Cette idée change votre façon de coder.** En JavaScript seul, vous dites **comment** changer la page, étape par étape. Avec Vue, vous décrivez **à quoi** la page doit ressembler selon vos données, et Vue s'occupe du comment.

En JavaScript seul, à chaque changement de chapitre :

```js
function setActive(index) {
  links[index].classList.add("actif");
  title.textContent = chapters[index].titre;
}
```

<iframe src="https://tim-montmorency.com/Fragment/v/?f=w5-vue-oubli-actif&onglets=js,html,css,resultat&modifiable=1&boutons=rejouer,ouvrir" style="width:100%;height:520px;border:0" loading="lazy"></iframe>

Voyez-vous l'oubli? La classe `actif` n'est jamais retirée des anciens liens. Après trois chapitres, trois liens sont en rouge. C'est le piège du code qui dit *comment* : chaque chose qu'on ajoute, il faut aussi penser à l'enlever.

Avec Vue, on décrit l'état une fois, dans le HTML :

```html
<a :class="{ actif: index === activeChapterIndex }">
```

Et pour changer de chapitre, une seule ligne : `this.activeChapterIndex = index`. Le jour où vous ajoutez un 4e élément qui dépend du chapitre actif, comme une couleur de fond ou un compteur, c'est une ligne de plus dans le HTML. Rien d'autre à retoucher. C'est la **réactivité**.

!!! info "Vue, c'est un cadriciel (*framework*)"
    Anime.js et GSAP vous donnent des **fonctions** à appeler. Vue, lui, vous donne une **façon d'organiser** votre code : vous remplissez des cases (`data`, `methods`...), et Vue s'occupe du reste. C'est ce qui le rend si rapide à lire, une fois qu'on connaît les cases.

## Installer Vue { #installer }

Par CDN, comme GSAP, sans *build*. Dans `index.html`, **avant** `main.js`, la version de **développement** pendant que vous codez :

```html
<!-- Vue, version de développement : messages d'erreur clairs -->
<script src="https://cdn.jsdelivr.net/npm/vue@3.5.13/dist/vue.global.js">
</script>
<script type="module" src="js/main.js"></script>
```

`Vue` devient alors disponible partout, y compris dans vos modules, sans `import`.

### Avant de publier : la version de production { #production }

Quand votre récit est prêt à être mis en ligne, remplacez `vue.global.js` par `vue.global.prod.js` : la même version de Vue, trois fois plus légère (environ 155 Ko au lieu de 550 Ko), sans les messages de développement.

```html
<!-- Vue, version de production : plus légère, pour le site en ligne -->
<script src="https://cdn.jsdelivr.net/npm/vue@3.5.13/dist/vue.global.prod.js">
</script>
```

C'est ce que recommande la documentation de Vue : [Déploiement en production : sans les outils de build](https://fr.vuejs.org/guide/best-practices/production-deployment.html#without-build-tools){ :target="_blank" }. Un bogue apparaît après le changement? Revenez un instant à `vue.global.js` : ses messages vous diront quoi corriger.

## Le HTML : la zone que Vue contrôle { #html }

Le composant vit dans une **zone** de `index.html`, ici `<div id="navigation">`. Vue contrôle cette zone et ses enfants, **rien d'autre**. Vos chapitres, eux, restent à vous et à GSAP.

```html
<div id="navigation" v-cloak>
  <!-- La barre de progression (fourni) -->
  <div class="progression"
       :style="{ transform: 'scaleX(' + progress + ')' }"></div>

  <!-- Le navigateur de chapitres -->
  <nav class="chapitres-nav" aria-label="Chapitres">
    <ol>
      <!-- TODO : répéter ce <li> pour chaque chapitre de chapters,
           avec une :key unique (l'id du chapitre) -->
      <li>
        <!-- TODO : le href mène à la section du chapitre (# + son id) -->
        <!-- TODO : la classe actif, seulement si c'est le chapitre actif
             (son index est égal à activeChapterIndex) -->
        <!-- TODO : aria-current="step", seulement pour le chapitre actif -->
        <!-- TODO : au clic, appeler goTo(), sans le saut habituel du lien -->
        <a href="#">
          <!-- TODO : afficher le titre du chapitre -->
        </a>
      </li>
    </ol>
  </nav>
</div>
```

Chaque `TODO` se règle avec une des notions de ce tableau : tout ce qu'il faut savoir de Vue pour votre composant.

| Dans le HTML | Nom | Ce que ça fait |
|---|---|---|
| `{{ chapter.titre }}` | Interpolation | Affiche la valeur d'une donnée. Quand elle change, le texte change. |
| `v-for="... in chapters"` | Directive `v-for` | Répète l'élément pour chaque chapitre du tableau. C'est le `forEach` de Vue, directement dans le HTML. |
| `:key="chapter.id"` | Clé | Un identifiant unique par élément répété : Vue s'en sert pour s'y retrouver. |
| `:class="{ actif: ... }"` | Classe dynamique | Ajoute la classe `actif` **si** la condition est vraie, et la retire sinon. |
| `:style`, `:href`, `:aria-current` | Attribut lié (`v-bind`) | Le deux-points veut dire : « la valeur est du JavaScript, pas du texte ». |
| `@click.prevent="goTo(...)"` | Événement (`v-on`) | Appelle une méthode au clic. `.prevent`, c'est le `event.preventDefault()` : le lien ne saute pas brusquement. |
| `v-cloak` | Directive `v-cloak` | Cache la zone **tant que Vue n'a pas démarré** (voir le CSS plus bas). |

!!! tip "Le deux-points et l'arobase"
    `:class` est le raccourci de `v-bind:class`, et `@click` celui de `v-on:click`. Dans la documentation, vous verrez les deux formes : c'est la même chose.

Le CSS qui va avec `v-cloak`, dans `commun.css` :

```css
[v-cloak] {
  display: none; /* sinon, on voit les {{ }} une fraction de seconde */
}
```

## Le JavaScript : un fichier, trois parties { #js }

Le squelette du composant, dans `js/navigation.js`. Ce qui est **fourni** ne demande pas de Vue : c'est du calcul. Les `TODO`, c'est à vous : ce sont les notions vues au cours et dans les exercices.

```js
// js/navigation.js : le composant Vue (Options API)
// Barre de progression + navigateur de chapitres

export function createNavigation(chapters) {
  Vue.createApp({
    // 1. Les données : ce qui peut changer
    data() {
      return {
        // TODO : 3 données, avec ces noms (le HTML les utilise)
        // - chapters : la liste reçue en paramètre
        // - activeChapterIndex : le chapitre à l'écran (au départ : 0)
        // - progress : de 0 à 1, où en est-on dans la page (au départ : 0)
      };
    },

    // 2. Les méthodes : les actions
    methods: {
      goTo(id) {
        // Fourni : le mouvement réduit est-il activé?
        const reduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        // TODO : faire défiler jusqu'à la section qui a cet id,
        // avec scrollIntoView() : "auto" si reduced, sinon "smooth"
      },

      // Appelée à chaque défilement : la barre et le chapitre actif
      updateScroll() {
        // Fourni : la barre de progression
        // max : la distance qu'on peut défiler en tout
        // (la hauteur de la page, moins la hauteur de la fenêtre)
        const max = document.documentElement.scrollHeight - window.innerHeight;
        // progress : de 0 (en haut) à 1 (en bas), utilisé par scaleX()
        // max > 0 : évite une division par 0 si la page ne défile pas
        this.progress = max > 0 ? window.scrollY / max : 0;

        // Fourni : la ligne du milieu et la boucle
        // middle : une ligne invisible qui coupe l'écran en deux, au milieu
        const middle = window.innerHeight / 2;
        // Fonction fléchée : elle garde le this du composant
        this.chapters.forEach((chapter, index) => {
          const section = document.getElementById(chapter.id);
          // Chaque section dont le haut a passé cette ligne répond « oui ».
          // La boucle va dans l'ordre et garde le DERNIER « oui » :
          // c'est la section qu'on est en train de lire.
          if (section.getBoundingClientRect().top <= middle) {
            // TODO : ce chapitre devient le chapitre actif
          }
        });
      },
    },

    // 3. Au démarrage du composant
    mounted() {
      // TODO : à chaque défilement de la fenêtre ("scroll"),
      // appeler updateScroll, avec l'option { passive: true }
      // TODO : puis appeler updateScroll une première fois
    },
  }).mount("#navigation");
}
```

!!! warning "Les `TODO` ne restent pas dans votre code final"
    Les commentaires `TODO` sont des **instructions** pour vous. Remplacez chacun par votre code, puis **effacez-le**. Dans votre récit final, il ne reste **aucun** `TODO` : seulement vos propres commentaires, qui expliquent ce que fait le code. Pour vérifier : ++ctrl+shift+f++ dans VS Code, cherchez `TODO`.

!!! danger "À la défense, chaque ligne compte"
    Vous expliquerez chaque ligne de ce composant, et vous devrez pouvoir la modifier en direct. Un code copié sans être compris se voit tout de suite.

Bloqué? Un indice à la fois :

??? tip "Indice : `data()`"
    Trois paires `clé: valeur`, séparées par des virgules. La valeur de `chapters`, c'est le paramètre reçu par `createNavigation(chapters)`.

??? tip "Indice : `goTo()`"
    `document.getElementById(id)` trouve la section. La méthode `scrollIntoView()` reçoit un objet d'options, avec une clé `behavior` (sans « u »!). Pour choisir entre deux valeurs : `condition ? siVrai : siFaux`.

??? tip "Indice : le chapitre actif"
    Dans une méthode, on change une donnée avec `this`. La boucle vous donne déjà l'`index` du chapitre.

??? tip "Indice : `mounted()`"
    `window.addEventListener(type, fonction, options)`. La fonction, c'est `this.updateScroll`, **sans parenthèses** : on la donne, on ne l'appelle pas. L'appel « une première fois », lui, prend des parenthèses. Un exemple complet, avec `"resize"` : [Le cycle de vie : `mounted()`](../../vue/mounted.md#syntaxe).

Toujours coincé? Les étapes de la démo, faites en classe, sont le meilleur point de départ : venez me voir.

### Les trois parties, une à une { #quatre-parties }

**`createApp({...}).mount("#navigation")`** crée le composant et le **branche** sur la zone `#navigation` du HTML. Le sélecteur fonctionne comme avec `querySelector`.

**`data()`** retourne un objet : **les données qui peuvent changer**. Chaque fois que `activeChapterIndex` ou `progress` change, Vue met à jour tout ce qui en dépend dans le HTML. Vous ne touchez jamais au DOM vous-même.

**`methods`** : les **actions**, appelées par un événement (`@click`) ou par votre code. Dans une méthode, `this.chapters`, `this.activeChapterIndex` : ce sont les données de `data()`.

**`mounted()`** s'exécute **une fois**, quand le composant est branché sur la page. C'est le bon endroit pour écouter le défilement. On appelle aussi `updateScroll()` tout de suite, pour le cas où la page est déjà défilée au chargement. Nouveau pour vous? Voir [Le cycle de vie : `mounted()`](../../vue/mounted.md).

!!! warning "`this` dans Vue : pas de fonction fléchée dans `methods`"
    Dans `data` et `methods`, `this` désigne **le composant**. Écrivez donc vos méthodes avec la forme courte `goTo(id) { ... }`, jamais `goTo: (id) => { ... }` : une [fonction fléchée](../../js/recap-js.md#fonctions-flechees) n'a pas son propre `this`, et `this.chapters` serait `undefined`.

    À l'intérieur d'une méthode, par contre, la fonction fléchée est la bonne : dans le `forEach` de `updateScroll()`, elle **garde** le `this` du composant.

!!! info "Une classe JS, en plus guidé"
    Vous connaissez les classes JavaScript : des propriétés (`this.score`), des méthodes, un constructeur. Le composant Vue, c'est la même idée : `data()` pour les propriétés, `methods` pour les méthodes, `mounted()` pour le démarrage.

## Brancher le composant dans `main.js` { #brancher }

Le composant reçoit la liste des chapitres en paramètre : `createNavigation(chapters)`. Seul l'endroit d'où vient cette liste change d'une phase à l'autre.

### À la *phase 1*{ .w5-phase .w5-phase-1 } : la liste, lue dans le HTML { #brancher-phase-1 }

Vos sections sont écrites à la main dans `index.html`. On en fait une liste avec leur `id` et le texte de leur `<h2>` :

```js
// js/main.js, phase 1
import { createNavigation } from "./navigation.js";

const sectionsNodeList = document.querySelectorAll(".chapitre");

// Une liste { id, titre } faite à partir des sections du HTML
const chaptersArr = Array.from(sectionsNodeList).map((section) => ({
  id: section.id,
  titre: section.querySelector("h2").textContent,
}));

createNavigation(chaptersArr);
```

`Array.from()` transforme le résultat de `querySelectorAll` en vrai tableau, pour pouvoir utiliser `.map()` : voir [Récap JS : `map()` et `join()`](../../js/recap-js.md#map-join).

### À la *phase 2*{ .w5-phase .w5-phase-2 } : la liste, reçue de `data.json` { #brancher-phase-2 }

Les chapitres de `data.json` ont déjà un `id` et un `titre`. On les passe directement, **après** avoir construit les sections :

```js
// js/main.js, phase 2, dans init()
recit.innerHTML = chapters
  .map((chapter, index) => createChapter(chapter, chapterModules[index]))
  .join("");

createNavigation(chapters); // après : les sections existent
```

!!! warning "Après les sections, pas avant"
    `updateScroll()` cherche les sections avec `getElementById`. Si le composant démarre avant que les sections existent, il ne les trouve pas, et la console affiche une erreur. Appelez `createNavigation()` **après** le `innerHTML`.

## Le CSS de départ { #css }

Un point de départ, à mettre à votre image : votre palette, votre typographie.

```css
/* La barre : toute la largeur, réduite par scaleX() */
.progression {
  position: fixed;
  inset: 0 0 auto 0;
  height: 4px;
  background: var(--accent);
  transform-origin: left;
  z-index: 10;
}

/* Le navigateur : fixé à droite de l'écran */
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

## Pour aller plus loin : une propriété calculée (facultatif) { #computed }

Pour afficher le titre du chapitre actif, par exemple « 3/8 · Le loup », ajoutez une **propriété calculée** : une valeur **déduite** des données, que Vue recalcule seulement quand elles changent.

```js
    computed: {
      activeTitle() {
        const chapter = this.chapters[this.activeChapterIndex];
        return `${this.activeChapterIndex + 1}/${this.chapters.length} · `
          + chapter.titre;
      },
    },
```

```html
<p class="chapitres-nav__actuel">{{ activeTitle }}</p>
```

Dans le HTML, on l'utilise comme une donnée, sans parenthèses. Voir [Propriété calculée](../../vue/propriete-calculee.md).



Pourquoi pas une méthode? On aurait pu écrire une méthode `getActiveTitle()` et l'appeler dans le HTML : `{{ getActiveTitle() }}`. Ça fonctionne aussi. La différence :

| | Méthode | Propriété calculée |
|---|---|---|
| Recalculée | à **chaque** mise à jour de la page | **seulement** quand ses données changent |
| Dans le HTML | `{{ getActiveTitle() }}` | `{{ activeTitle }}` |
| Sert à | **faire** quelque chose (une action) | **obtenir** une valeur déduite |

Règle simple : si ça **retourne une valeur** à afficher, c'est une propriété calculée. Si ça **fait** quelque chose, c'est une méthode.

## Votre composant à vous { #votre-composant }

Le composant imposé, c'est **le navigateur de chapitres ou la barre de progression**, au choix. La personne responsable est inscrite dans la matrice du cahier de charges.

Prenez le code de cette page comme **départ**, puis faites-le vôtre :

- **Navigateur seulement?** Retirez la barre et `progress`. **Barre seulement?** Retirez la liste, et gardez `progress`.
- **Le style** : des points plutôt que des titres, des numéros de chapitre, une icône par chapitre (ajoutez une clé dans vos chapitres).
- **Sur mobile** : le navigateur prend de la place. Affichez seulement le chapitre actif, et la liste au toucher (`v-if`, une donnée `isOpen`).

Dans tous les cas, votre composant utilise **une donnée**, **une directive** (`v-for` ou `:class`) et **une méthode** : c'est ce que vous devrez expliquer à la défense.

!!! tip "Avec ScrollTo, une extension GSAP"
    Dans `goTo()`, vous pouvez remplacer `scrollIntoView()` par [ScrollTo](../../js/gsap-scrollto.md) : il tient compte des sections épinglées, et la durée et l'*easing* se règlent. Chargez le plugin par CDN et enregistrez-le dans `main.js`.

## Options API et Composition API { #options-composition }

Vue s'écrit de deux façons. Dans ce cours, on utilise **l'Options API** : des cases à remplir (`data`, `methods`...). Dans la [documentation de Vue](https://fr.vuejs.org/guide/introduction.html){ :target="_blank" }, choisissez **Options** dans le sélecteur *Préférence d'API*, en haut à gauche. Un tutoriel écrit avec `setup()` ou `ref()`? C'est la Composition API : cherchez-en un autre.

## Les erreurs fréquentes { #erreurs }

| Ce que vous voyez | La cause probable |
|---|---|
| Les `{{ }}` s'affichent tels quels | Vue n'est pas chargé, ou chargé **après** `main.js`. Ou la zone n'a pas le bon `id` dans `mount()`. |
| `Vue is not defined` dans la console | La balise `<script>` de Vue manque, ou elle est placée après `main.js`. |
| `Cannot read properties of null` dans `updateScroll()` | Un chapitre de la liste n'a pas de section avec cet `id`. Ou le composant démarre avant les sections (*phase 2*{ .w5-phase .w5-phase-2 }). |
| `this.chapters` est `undefined` | Une fonction fléchée dans `methods`. |
| Rien ne change au défilement | `updateScroll` n'est pas branché dans `mounted()`, ou il ne modifie pas `this.activeChapterIndex`. |

## Pour aller plus loin { #plus-loin }

Les pages de référence sur Vue, si vous voulez creuser une notion :

- [Création d'une app](../../vue/creation-app.md)
- [Interpolation](../../vue/interpolation.md)
- [Boucle `v-for`](../../vue/boucle.md)
- [Classe dynamique](../../vue/classe-dynamique.md)
- [Méthodes et événements](../../vue/methodes-evenements.md)
- [Propriété calculée](../../vue/propriete-calculee.md)
- [Condition `v-if`](../../vue/condition.md)

## Références

- [Vue.js : guide officiel, en français](https://fr.vuejs.org/guide/introduction.html){ :target="_blank" }
- [Vue.js : utiliser Vue par CDN](https://fr.vuejs.org/guide/quick-start.html#using-vue-from-cdn){ :target="_blank" }
- [MDN : `scrollIntoView()`](https://developer.mozilla.org/fr/docs/Web/API/Element/scrollIntoView){ :target="_blank" }
