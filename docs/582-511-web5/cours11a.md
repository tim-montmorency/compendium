# Cours 11.1 PHASE FONDATION

<!--Foundation - Structure et affichage de base -->

Mercredi 12 novembre


<!-- 
## Projet final: Démarrez votre Toggl

 Démarrez votre Toggl (feuille de temps) du projet!
-->


## Cours: Views et Routes

Retour sur:

<div class="class-content-link">
  <img src="./vue/assets/logo-vue.svg">
  <a href="./vue/view.html"><em>Views</em>: pages entières liées à un URL</a>
</div>

Comment configurer les liens entre ces *Views* (pages) par l'utilisation de *route* (*Vue Router*):

<div class="class-content-link">
  <img src="./vue/assets/logo-vue.svg">
  <a href="./vue/router-and-views.md">Routes entre les différentes <em>views</em> (pages)</a>
</div>

### Exercices *Vue Router*

[Exercices Vue Router](./exercices/vue-routes.md)


## Cours: Pinia

*Pinia* une bibliothèque (`store`) de gestion d'état pour les application Vue.js

<div class="class-content-link">
  <img src="./vue/assets/logo-vue.svg">
  <a href="./vue/pinia.md"><em>Pinia</em>: bibliothèque (<code>store</code>)</a>
</div>

## SCRUM d'équipe

[Mêlée d'équipe](https://tim-montmorency.com/timdoc/582-518MO/gestion-de-projet/melee-scrum/#requis) (SCRUM) de 10 min.


## Travail et en classe sur votre projet

1. *Créer la structure du router*

   - Fichier `router/index.js` avec vos routes prévues
   - Dossier `views/` avec fichiers .vue

2. *Créer les Views skeleton*

   - Chaque View avec template de base
   - Titre et navigation de test

3. *Tester la navigation*

   - Navigation entre toutes les pages
   - Vérifier que les URLs changent

4. *Documenter vos routes*

   - Créer un fichier `ROUTES.md`
   - Lister: path, name, composant, description

*Exemple de documentation:*

```markdown
# Routes de l'application

| Path | Name | Composant | Description |
|------|------|-----------|-------------|
| / | home | HomeView | Page d'accueil |
...
| /room/:id | room | RoomView | Détail d'une salle |
```


### Checklist pour la partie des `routes`

#### Configuration de base

- [ ] Router installé (`npm install vue-router@4`)
- [ ] Fichier `router/index.js` créé
- [ ] Router importé dans `main.js`
- [ ] `<router-view />` dans `App.vue`
- [ ] Minimum 3 routes configurées

#### Views

- [ ] Dossier `views/` créé
- [ ] Minimum 3 Views créées
- [ ] Nommage cohérent (`*View.vue`)
- [ ] Chaque View a une responsabilité claire

#### Navigation

- [ ] `<router-link>` pour la navigation
- [ ] `this.$router.push()` pour navigation programmatique
- [ ] Styles actifs sur les liens (`.router-link-active`)
- [ ] Bouton "Retour" fonctionnel

#### Routes dynamiques

- [ ] Au moins 1 route avec paramètre (par exemple `:id` ou `:chapter`)
- [ ] Accès aux paramètres avec `this.$route.params`
- [ ] `watch: {}` sur les changements de paramètres


## Mise en place de store *Pinia*

### *Mémoire interactive*

#### Création des stores Pinia

- `useMuseumStore.js` (structure de base)
- `useMemoryStore.js` (structure de base)

#### Développement des composants clés

- `RoomCard.vue` (carte de salle)
- `MemoryCard.vue` (carte de mémoire)
- `MemoryList.vue` (liste ou grille des mémoires)

### *Trace ton chemin*

#### Création des stores Pinia

- `useStoryStore.js` (chapitres, navigation)
- `usePlayerStore.js` (état du joueur)

#### Création du fichier JSON avec les chapitres

#### Développement des composants clés

- `ChoiceButton.vue` (bouton de choix)
- `ChoicePanel.vue` (panel de choix)

#### Affichage des 3-4 premiers chapitres (texte statique)

<!--
### Protection (optionnel):

- [ ] Navigation guard configurée (si auth)
- [ ] Routes protégées avec `meta: { requiresAuth: true }`
- [ ] Redirection vers login si non authentifié
-->

## DEVOIR

*À COMPLÉTER POUR LE PROCHAIN COURS*

Afin de suivre le processus, il est de votre responsabilité de compléter cette partie pour le prochain cours.
Ce travail fait partie partiellement de la remise prévue le 19 novembre.

*Mémoire interactive*

### Mémoire interactive:

Terminer ce qui a été commencé en classe:

- [ ] **Minimum 4 composants** créés et fonctionnels
- [ ] **Vue Router** configuré avec 4+ routes
- [ ] **2 stores Pinia** créés avec state/actions/getters de base
- [ ] **Navigation fonctionnelle** entre les pages via les routes
- [ ] **Données mockées** affichées correctement  (données mockée = données fictives pour faire des tests)

### Trace ton chemin

Terminer ce qui a été commencé en classe:

- [ ] **Minimum 4 composants** créés et fonctionnels
- [ ] **Vue Router** configuré avec routes par chapitre
- [ ] **2 stores Pinia** créés avec state/actions/getters de base
- [ ] **Navigation fonctionnelle** entre chapitres via les routes
- [ ] **Tous les chapitres** dans le fichier JSON
- [ ] **Affichage du texte** fonctionnel (3-4 chapitres minimum)