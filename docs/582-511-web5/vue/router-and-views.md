# Cours: Vue Router et Views

<!-- https://laconsole.dev/formations/vue/vue-router 

<!--
## Objectifs d'apprentissage

- [ ] Configurer Vue Router dans votre projet
- [ ] Créer des routes avec paramètres dynamiques
- [ ] Naviguer entre les pages programmatiquement
- [ ] Protéger des routes (navigation guards)
- [ ] Animer les transitions entre pages
- [ ] Organiser vos Views efficacement


-->

## 📚 1: C'est quoi Vue Router?

Vue Router est le routeur officiel de Vue.js, une bibliothèque JavaScript conçue pour les *applications monopages* (SPA). 

Il permet de gérer la navigation entre les différentes views (pages) d'une application en associant des URL à des composants spécifiques (de type views), sans recharger la page entière. 

Cela signifie que lorsque l'utilisateur navigue vers une nouvelle URL, Vue Router change le contenu de la page en affichant le contenu composant de type views correspondant à cette nouvelle route (bref, ce nouvel URL).

??? question "Pourquoi utiliser Router?"

    ## 🤔 Pourquoi utiliser Router?

    ### Dans une application monopage *SPA* (Single Page App)

    #### Sans Vue Router 

    ```vue
    <!-- App.vue - SANS ROUTER ❌ -->
    <template>
      <div>
        <button @click="currentView = 'home'">Accueil</button>
        <button @click="currentView = 'museum'">Musée</button>
        <button @click="currentView = 'search'">Recherche</button>
        
        <HomeView v-if="currentView === 'home'" />
        <MuseumView v-if="currentView === 'museum'" />
        <SearchView v-if="currentView === 'search'" />
      </div>
    </template>

    <script>
    export default {
      data() {
        return {
          currentView: 'home'
        }
      }
    }
    </script>
    ```
    *Problèmes:*

    - 🚫 Pas d'URL distincte pour chaque page
    - 🚫 Impossible de bookmarker une page spécifique
    - 🚫 Pas de bouton "Retour" du navigateur
    - 🚫 Pas de navigation par URL
    - 🚫 Difficile à maintenir avec beaucoup de pages

    #### Avec Vue Router ✅

    ```vue
    <!-- App.vue - AVEC ROUTER -->
    <template>
      <div>
        <nav>
          <router-link to="/">Accueil</router-link>
          <router-link to="/museum">Musée</router-link>
          <router-link to="/search">Recherche</router-link>
        </nav>
        
        <router-view />
      </div>
    </template>
    ```
    *Avantages:*

    - ✅ URL distincte: `/`, `/museum`, `/search`
    - ✅ Bookmarkable
    - ✅ Bouton "Retour" fonctionne
    - ✅ Navigation par URL directe
    - ✅ Code propre et maintenable



## 🔧 2: Installation et configuration

### Étape 1: Installation

Vérifiez si vous ne l'avez pas déjà installé avec le package Vite. Pour ce faire, ouvrez le ficheir `package.json` et vérifiez si `"vue-router"` fait partie de la liste des `"dependencies"`.

Si *Vue Router* n'est pas déjà installé, vous pouvez l'installer en entrant cette commande dans votre terminal

```bash
npm install vue-router@4
```

### Étape 2: Créer le fichier router.js

*Structure recommandée:*

```
src/
├── router/
│   └── index.js    ← Configuration du router
├── views/          ← Pages (composants de page)
│   ├── HomeView.vue
│   ├── MuseumView.vue
│   └── RoomView.vue
├── components/     ← Composants réutilisables
└── App.vue
```

### Étape 3: Configuration de base

Fichier *`src/router/index.js`:*

```javascript
/* On importe les méthodes nécessaires depuis le module `vue-router` */
import { createRouter, createWebHistory } from 'vue-router';

/* 
On importe les différentes views (pages) du projet, par exemple pour le 
projet "Mémoires interactives", on pourrait imaginer 4 views (pages) de base:
*/
import HomeView from '../views/HomeView.vue';
import MuseumView from '../views/MuseumView.vue';
import RoomView from '../views/RoomView.vue';
import SearchView from '../views/SearchView.vue';

/* Définition des routes dans un tableau [ ] d'objets { } */
const routes = [
  {
    path: '/', // (obligatoire) Contient la portion d'URL
    component: HomeView, // (obligatoire) Fait référence à la View souhaitée
    name: 'home' // (optionnel) Permet de nommer la route pour l'appeler plus simplement
  },
  {
    path: '/museum',
    component: MuseumView,
    name: 'museum'
  },
  {
    path: '/room/:id',  // ← Exemple de route avec paramètre dynamique
    component: RoomView,
    name: 'room'
  },
  {
    path: '/search',
    component: SearchView,
    name: 'search'
  }
];

// Création du router via la méthode createRouter
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // outil d'historique
  routes // contient les routes déclarées préalablement
});

/*
Le routeur étant maintenant configuré, nous allons l'exporter
pour l'importation dans le fichier main.js 
*/
export default router;
```

### Étape 4: Intégrer dans l'application

Fichier *`src/main.js`:*

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // ← Import du router

const app = createApp(App);

app.use(router);  // ← Installation du router
app.mount('#app');
```

### Étape 5: Utiliser dans App.vue

Fichier *`src/App.vue`:*

```vue
<template>
  <div id="app">
    <header>
      <nav>
        <!-- Les liens vers les différentes Views (pages) via <router-link> -->
        <router-link to="/">🏠 Accueil</router-link>
        <router-link to="/museum">🏛️ Musée</router-link>
        <router-link to="/search">🔍 Recherche</router-link>
      </nav>
    </header>
    
    <main>
      <!-- C'est ici que les pages s'affichent via <router-view> -->
      <router-view />
    </main>
  </div>
</template>
```

## 🚀 3: Navigation

### 3.1. Navigation déclarative (`<router-link>`)

Usage basique dans le template html

- *Navigation simple*

  `<router-link to="/museum">Musée</router-link>`

- *Navigation avec nom de route* (recommandé)

  `<router-link :to="{ name: 'museum' }">Musée</router-link>`

- Navigation avec *paramètre dynamique*

  ```vue
  <router-link :to="{ name: 'room', params: { id: 'room-1' } }">
    Voir la salle
  </router-link>
  ```

- Navigation avec *paramètre de requête* (*query string*)

  ```vue
  <router-link :to="{ name: 'search', query: { q: 'tokyo' } }">
    Rechercher Tokyo
  </router-link>
  ```


```vue
<template>
  <nav>
    <!-- Navigation simple -->
    <router-link to="/">Accueil</router-link>
    <router-link to="/museum">Musée</router-link>
    
    <!-- Navigation avec nom de route (recommandé) -->
    <router-link :to="{ name: 'museum' }">Musée</router-link>
    
    <!-- Navigation avec paramètre dynamique -->
    <router-link :to="{ name: 'room', params: { id: 'room-1' } }">
      Voir la salle
    </router-link>
    
    <!-- Navigation avec paramètre de requête (query string) -->
    <router-link :to="{ name: 'search', query: { q: 'tokyo' } }">
      Rechercher Tokyo
    </router-link>
  </nav>
</template>
```


### 3.2. Navigation programmatique (dans les méthodes)

- `this.$router.push`: pour naviguer vers une route spécifique (faire afficher une view (page) spécifique)
- `this.$router.replace`: pour naviguer vers une route spécifique (faire afficher une view (page) spécifique) mais en *empêchant le retour possible en arrière* via la bouton "back" du navigateur (bref, cette méthode remplace l'hitorique de navigation actuelle de l'utilisateur dans l'app)
- `this.$router.back` OU `this.$router.go(-1)`: pour revenir à la view (page) précédente.

```vue
<template>
  <button @click="goToRoom('room-1')">Voir la salle</button>
  <button @click="goBack">Retour</button>
</template>

<script>
export default {
  methods: {
    goToRoom(roomId) {
      // Navigation par nom
      this.$router.push({ 
        name: 'room', 
        params: { id: roomId } 
      });
    },
    
    goToSearch(searchTerm) {
      // Navigation avec query
      this.$router.push({ 
        name: 'search', 
        query: { q: searchTerm } 
      });
    },
    
    goBack() {
      // Retour en arrière
      this.$router.back();
      // ou
      this.$router.go(-1);
    },
    
    replaceRoute() {
      // Remplace l'entrée d'historique (pas de "Retour" possible)
      this.$router.replace({ name: 'home' });
    }
  }
}
</script>
```

*Différence `push` vs `replace`:*

```javascript
// push: Ajoute une entrée (page) à l'historique des pages visitées

// Utilisateur peut revenir en arrière via le "back" du navigateur
this.$router.push({ name: 'room', params: { id: 'room-1' } });

// replace: Remplace l'entrée (la page) actuelle

// Utilisateur ne peut PAS revenir en arrière via le "back" du navigateur 
// (probablement que vous voulez utiliser ça pour trace ton chemin afin 
// d'éviter que l'utilisateur/joueur ne puisse revenir en arrière sur son choix)
this.$router.replace({ name: 'home' });
```

*Quand utiliser replace?*

- ✅ Après login (éviter de revenir au login)
- ✅ Redirection automatique
- ✅ Pages de confirmation



## 🎛️ 4: Paramètres de route

### 4.1. Routes avec paramètres dynamiques

*Configuration des routes dans le fichier `src/router/index.js`:*

```javascript
// router/index.js
const routes = [
  {
    path: '/room/:id', // ← Paramètre dynamique :id récupéré depuis l'URL
    name: 'room',
    component: RoomView
  },
  {
    path: '/memory/:roomId/:memoryId', // ← Plusieurs paramètres dynamiques
    name: 'memory-detail',
    component: MemoryDetailView
  }
];
```

*Accès aux paramètres dynamiques dans la View: `src/views/RoomView.vue`*

```vue
<!-- src/views/RoomView.vue -->
<template>
  <div>
    <h1>Salle: {{ room.name }}</h1>
    <p>ID: {{ roomId }}</p>
  </div>
</template>

<script>
import { useMuseumStore } from '@/stores/museumStore';

export default {
  data() {
    return {
      museumStore: useMuseumStore(),
      roomId: null,
      room: null
    }
  },
  
  created() {
    // Récupérer le paramètre dynamique "id" depuis l'URL
    this.roomId = this.$route.params.id;
    
    // Charger les données de la salle
    this.room = this.museumStore.getRoomById(this.roomId);
  },
  
  watch: {
    // Réagir aux changements de paramètre
    '$route.params.id'(newId) {
      this.roomId = newId;
      this.room = this.museumStore.getRoomById(newId);
    }
  }
}
</script>
```

### 4.2. Paramètre de requête (*query parameters*)

Un paramètre de requête est une information ajoutée à la fin d’une URL pour transmettre des données à une page web ou à une API.

Par exemple:

*URL:* `/search?q=tokyo&tag=culture`

Ce URL contient 2 paramètres de requête:

- `q` qui contient le terme de recherche, dans cet exemple il contient `tokyo`
- `tag` qui contient la catégorie recherchée, dans cet exemple il contient `cultrure`

#### Routes avec paramètre de requête

*Configuration de la route dans le fichier `src/router/index.js`:*

```javascript
// router/index.js
const routes = [
  {
    path: '/search', // Pas de paramètre dans le path
    name: 'search',
    component: SearchView
  }
];
```

*Accès aux paramètres de requête dans la Views: `src/views/SearchView.vue`:*

```vue
<!-- src/views/SearchView.vue -->
<template>
  <div>
    <h1>Recherche: {{ searchQuery }}</h1>
    <p>Tag: {{ selectedTag }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      selectedTag: ''
    }
  },
  
  created() {
    // Récupérer les paramètres de requête "q" et "tag" depuis le URL
    this.searchQuery = this.$route.query.q || '';
    this.selectedTag = this.$route.query.tag || '';
  },
  
  methods: {
    updateSearch(newQuery) {
      // Mettre à jour l'URL avec les nouveaux paramètres de requête
      this.$router.push({
        name: 'search',
        query: {
          q: newQuery,
          tag: this.selectedTag
        }
      });
    }
  },
  
  watch: {
    // Réagir aux changements de paramètres de recherche
    '$route.query': {
      handler(newQuery) {
        this.searchQuery = newQuery.q || '';
        this.selectedTag = newQuery.tag || '';
      },
      deep: true
    }
  }
}
</script>
```


### 🎨 5: Styles CSS actifs

Classe CSS `.router-link-active` est ajoutée automatiquement au liens générés par `<router-link>` qui correspondent à la page en cours.
Vous pouvez donc la styliser pour lui donner un aspect différent des autres liens de la navigation.

```vue
<template>
  <!-- Classe 'router-link-active' ajoutée automatiquement -->
  <router-link to="/museum">Musée</router-link>
</template>

<style>
.router-link-active {
  color: #6366f1;
  font-weight: bold;
  border-bottom: 2px solid #6366f1;
}
</style>
```



## 🗂️ 6: Organisation des routes pour le projet *App web créative*

### Pour "Mémoires interactives"

*Structure des routes suggérée:*

```javascript
// router/index.js
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/museum',
    name: 'museum',
    component: MuseumView,
    meta: { requiresAuth: true }
  },
  {
    path: '/room/:id',
    name: 'room',
    component: RoomView,
    meta: { requiresAuth: true }
  },
  {
    path: '/memory/:roomId/:memoryId',
    name: 'memory-detail',
    component: MemoryDetailView,
    meta: { requiresAuth: true }
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView,
    meta: { requiresAuth: true }
  },
  {
    // connexion (optionnel)
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    // Route page 404
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView
  }
];
```

*Views suggérée* (cela dépend de la structure que vous prévoyez pour votre projet):

1. `HomeView.vue` - Page d'accueil
2. `MuseumView.vue` - Vue d'ensemble des salles
3. `RoomView.vue` - Détail d'une salle avec mémoires
4. `MemoryDetailView.vue` - Détail d'une mémoire
5. `SearchView.vue` - Recherche globale
6. `LoginView.vue` - Connexion (optionnel)



### Pour "Trace ton chemin"

*Structure des routes suggérée:*

```javascript
// router/index.js
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/story',
    name: 'story',
    component: StoryView,
    children: [
      {
        path: 'chapter/:id',
        name: 'chapter',
        component: ChapterView
      }
    ]
  },
  {
    path: '/ending/:id',
    name: 'ending',
    component: EndingView
  },
  {
    path: '/saves',
    name: 'saves',
    component: SavesView
  },
  {
    // Route page 404
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    redirect: { name: 'menu' }
  }
];
```

*Views suggérée* (cela dépend de la structure que vous prévoyez pour votre projet):

1. `HomeView.vue` - Accueil
2. `StoryView.vue` - Container de l'histoire
3. `ChapterView.vue` - Affichage d'un chapitre
4. `EndingView.vue` - Écran de fin
5. `SavesView.vue` - Gestion des sauvegardes


??? tip "Récapitulatif"

    ## 🎓 Récapitulatif

    ### Les 5 concepts clés:

    1. *Vue Router = Navigation entre pages*
      - Chaque page a une URL unique
      - `<router-view />` affiche la page active

    2. *Views vs Composant*
      - View = Page complète avec URL
      - Composant = Bloc réutilisable

    3. *Navigation*
      - Déclarative: `<router-link>`
      - Programmatique: `this.$router.push()`

    4. *Paramètres dynamiques*
      - Route params: `/room/:id`
      - Query params: `/search?q=tokyo`


??? abstract "Ressources supplémentaires"

    ## 📚 Ressources supplémentaires

    *Documentation officielle:*

    - [Vue Router - Getting Started (en anglais)](https://router.vuejs.org/guide/)
    - [Vue Router - Dynamic Routes (en anglais)](https://router.vuejs.org/guide/essentials/dynamic-matching.html)
    - [Vue Router - Navigation Guards (en anglais)](https://router.vuejs.org/guide/advanced/navigation-guards.html)
    - [Vue Router - Transitions (en anglais)](https://router.vuejs.org/guide/advanced/transitions.html)

    *Exemples de code:*
    - [Vue Router Examples](https://github.com/vuejs/router/tree/main/packages/router/playground/examples)

??? question "Questions fréquentes"

    ## ❓ Questions fréquentes

    *Q: View ou Composant?*

    *R:* 

    - Page avec URL → *View* (dans `views/`)
    - Bloc réutilisable → *Composant* (dans `components/`)

    *Q: Quand utiliser `push` vs `replace`?*

    *R:*

    - `push`: Navigation normale (on peut revenir)
    - `replace`: Remplace l'historique (pas de retour), utile après login

    *Q: Comment passer des données entre routes?*

    *R:* 3 options:

    1. *Params*: `/room/:id` → `this.$route.params.id`
    2. *Query*: `/search?q=tokyo` → `this.$route.query.q`
    3. *Store (Pinia)*: Pour données partagées
