# Émettre événements via `$emit`

## Qu'est-ce que $emit?

**$emit** est une méthode qui permet à une composante enfant d'**envoyer des événements au parent**. C'est le système de communication **ascendante** (enfant → parent).


```
App parent (écoute l'événement)
↑
| $emit('event-name', data)
|
Composante enfant (émet l'événement)
```

## Un événement c'est quoi

Un *événement* JavaScript est une action qui se produit dans le navigateur, comme un clic de souris `click`, une pression de touche `keyDown`ou le chargement d'une page `load`. Dans le cas d'une composante Vue vous pouvez créer des événements *custom* pour communiquer à l'app parent un événement ponctuel et lui passer des données.

## Pourquoi utiliser `$emit`?

- *Communication remontante* : L'enfant informe le parent qu'une action s'est produite
- *Respecte le flux unidirectionnel* : les `props` descendent ↓, les événements `$emit` montent ↑
- *Découplage* : La composante enfant ne connaît pas la logique ni la structure du parent
- *Réutilisabilité* : La composante enfant peut être utilisé avec différents parents

## Syntaxe de base

### Dans la composante enfant

```javascript
// Émettre un événement simple
this.$emit('nomEvenement');

// Émettre un événement avec des données passées en paramètre
this.$emit('nomEvenement', donnees);

// Émettre avec plusieurs paramètres
this.$emit('nomEvenement', donnee1, donnee2, donnee3);
```

### Dans l'app parent (écouter l'événement) avec `v-on` ou son racourci `@`

On écoute l'événement en question, de la même façon que vous utilisiez `@click="maMethode"` ou `v-on:click="maMethode"` sur une balise `<button>` par exemple.

Donc pour écouter l'événement nomEvenement émis par la composante enfant, dans l'app parent on aurait:

```
<!-- Sans paramètres -->
<compos-enfant @nom-evenement="maMethode"></compos-enfant>

<!-- Avec paramètres -->
<compos-enfant @nom-evenement="maMethode"></compos-enfant>

// Récupérer les données passées en paramètre via la méthode dans l'app parent
methods: {
  maMethode(data) {
    console.log(data);
  }
}

<!-- OU récupération des paramètres via une fonction fléchée inline -->
<compos-enfant @nom-evenement="(data) => console.log(data)"></compos-enfant>
```


## Exemples d'utilisation

#### Exemple 1: Bouton qui émet un clic

<p class="codepen" data-height="600" data-default-tab="js,result" data-slug-hash="emJKyoa" data-pen-title="Vue: component emit - exemple 1" data-user="tim-momo" style="height: 600px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
      <span>See the Pen <a href="https://codepen.io/tim-momo/pen/emJKyoa">
  Vue: component emit - exemple 1</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

#### Exemple 2: Émettre avec des données

<p class="codepen" data-height="600" data-default-tab="js,result" data-slug-hash="VYedQLp" data-pen-title="Vue: component emit - exemple 2 (emit avec données)" data-user="tim-momo" style="height: 600px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
      <span>See the Pen <a href="https://codepen.io/tim-momo/pen/VYedQLp">
  Vue: component emit - exemple 2 (emit avec données)</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>



<script async src="https://public.codepenassets.com/embed/index.js"></script>


<br>
<a href="https://fr.vuejs.org/guide/components/events" class="md-button "><img src="./assets/logo-vue.svg" style="width: 15px; height: auto;">&nbsp;En savoir plus sur <em>les événements de composant</em></a>
<br>


