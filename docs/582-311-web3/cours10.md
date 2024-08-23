---
tags:
  - Cours 10
  - Vendredi 1er novembre
---

[STOP]

# Cours 10

## ScrollTrigger intermédiaire - Contrôles avancés et synchronisation

1. Scrub avancé : Utilisation du paramètre scrub pour synchroniser précisément les animations avec le défilement.
1. Utilisation des événements dans ScrollTrigger : onEnter, onLeave, onUpdate, etc., pour réagir à différents états pendant le défilement.
1. Animation basée sur la progression du scroll : Créer des animations en fonction de la position exacte du défilement.
1. Combinaison de plusieurs ScrollTriggers : Créer des animations coordonnées et complexes.

### Scrub avancé

Le paramètre scrub permet de contrôler l’animation en fonction du défilement. Plus le scrub est élevé, plus l’animation a une transition douce.

```javascript
gsap.to(".element", {
  x: 500,
  scrollTrigger: {
    trigger: ".element",
    scrub: 2, // L'animation suit le scroll avec un délai de 2 secondes
    markers: true
  }
});
```

Le scrub: 2 ajoute un délai de 2 secondes entre le scroll de l’utilisateur et l’animation, créant un effet plus progressif.

### Utilisation des événements dans ScrollTrigger

ScrollTrigger vous permet de réagir à différents événements liés au défilement comme :

* onEnter : Quand l’élément entre dans la zone visible.
* onLeave : Quand l’élément quitte la zone visible.
* onUpdate : À chaque mise à jour du défilement.

```javascript
gsap.to(".box", {
  x: 200,
  scrollTrigger: {
    trigger: ".box",
    scrub: true,
    onEnter: () => console.log("L'élément entre dans la vue !"),
    onLeave: () => console.log("L'élément quitte la vue !"),
    onUpdate: (self) => console.log("Progression : ", self.progress),
    markers: true
  }
});
```

Dans cet exemple, des messages sont affichés dans la console à chaque événement.

### Animation basée sur la progression du scroll

En utilisant la propriété self.progress dans onUpdate, vous pouvez créer des animations qui réagissent dynamiquement à la position exacte du défilement.

```javascript
ScrollTrigger.create({
  trigger: ".circle",
  start: "top 75%",
  end: "bottom 25%",
  scrub: 1,
  onUpdate: (self) => {
    gsap.to(".circle", { scale: self.progress + 1 }); // L'échelle de l'élément change en fonction de la progression du scroll
  },
  markers: true
});
```

Ici, l’échelle du cercle augmente progressivement avec la progression du défilement.

### Combinaison de plusieurs ScrollTriggers

Créer des animations où plusieurs éléments interagissent ensemble en fonction du défilement peut donner des effets dynamiques et immersifs.

```javascript
gsap.to(".box", {
  x: 200,
  scrollTrigger: {
    trigger: ".box",
    scrub: true,
    markers: true
  }
});

gsap.to(".circle", {
  y: 150,
  scrollTrigger: {
    trigger: ".circle",
    scrub: 1,
    markers: true
  }
});

gsap.to(".triangle", {
  rotation: 360,
  scrollTrigger: {
    trigger: ".triangle",
    scrub: 2,
    markers: true
  }
});
```

Dans cet exemple, trois éléments s’animent de manière coordonnée en fonction du scroll. Les animations sont indépendantes mais se déclenchent en parallèle.

## Pratique guidée

[Pratique guidée](./exercices/gsap-scrolltrigger-intermediaire.md)

## Exercices

1. Exercice 1 : Animer une progression synchronisée : Les étudiants doivent créer une animation où plusieurs éléments réagissent de manière synchronisée au défilement, en utilisant des effets de “scrub” et de progression dynamique.
1. Exercice 2 : Création d’un storytelling animé : Créez une page où le défilement raconte une histoire à travers des animations déclenchées par ScrollTrigger, avec des événements et des réactions dynamiques.
1. Exercice 3 : Combinaison de différents ScrollTriggers : Les étudiants doivent combiner plusieurs ScrollTriggers pour créer des animations complexes où plusieurs éléments bougent, changent de forme ou de couleur de manière coordonnée.