# Cours 12.2 Phase interactivité

<!-- 19 novembre-->

??? example "*REMISE DE LA PHASE 3 FONDATION DU PROJET INTÉGRATEUR* (sommatif 7.5%)"

    *IMPORTANT* : 
    
    - [ ] Créez une branche git *Phase2* à partir de la version que vous voulez remettre aujourd'hui et ne la touchez plus par la suite.
    - [ ] Votre code doit-être bien *commenté* en détail pour démontrer votre compréhension.

    **Livrables pour *mémoire interactive**

    - [ ] **Projet Vite+Vue** initialisé et fonctionnel
    - [ ] **Structure complète des dossier et fichiers**
    - [ ] **Minimum 4-6 composants et views** créés et fonctionnels
    - [ ] **Documentation des composants et views** dans un fichier `COMPONENTS.md`*
    - [ ] **Vue Router** configuré avec min. 3 routes
    - [ ] **Documentation des routes** dans un fichier `ROUTES.md`**
    - [ ] **2 stores Pinia** (museum et memory) créés avec state/actions/getters de base
    - [ ] **Navigation fonctionnelle** entre les pages
    - [ ] **Données mockées** affichées correctement (données mockée = données fictives pour faire des tests)

    **Livrables pour *trace ton chemin**

    - [ ] **Projet Vite+Vue** initialisé et fonctionnel
    - [ ] **Structure complète des dossier et fichiers**
    - [ ] **Minimum 4-6 composants** créés et fonctionnels
    - [ ] **Documentation des composants et views** dans un fichier `COMPONENTS.md`*
    - [ ] **Vue Router** configuré avec routes par chapitre
    - [ ] **Documentation des routes** dans un fichier `ROUTES.md`**
    - [ ] **2 stores Pinia** (story et player) créés avec state/actions/getters de base
    - [ ] **Navigation fonctionnelle** entre chapitres
    - [ ] **Minimum 6-7 chapitres** dans le fichier JSON
    - [ ] **Affichage du texte** fonctionnel (3-4 chapitres minimum)
    - [ ] **Système de choix** complet et fonctionnel

    *Documenter vos `components` et vos `views` dans `COMPONENTS.ms`

    - Liste dans un fichier `COMPONENTS.md` (sauvegarder dans le dossier `src` de votre projet)
    - Pour chaque composant: nom, responsabilité, props attendues, événements émis (emits)

    **Documenter vos `routes` dans `ROUTES.md`

    - Créer un fichier `ROUTES.md`
    - Pour chaque route, lister: path, name, composant (la view) et une description


## Évaluation par les pairs et auto-évaluation de mi-parcours (sommatif 5%)

Cette auto-évaluation et évaluation par les pairs vise à identifier les forces du fonctionnement d’équipe et les points à améliorer pour le reste du projet.

Répondez honnêtement : le but n’est **pas** de juger les autres, mais d’aider votre équipe à ajuster sa collaboration d’ici la remise finale.

L'évaluation de cette étape par l'enseignante (qui compte pour 5% du projet) sera faite à la toute fin, lors de la mise en relation avec votre post-mortem.

[Évaluation par les pairs et auto-évaluation](https://forms.office.com/r/nx4WVECugR){ .md-button }

## SCRUM

- Rencontre de 10 minutes pour la mêlée (SCRUM) hebdomadaire.
- N'oubliez pas dajouter votre résumé de SCRUM dans votre équipe Teams.
  - 🌹 Mes accomplissements
  - 🚀 Prochaine semaine
  - 🌵 Problèmes
  - 🎉 Ce qui me motive

## Intégration des médias et mise en page

- Intégration des médias
- Mise en page HTML+CSS
- Adaptative (responsive) via `display: grid`, `display: flex` et requêtes média (media queries).


## Phase interactivité (1er décembre): *Mémoires interactives*

<div class="class-content-link">
  <img src="./projets/assets/icon-creative-webapp.svg">
  <a href="./projets/appweb-creative/memoire-form-CRUD.html">Mémoires: CRUD des mémoires (Create, Read, Update, Delete). Upload d'images.</a>
</div>


### DEVOIR ET EN CLASSE: Aujourd'hui, travailler sur "Formulaire et ajouts/éditions de mémoires"

- Ajouts/éditions de mémoires
  - Création des formulaires d'ajout/édition
  - CRUD des mémoires (CRUD: Create, Read, Update, Delete)
  - Upload et gestion d'images

### Prochain cours (suite phase interactivité (1er décembre)):

- Validation des données entrées dans les formulaires

- Implémentation des filtres et de la recherche
  - Filtre par catégorie (tag) et/ou par date
  - Recherche parmi les mémoires


## Phase interactivité (1er décembre): *Trace ton chemin*

<div class="class-content-link">
  <img src="./projets/assets/icon-creative-webapp.svg">
  <a href="./projets/appweb-creative/chemin-tracking-consequences.html">Trace ton chemin: tracking des conséquences et statistiques</a>
</div>


### DEVOIR ET EN CLASSE: Aujourd'hui, travailler sur "Systèmes de tracking des conséquences"

#### Minimum 1 des 4 systèmes listés ci-dessous:

1. Karma/Moralité
2. Système de flags (événements déclenchés)
3. Inventaire d'objets (collecte)
4. Statistiques du personnage (style RPG)

#### Implémentation de la logique des fins (conditions d'accès à la fin)


<span class="important-label">IMPORTANT</span> Si vous devez changer un peu votre histoire pour implémenter ce système de conséquence, n'oubliez pas de mettre à jour votre arbre narratif ( *2.2 Arbre naratif* ) dans votre cahier de charges afin qu'il reflète toutes les décisions de votre histoire finale.

#### Prochain cours (suite phase interactivité (1er décembre)):

- Implémentation de l'historique des décisions du joueur
  - Enregistrement de chaque décision
  - Affichage des décisions et statistiques dans un menu ou à la fin


<!--

## Cours: Validation de formulaires Vue (Mémoires interactives)

...
+
- Upload d'images:
  - Input file avec preview
  - Conversion en base64 ou URL
  - Validation de taille/format
  - Compression et optimisation

## Cours: Logique de branches narratives (Trace ton chemin)

...



## Travail en classe et en devoir

### *Mémoire interactive*: Interactivité - CRUD et Formulaires


Développement du formulaire d'ajout de mémoire:

- `MemoryForm.vue` (champs, validation)
- Intégration avec le store
- Gestion des erreurs

## #*Trace ton chemin*: Système de Choix et Branches

Développement du système de choix:

- Affichage dynamique des choix
- Sélection et validation
- Redirection vers le bon chapitre

Tests des premières branches

## Devoirs

*Mémoire interactive*

Avancer ce qui a été commencé en classe:

- [ ] **Formulaire d'ajout** complet et validé
- [ ] **Formulaire d'édition** fonctionnel
- [ ] **Suppression** avec confirmation
- [ ] **Recherche** par mot-clé fonctionnelle
- [ ] **Filtres** par tags et par salle
- [ ] **Messages d'erreur** clairs et pertinents

*Trace ton chemin*

Avancer ce qui a été commencé en classe:

- [ ] **Système de choix** complet et fonctionnel
- [ ] **Redirection par branches** fonctionnelle
- [ ] **Tracking des conséquences** (flags, stats, etc.)
- [ ] **Historique des choix** sauvegardé
- [ ] **Toutes les branches** testées manuellement
- [ ] **Logique des fins** implémentée (conditions d'accès)



## SCRUM d'équipe


## *Mémoire interactive*: Interactivité - CRUD et Formulaires

- Implémentation CRUD complète:

  - *Create*: Ajout de mémoire
  - *Read*: Affichage (déjà fait)
  - *Update*: Édition de mémoire
  - *Delete*: Suppression avec confirmation

- Système de recherche:

  - Barre de recherche *PAS OBLIGATOIRE POUR LA REMISE DU 19 nov. Mais obligatoire pour la remise finale.*
  - Filtrage par tags *PAS OBLIGATOIRE POUR LA REMISE DU 19 nov. Mais obligatoire pour la remise finale.*
  - Filtrage par salle *PAS OBLIGATOIRE POUR LA REMISE DU 19 nov. Mais obligatoire pour la remise finale.*

## *Trace ton chemin*: Système de Choix et Branches

- Implémentation du tracking des conséquences: *PAS OBLIGATOIRE POUR LA REMISE DU 19 nov.*

  - Système de flags (événements déclenchés)
  - Karma/stats (si applicable)
  - Inventaire (si applicable)
  - Relations avec personnages (si applicable)

- Historique des choix du joueur:

  - Enregistrement de chaque décision
  - Affichage dans un menu (optionnel)

- Tests de toutes les branches principales

## Devoirs

### Mémoire interactive

- Complétion des fonctionnalités CRUD
- Tests et correction de bugs

### Trace ton chemin

- Complétion de la logique de toutes les branches 
- Tests manuels de chaque chemin possible


## Travail en classe et DEVOIR

*Mémoire interactive*

Terminer ce qui a été commencé en classe:

- [ ] **Formulaire d'ajout** complet et validé
- [ ] **Formulaire d'édition** fonctionnel
- [ ] **Suppression** avec confirmation
- [ ] **Recherche** par mot-clé fonctionnelle *PAS OBLIGATOIRE POUR LA REMISE DU 19 nov. Mais obligatoire pour la remise finale.*
- [ ] **Filtres** par tags et par salle *PAS OBLIGATOIRE POUR LA REMISE DU 19 nov. Mais obligatoire pour la remise finale.*
- [ ] **Messages d'erreur** clairs et pertinents

*Trace ton chemin*

Terminer ce qui a été commencé en classe:

- [ ] **Système de choix** complet et fonctionnel
- [ ] **Redirection par branches** fonctionnelle
- [ ] **Tracking des conséquences** (flags, stats, etc.) *PAS OBLIGATOIRE POUR LA REMISE DU 19 nov. Mais obligatoire pour la remise finale.*
- [ ] **Historique des choix** sauvegardé
- [ ] **Toutes les branches** testées manuellement
- [ ] **Logique des fins** implémentée (conditions d'accès)


## Documentation GSAP + Vue 3 - GSAP pour narration interactive

Cette phase n'est plus exigée. Ceci étant dit, voici de la documentation pour les équipes qui veulent tout de même l'intégrer.

[Router et transition animées entre pages](./vue/route-transition-animee.md)

- Les composants natifs à Vue nommés `<Transition>` et `<TransitionGroup>`
  - [En savoir plus sur les `<Transition>`](https://fr.vuejs.org/guide/built-ins/transition)
  - [et plus spécifiquement les hooks JavaScript (événement émis) de la composante `<Transition>`](https://fr.vuejs.org/guide/built-ins/transition#javascript-hooks)
  - [GSAP intégré à une composante Vue: démo et playground](https://play.vuejs.org/#eNpVkMFuAiEQhl9lyqlNuouXXrZo2nfwuBeKs0qKQGBAjfHdZZfVrAmB+f/M/2WGK/v1vs0JWcdEVEF72vQWz94Fgh0OMhmCa28BdpLk+0etAQJSCvahAOLBnTqgkLA6t/EpVzmCP7lFEB69kYRFAYi/ROQs/Cij1f+6ZyMG1vA2vj3bbN1+b1Dw2lYj2yBt1KRnXRwPudHDnC6pAxrjBPe1n78EBF8MUGSkixnLNjdoCUMjFemMn5NjUGacnboqPVkdOC+Vpgus2q8IKCN+T+suWENwxyWJXKXMyQ5WNVJ+aBqD3e6VSYoi)
- `routeEnter`, `routeLeave`

### OPTIONNEL Mémoire interactive: Animations et Médias

- OPTIONNEL Animations de transitions:
  - Transitions entre pages (Vue Router)
  - Animations d'apparition des cartes
  - Hover effects sur les éléments interactifs
  - ScrollTrigger pour révélations au scroll
  - Animations de timeline
  - Easing et timing personnalisés


### OPTIONNEL Trace ton chemin: Animations et Expérience Narrative

- Animations de texte:
  - Effet d'apparition progressive (typewriter optionnel)
  - Fade in des paragraphes
  - Animations des dialogues
- Transitions entre chapitres

- Animation (suite)
  - Animations des boutons de choix
  - Effets de hover et sélection
  - Transitions contextuelles (selon le ton du chapitre)

- Intégration des médias:
  - Images de fond par chapitre
  - Musiques d'ambiance
  - Effets sonores (optionnel)
  - Système de contrôle audio

  -->
