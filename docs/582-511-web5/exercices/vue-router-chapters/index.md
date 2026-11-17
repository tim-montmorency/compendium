# **Exercice** "Navigation parmi les chapitres" via Router

## Aperçu du résultat

<div style="max-width: 1280px"><div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe src="https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=6cdddf6d-1970-4409-ad1b-ae5de5b821de&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="1280" height="720" frameborder="0" scrolling="no" allowfullscreen title="apercu.mp4" style="border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;"></iframe></div></div>

## Fichiers de base

[📥 Téléchargez le dossier de départ](./router-chapters-depart.zip)

## Instructions

!!! warning
    Chaque fichier à modifier à une indication `TODO` là où vous devez intervenir et écrire du code.

### Démarrage

- [ ] Téléchargez les fichiers de bases et décompressez (dézippez)
- [ ] Ouvrez dans VS Code et ouvrez le terminal, puis `npm install` pour installer les dépendances
- [ ] Démarrez le projet avec `npm run dev`

### Mise en place du système de routage

- [ ] Ouvrez `package.json` et vérifiez si `Vue Router` est installé dans le projet. Sinon, [installez le](../../vue/router-and-views.html#2-installation-et-configuration).
- [ ] Dans le fichier de configuration des routes `src/router/index.js`
  - [ ] Importez les deux `views`du projet.
  - [ ] Définir les routes pour le projet. Une d'elle (celle de chapter), utilisera une paramètre dynamique (l'id du chapitre).

!!! info
    À chaque étape, prenez le temps d'analyser le fichier en cours.

### Affichez la vue Home via le router dans `App.vue`

- [ ] Dans le fichier `App.vue`, il faut afficher la `view` active du sytème `router`. (TODO: étape 1)
- [ ] Ensuite, supprimez l'importation de HomeView dans ce fichier car il ne sera plus utile car ils sera importé via le Router Vue (TODO étape 2).

!!! info
    À chaque étape, prenez le temps d'analyser le fichier en cours.

### [Commencez l'aventure]

- [ ] Dans `src/views/HomeView.vue`, créez le lien sur [Commencez l'aventure] avec une route vers le premier chapitre. Voici comment:
- [ ] Dans la méthode `startAdventure()` créez un lien, de façon programmatique qui crée une navigation vers le chapitre 1 (`id`: '1').
- [ ] Appelez cette méthode au clic du bouton `.start-button`.
- [ ] Dans `src/views/ChapterView.vue`, récupérez l'ID du chapitre depuis l'URL et sotckez le dans la donnée `this.chapterId`.
- Testez le tout. Vous devriez être en mesure de cliquer sur le bouton [Commencez l'aventure] et naviguer vers le chapitre 1 à partir de l'accueil.

!!! info
    À chaque étape, prenez le temps d'analyser le fichier en cours.

### Créez une navigation dynamique parmi les chapitres

- [ ] Dans `src/views/ChapterView.vue`, dans la méthode `makeChoice`, naviguer vers le prochain chapitre (`nextChapterId`) de façon programmatique.
- [ ] Mettez à jour l'ID local du chapitre `this.chapterId`.
- [ ] Testez le tout en naviguant, en prenant des choix, de chapitre en chapitre.


## Notes de cours

- [Vue: Routes](../../vue/router-and-views.md)