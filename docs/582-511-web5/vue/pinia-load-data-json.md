
# Processus pour charger votre json initial


## Structure des données initiales

*Trace ton chemin*

- Basez vous sur la structure des données de chapitres dans l'[exercice des routes parmis les chapitres](../exercices/vue-router-chapters/)

*Mémoires interactives*

- Basez vous sur la structure des données  des salles et mémoires dans la vue `RoomDetailView` de l'[exercice des routes parmis les salles](../exercices/vue-router-rooms/)

## Créez vos stores Pinia

*Trace ton chemin*

Pour charger les données des chapitres de votre json, vous allez le faire dans ce store Pinia, mais il faut le  créer ce store et le configurer d'abord:

- `src/stores/story.js`

*Mémoires interactives*

Pour charger les données des salles et mémoires préalablement créées de votre json, vous allez le faire dans ce store Pinia, mais il faut créer ce store et le configurer d'abord:

- `src/stores/museum.js`
- `src/stores/memory.js`

## Chargez vos données dans le store

*`src/stores/story.js`*

```vue
import { defineStore } from 'pinia'
import chapters from '../data/chapters.json'

export const useStoryStore = defineStore('story', {
  state: () => ({
    storyData: chapters
  })
});

```