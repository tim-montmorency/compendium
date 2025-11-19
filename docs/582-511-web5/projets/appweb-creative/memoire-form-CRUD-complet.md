# CRUD des mémoires

## 📝 Formulaires d'ajout/édition

### Composant de base : `MemoryForm.vue`

```vue
<template>
  <form @submit.prevent="handleSubmit" class="memory-form">
    <h2>{{ isEditing ? 'Modifier' : 'Ajouter' }} une mémoire</h2>
    
    <!-- Titre -->
    <div class="form-group">
      <label for="title">Titre *</label>
      <input 
        id="title"
        v-model="formData.title" 
        type="text"
        required
        placeholder="Ex: Mon premier vélo"
      >
      <span v-if="errors.title" class="error">{{ errors.title }}</span>
    </div>
    
    <!-- Description -->
    <div class="form-group">
      <label for="description">Description *</label>
      <textarea 
        id="description"
        v-model="formData.description"
        required
        rows="5"
        placeholder="Racontez votre souvenir..."
      ></textarea>
    </div>
    
    <!-- Date -->
    <div class="form-group">
      <label for="date">Date</label>
      <input 
        id="date"
        v-model="formData.date" 
        type="date"
      >
    </div>
    
    <!-- Upload image -->
    <div class="form-group">
      <label for="image">Photo</label>
      <input 
        id="image"
        type="file" 
        accept="image/*"
        @change="handleImageUpload"
      >
      <img v-if="formData.imagePreview" :src="formData.imagePreview" class="preview">
    </div>
    
    <!-- Tags -->
    <div class="form-group">
      <label>Tags</label>
      <div class="tag-selector">
        <label v-for="tag in availableTags" :key="tag">
          <input 
            type="checkbox" 
            :value="tag"
            v-model="formData.tags"
          >
          {{ tag }}
        </label>
      </div>
    </div>
    
    <!-- Boutons -->
    <div class="form-actions">
      <button type="button" @click="cancel" class="btn-cancel">
        Annuler
      </button>
      <button type="submit" class="btn-submit">
        {{ isEditing ? 'Modifier' : 'Ajouter' }}
      </button>
    </div>
  </form>
</template>

<script>
import { useMemoryStore } from '@/stores/memoryStore';

export default {
  name: 'MemoryForm',
  
  props: {
    // Si on édite, on reçoit la mémoire existante
    memory: {
      type: Object,
      default: null
    },
    roomId: {
      type: String,
      required: true
    }
  },
  
  data() {
    return {
      formData: {
        title: '',
        description: '',
        date: '',
        image: null,
        imagePreview: null,
        tags: []
      },
      errors: {},
      availableTags: ['Famille', 'Amis', 'Voyage', 'Enfance', 'Cadeau']
    };
  },
  
  computed: {
    isEditing() {
      return this.memory !== null;
    }
  },
  
  created() {
    // Si on édite, pré-remplir le formulaire
    if (this.isEditing) {
      this.formData = { ...this.memory };
    }
  },
  
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      
      // Validation taille (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert('Image trop grande (max 2MB)');
        return;
      }
      
      // Convertir en base64 pour localStorage
      const reader = new FileReader();
      reader.onload = (e) => {
        this.formData.image = e.target.result;
        this.formData.imagePreview = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    
    validateForm() {
      this.errors = {};
      
      if (!this.formData.title.trim()) {
        this.errors.title = 'Le titre est obligatoire';
      }
      
      if (!this.formData.description.trim()) {
        this.errors.description = 'La description est obligatoire';
      }
      
      return Object.keys(this.errors).length === 0;
    },
    
    handleSubmit() {
      if (!this.validateForm()) {
        return;
      }
      
      const memoryStore = useMemoryStore();
      
      if (this.isEditing) {
        // UPDATE
        memoryStore.updateMemory(this.memory.id, this.formData);
      } else {
        // CREATE
        memoryStore.addMemory(this.roomId, this.formData);
      }
      
      // Émettre un événement pour fermer le formulaire
      this.$emit('saved');
    },
    
    cancel() {
      this.$emit('cancel');
    }
  }
};
</script>

<style scoped>

</style>
```


## 🔄 CRUD Complet dans le Store Pinia

### `stores/memoryStore.js`

```javascript
import { defineStore } from 'pinia';

export const useMemoryStore = defineStore('memory', {
  state: () => ({
    rooms: [
      {
        id: 'room-1',
        name: 'Enfance',
        color: '#FFB6C1',
        memories: []
      },
      {
        id: 'room-2',
        name: 'Voyages',
        color: '#87CEEB',
        memories: []
      }
    ]
  }),
  
  getters: {
    filteredMemories: (state) => () => {
      
    },
    

    // Obtenir toutes les mémoires d'une salle
    getMemoriesByRoom: (state) => (roomId) => {
      const room = state.rooms.find(r => r.id === roomId);
      return room ? room.memories : [];
    },
    
    // Obtenir UNE mémoire spécifique
    getMemoryById: (state) => (memoryId) => {
      for (const room of state.rooms) {
        const memory = room.memories.find(m => m.id === memoryId);
        if (memory) return memory;
      }
      return null;
    }
  },
  
  actions: {
    // ✅ CREATE - Ajouter une mémoire
    addMemory(roomId, memoryData) {
      const room = this.rooms.find(r => r.id === roomId);
      
      if (!room) {
        console.error('Salle introuvable');
        return;
      }
      
      const newMemory = {
        id: `mem-${Date.now()}`, // ID unique
        ...memoryData,
        createdAt: new Date().toISOString()
      };
      
      room.memories.push(newMemory);
      
      // Sauvegarder dans localStorage
      this.saveToLocalStorage();
    },
    
    // 📖 READ - Obtenu via les getters ci-dessus
    
    // ✏️ UPDATE - Modifier une mémoire
    updateMemory(memoryId, updates) {
      for (const room of this.rooms) {
        const memoryIndex = room.memories.findIndex(m => m.id === memoryId);
        
        if (memoryIndex !== -1) {
          // Fusionner les anciennes données avec les nouvelles
          room.memories[memoryIndex] = {
            ...room.memories[memoryIndex],
            ...updates,
            updatedAt: new Date().toISOString()
          };
          
          this.saveToLocalStorage();
          return;
        }
      }
      
      console.error('Mémoire introuvable');
    },
    
    // 🗑️ DELETE - Supprimer une mémoire
    deleteMemory(memoryId) {
      for (const room of this.rooms) {
        const memoryIndex = room.memories.findIndex(m => m.id === memoryId);
        
        if (memoryIndex !== -1) {
          room.memories.splice(memoryIndex, 1);
          this.saveToLocalStorage();
          return true;
        }
      }
      
      return false;
    },
    
    // 💾 Sauvegarder dans localStorage
    saveToLocalStorage() {
      try {
        const data = JSON.stringify(this.rooms);
        localStorage.setItem('museum-data', data);
      } catch (error) {
        console.error('Erreur de sauvegarde:', error);
      }
    },
    
    // 📥 Charger depuis localStorage
    loadFromLocalStorage() {
      try {
        const data = localStorage.getItem('museum-data');
        if (data) {
          this.rooms = JSON.parse(data);
        }
      } catch (error) {
        console.error('Erreur de chargement:', error);
      }
    }
  }
});
```


## 🎯 Utilisation dans les composants

### Exemple : `RoomView.vue` (Afficher et supprimer)

```vue
<template>
  <div class="room-view">
    <h1>{{ currentRoom.name }}</h1>
    
    <!-- Bouton ajouter -->
    <button @click="showAddForm = true" class="btn-add">
      + Ajouter une mémoire
    </button>
    
    <!-- Liste des mémoires -->
    <div class="memories-grid">
      <div 
        v-for="memory in memories" 
        :key="memory.id"
        class="memory-card"
      >
        <img v-if="memory.image" :src="memory.image" alt="">
        <h3>{{ memory.title }}</h3>
        <p>{{ memory.description }}</p>
        <p class="date">{{ memory.date }}</p>
        
        <div class="actions">
          <button @click="editMemory(memory)">✏️ Modifier</button>
          <button @click="confirmDelete(memory.id)">🗑️ Supprimer</button>
        </div>
      </div>
    </div>
    
    <!-- Modal formulaire -->
    <Modal v-model="showAddForm">
      <MemoryForm 
        :room-id="roomId"
        :memory="memoryToEdit"
        @saved="handleSaved"
        @cancel="closeForm"
      />
    </Modal>
  </div>
</template>

<script>
import { useMemoryStore } from '@/stores/memoryStore';
import { mapStores } from 'pinia';
import MemoryForm from '@/components/MemoryForm.vue';
import Modal from '@/components/ui/Modal.vue';

export default {
  name: 'RoomView',
  
  components: {
    MemoryForm,
    Modal
  },
  
  data() {
    return {
      roomId: null,
      showAddForm: false,
      memoryToEdit: null
    };
  },
  
  computed: {
    ...mapStores(useMemoryStore),
    
    currentRoom() {
      return this.memoryStore.rooms.find(r => r.id === this.roomId) || {};
    },
    
    memories() {
      return this.memoryStore.getMemoriesByRoom(this.roomId);
    }
  },
  
  created() {
    this.roomId = this.$route.params.id;
    // Charger les données au démarrage
    this.memoryStore.loadFromLocalStorage();
  },
  
  methods: {
    editMemory(memory) {
      this.memoryToEdit = memory;
      this.showAddForm = true;
    },
    
    confirmDelete(memoryId) {
      if (confirm('Supprimer cette mémoire ?')) {
        this.memoryStore.deleteMemory(memoryId);
      }
    },
    
    handleSaved() {
      this.closeForm();
    },
    
    closeForm() {
      this.showAddForm = false;
      this.memoryToEdit = null;
    }
  }
};
</script>
```

## 📋 Résumé CRUD

| Action | Méthode | Déclencheur |
|--------|---------|-------------|
| **Create** | `addMemory()` | Formulaire soumis (mode ajout) |
| **Read** | `getMemoriesByRoom()` | Chargement de la page |
| **Update** | `updateMemory()` | Formulaire soumis (mode édition) |
| **Delete** | `deleteMemory()` | Clic sur bouton Supprimer |

**Points clés :**

- ✅ Toujours valider les données avant d'enregistrer
- ✅ Sauvegarder dans localStorage après chaque modification
- ✅ Utiliser des IDs uniques (timestamp ou UUID)
- ✅ Confirmer avant de supprimer
- ✅ Afficher des messages de succès/erreur