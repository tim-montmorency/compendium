# Cours 12.2 Animation et médias

<!-- 19 novembre -->

!!! example "*REMISE DE LA PHASE 3 et 4 FONDATION ET INTERACTIVITÉ DU PROJET INTÉGRATEUR* (sommatif 15%)"
    **Livrables pour *mémoire interactive***

    - Fondation

      - [ ] **Projet Vite+Vue** initialisé et fonctionnel
      - [ ] **Minimum 6-8 composants** créés et fonctionnels
      - [ ] **Vue Router** configuré avec 4+ routes
      - [ ] **2 stores Pinia** créés avec state/actions/getters de base
      - [ ] **Navigation fonctionnelle** entre les pages
      - [ ] **Données mockées** affichées correctement

    - Interactivité

      - [ ] **Formulaire d'ajout** complet et validé
      - [ ] **Formulaire d'édition** fonctionnel
      - [ ] **Suppression** avec confirmation
      - [ ] **Recherche** par mot-clé fonctionnelle
      - [ ] **Filtres** par tags et par salle
      - [ ] **Messages d'erreur** clairs et pertinents

    **Livrables pour *trace ton chemin***

    - Fondation
      - [ ] **Projet Vite+Vue** initialisé et fonctionnel
      - [ ] **Minimum 6-8 composants** créés et fonctionnels
      - [ ] **Vue Router** configuré avec routes par chapitre
      - [ ] **2 stores Pinia** créés avec state/actions/getters de base
      - [ ] **Navigation fonctionnelle** entre chapitres
      - [ ] **Tous les chapitres** dans le fichier JSON
      - [ ] **Affichage du texte** fonctionnel (3-4 chapitres minimum)

    - Interactivité
      - [ ] **Système de choix** complet et fonctionnel
      - [ ] **Redirection par branches** fonctionnelle
      - [ ] **Tracking des conséquences** (flags, stats, etc.)
      - [ ] **Historique des choix** sauvegardé
      - [ ] **Toutes les branches** testées manuellement
      - [ ] **Logique des fins** implémentée (conditions d'accès)

## Évaluation par les pairs et auto-évaluation de mi-parcours (sommatif 5%)

Réalisé en classe. Instructions à venir.

## Mini cours: GSAP + Vue 3 - GSAP pour narration interactive (45 min) 

- Les composants natifs à Vue nommés `<Transition>` et `<TransitionGroup>`
  - [En savoir plus sur les `<Transition>`](https://fr.vuejs.org/guide/built-ins/transition)
  - [et plus spécifiquement les hooks JavaScript (événement émis) de la composante `<Transition>`](https://fr.vuejs.org/guide/built-ins/transition#javascript-hooks)
  - [GSAP intégré à une composante Vue: démo et playground](https://play.vuejs.org/#eNpVkMFuAiEQhl9lyqlNuouXXrZo2nfwuBeKs0qKQGBAjfHdZZfVrAmB+f/M/2WGK/v1vs0JWcdEVEF72vQWz94Fgh0OMhmCa28BdpLk+0etAQJSCvahAOLBnTqgkLA6t/EpVzmCP7lFEB69kYRFAYi/ROQs/Cij1f+6ZyMG1vA2vj3bbN1+b1Dw2lYj2yBt1KRnXRwPudHDnC6pAxrjBPe1n78EBF8MUGSkixnLNjdoCUMjFemMn5NjUGacnboqPVkdOC+Vpgus2q8IKCN+T+suWENwxyWJXKXMyQ5WNVJ+aBqD3e6VSYoi)
- `routeEnter`, `routeLeave`

### Mémoire interactive: Animations et Médias

- Animations de transitions:
  - Transitions entre pages (Vue Router)
  - Animations d'apparition des cartes
  - Hover effects sur les éléments interactifs
  - ScrollTrigger pour révélations au scroll
  - Animations de timeline
  - Easing et timing personnalisés

- Upload d'images:
  - Input file avec preview
  - Conversion en base64 ou URL
  - Validation de taille/format
  - Compression et optimisation

### Trace ton chemin: Animations et Expérience Narrative

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
