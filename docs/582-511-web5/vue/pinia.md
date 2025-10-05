# 🎯 Pinia en bref

**Pinia = le "cerveau central" de votre application Vue**

C'est un endroit où vous stockez des données qui doivent être **partagées entre plusieurs composants** Vue.

---

## 🤔 Le problème qu'il résout

### Sans Pinia (le cauchemar):

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
1. Passer les données de parent en enfant avec **props** (fastidieux!)
2. Remonter les événements avec **emits** (complexe!)
3. Dupliquer les données dans plusieurs composants (cauchemar de synchronisation!)

**Exemple sans Pinia (props hell):**

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

Vous devez passer TOUT à travers les props, même aux composants profondément imbriqués! 😱

## Avec Pinia (la solution élégante):

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

## 📦 Anatomie d'un store Pinia

Un store Pinia a *3 parties principales:*

```javascript
import { defineStore } from 'pinia';

export const useMuseumStore = defineStore('museum', {
  // 1️⃣ STATE - Les données (comme data() dans un composant)
  state: () => ({
    rooms: [],
    currentRoomId: null,
    userName: 'Alice'
  }),

  // 2️⃣ GETTERS - Données calculées (comme computed dans un composant)
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

  // 3️⃣ ACTIONS - Fonctions qui modifient le state (comme methods)
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

## 🔄 Comparaison: Composant vs Store

|     Composant Vue    |      Store Pinia     |
|:--------------------:|:--------------------:|
| data()               | state()              |
| computed             | getters              |
| methods              | actions              |
| Local à un composant | Global à toute l'app |


### C'est comme un composant Vue, mais partagé partout!

