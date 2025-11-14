# Exercice "Navigation parmi les chapitres" via Router

## Aperçu du résultat



## Fichiers de base

[📥 Téléchargez le dossier de départ](./router-rooms-depart.zip)

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
  - [ ] Définir les routes pour le projet. Une d'elle (celle de room), utilisera une paramètre dynamique (l'id de la salle).

!!! info
    À chaque étape, prenez le temps d'analyser le fichier en cours.

### Affichez la vue `Home` via le router dans `App.vue`

- [ ] Dans le fichier `App.vue`, il faut afficher la `view` active du sytème `router`.

!!! info
    À chaque étape, prenez le temps d'analyser le fichier en cours.

### [Entrez dans le musée]

- [ ] Dans `src/views/HomeView.vue`, créez le lien sur [Entrez dans le musée] avec une route vers le premier chapitre. Voici comment:
- [ ] Dans la méthode `startAdventure()` créez un lien, de façon programmatique qui crée une navigation vers le chapitre 1 (`id`: '1').
- [ ] Appelez cette méthode au clic du bouton `.start-button`.
- [ ] Dans `src/views/ChapterView.vue`, récupérez l'ID du chapitre depuis l'URL et sotckez le dans la donnée `this.chapterId`.
- Testez le tout. Vous devriez être en mesure de cliquer sur le bouton [Entrez dans le musée] et naviguer vers le chapitre 1 à partir de l'accueil.

!!! info
    À chaque étape, prenez le temps d'analyser le fichier en cours.

### Créez une navigation dynamique parmi les chapitres

- [ ] Dans `src/views/ChapterView.vue`, dans la méthode `makeChoice`, naviguer vers le prochain chapitre (`nextChapterId`) de façon programmatique.
- [ ] Mettez à jour l'ID local du chapitre `this.chapterId`.
- [ ] Testez le tout en naviguant, en prenant des choix, de chapitre en chapitre.


## Notes de cours

- [Vue: Routes](../../vue/router-and-views.md)