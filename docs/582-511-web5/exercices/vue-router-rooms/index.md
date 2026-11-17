# **Exercice** "Navigation parmi les salles" via Router

## Aperçu du résultat

<div style="max-width: 1280px"><div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe src="https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=413d8594-bda3-418d-841c-37a2d5ce6ab4&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="1280" height="720" frameborder="0" scrolling="no" allowfullscreen title="apercu-rooms.mp4" style="border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;"></iframe></div></div>

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

### Créez une navigation dynamique parmi les salles

- [ ] Dans `src/views/RoomsView.vue`, dans la méthode `goToRoom()`, créez le lien vers la salle dont l'ID est reçu en paramètres dans la méthode.


!!! info
    À chaque étape, prenez le temps d'analyser le fichier en cours.

### Dans la view d'une salle, récupérez l'ID du URL

- [ ] Dans `src/views/RoomDetail.vue`, dans la méthode `created`, récupérez l'ID de la salle depuis l'URL.
- [ ] Dans la méthode `goBack`, naviguez vers la view (page) précédente.


## Notes de cours

- [Vue: Routes](../../vue/router-and-views.md)