# Cours 11 | Diagrammes

[STOP]

Chart.js : bar, line, pie, radar, animation et personnalisation

## Parallaxe CSS

Une parallaxe consiste à créer un effet de profondeur en déplaçant des éléments à des vitesses différentes. Ainsi, les éléments se déplaçant plus rapidement sont perçus comme étant plus près, alors que ceux se déplaçant plus lentement sont perçus comme étant plus loin.

[Walt Disney](https://fr.wikipedia.org/wiki/Walt_Disney) fut l'un des pionniers à ce niveau grâce à son invention le [MultiPlane](https://fr.wikipedia.org/wiki/Cam%C3%A9ra_multiplane). Cette technologie permet de déplacer à des vitesses différentes plusieurs éléments d'un dessin animé recréant ainsi l'aspect de profondeur perçu dans la vie réelle.

![type:video](https://www.youtube.com/embed/5D2q72tJGA8?si=xvNb5kWAN248Ruel)

Le même principe est applicable en CSS.

<iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="Walt Disney's MultiPlane Camera" src="https://codepen.io/tim-momo/embed/GRVYzaZ?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/GRVYzaZ">
  Walt Disney's MultiPlane Camera</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Exemples de sites

* [Firewatch](https://www.firewatchgame.com/) (axe des Y)
* [Goonies](https://the-goonies.webflow.io/) (axe des Z)
* [Longshot](https://longshotfeatures.com/) (axe des X)

### Perspective & axe des Z

Pour créer un effet similaire en CSS, il est nécessaire de configurer une perspective. Cette perspective est l'équivalent de spécifier à quelle distance en pixels se trouve le point de vue de l'utilisateur de ce qui est affiché.

```css
.parallax {
  perspective: 100px;
}
```

Ce code indique que le point de vue de l'utilisateur se trouve à une distance équivalente à 100px de ce qui est affiché dans `.parallax`.

Une fois cette perspective configurée, le positionnement des éléments sur l'axe des Z peut être utilisé afin de rapprocher ou d'éloigner un élément de l'utilisateur.

```css
.back {
  transform: translateZ(-100px);
}

.front {
  transform: translateZ(0);
}
```

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/tim-momo/embed/VwoERpa?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/VwoERpa">
  Untitled</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Correction de la profondeur

Dans une animation parallax en CSS, les éléments plus éloignés de l’observateur apparaissent naturellement plus petits. Ce comportement, bien que fidèle à la perspective, peut nuire à l’effet souhaité dans le cadre d’une animation parallax. Pour corriger cette apparence, il est nécessaire d’agrandir ces éléments à l’aide de la fonction `scale()` afin qu’ils retrouvent leur taille d’origine relative à la scène.

Pour déterminer le scale approprié, la formule suivante peut être utilisée :

$$
\text{scale} = \left( \frac{\text{translateZ} \times -1}{\text{perspective}} \right) + 1
$$

Et pour l’exemple donné, l'élément `.back` avec un `translateZ` de -100px:

$$
\text{scale} = \left( \frac{-100 \times -1}{100} \right) + 1 = 2
$$

Donc,

```css
.back {
  transform: translateZ(-100px) scale(2);
}
```

Ainsi l'élément retrouvera sa taille de base.

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Web - Parallax avec perspective" src="https://codepen.io/tim-momo/embed/gOVBymd?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/gOVBymd">
  Web - Parallax avec perspective</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Parallaxe avec ScrollTrigger

Pour créer un effet de parallaxe simple en utilisant ScrollTrigger de GSAP, vous pouvez ajuster la position de l’image d’arrière-plan (`background-image`) lors du défilement.

Cela donne l’illusion de profondeur en faisant bouger l’image plus lentement ou plus rapidement que le contenu au premier plan.

### Mouvement vertical

Supposons avoir la structure HTML suivante :

```html
<section class="section"></section>
<section class="section" id="section-parallax"></section>
<section class="section"></section>
```

Préparons d'abord le CSS !

Pour positionner l’image verticalement, commencez par définir sa position verticale à `0%` ou `0px`.

Si vous souhaitez la centrer horizontalement, définissez la position horizontale à `50%`. Voici un exemple de configuration CSS :

```css
#section-parallax {
    background-image: url("chemin/de/votre/image.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: 50% 0%;
}
```

!!! note "background-attachment"

    La propriété [background-attachment](https://developer.mozilla.org/fr/docs/Web/CSS/background-attachment) est réglée sur scroll pour animer l’arrière-plan lors du défilement.

Le code JavaScript suivant utilise GSAP pour animer la position de l’arrière-plan de l’élément `#section-parallax` :

```js
gsap.to("#section-parallax", {
    backgroundPosition: "50% 100%",
    ease: "none",
    scrollTrigger: {
        trigger: "#section-parallax",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true
    }
});
```

<iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="GSAP -  parallax" src="https://codepen.io/tim-momo/embed/poMxBaJ?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/poMxBaJ">
  GSAP -  parallax</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Petite variante : Vous pouvez inverser l’animation en définissant initialement la position verticale à 100% en CSS et en la ramenant à 0% avec GSAP, pour inverser le mouvement de l’image.

!!! question "Quel ratio d’image utiliser ?"

    Pour une section de site en mode paysage (plus large que haute), il est préférable d’utiliser une image en mode portrait (plus haute que large) pour maximiser l’impact visuel.

### Mouvement horizontal

Pour un mouvement horizontal, définissez la position horizontale à `0%` en CSS et utilisez GSAP pour la ramener à `100%`.

```scss
#section-parallax {
    background-image: url("chemin/de/votre/image.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: 0% 50%; // 👈
}
```

Puis en GSAP :

```js
gsap.to("#section-parallax", {
      backgroundPosition: "100% 50%", // 👈
    ease: "none",
    scrollTrigger: {
        trigger: "#section-parallax",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true
    }
});
```

<iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="GSAP -  Parallax horizontal" src="https://codepen.io/tim-momo/embed/XWvxwaE?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/XWvxwaE">
  GSAP -  Parallax horizontal</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Animation diverses

Comme dans l'exemple du MultiPlane de Disney, il est tout à fait possible d'utiliser la profondeur pour donner un effet parallax.

Pour simuler un zoom, nous n'avons qu'à changer le `background-size` en fonction de la position du scroll.

<iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="GSAP -  Parallax horizontal" src="https://codepen.io/tim-momo/embed/abeRrQQ?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/abeRrQQ">
  GSAP -  Parallax horizontal</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Exercices

<div class="grid grid-1-2" markdown>
  ![](./assets/images/undeuxtrois.png)

  <small>Exercice - GSAP</small><br>
  **[Un, deux et trois](./exercices/gsap-123.md){.stretched-link}**
</div>

<div class="grid grid-1-2" markdown>
  ![](./assets/images/puss.jpg)

  <small>Exercice - GSAP</small><br>
  **[Le chat potté 2](./exercices/gsap-puss.md){.stretched-link}**
</div>

[STOP]

https://tim-montmorency.com/timdoc/582-424MO/gsap/parallaxe-intermediaire/