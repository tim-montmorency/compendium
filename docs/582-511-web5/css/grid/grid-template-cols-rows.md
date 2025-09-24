# Conteneur: `grid-template-columns` et `grid-template-rows`

## `grid-template-columns`

Permet de définir la taille de chaque *colonne* d'une grille. Le nombre de colonnes correspond au nombre de valeurs spécifiées.

Par exemple, trois valeurs produisent trois colonnes :

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="wvRexmm" data-pen-title="Grid - grid-template-columns" data-user="tim-momo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/wvRexmm">
  Grid - grid-template-columns</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>


!!! info
    Puisqu'il y a plus d'éléments que de colonnes, une 2e rangée est automatiquement créée afin d'accommoder tous les items. La première rangée est donc *explicite* tandis que la deuxième est *implicite*.

<br>
<a href="https://developer.mozilla.org/fr/docs/Web/CSS/grid-template-columns" class="md-button "><img src="../../assets/mdn.svg" style="width: 15px; height: auto;">&nbsp;&nbsp;En savoir plus sur *grid-template-columns*</a>

## `grid-template-rows`

Permet de définir la taille de chaque *rangée* d'une grille. Le nombre
de rangées correspond au nombre de valeurs spécifiées.

Par exemple, deux valeurs produisent deux rangées :

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="VwqWBdm" data-pen-title="Grid - grid-template-rows" data-user="tim-momo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/VwqWBdm">
  Grid - grid-template-rows</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<script async src="https://public.codepenassets.com/embed/index.js"></script>

!!! info
    Il aurait été possible de créer plus de rangées. Cependant, ces rangées auraient été vides puisqu'il n'y a seulement assez d'éléments pour combler *deux rangées de trois colonnes*.

<br>
<a href="https://developer.mozilla.org/fr/docs/Web/CSS/grid-template-rows" class="md-button "><img src="../../assets/mdn.svg" style="width: 15px; height: auto;">&nbsp;&nbsp;En savoir plus sur *grid-template-rows*</a>



## Inspecteur

L'*inspecteur* est d'une aide précieuse lorsque l'on manipule des
éléments en grid.

- Dans le *DOM Tree*, les éléments en `display: grid;` ou `display: inline-grid;` sont mis en évidence grâce à un *badge* contenant le mot "grid".
- Lorsque *cliqué*, ce badge met en surbrillance les *divisions* constituant la grille en question.
- Dans l'onglet *Layout*, il est possible d'afficher des informations supplémentaires : *étendre les divisions* afin de les rendre plus visibles, *afficher la taille* des colonnes et rangées, etc.


<div style="max-width: 640px"><div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe src="https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=c7aaf20d-52e4-4cd1-ae0d-7db5fa2e4d7e&embed=%7B%22af%22%3Atrue%2C%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen title="grid-inspector-layout.mp4" style="border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;"></iframe></div></div>
