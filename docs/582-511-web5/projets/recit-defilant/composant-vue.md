# **Récit défilant** :simple-vuedotjs:  Les composants Vue *Navigateur de chapitres et barre de progression*

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Avec Vue, **on change une donnée, et la page suit**.
2. Tout le monde construit **les deux composants** dans un bac à sable, puis chacun intègre **le sien** dans le projet.
3. Le code fourni n'a **aucun commentaire** : commentez-le dans vos mots. C'est ce qui vous prépare à la [défense](index.md#calendrier).

</div>

## 1. Le bac à sable { #bac-a-sable }

Un dossier à part, **hors de votre dépôt**.

1. Un dossier `bac-a-sable-vue/`, ouvert dans VS Code.
2. Un fichier `index.html` :

  ??? example "Le code de départ : `index.html` Cliquez pour ouvrir le panneau."
      ```html
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <title>Bac à sable Vue</title>
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700">
        <style>
          body {
            margin: 0;
            background: #0b0b0c;
            color: #f4f4f5;
            font-family: "Poppins", sans-serif;
          }
          [v-cloak] { display: none; }

          /* Les chapitres : un écran chacun, un fond différent */
          .chapitre {
            min-height: 100vh;
            display: grid;
            place-content: center;
            text-align: center;
          }
          .chapitre h2 { margin: 0; font-size: 4rem; }
          .surtitre {
            margin: 0;
            color: #a1a1aa;
            letter-spacing: 0.2em;
            text-transform: uppercase;
          }
          #la-foret {
            background: radial-gradient(circle at 30% 70%, #1d3b2a, #0b0b0c 70%);
          }
          #la-maison {
            background: radial-gradient(circle at 70% 30%, #3b2a1d, #0b0b0c 70%);
          }
          #le-loup {
            background: radial-gradient(circle at 40% 40%, #2a2d3b, #0b0b0c 70%);
          }
          #la-fin {
            background: radial-gradient(circle at 60% 60%, #3b1d24, #0b0b0c 70%);
          }

          /* Le navigateur de chapitres */
          .chapitres-nav {
            position: fixed;
            top: 50%;
            right: 2rem;
            transform: translateY(-50%);
            padding: 1rem 1.5rem 1rem 1rem;
            background: rgb(20 20 22 / 0.85);
            border: 1px solid #2c2c31;
            border-radius: 12px;
          }
          .chapitres-nav ol { margin: 0; }
          .chapitres-nav a { color: inherit; text-decoration: none; }
          .chapitres-nav a.actif { font-weight: 700; color: #FF2B47; }

          /* La barre de progression */
          .progression {
            position: fixed;
            inset: 0 0 auto 0;
            z-index: 1;
            height: 6px;
            background: #FF2B47;
            transform-origin: left;
          }
        </style>
      </head>
      <body>
        <div id="navigation"></div>

        <main>
          <section class="chapitre" id="la-foret">
            <p class="surtitre">Chapitre 1</p>
            <h2>La forêt</h2>
          </section>
          <section class="chapitre" id="la-maison">
            <p class="surtitre">Chapitre 2</p>
            <h2>La maison</h2>
          </section>
          <section class="chapitre" id="le-loup">
            <p class="surtitre">Chapitre 3</p>
            <h2>Le loup</h2>
          </section>
          <section class="chapitre" id="la-fin">
            <p class="surtitre">Chapitre 4</p>
            <h2>La fin</h2>
          </section>
        </main>

        <script src="https://cdn.jsdelivr.net/npm/vue@3.5.13/dist/vue.global.js">
        </script>
        <script type="module" src="js/main.js"></script>
      </body>
      </html>
      ```

3. Trois fichiers vides : `js/main.js`, `js/navigation.js`, `js/progression.js`.
4. Live Server.

## 2. Le navigateur de chapitres { #js-navigation }

### Brancher Vue { #brancher-vue }

??? example "`main.js` et `navigation.js`"

    ```js
    // js/main.js
    import { createNavigation } from "./navigation.js";

    const chaptersNodeList = document.querySelectorAll(".chapitre");

    const chaptersArr = Array.from(chaptersNodeList).map((section) => ({
      id: section.id,
      titre: section.querySelector("h2").textContent,
    }));

    window.nav = createNavigation(chaptersArr);
    ```

    ```js
    // js/navigation.js
    export function createNavigation(chapters) {
      return Vue.createApp({}).mount("#navigation");
    }
    ```

    `window.nav` : pour tester dans la console, **bac à sable seulement**.

*Cible* : `<p>Vue fonctionne : {{ 1 + 1 }}</p>` dans `#navigation` affiche « 2 ».

### Les données, la liste, le chapitre actif { #a-vous }

C'est l'exercice Collection de films : `movies` devient `chapters`, `year` devient `activeChapterIndex`, `selectedYear` devient `actif`.

- [ ] `data()` : `chapters` (le paramètre) et `activeChapterIndex` (`0`).
- [ ] `v-for` : un `<li>` par chapitre, dans `<nav class="chapitres-nav"><ol>`, avec un lien vers sa section.
- [ ] `:class` : `actif` sur le lien du chapitre actif.

*Cible* : 4 liens, le 1er en rouge. `nav.activeChapterIndex = 2` dans la console : le rouge se déplace.

### Aller au chapitre { #goto }

- [ ] Ajoutez `goTo()` dans `methods`, et appelez-la au clic, avec `.prevent` et l'`id` du chapitre.

*Cible* : un clic mène au chapitre en douceur.

??? example "Fourni : `goTo()`"

    ```js
    goTo(id) {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      document.getElementById(id).scrollIntoView({
        behavior: reduced ? "auto" : "smooth",
      });
    },
    ```

### Suivre le défilement { #mounted }

- [ ] Ajoutez `updateActive()` dans `methods`.
- [ ] Écrivez `mounted()` vous-mêmes, comme l'[exemple de `mounted()`](../../vue/mounted.md#syntaxe), avec `"scroll"`.
- [ ] `v-cloak` sur la zone.

*Cible* : en défilant, le lien actif suit.

??? example "Fourni : `updateActive()`"

    ```js
    updateActive() {
      const middle = window.innerHeight / 2;
      this.chapters.forEach((chapter, index) => {
        const section = document.getElementById(chapter.id);
        if (section.getBoundingClientRect().top <= middle) {
          this.activeChapterIndex = index;
        }
      });
    },
    ```

## 3. La barre de progression { #js-progression }

La même recette, seul : `js/progression.js`, une fonction `createProgressBar()`, la donnée `progress` (de 0 à 1), la méthode `updateProgress()`, `mounted()`. Puis son `import` et `window.bar = createProgressBar();` dans `main.js`.

*Cible* : la barre avance en défilant. `bar.progress = 0.5` : elle saute à la moitié.

??? example "Fourni : la zone HTML et la formule"

    ```html
    <div id="barre-progression" v-cloak>
      <div class="progression"
           :style="{ transform: 'scaleX(' + progress + ')' }"></div>
    </div>
    ```

    ```js
    const max = document.documentElement.scrollHeight - window.innerHeight;
    this.progress = max > 0 ? window.scrollY / max : 0;
    ```

    `:style`, c'est comme `:class`, pour une propriété CSS.

??? tip "Coincé? Les notions de Vue"
    | Dans le HTML | Notion |
    |---|---|
    | `{{ chapter.titre }}` | [Interpolation](../../vue/interpolation.md#interpolation) |
    | `v-for` et `:key` | [Boucle](../../vue/boucle.md#v-for), [clé](../../vue/boucle.md#key) |
    | `:class` | [Classe dynamique](../../vue/classe-dynamique.md#class) |
    | `:href`, `:style` | [`v-bind`](../../vue/interpolation.md#v-bind) |
    | `@click.prevent` | [`v-on`](../../vue/methodes-evenements.md#v-on), [`.prevent`](../../vue/methodes-evenements.md#prevent) |
    | `mounted()` | [Le cycle de vie](../../vue/mounted.md#syntaxe) |
    | `v-cloak` | [`v-cloak`](../../vue/creation-app.md#v-cloak) |

    Dans `methods`, jamais de fonction fléchée : `goTo(id) { }`, pas `goTo: (id) => { }`.

## 4. Dans votre projet { #integrer }

Chacun **son** composant, sur sa branche. Pas de `window.nav` ni de `window.bar`.

1. Dans `index.html`, Vue **avant** `main.js` (`vue.global.prod.js` une fois en ligne), et votre zone, `#navigation` ou `#barre-progression`.
2. Votre fichier, `js/navigation.js` ou `js/progression.js`.
3. Dans `main.js`, votre `import` et votre appel. `index.html` et `main.js` sont **communs** : prévenez l'autre.

### *Phase 1*{ .w5-phase .w5-phase-1 } { #brancher-phase-1 }

```js
import { createNavigation } from "./navigation.js";
import { createProgressBar } from "./progression.js";

const chaptersNodeList = document.querySelectorAll(".chapitre");

const chaptersArr = Array.from(chaptersNodeList).map((section) => ({
  id: section.id,
  titre: section.querySelector("h2").textContent,
}));

createNavigation(chaptersArr);
createProgressBar();
```

Navigateur vide? Vos sections n'ont pas la classe `.chapitre`, ou le titre n'est pas dans un `<h2>` : adaptez le sélecteur.

### *Phase 2*{ .w5-phase .w5-phase-2 } { #brancher-phase-2 }

Les chapitres de `data.json` ont déjà un `id` et un `titre`. Appelez les composants **après** le `innerHTML` :

```js
recit.innerHTML = chapters
  .map((chapter, index) => createChapter(chapter, chapterModules[index]))
  .join("");

createNavigation(chapters);
createProgressBar();
```

### Le CSS de départ { #css }

```css
[v-cloak] { display: none; }

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

### Faites-le vôtre { #votre-composant }

- **Navigateur** : des points, des numéros, une icône par chapitre. Sur mobile, seulement le chapitre actif.
- **Barre** : verticale, plus épaisse, un pourcentage, une forme qui rappelle votre thème.

## Équipe de 3 : le panneau de l'équipe { #equipe }

La 3e personne code un bouton « L'équipe » qui ouvre un panneau : les auteurs, leur rôle, et le cadre du projet. Même recette, plus [`v-show`](../../vue/condition.md#v-show) et la touche ++escape++.

??? example "Le squelette : HTML et `js/equipe.js`"

    ```html
    <div id="equipe" v-cloak>
      <!-- TODO equipe : au clic, ouvrir ou fermer -->
      <!-- TODO equipe : aria-expanded vaut isOpen -->
      <button class="equipe-bouton" aria-controls="equipe-panneau">
        L'équipe
      </button>

      <!-- TODO equipe : affiché seulement si isOpen est vrai -->
      <aside id="equipe-panneau" class="equipe-panneau">
        <h2>L'équipe</h2>
        <ul>
          <!-- TODO equipe : un <li> par membre (nom, rôle), avec :key -->
          <li></li>
        </ul>
        <p>Projet réalisé dans le cadre du cours Web 5, en Techniques
          d'intégration multimédia, au Collège Montmorency, automne 2026.</p>
        <!-- TODO equipe : au clic, fermer -->
        <button>Fermer</button>
      </aside>
    </div>
    ```

    ```js
    export function createTeamPanel() {
      Vue.createApp({
        data() {
          return {
            // TODO equipe : members (un objet { nom, role } par membre)
            // et isOpen (false)
          };
        },
        methods: {
          toggle() {
            // TODO equipe : isOpen devient son contraire (!)
          },
          close() {
            // TODO equipe : isOpen devient false
          },
          closeOnEscape(event) {
            if (event.key === "Escape") {
              // TODO equipe : fermer
            }
          },
        },
        mounted() {
          // TODO equipe : à chaque "keydown", appeler closeOnEscape
        },
      }).mount("#equipe");
    }
    ```

## Les erreurs fréquentes { #erreurs }

| Ce que vous voyez | La cause probable |
|---|---|
| Les `{{ }}` s'affichent tels quels | Vue pas chargé, chargé après `main.js`, ou mauvais `id` dans `mount()` |
| `this.chapters` est `undefined` | Une fonction fléchée dans `methods` |
| Le lien actif ne bouge plus après le chargement | `this.updateActive()` avec parenthèses dans `addEventListener` |
| `Cannot read properties of null` | Un `id` sans section, ou les composants appelés avant les sections (*phase 2*) |
| La barre reste vide | Le `:style` manque ou la chaîne est mal formée |
