# Tracking des conséquences / inventaire etc

Démo en classe de karmas et statistiques dans l'histoire "Trace ton chemin".

<div style="max-width: 1280px"><div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe src="https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=47b37c56-d3a5-4e21-8802-4474729e3453&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="1280" height="720" frameborder="0" scrolling="no" allowfullscreen title="chemin-apercu.mp4" style="border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;"></iframe></div></div>

<!-- http://127.0.0.1:5500/UI-demo_onefile_trace-ton-chemin_CUTE-UI/ -->


- Système de tracking des conséquences (minimum un des 4 systèmes listés ci-dessous)

  - 1. Système de flags (événements déclenchés)
  - 2. Karma/statistiques
  - 3. Inventaire
  - 4. Relations avec personnages

- Implémentation de la logique des fins (conditions d'accès à la fin)


- Exemple de struture des données du chapitre de l'histoire `json` pour le système de conséquence:

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



