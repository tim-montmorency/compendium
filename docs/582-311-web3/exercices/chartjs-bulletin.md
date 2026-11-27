---
tags:
  - Exercice
  - Chart.js
---

# 📊 Bulletin de saison

Un site promotionnel de jeu affiche souvent des statistiques : temps de jeu moyen, répartition des joueurs, progression d'une saison à l'autre. L'objectif de cet exercice est d'**afficher deux graphiques de types différents à partir d'un même jeu de données**, pour comprendre que la donnée et sa représentation sont deux choses distinctes.

<!-- ![](../assets/images/chartjs-bulletin.png){.w-100 data-zoom-image} -->

## Résultat attendu

Une page avec deux `<canvas>` côte à côte. À gauche un graphique en barres, à droite un graphique en beigne (*doughnut*) - **les mêmes chiffres**, deux lectures différentes. Les deux respectent les couleurs du thème.

## Les données

Utiliser ce jeu de données, ou le remplacer par les vraies statistiques du projet :

```js
const donnees = {
  labels: ["Exploration", "Combat", "Énigmes", "Dialogue", "Menus"],
  valeurs: [42, 27, 15, 11, 5], // % du temps de jeu
};
```

## Instructions

### Mise en place

- [ ] Installer la librairie : `npm install chart.js`
- [ ] Importer `Chart` et enregistrer les composantes nécessaires (`Chart.register(...registerables)`)
- [ ] Ajouter deux `<canvas>` dans le HTML, chacun dans un conteneur de hauteur fixe

    !!! warning "Le piège du canvas"

        Un `<canvas>` sans conteneur de taille définie s'étire à l'infini au redimensionnement. Toujours l'enfermer dans une `div` avec une hauteur, et laisser `responsive: true` faire le reste.

### Premier graphique - en barres

- [ ] Créer un `new Chart(canvas, { type: 'bar', data, options })`
- [ ] Renseigner `data.labels` et un `datasets` avec un `label` et les `data`
- [ ] Donner une couleur différente à chaque barre avec un tableau de `backgroundColor`
- [ ] Ajouter un **titre** dans `options.plugins.title`
- [ ] Masquer la légende (inutile avec un seul jeu de données)
- [ ] Forcer l'axe des ordonnées à démarrer à zéro

### Second graphique - en beigne

- [ ] Créer un second graphique de type `doughnut` avec **les mêmes données**
- [ ] Afficher la légende, cette fois, et la placer à droite
- [ ] Personnaliser l'infobulle pour qu'elle affiche le pourcentage avec le symbole `%`

### Finitions

- [ ] Reprendre les couleurs du **thème DaisyUI** plutôt que celles par défaut
- [ ] Vérifier que les deux graphiques se redimensionnent correctement sur mobile
- [ ] Comparer les deux lectures : laquelle répond le mieux à « où passe le temps de jeu ? »

### Pour aller plus loin (optionnel)

- [ ] Ajouter un troisième type (`line`, `radar` ou `polarArea`) et un bouton qui bascule d'un type à l'autre
- [ ] Animer l'apparition des graphiques au défilement avec **ScrollTrigger** (cours 9)

[STOP]

## Solution de référence

```js
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const donnees = {
  labels: ["Exploration", "Combat", "Énigmes", "Dialogue", "Menus"],
  valeurs: [42, 27, 15, 11, 5],
};

const couleurs = ["#7c3aed", "#06b6d4", "#f59e0b", "#ef4444", "#64748b"];

new Chart(document.querySelector("#barres"), {
  type: "bar",
  data: {
    labels: donnees.labels,
    datasets: [{ label: "% du temps de jeu", data: donnees.valeurs, backgroundColor: couleurs }],
  },
  options: {
    responsive: true,
    plugins: { title: { display: true, text: "Répartition du temps de jeu" }, legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  },
});

new Chart(document.querySelector("#beigne"), {
  type: "doughnut",
  data: {
    labels: donnees.labels,
    datasets: [{ data: donnees.valeurs, backgroundColor: couleurs }],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: "right" },
      tooltip: { callbacks: { label: (c) => `${c.label} : ${c.parsed} %` } },
    },
  },
});
```
