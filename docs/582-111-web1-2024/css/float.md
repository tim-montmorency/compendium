# Float
La propriété float permet à un élément de flotter à gauche ⬅️ ou à droite ➡️ à l'intérieur de son conteneur. Elle permet aussi au texte et aux autres éléments en ligne **(inline)** le suivant de s'enrouler autour de lui.

**Valeurs disponibles:**

- `none` **(par défaut)** l'élément ne flotte pas
- `left` l'élément flotte à gauche ⬅️
- `right` l'élément flotte à droite ➡️

**Par exemple:**

<iframe height="300" style="width: 100%;" scrolling="no" title="Float" src="https://codepen.io/tim-momo/embed/XWBYPjO?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/XWBYPjO">
  Float</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Impact sur le display

Pour que le contenu en ligne soit en mesure de s'enrouler autour de l'élément en float, il est nécessaire de pouvoir calculer sa dimension. Puisqu'il est impossible par défaut de calculer la dimension **(width & height)** des éléments en ligne **(inline)**, ceux-ci sont automatiquement convertis en `display: block;` dès que la propriété float leur est attribuée.





## EXERCICE

<div class="grid grid-auto" markdown>

![Capture d’écran, le 2024-10-29 à 17 49 10](https://github.com/user-attachments/assets/5fe24628-51df-4f55-aaf2-e1479117a4a5)

  **Float - Rupi Kaur**<br>
  _Pour cet exercice vous devrez mettre en forme un poème de Rupi Kaur: une poétesse, écrivaine et féministe canadienne, née en Inde._<br>
  [Float - Rupi Kaur](../exercices/rupi-kaur.md)
</div>
