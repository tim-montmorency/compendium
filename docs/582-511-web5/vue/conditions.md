# Conditions v-if

## Rendu conditionnel

Certains éléments sont pertinents à afficher uniquement lorsqu'ils contiennent une valeur.

Par exemple, une bulle permettant d'afficher la date de naissance d'une personne n'est désirable que s'il y a une date à afficher. Si cette information n'est pas fournie, avoir une bulle vide est indésirable:

```
<div class="bubble" v-if="birth">{{ birth }}</div>
```

<p class="codepen" data-height="600" data-theme-id="light" data-default-tab="html,result" data-slug-hash="OJrKZbw" data-pen-title="DEMO VueJS | v-if" data-user="tim-momo" style="height: 600px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/OJrKZbw">
  DEMO VueJS | v-if</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>


<br><br>
<a href="https://fr.vuejs.org/guide/essentials/conditional" class="md-button "><img src="./assets/logo-vue.svg" style="width: 15px; height: auto;"> En savoir plus sur <em>Rendu conditionnel - Conditional Rendering</em></a>
<br>

## Autre condition

Outre le fait de vérifier si une donnée est vide ou non, il est aussi possible d'ajouter une condition de comparaison directement dans `v-if`.

Par exemple:
```
<div class="bubble" v-if="birth>=2000">{{ birth }}</div>
```


Ou encore comparer la valeur de deux paramètres:

```
<div class="bubble" v-if="firstName==lastName">{{ firstName }}</div>
```


