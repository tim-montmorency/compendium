<template>
  <div class="home">
    <h1>🎮 Trace ton Chemin</h1>
    <p class="intro">Bienvenue dans ton aventure interactive !</p>
    
    <div class="start-button">
      <!-- TODO: sur le click du bouton, appeler la méthode startAdventure() -->
      <button>
        Commencer l'aventure →
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  
  methods: {
    startAdventure() {
      // TODO: Navigation vers le premier chapitre (celui avec l'ID 1)
      // Notes de cours: https://tim-montmorency.com/compendium/582-511-web5/vue/router-and-views.html#32-navigation-programmatique-dans-les-methodes 
      
    }
  }
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 3rem;
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.intro {
  font-size: 1.2rem;
  color: white;
  margin-bottom: 2rem;
}

.start-button button {
  background: #42b983;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.start-button button:hover {
  background: #359268;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(66, 185, 131, 0.3);
}
</style>