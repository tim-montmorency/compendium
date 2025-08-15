# Details & Summary
Les balises `<details>` et `<summary>` permettent d'afficher/masquer un contenu en fonction du clique de l'utilisateur, le tout sans même avoir recours à du JavaScript. Ces balises sont utilisées notamment pour créer des FAQ, des questions quiz, etc.

## Details

La balise `<details>` sert à englober le contenu devant être affiché/masqué. Par défaut, le contenu est masqué et au clic de l'utilisateur, il se révèle.

Par exemple:

<iframe height="300" style="width: 100%;" scrolling="no" title="Details" src="https://codepen.io/tim-momo/embed/abaomOG?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/abaomOG">
  Details</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Lorsque la balise `<details>` est ouverte, le navigateur lui ajoute l'attribut **open**. Ainsi, il est possible de spécifier qu'une balise `<details>` devrait être ouverte par défaut en lui ajoutant cet attribut.

Par exemple:

<iframe height="300" style="width: 100%;" scrolling="no" title="Details - Open" src="https://codepen.io/tim-momo/embed/MWqgjao?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/MWqgjao">
  Details - Open</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Il est aussi possible de se baser sur cet attribut afin de spécifier des styles différents selon si la balise `<details>` est ouverte ou fermée.

Par exemple, lui spécifier un fond vert, mais uniquement lorsque la balise est ouverte:

<iframe height="300" style="width: 100%;" scrolling="no" title="Details - Open CSS" src="https://codepen.io/tim-momo/embed/oNPvzjQ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/oNPvzjQ">
  Details - Open CSS</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Summary

La balise `<summary>` placée à l'intérieur de la balise <details> permet de spécifier le texte affiché par défaut plutôt que la mention **"Details"**.

Par exemple:

<iframe height="300" style="width: 100%;" scrolling="no" title="Details+ Summary" src="https://codepen.io/tim-momo/embed/rNZBMxY?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/rNZBMxY">
  Details+ Summary</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Exercices

<div class="grid grid-auto" markdown>

<img width="182" alt="Capture d’écran, le 2024-09-29 à 10 38 23" src="https://github.com/user-attachments/assets/cd52c585-eb4a-4bce-a023-6dd025d005ed">


  **Exercice Quiz Marc Labrèche**<br>
  _Les balises `<details>` et `<summary>`_<br>
  [Exercice Quiz - Marc Labrèche](../exercices/quiz-marc-labreche.md)
</div>


