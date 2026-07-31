# Cours 11 | GSAP - parallaxe, MotionPath & SVG

[STOP]

<!-- **Savoirs :** #10 Programmation événementielle · #15 Interactivité · #16 Animation via librairie -->

*[GSAP]: GreenSock Animation Platform
*[SVG]: Scalable Vector Graphics

![](./assets/images/gsap-banner.jpg){.w-100}

Vous maîtrisez les tweens, les timelines et ScrollTrigger. Ce dernier cours GSAP pousse plus loin&nbsp;: **épingler** des sections, créer de la **parallaxe**, faire voyager un élément le long d'un **tracé** (MotionPath) et **dessiner** des SVG (DrawSVG) 🎨.

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
  **[Automobile jaune 2](./exercices/gsap-auto2.md){.stretched-link .back}**
</div>

<div class="grid grid-1-2" markdown>
  ![](./assets/images/gsap-banner.jpg){.aspect-4-3}

  <small>Exercice - GSAP</small><br>
  **[Labyrinthe](./exercices/gsap-maze.md){.stretched-link .back}**
</div>

!!! success "Fin du bloc GSAP"

    Vous savez maintenant animer (tweens, timelines), déclencher au défilement (ScrollTrigger), créer de la profondeur (parallaxe) et exploiter des plugins (MotionPath, DrawSVG). De quoi donner vie à n'importe quelle interface 🚀.
