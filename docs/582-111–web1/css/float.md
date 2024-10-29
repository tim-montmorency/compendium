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
![Capture d’écran, le 2024-09-04 à 21 47 30](https://github.com/user-attachments/assets/4fb54bdc-c219-4cde-a08c-04906eb84116)



  **Exercice sur Div & Span**<br>
  _Utiliser correctement les balises `<div>` et `<span>`_<br>
  [Exercice Div-Span](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/exercices/div-span.html)
</div>
