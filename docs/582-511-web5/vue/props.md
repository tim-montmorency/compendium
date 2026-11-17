# **Vue.js** Props (composante Vue)

Une `prop` (propriété) est un moyen de passer des *données du parent vers l'enfant* (de l'app Vue principale vers la composante enfant). C'est comme passer un paramètre vers fonction JavaScript, mais pour les composantes.

```
App parent
    |
    | (envoie des données via props)
    ↓
Composante enfant
```

## Pourquoi utiliser des props?

- *Communication unidirectionnelle* : Les données descendent du parent à l'enfant
- *Réutilisabilité* : La même composante peut afficher différentes données
- *Modularité* : Chaque composante reste indépendante
- *Maintenabilité* : Les données sont centralisées dans le parent

## Syntaxe de base

### 1. Déclaration simple (tableau)

```js
const app = Vue.createApp({});

app.component('userCard', {
  props: ['name', 'age', 'email'],
  data() {
    return {
      
    }
  },
  template: `
  <div class="card">
    <h2>{{ name }}</h2>
    <p>Âge: {{ age }}</p>
    <p>Email: {{ email }}</p>
  </div>`
})

app.mount('#app');
```

*Utilisation du côté HTML:*

```vue
<userCard name="Jean" age="25" email="jean@example.com" />
```

### 2. Déclaration avec types (objet)

```js
const app = Vue.createApp({});

app.component('productCard', {
  props: {
    title: String,
    price: Number,
    inStock: Boolean,
    tags: Array,
    details: Object
  },
  data() {
    return {
      
    }
  },
  template: `
  <div class="card">
    <h2>{{ name }}</h2>
    <p>Âge: {{ age }}</p>
    <p>Email: {{ email }}</p>
  </div>`
})

app.mount('#app');
```

*Utilisation:*

```vue
<productCard 
  title="Laptop"
  :price="1299.99"
  :inStock="true"
  :tags="['électronique', 'ordinateur']"
  :details="{ brand: 'Dell', model: 'XPS' }"
/>
```

!!! alert
    ⚠️ *Note importante*: Utilise `:` (`v-bind`) pour passer autre chose qu'une string (donc dès que c'est un chiffre, une donnée booléenne, un tableau [ ], un objet { } )


## Ajout d'une valeur par défaut

Pour éviter les erreurs, il convient souvent d'attribuer une valeur par défaut aux props. Pour se faire, vous devez lui attribuer un objet `{ }` de deux propriétés: `type` et `default`:

```vue
props: {
  isOrange: {
    type: Boolean,
    default: false
  }
}
```



## Règles importantes des props

### ✅ Bonnes pratiques

*Idéalement, définir le type (Number, String, Boolean, Object, Array...)*

```vue
props: {
  age: Number  // ✅ Bon
}
```

*Utiliser v-bind (`:` ou `v-bind:`) pour les valeurs qui ne sont pas des chaînes de caractères (String)*

```vue
<Component :count="42" />  <!-- ✅ Bon (nombre) -->
<Component count="42" />   <!-- ❌ Mauvais (string "42") -->
```

*Valeurs par défaut pour objets/tableaux = fonction*

```vue
props: {
  items: {
    type: Array,
    default: () => []  // ✅ Bon
  }
}
```

*Ne jamais modifier une prop directement*

```vue
// ❌ MAUVAIS
props: ['count'],
methods: {
  increment() {
    this.count++;  // Ne fais JAMAIS ça!
  }
}

// ✅ BON - Utilise une donnée locale
props: ['initialCount'],
data() {
  return {
    localCount: this.initialCount
  }
},
methods: {
  increment() {
    this.localCount++;  // Modifie la copie locale
  }
}
```

### 🚫 Erreurs communes

```vue
<!-- ❌ Oublier v-bind pour les types qui ne sont pas des chaines de caratères (non-string) -->
<Component count="5" />  <!-- C'est une string "5", pas un nombre! -->

<!-- ✅ Correct -->
<Component :count="5" />

<!-- ❌ Modifier une prop -->
props: ['user'],
methods: {
  updateName() {
    this.user = 'Nouveau nom';  // ❌ Ne modifie pas les props!
  }
}

```

## Props vs Data

| *Props* | *Data* |
|-----------|----------|
| Viennent du parent | Définies localement |
| En lecture seule | Modifiables |
| Communication descendante | État interne |
| Réutilisabilité | Logique spécifique |

## Récapitulatif

- Les *props* permettent de passer des données du parent à l'enfant
- Toujours utiliser *v-bind* (`:`) pour les types non-string
- Les props sont *immutables* dans la composante enfant
- Utilise des *validateurs* pour garantir des données valides
- Définis des *valeurs par défaut* pour améliorer la robustesse
