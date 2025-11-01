# Cours 13.1 Persistance et sauvegarde

<!-- 24 novembre -->

## SCRUM d'équipe

..


## Présentation: LocalStorage, gestion d'erreurs et gestion des sauvegardes (30 min)

## Mémoire interactive: Persistance et Authentification

- Implémentation LocalStorage:

  - Auto-save après chaque action
  - Chargement au démarrage
  - Gestion du quota dépassé
  - Gestion des erreurs de parsing

- Export/Import:

  - Bouton export en JSON
  - Upload et import de fichier JSON
  - Validation du format importé

- Authentification simple (optionnel):

  - Login avec nom d'utilisateur
  - Multi-utilisateurs via LocalStorage
  - État d'authentification dans Pinia
<!--
### Atelier optionnel Firebase (1h): - Pour les équipes avancées

- Configuration Firebase
- Premier test de sauvegarde cloud
-->

## Trace ton chemin: Sauvegarde et Fins

- Implémentation du système de sauvegarde:

  - 3 slots de sauvegarde
  - Sauvegarde manuelle
  - Chargement de sauvegarde
  - Affichage des infos (date, progression, chapitre)
  - Suppression de sauvegarde


- Finalisation de toutes les fins:

  - Textes des fins (si pas déjà fait)
  - Conditions d'accès vérifiées
  - Écrans de fin personnalisés

- Composant `EndingScreen.vue`:

  - Affichage de la fin atteinte
  - Récapitulatif des choix faits
  - Stats finales (karma, items, etc.)
  - Boutons: recommencer, charger, menu principal

- Tests intensifs de tous les chemins