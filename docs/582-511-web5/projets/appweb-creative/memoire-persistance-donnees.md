# Persistance des données - Mémoire Interactive

## Qu'est-ce que la persistance des données

La persistance permet de *sauvegarder des données* pour qu'elles restent disponibles même après avoir fermé le navigateur. Sans persistance, tout est perdu au rafraîchissement de la page.

Pour votre projet de **Mémoire interactives**, deux options s'étaient offertes à vous:

- *LocalStorage* pour sauvegarder le musée en local
- *Firebase* de Google et sa base de données *Firestore* (pour les plus équipes + avancés): Cette option permet de créer une mémoire collective et non seulement locale à un seul utilisateur.

## localStorage : La solution simple pour l'envergure du projet actuel

Le `localStorage` stocke des données directement dans le navigateur de l'utilisateur.

### Sauvegarder des données: `localStorage.setItem`

```javascript
// Convertir un objet JavaScript en texte JSON avec JSON.stringify
// Puis enregistrer dans le localStorage avec setItem
const memory = {
  title: "Mon premier souvenir",
  description: "C'était un bel été...",
  date: "2023-06-15"
}

localStorage.setItem('maMemoire', JSON.stringify(memory))
```

### Récupérer des données: `localStorage.getItem`

```javascript
// Récupérer la donnée du localStorage avec getItem
// Puis reconvertir le texte JSON en objet JavaScript
const memoireRecuperee = JSON.parse(localStorage.getItem('maMemoire'))

console.log(memoireRecuperee.title) // "Mon premier souvenir"
```

### Supprimer des données: `localStorage.removeItem`

```javascript
// Supprimer une donnée du localStorage avec removeItemItem
localStorage.removeItem('maMemoire')

// Tout supprimer
localStorage.clear()
```

## Pour votre projet, voici comment intégrer l'enregistrement dans le LocalStorage via votre Store Pinia:

`src/stores/memories.js`

```javascript
// stores/souvenirs.js
import { defineStore } from 'pinia'
import demoMemories from "@/data/memories.json";

export const useMemoryStore = defineStore('memories', {
  state: () => ({
    memories: [], // si memories est un array []
    //memories: {} // si memories est un objet {}
  }),
  
  actions: {
    // Initialiser le store au chargement de l'app
    init() {
      // Vérifier d'abord si les données du json ont déjà été chargées et enregistrées dans le localStorage
      const alreadyInitialised = localStorage.getItem('alreadyInitialised')
      
      if (alreadyInitialised) {
        // L'utilisateur a déjà utilisé l'app, charge ses données du localStorage
        this.getMemoryFromLocalStorage()
      } else {
        // Première visite, charge les données démo du json
        this.memories = demoMemories // données du json
        this.saveMemories() // Sauvegarde les démos dans localStorage
      }
    },
    
    // Charger depuis localStorage
    getMemoryFromLocalStorage() {
      const data = localStorage.getItem('memories')
      if (data) {
        this.memories = JSON.parse(data)
      }
    },
    
    // Sauvegarder dans localStorage
    saveMemories() {
      localStorage.setItem('memories', JSON.stringify(this.memories))
      localStorage.setItem('alreadyInitialised', 'true')
    },
    
    // Ajouter un souvenir
    addMemory(id, newMemory) {
      this.memories.push(newMemory) // si memories est un array []
      //this.souvenirs[id] = nouveauSouvenir // si memories est un objet {}

      this.saveMemories()
    },
    
    // Modifier un souvenir
    updateMemory(index, id, updatedMemory) {
      this.memories[index] = updatedMemory // si memories est un array []
      //this.memories[id] = updatedMemory  // si memories est un objet {}

      this.saveMemories()
    },
    
    // Supprimer un souvenir
    deleteMemory(index, id) {
      this.memories.splice(index, 1) // si memories est un array []
      // delete this.souvenirs[id]  // si memories est un objet {}

      this.saveMemories()
    },
    
    // Reset vers les données démo (optionnel)
    resetWithDemoData() {
      localStorage.removeItem('memories')
      localStorage.removeItem('alreadyInitialised')
      this.initialiser()
    }
  }
})

```

<!--

2 options, gérez vous l'importation l'importation des données initiales du json dans une `view` ou via un `store` Pinia?

### Sauvegarder une liste de souvenirs via une `view`

`src/views/memoriesList`

```javascript
export default {
  data() {
    return {
      souvenirs: []
    }
  },
  
  methods: {
    addMemory(newMemory) {
      //ajouter souvenir au tableau des souvenirs
      this.memories.push(newMemory)
      this.saveMemory()
    },
    
    saveMemory() {
      localStorage.setItem('memories', JSON.stringify(this.memories))
      localStorage.setItem('alreadyInitialised', 'true') // Marque comme initialisé
    },
    
    getMemory() {
      const alreadyInitialised = localStorage.getItem('alreadyInitialised')

      if (alreadyInitialised) {
        // L'utilisateur a déjà utilisé l'app, charge ses données du localStorage
        const data = localStorage.getItem('memories')

        if (data) {
          this.memories = JSON.parse(data)
        }
      }else{
        // Première visite, charge les données démo via le fichier json
        fetch...

        this.sauvegarder() // Sauvegarde les démos dans localStorage
      }
    }
  },
  
  mounted() {
    this.getMemory() // Charge les données au démarrage de l'app

  }
}
```
-->


## En résumé

- **localStorage.setItem()** → Sauvegarder  
- **localStorage.getItem()** → Récupérer  
- **JSON.stringify()** → Convertir objet → texte  
- **JSON.parse()** → Convertir texte → objet  

⚠️ **Toujours utiliser** `JSON.stringify()` avant de sauvegarder un objet  
⚠️ **Toujours utiliser** `JSON.parse()` après avoir récupéré des données

## Workflow complet

App démarre
   ↓
`store.init()`
   ↓
Première visite → Charge JSON démo via le store Pinia
Visite suivante → Charge `localStorage`
   ↓
Utilisateur modifie des données
   ↓
`store.saveMemories()` automatique
   ↓
Données persistées dans `localStorage`