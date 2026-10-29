# Cours 10 | GSAP - ScrollTrigger, parallaxe, MotionPath & SVG

[STOP]

<!-- **Savoirs :** #10 Programmation événementielle · #15 Interactivité · #16 Animation via librairie -->

*[GSAP]: GreenSock Animation Platform
*[SVG]: Scalable Vector Graphics

![](./assets/images/gsap-banner.jpg){.w-100}

Au dernier cours, vos animations se lançaient au chargement de la page. Aujourd'hui, on les déclenche **au défilement** - l'effet vedette des sites modernes - grâce au plugin **[ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)**. On verra aussi l'**animation de sprite** et le **responsive**, puis on poussera plus loin&nbsp;: **épingler** des sections, créer de la **parallaxe**, faire voyager un élément le long d'un **tracé** (MotionPath) et **dessiner** des SVG (DrawSVG) 🎨.

## Activer un plugin

ScrollTrigger est un **plugin** de GSAP. Il faut l'importer et l'**enregistrer** une fois.

```js title="src/main.js"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
```

!!! warning "Le piège du `registerPlugin`"

    Sans `gsap.registerPlugin(ScrollTrigger)`, rien ne fonctionne (et avec un build comme Vite, le plugin peut même être supprimé du code final). On l'enregistre **une seule fois**, au démarrage.

## Premier déclenchement au défilement

On ajoute simplement une clé `scrollTrigger` dans la config d'un tween&nbsp;:

```js
gsap.from(".carte", {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".carte",   // l'élément qui déclenche
    start: "top 80%",    // quand le haut de .carte atteint 80% du bas de l'écran
    markers: true        // repères visuels (à retirer en production)
  }
})
```

<!-- CODEPEN: reveal au défilement (fade + montée) -->

## Les options de ScrollTrigger

| Option | Rôle |
| :--- | :--- |
| `trigger` | L'élément observé |
| `start` | Point de départ (`"top 80%"`, `"center center"`…) |
| `end` | Point de fin (`"bottom top"`, `"+=500"`…) |
| `toggleActions` | Que faire aux 4 moments clés |
| `scrub` | Lie la progression de l'animation au défilement |
| `pin` | Épingle l'élément pendant le défilement (voir plus bas) |
| `markers` | Affiche des repères de débogage |

### Comprendre `start` et `end`

La valeur se lit **« point de l'élément » « point de l'écran »**.

```txt
start: "top 80%"
        │    └── 80% de la hauteur de la fenêtre (bas de l'écran)
        └─────── le haut de l'élément déclencheur
```

Autrement dit&nbsp;: « déclenche quand le **haut de l'élément** croise la ligne située à **80&nbsp;% de l'écran** ». Activez `markers: true` pour **voir** ces lignes - c'est le meilleur outil pour comprendre.

### `toggleActions`

Définit le comportement à quatre moments&nbsp;: `onEnter onLeave onEnterBack onLeaveBack`.

```js
toggleActions: "play none none reverse"
//              ↑     ↑    ↑    ↑
//         onEnter onLeave onEnterBack onLeaveBack
```

Chaque valeur peut être `play`, `pause`, `resume`, `reverse`, `restart` ou `none`. L'exemple ci-dessus joue l'animation en entrant, et la joue à l'envers en remontant.

### `scrub` - animer AVEC le défilement

Avec `scrub`, l'animation n'est plus « déclenchée »&nbsp;: sa progression **suit exactement** la molette. On rembobine en remontant.

| Valeur | Effet |
| :--- | :--- |
| `scrub: true` | Suit le défilement à l'instant |
| `scrub: 1` | Suit avec 1 s de rattrapage en douceur (plus fluide) |

```js
gsap.to(".barre", {
  scaleX: 1,
  scrollTrigger: {
    trigger: ".section",
    start: "top top",
    end: "bottom bottom",
    scrub: 1
  }
})
```

<!-- CODEPEN: barre de progression liée au scroll (scrub) -->

### Une timeline pilotée par le défilement

Le `scrollTrigger` peut aussi se placer **sur une timeline** (vue au cours 9) plutôt que sur chaque tween. Avec `scrub`, le défilement fait avancer **toute la séquence**.

```js
gsap.timeline({
  scrollTrigger: {
    trigger: ".scene",
    start: "top top",
    end: "+=1000",   // la séquence s'étale sur 1000 px de défilement
    scrub: 1,
    markers: true
  }
})
  .to(".boite", { x: 300 })
  .to(".cercle", { scale: 2 }, "<")   // en même temps que la boîte
  .to(".triangle", { rotation: 360 }) // ensuite
```

!!! info "La durée devient relative"

    Avec `scrub`, ce n'est plus le temps qui fait avancer l'animation, mais le défilement. Les `duration` servent alors à définir les **proportions** entre les tweens&nbsp;: un tween de `duration: 2` occupe deux fois plus de défilement qu'un tween de `duration: 1`.

<!-- CODEPEN: timeline + scrollTrigger + scrub -->

## Animation de sprite

Un **sprite** (ou feuille de sprites) est une seule image contenant plusieurs poses côte à côte. En décalant la `background-position` par bonds, on obtient une animation image par image - comme un dessin animé 🎞️.

L'astuce&nbsp;: l'ease **`steps()`** avance par paliers nets plutôt qu'en continu.

```js
gsap.to(".perso", {
  backgroundPosition: "-2400px 0px",  // largeur totale de la feuille
  duration: 1,
  ease: "steps(8)",                    // 8 images
  repeat: -1
})
```

!!! tip "Calculer le déplacement"

    Si votre personnage fait 300&nbsp;px de large et que la feuille contient 8 poses, la position finale est `8 × 300 = 2400 px`, et l'ease est `steps(8)`.

<div class="grid grid-1-2" markdown>
  ![](./assets/images/gsap-banner.jpg){.aspect-4-3}

  <small>Exercice - GSAP</small><br>
  **[Animation avec un sprite responsive](./exercices/gsap-sprite-scrolltrigger.md){.stretched-link .back}**
</div>

## Rendre le tout responsive : `matchMedia()`

Une animation belle sur grand écran peut être cassée sur mobile. [`gsap.matchMedia()`](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()) permet de définir des animations **différentes selon la taille de l'écran**, et GSAP fait le ménage automatiquement quand on change de _breakpoint_.

```js
let mm = gsap.matchMedia()

mm.add("(min-width: 768px)", () => {
  // Animations pour écran large seulement
  gsap.to(".hero", { x: 400, scrollTrigger: { /* … */ } })
})

mm.add("(max-width: 767px)", () => {
  // Version allégée pour mobile
  gsap.to(".hero", { opacity: 1 })
})
```

<!-- CODEPEN: matchMedia (animation différente desktop vs mobile) -->

!!! success "À retenir"

    ScrollTrigger repose sur 3 idées&nbsp;: **quand** (`start`/`end`), **quoi faire** (`toggleActions` ou `scrub`), et **débogage** (`markers`). Maîtrisez `markers` en premier&nbsp;: voir les lignes, c'est tout comprendre.

<div class="grid grid-1-2" markdown>
  ![](./assets/images/gsap-banner.jpg){.aspect-4-3}

  <small>Exercice - GSAP</small><br>
  **[Scène animée réactive (ScrollTrigger)](./exercices/gsap-scrolltrigger-intermediaire.md){.stretched-link .back}**
</div>

## Épingler une section (`pin`)

L'option `pin` **fige** un élément à l'écran pendant que le reste de la page continue de défiler. C'est la base des « scènes » narratives.

```js
gsap.to(".contenu", {
  x: -1000,
  ease: "none",
  scrollTrigger: {
    trigger: ".section",
    start: "top top",
    end: "+=2000",   // dure sur 2000 px de défilement
    pin: true,       // fige la section pendant ce temps
    scrub: 1
  }
})
```

!!! tip "`pin` + `scrub` = défilement horizontal"

    Combiner `pin` (fige) et `scrub` (lie au défilement) est la recette classique du **défilement horizontal** ou des scènes qui se déroulent sur place.

<!-- CODEPEN: section épinglée avec défilement horizontal (pin + scrub) -->

## La parallaxe multicouches

La **parallaxe**, c'est l'illusion de profondeur créée quand les plans lointains bougent **plus lentement** que les plans proches. Avec ScrollTrigger, il suffit de donner à chaque couche une amplitude de déplacement différente, en `scrub`.

```js
// L'arrière-plan bouge peu (lointain)
gsap.to(".fond", {
  y: 100,
  ease: "none",
  scrollTrigger: { trigger: ".scene", start: "top bottom", end: "bottom top", scrub: true }
})

// Le premier plan bouge beaucoup (proche)
gsap.to(".avant-plan", {
  y: 400,
  ease: "none",
  scrollTrigger: { trigger: ".scene", start: "top bottom", end: "bottom top", scrub: true }
})
```

!!! note "Le secret : `ease: none` + `scrub`"

    Pour une parallaxe crédible, le mouvement doit être **linéaire** (`ease: "none"`) et **lié au défilement** (`scrub`). Ce sont les différences d'amplitude (`y: 100` vs `y: 400`) qui créent la profondeur.

<div class="grid grid-1-2" markdown>
  ![](./assets/images/gsap-banner.jpg){.aspect-4-3}

  <small>Exercice - GSAP</small><br>
  **[Combinaison parallaxe et MotionPath](./exercices/gsap-motionpath-parallax.md){.stretched-link .back}**
</div>

## Suivre un tracé : MotionPathPlugin

[MotionPathPlugin](https://gsap.com/docs/v3/Plugins/MotionPathPlugin/) fait voyager un élément le long d'un **chemin** - souvent un tracé SVG. Idéal pour une fusée qui suit une courbe, un point sur une carte, etc.

```js title="src/main.js"
import gsap from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"

gsap.registerPlugin(MotionPathPlugin)

gsap.to(".fusee", {
  duration: 4,
  ease: "none",
  motionPath: {
    path: "#trace",       // un <path> SVG
    align: "#trace",      // aligne l'élément sur le tracé
    autoRotate: true      // oriente l'élément selon la direction
  }
})
```

!!! tip "`autoRotate`"

    `autoRotate: true` fait pivoter l'élément pour qu'il « regarde » toujours vers l'avant du tracé - indispensable pour une voiture ou une flèche.

<!-- CODEPEN: élément qui suit un tracé SVG (motionPath + autoRotate) -->

## Dessiner un SVG : DrawSVGPlugin

[DrawSVGPlugin](https://gsap.com/docs/v3/Plugins/DrawSVGPlugin/) anime le **tracé** d'un SVG, comme si un stylo le dessinait en direct. (Ce plugin, autrefois payant, est désormais **gratuit** 🎉.)

```js title="src/main.js"
import gsap from "gsap"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"

gsap.registerPlugin(DrawSVGPlugin)

gsap.from("#signature path", {
  drawSVG: "0%",      // part d'un tracé invisible
  duration: 2,
  stagger: 0.2
})
```

!!! warning "Ça marche sur les tracés, pas les remplissages"

    DrawSVG anime le **contour** (`stroke`) d'un `<path>`, `<line>`, `<circle>`… Assurez-vous que vos formes SVG ont un `stroke` visible et pensez à animer depuis `"0%"` (invisible) vers `"100%"` (complet).

<div class="grid grid-1-2" markdown>
  ![](./assets/images/gsap-banner.jpg){.aspect-4-3}

  <small>Exercice - GSAP</small><br>
  **[Animation SVG avec DrawSVG, ScrollTrigger et Parallaxe](./exercices/gsap-drawsvg.md){.stretched-link .back}**
</div>

## Aller plus loin : `snap`

L'option `snap` de ScrollTrigger « aimante » le défilement vers des positions précises - pratique pour un carrousel plein écran ou des sections qui se calent d'elles-mêmes.

```js
scrollTrigger: {
  trigger: ".galerie",
  start: "top top",
  end: "+=3000",
  pin: true,
  scrub: 1,
  snap: 1 / 4   // s'aimante à chacune des 4 étapes
}
```

## Exercices

<div class="grid grid-1-2" markdown>
  ![](./assets/images/gsap-banner.jpg){.aspect-4-3}

  <small>Exercice - GSAP</small><br>
  **[Labyrinthe](./exercices/gsap-maze.md){.stretched-link .back}**
</div>

!!! success "Fin du bloc GSAP"

    Vous savez maintenant animer (tweens, timelines), déclencher au défilement (ScrollTrigger), créer de la profondeur (parallaxe) et exploiter des plugins (MotionPath, DrawSVG). De quoi donner vie à n'importe quelle interface 🚀.
