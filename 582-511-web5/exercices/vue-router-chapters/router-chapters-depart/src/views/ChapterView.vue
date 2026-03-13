<template>
  <div class="chapter">
    <div class="chapter-header">
      <h2>{{ currentChapter.title }}</h2>
      <p class="chapter-number">Chapitre {{ chapterId }}</p>
    </div>
    
    <div class="chapter-content">
      <p>{{ currentChapter.text }}</p>
    </div>
    
    <div class="choices">
      <h3>Que fais-tu ?</h3>
      <button 
        v-for="choice in currentChapter.choices" 
        :key="choice.id"
        @click="makeChoice(choice.nextChapter)"
        class="choice-button"
      >
        {{ choice.text }}
      </button>
    </div>
    
    <button @click="goBack" class="back-button">
      ← Retour à l'accueil
    </button>
  </div>
</template>

<script>
export default {
  name: 'ChapterView',
  
  data() {
    return {
      chapterId: null,
      
      // Données temporaires placées ici pour tester pour l'exercice mais ultimement vos données de chapitre seront dans un json
      chapters: {
        '1': {
          title: 'La forêt mystérieuse',
          text: 'Tu te trouves à l\'entrée d\'une forêt sombre. Deux chemins s\'offrent à toi.',
          choices: [
            { id: 1, text: 'Prendre le chemin de gauche 🌲', nextChapter: '2' },
            { id: 2, text: 'Prendre le chemin de droite 🏔️', nextChapter: '3' }
          ]
        },
        '2': {
          title: 'Le pont suspendu',
          text: 'Tu arrives devant un vieux pont suspendu au-dessus d\'une rivière.',
          choices: [
            { id: 1, text: 'Traverser le pont 🌉', nextChapter: '4' },
            { id: 2, text: 'Longer la rivière 🏞️', nextChapter: '5' }
          ]
        },
        '3': {
          title: 'La montagne',
          text: 'Le chemin monte vers une montagne enneigée.',
          choices: [
            { id: 1, text: 'Grimper au sommet ⛰️', nextChapter: '6' },
            { id: 2, text: 'Chercher une grotte 🕳️', nextChapter: '7' }
          ]
        },
        '4': {
          title: 'Village abandonné',
          text: 'Après le pont, tu découvres un village abandonné...',
          choices: [
            { id: 1, text: 'Recommencer', nextChapter: '1' }
          ]
        },
        '5': {
          title: 'Cascade cachée',
          text: 'En longeant la rivière, tu trouves une magnifique cascade !',
          choices: [
            { id: 1, text: 'Recommencer', nextChapter: '1' }
          ]
        },
        '6': {
          title: 'Le sommet',
          text: 'Tu arrives au sommet et la vue est à couper le souffle !',
          choices: [
            { id: 1, text: 'Recommencer', nextChapter: '1' }
          ]
        },
        '7': {
          title: 'La grotte du dragon',
          text: 'Dans la grotte, tu découvres un trésor gardé par un dragon endormi...',
          choices: [
            { id: 1, text: 'Recommencer', nextChapter: '1' }
          ]
        }
      }
    };
  },
  
  computed: {
    currentChapter() {
      // Retourne le chapitre actuel ou un chapitre par défaut
      return this.chapters[this.chapterId] || {
        title: 'Chapitre introuvable',
        text: 'Ce chapitre n\'existe pas encore.',
        choices: []
      };
    }
  },
  
  created() {
    // TODO: Récupérer le paramètre dynamique ID du chapitre depuis l'URL
    // Note de cours: https://tim-montmorency.com/compendium/582-511-web5/vue/router-and-views.html#41-routes-avec-parametres-dynamiques
    
  },
  
  methods: {
    makeChoice(nextChapterId) {
      // TODO: Naviguer vers le prochain chapitre
      // Note de cours: https://tim-montmorency.com/compendium/582-511-web5/vue/router-and-views.html#32-navigation-programmatique-dans-les-methodes
      
      
      
      // TODO: Mettre à jour l'ID local du chapitre
      // this.chapterId = ...
      
    },
    
    goBack() {
      this.$router.push({ name: 'home' });
    }
  }
};
</script>

<style scoped>
.chapter {
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.chapter-header {
  text-align: center;
  margin-bottom: 2rem;
  border-bottom: 2px solid #42b983;
  padding-bottom: 1rem;
}

.chapter-header h2 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.chapter-number {
  color: #666;
  font-style: italic;
}

.chapter-content {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-size: 1.1rem;
}

.choices {
  margin-bottom: 2rem;
}

.choices h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.choice-button {
  display: block;
  width: 100%;
  background: #42b983;
  color: white;
  padding: 1rem;
  margin-bottom: 0.75rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  text-align: left;
}

.choice-button:hover {
  background: #359268;
  transform: translateX(10px);
}

.back-button {
  background: #6c757d;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.back-button:hover {
  background: #5a6268;
}
</style>