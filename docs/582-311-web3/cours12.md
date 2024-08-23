---
tags:
  - Cours 12
  - Vendredi 15 novembre
---

[STOP]

# Cours 12

## DrawSVG

Le plugin DrawSVG de GSAP permet d’animer des tracés SVG en les “dessinant” progressivement. C’est idéal pour des animations telles que des lignes qui se dessinent à l’écran ou des illustrations techniques.

Concepts clés :

* Animer la longueur d’un tracé SVG, de 0% à 100%, pour le révéler progressivement.
* Utiliser GSAP pour contrôler la progression de l’animation.

```js
gsap.from(".line", {
  drawSVG: "0%", // Commence l’animation en dessinant le tracé à partir de 0%
  duration: 3, // Temps pour compléter le tracé
  ease: "power1.inOut"
});
```

*	Le plugin DrawSVG permet de “dessiner” des tracés SVG en animant leur longueur.
*	Le paramètre drawSVG: "0%" fait en sorte que l’animation commence à partir de zéro.

## Combinaison de DrawSVG avec ScrollTrigger

```js
gsap.from(".line", {
  drawSVG: "0%",
  scrollTrigger: {
    trigger: ".section",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
    markers: true
  }
});
```

## Parallaxe avec SVG

Les effets de parallaxe peuvent également être appliqués à des éléments SVG. Cela permet de créer des animations où certains éléments se déplacent plus lentement ou plus rapidement que d’autres pour créer une sensation de profondeur.

```js
gsap.to(".svg-background", {
  x: -200, // Déplace l’élément SVG en arrière-plan de gauche à droite
  scrollTrigger: {
    trigger: ".section",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

## Pratique guidée

[Pratique guidé](./exercices/gsap-drawsvg.md)

## Exercices

1. Exercice 1 : Animation SVG contrôlée par le scroll : Les étudiants doivent créer une animation où plusieurs tracés SVG se dessinent de manière synchronisée avec le scroll.
1. Exercice 2 : Projet complet combinant Parallaxe et Animation SVG : Application des techniques vues pour créer une page complète où des éléments SVG sont animés et intégrés avec des effets de parallaxe pour créer une expérience interactive et visuelle.