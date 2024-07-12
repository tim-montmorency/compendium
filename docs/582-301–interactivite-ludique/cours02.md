---
tags:
  - Cours 2
  - Mardi 2 septembre
---

# Phaser

[Phaser.js](https://phaser.io/)
![phaser](https://github.com/jfcmontmorency/jfcmontmorency.github.io/assets/142059735/7890bb14-8d94-44a1-a6f7-8c519adf4d28)

npm install

Vscode
  live server
Intellisense

Scene + switch scene

## Maths

<iframe class="aspect-4-1" height="300" style="width: 100%;" scrolling="no" title="Modulo" src="https://codepen.io/tim-momo/embed/ExzBmYx?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/ExzBmYx">
  Modulo</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<iframe class="aspect-4-1" height="300" style="width: 100%;" scrolling="no" title="Sin Cos" src="https://codepen.io/tim-momo/embed/gOJNgNp?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/gOJNgNp">
  Sin Cos</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Sin Cos Cercle" src="https://codepen.io/tim-momo/embed/bGyPqBW?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/bGyPqBW">
  Sin Cos Cercle</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Game objets

https://labs.phaser.io/index.html?dir=geom/&q=

Ligne
Curve path

Graphics
const graphics = this.add.graphics();
https://labs.phaser.io/index.html?dir=game%20objects/graphics/&q=
https://labs.phaser.io/index.html?dir=game%20objects/shapes/&q=

Image
this.load.image('eye', 'https://labs.phaser.io/assets/pics/lance-overdose-loader-eye.png');
this.image1 = this.add.image(500, 200, 'eye');
https://labs.phaser.io/index.html?dir=game%20objects/images/&q=
Pixelart=true

Texte
this.add.text(100, 100, 'Phaser');
https://labs.phaser.io/index.html?dir=game%20objects/text/&q=
https://labs.phaser.io/index.html?dir=game%20objects/bitmaptext/static/&q=

z-index : https://phaser.io/sandbox/?src=src\depth%20sorting\z%20index.js


Setters

### set angle
const frame = this.add.image(40 + a * 2, 300, 'arrow').setAngle(a);
https://phaser.io/sandbox/?src=src\transform\angle.js

### flip
this.add.image(250, 464, 'pic').setFlipX(true);
this.add.image(250, 464, 'pic').setFlipY(true);
https://phaser.io/sandbox/?src=src\transform\flip%20x.js

### origin
this.add.image(200, 400, 'card').setOrigin(1, 0.5);
https://labs.phaser.io/view.html?src=src\transform\originX.js
https://phaser.io/sandbox/?src=src\transform\originXY.js
https://labs.phaser.io/index.html?dir=transform/&q=

### position 
image2.x = 640;
image2.y = 200;
ou .setPosition(320, 320);
https://phaser.io/sandbox/?src=src\transform\position.js

### rotation
this.image1.rotation += 0.01;
https://phaser.io/sandbox/?src=src\transform\rotation%20and%20origin.js

### échelle
.setScale(2);
https://phaser.io/sandbox/?src=src\transform\scaleXY.js

### alpha
https://phaser.io/sandbox/?src=src\display\alpha\bottom%20alpha.js


Aléatoire
https://phaser.io/sandbox/?src=src\game%20config\game%20rng.js
Phaser.Math.Between(7, 666);
à la place de 
Math.floor(Math.random() * (666 - 7 + 1) ) + 7;




Data : 

this.data.set('lives', 3);
https://phaser.io/sandbox/?src=src\components\data\store%20scene%20data.js