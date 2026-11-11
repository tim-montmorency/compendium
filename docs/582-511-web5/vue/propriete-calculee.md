# Propriété calculée

## Qu'est-ce que c'est

Pour modifier une valeur dynamiquement et pour des raison de *performances*, il convient d'utiliser une *propriété calculée* (*computed property*) plutôt qu'une *méthode*.

C'est à dire que si une valeur doit être recalculée en fonction du changement d'une ou plusieurs autres valeurs, il est préférable d'utiliser une *propriété calculée*.

## L'exemple de la devise CAD vers USD

<!-- https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463196#overview  -->
 
Par exemple, si on voudrait convertir une devise en une autre 💵, disons convertir un montant en dollars canadiens 🇨🇦 en dollars américains 🇺🇸:

```html
<div>
    {{ amount * 0.8 }}
</div>
```

<br>
On nomme ce type d'instructions qui s'écrivent directement dans le template HTML *instructions en ligne* (inline statements). Bien qu'elles soient pratiques, elles ne sont destinées qu'aux opérations très simples car elles peuvent rapidement porter à confusion:

- Pourquoi ce montant est-il multiplié par `0.8`?
- Quelle devise tente-t-on d'afficher ici?


<hr>

Heureusement, les propriétés calculées permettent d'éviter de complexifier inutilement les templates HTML en permettant de retirer toute expression logique de ceux-ci.

Par exemple, la donnée suivante 👇 exprime clairement que l'information affichée correspond à un montant converti en dollars américains 🇺🇸. Aucune expression mathématique ne vient polluer le template:

```
<div>
    {{ amountToUSD }}
</div>

```

## Comment on l'utilise?

Pour obtenir une donnée propre comme celle-ci, sans expression, il faut ajouter un objet intitulé `computed` à l'app Vue. Cet objet contient à son tour différentes propriétés. Chacune de ces propriétés se base sur une ou plusieurs données se trouvant dans `data` et leur appliquent un traitement quelconque.

Par exemple, multiplier une donnée par `0.8`.

```js
computed: {
  amountToUSD() {
    return this.amount * 0.8;
  }
}
```

!!! tip "La force des propriétés calculées"
    La grande force des propriétés calculées est qu'elles *surveillent 👀 en permanence les données sur lesquelles elles se basent*.

Ainsi, si l'une de ces données vient à changer, comme le montant `amount`, le résultat de la propriété calculée `amountToUSD` se mettra automatiquement à jour en se basant sur la valeur de celle-ci. En d'autres mots, la valeur en dollars américains `amountToUSD` se met automatiquement à jour lorsque le montant en dollars canadien `amount` change, puisqu'il s'agit d'une propriété calculée.


Dans l'exemple ci-dessous, modifiez le montant de base en CAD afin de voir le montant en USD être recalculé automatiquement.

<p class="codepen" data-height="500" data-theme-id="50210" data-default-tab="html,result" data-slug-hash="qBgKjVK" data-pen-title="Vue propriété calculé - Convertisseur de devise" data-user="tim-momo" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/qBgKjVK">
  Vue propriété calculé - Convertisseur de devise</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>




## Autre exemple de propriété calculée

Autre exemple de propriété calculée avec notre fameux acteur Timothée Chalamet. Entrez un nom de film dans lequel il a interprété un rôle et vous verrez le titre se mettre à jour. C'est grâce à la propriété calculée nommée `titleActor`.

<p class="codepen" data-height="500" data-theme-id="50210" data-default-tab="html,result" data-slug-hash="KwdLGpX" data-pen-title="DEMO VueJS | v-if" data-user="tim-momo" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/KwdLGpX">
  DEMO VueJS | v-if</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>


<br>
<a href="https://fr.vuejs.org/guide/essentials/computed" class="md-button "><img src="./assets/logo-vue.svg" style="width: 15px; height: auto;">&nbsp;En savoir plus sur <em>propriétés calculées - computed properties</em></a>
<br>


## Exercice

[🧑🏽‍💻 Tableau NBA (partie D : la propriété calculée)](../exercices/ex-vue-nba/index.md){ .md-button }


