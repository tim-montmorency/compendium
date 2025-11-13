# Pinia en bref

<!-- https://laconsole.dev/formations/vue/pinia -->

> *Pinia = le "cerveau central" de votre application Vue*

[Pinia](https://pinia.vuejs.org/) est une *bibliothèque de stockage* et/ou un *gestionnaire d'état* pour Vue.js. Il permet de partager un état entre les composants ou les views (pages) de l'application par l'intermédiaire d'une zone de stockage partagée appelé *store*.

Le partage de données entre un composant parent et enfant peut-être réalisé classiquement via des `props`et `emit`. Cependant, si nous souhaitons partager un état entre de nombreuses pages/composants, cela devient un peu complexe à gérer.

Voilà pourquoi Pinia existe!

C'est un endroit où vous pouvez stocker des données qui devront être *partagées entre plusieurs composants* Vue.


## 🤔Le problème qu'il résout

### Sans Pinia (le cauchemar)

Imaginez que vous avez:

- Un composant `Header.vue` qui affiche le nom de l'utilisateur
- Un composant `Sidebar.vue` qui liste les salles du musée
- Un composant `MemoryList.vue` qui affiche les mémoires
- Un composant `AddMemoryForm.vue` qui ajoute une mémoire

*Comment faire circuler les données entre tous ces composants?*

```
App.vue (parent)
├── Header.vue (affiche userName)
├── Sidebar.vue (affiche rooms)
└── MainContent.vue
├── MemoryList.vue (affiche memoryList (la liste des souvenirs))
└── AddMemoryForm.vue (ajoute une memory (un souvenir))

```


Sans Pinia, vous devez:

1. Passer les données de parent en enfant avec `props` (fastidieux!)
2. Remonter les événements avec `emits` (complexe!)
3. Dupliquer les données dans plusieurs composants (cauchemar de synchronisation!)

*Exemple sans Pinia (`props` hell):*

```vue
<!-- App.vue -->
<template>
  <Header :userName="userName" />
  <Sidebar :rooms="rooms" @room-added="addRoom" />
  <MainContent 
    :rooms="rooms" 
    :memories="memories"
    @memory-added="addMemory"
  />
</template>

<script>
export default {
  data() {
    return {
      userName: 'Alice',
      rooms: [...],
      memories: [...]
    };
  },
  methods: {
    addRoom(room) { /* ... */ },
    addMemory(memory) { /* ... */ }
  }
}
</script>
```

Vous devez passer TOUT contenu à travers les `props`, même aux composants profondément imbriqués! 😱

## Avec Pinia (la solution élégante)

*Vous créez un "store" (magasin) central* où TOUS les composants peuvent:

- Lire les données directement
- Modifier les données directement
- S'abonner aux changements automatiquement

```vue
<!-- Dans n'importe quel composant, n'importe où -->
<script setup>
/* On importe la méthode use...Store depuis le store qu'on aura préalablement créé */
import { useMuseumStore } from '@/stores/museumStore';

// On stock la méthode dans une constante interne
const museumStore = useMuseumStore();

// Lire des données du store
console.log(museumStore.rooms);

// Ajouter une données au store (ici on ajoute une mémoire)
museumStore.addMemory(roomId, memoryData);
</script>
```

*Magique!* Tous les composants qui utilisent `museumStore` se mettent à jour automatiquement. ✨

## Installation de Pinia

Vérifiez si vous ne l'avez pas déjà installé avec le package Vite. Pour ce faire, ouvrez le ficheir `package.json` et vérifiez si `"pinia"` fait partie de la liste des `"dependencies"`.

Si *Pinia* n'est pas déjà installé, vous pouvez l'installer en entrant cette commande dans votre terminal

```bash
npm install pinia
```

## Initialisation de Pinia

Pour initialiser Pinia, vous devez importer la méthode `createApp()` dans votre fichier `main.js` puis l'enregistrer avec `app.use()`.


```
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// ...

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
```



## Définir un store Pinia

Un store Pinia a *3 parties principales:*

```javascript
// On importe la méthode defineStore depuis le module `pinia` 
import { defineStore } from 'pinia';

// On défnit un store appelé "museum" (ou autre nom adapté à votre projet)
export const useMuseumStore = defineStore('museum', {
  /* 
  1️⃣ STATE - Les données 
  (comme data() dans un composant classique Vue)
  */
  state: () => ({
    rooms: [],
    currentRoomId: null,
    userName: 'Alice'
  }),

  /* 
  2️⃣ GETTERS - Données calculées 
  (comme computed dans un composant classique Vue)
  */
  getters: {
    currentRoom: (state) => {
      return state.rooms.find(r => r.id === state.currentRoomId);
    },
    
    totalMemories: (state) => {
      return state.rooms.reduce((sum, room) => 
        sum + room.memories.length, 0
      );
    }
  },

  /*
  3️⃣ ACTIONS - Fonctions qui modifient le state
  (comme methods dans un composant classique Vue)
  */
  actions: {
    addRoom(room) {
      this.rooms.push(room);
    },
    
    deleteRoom(roomId) {
      const index = this.rooms.findIndex(r => r.id === roomId);
      this.rooms.splice(index, 1);
    }
  }
});
```

## 🔄Comparaison: Composant vs Store

|     Composant Vue    |      Store Pinia     |
|:--------------------:|:--------------------:|
| data()               | state()              |
| computed             | getters              |
| methods              | actions              |
| Local à un composant | Global à toute l'app |


#### C'est comme un composant Vue, mais partagé partout!

## Configuration de stores pour le projet *App web créative*

### Pour *Mémoires interactives*

*Structure des stores suggérée:*

1. *`useMuseumStore`*
   - State: `rooms`, `currentRoomId`, `museumName`, `theme`
   - Actions: `addRoom()`, `updateRoom()`, `deleteRoom()`, `setCurrentRoom()`

2. *`useMemoryStore`*
   - State: `memories`, `filters`, `searchQuery`
   - Actions: `addMemory()`, `updateMemory()`, `deleteMemory()`, `searchMemories()`
   - Getters: `filteredMemories`, `memoriesByRoom`, `memoriesByTag`

3. *`useAuthStore`* (optionnel)
   - State: `user`, `isAuthenticated`
   - Actions: `login()`, `logout()`, `register()`

### Pour *Trace ton chemin*

*Structure des stores suggérée:*

1. *`useStoryStore`*
   - State: `currentChapterId`, `visitedChapters`, `storyData`, `availableChoices`
   - Actions: `loadChapter()`, `makeChoice()`, `goToChapter()`
   - Getters: `currentChapter`, `isChapterUnlocked()`

2. *`usePlayerStore`*
   - State: `playerName`, `karma`, `stats`, `inventory`, `flags`, `relationships`
   - Actions: `addToInventory()`, `updateStat()`, `setFlag()`, `updateRelationship()`
   - Getters: `hasItem()`, `getRelationship()`, `canAccessEnding()`

3. *`useSaveStore`*
   - State: `saveSlots` (array de 3 slots)
   - Actions: `saveGame()`, `loadGame()`, `deleteSave()`, `getSaveInfo()`
   - Getters: `hasSaves`, `latestSave`

4. *`useAudioStore`* (optionnel)
   - State: `currentMusic`, `soundEffects`, `volume`, `isMuted`
   - Actions: `playMusic()`, `playSound()`, `toggleMute()`, `setVolume()`

## Store Pinia de base

Utilisez ce code de base pour débuter:

```javascript
import { defineStore } from 'pinia';

export const useExampleStore = defineStore('example', {
  state: () => ({
    items: [],
    currentItem: null,
    isLoading: false,
    error: null
  }),
  
  getters: {
    itemCount: (state) => state.items.length,
    
    hasItems: (state) => state.items.length > 0,
    
    getItemById: (state) => (id) => {
      return state.items.find(item => item.id === id);
    }
  },
  
  actions: {
    addItem(item) {
      this.items.push({
        ...item,
        id: Date.now().toString(),
        createdAt: new Date().toISOString()
      });
    },
    
    updateItem(id, updates) {
      const index = this.items.findIndex(item => item.id === id);
      if (index !== -1) {
        this.items[index] = { ...this.items[index], ...updates };
      }
    },
    
    deleteItem(id) {
      const index = this.items.findIndex(item => item.id === id);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    },
    
    setCurrentItem(id) {
      this.currentItem = this.getItemById(id);
    }
  }
});
```
