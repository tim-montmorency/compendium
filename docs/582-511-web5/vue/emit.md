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

// Émettre un événement avec des données
this.$emit('nomEvenement', donnees);

// Émettre avec plusieurs paramètres
this.$emit('nomEvenement', param1, param2, param3);
```

### Dans l'app parent (écouter l'événement)

```
<!-- Sans paramètres -->
<composante-enfant @nom-evenement="maMethode"></composante-enfant>

<!-- Avec paramètres -->
<composante-enfant @nom-evenement="maMethode"></composante-enfant>

+

methods: {
  maMethode(data) {
    console.log(data);
  }
}

<!-- OU récupération des paramètres via une fonction fléchée inline -->
<composante-enfant @nom-evenement="(data) => console.log(data)"></composante-enfant>
```


<br>
<a href="https://fr.vuejs.org/guide/components/events" class="md-button "><img src="./assets/logo-vue.svg" style="width: 15px; height: auto;">&nbsp;En savoir plus sur <em>les événements de composant</em></a>
<br>


