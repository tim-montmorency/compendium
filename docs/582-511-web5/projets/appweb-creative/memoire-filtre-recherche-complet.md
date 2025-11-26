# Filtres et rechreche

```javascript
// stores/memoryStore.js
import { defineStore } from 'pinia';

export const useMemoryStore = defineStore('memory', {
  state: () => ({
    rooms: [],
    
    // 🔍 État des filtres
    filters: {
      searchQuery: '',      // Recherche textuelle
      selectedTags: [],     // Tags sélectionnés
      dateFrom: null,       // Date de début
      dateTo: null,         // Date de fin
      selectedRoomId: null  // Salle sélectionnée (optionnel)
    }
  }),
  
  getters: {
    // Obtenir toutes les mémoires (toutes salles confondues)
    allMemories: (state) => {
      const memories = [];
      state.rooms.forEach(room => {
        room.memories.forEach(memory => {
          memories.push({
            ...memory,
            roomId: room.id,
            roomName: room.name
          });
        });
      });
      return memories;
    },
    
    // 🔍 Mémoires filtrées
    filteredMemories: (state) => {
      let memories = [];
      
      // 1. Filtrer par salle (si sélectionnée)
      if (state.filters.selectedRoomId) {
        const room = state.rooms.find(r => r.id === state.filters.selectedRoomId);
        if (room) {
          memories = room.memories.map(m => ({
            ...m,
            roomId: room.id,
            roomName: room.name
          }));
        }
      } else {
        // Toutes les mémoires
        state.rooms.forEach(room => {
          room.memories.forEach(memory => {
            memories.push({
              ...memory,
              roomId: room.id,
              roomName: room.name
            });
          });
        });
      }
      
      // 2. Filtrer par recherche textuelle
      if (state.filters.searchQuery.trim()) {
        const query = state.filters.searchQuery.toLowerCase();
        memories = memories.filter(m => {
          return m.title.toLowerCase().includes(query) 
              || m.description.toLowerCase().includes(query);
        });
      }
      
      // 3. Filtrer par tags
      if (state.filters.selectedTags.length > 0) {
        memories = memories.filter(m => {
          // La mémoire doit avoir AU MOINS UN des tags sélectionnés
          return state.filters.selectedTags.some(tag => 
            m.tags.includes(tag)
          );
        });
      }
      
      // 4. Filtrer par date
      if (state.filters.dateFrom) {
        memories = memories.filter(m => m.date >= state.filters.dateFrom);
      }
      
      if (state.filters.dateTo) {
        memories = memories.filter(m => m.date <= state.filters.dateTo);
      }
      
      // 5. Trier par date (plus récent en premier)
      memories.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      
      return memories;
    },
    
    // Tous les tags uniques disponibles
    availableTags: (state) => {
      const tagsSet = new Set();
      state.rooms.forEach(room => {
        room.memories.forEach(memory => {
          memory.tags.forEach(tag => tagsSet.add(tag));
        });
      });
      return Array.from(tagsSet).sort();
    },
    
    // Statistiques de recherche
    searchStats: (state, getters) => {
      return {
        totalMemories: getters.allMemories.length,
        filteredCount: getters.filteredMemories.length,
        hasActiveFilters: state.filters.searchQuery.trim() !== '' 
                       || state.filters.selectedTags.length > 0
                       || state.filters.dateFrom !== null
                       || state.filters.dateTo !== null
      };
    }
  },
  
  actions: {
    // Mettre à jour la recherche textuelle
    setSearchQuery(query) {
      this.filters.searchQuery = query;
    },
    
    // Ajouter/retirer un tag des filtres
    toggleTag(tag) {
      const index = this.filters.selectedTags.indexOf(tag);
      if (index > -1) {
        this.filters.selectedTags.splice(index, 1);
      } else {
        this.filters.selectedTags.push(tag);
      }
    },
    
    // Définir la plage de dates
    setDateRange(from, to) {
      this.filters.dateFrom = from;
      this.filters.dateTo = to;
    },
    
    // Filtrer par salle
    setRoomFilter(roomId) {
      this.filters.selectedRoomId = roomId;
    },
    
    // Réinitialiser tous les filtres
    clearFilters() {
      this.filters = {
        searchQuery: '',
        selectedTags: [],
        dateFrom: null,
        dateTo: null,
        selectedRoomId: null
      };
    }
  }
});

```