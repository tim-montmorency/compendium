<template>
  <div class="home">
    <h1>🏛️ Musée des Mémoires</h1>
    <p class="subtitle">Bienvenue dans votre musée personnel</p>
    
    <div class="intro">
      <p>
        Explorez vos souvenirs organisés par salles thématiques.
        Chaque salle contient des mémoires précieuses que vous pouvez 
        consulter et enrichir.
      </p>
    </div>
    <!-- TODO: sur le click du bouton, appeler la méthode enterMuseum() -->
    <button class="enter-button">
      Entrer dans le musée →
    </button>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  
  methods: {
    enterMuseum() {
      // TODO: Naviguer vers la page qui liste les salles
      // Notes de cours: https://tim-montmorency.com/compendium/582-511-web5/vue/router-and-views.html#32-navigation-programmatique-dans-les-methodes
    }
  }
};
</script>

<style scoped>
.home {
  text-align: center;
  max-width: 600px;
  margin: 3rem auto;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 2rem;
  font-style: italic;
}

.intro {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  line-height: 1.6;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.enter-button {
  background: #3498db;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.enter-button:hover {
  background: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
}
</style>