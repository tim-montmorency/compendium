# Cours 9
[STOP]

## Notions de scénarisation et préproduction

Avant d'ouvrir After Effects et d'animer, il est idéal de déterminer une démarche entre termes d'intention et de ton, mais aussi en termes de direction artistique et de rythme. En gros, on se pose les questions suivantes : 
- À qui ça s'addresse et quel est l'émotion à faire vivre?
- Quel est le ton (informatif, dramatique, humoristique, poétique…)?
- De quoi ça doit avoir l'air (en termes de formes, couleurs et typo)?
- Quel sera le rythme (rapide, lent), combien de plans et quels seront les mouvements (caméra et éléments)?

Pour répondre à ses questions, il est idéal de noter le tout dans un fichier texte, mais pour le rythme et la direction artistique, deux outils nous serons particulièrement utiles : le moodboard et le storyboard. 

### Moodboard

Le moodboard est un outil qui sert à donner la direction artistique : quel sera le visuel et le *feel* de notre projet. Les éléments importants à mettre dans les moodboard durant **le cadre du cours** sont les suivants : 

- Des images d'inspirations
- Une palette de couleurs
- Des exemples de typo pour les titres et les paragraphes

![](./assets/images/cours09-gc/3061382.webp)
  
### Storyboard

Le storyboard quant à lui est un outil qui sert à donner de indications de rythme, de cadrage et de mouvement (caméra et mise en scène). On peut faire un storyboard en faisant des dessins physiques sur du papier ou avec un logiciel de traitement d'images matriciel/vectoriel. En ce qui nous concerne, je vais vous inviter à utiliser [Storyboarder](https://wonderunit.com/storyboarder/), un logiciel qui permet de lier des dessins sur une ligne du temps avec un générateur de plans et qu'on peut même lier à Photoshop. 

![](./assets/images/cours09-gc/Jeremys_Lie_Storyboard.original.jpg)

### Exercice en devoir

## Courbes temporelles et spatiales (timing)
<!-- https://www.youtube.com/watch?v=HpVtzOtaHlg -->

Nous avons travaillé avec le lissage (soit à l'entrée, à la sortie ou les deux), néanmoins il est possible de personnaliser le lissage avec un outil qu'on appelle, l'éditeur de graphique ou *graph editor*. Cet outil nous permet de régler la courbe d'accélération/ralentissement de notre projet et nous permet d'avoir des effets d'animation particuliers. 

![](./assets/images/cours09-gc/demo-easing.gif)

N.B. il est également possible d'appliquer des effets de lissage sur nos [animations web](https://easings.net/). Petite règle de base en web : il est idéal d'utiliser des accélérations à l'entrée pour des éléments interactifs (comme des boutons) et des ralentissement à l'entrée pour des animations de décorations (fondu, translations, etc.). 

Il est important de se souvenir d'utiliser le graphique de vitesse pour les animations de position et le graphique de valeur pour la rotation, l'échelle et l'opacité. 

[:material-play-circle: Éditeur de graphique (graph editor)](https://cmontmorency365-my.sharepoint.com/:v:/g/personal/mariem_ouellet_cmontmorency_qc_ca/EY0GAEKJYR9DsCPY7jjrF8cB4I1E5fM8Sm_FjQxlRsw9SQ?e=BgYJMZ&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)¸

[:material-play-circle: Éditer les courbes de vitesse](https://cmontmorency365-my.sharepoint.com/:v:/g/personal/mariem_ouellet_cmontmorency_qc_ca/EctinuyOULZBnaicYDWPIZEBsTTw0CuinbDUXpMz3r9_ow?e=6G4P4B&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)

[:material-play-circle: Explode Out et Into the Wall](https://cmontmorency365-my.sharepoint.com/:v:/g/personal/mariem_ouellet_cmontmorency_qc_ca/ESwLmiwfV1NMkiZj-d-TqOoBx2cbg8z3wrO_9QX6s6jqNg?e=HWXYdv&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)


<!--
## Retour sur les 12 principes de l'animation

[Cours 2](./cours02.md)
 -->

## Alignement et distribution

![](./assets/images/repartition.png)

La distribution se trouve dans le panneau "Aligner".

### Exercice : reproduction de l'exemple

## Expressions

Dans le langage courant, une expression est une manière de communiquer alors qu'en mathématique, on parle plutôt d'une combinaison de chiffres, de variables et d'opérations. Dans After Effetcs, une expression est un **bout de code** basé sur le langage **JavaScript** qu’on peut appliquer à une propriété de calque pour l'animer. On peut donc, utiliser du code pour animer plutôt que d'utiliser des *keyframe*. À la grande question pourquoi animer avec du code plutôt que des keyframes? C'est que dans certains cas, il est préférable d'écrire quelques lignes plutôt que passer beaucoup de temps à multiplier, paramétrer ou placer le timing de keyframe. Les utilisations les plus courantes sont : les boucles (loop), les valeurs aléatoires (wiggle) et modifier le framerate d'un calque (posterizeTime). Autrement, on peut automatiser l'animation de tous les paramètres d'un calque.       

### Ajouter une expression

1. Sélectionner la propriété à animer (ex : Position, Opacité).
1. Maintenir enfoncée la touche ++alt++ sur Windows, ou ++option++ sur Mac, puis cliquer sur le chronomètre ⏱️.
1. Entrer ou coller l'expression dans le champ apparu sous la propriété.

[:material-play-circle: Introduction aux expressions](https://cmontmorency365.sharepoint.com/:v:/s/TIM-582214-Animation2d77/ERfo6EK5c0FHhW9JricGkIQBFeFnX6_-npLcTO8uqqJ4_w?e=eVerR2)

### Variables

![](./assets/images/expression-cheatsheet.webp){ data-zoom-image }

#### Time

La variable `time` est utilisée dans les expressions pour représenter le **temps actuel de la composition en secondes**.

> Par exemple, à 0.5 secondes, `time` vaut 0.5

Appliquée sur la rotation, l'expression ci-dessous permet de modifier la rotation de 360 degrés par seconde et ce, sans aucun keyframe !

```js
time * 360
```

Exemple : 

![](./assets/images/expression-time.png){ data-zoom-image }

![type:video](./assets/videos/time.mp4)

Si on veut appliquer cette méthode à la position ou à l’échelle, il faut soit séparer les deux dimensions, soit insérer les valeurs dans un tableau :

```js
// x et y
[time * 100, time * 100]
```

### Fonction loopOut()

![type:video](./assets/videos/loopOut.mp4)

La fonction `loopOut()` permet d'effectuer une boucle automatiquement, sans avoir à copier les images clés à répétition.

[:material-play-circle: LoopOut](https://cmontmorency365.sharepoint.com/:v:/s/TIM-582214-Animation2d77/Efe2JQiXykRNmmTNkxiPZ-4BAlDB7F7THCPlvwNaTKAqow?e=wLXP8A)

#### Cycle

Par défaut, `loopOut()` applique une boucle de type "cycle" si aucun paramètre n’est fourni.

Autrement dit, `loopOut("cycle")` est identique à `loopOut()`.

#### Pingpong

On peut aussi appliquer l'argument "pingpong" pour créer un effet d'aller-retour :

```js
loopOut("pingpong")
```

Cependant, cette méthode n’est pas toujours nécessaire. On peut obtenir un effet similaire avec des images clés bien placées.

Utiliser `loopOut()` sans paramètre permet parfois de réduire la complexité du projet. KISS 👄

#### Autres modes

* "continue" : continue l’animation en extrapolant la vitesse des dernières images clés.
* "offset" : répète l’animation en conservant la position de fin comme point de départ suivant.

Attention avec l'offset. Si la valeur à la fin de son animation est à 0, il s'arrêtera!

### Fonction wiggle()

![type:video](./assets/videos/wiggle.mp4)

La fonction `wiggle()` permet d'ajouter un effet de tremblement.

Elle recoit 2 paramètres:

* La **frequence** du tremblement par seconde (ex: 4)
* L'**amplitude** du tremblement ou l'intensité (ex: 40)

La fonction `wiggle()` permet d’ajouter un effet de tremblement.

Elle reçoit deux paramètres :

* La **fréquence** (ex. : 4 tremblements par seconde)
* L’**amplitude** (ex. : 40 pixels de variation)

```js
wiggle(4, 40);
```

[:material-play-circle: "Wiggle"](https://cmontmorency365.sharepoint.com/:v:/s/TIM-582214-Animation2d77/EXPup2WiGjlNqT7tguOtZwsBMcTmzJwpHC-sFfDGUw2dcg?e=RD7Zs5)

### Fonction posterizeTime()

Cette expression permet de modifier le framerate sur un calque spécifique.

```js
posterizeTime(12); // Pour 12 fps
```

On retrouve aussi cette fonction en tant qu’effet : `Effet > Temps > Postérisation temporelle`

Pour créer l'effet dans la vidéo ci-dessous, on ajoute simplement un effet de Turbulences au calque. Il est même possible d'ajouter une expression pour automatiser la déformation en appliquant `random(1000)` à la propriété Générateur aléatoire de l'effet.

![type:video](./assets/videos/posterize.mp4)

### Info "Copier/coller"

    Lorsqu'on clic droit sur une propriété affectée par une expression, on peut cliquer sur "Copier l'expression seulement".

    Sur un autre calque, ont peut alors faire un coller ++ctrl+v++ pour appliquer la même expression.

    Il est aussi possible de coller l'expression sur une autre propriété. 

## [Présentation du TP2](./tp2.md)

## Devoirs pour le prochain cours

