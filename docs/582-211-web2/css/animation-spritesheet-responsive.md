# Animation sprite sheet intermédiaire

## Rappel

Pour une introduction à l'animation de sprite sheet, voir la page [Animation Sprite Sheet](../../582-211/css/animation-sprite-sheet/).


##  Animation d'une sprite sheet adaptée à la largeur de l'écran (responsive)

Lorsqu'on travaille avec une sprite sheet, il faut d'abord créer un élément HTML dont la dimension correspond à celle d'une seule image clé. Dans cet exemple, 700px par 700px. Et y ajouter notre sprite sheet en `background-image`.

```css
.element {
  width: 700px;
  height: 700px;
  background-image: url(spritesheet.png);
}
```

Cependant, si la dimension de cet élément est fixe et si on a un écran plus petit que 700px, l'image sera partiellement hors cadre et l'utilisateur devra défiler la page pour visionner l'ensemble de l'image — ce qui n'est pas très *responsive*.

Il faudra alors utiliser l'unité de pourcentage de l'espace disponible `%` ou les unités du *viewport* telles que `vw`, `vh`, `vmin` ou `vmax` pour faire en sorte que la taille de l'image s'adapte à l'espace disponible par rapport à la taille de l'écran.

Essayons par exemple une largeur de `50vw` *(viewport width)*. Afin que l'image conserve son ratio largeur/hauteur, utilisons la propriété CSS `aspect-ratio` :

```css
.element {
  width: 50vw;
  aspect-ratio: 1 / 1;
  background-image: url(spritesheet.png);
}
```

Dans le cas actuel, le ratio est littéralement 1 pour 1, car l'image clé est de 700px × 700px. Dans un autre cas, il faudra réduire la fraction jusqu'à obtenir la fraction irréductible — celle-ci sera la valeur de `aspect-ratio`. Vous pouvez utiliser des outils en ligne pour réduire vos fractions, [comme celui-ci](https://www.calculatorsoup.com/calculators/math/fractionssimplify.php).

On remarque que l'image déborde de son cadre. Pour y remédier :

1. **Ajuster `background-size`** afin de faire entrer la première image clé dans son conteneur, peu importe sa dimension. Vous pouvez désactiver l'animation le temps de tester cela.
2. **Ajuster `background-position`** dans l'animation elle-même, de façon à ce que le déplacement soit en accord avec la largeur de l'élément, peu importe sa dimension.

> 💡 Allez-y en toute logique, sachant qu'il y a un nombre défini d'images clés.

```css
@keyframes anim {
  from { background-position: 0% }
  to   { background-position: 100% } /* à ajuster selon le nombre d'images clés */
}

.element {
  width: 50vw;
  aspect-ratio: 1 / 1;
  background-image: url(spritesheet.png);
  background-size: /* à calculer selon le nombre d'images clés */;
  animation: anim 1s steps(/* nombre d'images clés */) infinite;
}
```

---

> 📝 **Exercice exploratoire** — [Monstre qui marche - Spritesheet responsive](exercices/sprite-sheet-responsive/)  
> Pour cet exercice, vous devez faire ajuster la taille de l'animation de la sprite sheet pour qu'elle s'ajuste à 50% de la largeur de la fenêtre.
