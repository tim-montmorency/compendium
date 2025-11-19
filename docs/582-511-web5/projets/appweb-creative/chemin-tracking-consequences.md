# Tracking des conséquences / inventaire etc

Chaque choix que fait l'utilisateur modifie l'*état du joueur* (son profil), ce qui influence quelles fins il peut atteindre.

## Démo en classe de karmas et statistiques dans l'histoire "Trace ton chemin".

<div style="max-width: 1280px"><div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe src="https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=47b37c56-d3a5-4e21-8802-4474729e3453&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="1280" height="720" frameborder="0" scrolling="no" allowfullscreen title="chemin-apercu.mp4" style="border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;"></iframe></div></div>

<!-- http://127.0.0.1:5500/UI-demo_onefile_trace-ton-chemin_CUTE-UI/ -->


## Choix parmi les systèmes de tracking des conséquences

Minimum 1 des 4 systèmes listés ci-dessous:

1. Karma/Moralité
2. Système de flags (événements déclenchés)
3. Inventaire d'objets (collecte)
4. Statistiques du personnage (style RPG)

---

### 1️⃣ **Points de Karma/Moralité** (le plus simple)

Chaque choix donne des points positifs ou négatifs.

```javascript
// Dans Pinia store
state: () => ({
  karma: 0  // De -10 à +10
})

// Exemple de choix dans votre json
{
  text: "Sauver le chat coincé dans l'arbre",
  effects: { karma: +2 },  // Bon choix
  nextChapter: "ch-3"
}

{
  text: "Ignorer le chat et partir",
  effects: { karma: -1 },  // Mauvais choix
  nextChapter: "ch-4"
}

// À la fin, on vérifie:
if (karma >= 5) → Fin Héroïque
if (karma <= -5) → Fin Sombre
```

---

### 2️⃣ **Système de Flags** (débloque des chemins)

Des variables "vrai/faux" qui trackent si un événement est arrivé.

```javascript
state: () => ({
  flags: {
    hasMetMentor: false,
    knowsTheSecret: false,
    savedFriend: false
  }
})

// Au chapitre 2, si le joueur choisit "Parler au vieil homme":
{
  text: "Parler au vieil homme",
  effects: {
    flags: { hasMetMentor: true }
  },
  nextChapter: "ch-3a"
}

// Plus tard, au chapitre 6:
// Ce choix apparaît SEULEMENT si hasMetMentor = true
if (playerStore.flags.hasMetMentor) {
  choices.push({
    text: "Demander de l'aide au mentor"
  })
}
```

---

### 3️⃣ **Inventaire d'objets** (collecte)

Le joueur ramasse des objets qui débloquent des options.

```javascript
state: () => ({
  inventory: []  // Liste vide au début
})

// Chapitre 3 - Choix:
{
  text: "Prendre la clé rouillée",
  effects: {
    inventory: { add: 'clé-rouillée' }
  }
}

// Dans la méthode de navigation vers la route du prochain chapitre
if (playerStore.hasItem('clé-rouillée')) {
  // Peut ouvrir la porte
} else {
  // Doit trouver un autre chemin
}
```

---

### 4️⃣ **Statistiques du personnage**

Des caractéristiques qui augmentent selon les choix.

```javascript
state: () => ({
  stats: {
    courage: 0,
    intelligence: 0,
    empathie: 0
  }
})

// Exemple de choix:
{
  text: "Affronter le danger directement",
  effects: {
    stats: { courage: +2 }
  }
}

// À la fin:
if (stats.courage >= 10) → Fin du Héros
if (stats.intelligence >= 10) → Fin du Sage
```


## 💡 Exemple concret (à venir...)

<!-- 

## 💡 Exemple concret complet

```javascript
// PINIA STORE
export const usePlayerStore = defineStore('player', {
  state: () => ({
    karma: 0,
    inventory: [],
    flags: {
      hasActivatedMachine: false,
      knowsTheSecret: false
    }
  }),
  
  getters: {
    // Vérifie quelle fin le joueur peut atteindre
    availableEnding(state) {
      if (state.karma >= 5 && state.flags.knowsTheSecret) {
        return 'ending-hero';
      }
      if (state.karma <= -5) {
        return 'ending-dark';
      }
      return 'ending-neutral';
    },
    
    hasItem: (state) => (itemName) => {
      return state.inventory.includes(itemName);
    }
  },
  
  actions: {
    // Applique les effets d'un choix
    applyChoice(effects) {
      if (effects.karma) {
        this.karma += effects.karma;
      }
      
      if (effects.inventory?.add) {
        this.inventory.push(effects.inventory.add);
      }
      
      if (effects.flags) {
        Object.assign(this.flags, effects.flags);
      }
    }
  }
});
```

```javascript
// DANS UN COMPOSANT - ChapterView.vue
methods: {
  makeChoice(choice) {
    const playerStore = usePlayerStore();
    
    // 1. Appliquer les conséquences
    if (choice.effects) {
      playerStore.applyChoice(choice.effects);
    }
    
    // 2. Aller au prochain chapitre
    this.$router.push({
      name: 'chapter',
      params: { id: choice.nextChapter }
    });
  }
}
```

```javascript
// STRUCTURE D'UN CHAPITRE avec conséquences
{
  id: "ch-5",
  title: "Le Dilemme",
  text: "Devant vous, deux chemins...",
  choices: [
    {
      id: "choice-a",
      text: "Prendre le chemin sûr",
      effects: {
        karma: +1,
        flags: { choseSafety: true }
      },
      nextChapter: "ch-6a"
    },
    {
      id: "choice-b",
      text: "Risquer le raccourci dangereux",
      effects: {
        karma: -1,
        inventory: { add: 'épée-magique' }
      },
      nextChapter: "ch-6b"
    }
  ]
}
```
-->

## 🎯 Résumé en 3 points

1. **Chaque choix** modifie l'état du joueur (karma, flags, inventaire)
2. **L'état du joueur** détermine quels chapitres/choix sont disponibles
3. **À la fin**, l'état total décide quelle fin le joueur obtient



<!-- 
OLD


Exemple de struture des données du chapitre de l'histoire `json` pour le système de conséquence:

```

[
{
  id: 'ch-2'
  chapter-data: {
    id: 'ch-2',
    title: 'Chapitre 2 - La Décision',
    text: `Le Conseil de la station se réunit en urgence. Qu'est-ce qu'on fait ?`,
    type: 'choice',
    choices: [
      {
        id: 'respond',
        text: 'Répondre immédiatement',
        hint: 'La curiosité et l\'audace guidaient les grands explorateurs...',
        nextChapter: 'ch-3a',
        effects: {   // <-- effets statistiques (karma) de ce choix
          courage: 2, 
          trust: -1 
        } 
      },
      {
        id: 'observe',
        text: 'Observer et analyser d\'abord',
        hint: 'La prudence a toujours été la meilleure alliée de la science.',
        nextChapter: 'ch-3b',
        effects: { 
          intelligence: 2, 
          trust: 1 
        }
      }
    ]
  }
},
]
```

Autre exemple:

```
```


## Implémentation de la logique des fins (conditions d'accès à la fin)

- [Struture Pinia suggérée pour le système de conséquence et logique de fin](https://tim-montmorency.com/compendium/582-511-web5/vue/pinia.html#pour-trace-ton-chemin)

  - Dans le *store* `player` (ces state, actions et getters ne sont pas toutes obligatoires, ça dépend du choix de votre syst`me de conséquences): 
    - State:
      - `playerName`
      - `karma` 
      - `stats`
      - `inventory`
      - `flags`
      - `relationships`
    - Actions:
      - `addToInventory()`
      - `updateStat()`
      - `setFlag()`
      - `updateRelationship()`
    - Getters:
      - `hasItem()`
      - `getRelationship()`
      - `canAccessEnding()`

- Implémentation de l'historique des décisions du joueur
  - Enregistrement de chaque décision
  - Affichage dans un menu (optionnel)

- [Struture Pinia suggérée pour sauvegarder l'historique du joueur](https://tim-montmorency.com/compendium/582-511-web5/vue/pinia.html#pour-trace-ton-chemin)
  - Dans le *store* `story`, utilisez l'état *state* `visitedChapters` : un tableau (array) qui contient la liste des id des chapitres visités par le joueur.


-->
