# Cours 2 - 2 septembre Introduction à Phaser


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


## La base

Ligne
Curve path
Graphics
Cercle
Carré
Image
Texte

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