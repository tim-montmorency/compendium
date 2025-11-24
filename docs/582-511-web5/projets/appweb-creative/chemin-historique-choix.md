# Implémentation de l'historique des décisions du joueur


## PENDANT LE JEU

Le joueur fait un choix.

Au clic du bouton, avant de naviguer vers le prochain chapitre, appeler l'action du store de Pinia `playerStore.recordChoice()` en lui passant 2 données en paramètres: les données du chapitre courant, le texte du choix `choice` et la conséquence (si applicable).

`playerStore.recordChoice()` enregistre dans les `states` du store player `choiceHistory: []` :

- l'ID du chapitre
- Texte du choix
- Effet karma/conséquences (si applicable)


Format proposé pour `choiceHistory`:

```
[
  { chapterId: 'ch-2', choiceText: 'Activer la machine', karma: '+2' },
  { chapterId: 'ch-3a', choiceText: 'Voyager dans le passé', karma: '-2' }
]
``` 

## CONSULTATION DE L'HISTORIQUE (choix entre ça ou affichage à la fin)

Le joueur ouvre le panneau historique

Affiche la liste complète des choix:

- Tous les choix fait jusqu'à maintenant
- Statistiques/karma/inventaire en temps réel

## FIN DU JEU (choix entre ça ou affichage via un panneau de l'historique)

Écran de fin

Affiche récapitulatif complet:

- Tous les choix dans l'ordre
- Statistiques/karma finaux