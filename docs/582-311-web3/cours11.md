---
tags:
  - Cours 11
  - Vendredi 8 novembre
---

[STOP]

# Cours 11

## ScrollTrigger Avancé - Parallaxe et Animation MotionPath

### Effets de parallaxe

La parallaxe est une technique où les éléments de fond bougent à une vitesse différente par rapport aux éléments au premier plan, créant une sensation de profondeur. Avec ScrollTrigger, vous pouvez facilement mettre en place des effets parallaxe.

Concepts clés :

*	Les éléments au fond se déplacent plus lentement que ceux au premier plan.
*	Utiliser ScrollTrigger pour déclencher ces déplacements de manière fluide.

```javascript
gsap.to(".background", {
  y: -100, // Déplace l'arrière-plan plus lentement vers le haut
  scrollTrigger: {
    trigger: ".section",
    start: "top bottom", // Commence lorsque le haut de .section atteint le bas du viewport
    end: "bottom top", // Se termine lorsque le bas de .section atteint le haut du viewport
    scrub: true // Synchronise le mouvement avec le scroll
  }
});

gsap.to(".foreground", {
  y: -200, // Le premier plan se déplace plus vite
  scrollTrigger: {
    trigger: ".section",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

L’effet parallaxe est créé en déplaçant des éléments à différentes vitesses.
Le paramètre scrub: true synchronise l’animation avec le défilement pour un effet fluide.

### MotionPath

Le plugin MotionPath permet d’animer un élément en suivant une trajectoire personnalisée définie par un chemin SVG ou un chemin CSS.

Concepts clés :

*	Créer un chemin à suivre pour un élément.
*	Utiliser des courbes et des formes personnalisées pour un mouvement fluide.

```javascript
gsap.registerPlugin(MotionPathPlugin);

gsap.to(".ball", {
  motionPath: {
    path: "#path", // Le chemin SVG que l'élément suivra
    align: "#path", // Aligne l'élément avec le chemin
    autoRotate: true, // Fait pivoter l'élément en fonction du chemin
    start: 0,
    end: 1
  },
  duration: 5,
  ease: "power1.inOut"
});
```

*	L’élément .ball suit le chemin SVG défini par l’élément #path.
*	Le mouvement est fluide grâce à l’alignement et à la rotation automatique.

## Pratique guidée

[Pratique guidé](./exercices/gsap-motionpath-parallax.md)

## Exercices

1. Exercice 1 : Animation complexe combinant parallaxe et MotionPath : Les étudiants créent une animation où plusieurs éléments se déplacent selon des chemins spécifiques tout en appliquant des effets de parallaxe.
1. Exercice 2 : Projet visuel - Page défilante animée : Application des techniques vues pour créer une page où les éléments se déplacent, se déforment et changent de vitesse en fonction du scroll, créant une expérience visuelle fluide et interactive.
