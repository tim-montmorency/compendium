# Cours 8: Intro au *responsive*

Lundi 23 mars / mercredi 25 mars

<!--
Introduction au responsive 

- Introduction au responsive design 
- Concept de points de rupture (breakpoints) 
- Requêtes média (media queries) de base 
- Approche mobile-first vs desktop-first 
- Convivialité mobile



## Annonce :material-account-voice:

Vous devriez avoir remis, AVANT votre cours d'aujourd'hui le projet 1.

- [PROJET 1: ASSSEMBLAGE D'INTERFACE](./exercices/projet1/index.md)
-->
<!--
<span class="important-label">Rappel concernant les exercices :</span> il est primordial de compléter tous les exercices afin de développer les compétences visées dans ce cours. La première évaluation sommative est le Projet 1 — pour y être évalué adéquatement, *vous devez avoir participé activement à toutes les activités d'apprentissage précédentes*.
Par ailleurs, tel que précisé au plan de cours, la complétion de l'ensemble des exercices de la session vous permet d'obtenir la note maximale de 10/10, ce qui représente *10 % de la note finale*.
-->

## Fichier PowerPoint du cours

[👩‍🏫 Exposé reponsive: Télécharger le PPT :material-download:](./assets/cours08-responsive-mediaqueries.pdf){ .md-button }


## Activité 1: Amorce: le constat du site qui casse

<!-- Slide 02 -->

[👩🏻‍💻 Activité 1 - 10 min](./exercices/cours8-responsive/01-constat.md){ .md-button }

## Les concepts de base

- Définition qu'est-ce que le *responsive* <!-- Slide 03 -->
- Points de rupture (*breakpoints*) <!-- Slide 04 -->
- La syntaxe de base d'une requête média (*media query*)  <!-- Slide 5 -->

## Responsive

**Définition**: Un design responsive *adapte la mise en page* à la *contrainte d'affichage* courante, peu importe l'appareil.

## Breakpoint (point de rupture)

Un breakpoint = là où ton contenu souffre

```
┌─────────────────────┐        ┌──────────┐
│  ● ● ●             │        │  ● ● ●   │
│  ┌───┐ ┌───┐ ┌───┐  │        │ ┌─┐┌─┐┌─┐│
│  │   │ │   │ │   │  │        │ │ ││ ││ ││
│  │   │ │   │ │   │  │  →→→   │ │ ││ ││ ││
│  │   │ │   │ │   │  │        │ │ ││ ││ ││
│  └───┘ └───┘ └───┘  │        │ └─┘└─┘└─┘│
└─────────────────────┘        └──────────┘
   ✓ Confortable                ✗ Souffrance ← ici le breakpoint
```

> Règle : Ajoute un breakpoint quand ton contenu te le demande — jamais en ciblant un appareil.



### Éviter les breakpoints arbitraires

- [Éviter les breakpoints arbitraires](./css/breakpoints-arbitraires.md)

## Media query (requête média)

### La syntaxe d'une media query

```css
@media (min-width: 768px) {
  .conteneur {
    flex-direction: row;
  }
}
```

- **`@media`** → Mot-clé — démarre la règle conditionnelle
- **`(min-width: 768px)`** → Condition — s'applique SI la fenêtre est ≥ 768px
- **`{ ... }`** → Règles CSS qui s'appliquent seulement si la condition est vraie


## Préparation mobile-first vs desktop-first

<!-- Slide 06 -->

### Mobile-first

Partir du *minimum essentiel* et ajouter de la complexité au fur et à mesure que l'espace augmente.

```css
/* Mobile-first */
.nav { flex-direction: column; } /* mobile */

@media (min-width: 768px) {
  .nav { flex-direction: row; }
}
```

**↑ On ajoute ds éléments, de l'espace etc. pour les écrans plus larges**


### Desktop-first

Partir de la version riche et retirer des éléments au fur et à mesure que l'espace diminue.


```css
/* Desktop-first */
.nav { flex-direction: row; } /* desktop */

@media (max-width: 767px) {
  .nav { flex-direction: column; }
}
```

**↑ On retire, on écrase des styles, on simplifie pour les petits écrans**


### min-width VS max-width

**✅ *Mobile-first*: On part du petit, on ajoute des changements pour les écrans qui un un *min*imum d'une largeur X et +**

```css
/* Mobile-first (recommandé) */
/* Styles de base = mobile */
@media (min-width: 768px) { 
  /* ajoute, écrase les styles pour le grand */ 
}
```

**⚠️ *Desktop-first*: On part du grand, on retire des éléments et on fait des changements pour les écrans qui un un *max*imum d'une largeur X et -**

```css 
/* Desktop-first */
/* Styles de base = desktop */
@media (max-width: 767px) { 
  /* retire, réduit, écrase les styles pour simplifier pour le petit */ 
}
```


## Activité 2: Analyse de maquettes responsive
<!-- Slide 07 -->

[👩🏻‍💻 Activité 2: analyse de 3 captures écran d'un site (mobile/tablette/desktop)](./exercices/cours8-responsive/02-analyse-maquettes-responsive.md){ .md-button }

Retour et discussion en groupe-classe


## Activité 3: Exercice : première media query

<!-- Slide 08 -->

[👩🏻‍💻 Activité 3: albums de musique](./exercices/cours8-responsive/03-exercice-guide.md){ .md-button }

!!! info
    <span class="important-label">Rappel concernant les exercices :</span> il est primordial de compléter tous les exercices afin de développer les compétences visées dans ce cours.

    Par ailleurs, tel que précisé au plan de cours, la complétion de l'ensemble des exercices de la session vous permet d'obtenir la note maximale de 10/10, ce qui représente *10 % de la note finale*.


### Activité 4: Atelier Zone-Out 🎮

<!-- Slide 10   -->

- 🟢 Niveau 1
- 🟡 Niveau 2
- 🔴 Niveau 3

[👩🏻‍💻 Activité 4 - Atelier Zone-Out 🎮](./exercices/cours8-responsive/04-atelier-zone-out.md){ .md-button }

<!-- 
## Retour collectif sur l'activité 4
Convivialité mobile.
Slide 11   

-->

<!--
 ## Clôture : la règle des breakpoints  
Slide 12  
 -->
 
## DEVOIRS

- Terminer l'exercice: [Activité 3: première *media query*: albums de musique](./exercices/cours8-responsive/03-exercice-guide.md)

- Terminer l'exercice: [Activité 4 - Atelier Zone-Out 🎮](./exercices/cours8-responsive/04-atelier-zone-out.md)
