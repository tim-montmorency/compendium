# Architecture de composants

## Objectifs d'apprentissage

**Objectifs:**

- ✅ Identifier quand créer un composant
- ✅ Structurer une application Vue en composants réutilisables
- ✅ Organiser vos fichiers et dossiers efficacement
- ✅ Comprendre les relations entre composants (parent-enfant)
- ✅ Appliquer le principe de responsabilité unique

---

## 📚 Partie 1: Pourquoi des composants?

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

**Problèmes:**

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

**Avantages:**

- ✅ Code organisé et lisible
- ✅ Composants réutilisables
- ✅ Travail d'équipe facilité
- ✅ Bugs isolés
- ✅ Performance optimisée

---

## 🏗️ Partie 2: Principe de responsabilité unique

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

**Problèmes:**

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

---

## 📁 Partie 3: Organisation des fichiers

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

**Components:**

- *PascalCase*: `UserProfile.vue`, `MemoryCard.vue`
- Préfixe pour composants de base: `Base`, `App`
  - `BaseButton.vue`
  - `AppHeader.vue`

**Views (pages):**

- *PascalCase* avec suffixe `View`: `HomeView.vue`, `RoomView.vue`

**Stores:**

- *camelCase* avec suffixe `Store`: `museumStore.js`, `memoryStore.js`

---

## 🎨 Partie 4: Types de composants

### 1. Composants de présentation (Presentational)

**Rôle:** Afficher des données, pas de logique <span style="color: #76ec56; cursor: help;" title="Métier = le domaine d'activité, le contexte professionnel de l'application">métier*</span>

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

**Caractéristiques:**

- ✅ Reçoit des données via `props`
- ✅ Émet des événements avec `$emit`
- ✅ Pas d'accès aux stores
- ✅ Réutilisable facilement

### 2. Composants conteneurs (Container)

**Rôle:** Gérer la logique, récupérer les données

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

**Caractéristiques:**

- ✅ Accède aux stores (Pinia)
- ✅ Contient la logique <span style="color: #76ec56; cursor: help;" title="Métier = le domaine d'activité, le contexte professionnel de l'application">métier*</span>
- ✅ Contient des composants de présentation

### 3. Composants de base (Base Components)

**Rôle:** Composants UI réutilisables

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

**Utilisation:**

```vue
<BaseButton variant="primary" @click="save">
  Enregistrer
</BaseButton>

<BaseButton variant="danger" :loading="isDeleting" @click="deleteItem">
  Supprimer
</BaseButton>
```

---

## 🔗 Partie 5: Communication entre composants

### 1. Parent → Enfant: Props

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

### 2. Enfant → Parent: Events ($emit)

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

### 3. Communication complexe: Store (Pinia)

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

---

## 🎯 Partie 6: Application aux projets

### Pour "Mémoires Interactives"

#### Hiérarchie de composants recommandée:

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
        └── MemoryGrid.vue
            └── MemoryCard.vue
                ├── MemoryImage.vue
                ├── MemoryContent.vue
                └── MemoryActions.vue
```

#### Composants à créer (minimum):

**Layout (3):**

1. `AppHeader.vue` - En-tête avec navigation
2. `AppSidebar.vue` - Menu latéral (optionnel)
3. `AppFooter.vue` - Pied de page

**Rooms (4):**
4. `RoomCard.vue` - Carte d'une salle
5. `RoomGrid.vue` - Grille de salles
6. `RoomForm.vue` - Formulaire ajout/édition salle
7. `RoomHeader.vue` - En-tête détail d'une salle

**Memories (6):**
8. `MemoryCard.vue` - Carte d'une mémoire
9. `MemoryGrid.vue` - Grille de mémoires
10. `MemoryForm.vue` - Formulaire ajout/édition mémoire
11. `MemoryDetail.vue` - Vue détaillée d'une mémoire
12. `MemoryImage.vue` - Gestion de l'image
13. `MemoryTags.vue` - Affichage des tags

**UI Communs (4):**
14. `BaseButton.vue` - Bouton réutilisable
15. `BaseModal.vue` - Modal réutilisable
16. `BaseInput.vue` - Input réutilisable
17. `LoadingSpinner.vue` - Indicateur de chargement

**Fonctionnalités (3):**
18. `SearchBar.vue` - Barre de recherche
19. `TagFilter.vue` - Filtre par tags
20. `ExportButton.vue` - Bouton d'export

**Total: ~20 composants**

---

### Pour "Choisis ta Voie"

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

#### Composants à créer (minimum):

**Layout (2):**

1. `AppHeader.vue` - En-tête avec titre
2. `StatsBar.vue` - Barre de statistiques

**Story (8):**
3. `ChapterView.vue` - Vue d'un chapitre
4. `ChapterHeader.vue` - Titre du chapitre
5. `NarrativeText.vue` - Texte de narration
6. `ChoicePanel.vue` - Panel de choix
7. `ChoiceButton.vue` - Bouton de choix
8. `ContinueButton.vue` - Bouton continuer
9. `ProgressBar.vue` - Barre de progression
10. `SaveSlotManager.vue` - Gestion des sauvegardes

**Ending (3):**
11. `EndingScreen.vue` - Écran de fin
12. `EndingBadge.vue` - Badge de fin
13. `ChoiceHistory.vue` - Historique des choix

**UI Communs (4):**
14. `BaseButton.vue`
15. `BaseModal.vue`
16. `StatIndicator.vue` - Indicateur de stat
17. `LoadingSpinner.vue`

**Total: ~17 composants**

---

## 📝 Exercice Pratique (En classe)

### Exercice 1: Identifier les composants (10 min)

Regardez cette maquette et identifiez les composants à créer:

**Pour Mémoires Interactives:**
```
┌─────────────────────────────────────┐
│  [Logo] Musée       🏠 🔍 💾        │ ← AppHeader
├─────────────────────────────────────┤
│                                      │
│  ┌──────────┐  ┌──────────┐        │
│  │ Tokyo    │  │ Paris    │        │ ← RoomCard x3
│  │ 🗾       │  │ 🗼       │        │
│  │ 5 photos │  │ 3 photos │        │
│  └──────────┘  └──────────┘        │
│  ┌──────────┐                       │
│  │ New York │                       │
│  │ 🗽       │                       │
│  │ 0 photos │                       │
│  └──────────┘                       │
│                                      │
│  [+ Nouvelle Destination]           │ ← BaseButton
└─────────────────────────────────────┘
```

**Question:** Combien de composants différents identifiez-vous?

**Réponse:**

1. `AppHeader` (header)
2. `RoomGrid` (conteneur)
3. `RoomCard` (carte répétée)
4. `BaseButton` (bouton ajout)

### Exercice 2: Props ou Emit? (5 min)

Pour chaque scenario, indiquez si vous utiliseriez **Props** ou **Emit**:

1. Afficher le titre d'une mémoire dans `MemoryCard`
   - **Réponse:** Props ✅ (parent → enfant)

2. Notifier le parent qu'un bouton "Supprimer" a été cliqué
   - **Réponse:** Emit ✅ (enfant → parent)

3. Passer l'URL d'une image à afficher
   - **Réponse:** Props ✅

4. Informer qu'un formulaire a été soumis
   - **Réponse:** Emit ✅

5. Afficher ou cacher un modal
   - **Réponse:** Props ✅ (v-model aussi possible)

---

## ✅ Checklist: Bon composant vs Mauvais composant

### Un BON composant:

- ✅ Fait UNE chose et la fait bien
- ✅ Moins de 200 lignes de code
- ✅ Nom clair et descriptif
- ✅ Props bien documentées avec types
- ✅ Émissions d'événements déclarées
- ✅ Réutilisable dans différents contextes
- ✅ Styles scopés (`<style scoped>`)
- ✅ Pas de logique métier complexe (sauf conteneurs)

### Un MAUVAIS composant:

- ❌ Fait trop de choses différentes
- ❌ Plus de 300 lignes
- ❌ Nom vague (`Component1.vue`, `Thing.vue`)
- ❌ Props non typées
- ❌ Dépendances cachées
- ❌ Code dupliqué
- ❌ Styles globaux non nécessaires
- ❌ Logique métier mélangée à la présentation

---

## 🎓 Récapitulatif

### Les 5 principes clés:

1. **Un composant = Une responsabilité**
   - Ne pas mélanger présentation et logique métier

2. **Hiérarchie claire**
   - Parent → Enfant avec Props
   - Enfant → Parent avec Emit
   - Store pour données partagées

3. **Réutilisabilité**
   - Composants de base génériques
   - Props configurables

4. **Organisation des fichiers**
   - `common/`, `layout/`, entités spécifiques
   - Nommage cohérent

5. **Communication explicite**
   - Props typées
   - Events déclarés
   - Pas d'accès direct aux données parents

---

## 📚 Ressources supplémentaires

**Documentation officielle:**

- [Vue.js - Principes fondamentaux des composants​](https://fr.vuejs.org/guide/essentials/component-basics)
- [Vue.js - Enregistrement des composants](https://fr.vuejs.org/guide/components/registration)
- [Vue.js - Props](https://fr.vuejs.org/guide/components/props)
- [Vue.js - Les événements de composant ($emit)](https://fr.vuejs.org/guide/components/events)

**Lectures recommandées:**

- "Thinking in Components" - Vue.js Best Practices
- "Component Design Patterns" - Advanced Vue

---

## 🎯 Travail à faire pour la prochaine fois

### Pour votre projet:

1. **Créer un diagramme** de votre hiérarchie de composants
   - Utilisez draw.io, Excalidraw ou papier/crayon
   - Identifiez les 8-10 composants principaux

2. **Créer la structure de dossiers**

   ```bash
   src/
   ├── components/
   │   ├── common/
   │   ├── layout/
   │   └── specific/
   ```

3. **Créer 3 composants "skeleton"**
   - Créez les fichiers vides avec structure de base
   - Exemple: `AppHeader.vue`, `RoomCard.vue`, `BaseButton.vue`

4. **Documenter vos composants**
   - Liste dans un fichier `COMPONENTS.md`
   - Pour chaque composant: nom, responsabilité, props attendues

---

## ❓ Questions fréquentes

**Q: Combien de composants dois-je créer?**
**R:** Pour votre projet, visez 15-20 composants. Mieux vaut trop découper que pas assez!

**Q: Quand créer un nouveau composant?**
**R:** Dès que:
- Le code dépasse 150 lignes
- Vous copiez-collez du code
- Une section a une responsabilité claire
- Vous voulez réutiliser quelque chose

**Q: Props ou Store?**

**R:** 

- **Props:** Données spécifiques parent → enfant immédiat
- **Store:** Données partagées entre plusieurs composants non liés

**Q: Puis-je modifier une prop dans un composant enfant?**
**R:** NON! Les props sont **read-only**. Utilisez `$emit` pour demander au parent de la modifier.

---

**Bon développement! 🚀**

*Questions? Venez me voir après le cours ou sur Teams!*