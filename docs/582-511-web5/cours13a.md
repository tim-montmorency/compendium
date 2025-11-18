# Cours 13.1 Interactivité et mise en page

24 novembre

## SCRUM d'équipe

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

<!--
## Cours: LocalStorage, gestion d'erreurs et des sauvegardes (30 min)

## *Mémoire interactive*: Persistance et Authentification

### Implémentation LocalStorage:

- Auto-save après chaque action
- Chargement au démarrage
- Gestion du quota dépassé
- Gestion des erreurs de parsing

### Export/Import:

- Bouton export en JSON
- Upload et import de fichier JSON
- Validation du format importé

### Authentification simple (optionnel):

- Login avec nom d'utilisateur
- Multi-utilisateurs via LocalStorage
- État d'authentification dans Pinia


## *Trace ton chemin*: Sauvegarde et Fins

### Implémentation du système de sauvegarde:

- 3 slots de sauvegarde
- Sauvegarde manuelle
- Chargement de sauvegarde
- Affichage des infos (date, progression, chapitre)
- Suppression de sauvegarde


### Finalisation de toutes les fins:

- Textes des fins (si pas déjà fait)
- Conditions d'accès vérifiées
- Écrans de fin personnalisés

### Composant `EndingScreen.vue`:

- Affichage de la fin atteinte
- Récapitulatif des choix faits
- Stats finales (karma, items, etc.)
- Boutons: recommencer, charger, menu principal

### Tests intensifs de tous les chemins

-->