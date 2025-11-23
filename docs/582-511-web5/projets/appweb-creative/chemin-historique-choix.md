# Implémentation de l'historique des décisions du joueur

## Le flux

### PENDANT LE JEU

Joueur fait un choix, avant de naviguer vers le prochain chapitre, appeler:

`playerStore.recordChoice()` qui enregistre:

- ID du chapitre
- Texte du choix
- Effet karma/conséquences (si applicable)
- Date et heure précise

### CONSULTATION DE L'HISTORIQUE (choix entre ça ou affichage à la fin)

Joueur ouvre le panneau historique

Affiche la liste complète des choix:

- Tous les choix fait jusqu'à maintenant
- Statistiques/karma/inventaire en temps réel

### FIN DU JEU (choix entre ça ou affichage via un panneau de l'historique)

Écran de fin

Affiche récapitulatif complet:

- Tous les choix dans l'ordre
- Statistiques/karma finaux