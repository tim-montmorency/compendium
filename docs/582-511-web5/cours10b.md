# Cours 10.2


## Révision

[Menu de sushis - Compléter la partie compostante et le calcul du total](https://tim-montmorency.com/timdoc/582-518MO/exercices/sushis-total/#requis-vue---composante-prix-total){ .md-button}

➜ [Solution avec composante et le calcul du total avec "emit"💡](https://cmontmorency365-my.sharepoint.com/:f:/g/personal/mariem_ouellet_cmontmorency_qc_ca/Eqn9ipdhnKpKoqIkHDITICoBlltEz5UwU_XImShgklHAeg?e=P8Z7yH) 


[Mini catalogue de jeux retro](./exercices/vue-catalogue-jeux-retro/index.md){ .md-button}

➜ [Solution](https://cmontmorency365-my.sharepoint.com/:u:/g/personal/mariem_ouellet_cmontmorency_qc_ca/EdWN1jwPTnNJm6vuPRvxsDkBbcBXE1LIWAxUPpG824eyEw?e=j1AEfW) 

<!-- 
## Projet final: Démarrez votre Toggl

 Démarrez votre Toggl (feuille de temps) du projet!
-->


## Cours: Arborescence des `components` et ses `views`

L'arborescence des composants d'une application est la *structure hiérarchique qui organise les différents éléments réutilisables de l'interface utilisateur (UI)*. Elle représente la manière dont les composants sont imbriqués les uns dans les autres, comme des éléments HTML, pour construire une application complète. Cette structure permet de créer des applications complexes en divisant l'interface en morceaux plus petits, indépendants et gérables.

- [L'Arborescence de composants](./vue/architecture-composants.md)
- [Views: pages entières, souvent liées à une route (URL)](./vue/view.md)

## Quiz composantes

- [Quiz groupe AM](https://app.wooclap.com/HISOPU)
- [Quiz groupe PM](https://app.wooclap.com/IMAMPU)

## Rencontre prof et étudiants (par équipe)

Montrez-moi votre configuration Vite+Vue avec *.gitignore*. 

De plus, chaque membre de l'équipe doit être prêt à développer: chacun a fait son *git pull*, son `npm install` et son *node_modules* est complet et prêt à développer avec *Vite* via `npm run dev`.

## Démo de projets

Pour vous aider à visualiser l'objectif du projet, voici des projets assez achevés qui démontrent bien l'objectif du projet *App web créative*. En tout temps en classe, vous pouvez me demander de l'essayer sur mon ordinateur sans regarder le code source, juste pour vous faire une idée du fonctionnement.

### Pour "Mémoires interactives", voici 1 projet en démo

<div style="max-width: 1280px"><div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe src="https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=a8ef39a5-324b-4de7-87d4-e54a3401a781&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="1280" height="720" frameborder="0" scrolling="no" allowfullscreen title="memoires-apercu.mp4" style="border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;"></iframe></div></div>

### Pour "Trace ton chemin", voici 2 projets en démo

<div style="max-width: 1280px"><div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe src="https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=47b37c56-d3a5-4e21-8802-4474729e3453&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="1280" height="720" frameborder="0" scrolling="no" allowfullscreen title="chemin-apercu.mp4" style="border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;"></iframe></div></div>

## SCRUM

SCRUM d'équipe

## Travail en classe et DEVOIR

*À COMPLÉTER POUR LE PROCHAIN COURS*

Afin de suivre le processus, il est de votre responsabilité de compléter cette partie pour le prochain cours.
Ce travail fait partie partiellement de la remise prévue le 19 novembre.

1. *Créer un diagramme* de votre hiérarchie de composants

   - Utilisez draw.io, Figma/Figjam ou papier/crayon

2. *Créer la structure de dossiers* dans votre projet

   ```bash
   src/
   ├── assets/
   ├── components/
   │   ├── common/
   │   ├── layout/
   │   └── specific/
   ├── data/
   ├── router/
   ├── stores/
   ├── views/
   ```

3. *Créer vos composants et vos views* ainsi que les balises de base `<template>`, `<script>`, `<styles>`.

   - Créez les fichiers vides avec structure de base
   - Exemple: `AppHeader.vue`, `RoomCard.vue`, `BaseButton.vue`, `RoomView.vue`, `HomeView.vue`

4. *Documenter vos composants et vos views*

   - Liste dans un fichier `COMPONENTS.md` (sauvegarder dans le dossier `src`de votre projet)
   - Pour chaque composant: nom, responsabilité, props attendues, événements émis (emits)

5. *Mettre à jour votre Trello*: en fonction des composants et views découpées dans votre plan, allez ajouter ou mettre à jour vos tâches dans le Trello. Déjà vous pouvez prioriser et vous distribuer des composants à développer.

5. Pour *Trace ton chemin*, rédaction de vos chapitres dans un Word ou document textuel collaboratif.

<!--
## Création des composants

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

## Création des views

- Création des views (pages liée à un URL)

-->
<!-- - Création du système de routing -->


<!-- le cours de lundi 10 nov est remis à vendredi 14 nov ce qui signifie qu'on ne se voit pas pendant 7 jours, il serait idéal de leur donner du pain sur la planche puir avancer donc considérer leur montrer Pinia aujourd'hui peut-être?  -->

