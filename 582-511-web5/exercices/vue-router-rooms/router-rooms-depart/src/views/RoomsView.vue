<template>
  <div class="rooms">
    <header class="rooms-header">
      <h1>📚 Mes Salles</h1>
      <p>Cliquez sur une salle pour voir ses mémoires</p>
    </header>
    
    <div class="rooms-grid">
      <div 
        v-for="room in rooms" 
        :key="room.id"
        class="room-card"
        @click="goToRoom(room.id)"
      >
        <div class="room-icon">{{ room.icon }}</div>
        <h3>{{ room.name }}</h3>
        <p class="room-description">{{ room.description }}</p>
        <p class="memory-count">{{ room.memoryCount }} mémoires</p>
      </div>
    </div>
    
    <button @click="goHome" class="back-button">
      ← Retour à l'accueil
    </button>
  </div>
</template>

<script>
export default {
  name: 'RoomsView',
  
  data() {
    return {
      // Données temporaires pour tester
      rooms: [
        {
          id: 'room-1',
          name: 'Voyages',
          description: 'Mes aventures autour du monde',
          icon: '✈️',
          memoryCount: 12
        },
        {
          id: 'room-2',
          name: 'Famille',
          description: 'Moments précieux en famille',
          icon: '👨‍👩‍👧‍👦',
          memoryCount: 24
        },
        {
          id: 'room-3',
          name: 'Études',
          description: 'Mon parcours académique',
          icon: '🎓',
          memoryCount: 8
        },
        {
          id: 'room-4',
          name: 'Amis',
          description: 'Souvenirs avec mes amis',
          icon: '🎉',
          memoryCount: 15
        }
      ]
    };
  },
  
  methods: {
    goToRoom(roomId) {
      // TODO: Naviguer vers la page de détail de la salle ayant l'id roomID

      // Note de cours: https://tim-montmorency.com/compendium/582-511-web5/vue/router-and-views.html#32-navigation-programmatique-dans-les-methodes
      
    },
    
    goHome() {

      // TODO Naviguer vers l'accueil

      // Notes de cours: https://tim-montmorency.com/compendium/582-511-web5/vue/router-and-views.html#32-navigation-programmatique-dans-les-methodes 
     
    }
  }
};
</script>

<style scoped>
.rooms {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 2rem;
}

.rooms-header {
  text-align: center;
  margin-bottom: 3rem;
}

.rooms-header h1 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.rooms-header p {
  color: #7f8c8d;
}

.rooms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.room-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;
}

.room-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
}

.room-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.room-card h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.room-description {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.memory-count {
  color: #3498db;
  font-weight: bold;
  font-size: 0.9rem;
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
</style>