---
tags:
  - Exercice
---

# Révolution sidérale 

![](./tumblr_mplcilFtNQ1sxbxulo1_400.gif){ .w-50 }

Le but de cet exercice est de mettre en pratique l'usage de la librairie ChartJS.

## Résultat attendu 

<iframe class="aspect-1-1" height="300" style="width: 100%;" scrolling="no" title="Chart.js - Exercice - Planètes" src="https://codepen.io/tim-momo/embed/YPqXQZw?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true">
      See the Pen <a href="https://codepen.io/tim-momo/pen/YPqXQZw">
  Chart.js - Exercice - Planètes</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
      </iframe>

## Instructions

- [ ] Effectuez un fork du [CodePen de départ](https://codepen.io/tim-momo/pen/vEGOeXb)
- [ ] À partir des données ci-dessous, afficher un premier diagramme à **barres** et un second diagramme à **ligne**.

    ```txt title="Nombre de jours pour faire un tour autour du soleil"
    87.969256     // Mercure
    224.6997056   // Vénus
    365.256363051 // Terre
    686.979852    // Mars
    4332.589      // Jupiter
    10759.23      // Saturne
    30685.4       // Uranus
    60266         // Neptune
    ```

- [ ] Le diagramme à ligne doit afficher l'axe des y en type `logarithmic`
- [ ] Les deux diagrammes doivent être en noir et blanc avec les même styles que dans le résultat attendu.

### Préparation au TP2

- [ ] Effectuer une installation locale qui donne le même résultat que sur Codepen.
- [ ] L'installation locale doit suivre la méthode de "module" javascript.

[STOP]



const planetes = [
  "Mercure",
  "Vénus",
  "Terre",
  "Mars",
  "Jupiter",
  "Saturne",
  "Uranus",
  "Neptune"
];

// Périodes de révolution sidérale (jours terrestres)
const revolutionJours = [
  87.969256, // Mercure
  224.6997056, // Vénus
  365.256363051, // Terre
  686.979852, // Mars
  4332.589, // Jupiter
  10759.23, // Saturne
  30685.4, // Uranus
  60266 // Neptune
];

new Chart(document.querySelector("#barre").getContext("2d"), {
  type: "bar",
  data: {
    labels: planetes,
    datasets: [
      {
        label: "Période de révolution sidérale (jours terrestres)",
        data: revolutionJours,
        backgroundColor: "white",
        borderWidth: 0
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        title: { display: true, text: "Jours terrestres" },
        grid: {
          color: "rgba(222, 222, 222, 0.2)",
          lineWidth: 1
        }
      },
      x: {
        title: { display: true, text: "Planètes" },
        grid: {
          color: "rgba(222, 222, 222, 0.2)",
          lineWidth: 1
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: "Périodes de révolution sidérale des planètes"
      }
    }
  }
});

new Chart(document.querySelector("#ligne").getContext("2d"), {
  type: "line",
  data: {
    labels: planetes,
    datasets: [
      {
        label: "Période de révolution sidérale (jours terrestres)",
        data: revolutionJours,
        borderColor: "white",
        tension: 0.3,
        borderWidth: 2,
        pointRadius: 0
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        type: "logarithmic",
        title: { display: true, text: "Jours terrestres" },
        grid: {
          color: "rgba(222, 222, 222, 0.2)",
          lineWidth: 1
        }
      },
      x: {
        title: { display: true, text: "Planètes" },
        grid: {
          color: "rgba(222, 222, 222, 0.2)",
          lineWidth: 1
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: "Périodes de révolution sidérale des planètes"
      }
    }
  }
});
