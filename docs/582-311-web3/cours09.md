# Cours 9 | GSAP - ScrollTrigger, timelines & sprites

[STOP]

<!-- **Savoirs :** #10 Programmation événementielle · #16 Animation via librairie · #17 Réactivité -->

*[GSAP]: GreenSock Animation Platform

![](./assets/images/gsap-banner.jpg){.w-100}

Au dernier cours, vos animations se lançaient au chargement de la page. Aujourd'hui, on les déclenche **au défilement** - l'effet vedette des sites modernes - grâce au plugin **[ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)**, puis on enchaînera plusieurs tweens avec les **timelines**. On terminera avec l'**animation de sprite** et le **responsive**.

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
| `pin` | Épingle l'élément pendant le défilement (cours 10) |
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

## Les _timelines_

Un tween anime une chose. Une **[timeline](https://gsap.com/docs/v3/GSAP/Timeline)** enchaîne **plusieurs** tweens, comme un scénario. Par défaut, chaque tween attend la fin du précédent.

```js
gsap.timeline()
  .to(".boite", { x: 100, duration: 1 })        // démarre à 0 s
  .to(".boite", { rotation: 360, duration: 1 }) // démarre après le premier
  .to(".boite", { y: 100, duration: 1 })        // démarre après le deuxième
```

### Le paramètre de position

Un 3<sup>e</sup> argument ajuste le moment où un tween démarre dans la timeline&nbsp;:

| Position | Signifie |
| :--- | :--- |
| _(rien)_ | À la suite du tween précédent |
| `"+=0.5"` | 0,5 s **après** la fin du précédent |
| `"-=0.5"` | 0,5 s **avant** la fin du précédent (chevauchement) |
| `"<"` | En même temps que le **début** du précédent |

```js
gsap.timeline()
  .to(".boite", { x: 100, duration: 1 })
  .to(".boite", { rotation: 360, duration: 1 }, "-=0.5")
  .to(".ombre", { opacity: 0, duration: 1 }, "<")
  .to(".boite", { y: 100, duration: 1 }, "+=0.2")
```

### Une timeline pilotée par le défilement

C'est ici que les deux notions se rejoignent&nbsp;: le `scrollTrigger` se place **sur la timeline** plutôt que sur chaque tween. Avec `scrub`, le défilement fait avancer **toute la séquence**.

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

## Exercices

<div class="grid grid-1-2" markdown>
  ![](./assets/images/gsap-banner.jpg){.aspect-4-3}

  <small>Exercice - GSAP</small><br>
  **[Scène animée réactive (ScrollTrigger)](./exercices/gsap-scrolltrigger-intermediaire.md){.stretched-link .back}**
</div>
