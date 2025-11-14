<template>
  <div class="room-detail">
    <header class="room-header">
      <div class="room-icon-large">{{ currentRoom.icon }}</div>
      <h1>{{ currentRoom.name }}</h1>
      <p class="room-id">ID: {{ roomId }}</p>
    </header>
    
    <div class="memories-section">
      <h2>Mémoires de cette salle</h2>
      
      <div v-if="currentRoom.memories && currentRoom.memories.length > 0" class="memories-list">
        <div 
          v-for="memory in currentRoom.memories" 
          :key="memory.id"
          class="memory-card"
        >
          <h3>{{ memory.title }}</h3>
          <p class="memory-date">{{ memory.date }}</p>
          <p class="memory-text">{{ memory.text }}</p>
        </div>
      </div>
      
      <div v-else class="no-memories">
        <p>Aucune mémoire dans cette salle pour le moment.</p>
      </div>
    </div>
    
    <div class="actions">
      <button @click="goBack" class="back-button">
        ← Retour aux salles
      </button>
      <button @click="addMemory" class="add-button">
        + Ajouter une mémoire
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoomDetailView',
  
  data() {
    return {
      roomId: null,
      
      // Données temporaires pour tester
      rooms: {
        'room-1': {
          id: 'room-1',
          name: 'Voyages',
          icon: '✈️',
          memories: [
            {
              id: 'mem-1',
              title: 'Premier voyage à Paris',
              date: '2023-06-15',
              text: 'Une journée inoubliable à visiter la Tour Eiffel...'
            },
            {
              id: 'mem-2',
              title: 'Road trip en Californie',
              date: '2023-08-22',
              text: 'La route panoramique le long de la côte était magnifique.'
            }
          ]
        },
        'room-2': {
          id: 'room-2',
          name: 'Famille',
          icon: '👨‍👩‍👧‍👦',
          memories: [
            {
              id: 'mem-3',
              title: 'Noël en famille',
              date: '2023-12-25',
              text: 'Tous réunis autour du sapin, moment magique.'
            }
          ]
        },
        'room-3': {
          id: 'room-3',
          name: 'Études',
          icon: '🎓',
          memories: []
        },
        'room-4': {
          id: 'room-4',
          name: 'Amis',
          icon: '🎉',
          memories: [
            {
              id: 'mem-4',
              title: 'Soirée d\'anniversaire',
              date: '2024-03-10',
              text: 'Une fête surprise organisée par mes meilleurs amis.'
            }
          ]
        }
      }
    };
  },
  
  computed: {
    currentRoom() {
      // Retourne la salle actuelle ou une salle par défaut
      return this.rooms[this.roomId] || {
        name: 'Salle introuvable',
        icon: '❓',
        memories: []
      };
    }
  },
  
  created() {
    // TODO: Récupérer l'ID de la salle depuis l'URL
     // Note de cours: https://tim-montmorency.com/compendium/582-511-web5/vue/router-and-views.html#41-routes-avec-parametres-dynamiques
  },
  
  methods: {
    goBack() {
      // TODO: Retourner à la liste des salles
      this.$router.push({ name: 'rooms' });
    },
    
    addMemory() {
      
    }
  }
};
</script>

<style scoped>
.room-detail {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
}

.room-header {
  text-align: center;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.room-icon-large {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.room-header h1 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.room-id {
  color: #95a5a6;
  font-size: 0.9rem;
  font-family: monospace;
}

.memories-section h2 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.memories-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.memory-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #3498db;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.memory-card h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.memory-date {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

.memory-text {
  color: #34495e;
  line-height: 1.6;
}

.no-memories {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  color: #7f8c8d;
}

.actions {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2rem;
}

.back-button {
  background: #95a5a6;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.back-button:hover {
  background: #7f8c8d;
}

.add-button {
  background: #2ecc71;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.add-button:hover {
  background: #27ae60;
}
</style>