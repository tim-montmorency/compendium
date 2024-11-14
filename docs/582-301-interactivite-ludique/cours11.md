---
tags:
  - Cours 11
  - Jeudi 14 novembre
---

# Effets spéciaux

## Flash

```js
// this.cameras.main.flash(duree, rouge, vert, bleu, force, callback);
this.cameras.main.flash(250);
```

* **Durée** : La durée de l’effet en millisecondes. Par défaut `250`.
* **Rouge** : La valeur vers laquelle faire disparaître le canal rouge. Une valeur comprise entre `0` et `255`. Par défaut `255`.
* **Vert** : La valeur vers laquelle faire disparaître le canal vert. Une valeur comprise entre `0` et `255`. Par défaut `255`.
* **Bleu** : La valeur vers laquelle faire disparaître le canal bleu. Une valeur comprise entre `0` et `255`. Par défaut `255`.
* **Force** : Force le démarrage immédiat de l’effet, même s’il est déjà en cours. Par défaut à `false`.
* **Callback** : Fonction appelée pendant l'effet.

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Phaser - Fx - Flash" src="https://codepen.io/tim-momo/embed/WNVYjmp?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/WNVYjmp">
  Phaser - Fx - Flash</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Shake

```js
// this.cameras.main.shake(duree, intensite, force, callback);
this.cameras.main.shake(100);
```

* **Durée** : La durée de l’effet en millisecondes. Par défaut `100`.
* **Intensité** : L’intensité du tremblement. Par défaut `0.05`.
* **Force** : Force le démarrage immédiat de l’effet, même s’il est déjà en cours. Par défaut à `false`.
* **Callback** : Fonction appelée pendant l'effet.

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Phaser - Fx - Shake" src="https://codepen.io/tim-momo/embed/GRVPBQZ?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/GRVPBQZ">
  Phaser - Fx - Shake</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Fade

```js
// this.cameras.main.fade(duree, rouge, vert, bleu, force, callback);
// this.cameras.main.fadeIn(duree, rouge, vert, bleu, force, callback);
this.cameras.main.fade(500);
this.cameras.main.fadeIn(0);
```

* **Durée** : La durée de l’effet de fondu en millisecondes. Par défaut `500`.
* **Rouge** : La valeur du canal rouge pour le fondu. Une valeur comprise entre `0` et `255`. Par défaut `0`.
* **Vert** : La valeur du canal vert pour le fondu. Une valeur comprise entre `0` et `255`. Par défaut `0`.
* **Bleu** : La valeur du canal bleu pour le fondu. Une valeur comprise entre `0` et `255`. Par défaut `0`.
* **Force** : Force le démarrage immédiat de l’effet, même s’il est déjà en cours. Par défaut à false.
* **Callback** : Fonction appelée pendant l'effet.

!!! info "Valeur du fade"

    Il est également possible de connaître la valeur du fade appliqué à la caméra avec la ligne suivante : `this.cameras.main.fadeEffect.progress`.

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Phaser - Fx - Shake" src="https://codepen.io/tim-momo/embed/PoMXdya?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/PoMXdya">
  Phaser - Fx - Shake</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Pan

```js
// this.cameras.main.pan(x, y, duree, easing, force, callback);
this.cameras.main.pan(400, 300, 1000);
```

* **X** : La coordonnée X vers laquelle la caméra se déplacera.
* **Y** : La coordonnée Y vers laquelle la caméra se déplacera.
* **Durée** : La durée du déplacement en millisecondes. Par défaut `1000`.
* **Easing** : La fonction d’interpolation à utiliser pour le mouvement. Par défaut `linear`.
* **Force** : Force le démarrage immédiat de l’effet, même s’il est déjà en cours. Par défaut à `false`.
* **Callback** : Fonction appelée pendant l'effet.

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Phaser - Fx 2" src="https://codepen.io/tim-momo/embed/KKOrXem?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/KKOrXem">
  Phaser - Fx 2</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

!!! info "camerapancomplete"

    Pour savoir quand une animation de pan est terminée, vous pouvez utiliser l'eventListener suivant :

    ```js
    this.cameras.main.once("camerapancomplete", () => {
      // Ce code s'exécute lorsque l'effet de pan est terminé
    });
    ```

## Shaders (postFX)

Ref : <https://docs.phaser.io/api-documentation/class/gameobjects-components-fx>

### Barrel

Le _Barrel Effect_ (effet de barillet) dans Phaser.js permet d’appliquer une distorsion de type «pincement» ou «expansion» à un objet de jeu (image, caméra, etc.).

```js
// element.postFX.addBarrel(distorsion);
this.cameras.main.postFX.addBarrel(0.5);
```

Le paramètre amount contrôle l’intensité de cette distorsion :

* Valeur de 1 : aucune distorsion.
* Valeurs supérieures à 1 : effet d’expansion.
* Valeurs inférieures à 1 : effet de pincement.

Il est recommandé de maintenir ce paramètre entre -1 et 1 pour des résultats optimaux. La valeur par défaut est 1.

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Phaser - Fx - Pan" src="https://codepen.io/tim-momo/embed/RwXEexE?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/RwXEexE">
  Phaser - Fx - Pan</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Bloom

L’effet Bloom dans Phaser.js ajoute une lueur autour des objets lumineux, simulant un halo lumineux.

```js
// element.postFX.addBloom(intensity, offsetX, offsetY, blurStrength, strength, steps);
this.cameras.main.postFX.addBloom(1.5, 1.0, 1.0, 1.0, 1.0, 4);
```

* **intensity** : Contrôle l’intensité de la lueur. Valeur par défaut : 1.0.
* **offsetX** et **offsetY** : Définissent le décalage horizontal et vertical de la lueur. Valeurs par défaut : 1.0.
* **blurStrength** : Détermine la force du flou appliqué à la lueur. Valeur par défaut : 1.0.
* **strength** : Contrôle la force globale de l’effet de lueur. Valeur par défaut : 1.0.
* **steps** : Nombre d’étapes pour le rendu de la lueur. Valeur par défaut : 4.

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Phaser - Fx - Barrel" src="https://codepen.io/tim-momo/embed/vYovVMM?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/vYovVMM">
  Phaser - Fx - Barrel</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Blur

L’effet Blur applique un flou gaussien à l’objet ou à la caméra, adoucissant les détails visuels.

```js
// element.postFX.addBlur(quality, x, y, strength, color, steps);
this.cameras.main.postFX.addBlur(0, 2, 2, 1, 0xffffff, 4);
```

* **quality** : Niveau de qualité du flou (0 : faible, 1 : moyen, 2 : élevé). Valeur par défaut : 0.
* **x** et **y** : Offsets horizontaux et verticaux du flou. Valeurs par défaut : 2.
* **strength** : Intensité du flou. Valeur par défaut : 1.
* **color** : Couleur du flou, en valeur hexadécimale. Valeur par défaut : 0xffffff.
* **steps** : Nombre d’étapes pour le rendu du flou. Valeur par défaut : 4.

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Phaser - Fx - Blur" src="https://codepen.io/tim-momo/embed/VwoqEJR?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/VwoqEJR">
  Phaser - Fx - Blur</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Circle

L’effet Circle dessine un contour circulaire autour de l’objet, utile pour des effets de sélection ou de mise en évidence.

```js
// element.postFX.addCircle(thickness, color, backgroundColor, scale, feather);
this.cameras.main.postFX.addCircle(8, 0xfeedb6, 0xff0000, 1, 0.005);
```

* **thickness** : Épaisseur du cercle en pixels. Valeur par défaut : 8.
* **color** : Couleur du cercle, en valeur hexadécimale. Valeur par défaut : 0xfeedb6.
* **backgroundColor** : Couleur de l’arrière-plan derrière la texture, en valeur hexadécimale. Valeur par défaut : 0xff0000.
* **scale** : Échelle du cercle. Valeur par défaut : 1.
* **feather** : Quantité de flou appliqué au bord du cercle. Valeur par défaut : 0.005.

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Phaser - Fx - Bokeh" src="https://codepen.io/tim-momo/embed/NWQeOQr?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/NWQeOQr">
  Phaser - Fx - Bokeh</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### ColorMatrix

L’effet [ColorMatrix](https://docs.phaser.io/api-documentation/class/fx-colormatrix) permet des transformations avancées des couleurs, telles que la saturation, la teinte ou la luminosité.

```js
// element.postFX.addColorMatrix();
this.cameras.main.postFX.addColorMatrix();
```

Une fois appliqué, vous pouvez utiliser des méthodes supplémentaires pour ajuster les couleurs, comme setSaturation, setHue, etc.

```js
this.colorMatrixEffect = this.camera.main.postFX.addColorMatrix();
this.colorMatrixEffect
    .blackWhite()          // Convertit l'image en noir et blanc
    .brightness(1.2)       // Augmente la luminosité de 20%
    .brown()               // Applique une teinte brune
    .contrast(1.5)         // Augmente le contraste de 50%
    .desaturateLuminance() // Désature en fonction de la luminance
    .grayscale(1)          // Convertit l'image en niveaux de gris
    .hue(45)               // Effectue une rotation des teintes de 45 degrés
    .kodachrome()          // Applique un effet de type Kodachrome
    .lsd()                 // Applique un effet de type LSD
    .negative()            // Inverse les couleurs pour un effet négatif
    .night(0.1)            // Applique un effet de vision nocturne avec une intensité de 0.1
    .polaroid()            // Applique un effet de type Polaroid
    .saturate(1.3)         // Augmente la saturation de 30%
    .saturation()          // Désature l'image
    .sepia()               // Applique une teinte sépia
    .shiftToBGR()          // Change l'ordre des canaux de couleur en BGR
    .technicolor()         // Applique un effet de type Technicolor
    .vintagePinhole();     // Applique un effet de type vintage pinhole
```

### Displacement

L’effet Displacement utilise une texture de déplacement pour déformer l’apparence de l’objet, créant des effets ondulés ou de distorsion.

```js
// element.postFX.addDisplacement(texture, x, y);
this.cameras.main.postFX.addDisplacement('textureKey', 0.005, 0.005);
```

* **texture** : Clé de la texture de déplacement chargée dans le gestionnaire de textures.
* **x** et **y** : Quantité de déplacement horizontal et vertical. Valeurs par défaut : 0.005.

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Phaser - Fx - Circle" src="https://codepen.io/tim-momo/embed/yLmZVQa?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/yLmZVQa">
  Phaser - Fx - Circle</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Glow

L’effet Glow ajoute une lueur interne ou externe à l’objet, accentuant sa présence visuelle.

```js
// element.postFX.addGlow(color, outerStrength, innerStrength, knockout, quality, distance);
this.cameras.main.postFX.addGlow(0xffffff, 4, 0, false, 0.1, 10);
```

* **color** : Couleur de la lueur, en valeur hexadécimale. Valeur par défaut : 0xffffff.
* **outerStrength** : Intensité de la lueur vers l’extérieur. Valeur par défaut : 4.
* **innerStrength** : Intensité de la lueur vers l’intérieur. Valeur par défaut : 0.
* **knockout** : Si true, seule la lueur est dessinée, pas la texture elle-même. Valeur par défaut : false.
* **quality** : Qualité de l’effet de lueur. Valeur par défaut : 0.1.
* **distance** : Distance de la lueur. Valeur par défaut : 10.

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Phaser - Fx - Flash" src="https://codepen.io/tim-momo/embed/RwXvKbO?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/RwXvKbO">
  Phaser - Fx - Glow</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Gradient

L’effet Gradient applique un dégradé de couleur sur l’objet, permettant des transitions douces entre les couleurs.

```js
// element.postFX.addGradient(color1, color2, alpha, fromX, fromY, toX, toY, size);
this.cameras.main.postFX.addGradient(0xff0000, 0x0000ff, 0.5, 0, 0, 1, 1, 0);
```

* **color1** : Première couleur du dégradé, en valeur hexadécimale.
* **color2** : Deuxième couleur du dégradé, en valeur hexadécimale.
* **alpha** : Opacité du dégradé (0 à 1).
* **fromX** et **fromY** : Position de départ du dégradé (valeurs normalisées entre 0 et 1).
* **toX** et **toY** : Position de fin du dégradé (valeurs normalisées entre 0 et 1).
* **size** : Nombre de segments dans le dégradé (0 pour un dégradé lisse).

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Phaser - Fx - Gradient" src="https://codepen.io/tim-momo/embed/mdNvWmm?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/mdNvWmm">
  Phaser - Fx - Gradient</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Pixelate

L’effet Pixelate rend l’objet ou la caméra pixelisé, simulant un effet rétro ou basse résolution.

```js
// element.postFX.addPixelate(amount);
this.cameras.main.postFX.addPixelate(10);
```

* **amount** : Taille des pixels appliqués.

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Phaser - Fx - Gradient" src="https://codepen.io/tim-momo/embed/dyxaZdB?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/dyxaZdB">
  Phaser - Fx - Gradient</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Shine

L’effet Shine ajoute une brillance animée sur l’objet ou la caméra, donnant l’impression d’un reflet lumineux.

```js
// element.postFX.addShine(speed, lineWidth, gradient, reveal);
this.cameras.main.postFX.addShine(0.5, 0.5, 3, false);
```

* **speed** : Vitesse de déplacement de la brillance.
* **lineWidth** : Largeur de la ligne de brillance.
* **gradient** : Intensité du dégradé de la brillance.
* **reveal** : Si true, la brillance révèle l’objet ; sinon, elle s’ajoute à l’objet.

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Phaser - Fx - Pixelate" src="https://codepen.io/tim-momo/embed/JjgxOBz?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/JjgxOBz">
  Phaser - Fx - Pixelate</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Shadow

L’effet Shadow ajoute une ombre portée derrière l’objet ou la caméra, ajoutant de la profondeur et du réalisme.

```js
// element.preFX.addShadow(x, y, decay, power, color, samples, intensity);
this.player.main.postFX.addShadow(10, 10, 0.1, 1, 0x000000, 6, 1);
```

* **x** : Décalage horizontal de l’ombre. Par défaut : 0
* **y** : Décalage vertical de l’ombre. Par défaut : 0
* **decay** : Quantité de dégradation de l’ombre. Par défaut : 0.1
* **power** : Puissance de l’ombre. Par défaut : 1
* **color** : Couleur de l’ombre, en valeur hexadécimale. Par défaut : 0x000000 (noir)
* **samples** : Nombre d’échantillons pour l’effet d’ombre (entier entre 1 et 12). Par défaut: 6
* **intensity** : Intensité de l’ombre. Par défaut : 1

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Phaser - Fx - Circle" src="https://codepen.io/tim-momo/embed/QWeYOZM?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/QWeYOZM">
  Phaser - Fx - Circle</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Vignette

L’effet Vignette assombrit les bords de l’écran, dirigeant l’attention vers le centre de l’image.

```js
// element.postFX.addVignette(x, y, radius, strength);
this.cameras.main.postFX.addVignette(0.5, 0.5, 0.5, 0.5);
```

* **x** : Position horizontale du centre de l’effet de vignette, exprimée en valeur normalisée (de 0 à 1), où 0 représente le bord gauche de l’écran et 1 le bord droit. Une valeur de 0.5 place le centre horizontalement au milieu de l’écran.
* **y** : Position verticale du centre de l’effet de vignette, exprimée également en valeur normalisée (de 0 à 1), où 0 représente le bord supérieur et 1 le bord inférieur. Une valeur de 0.5 place le centre verticalement au milieu de l’écran.
* **radius** : Rayon de l’effet de vignette, exprimé en valeur relative, qui détermine à quelle distance du centre l’assombrissement commence. Une valeur de 0.5 signifie que l’assombrissement commence à mi-distance entre le centre et le bord de l’écran.
* **strength** : Intensité de l’assombrissement appliqué par l’effet de vignette. Une valeur comprise entre 0 et 1, où 0 signifie aucun assombrissement et 1 représente l’assombrissement maximal.

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Phaser - Fx - Vignette" src="https://codepen.io/tim-momo/embed/yLmZpyq?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/yLmZpyq">
  Phaser - Fx - Vignette</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Wipe

L’effet Wipe crée une transition de type essuyage, révélant ou masquant progressivement l’objet ou la caméra.

```js
// element.postFX.addWipe(wipeWidth, direction, axis);
this.cameras.main.postFX.addWipe(0.1, 0, 0);
```

* **wipeWidth** : Largeur de l’effet d’essuyage, normalisée entre 0 et 1. Une valeur de 0.1 signifie que l’effet couvre 10 % de la dimension correspondante.
* **direction** : Direction de l’effet d’essuyage. Les valeurs possibles sont :
  * **0** : Sens normal (par exemple, de gauche à droite ou de haut en bas).
  * **1** : Sens inverse (par exemple, de droite à gauche ou de bas en haut).
* **axis** : Axe de l’effet d’essuyage. Les valeurs possibles sont :
  * **0** : Axe horizontal.
  * **1** : Axe vertical.

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Phaser - Fx - Vignette" src="https://codepen.io/tim-momo/embed/rNXPpdX?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/rNXPpdX">
  Phaser - Fx - Vignette</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Exercice de co-évaluation

![](./assets/images/letsplay.webp){ .w-100 }

L’objectif de cet exercice est de recueillir un nombre significatif de commentaires constructifs pour votre jeu.

Par ailleurs, vous aurez l’occasion de découvrir les réalisations des autres, ce qui pourrait vous inspirer pour la suite.

### Règlements

Pour que l’activité de co-évaluation se maintienne dans un climat de respect et d'apprentissage, veuillez respecter les 3 règles suivantes :

1. Commencez systématiquement par au moins un point **positif**. Vous n'en avez pas? Trouvez-en un!
2. Formulez votre critique. Attention! Si vous souvelez une faiblesse dans le jeu, accompagnez la d'une **piste de solution** ou d'idées pour améliorer la situation. «C'est plate» ou «C'est trop dur» ne sont pas des commentaires constructifs, ni une critique d'ailleur. Expliquez précisément à quel instant, ou par quelle mécanique, la faiblesse se fait ressentir.
3. Chaque commentaire doit être respectuex et **bienveillant** : Il est important de traiter chaque projet comme une opportunité de croissance pour le créateur.

### Consignes

- [ ] Créer un formulaire Google et changez le titre pour le titre de votre jeu.
- [ ] Dans le formulaire, ajouter un champ obligatoire de type Paragraph nommé «Positif».
- [ ] Dans le formulaire, ajouter un champ obligatoire de type Paragraph nommé «Critique».
- [ ] Récupérer le lien du formulaire par le bouton Envoyer et utilisez le sur un autre onglet.
- [ ] Laissez le formulaire allumé pour que chaque joueurs puissent l'utiliser.
