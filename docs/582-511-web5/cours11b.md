# Cours 11.2 PHASE INTERACTIVITÉ

Vendredi 14 novembre


<!-- 
- considérer repousser tout d'un cours (donc une demi semaine) car celui-ci est trop intense. 
- les remises y compris.
- ce qui ferait en sorte qu'il ny aurait pas de présentation à la fin mais ils gagneraient un cours supp pour travailler et la remise serait faite disons 3 jours après le cours 15.2
-->

## Rappel important! *Vue 3*, version *Option API*

Vous codez avec la version *Vue 3* et surtout vous rappeler qu'on utilise présentement l'*Options API*.

Dans le cadre de ce cours, n'oubliez pas de toujours consulter la docmentation avec l'<em>API Options</em> <img src="./vue/assets/vuejs-options-api-petit.png" alt="Bouton à bascule pour activer Options API dans la documentation Vue.js" style="width: 130px;">

N'allez surtout pas trouver des codes n'importe où sans vous rappeler de cette information importante.



## Retour sur routes

<div class="class-content-link">
  <img src="./vue/assets/logo-vue.svg">
  <a href="./vue/router-and-views.html">Routes entre les différentes <em>views</em> (pages)</a>
</div>

### Exercice Routes

- Pour les étudiants de *Trace ton chemin*[Exercice des routes parmis les chapitres](./exercices/vue-router-chapters/)
- Pour les étudiants de *Mémoires interactives* [Exercice des routes parmis les salles](./exercices/vue-router-rooms/)

## Cours: Pinia

*Pinia* une bibliothèque (`store`) de gestion d'état pour les application Vue.js

<div class="class-content-link">
  <img src="./vue/assets/logo-vue.svg">
  <a href="./vue/pinia.html"><em>Pinia</em>: bibliothèque (<code>store</code>)</a>
</div>


## Rappel JavaScript: Les méthodes de l'objet Array en JavaScript

- [Notes de cours sur l'objet Array](https://tim-montmorency.com/timdoc/582-518MO/javascript/objet-array/)

- [Liste complète des méthodes de l'objet Array sur w3School](https://www.w3schools.com/js/js_array_reference.asp)

### Exemples:

- `length`
- `push()`
- `sort()`
- `slice()`
- `splice()`
- `findIndex()`
- `reduce()`
- `find()`
- `shift()`
- `pop()`
- `concat()`


## Travail en classe et DEVOIR: Mise en place de stores *Pinia* pour votre projet

En plus du travail de cours précédents (cours 10.2 et 11.1), voici ce qui s'ajoute:

### Configuration de stores pour le projet *App web créative*

#### Pour *Mémoires interactives*

*Structure des stores suggérée:*

1. *`useMuseumStore`*
   - State (équivalent de data()):
     - `rooms`
     - `currentRoomId`
     - `museumName`
     - `theme`
   - Actions (équivalent de methods):
     - `addRoom()` (optionnel car certains projets ne le permettent pas)
     - `updateRoom()`
     - `deleteRoom()`
     - `setCurrentRoom()`

2. *`useMemoryStore`*
   - State (équivalent de data()):
     - `memories`
     - `filters`
     - `searchQuery`
   - Actions (équivalent de methods):
     - `addMemory()`
     - `updateMemory()`
     - `deleteMemory()`
     - `searchMemories()`
   - Getters (équilavent de computed):
     - `filteredMemories`
     - `memoriesByRoom`
     - `memoriesByTag`

3. *`useAuthStore`* (optionnel)
   - State (équivalent de data()): 
     - `user`
     - `isAuthenticated`
   - Actions (équivalent de methods): 
     - `login()`
     - `logout()`
     - `register()`

##### Checklist *Mémoires interactives*

- [ ] Création des 2 *stores* obligatoires:
  - [ ] `useMuseumStore.js` (structure de base)
  - [ ] `useMemoryStore.js` (structure de base)

- [ ] Développement des *composants clés* qui utilisent les stores:
  - [ ] `RoomCard.vue` (carte de salle)
  - [ ] `MemoryCard.vue` (carte de mémoire)
  - [ ] `MemoryList.vue` (grille de mémoires)

#### Pour *Trace ton chemin*

*Structure des stores suggérée:*

1. *`useStoryStore`* (le plus important du projet)

   - State (équivalent de data()):
     - `currentChapterId`
     - `visitedChapters`
     - `storyData`
     - `availableChoices`
   - Actions (équivalent de methods):
     - `loadChapter()`
     - `makeChoice()`
     - `goToChapter()`
   - Getters (équilavent de computed):
     - `currentChapter`
     - `isChapterUnlocked()`

2. *`usePlayerStore`* (commencez simple d'abord, juste avec le nom)
   - State (équivalent de data()):
     - `playerName`
     - `karma`
     - `stats`
     - `inventory`
     - `flags`
     - `relationships`
   - Actions (équivalent de methods):
     - `addToInventory()`
     - `updateStat()`
     - `setFlag()`
     - `updateRelationship()`
   - Getters (équilavent de computed):
     - `hasItem()`
     - `getRelationship()`
     - `canAccessEnding()`

3. *`useSaveStore`*
   - State (équivalent de data()):
     - `saveSlots` (array de 3 slots)
   - Actions (équivalent de methods): 
     - `saveGame()`
     - `loadGame()`
     - `deleteSave()`
     - `getSaveInfo()`
   - Getters (équilavent de computed):
     - `hasSaves`
     - `latestSave`

4. *`useAudioStore`* (optionnel)
   - State (équivalent de data()):
     - `currentMusic`
     - `soundEffects`
     - `volume`
     - `isMuted`
   - Actions (équivalent de methods):
     - `playMusic()`
     - `playSound()`
     - `toggleMute()`
     - `setVolume()`

##### Checklist *Trace ton chemin*

- [ ] Création des 2 premier *stores*:
  - [ ] `useStoryStore.js` (chapitres, navigation)
  - [ ] `usePlayerStore.js` (état du joueur, commencez réalistement, juste avec son nom)

- [ ] Création du *fichier JSON avec les chapitres*

- [ ] Développement des *composants clés* qui utilisent les stores:
  - [ ] `ChoiceButton.vue` (bouton de choix)
  - [ ] `ChoicePanel.vue` (panel de choix)

