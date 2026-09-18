# Cours 4.2
<!-- vend. 18 sept. -->

## Projet portfolio

!!! warning "Remise de la version Beta (finale et prête à tester) dans 2 semaines"
    - La remise de la version Beta du portfolio est le *vendredi 2 octobre*, donc dans 2 semaines.
    - La remise finale du portfolio est prévue pour :
      -  gr. Lora : *jeudi 8 octobre*
      -  gr. Enric : *jeudi 15 octobre*

## Aujourd'hui

- [ ] Desktop first ou mobile first?
- [ ] Introduction à la méthode Pomodoro
- [ ] Comment démarrer un composant
- [ ] Sprints de travail encadrés
- [ ] Journal de bord

## Desktop d'abord, mobile ensuite

Vos maquettes Figma ont été pensées en desktop, on code donc dans cet ordre : le HTML/CSS desktop d'abord, une passe responsive séparée pour le mobile plus tard. Les media queries qu'on a vues au cours 2.1 s'appliquent de la même façon, seulement dans l'autre sens (`max-width` plutôt que `min-width`).

## La méthode Pomodoro, pour aujourd'hui

!!! info "Le principe"
    Des sprints de travail minutés, entrecoupés de vraies pauses. Un objectif annoncé et une fin en vue, ça coupe court à la dérive, contrairement à « vous avez le reste du cours pour travailler ».

**Déroulement du bloc** :

1. Sprint 1 (30-35 min, plus long pour le démarrage)
2. Pause courte (5 min)
3. Sprint 2 (25 min)
4. Pause longue (15 min)
5. Sprint 3 (25 min)
6. Pause courte (5 min)
7. Sprint 4 (25 min)

!!! danger "Au début de chaque sprint"
    Nommez à voix haute (ou par écrit) un objectif précis et atteignable pour les prochaines 25 minutes. « Terminer le HTML de ma carte de projet », pas « avancer mon portfolio ».

!!! tip "À la fin de chaque sprint"
    2 minutes de bilan : objectif atteint ou non, qu'est-ce qu'on ajuste pour le prochain sprint.

Pendant les pauses : une vraie pause, pas une suite déguisée du travail à l'écran.

## Comment démarrer un composant

Vous n'avez pas fait de HTML/CSS depuis un moment (Web 4 étant surtout de la gestion WordPress). Voici le point de départ non ambigu, la même démarche que la démo du dernier cours :

1. Choisir un composant non commencé
2. Coller le frame Figma correspondant dans le chat Copilot
3. Écrire l'intention (ce que le composant doit faire, ses états)
4. Générer le HTML sémantique par petits incréments
5. Nommer les classes selon BEM
6. Générer le CSS
7. Tester dans le navigateur
8. Commit

[:material-file-tree: Arborescence du dépôt : portfolio](ia/arborescence-portfolio.md){ .md-button }
[Approche par composant](https://tim-montmorency.com/compendium/582-211-web2/css/composants.html){ .md-button }
[Nomenclature BEM pour vos classes CSS](https://tim-montmorency.com/compendium/582-211-web2/css/nomenclature-bem.html){ .md-button }

## Sprints de travail

Le reste du cours, en sprints Pomodoro. Un composant à la fois, un commit par composant terminé.

## Clôture

Entrée au journal de bord : quels prompts Copilot avez-vous utilisés pendant les sprints (pas les complétions en ligne, les vraies questions/demandes délibérées).

Commit final avant de partir.

## Devoir

Mercredi prochain, vous devez remettre la version Beta de votre portfolio, complète et fonctionnelle. Le dépôt GitHub doit être à jour, avec commits réguliers et bien nommés, et le site doit être déployé en ligne.
