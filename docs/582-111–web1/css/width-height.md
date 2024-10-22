# Width & Height

## width & height

Les propriétés `width` et `height` permettent de définir respectivement la largeur et la hauteur d'un élément. Par défaut leur valeur est à `auto`.


## min-width & min-height

Les propriétés `min-width` et `min-height` permettent de définir une largeur et une hauteur minimum à un élément.

Par exemple, pour s'assurer qu'un élément ne soit jamais plus petit que 400px, il est possible d'utiliser:

`.element {
  width: 50%;
  min-width: 400px;
}`

Puisque `min-width` a préséance sur `width`, l'élément adoptera alors sa largeur.

Si l'élément est dans un parent ayant un width de:

`1000px: 400px < 500px **(50%)** ➡️ 500px
500px: 400px > 250px **(50%)** ➡️ 400px`

## max-width & max-height

Les propriétés `max-width` et `max-height` permettent de définir une largeur et une hauteur maximale à un élément.

Par exemple, pour s'assurer qu'un élément ne soit jamais plus grand que 400px, il est possible d'utiliser:

`.element {
  width: 50%;
  max-width: 400px;
}`

Puisque `max-width` a préséance sur `width`, l'élément adoptera alors sa largeur.

Si l'élément est dans un parent ayant un `width` de:

`1000px: 400px < 500px **(50%)** ➡️ 400px
500px: 400px > 250px **(50%)** ➡️ 250px`

!!!note

    `max-width:` 100% est régulièrement appliqué aux images. Ainsi, les images prennent leur largeur normale, mais ne dépassent jamais de l’écran.
