# Arborescence de composants

L'arborescence des composants d'une application est la *structure hiérarchique qui organise les différents éléments réutilisables de l'interface utilisateur (UI)*. Elle représente la manière dont *les composants sont imbriqués les uns dans les autres*, comme des éléments HTML, pour construire une application complète. Cette structure permet de créer des applications complexes en divisant l'interface en morceaux plus **petits**, **indépendants** et **gérables**.

## Objectifs d'apprentissage

- [ ] Identifier quand créer un composant
- [ ] Structurer une application Vue en composants réutilisables
- [ ] Organiser vos fichiers et dossiers efficacement
- [ ] Comprendre les relations entre composants (parent-enfant)
- [ ] Appliquer le principe de responsabilité unique

## Fonctionnement

### Imbrication de composants

Une application est construite en imbriquant des composants les uns dans les autres. Par exemple, le composant racine peut contenir des composants enfants, qui à leur tour peuvent contenir d'autres composants.

### Division de l'interface (UI)

L'arborescence permet de diviser l'interface utilisateur en blocs de code réutilisables et isolés. Chaque composant encapsule sa propre structure (HTML), sa logique (JavaScript) et son style (CSS).

## Exemple concret

L'arborescence d'une application de liste de tâches pourrait ressembler à ceci :

- Un composant racine `App`.
- Qui pourrait contenir un composant pour le champ textuel pour ajouter un tâche à la liste `InputComponent`, un composant pour le bouton `ButtonComponent` et un composant liste `TodoListComponent`.
- Et le `TodoListComponent` pourrait contenir une liste de composants de tâche individuelle `TodoItemComponent`.

## 📚 1: Pourquoi des composants?

### Le problème sans composants

Imaginez une application dans un seul fichier de 2000 lignes:

```vue
<!-- App.vue - MAUVAIS EXEMPLE ❌ -->
<template>
  <div>
    <!-- Header -->
    <header>...</header>
    
    <!-- Navigation -->
    <nav>...</nav>
    
    <!-- Liste des salles -->
    <div class="rooms">...</div>
    
    <!-- Formulaire d'ajout -->
    <form>...</form>
    
    <!-- Modal -->
    <div class="modal">...</div>
    
    <!-- Footer -->
    <footer>...</footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 50 variables ici...
    }
  },
  methods: {
    // 30 méthodes ici...
  }
}
</script>

<style>
/* 500 lignes de CSS... */
</style>
```

*Problèmes:*

- 🚫 Difficile à maintenir
- 🚫 Code non réutilisable
- 🚫 Impossible de travailler en équipe efficacement
- 🚫 Bugs difficiles à isoler
- 🚫 Lent à charger

### La solution: Les composants

```vue
<!-- App.vue - BON EXEMPLE ✅ -->
<template>
  <div>
    <AppHeader />
    <AppNavigation />
    <RoomsList />
    <AddRoomModal v-if="showModal" />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppNavigation from './components/AppNavigation.vue';
import RoomsList from './components/RoomsList.vue';
import AddRoomModal from './components/AddRoomModal.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppNavigation,
    RoomsList,
    AddRoomModal,
    AppFooter
  }
}
</script>
```

*Avantages:*

- ✅ Code organisé et lisible
- ✅ Composants réutilisables
- ✅ Travail d'équipe facilité
- ✅ Bugs isolés
- ✅ Performance optimisée



## 🏗️ 2: Principe de responsabilité unique

### La règle d'or

> **Un composant = Une responsabilité**

### ❌ Mauvais exemple: Composant qui fait trop

```vue
<!-- UserDashboard.vue - TROP DE RESPONSABILITÉS -->
<template>
  <div>
    <!-- Affiche le profil -->
    <div class="profile">
      <img :src="user.avatar" />
      <h2>{{ user.name }}</h2>
      <button @click="editProfile">Modifier</button>
    </div>
    
    <!-- Affiche les statistiques -->
    <div class="stats">
      <div>Posts: {{ user.posts }}</div>
      <div>Followers: {{ user.followers }}</div>
    </div>
    
    <!-- Affiche la liste des posts -->
    <div class="posts">
      <div v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
        <button @click="likePost(post.id)">Like</button>
        <button @click="deletePost(post.id)">Delete</button>
      </div>
    </div>
    
    <!-- Formulaire d'ajout de post -->
    <form @submit.prevent="addPost">
      <input v-model="newPost.title" />
      <textarea v-model="newPost.content"></textarea>
      <button>Publier</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      posts: [],
      newPost: {},
      // ... beaucoup trop de données
    }
  },
  methods: {
    editProfile() { /* ... */ },
    likePost() { /* ... */ },
    deletePost() { /* ... */ },
    addPost() { /* ... */ },
    // ... beaucoup trop de méthodes
  }
}
</script>
```

*Problèmes:*

- Composant fait 4 choses différentes
- Difficile à tester
- Difficile à maintenir

### ✅ Bon exemple: Découpage logique

```vue
<!-- UserDashboard.vue - BIEN DÉCOUPÉ -->
<template>
  <div class="dashboard">
    <UserProfile :user="user" @edit="editProfile" />
    <UserStats :stats="userStats" />
    <PostList :posts="posts" @like="likePost" @delete="deletePost" />
    <PostForm @submit="addPost" />
  </div>
</template>

<script>
import UserProfile from './UserProfile.vue';
import UserStats from './UserStats.vue';
import PostList from './PostList.vue';
import PostForm from './PostForm.vue';

export default {
  components: {
    UserProfile,
    UserStats,
    PostList,
    PostForm
  },
  // Logique simplifiée car déléguée aux composants enfants
}
</script>
```

Chaque composant a **UNE seule responsabilité**:

- `UserProfile` → Afficher et éditer le profil
- `UserStats` → Afficher les statistiques
- `PostList` → Afficher la liste des posts
- `PostForm` → Formulaire d'ajout



## 📁 3: Organisation des fichiers

### Structure recommandée pour vos projets

```
src/
├── components/
│   ├── common/           ← Composants réutilisables partout
│   │   ├── BaseButton.vue
│   │   ├── BaseInput.vue
│   │   ├── BaseModal.vue
│   │   └── LoadingSpinner.vue
│   │
│   ├── layout/           ← Composants de structure de mise en page
│   │   ├── AppHeader.vue
│   │   ├── AppFooter.vue
│   │   ├── AppSidebar.vue
│   │   └── AppNavigation.vue
│   │
│   └── [specific]/        ← Composants spécifiques au domaine
│       ├── RoomCard.vue
│       ├── RoomList.vue
│       ├── MemoryCard.vue
│       └── MemoryForm.vue
│
├── views/                ← Pages (routes)
│   ├── HomeView.vue
│   ├── MuseumView.vue
│   ├── RoomView.vue
│   └── SearchView.vue
│
├── stores/               ← Stores Pinia
│   ├── museumStore.js
│   └── memoryStore.js
│
├── router/
│   └── index.js
│
├── assets/
│   ├── styles/
│   │   ├── main.css
│   │   ├── variables.css
│   │   └── animations.css
│   └── images/
│
├── composables/          ← Logique réutilisable
│   └── useLocalStorage.js
│
├── utils/                ← Fonctions utilitaires
│   └── helpers.js
│
├── App.vue
└── main.js
```

### Conventions de nommage

*Components:*

- *PascalCase*: `UserProfile.vue`, `MemoryCard.vue`
- Préfixe pour composants de base: `Base`, `App`
  - `BaseButton.vue`
  - `AppHeader.vue`

*Views (pages):*

- *PascalCase* avec suffixe `View`: `HomeView.vue`, `RoomView.vue`

*Stores:*

- *camelCase* avec suffixe `Store`: `museumStore.js`, `memoryStore.js`



## 🎨 4: Types de composants

### 1. Composants de présentation (Presentational)

*Rôle:* Afficher des données, pas de logique <span style="color: #76ec56; cursor: help;" title="Métier = le domaine d'activité, le contexte professionnel de l'application">métier*</span>

```vue
<!-- MemoryCard.vue - PRÉSENTATIONNEL | Dans cet exemple: carte d'un contenu -->
<template>
  <div class="memory-card">
    <img :src="memory.image" :alt="memory.title" />
    <h3>{{ memory.title }}</h3>
    <p>{{ memory.description }}</p>
    <div class="tags">
      <span v-for="tag in memory.tags" :key="tag">{{ tag }}</span>
    </div>
    <button @click="$emit('edit', memory.id)">Éditer</button>
  </div>
</template>

<script>
export default {
  props: {
    memory: {
      type: Object,
      required: true
    }
  },
  emits: ['edit']
}
</script>
```

*Caractéristiques:*

- ✅ Reçoit des données via `props`
- ✅ Émet des événements avec `$emit`
- ✅ Pas d'accès aux stores
- ✅ Réutilisable facilement

### 2. Composants conteneurs (Container)

*Rôle:* Gérer la logique, récupérer les données

```vue
<!-- MemoryList.vue - CONTENEUR | Dans cet exemple: liste de cartes -->
<template>
  <div class="memory-list">
    <MemoryCard
      v-for="memory in memories"
      :key="memory.id"
      :memory="memory"
      @edit="handleEdit"
    />
  </div>
</template>

<script>
import { useMemoryStore } from '@/stores/memoryStore';
import MemoryCard from './MemoryCard.vue';

export default {
  components: { MemoryCard },
  
  data() {
    return {
      memoryStore: useMemoryStore()
    }
  },
  
  computed: {
    memories() {
      return this.memoryStore.memories;
    }
  },
  
  methods: {
    handleEdit(memoryId) {
      // Logique d'édition
      this.memoryStore.editMemory(memoryId);
    }
  }
}
</script>
```

*Caractéristiques:*

- ✅ Accède aux stores (Pinia)
- ✅ Contient la logique <span style="color: #76ec56; cursor: help;" title="Métier = le domaine d'activité, le contexte professionnel de l'application">métier*</span>
- ✅ Contient des composants de présentation

### 3. Composants de base (Base Components)

*Rôle:* Composants UI réutilisables

```vue
<!-- BaseButton.vue | Dans cet exemple: un bouton -->
<template>
  <button 
    :class="['btn', `btn-${variant}`, { 'btn-loading': loading }]"
    :disabled="disabled || loading"
    @click="$emit('click')"
  >
    <span v-if="loading" class="spinner"></span>
    <slot v-else></slot>
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'danger'].includes(value)
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click']
}
</script>
```

*Utilisation:*

```vue
<BaseButton variant="primary" @click="save">
  Enregistrer
</BaseButton>

<BaseButton variant="danger" :loading="isDeleting" @click="deleteItem">
  Supprimer
</BaseButton>
```



## 🔗 5: Communication entre composants

### 5.1. Parent → Enfant: Props

```vue
<!-- Parent.vue -->
<template>
  <MemoryCard 
    :memory="selectedMemory" 
    :show-actions="true"
  />
</template>

<script>
export default {
  data() {
    return {
      selectedMemory: {
        id: 1,
        title: 'Mon souvenir',
        description: 'Description...'
      }
    }
  }
}
</script>
```

```vue
<!-- MemoryCard.vue (Enfant) -->
<script>
export default {
  props: {
    memory: {
      type: Object,
      required: true
    },
    showActions: {
      type: Boolean,
      default: false
    }
  }
}
</script>
```

### 5.2. Enfant → Parent: Events ($emit)

```vue
<!-- Enfant: MemoryForm.vue -->
<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="title" />
    <button type="submit">Créer</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    handleSubmit() {
      // Émet un événement vers le parent
      this.$emit('create', { title: this.title });
      this.title = ''; // Reset
    }
  },
  emits: ['create'] // Déclarer les events (bonne pratique)
}
</script>
```

```vue
<!-- Parent: RoomView.vue -->
<template>
  <MemoryForm @create="addMemory" />
</template>

<script>
export default {
  methods: {
    addMemory(memoryData) {
      console.log('Nouvelle mémoire:', memoryData);
      // Logique d'ajout...
    }
  }
}
</script>
```

### 5.3. Communication complexe: Store (Pinia)

Quand plusieurs composants non liés ont besoin d'accéder aux mêmes données:

```vue
<!-- N'importe quel composant -->
<script>
import { useMemoryStore } from '@/stores/memoryStore';

export default {
  data() {
    return {
      memoryStore: useMemoryStore()
    }
  },
  
  computed: {
    memories() {
      return this.memoryStore.memories;
    }
  },
  
  methods: {
    addMemory(data) {
      this.memoryStore.addMemory(data);
    }
  }
}
</script>
```



## 🎯 6: Application aux projets

### Pour "Mémoires interactives" (ou musée de voyages ou de créations)

#### Démo d'un projet en exemple

<div style="max-width: 1280px"><div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe src="https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=a8ef39a5-324b-4de7-87d4-e54a3401a781&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="1280" height="720" frameborder="0" scrolling="no" allowfullscreen title="memoires-apercu.mp4" style="border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;"></iframe></div></div>

#### Hiérarchie de composants recommandée:

Pour l'équipe qui fait un musée de *créations*: vous pouvez changer le mot *Memory* pour *Creation* dans vos noms de composantes.

```
App.vue
├── AppHeader.vue
├── AppNavigation.vue
└── Router View
    ├── HomeView.vue
    ├── MuseumView.vue
    │   └── RoomGrid.vue
    │       └── RoomCard.vue
    │           ├── RoomHeader.vue
    │           └── RoomActions.vue
    │
    └── RoomView.vue
        ├── RoomHeader.vue
        ├── SearchBar.vue
        ├── TagFilters.vue
        └── MemoryGrid.vue (ou MemoryList.vue)
            └── MemoryCard.vue
                ├── MemoryImage.vue
                ├── MemoryContent.vue
                └── MemoryActions.vue
```

#### Suggestion de découpage par composant (dépendemment de votre intention)

*Mise en page (layout) (2):*

- `AppHeader.vue` - En-tête avec navigation
- `AppFooter.vue` - Pied de page

*Salles (4):*

- `RoomCard.vue` - Carte d'une salle
- `RoomGrid.vue` ou `RoomList` - Grille ou liste de salles
- `RoomForm.vue` - Formulaire ajout/édition salle
- `RoomHeader.vue` - En-tête détail d'une salle

*Mémoires:* ou *Créations*: changer le mot *Memory* pour *Creation* dans vos noms de composantes

- `MemoryCard.vue` - Carte d'une mémoire
- `MemoryGrid.vue` ou `MemoryList.vue` - Grille ou liste des cartes des mémoires
- `MemoryForm.vue` - Formulaire ajout/édition mémoire
- `MemoryDetail.vue` - Vue détaillée d'une mémoire
- `MemoryImage.vue` - Gestion de l'image
- `MemoryTags.vue` - Affichage des tags

*UI Communs:*

- `BaseButton.vue` - Bouton réutilisable
- `BaseModal.vue` - Modal réutilisable
- `BaseInput.vue` - Input réutilisable
- `LoadingSpinner.vue` - Indicateur de chargement

*Fonctionnalités:*

- `SearchBar.vue` - Barre de recherche (optionnel, au delà du MVP)
- `TagFilter.vue` - Filtre par tags (optionnel, au delà du MVP)
- `ExportButton.vue` - Bouton d'export (optionnel, au delà du MVP)

*Total: ~20 composants*

---

### Pour "Trace ton chemin"

#### Démo de 2 projets de ce type en exemple

<div style="max-width: 1280px"><div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe src="https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=47b37c56-d3a5-4e21-8802-4474729e3453&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="1280" height="720" frameborder="0" scrolling="no" allowfullscreen title="chemin-apercu.mp4" style="border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;"></iframe></div></div>

#### Hiérarchie de composants recommandée:

```
App.vue
├── AppHeader.vue
│   └── StatsBar.vue
│       └── StatIndicator.vue
└── Router View
    ├── MenuView.vue
    │   └── MenuButton.vue
    │
    └── StoryView.vue
        ├── ChapterHeader.vue
        ├── NarrativeText.vue
        │   └── TextParagraph.vue
        ├── ChoicePanel.vue
        │   └── ChoiceButton.vue
        │       ├── ChoiceText.vue
        │       └── ChoiceHint.vue
        ├── ContinueButton.vue
        └── EndingScreen.vue
            ├── EndingBadge.vue
            ├── StatsSummary.vue
            └── ChoiceHistory.vue
```

#### Suggestion de découpage par composant (dépendemment de votre intention)

*Layout:*

- `AppHeader.vue` - En-tête avec titre
- `StatsBar.vue` - Barre de statistiques

*Story:*

- `ChapterView.vue` - Vue d'un chapitre
- `ChapterHeader.vue` - Titre du chapitre
- `NarrativeText.vue` - Texte de narration
- `ChoicePanel.vue` - Panel de choix
- `ChoiceButton.vue` - Bouton de choix
- `ContinueButton.vue` - Bouton continuer
- `ProgressBar.vue` - Barre de progression
- `SaveSlotManager.vue` - Gestion des sauvegardes

*Ending:*

- `EndingScreen.vue` - Écran de fin
- `EndingBadge.vue` - Badge de fin (optionnel)
- `ChoiceHistory.vue` - Historique des choix

*UI Communs:*

- `BaseButton.vue`
- `BaseModal.vue`
- `StatIndicator.vue` - Indicateur de stat
- `LoadingSpinner.vue`

*Total: ~17 composants*



## 📝 Exercice Pratique (En classe)

- [Quiz](https://app.wooclap.com/HISOPU)

### Exercice 1: Identifier les composants

Regardez cette maquette et identifiez les composants à créer:

```
┌─────────────────────────────────────┐
│  [Logo] Musée                       │
├─────────────────────────────────────┤
│                                     │
│  ┌──────────┐  ┌──────────┐         │
│  │ Tokyo    │  │ Paris    │         │
│  │          │  │          │         │
│  │ 5 photos │  │ 3 photos │         │
│  └──────────┘  └──────────┘         │
│  ┌──────────┐                       │
│  │ New York │                       │
│  │          │                       │
│  │ 0 photos │                       │
│  └──────────┘                       │
│                                     │
│  [+ Ajouter une destination]        │
└─────────────────────────────────────┘
```

### Exercice 2: Props ou Emit?

Pour chaque scenario, indiquez si vous utiliseriez *Props* ou *Emit*:

1. Afficher le titre d'une mémoire dans `MemoryCard`

2. Notifier le parent qu'un bouton "Supprimer" a été cliqué

3. Passer l'URL d'une image à afficher

4. Informer qu'un formulaire a été soumis

5. Afficher ou cacher un modal


### Solution Exercice 1: Identifier les composants

Regardez cette maquette et identifiez les composants à créer:

*Pour Mémoires Interactives:*
```
┌─────────────────────────────────────┐
│  [Logo] Musée                       │   ← AppHeader
├─────────────────────────────────────┤
│                                     │
│  ┌──────────┐  ┌──────────┐         │
│  │ Tokyo    │  │ Paris    │         │   ← RoomCard x3
│  │          │  │          │         │
│  │ 5 photos │  │ 3 photos │         │
│  └──────────┘  └──────────┘         │
│  ┌──────────┐                       │
│  │ New York │                       │
│  │          │                       │
│  │ 0 photos │                       │
│  └──────────┘                       │
│                                     │
│  [+ Ajouter une destination]        │   ← BaseButton
└─────────────────────────────────────┘
```

*Question:* Combien de composants différents identifiez-vous?

*Réponse:*

1. `AppHeader` (header)
2. `RoomGrid` (conteneur)
3. `RoomCard` (carte répétée)
4. `BaseButton` (bouton ajout)

### Solution Exercice 2: Props ou Emit? (5 min)

Pour chaque scenario, indiquez si vous utiliseriez *Props* ou *Emit*:

1. Afficher le titre d'une mémoire dans `MemoryCard`
   - *Réponse:* Props ✅ (parent → enfant)

2. Notifier le parent qu'un bouton "Supprimer" a été cliqué
   - *Réponse:* Emit ✅ (enfant → parent)

3. Passer l'URL d'une image à afficher
   - *Réponse:* Props ✅

4. Informer qu'un formulaire a été soumis
   - *Réponse:* Emit ✅

5. Afficher ou cacher un modal
   - *Réponse:* Props ✅ (v-model aussi possible)




## ✅ Checklist: Bon composant vs Mauvais composant

### Un BON composant:

- ✅ Un composant fait UNE seule chose et la fait bien
- ✅ Moins de 200 lignes de code
- ✅ Nom clair et descriptif
- ✅ Props bien documentées avec types (ex: `props: { title: String, inStock: Boolean}`)
- ✅ Émissions d'événements déclarées (`emits`)
- ✅ Réutilisable dans différents contextes
- ✅ Styles scopés (`<style scoped>`)
- ✅ Pas de logique  <span style="color: #76ec56; cursor: help;" title="Métier = le domaine d'activité, le contexte professionnel de l'application">métier*</span> complexe (sauf les composants de type conteneurs dont le rôle est de gérer la logique et récupérer les données)

### Un MAUVAIS composant:

- ❌ Fait trop de choses différentes
- ❌ Plus de 300 lignes
- ❌ Nom vague (`Component1.vue`, `Thing.vue`)
- ❌ Props non typées
- ❌ Dépendances cachées
- ❌ Code dupliqué
- ❌ Styles globaux non nécessaires
- ❌ Logique  <span style="color: #76ec56; cursor: help;" title="Métier = le domaine d'activité, le contexte professionnel de l'application">métier*</span> mélangée à la présentation



## 🎓 Récapitulatif

### Les 5 principes clés:

1. *Un composant = Une responsabilité*
   - Ne pas mélanger présentation et logique

2. *Hiérarchie claire*
   - Parent → Enfant avec *Props*
   - Enfant → Parent avec *Emit*
   - Store *Pinia* pour données partagées entre plusieurs composants

3. *Réutilisabilité*
   - Composants de base génériques
   - Props configurables

4. *Organisation des fichiers*
   - `common/`, `layout/`, entités spécifiques
   - Nommage cohérent

5. *Communication explicite*
   - Props typées
   - Émissions d'événements déclarées
 <!-- - Pas d'accès direct aux données parents -->



## 📚 Ressources supplémentaires

*Documentation officielle*

- [Vue.js - Principes fondamentaux des composants​](https://fr.vuejs.org/guide/essentials/component-basics)
- [Vue.js - Enregistrement des composants](https://fr.vuejs.org/guide/components/registration)
- [Vue.js - Props](https://fr.vuejs.org/guide/components/props)
- [Vue.js - Les événements de composant ($emit)](https://fr.vuejs.org/guide/components/events)

*Lectures recommandées:*

- "Thinking in Components" - Vue.js Best Practices
- "Component Design Patterns" - Advanced Vue


## 🎯 Travail à faire

### Pour votre projet

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

5. Pour *Trace ton chemin*, rédaction de vos chapitres dans un Word ou document textuel collaboratif.



## ❓ Questions fréquentes

*Q: Combien de composants dois-je créer?*

*R:* Pour votre projet, visez 15-20 composants. Mieux vaut trop découper que pas assez! Lorsque vous commencez à développer, priorisez les composants nécessaires au MVP (Minimum Viable Product) de votre projet.

*Q: Quand créer un nouveau composant?*

*R:* Dès que:

- Le code dépasse 150 lignes
- Vous copiez-collez du code
- Une section a une responsabilité claire
- Vous voulez réutiliser quelque chose

*Q: Props ou Store?*

*R:* 

- *Props:* Données spécifiques parent → enfant immédiat
- *Store:* Données partagées entre plusieurs composants non liés

*Q: Puis-je modifier une prop dans un composant enfant?*

*R:* NON! Les props sont *read-only*. Utilisez `$emit` pour demander au parent de la modifier.
