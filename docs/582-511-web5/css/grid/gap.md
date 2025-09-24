# Espace avec `column-gap`, `row-gap` & `gap`

Les propriétés `column-gap`, `row-gap` et `gap` permettent de définir des **espaces entre les cellules** d'une grille. Ces propriétés acceptent [toutes les unités de base](https://tim-montmorency.com/timdoc/582-518MO/css/unites/).



## `column-gap`

La propriété `column-gap` permet de définir *l'espace entre les
colonnes* d'une grille.

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="eYbRjKw" data-pen-title="Grid - column-gap" data-user="tim-momo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/eYbRjKw">
  Grid - column-gap</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<br>

<a href="https://developer.mozilla.org/fr/docs/Web/CSS/column-gap" class="md-button "><img src="../../assets/mdn.svg" style="width: 15px; height: auto;">&nbsp;&nbsp;En savoir plus sur *column-gap*</a> <br>


## `row-gap`

La propriété `row-gap` permet de définir **l'espace entre les rangées**
d'une grille.

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="mdawjjM" data-pen-title="Grid - row-gap" data-user="tim-momo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/mdawjjM">
  Grid - row-gap</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

<br>

<a href="https://developer.mozilla.org/fr/docs/Web/CSS/row-gap" class="md-button "><img src="../../assets/mdn.svg" style="width: 15px; height: auto;">&nbsp;&nbsp;En savoir plus sur *row-gap*</a> <br>


## `gap`

La propriété `gap` permet de définir **simultanément** l'espace entre
les colonnes **et** les rangées.

Cette propriété accepte aussi de recevoir **deux valeurs**. Le cas
échéant, la **première** correspond à l'espace entre les **rangées** et
la **deuxième**, à celle entre les **colonnes**.

**Exemple :**

``` css
gap: 10px 50px;
```

Génère un espace de **10px** entre les rangées ↕️ et de **50px** entre
les colonnes ↔️.

!!! warning
    Pratiquement toutes les unités, **sauf les `fr`**, peuvent être utilisées pour les propriétés de type `gap`.

<br>
<a href="https://developer.mozilla.org/fr/docs/Web/CSS/gap" class="md-button "><img src="../../assets/mdn.svg" style="width: 15px; height: auto;">&nbsp;&nbsp;En savoir plus sur *gap*</a> <br>


## Inspecteur

L'**inspecteur** est d'une aide précieuse lorsque l'on manipule des
éléments en grid.

- Dans le **DOM Tree**, les éléments en `display: grid;` ou `display: inline-grid;` sont mis en évidence grâce à un **badge** contenant le mot "grid".
- Lorsque **cliqué**, ce badge met en surbrillance les **divisions** constituant la grille en question.
- Dans l'onglet **Layout**, il est possible d'afficher des informations supplémentaires : **étendre les divisions** afin de les rendre plus visibles, **afficher la taille** des colonnes et rangées, etc.

<div style="max-width: 640px"><div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe src="https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=c7aaf20d-52e4-4cd1-ae0d-7db5fa2e4d7e&embed=%7B%22af%22%3Atrue%2C%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen title="grid-inspector-layout.mp4" style="border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;"></iframe></div></div>