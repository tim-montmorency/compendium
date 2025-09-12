# Cours 4.1
<!-- lun. 15 sept. -->

!!! Tip "Rappel"
    - Portfolio, prochaine remise: Planification: *mercredi 17 septembre*.
    - Examen à venir: *lundi le 6 octobre*. Sujets: Javascript l'API Fetch, Vue.js et Css Grid.

## Aujourd'hui

- [ ] Rappel Planification portfolio
- [ ] Quiz
- [ ] Révision et suite des exercices de mercredi
- [ ] Vue.js
- [ ] Dernière heure libre pour à la planification de votre portfolio


## Projet portfolio (25%)

<div class="class-content-link">
  <img src="./projets/assets/icon-portfolio.svg">
  <a href="./projets/portfolio.html">Projet Portfolio - Infos générales</a>
</div>

<div class="class-content-link">
  <img src="./projets/assets/icon-portfolio.svg">
  <a href="./projets/portfolio-remise1.html">Projet Portfolio - Remise planification 17 septembre</a>
</div>

## Quiz time !

- [Groupe 1 merc AM](https://app.wooclap.com/YOZIXE)
- [Groupe 2 merc PM](https://app.wooclap.com/EZTJGO)


## Révision d'exercices

[🧑🏽‍💻 Tableau NBA](https://tim-montmorency.com/timdoc/582-518MO/exercices/vue-tableau-nba/){ .md-button }

➜ [Solution](https://codepen.io/tim-momo/pen/QWYqOrP)💡

[🧑🏽‍💻 Cheese Kanye Says](https://tim-montmorency.com/timdoc/582-518MO/exercices/vue-cheese-kanye-says/){ .md-button }

➜ [Solution](https://codepen.io/tim-momo/pen/GRzOqom)💡

## Suite - Exercice Colleciton de films

[🧑🏽‍💻 Collection de films: Classe dynamique](https://tim-montmorency.com/timdoc/582-518MO/exercices/vue-collection-films-1/){ .md-button }

## Vue

### Retour et ajouts méthodes et événements

<div class="class-content-link">
  <img src="./vue/assets/logo-vue.svg">
  <a href="./vue/methodes-evenements.html#methode-dynamisee-avec-des-parametres">Vue: Méthode dynamisée par des paramètres</a>
</div>

<div class="class-content-link">
  <img src="./vue/assets/logo-vue.svg">
  <a href="./vue/methodes-evenements.html#instruction-en-ligne-inline-avec-v-on">Vue: Instructions en ligne sur événement avec v-on</a>
</div>


#### Exercice 🧑🏽‍💻

- [ ] Faire un **fork** du pen votre exercice NBA complété la semaine dernière *EXERC Vue.js: Tableau NBA* et renommez le *EXERC Vue.js: Tableau NBA - Méthode unique avec paramètres*.
- [ ] Modifiez votre code afin de n’avoir **qu'une seule méthode** pour gérer l’augmentation des scores (au lieu de deux, comme dans votre premier essai).
    Pour savoir à quelle équipe incrémenter le pointage, vous devrez transmettre un paramètre à la méthode.
    La valeur de ce paramètre sera le nom de la propriété du score correspondant à l’équipe, tel que défini dans vos données initiales.

!!! tip "Conseil pour l'exercice"
    Quand la méthode reçoit ce paramètre, vous devez accéder à la propriété de l’objet `this` dont le nom est contenu dans la variable (bref dans le paramètre reçu).
    Dans ce cas, vous ne pouvez pas utiliser la notation avec un point (`this.scoreRaptors`) puisque le nom de la propriété n’est pas écrit en dur : il est dynamique (il change selon le paramètre reçu).
    C’est pour cette raison qu’il faut utiliser la notation avec crochets (`this[nomDeTaPropriete]`).

    *À titre de appel*: il existe deux façons de cibler une propriété d’objet: [avec un point ou avec des crochets](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Property_accessors): 

    ```
    objet.propriete;
    objet["propriete"];
    ```



### Condition | Tableau + boucle

<div class="class-content-link">
  <img src="./vue/assets/logo-vue.svg">
  <a href="./vue/condition.html">Vue: Condition v-if</a>
</div>

<div class="class-content-link">
  <img src="./vue/assets/logo-vue.svg">
  <a href="./vue/boucle.html">Vue: Tableau (array) et boucle v-for</a>
</div>



#### Exercices

##### 1er exercice: Lien à venir...
<!-- 
[🧑🏽‍💻 Côte ouest VS côte est](https://tim-montmorency.com/timdoc/582-518MO/exercices/vue-ouest-vs-est/){ .md-button } 
-->

##### Le 2e exercice: 

- [ ] Faire un **fork** du pen votre exercice NBA complété la semaine dernière *EXERC - Vue.js - Collection de films Part.1 - Classes CSS dynamiques* et renommez le *EXERC - Vue.js - Collection de films Part.2 - Boucle v-for*.
- [ ] Modifiez votre code afin de faire une boucle sur le tableau de données ci-compte (voir ci-bas). N'oubliez pas de changer le contenu de la balise ainsi que sa classe dynamique pour fonctionner dans la boucle et réfléter le résultat attendu de la *Partie 1* de l'exercice.

```js
moviesArr: [
  {
    label: "Dune: Part Two",
    viewed: true,
    year: 2024
  },
  {
    label: "Jocker",
    viewed: true,
    year: 2019
  },
  {
    label: "The Substance",
    viewed: true,
    year: 2024
  },
  {
    label: "Don't Look Up",
    viewed: false,
    year: 2021
  },
  {
    label: "The Power of the Dog",
    viewed: false,
    year: 2021
  },
  {
    label: "Le plongeur",
    viewed: false,
    year: 2023
  },
  {
    id: 5,
    label: "Simple comme Sylvain",
    viewed: false,
    year: 2023
  },
  {
    label: "Le successeur",
    viewed: false,
    year: 2023
  },
  {
    label: "Ligne de fuite",
    viewed: false,
    year: 2022
  },
  {
    label: "Parasite",
    viewed: true,
    year: 2019
  },
  {
    label: "Everything, Everywhere All at Once",
    viewed: false,
    year: 2023
  },
  {
    label: "Menteuse",
    viewed: false,
    year: 2025
  },
  {
    label: "Menteur",
    viewed: false,
    year: 2019
  },
  {
    label: "Superman",
    viewed: false,
    year: 2025
  },
  {
    label: "Perfect Days",
    viewed: false,
    year: 2024
  },
  {
    label: "Guillermo del Toro's Pinocchio",
    viewed: false,
    year: 2022
  },
  {
    label: "La déesse des mouches à feu",
    viewed: false,
    year: 2020
  }
]

```


### Formulaires et propriété calculée

<div class="class-content-link">
  <img src="./vue/assets/logo-vue.svg">
  <a href="./vue/elements-de-formulaire.html">Vue: Éléments de formulaire (v-model)</a>
</div>

<div class="class-content-link">
  <img src="./vue/assets/logo-vue.svg">
  <a href="./vue/propriete-calculee.html">Vue: Propriété calculée (computed)</a>
</div>

#### Exercice

Lien à venir
<!--[🤼 Luchador](https://tim-montmorency.com/timdoc/582-518MO/exercices/vue-luchador/){ .md-button } -->


## Planification portfolio (~1h)