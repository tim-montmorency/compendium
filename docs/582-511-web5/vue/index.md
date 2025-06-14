<!--https://squidfunk.github.io/mkdocs-material/reference/admonitions/
✏️note, 📄abstract, ℹ️info, 🔥tip, ✔️success, ❔question, ⚠️warning, ❌failure, ⚡danger, 🐞bug, 🧪example, ❜❜quote
-->

# Introduction à Vue.js [<img src="assets/logo-vue.svg" width="40"/>](assets/logo-vue.svg)

**Vue** (prononciation: View) est un framework JavaScript progressif utilisé pour construire des interfaces utilisateur. Il est conçu pour être adaptable et peut être intégré dans des projets existants ou utilisé pour créer des applications web complètes.

## Vue: version 3

Attention, dans le cadre de ce cours vous allez apprendre la *version 3* de Vue.js. Assurez vous toujours de vérifier la version lorsque vous cherchez de la documentation ou des réponses à vos questions.

!!! note "Nous utiliserons Options API"

    Il existe 2 styles d'API pour coder en VUE.js: *Options API* et *Composition API*. Donc si vous parcourez la documentation de VUE.js il est possible que vous tombiez sur l'un et l'autre, ne soyez pas intimidé.

    Les deux styles d'API sont tout à fait capables de couvrir les cas d'utilisation courants. Il s'agit d'interfaces différentes alimentées par le même système sous-jacent. En fait, l'*Options API* est mise en œuvre au-dessus de la **Composition API** ! Les concepts fondamentaux sont partagés entre les deux styles et ils sont équivalents.

    Dans le cadre de ce cours, nous utiliserons le style *Options API*. [Plus d'info ici.](https://fr.vuejs.org/guide/introduction.html#api-styles)

    Dans la documentation Vue, en haut à gauche sous *Préférence d'API*, assurez-vous de toujours activer *Options*.

    <img src="./assets/vuejs-options-api.png" alt="Bouton à bascule pour activer Options API dans la documentation Vue.js" style="width: 250px;">


## Installation

!!! warning NPM et Node JS

    Avant d'aller plus loin, assurez-vous d'abord d'avoir préalablement installé NodeJS et NPM. 
    
    Voir les liens suivant pour vérifier si [Node.js est installé](https://tim-montmorency.com/timdoc/582-518MO/javascript/npm/#installation-de-nodejs) et si [NPM est installé](https://tim-montmorency.com/timdoc/582-518MO/javascript/npm/#installation-de-npm).


1. Ouvrez votre terminal (vous pouvez utiliser celui de visual Strudio Code)
2. Exécutez la commande suivante : `npm install vue`


## Concepts de base

Une fois installé, vous pouvez commencer à explorer les concepts de base de Vue.js :

* *Instance Vue* : La base de toute application Vue.js est une instance Vue.
* *La syntaxe de templates* : Utilisez des templates pour lier des données à l'interface utilisateur.
* *Directives* : Les directives sont des attributs spéciaux dans Vue.js qui permettent de manipuler le DOM (bref le HTML et son contenu).
* *Composantes/Components* : Les composants sont des blocs réutilisables de code qui peuvent être utilisés pour construire des interfaces complexes.

## Ressources supplémentaires

Voici quelques ressources utiles :

* [https://fr.vuejs.org/guide/introduction.html](https://fr.vuejs.org/guide/introduction.html)​
* ​[https://www.vuemastery.com/](https://www.vuemastery.com/)​
* [https://www.udemy.com/topic/vuejs/)](https://www.udemy.com/topic/vuejs/)​

## Alternatives à VueJS

* [React](https://react.dev/)
* [Svelte](https://svelte.dev/)
* [Angular](https://angular.dev/)