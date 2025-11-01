# Cours 10.2
<!-- 5 novembre -->

## Présentation: Architecture de composants Vue (30 min)

- Architecture de composants Vue
- Routes (Vue Router)

## Création des composants de layout:

### Mémoire interactive:

*Composants de layout:*

- `AppHeader.vue` - Navigation principale
- `AppFooter.vue` - Informations, crédits
- `Sidebar.vue` - Menu latéral des salles

*Composants de contenu:*

- `RoomView.vue` - Vue d'une salle individuelle
- `MemoryCard.vue` - Carte d'une mémoire
- `MemoryList.vue` - Liste/grille de mémoires
- `MemoryForm.vue` - Formulaire d'ajout/édition

*Composants UI:*

- `ButtonPrimary.vue` - Bouton principal
- `Modal.vue` - Fenêtre modale
- `LoadingSpinner.vue` - Indicateur de chargement
- `TagBadge.vue` - Badge de tag
- [Ajoutez vos composants]

### Trace ton chemin

*Composants de layout:*

- `AppHeader.vue` - Navigation et menu
- `SaveSlotManager.vue` - Gestion des sauvegardes
- `ProgressBar.vue` - Barre de progression dans l'histoire

*Composants de contenu:*

- `ChapterView.vue` - Vue d'un chapitre/scène
- `NarrativeText.vue` - Affichage du texte narratif
- `DialogueBox.vue` - Boîte de dialogue pour personnages
- `ChoiceButton.vue` - Bouton de choix interactif
- `ChoicePanel.vue` - Panel contenant tous les choix

*Composants système:*

- `InventoryDisplay.vue` - Affichage de l'inventaire
- `StatsPanel.vue` - Affichage des stats du joueur
- `EndingScreen.vue` - Écran de fin avec récapitulatif
- `Modal.vue` - Fenêtre modale (sauvegarde, options)

*Composants UI:*

- `ButtonPrimary.vue` - Bouton principal
- `LoadingSpinner.vue` - Indicateur de chargement
- `AudioController.vue` - Contrôle de la musique/sons

## Mise en place du système de routing

...
<!-- le cours de lundi 10 nov est remis à vendredi 14 nov ce qui signifie qu'on ne se voit pas pendant 7 jours, il serait idéal de leur donner du pain sur la planche puir avancer donc considérer leur montrer Pinia aujourd'hui peut-être?  -->

## Devoirs

### Mémoire interactive

Avancer (sans nécessairement terminer) ce qui a été commencé en classe

- [ ] **Minimum 6-8 composants** créés et fonctionnels
- [ ] **Vue Router** configuré avec 4+ routes
- [ ] **2 stores Pinia** créés avec state/actions/getters de base
- [ ] **Navigation fonctionnelle** entre les pages
- [ ] **Données mockées** affichées correctement

### Trace ton chemin

Avancer (sans nécessairement terminer) ce qui a été commencé en classe:

- [ ] **Minimum 6-8 composants** créés et fonctionnels
- [ ] **Vue Router** configuré avec routes par chapitre
- [ ] **2 stores Pinia** créés avec state/actions/getters de base
- [ ] **Navigation fonctionnelle** entre chapitres
- [ ] **Tous les chapitres** dans le fichier JSON
- [ ] **Affichage du texte** fonctionnel (3-4 chapitres minimum)