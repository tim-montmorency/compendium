# Méthodes et événements

## Méthodes

La propriété `methods` dans une app Vue est un objet contenant différentes méthodes pouvant être appelées. Ces méthodes peuvent avoir accès aux données contenues dans `data` via `this` et les altérer au besoin.

Par exemple, la méthode `showActor` révélant l'acteur derrière le personnage:

```js
const app = Vue.createApp({
  data() {
    return {
      firstName: "Willy",
      lastName: "Wonka",
      picture: "willy-wonka.jpg"
    }
  },
  methods: {
    showActor() {
      this.firstName = "Timothée";
      this.lastName = "Chalamet";
      this.picture = "timothee-chalamet.jpg"
    }
  }
});
```


Ainsi, lorsque la méthode `showActor()` sera appelée, toutes les occurrences de `firstName`, `lastName` et `picture` seront remplacées par *Timothée*, *Chalamet* et *timothee-chalamet.jpg*.


<br><br>

## Gestion d'événement

### Appeler une méthode avec `{{ }}`

<!-- /* Ajouter de quelle façon on apelle la methode via l'interpolation source : https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463140#overview à 3:46 */ -->


Pour appeler une méthode, on peut simplement utiliser l'interpolation `{{ showActor() }}`. Ainsi, la méthode sera appelée dès de chargement de la page qui contient `{{ showActor() }}`.

Ceci sans `{{ showActor() }}` :

<p class="codepen" data-height="300" data-theme-id="light" data-default-tab="html,result" data-slug-hash="azvradL" data-pen-title="DEMO VueJS | Méthodes" data-user="tim-momo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/azvradL">
  DEMO VueJS | Méthodes</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

deviendrait, cela, avec `{{ showActor() }}` :

<p class="codepen" data-height="300" data-theme-id="light" data-default-tab="html,result" data-slug-hash="raOgZxy" data-pen-title="DEMO VueJS | Méthodes" data-user="tim-momo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/raOgZxy">
  DEMO VueJS | Méthodes</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>


### Appeler une méthode avec `v-on` ou `@`

Il est plus commmun d'appeler une méthode sur un événement, par exemple sur un clic d'un bouton.

Par exemple, voici la façon qu'appelle la méthode `showActor()` via `v-on:click` sur la balise `<button>` :

```html
<div id="app">
Salut {{ firstName }}
  <button v-on:click="showActor()">Révéler l'acteur</button>
</div>
```

ou encore la syntaxe courte avec `@:click`:

```html
<div id="app">
Salut {{ firstName }}
  <button @click="showActor()">Révéler l'acteur</button>
</div>
```

<p class="codepen" data-height="520" data-theme-id="light" data-default-tab="html,result" data-slug-hash="mdaNxGW" data-pen-title="DEMO VueJS | Méthodes" data-user="tim-momo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/mdaNxGW">
  DEMO VueJS | Méthodes</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

<br>
<a href="https://fr.vuejs.org/guide/essentials/event-handling" class="md-button "><img src="./assets/logo-vue.svg" style="width: 15px; height: auto;">&nbsp;En savoir plus sur <em>Gestion d'événement - Event Handling</em></a>
<br>

Il est aussi possible de passer des arguments (des valeurs) à la méthode. Il faut alors modifier la méthode afin qu'elle soit préparée à recevoir des paramètres. 

Par exemple, nous pourrions envoyer les informatiosn de l'acteur Johnny Depp qui a incarné Willy Wonka en 2005.

<p class="codepen" data-height="300" data-theme-id="light" data-default-tab="html,result" data-slug-hash="JoYqaEp" data-pen-title="DEMO VueJS | Méthodes | Johnny" data-user="tim-momo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/JoYqaEp">
  DEMO VueJS | Méthodes | Johnny</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>



### Insctruction en ligne (inline) avec `v-on`

Avec `v-on:click` / `@click` il est aussi possible d'écrire des instructions simples telle qu'une opération mathématique ou une instruction contenant une condition simple.

#### Opération mathématique

```js title="Par exemple si on a une donnée count:"
data() {
  return {
    count: 0
  }
}
```

```html title="On pourrait l'incrémenter ++ directement dans le template HTML:"
<button @click="count++">Add 1</button>
<p>Count is: {{ count }}</p>
```

#### Une instruction contenant une condition simple

```html
<button @click="willy == 'Timothee' ? () => showActor('Timothée', 'Chalamet', 'https://assets.codepen.io/9367036/timothee-chalamet.jpg') : () => showActor('Johnny', 'Depp', 'https://assets.codepen.io/9367036/johnny-depp2.jpg')">Clique moi</button>
```


<!--
Event handling 
Ssi on veut récupérer les infos de l'événements en cours, par exemple le contenu d'un input event.target.value, il faut passer l'événement en argument.

https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463170#overview à 2:40 
  v-on:input="setName" et on passe event en paramètre et ensuite event.target.value ou v-on:input="setName($event, "autre-parametre")"
  
Note à propos des inputs... On va parler de v-model (pour les inputs) seulement lorsqu'on parle de two-ways binding https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463180#overview  
-->




## Démo - Poésie de décembre

Démo en classe via <a href="https://codepen.io/tim-momo/pen/MWNMQmq">CodePen</a>
<!--
VIDE : https://codepen.io/tim-momo/pen/MWNMQmq
COMPLET https://codepen.io/tim-momo/pen/qBezxBw
-->


## Exercices


[Tableau NBA](https://tim-montmorency.com/timdoc/582-518MO/exercices/vue-tableau-nba/){ .md-button }

<br>

[Cheese Kanye Says](https://tim-montmorency.com/timdoc/582-518MO/exercices/vue-cheese-kanye-says/){ .md-button }




