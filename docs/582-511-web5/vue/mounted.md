# :simple-vuedotjs:  Le cycle de vie : `mounted()`

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Un composant Vue a une **vie** : il est créé, branché sur la page, mis à jour, puis retiré. Vue vous laisse exécuter du code à certains de ces moments.
2. **`mounted()`** s'exécute **une seule fois**, quand le composant est branché sur la page : son HTML existe, on peut le lire et écouter les événements de la fenêtre.
3. Dans votre récit, c'est là qu'on écoute le **défilement**, pour la barre de progression et le chapitre actif.

</div>

## Pourquoi un moment précis? { #pourquoi }

Vous connaissez déjà le problème : un script qui cherche un élément **avant** qu'il existe ne trouve rien. C'est pour ça qu'on attend `DOMContentLoaded`, ou qu'on place le script à la fin de la page.

Un composant Vue a le même problème, en plus petit. Au début, Vue prépare les données (`data()`), mais le HTML de la zone n'est **pas encore construit**. `mounted()` est le moment où tout est prêt :

- le HTML de la zone existe, avec les valeurs de `data()`;
- les méthodes sont disponibles, avec `this`.

C'est donc le bon endroit pour **démarrer** quelque chose : écouter un événement de la fenêtre, lancer un premier calcul, aller chercher des données.

## La syntaxe { #syntaxe }

`mounted()` se place **au même niveau** que `data()` et `methods`, pas à l'intérieur de `methods`. Vue l'appelle lui-même : vous ne l'appelez jamais.

Un exemple, différent de votre récit : afficher la largeur de la fenêtre, et la garder à jour quand on la redimensionne.

```html
<div id="app">
  <p>Largeur de la fenêtre : {{ width }} px</p>
</div>
```

```js
Vue.createApp({
  data() {
    return {
      width: 0,
    };
  },

  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
  },

  // Une seule fois, quand le composant est branché sur la page
  mounted() {
    // À chaque redimensionnement, le navigateur appelle updateWidth
    window.addEventListener("resize", this.updateWidth);
    // Et une première fois tout de suite : sinon, width reste à 0
    this.updateWidth();
  },
}).mount("#app");
```

Trois détails qui font la différence :

| Dans le code | Pourquoi |
|---|---|
| `this.updateWidth`, **sans** parenthèses | On **donne** la fonction au navigateur, qui l'appellera plus tard. Avec des parenthèses, on l'appellerait une seule fois, tout de suite, et on donnerait son résultat. |
| `this.updateWidth()`, **avec** parenthèses | Là, on veut l'appeler maintenant, une première fois. |
| `mounted() { ... }`, jamais `mounted: () => { ... }` | Comme dans `methods`, une fonction fléchée n'a pas son propre `this` : `this.updateWidth` serait introuvable. |

## Les autres moments, pour information { #autres-moments }

Vue offre d'autres « crochets » (*hooks*) du cycle de vie. Dans ce cours, vous n'avez besoin que de `mounted()`.

| Crochet | Quand? |
|---|---|
| `created()` | Les données sont prêtes, mais le HTML n'existe pas encore. |
| `mounted()` | Le composant est branché sur la page : le HTML existe. |
| `updated()` | Le HTML vient d'être mis à jour, après un changement de données. |
| `unmounted()` | Le composant est retiré de la page. On y arrête ce qu'on avait démarré. |

## Dans votre récit { #dans-votre-recit }

Dans le navigateur de chapitres, `mounted()` fait exactement la même chose que l'exemple, avec `"scroll"` au lieu de `"resize"`, et la méthode `updateScroll` au lieu de `updateWidth`.

[:simple-vuedotjs: Le composant Vue de votre récit](../projets/recit-defilant/composant-vue.md#js){ .md-button .md-button--primary }

## Références

- [Les hooks du cycle de vie (documentation de Vue)](https://fr.vuejs.org/guide/essentials/lifecycle.html){ :target="_blank" }
- [`mounted()` dans la référence de l'API (documentation de Vue)](https://fr.vuejs.org/api/options-lifecycle.html#mounted){ :target="_blank" }
