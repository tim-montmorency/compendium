---
tags:
  - Cours 8
  - Vendredi 18 octobre
---

# Cours 8

[STOP]

[GSAP](https://gsap.com/) (GreenSock Animation Platform) est une bibliothèque JavaScript pour créer des animations web. Elle est utilisée pour créer des animations complexes et interactives.

## Installation

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>

<script>
 document.addEventListener("DOMContentLoaded", (event) => {
  // Votre code ici
 });
</script>
```

[Documentation officielle pour la version 3](https://gsap.com/docs/v3/Installation)

## Animation de base

Les fonctionnalités de base pour les animations sont les suivantes.

* `to()` : Crée une animation où les propriétés de l’élément évoluent jusqu’aux valeurs spécifiées.
* `from()` : Crée une animation où les propriétés de l’élément commencent à une certaine valeur puis reviennent à leur état initial.
* `fromTo()` : Permet de spécifier les valeurs de départ et d’arrivée pour une animation.

### Fonction to()

Modifie les propriétés d’un élément vers les valeurs définies.

```javascript
// .box se déplace de 100 pixels sur l’axe x en 2 secondes.
gsap.to(".box", { x: 100, duration: 2 });
```

### Fonction from()

Les propriétés de l’élément commencent à une valeur définie et reviennent à leur état normal.

```javascript
// .box commence avec une opacité de 0 (invisible) et devient progressivement visible en 1 seconde.
gsap.from(".box", { opacity: 0, duration: 1 });
```

### Fonction fromTo()

Spécifie à la fois les valeurs de départ et d’arrivée.

```javascript
// Le cercle passe d’une taille réduite (0.5) à une taille agrandie (1.5) sur une durée de 2 secondes.
gsap.fromTo(".circle", { scale: 0.5 }, { scale: 1.5, duration: 2 });
```

## Ligne du temps (timeline)

La gestion des animations peut devenir complexe avec plusieurs éléments à animer en séquence. Pour cela, GSAP propose les timelines via `gsap.timeline()`.

Instanciation

```javascript
const tl = gsap.timeline();
```

Ajout d'une séquence d'animations

```javascript
tl.to(".box", { x: 100, duration: 2 })
  .to(".circle", { y: 50, duration: 1 }, "-=1")
  .from(".box", { opacity: 0, duration: 1 });
```

* Le premier .to() anime .box de 100 pixels sur l’axe x.
* Le deuxième .to() anime .circle sur l’axe y, mais commence 1 seconde avant la fin de la première animation grâce à "-=1".
* Le .from() final fait apparaître .box à nouveau avec une transition d’opacité.

Les timelines permettent également de contrôler facilement la lecture avec des méthodes comme `.pause()`, .`play()`, `.reverse()`, et `.restart()`.

## Pratique guidée

[Pratique guidée GSAP](./exercices/gsap-animation.md)

## Exercices

1. Exercice 1 : Animation d’introduction de site web : Créez une animation d’introduction pour une page web où un logo, un titre, et un slogan apparaissent séquentiellement.
1. Exercice 2 : Animation d’une interface utilisateur : Animez l’apparition d’éléments d’une interface utilisateur, comme des boutons ou des cartes d’information, en les synchronisant avec une timeline.
1. Exercice 3 : Animation d’un scénario créatif : Imaginez une petite histoire visuelle où plusieurs éléments se déplacent et interagissent. Utilisez gsap.timeline() pour structurer l’animation et raconter votre histoire.
