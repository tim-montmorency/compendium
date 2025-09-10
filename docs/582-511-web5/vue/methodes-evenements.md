# Méthodes v-on

## Méthodes et événements v-on


<p>La propriété <code>methods</code> dans une app Vue est un objet contenant différentes méthodes pouvant être appelées. Ces méthodes peuvent avoir accès aux données contenues dans <code>data</code> via <code>this</code> et les altérer au besoin.</p>

<p>Par exemple, la méthode <code>showActor</code> révélant l'acteur derrière le personnage:</p>
```
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


<p>Ainsi, lorsque la méthode <code>showActor</code> est appelée, toutes les occurrences de <code>firstName</code> et <code>lastName</code> sont remplacées par <em>Timothée</em> et <em>Chalamet</em>.</p>


<br><br>

## v-on: ou @

<!-- /* Ajouter de quelle façon on apelle la methode via l'interpolation source : https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463140#overview à 3:46 */ -->


<p>Pour appeler une méthode, il faut soit utiliser l'interpolation <code>{{ showActor() }}</code> OU ajouter un événement sur une balise dans l'app. </p>

<p>Par exemple, pour qu'un bouton appelle la méthode <code>showActor()</code>:</p>

```
<div id="app">
Salut {{ firstName }}
  <button v-on:click="showActor()">Révéler l'acteur</button>
</div>
```



<p>ou encore la syntaxe courte avec <code>@</code>:</p>

```
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
<a href="https://fr.vuejs.org/guide/essentials/event-handling" class="md-button "><img src="./assets/logo-vue.svg" style="width: 15px; height: auto;"> En savoir plus sur <em>Gestion d'événement - Event Handling</em></a>
<br>

<!--
# Event handling
https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463170#overview à 2:40 
  v-on:input="setName" et on passe event en paramètre et ensuite event.target.value ou v-on:input="setName($event, "autre-parametre")"
  
On va parler de v-model (pour les inputs) seulement lorsqu'on parle de two-ways binding https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463180#overview  
-->


## Démo - Poésie de décembre

Démo en classe via <a href="https://codepen.io/tim-momo/pen/MWNMQmq">CodePen</a>
<!--
VIDE : https://codepen.io/tim-momo/pen/MWNMQmq
COMPLET https://codepen.io/tim-momo/pen/qBezxBw
-->


## Exercices

Liens à venir

<!--
[Tableau NBA](https://tim-montmorency.com/timdoc/582-518MO/exercices/vue-tableau-nba/){ .md-button }
[Cheese Kanye Says](https://tim-montmorency.com/timdoc/582-518MO/exercices/vue-cheese-kanye-says/){ .md-button }
-->


