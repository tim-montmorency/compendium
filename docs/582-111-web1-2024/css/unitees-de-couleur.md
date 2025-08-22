# Unités de couleur

L'un des éléments de base d'une mise en page CSS réussie est la sélection de couleurs. Pour notre convenance, le langage CSS met à notre disposition plusieurs façons d'exprimer les couleurs désirées.

En voici quelques unes.

## Mot-clé

Il est possible de spécifier certaines couleurs en CSS en utilisant leur nom <b>(en anglais)</b> directement.

Par exemple, `yellow` pour du jaune 🟨, `orange` pour du orange 🟧 et ainsi de suite. Malheureusement, il est difficile de retenir la majorité de ces noms et de se limiter à 147 couleurs. L'usage des mots-clés est donc peu fréquent à l'exception de classiques tels que: `black`, `white`, etc.

OUTIL
147 colors
Pour visualiser les 147 noms de couleurs disponibles.


## OUTIL

<div class="grid grid-auto" markdown>

<img width="183" alt="Capture d’écran, le 2024-10-22 à 21 03 26" src="https://github.com/user-attachments/assets/eb8cc32d-7be9-4d83-bfd7-4e94e3af5e56">



  **147 colors**<br>
  _Pour visualiser les 147 noms de couleurs disponibles._<br>
  [147 colors](https://147colors.com/)
</div>


!!!note

    En 2014, une 148e couleur CSS fut été ajoutée afin de rendre un hommage à Eric Meyer.
    Il est surtout connu pour son travail de plaidoyer en faveur des normes Web, notamment les feuilles de style en cascade (CSS).


## Hexadécimal

Un code hexadécimal est constitué d'un dièse `#` suivi de 6 caractères compris entre 0 et F. Les chiffres couvrent les valeurs de 0 à 9 et les lettres de 10 à 15 <b>(a=10, b=11 … f=15)</b>.

- Les 2 premiers caractères représentent le rouge
- Les 2 du milieu le vert
- Les 2 derniers le bleu


Plus une valeur est élevée, plus la couleur est présente. À l'opposée, plus une valeur est basse, plus la couleur est absente.

Par exemple, le code suivant `#ff0000` indique un maximum de rouge 💯🟥 et une absence totale de vert 🚫🟩 et de bleu 🚫🟦, donnant ainsi un rouge pur.


### Hex 3 caractères
Lorsque chaque couleur d'un code hexadécimal est constituée de deux caractères identiques, il est possible d'inscrire chaque caractère de façon unique.

Dans l'exemple précédent `#ff0000` se déconstruit ainsi:

Rouge = `ff`
Vert = `00`
Bleu = `00`

Puisque chaque valeur est un doublé, il est possible d'abréger le code `#f00`.

### Hex 8 caractères
Il est possible d'ajouter deux caractères supplémentaires à la fin d'un code hexadécimal régulier afin de spécifier son alpha.

`00` = complètement transparent.
`ff` = complètement opaque.

Toute valeur comprise entre ces deux extrêmes représente un niveau d'alpha allant de faible à fort.

!!!warning

    Puisque calculer une valeur d’alpha avec une unité constituée de chiffres et de lettres n’est pas évident, cette approche n’est pas particulièrement répandue.


## rgb et rgba

RGB est l'acronyme des couleurs red, green et blue. Pour définir une couleur `rgb()` il suffit de spécifier ces 3 couleurs avec une valeur comprise entre 0 et 255. Plus la valeur est élevée plus la couleur est présente.

Par exemple, le rouge pur de l'exemple précédent s'écrirait ainsi `rgb(255, 0, 0)` dans ce format.

Les couleurs `rgba()` fonctionnent sur le même principe, mais une 4e valeur comprise entre 0 et 1 permet de spécifier l'alpha de la couleur.

Par exemple, pour obtenir un rouge pur semi-transparent, il est possible d'écrire `rgba(255, 0, 0, 0.5)`.

## hsl et hsla

HSL est l'acronyme de `hue`, `saturation` et `lightness` <b>(teinte, saturation et luminosité)</b>. Pour définir une couleur `hsl()` il faut spécifier:

* Une teinte entre 0 et 360
  * 0 = Rouge
  * 360 = Rouge
* Une saturation entre 0% et 100%
  * 0% = La couleur est désaturée comme sur une photo noir et blanc.
  * 100% = Couleur pure
* Une luminosité entre 0 et 100%
  * 0% = Absence de lumière, tout est noir.
  * 50% = Lumière normale.
  * 100% = Lumière au maximum, tout est blanc.

Par exemple, le rouge pur de l'exemple précédent s'écrirait ainsi `hsl(0, 100%, 50%)` dans ce format.

Les couleurs `hsla()` fonctionnent sur le même principe, mais une 4e valeur comprise entre 0 et 1 permet de spécifier l'alpha de la couleur.

Par exemple, pour obtenir un rouge pur semi-transparent, il est possible d'écrire `hsla(0, 100%, 50%, 0.5)`.

## OUTIL

<div class="grid grid-auto" markdown>

<img width="183" alt="Capture d’écran, le 2024-10-22 à 21 03 26" src="https://github.com/user-attachments/assets/eb8cc32d-7be9-4d83-bfd7-4e94e3af5e56">



  **Convert A Color**<br>
  _Outil permettant de convertir un format de couleurs vers un autre._<br>
  [Convert A Color](https://convertacolor.com/)
</div>
