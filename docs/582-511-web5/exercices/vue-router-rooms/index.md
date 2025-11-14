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
  - [ ] Définir les routes pour le projet. Une d'elle (celle de room), utilisera un paramètre dynamique (l'id de la salle).

!!! info
    À chaque étape, prenez le temps d'analyser le fichier en cours.

### Affichez la vue `Home` via le router dans `App.vue`

- [ ] Dans le fichier `App.vue`, il faut afficher la `view` active du sytème `router`.

!!! info
    À chaque étape, prenez le temps d'analyser le fichier en cours.

### [Entrez dans le musée]

- [ ] Dans `src/views/HomeView.vue`, créez le lien sur [Entrez dans le musée] avec une route vers le la liste des salles. Voici comment:
- [ ] Dans la méthode `enterMuseum()` créez un lien, de façon programmatique qui crée une navigation vers la liste des salles.
- [ ] Appelez cette méthode au clic du bouton `.enter-button`.

### Liste des salles

- [ ] Dans `src/views/RoomsView.vue`, dans la méthode `goToRoom()`, créez la lien vers la salle dont l'ID est reçu en paramètres dans la méthode.


- [ ] Dans `src/views/RoomDetail.vue`, récupérez l'ID du chapitre depuis l'URL et sotckez le dans la donnée `this.chapterId`.
- Testez le tout. Vous devriez être en mesure de cliquer sur le bouton [Entrez dans le musée] et naviguer vers le chapitre 1 à partir de l'accueil.

!!! info
    À chaque étape, prenez le temps d'analyser le fichier en cours.

### Créez une navigation dynamique parmi les chapitres

- [ ] Dans `src/views/ChapterView.vue`, dans la méthode `created`, récupérez l'ID de la salle depuis l'URL.
- [ ] Dans la méthode `goBack`, naviguez vers la view (page) précédente.


## Notes de cours

- [Vue: Routes](../../vue/router-and-views.md)