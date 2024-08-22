---
tags:
  - Cours 9
  - Vendredi 25 octobre
---

# Cours 9

[STOP]

## Sprite responsive

![](https://assets.codepen.io/9367036/hell-hound-walk.png)

```html
<div class="sprite-container">
  <div class="sprite"></div>
</div>
```

```css
.sprite-container {
  width: 64px; /* Largeur d'une seule image (768px / 12 étapes) */
  height: 32px; /* Hauteur de chaque image dans le sprite */
  overflow: hidden; /* Cache les parties non visibles du sprite */
}

.sprite {
  width: 768px; /* Largeur du sprite (12 images x 64px de large chaque image) */
  height: 32px; /* Hauteur du sprite */
  background-image: url("https://assets.codepen.io/9367036/hell-hound-walk.png");

  /* facultatif */
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
}
```

## ScrollTrigger

ScrollTrigger est un plugin GSAP qui permet de déclencher des animations en fonction du défilement de la page (scrolling).

### Fonctionnalités de base

Déclencher une animation lorsque l’élément entre dans la vue du viewport du navigateur.

```javascript
gsap.to(".box", {
  x: 200,
  scrollTrigger: ".box" // L'animation commence lorsque .box entre dans la vue
});
```

Personnaliser les points de déclenchement. Vous pouvez définir où commence et où se termine une animation avec les paramètres start et end.

```javascript
scrollTrigger: {
  trigger: ".box",
  start: "top 75%", // L'animation commence quand le haut de l'élément atteint 75% du viewport
  end: "bottom 25%", // L'animation se termine quand le bas de l'élément atteint 25% du viewport
}
```

Ajouter des marqueurs pour visualiser les déclencheurs (utile pour le développement).

```javascript
scrollTrigger: {
  trigger: ".box",
  start: "top 75%",
  end: "bottom 25%",
  markers: true // Affiche des marqueurs visuels sur la page
}
```

### Animation avec un sprite responsive

Les sprite ou spritesheet sont utilisés pour créer des animations fluides à partir d’une série d’images placées sur une seule image. L’animation se fait en déplaçant le “viewport” visible à travers les différentes images du sprite. Voici un exemple avec GSAP :

```javascript
const spriteAnimation = gsap.to(".sprite", {
  backgroundPosition: "-2400px 0px", // Modifie la position du background pour parcourir le spritesheet
  duration: 2,
  ease: "steps(12)", // Divise l'animation en 12 images fixes
  paused: true, // L'animation est en pause pour être contrôlée par ScrollTrigger!
  scrollTrigger: {
    trigger: ".sprite-container",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1, // Synchronise l'animation avec le scroll
    markers: true
  }
});
```

## Pratique guidée

[Pratique guidée sprite et scrolltrigger](./exercices/gsap-sprite-scrolltrigger.md)

## Exercices

1. Ajouter des effets supplémentaires : Intégrez des animations supplémentaires avec ScrollTrigger, comme un fond qui se déplace parallèlement au spritesheet.
1. Créer une version responsive : Adaptez l’animation pour différents écrans en ajustant les dimensions du conteneur et des images du spritesheet.
1. Combiner avec d’autres éléments : Ajoutez du texte ou des éléments graphiques qui apparaissent en synchronisation avec l’animation du spritesheet.
