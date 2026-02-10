---
hide:
  - toc
---

# Design graphique

<script type="module">
  import { VFX } from "https://esm.sh/@vfx-js/core";
  const img = document.querySelector(".vfx-on-clic");
  img.style.cursor = 'pointer';
  const vfx = new VFX();
  let on = false;
  img.addEventListener("click", () => {
    on = !on;
    if (on) {
      vfx.add(img, { shader: "glitch", overflow: 30 });
    } else {
      vfx.remove(img);
    }
  });
</script>

## Descriptif du cours

Ce cours permet d’acquérir des notions en design et d’expérimenter des processus créatifs. L’élève produit des visuels qui correspondent aux tendances actuelles en graphisme et qui s’harmonisent au contexte du message et d'un produit Web.

Au terme de ce cours, l’élève conçoit des produits communicationnels cohérents et développe son sens esthétique et son esprit critique. Il procède à l’agencement des éléments graphiques et textuels, à la création et à l’adaptation de contenus. Il doit également justifier ses choix par rapport à l’objectif communicationnel lors de la présentation de ses créations.

| Spécifications        | Valeur  |
| --------------------- | ------- |
| Code                  | 582-201 |
| Pondération           | 2-1-1   |
| Unités                | 1⅓      |
| Heures d’enseignement | 45      |
| Session               | 3       |

[Plan de cours :material-download:](./assets/documents/582201MO-Design-graphique-H26.pdf){ .md-button .md-button--primary }

## Attitudes professionnelles

* Créativité
* Sens esthétique

## Enseignant 🌱

<div class="grid grid-auto" markdown>
![](../_/profs/jfcartier.jpg)

**Jean-François Cartier**<br> 
_Enseignant en Techniques d'intégration multimédia_<br>
:material-microsoft-teams: [jfcartier@cmontmorency.qc.ca](mailto:jfcartier@cmontmorency.qc.ca)<br>
</div>
