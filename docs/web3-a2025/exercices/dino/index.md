---
tags:
  - Exercice
  - AnimeJS
  - JavaScript
---

# Dino

![](./giphy.gif){ .w-100 }

L'objectif de cet exercice est de mettre en pratique les notions AnimeJS suivantes : 

* contrôle de lecture
* animation de variable css

## Résultat attendu

<iframe class="aspect-16-9" height="300" style="width: 100%;" scrolling="no" title="AnimeJS - Dino SOLUTION" src="https://codepen.io/tim-momo/embed/MYKXKeB/a223382df47da3cec2736300db29dc70?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true">
      See the Pen <a href="https://codepen.io/tim-momo/pen/MYKXKeB/a223382df47da3cec2736300db29dc70">
  AnimeJS - Dino SOLUTION</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Consignes

- [ ] Effectuer un fork du [Codepen de départ](https://codepen.io/tim-momo/pen/XJXYqJP/8ea345cdcbc6101f40220595c016c735)
- [ ] Ajouter une variable `isJumping` configurée à `false`

<!-- let isJumping = false; -->

### Background

- [ ] Animer la variable css `--posx` à précisément `-2373` (la largeur de l'image)
- [ ] Durée de 6 sec
- [ ] Lissage linéaire
- [ ] Boucle infinie

<!-- 
animate(":root", {
  "--posx": -2373,
  duration: 6000,
  ease: "linear",
  loop: true
});
-->

### Cactus 

- [ ] Animer le cactus de droite à gauche
- [ ] Durée de 4 sec
- [ ] Lissage linéaire
- [ ] Boucle infinie

<!-- 
animate(".cactus", {
  x: ["100vw", "-100vw"],
  duration: 4000,
  ease: "linear",
  loop: true
}); 
-->

### Dino

- [ ] Ajouter une animation pour faire sauter le dino et placez la dans une variable `jump`
- [ ] L'animation ne doit pas se déclencher au chargement de la page
- [ ] Boucle 1 seule fois
- [ ] Effet allé-retour
- [ ] Durée de 300 ms
- [ ] y = `-200`
- [ ] Dans un callback onComplete, on doit appliquer `false` à la variable `isJumping`

<!--
let jump = animate(".dino", {
  y: -200,
  duration: 300,
  alternate: true,
  loop: 1,
  autoplay: false,
  onComplete: () => (isJumping = false)
});
-->

### Interactivité

- [ ] Ajouter un eventListener au clic du document
- [ ] Si la variable `isJumping` est à true, on effectue un `return`
- [ ] Sinon, on lui donne la valeur `true` et on déclenche la fonction `restart()` de l'animation.

<!--
document.addEventListener("click", () => {
  if (isJumping) return;
  isJumping = true;
  jump.restart();
});
-->
