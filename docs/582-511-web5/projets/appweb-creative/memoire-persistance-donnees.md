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

## Exemple pratique pour votre projet

### Sauvegarder une liste de souvenirs

```javascript
export default {
  data() {
    return {
      souvenirs: []
    }
  },
  
  methods: {
    ajouterSouvenir(nouveauSouvenir) {
      this.souvenirs.push(nouveauSouvenir)
      this.sauvegarder()
    },
    
    sauvegarder() {
      localStorage.setItem('souvenirs', JSON.stringify(this.souvenirs))
    },
    
    charger() {
      const donnees = localStorage.getItem('souvenirs')
      if (donnees) {
        this.souvenirs = JSON.parse(donnees)
      }
    }
  },
  
  mounted() {
    this.charger() // Charge les données au démarrage
  }
}
```

## Points importants

✅ **localStorage.setItem()** → Sauvegarder  
✅ **localStorage.getItem()** → Récupérer  
✅ **JSON.stringify()** → Convertir objet → texte  
✅ **JSON.parse()** → Convertir texte → objet  

⚠️ **Toujours utiliser** `JSON.stringify()` avant de sauvegarder un objet  
⚠️ **Toujours utiliser** `JSON.parse()` après avoir récupéré des données

## Workflow complet

1. L'utilisateur ajoute un souvenir
2. Vous ajoutez le souvenir à votre tableau `souvenirs`
3. Vous sauvegardez avec `localStorage.setItem()`
4. Au prochain chargement de la page, vous récupérez avec `localStorage.getItem()` dans `mounted()`



C'est tout! Pas besoin de backend, pas besoin de base de données. 

Les données restent dans le navigateur de l'utilisateur.