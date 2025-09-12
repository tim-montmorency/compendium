
# :class dynamique

## Classes CSS dynamiques :class

Il est fréquent qu'une classe css doit-être ajoutée ou retirée à un élément HTML afin de changer son apparence pour refléter une action commise par un usager.

Pour ce faire, Vue permet de passer un *objet JavaScript* `{}` à un *l'attribut dynamique* `v-bind:class`  ou `:class` sur la balise.

Cet objet doit contenir une *propriété* correspondant au nom de la classe souhaitée et comme *valeur* une donnée ou encore une expression. Ainsi si la condition suivie des `:` retourne `true`, la classe est ajoutée.  Et à l'opposé, si elle est évaluée à `false` elle est retirée.

<hr>

Voici un exemple où est ajoutée la classe `.majority` à une carte d'une personne lorsque la donnée `age` est plus grande ou égale à `18`:

```html
<img :class="{ majority : age >= 18 }" src="url-vers-image-del-a-personne.png">
```

```css
img{
    border: 1px solid gray;
}
img.majority{
    border: 3px solid purple;
}
```

<hr>


Voici un exemple où est ajoutée la classe `.disabled` au bouton que lorsque la donnée `isDisabled` est équivalente à `true`: 

```html
<button :class="{ disabled : isDisabled }"></button>
```

```css
button {
    background-color: var(--primary-color);
}
button.disabled {
    background-color: gray;
    cursor: not-allowed;
}
```

<hr>

Autre exemple, pour ajouter la classe `.orange` lorsque la donnée `isOrange` est équivalente à `true`:

```html
<img :src="picture" :class="{orange: isOrange}">
```


<small>Veuillez inspecter à la fois le HMTL et le JS dans le CodePen pour mieux comprendre la dynamique.</small>

<p class="codepen" data-height="500" data-theme-id="light" data-default-tab="html,result" data-slug-hash="mdaNLbB" data-pen-title="DEMO VueJS | Classe (css) dynamique" data-user="tim-momo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/mdaNLbB">
  DEMO VueJS | Classe (css) dynamique</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>


## Nom de classe contenant des caractères spéciaux

Si un nom de classe CSS contient des caractères spéciaux, il sera nécessaire de l'entourer de guillemets.

Par exemple, une classe avec un trait d'union:

```html
<img :src="picture" :class="{'is-orange': isOrange}">
```

!!! info
    En cas de doute, il est possible de toujours utiliser des guillemets, même si aucun caractère spécial n’est&nbsp;présent.

## Multiple classes dynamiques

Puisqu'un *objet JavaScript* `{}` est utilisé, il est possible d'ajouter plusieurs classes CSS dynamiques simplement en les séparant par une virgule.

Par exemple:

```html
<img :src="picture" :class="{orange: isOrange, big: isBig}">
```



## Combinaison avec des classes statiques

Si certaines classes doivent être statiques *(ne jamais changer)*, alors que certaines doivent être dynamiques *(pouvoir changer)*, il est nécessaire d'utiliser deux attributs `class`.

 Un 1<sup>er</sup> nommé simplement `class=""` pour les classes statiques et un 2<sup>e</sup> avec sans `v-bind:class=""` ou `:class=""` pour les classes dynamiques. Ces deux attributs seront ensuite combinés par Vue.

Par exemple:

```html
<img :src="picture" class="media" :class="{orange: isOrange}">
```

produira le code suivant si la valeur de *isOrange* est `true`:

```html
<img src="willy-wonka-square.jpg" class="media orange">
```

ou produira le code suivant si la valeur de *isOrange* est `false`:

```html
<img src="willy-wonka-square.jpg" class="media">
```


<br><br>
<a href="https://fr.vuejs.org/guide/essentials/class-and-style" class="md-button "><img src="./assets/logo-vue.svg" style="width: 15px; height: auto;"> En savoir plus sur *Liaison de classes et de styles - Class &amp; Style Bindings*</a>
<br>

## Exercice

[🧑🏽‍💻 Collection de films: Classe dynamique](https://tim-montmorency.com/timdoc/582-518MO/exercices/vue-collection-films-1/){ .md-button }


<script async src="https://public.codepenassets.com/embed/index.js"></script>

