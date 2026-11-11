<!--https://squidfunk.github.io/mkdocs-material/reference/admonitions/
✏️note, 📄abstract, ℹ️info, 🔥tip, ✔️success, ❔question, ⚠️warning, ❌failure, ⚡danger, 🐞bug, 🧪example, ❜❜quote
-->

<!--
 Considérer intégrer des templates genre: https://www.landingfolio.com/library/all/vue pour exercices Vue, peiut-être un TP qui se build à mesure qu'ils apprenent un nouveau concept...
-->

# Intro à Vue.js [<img src="assets/logo-vue.svg" width="40"/>](assets/logo-vue.svg)

**Vue** (prononciation: View) est un framework JavaScript progressif utilisé pour construire des interfaces utilisateur. Il est conçu pour être adaptable et peut être intégré dans des projets existants ou utilisé pour créer des applications web complètes.


<iframe width="315" height="560"
src="https://www.youtube.com/embed/_1-GRjQROAw?si=Etou1mPTlyThUbau"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>


## Quelques exemples Vue

Les **exemples officiels** de Vue fonctionnent dans la page : on peut modifier le code et voir le résultat. En haut à gauche, choisissez **Options** et **HTML** : c'est la façon d'écrire Vue de ce cours.

- [Éditeur markdown](https://fr.vuejs.org/examples/#markdown) : le texte se met en forme pendant qu'on tape.
- [Récupération de données](https://fr.vuejs.org/examples/#fetching-data) : un `fetch()` vers l'API de GitHub, affiché avec Vue.
- [Grille avec tri et filtres](https://fr.vuejs.org/examples/#grid) : un tableau qu'on trie et qu'on filtre.
- [Graphique SVG](https://fr.vuejs.org/examples/#svg) : un graphique qui change quand on bouge les curseurs.
- [Modale avec transitions](https://fr.vuejs.org/examples/#modal) et [liste avec transitions](https://fr.vuejs.org/examples/#list-transition) : Vue et l'animation.
- [Les 7 GUIs](https://fr.vuejs.org/examples/#counter) : 7 petites interfaces classiques, du compteur au tableur.

Pour essayer Vue sans rien installer : le [Playground de Vue](https://play.vuejs.org/).

Pour voir des applications réelles faites avec Vue :

- [3D Print Gen4Math](https://kai-gski.github.io/index.html) : on tape une équation, on règle l'épaisseur et les supports, et l'app génère un fichier à imprimer en 3D. Chaque réglage met à jour l'aperçu et le temps d'impression estimé : c'est la réactivité.
- [Une table de données interactive : Easy Data Table](https://hc200ok.github.io/vue3-easy-data-table-doc/) : un composant Vue 3 pour trier, filtrer et paginer un tableau.
- [Les personnages de Rick and Morty](https://tim-montmorency.com/Fragment/v/?f=w5-vue-personnages&onglets=resultat,js,html,css&modifiable=1) : une recherche et des filtres sur les données d'une API publique, en Options API. Ouvrez les onglets pour lire le code, et modifiez-le.
- [Made with Vue.js](https://madewithvuejs.com/) : une vitrine de sites et d'applications faits avec Vue.

Un exemple à explorer ici même : cherchez un nom, changez de filtre, puis ouvrez les onglets pour lire le code et le modifier.

<iframe src="https://tim-montmorency.com/Fragment/v/?f=w5-vue-personnages&onglets=resultat,html,js,css&modifiable=1&boutons=rejouer,ouvrir" style="width:100%;height:700px;border:0" loading="lazy"></iframe>

## Vidéo: Vue.js en 2 minutes

[:material-play-circle: Voir une vidéo](https://www.youtube.com/watch?v=KgcKB7ZrPvw){ .md-button :target="_blank" }

## Vue: version 3

Attention, dans le cadre de ce cours vous allez apprendre la *version 3* de Vue.js. Assurez vous toujours de vérifier la version lorsque vous cherchez de la documentation ou des réponses à vos questions.

!!! note "Nous utiliserons Options API"

    Il existe 2 styles d'API pour coder en VUE.js: *Options API* et *Composition API*. Donc si vous parcourez la documentation de VUE.js il est possible que vous tombiez sur l'un et l'autre, ne soyez pas intimidé.

    Les deux styles d'API sont tout à fait capables de couvrir les cas d'utilisation courants. Il s'agit d'interfaces différentes alimentées par le même système sous-jacent. En fait, l'*Options API* est mise en œuvre au-dessus de la **Composition API** ! Les concepts fondamentaux sont partagés entre les deux styles et ils sont équivalents.

    Dans le cadre de ce cours, nous utiliserons le style *Options API*. [Plus d'info ici.](https://fr.vuejs.org/guide/introduction.html#api-styles)

    Dans la documentation Vue, en haut à gauche sous *Préférence d'API*, assurez-vous de toujours activer *Options*.

    <img src="./assets/vuejs-options-api.png" alt="Bouton à bascule pour activer Options API dans la documentation Vue.js" style="width: 250px;">


## Installation


Comme pour toute librairie, afin d'avoir accès à ses fonctionnalités, il est nécessaire de l'inclure dans notre&nbsp;projet.

Pour ce faire, il est possible&nbsp;:

- d'utiliser un *CDN* (Content Delivery Network)
- d'utiliser le gestionnaire de paquets JavaScript *NPM*

<!--
!!! tip "Quoi utiliser pour le moment?"

    En début de session, nous allons commencer avec l'<a target="_blank" rel="noopener noreferrer" href="https://fr.vuejs.org/guide/quick-start.html#using-vue-from-cdn">utilisation du CDN (<em>Content Delivery Network</em>)</a> plutôt que le NPM. Nous reviendrons sur la méthode NPM un peu plus tard.
-->

### Installer Vue avec CDN

[Suivre ce lien](https://fr.vuejs.org/guide/quick-start.html#using-vue-from-cdn) pour récupérer la balise `<script>` à copier et à ajouter à votre page HTML. Collez-le dans le `<head>` *AVANT* le fichier *script.js* dans lequel vous allez créer votre instance Vue et coder par la suite.

Attention, il faut que ces script [soient chargés en différé](https://fr.vuejs.org/guide/quick-start.html#using-vue-from-cdn), c'est à dire après que tout le HTML soit chargé mais en ordre l'un après l'autre.

```
<script src="..." defer></script>
```

### Installer Vue avec la commande NPM

Pour utiliser la commande *NPM* et l'installer le paquet Vue.js dans votre projet, tapper la ligne de commande suivante: 
`npm install vue`

!!! warning "NPM et Node.js"

    Avant d'aller plus loin si vous décidez d'utiliser NPM, assurez-vous d'abord d'avoir préalablement installé NodeJS et NPM. 
    
    Voir les liens suivant pour vérifier si [Node.js est installé](https://tim-montmorency.com/timdoc/582-518MO/javascript/npm/#installation-de-nodejs) et si [NPM est installé](https://tim-montmorency.com/timdoc/582-518MO/javascript/npm/#installation-de-npm).


1. Ouvrez votre terminal (vous pouvez utiliser celui de Visual Studio Code)
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

## Alternatives à Vue.js

* [React](https://react.dev/)
* [Svelte](https://svelte.dev/)
* [Angular](https://angular.dev/)