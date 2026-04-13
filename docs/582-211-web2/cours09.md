# Cours 9

Lundi 30 mars / mercredi 8 avril

<!--

Note: Pour les groupes lundi, pas eu le temps de passer à travers tout le cours 8... je veux le faire ici.

---

Responsive avancé

- Requêtes média avancées (orientation, prefers-color-scheme, etc.) 
- Stratégies de breakpoints raisonnées 

Transitions et animations UX – Partie A
- Transitions CSS au service de l'expérience utilisateur

-->

## Annonces

### Plan de cours révisé

- 📄 [Plan de cours précédent :material-download:](https://cmontmorency365-my.sharepoint.com/:b:/g/personal/mariem_ouellet_cmontmorency_qc_ca/IQDH5terZdgPTajQCJfCfsnyAZ592dF3MqRfR2-gSkD3bQM?e=b0jArF)
- [📄 Plan de cours RÉVISÉ (mis à jour le 29 mars) :material-download:](https://cmontmorency365-my.sharepoint.com/:b:/g/personal/mariem_ouellet_cmontmorency_qc_ca/IQDTIATHK-79TJaZEiQhMukbASV3gvYqLQNSOtjosfZgHU4?e=Gtxp3O){ .md-button}

### Aujourd'hui

- Quiz de révision
- Contenu du jour
  - Requêtes média avancées
  - Stratégies de breakpoints raisonnées
  - Transformation CSS
  - Transitions CSS (mercredi seulement)
- Rencontres individuelles ciblées pour valider le projet 1 (ou prise de r-v à l'extérieur du cours si nécessaire)

!!! warning "Rappel ce propos"
    Suite à la remise du projet 1, je me réserve la possibilité de vous convoquer à une *courte entrevue individuelle surprise* afin de vérifier votre *compréhension personnelle du code que vous avez remis* et de vous évaluer en conséquence.

## Quiz time! Révision *responsive*

- [Groupe du lundi matin](https://app.wooclap.com/PEXXHC)
- [Groupe du lundi après-midi](https://app.wooclap.com/QLMCRO)
- [Groupe du mercredi](https://app.wooclap.com/IZZAKH)

<!-- 
## Retour sur exercice "Première *media query*: albums de musique"
Groupes lundi seulement: Cours 8 - Slide 09  
[Première *media query*: albums de musique](./exercices/cours8-responsive/03-exercice-guide.md)
-->

## Gap et largeur de colonnes dans les grilles Flexbox

[📚 Contenu de cours: Flexbox: `gap` et largeur de colonnes](./css/flexbox-gap-calc.md)


## Atelier Zone-Out 🎮 (lundi seulement)

<!--  Groupes lundi seulement : Cours 8 - Slide 10  
🟢 Niveau 1
🟡 Niveau 2
🔴 Niveau 3 
Vous débutez en classe mais vous allez devoir le terminer en devoir pour le prochain cours dans 2 semaines (13 avril).
-->

[👩🏻‍💻 Atelier Zone-Out 🎮 (breakpoint-media queries)](./exercices/cours8-responsive/04-atelier-zone-out.md){ .md-button }



## Retour collectif sur l'atelier Zone-Out (mercredi seulement)

<!-- Cours 8 - Slide 11  -->

Révision et questions sur les concepts de breakpoint et media queries à travers l'atelier Zone-Out.

[👩🏻‍💻 Atelier Zone-Out 🎮 (breakpoint-media queries)](./exercices/cours8-responsive/04-atelier-zone-out.md){ .md-button }

### Responsive ≠ Accessible (mais c'est un début)

| 👆 Cibles tactiles ≥ 44px | 📖 Texte lisible sans zoom |
|---|---|
| Les doigts ne sont pas des curseurs. Un lien de 20px de haut est inutilisable sur mobile. | Corps du texte : 16px minimum. Si l'utilisateur doit zoomer, c'est ton problème. |

| ↔ Pas de scroll horizontal | 🔲 Espacements adaptés |
|---|---|
| C'est la signature d'un site non responsive. Teste à toutes les tailles. | Les marges et paddings pensés pour desktop sont souvent trop serrés sur mobile. |


> Ajoute un breakpoint quand ton contenu te le demande.


## Requêtes média avancées

[📚 Contenu de cours: Requêtes média avancées](./css/mediaqueries-avance.md){ .md-button .md-button--primary }

## Stratégies de breakpoints raisonnées

[📚 Contenu de cour: Breakpoints arbitraires](./css/breakpoints-arbitraires.md){ .md-button .md-button--primary }

### Exercice media queries et breakpoints

[👩🏻‍💻 Exercice carte adaptative media queries avancées](./exercices/ex-carte-adaptable-mediaqueries.md){ .md-button }

## ↗ Transformation CSS

- `translate`
- `rotate`
- `scale`
- `skew`
- `transform-orgin`

[📚 Contenu de cours: Transformation CSS ↗](https://tim-montmorency.com/timdoc/582-211/css/transformation/){ .md-button .md-button--primary }

### Exercice transformation

[👩🏻‍💻 Exercice transform: Pyramide, fleur, abysse, chevron, banderole et papillon](https://tim-montmorency.com/timdoc/582-211/css/transformation/exercices/formes/){ .md-button }


## 🔁 Transitions CSS

- `transition`
- `transition-property`
- `transition-duration`
- `transition-timing-function`
- `transition-delay`

[📚 Contenu de cours: Transitions CSS 🔁](https://tim-montmorency.com/timdoc/582-211/css/transition/){ .md-button .md-button--primary }

### Exercice transition

[👩🏻‍💻 Exercice transitions: Spiderman](https://tim-montmorency.com/timdoc/582-211/css/transition/exercices/spider-man/){ .md-button }

[👩🏻‍💻 Exercice transitions Bojack Horseman](https://tim-montmorency.com/timdoc/582-211/css/transition/exercices/bojack-horseman/){ .md-button }

[👩🏻‍💻 Exercice transitions: Boutons](https://tim-montmorency.com/timdoc/582-211/css/transition/exercices/boutons/){ .md-button }

## DEVOIRS

- Terminer l'[atelier Zone-Out (breakpoint-media queries)](./exercices/cours8-responsive/04-atelier-zone-out.md) (*groupes du lundi seulement* car le groupe du mercredi c'est déjà remis)
- Terminer l'[exercice carte adaptative media queries avancées](./exercices/ex-carte-adaptable-mediaqueries.md) (1 CodePen)
- Terminer l'[exercice transform: Pyramide, fleur, abysse, chevron, banderole et papillon](https://tim-montmorency.com/timdoc/582-211/css/transformation/exercices/formes/) (6 CodePens distincts)

### Pour le groupe du mercredi seulement

Terminer les exercices transition CSS

- [Exercice transitions: Spiderman](https://tim-montmorency.com/timdoc/582-211/css/transition/exercices/spider-man/)
- [Exercice transitions Bojack Horseman](https://tim-montmorency.com/timdoc/582-211/css/transition/exercices/bojack-horseman/)
- [Exercice transitions: Boutons](https://tim-montmorency.com/timdoc/582-211/css/transition/exercices/boutons/)