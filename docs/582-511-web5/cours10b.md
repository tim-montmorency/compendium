# Cours 10.2
<!-- 5 novembre -->

## Mini cours: Architecture de composants Vue (30 min)

- Architecture de composants
- Views (pages entières, souvent liées à une route (URL))

## Quiz composantes

- [Quiz](https://app.wooclap.com/HISOPU)

## SCRUM

SCRUM d'équipe

## Rencontre prof et étudiants (par équipe)

Montrez-moi votre configuration Vite+Vue avec *.gitignore*. 

De plus, chaque membre de l'équipe doit être prêt à développer: chacun a fait son *git pull*, son `npm install` et son *node_modules* est complet et prêt à développer avec *Vite* via `npm run dev`.

## Démo de projets

Pour vous aider à visualiser l'objectif du projet, voici des projets assez achevés qui démontrent bien l'objectif du projet *App web créative*. En tout temps en classe, vous pouvez me demander de l'essayer sur mon ordinateur sans regarder le code source, juste pour vous faire une idée du fonctionnement.

### Pour "Mémoires interactives", voici 1 projet en démo

<div style="max-width: 1280px"><div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe src="https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=a8ef39a5-324b-4de7-87d4-e54a3401a781&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="1280" height="720" frameborder="0" scrolling="no" allowfullscreen title="memoires-apercu.mp4" style="border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;"></iframe></div></div>

### Pour "Trace ton chemin", voici 2 projets en démo

<div style="max-width: 1280px"><div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe src="https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=47b37c56-d3a5-4e21-8802-4474729e3453&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="1280" height="720" frameborder="0" scrolling="no" allowfullscreen title="chemin-apercu.mp4" style="border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;"></iframe></div></div>

## Création des composants de layout:

### Mémoire interactive

*Composants de layout:*

- `AppHeader.vue` - Navigation principale
- `AppFooter.vue` - Informations, crédits
- `Sidebar.vue` - Menu latéral des salles (optionnel)

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

- Création des views (pages liée à un URL)
- Création du système de routing


<!-- le cours de lundi 10 nov est remis à vendredi 14 nov ce qui signifie qu'on ne se voit pas pendant 7 jours, il serait idéal de leur donner du pain sur la planche puir avancer donc considérer leur montrer Pinia aujourd'hui peut-être?  -->

## Devoirs

1. *Créer un diagramme* de votre hiérarchie de composants

2. *Créer la structure de dossiers* dans votre projet

3. *Créer vos composants en mode "skeleton"*

   - Créez les fichiers vides avec structure de base
   - Exemple: `AppHeader.vue`, `RoomCard.vue`, `BaseButton.vue`

4. *Documenter vos composants*

   - Liste dans un fichier `COMPONENTS.md` (sauvegarder dans le dossier `src`de votre projet)
   - Pour chaque composant: nom, responsabilité, props attendues, événements émis (emits)

5. Pour *Trace ton chemin*, rédaction de vos chapitres dans un Word ou document textuel collaboratif.