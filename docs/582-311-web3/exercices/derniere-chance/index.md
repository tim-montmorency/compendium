# Dernière chance

Basé sur l'exercice [Labyrinthe](../labyrinthe/index.md), vous devez reproduire le résultat attendu.

## Résultat attendu

![type:video](./video.mp4){.h-auto}

## Consignes

Les valeurs de positionnement doivent obligatoirement être configurées avec les unitées `cqw` et `cqh`.

- [ ] Effectuer un fork du [Codepen de départ](https://codepen.io/tim-momo/pen/ogLvBgP)
- [ ] Avec l'utilitaire `set()`, assigner une valeur de départ à l'élément `.dot`
  * Déplacement latérale de 10cqw
  * Opacité de 0

Animer l'élément `.dot` avec les configurations suivantes :

- [ ] Durée de 2 secondes
- [ ] Boucle infinie
- [ ] Lissage `inOutSine` sur toute la durée de l'animation !
- [ ] Animation de l'opacité et des positionnements dans le labyrinthe avec la notion de keyframes
- [ ] À chaque fois qu'une boucle se termine, effectuez une animation sur l'élément `.wrap` et faire jouer l'audio (https://assets.codepen.io/9367036/ui-sound-270349.mp3)

Animer l'élément `.wrap`

- [ ] Rotation relative d'un quart de tours
- [ ] Durée de 1.5 secondes
- [ ] Lissage `cubicBezier` ressemblable à celui dans le résultat attendu

Animer la variable css `--primary`

- [ ] La valeur doit passer de "#ff0" à "#f06"
- [ ] Boucle infinie
- [ ] Durée de 3 secondes
- [ ] Lissage linéaire

Au clic du bouton

- [ ] Démarrer l'animation
- [ ] Faire disparaitre en fadeout le bouton avec animejs
- [ ] Déclencher l'audio (https://assets.codepen.io/9367036/ui-sound-270349.mp3)

## Remise

Dans notre chat sur Teams, me remettre le lien de votre fork.
Date limite : 21 décembre à 21h