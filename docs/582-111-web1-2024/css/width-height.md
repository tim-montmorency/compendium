# Width & Height

## width & height

Les propriétés `width` et `height` permettent de définir respectivement la largeur et la hauteur d'un élément. Par défaut leur valeur est à `auto`.


## min-width & min-height

Les propriétés `min-width` et `min-height` permettent de définir une largeur et une hauteur minimum à un élément.

Par exemple, pour s'assurer qu'un élément ne soit jamais plus petit que 400px, il est possible d'utiliser:

```
.element {
  width: 50%;
  min-width: 400px;
}
```

Puisque `min-width` a préséance sur `width`, l'élément adoptera alors sa largeur.

Si l'élément est dans un parent ayant un width de:


- `1000px:` 400px < 500px <b>(50%)</b> ➡️ 500px
- `500px:` 400px > 250px <b>(50%)</b> ➡️ 400px


## max-width & max-height

Les propriétés `max-width` et `max-height` permettent de définir une largeur et une hauteur maximale à un élément.

Par exemple, pour s'assurer qu'un élément ne soit jamais plus grand que 400px, il est possible d'utiliser:

```
.element {
  width: 50%;
  max-width: 400px;
}
```

Puisque `max-width` a préséance sur `width`, l'élément adoptera alors sa largeur.

Si l'élément est dans un parent ayant un `width` de:

- `1000px:` 400px < 500px <b>(50%)</b> ➡️ 400px
- `500px:` 400px > 250px <b>(50%)</b> ➡️ 250px

!!!note

    `max-width:` 100% est régulièrement appliqué aux images. Ainsi, les images prennent leur largeur normale, mais ne dépassent jamais de l’écran.


## Exercices

<div class="grid grid-auto" markdown>

<img width="183" alt="Capture d’écran, le 2024-10-22 à 20 47 43" src="https://github.com/user-attachments/assets/278ce129-7bec-424b-8424-9457b6b89c67">


  **Width/Height - System32**<br>
  _Pour cet exercice, vous devez créer en HTML et CSS une page présentant une bande dessinée d’Andrew AKA system32comics._<br>
  [Width/Height - System32](../exercices/system-32.md)
</div>

<div class="grid grid-auto" markdown>
<img width="183" alt="Capture d’écran, le 2024-10-22 à 21 08 11" src="https://github.com/user-attachments/assets/e70938d2-739c-4023-b776-5fa01195ebb7">
  
  **Width/Height - Prévert**<br>
  _Pour cet exercice vous devrez en CSS compléter l’affichage du célèbre poème: Le cancre, du français Jacques Prévert._<br>
  [Width/Height - Prévert](../exercices/prevert.md)</div>

