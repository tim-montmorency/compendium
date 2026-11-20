# Cours 11

*[GSAP]: GreenSock Animation Platform
*[SVG]: Scalable Vector Graphics

![](./assets/images/gsap-banner.jpg){.w-100}

## Post grève

Dernier cours, le 17 décembre

## Retour sur les exercices

## Activer plusieurs plugin GSAP

Voici un EXEMPLE :

```js title="src/gsap.js" hl_lines="2-4 6"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"

gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin)

export function gsapAnimations() {

  // Code GSAP ici 🔥

}
```

## Le texte

### SplitText

[SplitText](https://gsap.com/docs/v3/Plugins/SplitText/) enveloppe chaque lettre, chaque mot ou chaque ligne dans sa propre balise.

<iframe src="https://tim-montmorency.com/Fragment/v/?f=gsap-splittext-selector&actif=resultat&modifiable=1&disposition=onglets&numeros=1" class="aspect-16-9" style="width:100%;border:0" loading="lazy"></iframe>

```js title="src/gsap.js"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(SplitText)

export function gsapAnimations() {

  const tableauDeLettres = SplitText.create(".text", { type: "chars" })

  gsap.from(tableauDeLettres.chars[2], {
    opacity: 0
  })

}
```

| `type` | Produit | Pour animer… |
| :--- | :--- | :--- |
| `"chars"` | `titre.chars` | Chaque lettre |
| `"words"` | `titre.words` | Chaque mot |
| `"words, chars"` | les deux | Combiner (les lettres restent groupées par mot) |

#### Animer avec Stagger

<iframe src="https://tim-montmorency.com/Fragment/v/?f=gsap-splittext&actif=resultat&modifiable=1&disposition=onglets&numeros=1" class="aspect-16-9" style="width:100%;border:0" loading="lazy"></iframe>

Plus souvent qu'autrement, on anime chacun des morceaux un après l'autre. L'option `stagger` permet cela.

```js title="src/gsap.js"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(SplitText)

export function gsapAnimations() {

  const txt = SplitText.create(".text", { type: "chars" })

  gsap.from(txt.chars, {
    y: -100,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(2)",
    stagger: 0.05     // 👈 une lettre après l'autre
  })

}
```

!!! example "Pour le fun"
    
    Essayez `rotation: "random(-360, 360)"`

!!! note "À propos de [`stagger`](https://gsap.com/resources/getting-started/Staggers/)"

    `stagger: 0.05` signifie : chaque lettre démarre **0,05 s après la précédente**.

    | Lettre | Départ | Fin (`duration: 0.8`) |
    | :----- | :----- | :-------------------- |
    | 1re    | 0 s    | 0,8 s                 |
    | 2e     | 0,05 s | 0,85 s                |
    | 3e     | 0,1 s  | 0,9 s                 |
    | ...    | ...    | ...                   |


    Pour plus de contrôle, on peut passer un objet à stagger :

    ```js
    stagger: {
      each: 0.05,       // délai entre chaque élément
      from: "center"    // part du centre : "start", "end", "center", "edges", "random" ou un index
    }
    ```

### ScrambleTextPlugin

<iframe src="https://tim-montmorency.com/Fragment/v/?f=gsap-scrambletextplugin&actif=resultat&modifiable=1&disposition=onglets&numeros=1" class="aspect-16-9" style="width:100%;border:0" loading="lazy"></iframe>

[ScrambleTextPlugin](https://gsap.com/docs/v3/Plugins/ScrambleTextPlugin/) remplace un texte par des caractères aléatoires qui se **stabilisent** peu à peu.

```js title="src/gsap.js"
import gsap from "gsap"
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"

gsap.registerPlugin(ScrambleTextPlugin)

export function gsapAnimations() {

  gsap.to("#slogan", {
    duration: 1.5,
    scrambleText: {
      text: "All your base ...",  // le texte final
      chars: "upperCase",         // les caractères de brouillage
      revealDelay: 0.5            // brouille 0,5 s avant de commencer à révéler
    }
  })

}
```

| Option | Rôle |
| :--- | :--- |
| `text` | Le texte à afficher à la fin |
| `chars` | `"upperCase"`, `"lowerCase"`, `"upperAndLowerCase"`, ou une chaîne maison (`"01"`, `"!?#$%"`) |
| `revealDelay` | Délai avant le début de la révélation |
| `speed` | Vitesse du brouillage (`1` par défaut) |

### TextPlugin

<iframe src="https://tim-montmorency.com/Fragment/v/?f=gsap-textplugin&actif=resultat&modifiable=1&disposition=onglets&numeros=1" class="aspect-16-9" style="width:100%;border:0" loading="lazy"></iframe>

[TextPlugin](https://gsap.com/docs/v3/Plugins/TextPlugin/) remplace le texte d'un élément **caractère par caractère**. 

> Avec `ease: "none"`, on obtient un effet de machine à écrire, un peu comme Typed.js dans l'exercice Momo.

```js title="src/gsap.js"
import gsap from "gsap"
import { TextPlugin } from "gsap/TextPlugin"

gsap.registerPlugin(TextPlugin)

export function gsapAnimations() {

  gsap.to("#dialogue", {
    duration: 3,
    text: "Connais-toi toi-même",
    ease: "none"
  })

}
```

??? question "L'aphorisme de Socrate"

    <div class="grid grid-1-3" markdown>
    ![](./assets/images/herm-Socrates-half-original-Greek-Capitoline-Museums.webp)

    
    - Pourquoi est-ce que je **crois** ceci ?
    - Pourquoi est-ce que je **veux** cela ?
    - Qu’est-ce que je ferais **si personne ne regardait** ?
    - Qu’est-ce qui me met en **colère** ou me fait **peur** ? Que disent ces réactions de mes **valeurs** et de mes **besoins** ?
    </div>

<!-- Un aphorisme est une formule brève, concise et percutante qui résume une vérité générale, un principe moral, scientifique ou une réflexion d'ordre philosophique. -->

## Animations SVG

![type:video](./assets/videos/aligator.webm){.w-100 .h-auto}

Les trois plugins suivants travaillent sur du **SVG intégré directement dans le HTML** (`<svg></svg>`) et non sur un SVG chargé dans une balise `<img>`. GSAP doit pouvoir atteindre les `<path>` à l'intérieur.

!!! tip "Suggestion : spécifier une taille responsive en css. Par exemple : `width: 50vw;`"

**Trouver un svg**

* [allsvgicons.com](https://allsvgicons.com/)
* [svgrepo.com](https://www.svgrepo.com/)

**Nettoyer un svg**

* [svgomg.net](https://svgomg.net/)
* 👌👌👌 Figma ! (on ouvre et on exporte en svg)

**Préparer un SVG**

Un SVG exporté de Figma ou d'Illustrator se colle tel quel dans le HTML. Donnez ensuite un `id` aux formes à animer pour pouvoir les cibler.

```html hl_lines="3"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path
    id="catToDraw"
    stroke="#fff"
    stroke-width="1"
    d="M504.3 195.6c-10......"
  />
</svg>
```

### DrawSVGPlugin

<iframe src="https://tim-montmorency.com/Fragment/v/?f=gsap-drawsvgplugin&actif=resultat&modifiable=1&disposition=onglets&numeros=1" class="aspect-16-9" style="width:100%;border:0" loading="lazy"></iframe>

[DrawSVGPlugin](https://gsap.com/docs/v3/Plugins/DrawSVGPlugin/) anime le **tracé** d'un SVG, comme si un stylo le dessinait en direct.

<!-- DrawSVG anime le **contour** (`stroke`) d'un `<path>`, `<line>`, `<circle>`. -->

```js title="src/gsap.js"
import gsap from "gsap"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"

gsap.registerPlugin(DrawSVGPlugin)

export function gsapAnimations() {

  gsap.fromTo(
    "#catToDraw",
    { drawSVG: "0%", visibility: "visible" },
    { drawSVG: "100%", duration: 3, ease: "power1.inOut" },
  );

}
```

| Valeur | Résultat |
| :--- | :--- |
| `drawSVG: "0%"` | Rien n'est dessiné |
| `drawSVG: "100%"` | Le tracé complet |
| `drawSVG: "40% 60%"` | Seulement le segment entre 40&nbsp;% et 60&nbsp;% |

??? example "Pour le fun"

    ```js
    gsap.set("#catToDraw", { drawSVG: "0%", visibility: "visible" });

    gsap.timeline()
    .to(
      "#catToDraw",
      { drawSVG: "100%", duration: 3, ease: "power1.inOut" },
    )
    .to(
      "#catToDraw",
      { drawSVG: "100% 100%", duration: 3, ease: "power1.inOut" }
    )
    ```

#### Dessiner au défilement

Combiné à ScrollTrigger et `scrub`, le tracé avance avec la molette&nbsp;: parfait pour une route sur une carte ou une ligne du temps.

<iframe src="https://tim-montmorency.com/Fragment/v/?f=gsap-drawsvgplugin-scrolltrigger&actif=resultat&modifiable=1&disposition=onglets&numeros=1" class="aspect-16-9" style="width:100%;border:0" loading="lazy"></iframe>

??? example "Pour le fun"

    `drawSVG: "80% 100%"`

### MorphSVGPlugin

<iframe src="https://tim-montmorency.com/Fragment/v/?f=gsap-morphsvg&actif=resultat&modifiable=1&disposition=onglets&numeros=1" class="aspect-16-9" style="width:100%;border:0" loading="lazy"></iframe>

[MorphSVGPlugin](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/) transforme une forme (`<path>`) en une autre, même si elles n'ont pas le même nombre de points.

```html
<svg viewBox="0 0 100 100">
  <path id="lecture" d="M30,20 L80,50 L30,80 Z" />
  <defs>
    <path id="pause" d="M25,20 H45 V80 H25 Z M55,20 H75 V80 H55 Z" style="visibility: hidden" />
  </defs>
</svg>
```

!!! note "`defs`"

    La balise defs dans un SVG n'affiche pas son contenu. C'est parfait pour MorphSVG qui n'a besoin que tu code pour effectuer la transformation.

```js title="src/gsap.js"
import gsap from "gsap"
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"

gsap.registerPlugin(MorphSVGPlugin)

export function gsapAnimations() {

  gsap.to("#lecture", { morphSVG: "#pause", duration: 0.4 })
  gsap.to("#lecture", { morphSVG: "#lecture", duration: 0.4 }) // 👈 Retourne à l'état initial

}
```

??? warning "`<circle>` et `<rect>`"

    MorphSVG anime des `<path>`. Pour un cercle ou un rectangle, on le convertit d'abord&nbsp;:

    ```js
    MorphSVGPlugin.convertToPath("#bouclier, #epee")
    ```

### MotionPathPlugin

<iframe src="https://tim-montmorency.com/Fragment/v/?f=gsap-motionpath&actif=resultat&modifiable=1&disposition=onglets&numeros=1" class="aspect-16-9" style="width:100%;border:0" loading="lazy"></iframe>

[MotionPathPlugin](https://gsap.com/docs/v3/Plugins/MotionPathPlugin/) fait voyager un élément le long d'un **chemin**, souvent un tracé SVG. Idéal pour un bateau sur la mer, un vaisseau dans l'espace, un point sur une carte.

```html
<svg>
  <path id="route" d="M5 40.3168C8.73535 ..." />
</svg>
<img id="car" src="car.svg" />
```

```js title="src/gsap.js"
import gsap from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"

gsap.registerPlugin(MotionPathPlugin)

export function gsapAnimations() {

  gsap.to("#car", {
    duration: 10,
    ease: "none",
    repeat: -1,
    motionPath: {
      path: "#route",        // un <path> SVG
      align: "#route",       // place l'élément sur le tracé
      alignOrigin: [0.5, 1], // le transformOrigin de l'auto posé sur le tracé
      autoRotate: true,      // oriente l'élément selon la direction
    },
  });

}
```

On peut aussi très bien cacher le tracé avec `stroke="none"` sur le path du motionPath

??? example "Pour le fun"

    On peut utiliser DrawSVG avec MotionPath ! Il suffit d'animer les deux simultanément avec une timeline.

    <iframe src="https://tim-montmorency.com/Fragment/v/?f=gsap-motionpath-drawsvg&actif=resultat&modifiable=1&disposition=onglets&numeros=1" class="aspect-16-9" style="width:100%;border:0" loading="lazy"></iframe>


<div class="grid grid-1-2" markdown>
  ![](./activite/loop/preview.png){.aspect-4-3}

  <small>Exercice - GSAP</small><br>
  **[Loop](./activite/loop/index.md){.stretched-link .back}**
</div>

## Lissage personnalisé

[CustomEase](https://gsap.com/docs/v3/Eases/CustomEase/) permet de **dessiner** sa propre courbe de lissage.

```js title="src/gsap.js"
import gsap from "gsap"
import { CustomEase } from "gsap/CustomEase"

gsap.registerPlugin(CustomEase)

export function gsapAnimations() {

  CustomEase.create("impact", "M0,0 C0.1,0.9 0.2,1.2 0.35,1 0.5,0.9 0.7,1 1,1")
  gsap.from(".carte-boss", { y: -300, duration: 1, ease: "impact" })

}
```

## Interactions

### Draggable

<iframe src="https://tim-montmorency.com/Fragment/v/?f=gsap-draggable-inertiaplugin&actif=resultat&modifiable=1&disposition=onglets&numeros=1" class="aspect-16-9" style="width:100%;border:0" loading="lazy"></iframe>

[Draggable](https://gsap.com/docs/v3/Plugins/Draggable/) rend n'importe quel élément **déplaçable** à la souris ou au doigt.

```js title="src/gsap.js"
import gsap from "gsap"
import { Draggable } from "gsap/Draggable"
import { InertiaPlugin } from "gsap/InertiaPlugin"

gsap.registerPlugin(Draggable, InertiaPlugin)

export function gsapAnimations() {

  Draggable.create("#abc", {
    type: "x,y",           // options : "x", "y" et ou "rotation"
    bounds: "#xyz",        // ne sort pas de cette zone
    inertia: true          // glisse un peu après le lâcher (InertiaPlugin)
  })

}
```

#### `onDragEnd() + hitTest()`

<iframe src="https://tim-montmorency.com/Fragment/v/?f=gsap-draggable-callback&actif=resultat&modifiable=1&disposition=onglets&numeros=1" class="aspect-16-9" style="width:100%;border:0" loading="lazy"></iframe>

Pour savoir **où** l'élément a été déposé, on utilise `hitTest()` dans `onDragEnd`&nbsp;:

```js title="src/gsap.js"
import gsap from "gsap"
import { Draggable } from "gsap/Draggable"

gsap.registerPlugin(Draggable)

export function gsapAnimations() {

  Draggable.create("#abc", {
    type: "x,y",
    onDragEnd() {
      // S'il y a 60% de chevauchement
      if (this.hitTest("#xyz", "60%")) {         
        // Animation A
      } else {
        // Animation B
      }
    }
  })

}
```

<!-- !!! info "`this` dans `onDragEnd`"

    Dans `onDragEnd`, `this` est l'objet Draggable&nbsp;: `this.target` est l'élément déplacé, `this.hitTest()` vérifie le chevauchement. C'est pourquoi on écrit `onDragEnd() { … }` et non une fonction fléchée. -->

<!-- !!! tip "Le type `rotation`"

    `type: "rotation"` transforme un élément en **bouton rotatif**&nbsp;: un volant, une roue de sélection, un cadran de coffre-fort. -->

### ScrollToPlugin

<iframe src="https://tim-montmorency.com/Fragment/v/?f=gsap-scrolltoplugin&actif=resultat&modifiable=1&disposition=onglets&numeros=1" class="aspect-16-9" style="width:100%;border:0" loading="lazy"></iframe>

[ScrollToPlugin](https://gsap.com/docs/v3/Plugins/ScrollToPlugin/) fait défiler la page jusqu'à une cible.

```js title="src/gsap.js"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)

export function gsapAnimations() {

  document.querySelector("#bouton-decouvrir").addEventListener("click", () => {
    gsap.to(window, {
      duration: 1,
      ease: "power2.inOut",
      scrollTo: { y: "#concept", offsetY: 80 }   // 80 px pour laisser la place à la navbar
    })
  })

}
```

<!-- ??? question "Y'a pas déjà `scroll-behavior: smooth` en CSS ?"

    Le CSS sait aussi faire défiler en douceur, mais sans contrôle de la durée ni de la courbe, et sans `offsetY`. Avec ScrollTo, le défilement fait partie de l'animation du site. -->

## Responsive et `matchMedia()`

[`gsap.matchMedia()`](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()) permet de définir des animations **différentes selon la taille de l'écran**.

```js title="src/gsap.js" hl_lines="16-18 30-31"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin)

export function gsapAnimations() {

  let mm = gsap.matchMedia()

  // Écran large
  mm.add("(min-width: 768px)", () => {
    gsap.from("#abc", {
      drawSVG: "0%",
      scrollTrigger: { 
        trigger: "#xyz", 
        start: "top top", 
        end: "+=2000", 
        pin: true, 
        scrub: 1 
      }
    })
  })

  // Mobile
  mm.add("(max-width: 767px)", () => {
    gsap.from("#abc", {
      drawSVG: "0%",
      scrollTrigger: { 
        trigger: "#xyz", 
        start: "top 70%",
        end: "bottom 30%", 
        scrub: 1 
      }
    })
  })

}
```

<!-- FRAGMENT: gsap-matchmedia (animation différente bureau / mobile) -->

!!! note "Idéalement, utiliser les [breakpoints de Tailwind](https://tailwindcss.com/docs/responsive-design)"

??? tip "Respecter « réduire les animations »"

    Certaines personnes demandent à leur système de réduire les animations (par exemple pour ceux qui vivent du vertige ou même de l'épilepsie).
    
    ```js
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // les animations décoratives seulement ici
    })
    ```

    <iframe src="https://tim-montmorency.com/Fragment/v/?f=w5-gsap-reduced-motion&actif=resultat&modifiable=1&disposition=onglets&numeros=1" class="aspect-16-9" style="width:100%;border:0" loading="lazy"></iframe>

## Exercice

<div class="grid grid-1-2" markdown>
  ![](./activite/potion/preview.png){.aspect-4-3}

  <small>Exercice - GSAP</small><br>
  **[La potion magique](./activite/potion/index.md){.stretched-link .back}**
</div>

<!-- ## Projet final

L'énoncé du projet final est présenté aujourd'hui&nbsp;: le **microsite de lancement** d'un jeu vidéo. Par défaut, c'est le jeu développé en **Interactivité ludique**&nbsp;; pour les personnes qui ne suivent pas ce cours, un jeu existant ou fictif, avec **les mêmes exigences**. Les plugins vus aujourd'hui y trouvent directement leur place.

[Énoncé du projet final](./devoir/projet-final.md){ .md-button .md-button--primary }

### D'ici le cours 12

- [ ] Choisir son **volet** (A&nbsp;: mon jeu d'Interactivité ludique&nbsp;; B&nbsp;: un jeu existant ou fictif, à faire approuver)
- [ ] Rassembler les **médias**&nbsp;: logo, captures d'écran, une séquence vidéo, musique et effets sonores
- [ ] Commencer le fichier `CREDITS.md`&nbsp;: chaque média, sa source, sa licence
- [ ] Repérer les **plugins** qui serviront le mieux le jeu, et où (titre, carte, galerie…) -->
