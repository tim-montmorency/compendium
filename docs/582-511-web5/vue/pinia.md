# Pinia en bref

<!-- https://laconsole.dev/formations/vue/pinia -->

> *Pinia = le "cerveau central" de votre application Vue*

Pinia est une *bibliothèque de stockage* ou *gestionnaire d'état* pour Vue.js. Il permet de partager un état entre les compsants/pages de l'application par l'intermédiaire d'une zone de stockage partagée appelé *store*.

Le partage de données entre un composant parent et enfant peut-être réalisé classiquement via des `props`et `emit`Vue.js. Cependant, si nous souhaitons partager un état entre de nombreuses pages/composants, cela devient un peu complexe à gérer.

Voilà pourquoi Pinia existe!

C'est un endroit où vous pouver stockez des données qui devront être **partagées entre plusieurs composants** Vue.


## 🤔Le problème qu'il résout

### Sans Pinia (le cauchemar)

Imaginez que vous avez:

- Un composant `Header.vue` qui affiche le nom de l'utilisateur
- Un composant `Sidebar.vue` qui liste les salles du musée
- Un composant `MemoryList.vue` qui affiche les mémoires
- Un composant `AddMemoryForm.vue` qui ajoute une mémoire

**Comment faire circuler les données entre tous ces composants?**

```
App.vue (parent)
├── Header.vue (affiche userName)
├── Sidebar.vue (affiche rooms)
└── MainContent.vue
├── MemoryList.vue (affiche memories)
└── AddMemoryForm.vue (ajoute une memory)

```


Sans Pinia, vous devez:

1. Passer les données de parent en enfant avec `props` (fastidieux!)
2. Remonter les événements avec `emits` (complexe!)
3. Dupliquer les données dans plusieurs composants (cauchemar de synchronisation!)

**Exemple sans Pinia (`props` hell):**

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

Vous devez passer TOUT à travers les `props`, même aux composants profondément imbriqués! 😱

## Avec Pinia (la solution élégante)

*Vous créez un "store" (magasin) central* où TOUS les composants peuvent:

- Lire les données directement
- Modifier les données directement
- S'abonner aux changements automatiquement

```vue
<!-- N'importe quel composant, n'importe où -->
<script setup>
import { useMuseumStore } from '@/stores/museumStore';

const museumStore = useMuseumStore();

// Lire des données
console.log(museumStore.rooms);

// Ajouter une mémoire
museumStore.addMemory(roomId, memoryData);
</script>


*Magique!* Tous les composants qui utilisent `museumStore` se mettent à jour automatiquement. ✨
```

## Installation de Pinia

Si ce n'est pas déjà fait, voici comment ajouter Pinia à votre projet:

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
import { defineStore } from 'pinia';

// Ici on défnit un store appelé "museum".
export const useMuseumStore = defineStore('museum', {
  // 1️⃣ STATE - Les données (comme data() dans un composant classique Vue)
  state: () => ({
    rooms: [],
    currentRoomId: null,
    userName: 'Alice'
  }),

  // 2️⃣ GETTERS - Données calculées (comme computed dans un composant classique Vue)
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

  // 3️⃣ ACTIONS - Fonctions qui modifient le state (comme methods dans un composant classique Vue)
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

