# Interpolation de données [<img src="assets/logo-vue.svg" width="40"/>](assets/logo-vue.svg)

## Données

Afin de définir le comportement de l'app, un objet contenant diverses propriétés doit lui être passé en paramètre. Parmi ces propriétés se trouve `data`: une fonction retournant les données susceptibles de changer dans l'application.

Par exemple, pour définir une valeur de nom, il est possible d'écrire:

```js "Par exemple, pour définir une valeur de nom, nous pourrions écrire:"
const app = Vue.createApp({
  data: function() {
    return {
      firstName: "Willy",
      lastName: "Wonka",
      picture: "willy-wonka.jpg"
    }
  }
});
```

<br>

Pour des raisons de lisibilité, il est cependant suggéré d'utiliser la nouvelle syntaxe ES6, soit:

```js "Pour des raisons de lisibilité, utilisons plutôt la syntaxe JavaScript ES6, soit:"
const app = Vue.createApp({
  data() {
    return {
      firstName: "Willy",
      lastName: "Wonka",
      picture: "willy-wonka.jpg"
    }
  }
});
```

`data` est donc une fonction retournant un objet constitué dans ce cas-ci des propriétés: `firstName`, `lastName` et `picture`.


## Interpolation des données {{ }}

Une fois, les données définies, il est possible d'y faire référence à l'aide de moustaches `{{...}}`. Leurs contenus, incluant les moustaches elles-mêmes, seront remplacés par la donnée qui lui est associée. Qui plus est, si la valeur de cette donnée vient à changer, celle-ci se mettra automatiquement à jour dans le HTML.

Par exemple, le code suivant:

```html title="Par exemple, le code suivant:"
<div id="app">
    Salut {{ firstName }}
</div>
```

Affichera en fait:

```html title="Affichera en fait:"
<div id="app">
    Salut Willy
</div>
```

.


<a href="https://fr.vuejs.org/guide/essentials/template-syntax.html#text-interpolation" class="md-button "><img src="./assets/logo-vue.svg" style="width: 15px; height: auto;"> En savoir plus sur les <em>l'interpolation des données textuelles</em></a> <br>

<small style="vertical-align: bottom">Dans le cadre de ce cours, n'oubliez pas de toujours consulter la docmentation avec l'<em>API Options</em> <img src="./assets/vuejs-options-api-petit.png" alt="Bouton à bascule pour activer Options API dans la documentation Vue.js" style="width: 130px;"></small>

<br><br>
!!! warning "Erreur fréquente"
    Les moustaches ne sont fonctionnelles qu’à l’intérieur de la balise HTML assignée à l’app (la balise qui est `mount`)

   

<br><br>
<p>Voici une petite démo d'un minuteur automatique.</p>

<p class="codepen" data-height="600" data-theme-id="light" data-default-tab="html,result" data-slug-hash="bGXJeOp" data-pen-title="DEMO Vue.js: Données moustache et minuteur setInterval" data-user="tim-momo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/bGXJeOp">
  DEMO Vue.js: Données moustache et minuteur setInterval</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>


## Attributs des balises HTML via <span style="white-space: nowrap;">:v-bind&nbsp;ou&nbsp;:</span>

Les données peuvent aussi être insérées dynamiquement dans un attribut HTML (`class`, `src`, `alt`, `style`, etc.). Cependant, les moustaches ne sont pas fonctionnelles dans ce contexte ❌. Il faut donc plutôt utiliser une directive `v-bind` en début d'attribut afin que son contenu se popule avec une donnée présente dans l'objet data.


Par exemple, pour afficher l'image contenue dans la propriété `picture`, on utilise v-bind:src:

```html title="Par exemple, pour afficher l'image contenue dans la propriété picture, on utilise v-bind:src"
<div id="app">
    <img v-bind:src="picture">
</div>
```


ou encore la syntaxe courte avec `:src` :

```html title="ou encore la syntaxe courte avec :src"
<div id="app">
    <img :src="picture">
</div>
```

<br><br>

Si plusieurs données doivent être combinées dans le cadre d'un attribut, il est nécessaire d'utiliser les [littéraux de gabarit](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Template_literals) afin de gérer la combinaison.

Par exemple, pour inscrire le prénom et le nom dans le `alt` d'une image:

```html title="Par exemple, pour inscrire le prénom et le nom dans le alt d'une image:"
<div id="app">
    <img :src="picture" :alt="`${firstName} ${lastName}`">
</div>
```

.

<p class="codepen" data-height="360" data-theme-id="light" data-default-tab="html,result" data-slug-hash="oNJKqxv" data-pen-title="DEMO VueJS | Données" data-user="tim-momo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/oNJKqxv">
  DEMO VueJS | Données</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>


!!! warning "attribut == undefined"
    Si un attribut est associé à une donnée dont la valeur équivaut à `null` ou `undefined`, l’attribut ne sera pas&nbsp;créé.



<br>

<a href="https://fr.vuejs.org/guide/essentials/template-syntax.html#attribute-bindings" class="md-button "><img src="./assets/logo-vue.svg" style="width: 15px; height: auto;"> En savoir plus sur les <em>Liaisons d'attributs - Attribute bindings</em></a> <br>

<small style="vertical-align: bottom">Dans le cadre de ce cours, n'oubliez pas de toujours consulter la docmentation avec l'<em>API Options</em> <img src="./assets/vuejs-options-api-petit.png" alt="Bouton à bascule pour activer Options API dans la documentation Vue.js" style="width: 130px;"></small>


## Données en format HTML via v-html

Si vous souhaitez envoyer une donnée en HTML, plutôt que d'utiliser les moustaches, vous devrez utiliser l'attribut `v-html` sur la balise qui contiendra votre donnée.

En JavaScript

```js title="En JavaScript"
const app = Vue.createApp({
  data() {
    return{
      monTitre: '<h2>Vue.js est formidable!</h2>'
    }
  }
});
app.mount('#app');
```

En HTML

```html title="En HTML"
<div v-html="monTitre">
    
</div>
```


Ce qui va générer ce résultat:

```html title="Ce qui va générer ce résultat:"
<div>
    <h2>Vue.js est formidable!</h2>
</div>
```

<br>

<a href="https://fr.vuejs.org/guide/essentials/template-syntax#raw-html" class="md-button "><img src="./assets/logo-vue.svg" style="width: 15px; height: auto;">En savoir plus sur l'interpolation des données en <em>HTML brut</em></a> <br>

<small style="vertical-align: bottom">Dans le cadre de ce cours, n'oubliez pas de toujours consulter la docmentation avec l'<em>API Options</em> <img src="./assets/vuejs-options-api-petit.png" alt="Bouton à bascule pour activer Options API dans la documentation Vue.js" style="width: 130px;"></small>
