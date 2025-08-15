# Display
Chaque élément possède une propriété display qui dicte son affichage.

Par exemple, les balises `<div>`, `<p>` ou `<ul>` prennent toute la largeur disponible et s'affichent l'une au-dessus de l'autre, car par défaut, leur propriété display est à block.

Tandis que les balises `<span>`, `<img>` ou `<a>` s'affichent l'une à la suite de l'autre, comme une suite de mots, car leur propriété display est à inline par défaut.

<iframe height="300" style="width: 100%;" scrolling="no" title="Block vs inline" src="https://codepen.io/tim-momo/embed/OJwvBZJ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/OJwvBZJ">
  Block vs inline</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## block

Les éléments `display: block`; en bref:

- Prennent toute la largeur disponible.
- S'affichent sur une nouvelle ligne.
 **(Logique puisqu'ils prennent toute la largeur)**
- Acceptent les propriétés `width` et `height` afin de définir la largeur et hauteur de l'élément.
- Peuvent contenir n'importe quel autre type d'éléments **(block, inline, etc.)**.

## inline

Les éléments `display: inline`; en bref:

- Prennent la largeur de ce qu'ils contiennent, sans plus.
- S'affichent un à côté de l'autre, comme des mots dans une phrase, tant qu'il y a de l'espace et change de ligne au besoin.
- **N'acceptent pas** les propriétés `width`, `height`, `margin-top` et `margin-bottom`.
- Peuvent contenir d'autres éléments inline, mais **pas block**.

## inline-block

Les éléments en `display: inline-block`; sont en quelque sorte des hybrides entre <u>inline</u> et <u>block</u>.

Par exemple, les balises `<button>`, `<select>` ou `<input>` s'affichent l'une à la suite de l'autre, mais peuvent avoir une largeur et une hauteur **(width/height)** de définies, car leur propriété display est à inline-block par défaut.

- Ne prennent que la largeur de ce qu'ils contiennent par défaut, mais acceptent les propriétés `width`, `height`, `margin-top` et `margin-bottom`.
- S'affichent un à côté de l'autre.
  **(Logique puisqu'ils prennent uniquement la largeur de leur contenu)**

!!!warning

    Deux éléments inline-block peuvent s’afficher un à côté de l’autre. Cependant, dès qu’un espace ou un retour de ligne les séparent dans le code, un espace vide s’affiche entre les deux dans le rendu du navigateur.


## none

Parfois il est préférable de ne pas afficher un élément.

Par exemple, un **"popup"** ne devrait pas être affiché tant qu'un utilisateur n'a pas déclenché un évènement. D'où l'utilité de la propriété `display: none`; indiquant au navigateur de faire abstraction d'un élément.

```
.fear {
  display: none;
}
```

## Exercices

<div class="grid grid-auto" markdown>

![Capture d’écran, le 2024-10-15 à 20 43 52](https://github.com/user-attachments/assets/b755524d-9fdc-4be9-bbbe-8efcb4bbb821)


  **Display - Celeste**<br>
  _Pour cet exercice, vous devrez complétez la carte de présentation de Madeline, l’héroine du jeu Celeste._<br>
  [Display - Celeste](../exercices/celeste.md)
</div>
