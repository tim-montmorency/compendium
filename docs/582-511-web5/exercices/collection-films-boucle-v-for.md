# Collection de films part.2 - Boucle v-for

- [ ] Faire un **fork** du pen complété de votre exercice [Collection de films](https://tim-montmorency.com/timdoc/582-518MO/exercices/vue-collection-films-1/). Le Pen était nommé:  *EXERC - Vue.js - Collection de films Part.1 - Classes CSS dynamiques*, faites en un **fork** et renommez le *EXERC - Vue.js - Collection de films Part.2 - Boucle v-for*.
- [ ] Modifiez votre code afin de faire une boucle sur le tableau de données ci-compte (voir ci-bas). N'oubliez pas de changer le contenu de la balise ainsi que sa classe dynamique pour fonctionner dans la boucle et réfléter le résultat attendu de la *Partie 1* de l'exercice.

## Aperçu du résultat attendu

Devrait être le même résultat que la Partie 1, mais beaucoup moins de ligne dans le HTML.

<div style="max-width: 640px"><div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe src="https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=57e6b81f-9e55-4f52-b0d6-b732a970e27c&embed=%7B%22af%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen title="exerc-part1-apercu-du-resultat.mov" style="border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;"></iframe></div></div>


## Données à utiliser

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


## Notes de cours

<div class="class-content-link">
  <img src="../vue/assets/logo-vue.svg">
  <a href="../vue/interpolation.html">Vue: Interpolation des données</a>
</div>

<div class="class-content-link">
  <img src="../vue/assets/logo-vue.svg">
  <a href="../vue/classe-dynamique.html">Vue: Classes CSS dynamiques</a>
</div>

<div class="class-content-link">
  <img src="../vue/assets/logo-vue.svg">
  <a href="../vue/boucle.html">Vue: Tableau (array) et boucle v-for</a>
</div>