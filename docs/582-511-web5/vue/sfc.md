# Composante Vue et SFC

## Les Composantes Vue.js

### À quoi ça sert?

Une composante Vue est un **bloc de code réutilisable** qui encapsule du HTML, du JavaScript et du CSS. C'est comme une pièce de LEGO que tu peux utiliser plusieurs fois dans ton application.

Les composantes servent à:

- **Réutiliser du code** - Écris une fois, utilise partout
- **Organiser ton application** - Divise ton interface en morceaux logiques
- **Maintenir facilement** - Change une composante sans affecter le reste
- **Collaborer** - Chaque développeur peut travailler sur sa composante

### Comment ça marche?

Une composante Vue a trois parties principales:

1. **Template** (HTML) - Ce que l'utilisateur voit
2. **Script** (JavaScript) - La logique et les données
3. **Style** (CSS) - L'apparence visuelle

Les composantes peuvent:

- Avoir leurs propres **données** (data)
- Recevoir des **props** (données des parents)
- Émettre des **événements** vers les parents
- Avoir des **méthodes** et des propriétés **computed**


## SFC - Single File COmponent


Les *SFC (Single File Components)*, ou composantes monofichiers en français, sont des fichiers permettant de regrouper à la fois un template HTML, la logique JavaScript et les styles CSS d’une composante à l’intérieur d’un seul et même fichier. 

Ce fichier est par la suite converti par un <a rel="noopener noreferrer" href="#compilateurs-sfc">compilateur SFC</a> en JavaScript et CSS standards pouvant être interprétés par les navigateurs.

Cette approche permet de découper un site complexe en composantes indépendantes, simples et modulables.

```
<template>
  <div class="menu"></div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Bonjour!'
    }
  }
}
</script>

<style>
.menu {
  background: blue;
}
</style>
```



!!! info
    Ces fichiers utilisent l’extension `*.vue`.



<br>
<a href="https://fr.vuejs.org/api/sfc-spec" class="md-button "><img src="./assets/logo-vue.svg" style="width: 15px; height: auto;">En savoir plus sur *Spécifications de la syntaxe des composants monofichiers*</a>





### Importation d'une composante SFC

Les composantes SFC peuvent être importées dans un projet Vue comme tout module JavaScript importé via <a target="_blank" rel="noopener noreferrer" href="https://tim-montmorency.com/timdoc/582-518MO/javascript/npm">NPM</a>.

```
import Menu from './components/Menu.vue'
```

!!! Example
    La norme veut que les noms de modules commencent par une majuscule. Dans l'exemple précédent, le module est nommé *Menu*.


### CSS à portée limitée (Scoped CSS)

Dans le cadre d’un fichier *SFC,* la balise style peut se voir avoir l’attribut `scoped`. Cet attribut indique que les styles en question ne peuvent s’appliquer qu’aux éléments à l’intérieur de cette composante uniquement.

Pour ce faire, une clé est attribuée aux éléments HTML sous forme d'un attribut `data-v-xxxxxxx`. Toutes les règles de styles associées à cette composante se basent alors sur cette clé, limitant ainsi leur portée à cette composante uniquement.

Par exemple:

```
<template>
  <div class="menu">...</div>
</template>

<style scoped>
.menu {
  background: blue;
}
</style>
```


Sera converti en:

```
<template>
  <div class="menu" data-v-f3f3eg9>...</div>
</template>

<style>
.menu[data-v-f3f3eg9] {
  background: blue;
}
</style>
```


Une composante SFC peut aussi avoir plus d'une balise `<style>`. Notamment lorsque des styles devraient être globaux et que d'autres devraient être limités à la composante uniquement.


Par exemple:


```
/* Styles appliqués à tout le site, donc sans l'attribut scoped */
<style>
* {
  box-sizing: border-box;
}
</style>

/* Styles appliqués à cette composante uniquement */
<style scoped>
.menu {
  background: blue;
}
</style>
```

<br>


<a href="https://fr.vuejs.org/api/sfc-css-features" class="md-button "><img src="./assets/logo-vue.svg" style="width: 15px; height: auto;"> En savoir plus sur *CSS à portée limitée (Scoped CSS)*</a>



### Compilateurs SFC

- [Vite](https://vite.dev/)
- [Vue CLI](https://cli.vuejs.org/)
- [Webpack](https://webpack.js.org/)

