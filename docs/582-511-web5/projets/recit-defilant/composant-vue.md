# :simple-vuedotjs:  Le composant Vue : navigateur de chapitres et barre de progression

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Avec Vue, **on change une donnée, et la page suit**. Plus besoin d'ajouter ou de retirer des classes à la main : on décrit le HTML une fois, Vue le tient à jour.
2. Votre composant tient dans **un seul fichier**, `js/navigation.js`, avec trois parties : `data`, `methods` et `mounted`.
3. Il fonctionne aux deux phases : à la *phase 1*{ .w5-phase .w5-phase-1 }, la liste des chapitres est **lue dans le HTML**; à la *phase 2*{ .w5-phase .w5-phase-2 }, elle vient de **`data.json`**. Le composant, lui, ne change pas.

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

## Le HTML : la zone que Vue contrôle { #html }

Le composant vit dans une **zone** de `index.html`, ici `<div id="navigation">`. Vue contrôle cette zone et ses enfants, **rien d'autre**. Vos chapitres, eux, restent à vous et à GSAP.

```html
<div id="navigation" v-cloak>
  <div class="progression"
       :style="{ transform: 'scaleX(' + progress + ')' }"></div>

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
| `:style`, `:href`, `:aria-current` | Attribut lié (`v-bind`) | Le deux-points veut dire : « la valeur est du JavaScript, pas du texte ». Forme longue : `v-bind:href`. |
| `@click.prevent="goTo(...)"` | Événement (`v-on`) | Appelle une méthode au clic. `.prevent`, c'est le `event.preventDefault()` : le lien ne saute pas brusquement. Forme longue : `v-on:click`. |
| `v-cloak` | Directive `v-cloak` | Cache la zone **tant que Vue n'a pas démarré** (voir le CSS plus bas). |

Le CSS qui va avec `v-cloak`, dans `commun.css` :

```css
[v-cloak] {
  display: none;
}
```

## Le JavaScript : un fichier, 3 parties { #js }

Le squelette du composant, dans `js/navigation.js`. Ce qui est fourni, c'est du calcul, sans Vue. Les `TODO`, c'est à vous. Le code fourni n'a **aucun commentaire**, et c'est voulu : commentez-le dans vos mots, pour montrer que vous le comprenez. Ça vaut aussi pour le HTML, `main.js` et le CSS de cette page.

```js
export function createNavigation(chapters) {
  Vue.createApp({
    data() {
      return {
        // TODO : 3 données, avec ces noms (le HTML les utilise)
        // - chapters : la liste reçue en paramètre
        // - activeChapterIndex : le chapitre à l'écran (au départ : 0)
        // - progress : de 0 à 1, où en est-on dans la page (au départ : 0)
      };
    },

    methods: {
      goTo(id) {
        const reduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        // TODO : faire défiler jusqu'à la section qui a cet id,
        // avec scrollIntoView() : "auto" si reduced, sinon "smooth"
      },

      updateScroll() {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        this.progress = max > 0 ? window.scrollY / max : 0;

        const middle = window.innerHeight / 2;
        this.chapters.forEach((chapter, index) => {
          const section = document.getElementById(chapter.id);
          if (section.getBoundingClientRect().top <= middle) {
            // TODO : ce chapitre devient le chapitre actif
          }
        });
      },
    },

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

!!! danger "À la défense (cours 15.1, mer. 9 déc.), chaque ligne compte"
    À la [défense individuelle](index.md#calendrier), en privé, vous expliquerez chaque ligne de ce composant, et vous devrez pouvoir la modifier en direct. Un code copié sans être compris se voit tout de suite.

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

### Les trois parties { #quatre-parties }

Le composant, c'est une classe JS en plus guidé : vous remplissez des cases.

| Partie | Son rôle | Dans une classe JS |
|---|---|---|
| `data()` | Les **données qui peuvent changer**. Quand l'une change, Vue met à jour le HTML. | Les propriétés (`this.score`) |
| `methods` | Les **actions**, appelées par un événement (`@click`) ou par votre code. | Les méthodes |
| `mounted()` | S'exécute **une fois**, quand le composant est branché : on y écoute le défilement. Voir [Le cycle de vie : `mounted()`](../../vue/mounted.md). | Le constructeur |

`createApp({...}).mount("#navigation")` crée le composant et le branche sur la zone `#navigation`, comme un `querySelector`. Dans une méthode, `this.chapters` ou `this.progress` désignent les données de `data()`.

!!! warning "`this` dans Vue : pas de fonction fléchée dans `methods`"
    Écrivez `goTo(id) { ... }`, jamais `goTo: (id) => { ... }` : une [fonction fléchée](../../js/recap-js.md#fonctions-flechees) n'a pas son propre `this`, et `this.chapters` serait `undefined`. À l'intérieur d'une méthode, par contre, elle est la bonne : dans le `forEach` de `updateScroll()`, elle **garde** le `this` du composant.

## Brancher le composant dans `main.js` { #brancher }

Le composant reçoit la liste des chapitres en paramètre : `createNavigation(chapters)`. Seul l'endroit d'où vient cette liste change d'une phase à l'autre.

### À la *phase 1*{ .w5-phase .w5-phase-1 } : la liste, lue dans le HTML { #brancher-phase-1 }

Vos sections sont écrites à la main dans `index.html`. On en fait une liste avec leur `id` et le texte de leur `<h2>` :

```js
import { createNavigation } from "./navigation.js";

const sectionsNodeList = document.querySelectorAll(".chapitre");

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
recit.innerHTML = chapters
  .map((chapter, index) => createChapter(chapter, chapterModules[index]))
  .join("");

createNavigation(chapters);
```

!!! warning "Après les sections, pas avant"
    `updateScroll()` cherche les sections avec `getElementById`. Si le composant démarre avant que les sections existent, il ne les trouve pas, et la console affiche une erreur. Appelez `createNavigation()` **après** le `innerHTML`.

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

Le composant imposé réunit **les deux** : le navigateur de chapitres **et** la barre de progression. La personne responsable est inscrite dans la matrice du cahier de charges.

Prenez le code de cette page comme **départ**, puis faites-le vôtre :

- **Le style** : des points plutôt que des titres, des numéros de chapitre, une icône par chapitre (ajoutez une clé dans vos chapitres).
- **Sur mobile** : le navigateur prend de la place. Affichez seulement le chapitre actif, et la liste au toucher (`v-if`, une donnée `isOpen`).

Les données, les directives (`v-for`, `:class`) et les méthodes de votre composant : c'est ce que vous devrez expliquer à la [défense](index.md#calendrier) (cours 15.1, mer. 9 déc.).

!!! tip "Avec ScrollTo, une extension GSAP"
    Dans `goTo()`, vous pouvez remplacer `scrollIntoView()` par [ScrollTo](../../js/gsap-scrollto.md) : il tient compte des sections épinglées, et la durée et l'*easing* se règlent. Chargez le plugin par CDN et enregistrez-le dans `main.js`.

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
- [Condition `v-if`](../../vue/condition.md)

## Références

- [Vue.js : guide officiel, en français](https://fr.vuejs.org/guide/introduction.html){ :target="_blank" }
- [Vue.js : utiliser Vue par CDN](https://fr.vuejs.org/guide/quick-start.html#using-vue-from-cdn){ :target="_blank" }
- [MDN : `scrollIntoView()`](https://developer.mozilla.org/fr/docs/Web/API/Element/scrollIntoView){ :target="_blank" }
