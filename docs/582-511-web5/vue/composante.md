
# Composantes Vue

Les composantes sont une partie importante de Vue. Elles permettent de créer des sites complexes ou, même des applications web à l’aide de composantes autonomes pouvant être réutilisables.


Les composantes nous permettent de fractionner l'interface (UI) en morceaux indépendants et réutilisables, sur lesquels nous pouvons réfléchir de manière isolée. Il est courant pour une application d'être organisée en un arbre de composantes imbriquées.

<img src="./assets/composante-pageweb.png" alt="Arbre de composants">


## Définir une composante


Pour définir une composante, il suffit d’appeler la méthode `component` d’une application Vue et de lui passer deux paramètres: 

- 1.Le *nom* à lui attribuer.
- 2.Un *objet {}* contenant des propriétés.

!!! info
    Les composantes acceptent les mêmes propriétés de base qu’une app Vue: `data`, `methods`, `computed`, `template`,&nbsp;etc.



<br>
Par exemple, pour définir une composante de compteur:

```js
// Creation d'un app Vue
const app = Vue.createApp({})

// Définition d'une composante
app.component('counter', {
  data() {
    return {
      nbr: 0
    }
  },
  template: `
    <button @click="nbr++">
      Cliqué {{ nbr }}x
    </button>`
})
```


!!! info
    Remarquez la propriété `template` contenant une chaine de caractères correspondant au code HTML associé à la&nbsp;composante.




## Utilisation d'une composante

Lorsqu'une composante est définie, il est possible d'y faire référence dans le HTML d'une app à partir de son nom sous forme d'une balise.

Par exemple:

```html
<counter></counter>
```

<p class="codepen" data-height="400" data-default-tab="html,result" data-slug-hash="mdvKMNm" data-pen-title="Vue.js Composante" data-user="tim-momo" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/mdvKMNm">
  Vue.js Composante</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>


<br>
<a href="https://fr.vuejs.org/guide/essentials/component-basics" class="md-button "><img src="./assets/logo-vue.svg" style="width: 15px; height: auto;">&nbsp;En savoir plus sur <em>Composante - Les bases</em></a>
<br>





## Réutilisation d'une composante

Une composante peut-être réutilisée aussi souvent que désiré.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="QWYxqYX" data-pen-title="Vue.js Composante - réutilisation" data-user="tim-momo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/QWYxqYX">
  Vue.js Composante - réutilisation</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
*


Chaque bouton est entièrement indépendant. Ainsi le compteur de l'un n'a aucune influence sur le compteur d'un autre.

<br>
<a href="https://fr.vuejs.org/guide/essentials/component-basics#using-a-component" class="md-button "><img src="./assets/logo-vue.svg" style="width: 15px; height: auto;">&nbsp;En savoir plus sur <em>Utilisation / réutilisation d'une composante</em></a>
<br>




## Props

Si nous construisons un blog, il est probable que nous ayons besoin d'un composant pour représenter un article du blog. Nous voulons que tous les articles partagent la même mise en page, mais avec un contenu différent. Un tel composant ne sera utile que si vous pouvez lui passer des données, comme le titre et le contenu d'un article spécifique que l'on voudrait afficher. C'est là que les `props` entrent en jeu.


Les `props` sont des données passées à une composante. Pour en définir, il faut spécifier le nom des `props` attendus dans un tableau.

Par exemple, si seulement la props `msg` est attendue:

```js
app.component('counter', {
  props: ['msg'],
  ...
})
```

<br><br>
Pour passer une donnée, il suffit ensuite d'ajouter un attribut avec la valeur désirée:

```html
<counter msg="A">
<counter msg="B">
```



<p class="codepen" data-height="400" data-default-tab="html,result" data-slug-hash="RwvJLOJ" data-pen-title="Vue.js Composante - props" data-user="tim-momo" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/RwvJLOJ">
  Vue.js Composante - props</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
*

Lorsqu'une `props` est passée à une composante, elle devient l'équivalent d'une donnée dans `data`.

!!! Warning
    Les `props` sont des données passées aux composantes mais ne peuvent pas changer de valeur.

!!! Tip
    Pour nommer vos `props`, si vous utilisez du *camelCase* (mélange de minuscules et majuscules), vous devrez utiliser le *kebab-case* du côté HTML dans les noms d'attributs de votre composante. Mais au stade où on en est, pour le moment, je vous conseille simplement de n'utiliser que des minuscules dans les noms de vos `props`. Ça va vous simplifier la vie.



<br>
<a href="https://fr.vuejs.org/guide/components/props" class="md-button "><img src="./assets/logo-vue.svg" style="width: 15px; height: auto;">&nbsp;En savoir plus sur les <em>Props</em></a>
<br>


## Boucle v-for
Les composantes sont souvent utilisées conjointement avec de boucles afin de tirer profit de leur réusabilité.

Par exemple:
```html
<counter v-for="btn in btnsArr" :msg="btn.msg"></counter>
```


<p class="codepen" data-height="400" data-default-tab="html,result" data-slug-hash="OJdExYr" data-pen-title="Vue.js Composante - boucle" data-user="tim-momo" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/OJdExYr">
  Vue.js Composante - boucle</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>




Voici un autre exemple avec une composante de 2 props: *pletter* et *pcolor*.

<p class="codepen" data-height="400" data-default-tab="html,result" data-slug-hash="JjxwowM" data-pen-title="Vue.js Composante avec 2 props - boucle" data-user="tim-momo" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/JjxwowM">
  Vue.js Composante avec 2 props - boucle</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>



<script async src="https://public.codepenassets.com/embed/index.js"></script>


<!--
## exercice 
https://tim-montmorency.com/timdoc/582-518MO/exercices/vue-composante-cartes/
 -->
