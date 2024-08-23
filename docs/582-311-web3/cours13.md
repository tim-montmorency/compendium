---
tags:
  - Cours 13
  - Vendredi 22 novembre
---

[STOP]

# Cours 13

## MorphSVG et transitions de formes

Le plugin MorphSVG permet de transformer des formes SVG d’une manière fluide. Ce type d’animation est particulièrement utile pour des transitions visuelles, des logos dynamiques, et des illustrations interactives.

Concepts clés :

*	Transformer une forme SVG en une autre en utilisant des chemins SVG.
*	Gérer les transitions fluides entre des formes complexes.

```js
gsap.registerPlugin(MorphSVGPlugin);

gsap.to("#circle", {
  morphSVG: "#star", // Transformation du cercle en étoile
  duration: 2,
  ease: "elastic.inOut"
});
```

Explication :

*	Le plugin MorphSVG permet de passer d’une forme à une autre tout en maintenant une transition fluide.
*	L’animation est ici contrôlée par GSAP et peut être personnalisée avec des easing.

## Optimisation des animations pour les performances

Pour illustrer l’optimisation des animations pour les performances, voici des exemples avant et après qui montrent comment améliorer l’efficacité de vos animations en évitant les propriétés coûteuses pour le navigateur. L’optimisation se concentre sur l’utilisation de propriétés gérées par le GPU comme transform et opacity au lieu de propriétés qui déclenchent des reflows et des repaints comme left, top, width, et height.

!!! note "Déplacement d’un élément"

    === "C'est bien"

        ```js
        gsap.to(".box", {
          left: "200px", // Modifie la propriété "left", ce qui déclenche un reflow
          duration: 1
        });
        ```

        :triangular_flag_on_post: L’animation de left force le navigateur à recalculer la disposition de tous les éléments, ce qui est coûteux en termes de performance.

    === "C'est mieux"

        ```js
        gsap.to(".box", {
          x: 200, // Utilise "transform: translateX", géré par le GPU
          duration: 1
        });
        ```

        :medal: **Optimisation** : L’animation de x (qui correspond à transform: translateX) est gérée par le GPU, ce qui évite les reflows et améliore la fluidité.

!!! note "Redimensionnement d’un élément"

    === "C'est bien"

        ```js
        gsap.to(".box", {
          width: "300px", // Modifie la propriété "width", ce qui déclenche un reflow
          duration: 1
        });
        ```

        :triangular_flag_on_post: Modifier la largeur d’un élément provoque un recalcul de la disposition et un repaint, impactant la performance.

    === "C'est mieux"

        ```js
        gsap.to(".box", {
          scaleX: 1.5, // Utilise "transform: scaleX" au lieu de "width"
          duration: 1
        });
        ```

        :medal: **Optimisation** : En utilisant scaleX, vous évitez de modifier la disposition de la page, ce qui réduit la charge sur le navigateur.

!!! note "Transition d’opacité avec un flou"

    === "C'est bien"

        ```js
        gsap.to(".box", {
          opacity: 0,
          filter: "blur(10px)", // Utilise "filter", ce qui est coûteux pour le rendu
          duration: 1
        });
        ```

        :triangular_flag_on_post: Les propriétés comme filter (surtout le flou) ne sont pas gérées efficacement par le GPU et peuvent provoquer des ralentissements visibles.

    === "C'est mieux"

        ```js
        gsap.to(".box", {
          opacity: 0, // Se concentre uniquement sur l’opacité, gérée par le GPU
          duration: 1
        });
        ```

        :medal: **Optimisation** : En limitant l’animation à des propriétés optimisées comme opacity, vous garantissez une animation fluide.

## Résumé

1. Préférez transform et opacity : Ce sont les propriétés les plus performantes, car elles sont directement gérées par le GPU.
2. Évitez les propriétés déclenchant des reflows/repaints : Les propriétés comme left, top, width, et height sont coûteuses.
3. Limitez l’utilisation de filtres : Les effets comme blur, drop-shadow, et filter peuvent ralentir le rendu.
