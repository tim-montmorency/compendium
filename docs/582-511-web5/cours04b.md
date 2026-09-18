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

Vos maquettes Figma ont été pensées en desktop d'abord. Bien que vous puissiez faire du mobile first, il est plus simple pour vous de suivre l'ordre de conception de vos maquettes. On commence donc par le HTML/CSS desktop, puis on fait une passe responsive pour le mobile.

On code donc dans cet ordre : le HTML/CSS desktop d'abord, une passe responsive séparée pour le mobile plus tard.

[Mobile-first VS desktop-first - Contenu de cours 2026](https://tim-montmorency.com/compendium/582-211-web2/css/mediaqueries-breakpoints.html#mobile-first-vs-desktop-first){ .md-button :target="_blank" }

[Développement mobile-first - Contenu de cours 2025](https://tim-montmorency.com/timdoc/582-211/css/media-queries/#developpement-mobile-first){ .md-button :target="_blank" }



### Media queries (requêtes média)

Les [media queries](https://tim-montmorency.com/timdoc/582-211/css/media-queries/#media-query-requete-media) qu'on a vues au cours 2.1 s'appliquent de la même façon, seulement dans l'autre sens (`max-width` plutôt que `min-width`).

[Media query (requête média) - Contenu de cours 2026](https://tim-montmorency.com/compendium/582-211-web2/css/mediaqueries-breakpoints.html#media-query-requete-media){ .md-button :target="_blank" }

[Media query (requête média) - Contenu de cours 2025](https://tim-montmorency.com/timdoc/582-211/css/media-queries/#media-query-requete-media){ .md-button :target="_blank" }



## La méthode *Pomodoro*, pour aujourd'hui

!!! info "Le principe"
    Des *sprints* de travail minutés, entrecoupés de vraies *pauses*. Un objectif annoncé et une fin en vue, ça coupe court à la dérive, contrairement à « vous avez le reste du cours pour travailler ».

**Déroulement du bloc** :

1. Sprint 1 (30-35 min, plus long pour le démarrage)
2. Pause courte (5 min)
3. Sprint 2 (25 min)
4. Pause longue (15 min)
5. Sprint 3 (25 min)
6. Pause courte (5 min)
7. Sprint 4 (25 min)

!!! danger "Au début de chaque sprint"
    Dans votre journal de bord *JOURNAL.md*, sous un titre *COURS 4.1 Sprints*, notez un objectif précis et atteignable pour les *prochaines 25 minutes*. 
    
    Exemple: « Terminer le HTML de ma carte de projet », et non pas « avancer mon portfolio ».

.

!!! tip "À la fin de chaque sprint"
    2 minutes de bilan : objectif atteint ou non, qu'est-ce qu'on ajuste pour le prochain sprint.

.


*Pendant les pauses :* une *vraie pause*, pas une suite déguisée du travail à l'écran.

## Comment *démarrer un composant*

Vous n'avez pas fait de HTML/CSS depuis un moment (Web 4 étant surtout de la gestion WordPress). 

Voici le point de départ non ambigu, la même démarche que la démo du dernier cours :

1. Choisir un composant pas encore débuté
2. Coller le frame Figma correspondant dans le chat Copilot
3. Écrire l'intention (ce que le composant doit faire, ses états (survol, clic, focus) si applicable)
4. Générer le HTML sémantique par petits incréments
5. Nommer les classes CSS selon BEM (ou autre nomenclature)
6. Générer les styles CSS
7. S'assurer que tout est responsive minimalement (tailles des éléments qui s'adaptent à la largeur de l'écran)
8. Tester dans le navigateur
9. Commit
10. Documenter dans le journal de bord *JOURNAL.md* : date, prompt (questions à l'IA), résultat décrit bièvement.

!!! warning "Responsiveness"
    À mesure que vous avancez, même si les pages ne sont pas prêtes pour mobile, assurez-vous qu'elles soient responsives, c'est à dire que le format et le contenu s'adapent à la largeur de l'écran. Vous pouvez tester en réduisant la largeur de votre fenêtre de navigateur ou en utilisant les outils de test responsive dans l'inspecteur du navigateur.

!!! tip "Pas d'animation pour le moment, concentrez vous sur la structure et le style (composant et mise en page globale)"
    On ne fait pas d'animation pour le moment, on se concentre sur la structure et le style. L'animation viendra vendredi prochain.

[:material-file-tree: Arborescence du dépôt : portfolio](./projets/portfolio/arborescence-portfolio.md){ .md-button }

[Approche par composant](https://tim-montmorency.com/compendium/582-211-web2/css/composants.html){ .md-button }

[Nomenclature BEM pour vos classes CSS](https://tim-montmorency.com/compendium/582-211-web2/css/nomenclature-bem.html){ .md-button }

## Sprints de travail

Le reste du cours, en sprints Pomodoro. Un composant à la fois, un commit par composant terminé.

## Clôture

Entrée au journal de bord : quels prompts Copilot avez-vous utilisés pendant les sprints (pas les complétions en ligne, les vraies questions/demandes délibérées).

Commit final avant de partir.

## Devoir

Afin de s'assurer d'arriver à livrer le prochain à temps, mercredi prochain, vous devrez avoir intégré au moins :

- Pour les One-Pager: minimum 60% de la version desktop de votre page unique
- Pour les Multi-pages: 60% du total de vos pages

!!! warning "Responsiveness"
    À mesure que vous avancez, même si les pages ne sont pas prêtes pour mobile, assurez-vous qu'elles soient responsives, c'est à dire que le format et le contenu s'adapent à la largeur de l'écran. Vous pouvez tester en réduisant la largeur de votre fenêtre de navigateur ou en utilisant les outils de test responsive dans l'inspecteur du navigateur.