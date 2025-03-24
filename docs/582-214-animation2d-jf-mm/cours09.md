# Cours 9 | Expressions

[STOP]

<!-- Retour sur les 12 principes de l’animation
Courbes temporelles et spatiales
• Introduction au Graph Editor
Dynamique des mouvements
• Concepts de vitesse et d'accélération (ease-in-out)
Expressions et automatisation
• Notions de wiggle, loop et time.
Présentation du Kino -->

> * Avoir les mains pleines de pouces
> * Avoir l’air d’la chienne à Jacques
> * Avoir de l’eau dans la cave
> * Se tirer une bûche
> * Attacher sa tuque

Blague à part, en After Effetcs une expression est un petit code basé sur le langage JavaScript qu’on peut appliquer à une propriété d’un calque pour qu’elle soit calculée automatiquement au lieu d’utiliser uniquement des images clés.

## Ajouter une expression

Sélectionner la propriété à animer (ex : Position, Opacité).

Maintenir enfoncée la touche Alt (Windows) (ou Option (Mac)) et cliquer sur le chronomètre ⏱️.

Entrer ou coller l'expression dans le champ apparu sous la propriété.

[:material-play-circle: Introduction aux expressions](https://cmontmorency365.sharepoint.com/:v:/s/TIM-582214-Animation2d77/ERfo6EK5c0FHhW9JricGkIQBFeFnX6_-npLcTO8uqqJ4_w?e=eVerR2)

## Boucles

La fonction `loopOut()` permet d'effectuer une boucle sans avoir à l'animer à répétition.

[:material-play-circle: LoopOut](https://cmontmorency365.sharepoint.com/:v:/s/TIM-582214-Animation2d77/Efe2JQiXykRNmmTNkxiPZ-4BAlDB7F7THCPlvwNaTKAqow?e=wLXP8A)

### Cycle

Elle peut recevoir une chaine de caractère en argument. Par défaut, "cycle" est appliqué si aucun paramètre n’est fourni.

### Pingpong

On peut aussi appliquer l'argument pingpong pour créer un effet d'aller-retour.

```js
loopOut('pingpong')
```

Toutefois, cette méthode n'est pas absolument nécessaire. On peut en effet simplement ajouter un keyframe pour simumer la même chose.

Utiliser la même expression sans paramètre peut réduire la complexité des animations contrôlées par expression. KISS 👄

### Autres

`continue` continue l'animation et `offset` répete l'animation à la fin en gardant la position de la fin.

## Tremblement

La fonction `wiggle()` permet d'ajouter un effet de tremblement.

Elle recoit 2 paramètres:

* La **frequence** du tremblement par seconde (ex: 4)
* L'**amplitude** du tremblement ou l'intensité (ex: 40)

[:material-play-circle: "Wiggle"](https://cmontmorency365.sharepoint.com/:v:/s/TIM-582214-Animation2d77/EXPup2WiGjlNqT7tguOtZwsBMcTmzJwpHC-sFfDGUw2dcg?e=RD7Zs5)

## Temps

La variable `time` est utilisée dans les expressions pour représenter le temps actuel de la composition en secondes.

Par exemple, à 0.5 secondes, `time` vaut 0.5

Appliqué sur la rotation, ce script permet de modifier la rotation de 100 degrés par seconde.

```js
time * 100
```

Si on veut appliquer cette méthode à la position ou l'échelle, il faut soit séparer les 2 dimensions ou insérer les valeurs dans une tableau.

```js
// x et y
[time*100, time*100]
```

### Valeur

On peut aussi utiliser la valeur d'un keyframe pour affecter une expression.

C'est super simple, ça s'écrit simplement avec la variable `value`:

```js
time * 100 - value
```

### Posterize time

Cette fonctionnalité est utilisée pour modifier le framerate sur un calque spécifique.

Elle existe en expression et en effet :

```js
posterizeTime(12); // Pour 12 fps
```

Effet > Temps > Postérisation temporelle

## Condition


## Expression control

Checkbox control
Slider control
etc.

Avec le pickwhip

## Copier-coller les expressions

## Variables

```js
a = 100
```

## Ease

On peux se servir des expressions pour un effet de lissage précis. Par exemple, voici une liste de plusieurs type de lissage :



## Effets

Transform repeater

Play répétition

[:material-play-circle:  Formes concentriques](https://cmontmorency365.sharepoint.com/:v:/s/TIM-582214-Animation2d77/EV2W-V3B9OROsTJHjgB_FioBiV5F4-AHUiAXTKifZwtq5w?e=cZroAV)

l’effet répétition ou encore l’effet de réduction des tracés

## Animation complexe avec le graph editor

https://www.youtube.com/watch?v=HpVtzOtaHlg

## Exercices

[🛠️ Loop Out](exercices_ae/07_loopOut.md)

[🛠️ Expressions](exercices_ae/07_expressions.md)

## Kino

> Faire bien avec rien<br>
> Faire mieux avec peu,<br>
> mais le faire maintenant ![^kino]

[^kino]: <https://fr.wikipedia.org/wiki/Kino_(mouvement)>