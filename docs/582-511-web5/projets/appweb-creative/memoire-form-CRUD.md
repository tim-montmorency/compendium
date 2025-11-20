# CRUD des Mémoires - Explication en Pseudo-code

## 📝 Formulaires d'ajout/édition

### Composant de base : `MemoryForm.vue`

COMPOSANT `MemoryForm`

#### TEMPLATE

```
<form @submit.prevent="handleSubmit" class="memory-form">
    <h2>{{ isEditing ? 'Modifier' : 'Ajouter' }} une mémoire</h2>
    
    <!-- Titre -->
    <div class="form-group">
      <label for="title">Titre *</label>
      <input 
        id="title"
        v-model="formData.title" 
        type="text"
        required
        placeholder="Ex: Mon premier vélo"
      >
      <span v-if="errors.title" class="error">{{ errors.title }}</span>
    </div>
    
    <!-- Description -->
    <div class="form-group">
      <label for="description">Description *</label>
      <textarea 
        id="description"
        v-model="formData.description"
        required
        rows="5"
        placeholder="Racontez votre souvenir..."
      ></textarea>
    </div>
    
    <!-- Date -->
    <div class="form-group">
      <label for="date">Date</label>
      <input 
        id="date"
        v-model="formData.date" 
        type="date"
      >
    </div>
    
    <!-- Upload image -->
    <div class="form-group">
      <label for="image">Photo</label>
      <input 
        id="image"
        type="file" 
        accept="image/*"
        @change="handleImageUpload"
      >
      <img v-if="formData.imagePreview" :src="formData.imagePreview">
    </div>
    
    <!-- Tags -->
    <div class="form-group">
      <label>Tags</label>
      <div class="tag-selector">
        <label v-for="tag in availableTags" :key="tag">
          <input 
            type="checkbox" 
            :value="tag"
            v-model="formData.tags"
          >
          {{ tag }}
        </label>
      </div>
    </div>
    
    <!-- Boutons -->
    <div class="form-actions">
      <button type="button" @click="cancel" class="btn-cancel">
        Annuler
      </button>
      <button type="submit" class="btn-submit">
        {{ isEditing ? 'Modifier' : 'Ajouter' }}
      </button>
    </div>
  </form>
```

#### PROPS `props`

- roomId (obligatoire) : ID de la salle où ajouter la mémoire
- memory (optionnel) : ID de la mémoire à modifier
  - *SI* présent = mode édition
  - *SINON* = mode ajout

  

#### DONNÉES `data()`

- `formData` un objet { } qui contient ces propriétés:

  - `title` (texte)
  - `description` (texte long)
  - `date` (date)
  - `image` (fichier)
  - `imagePreview` (URL pour affichage)
  - `tags` (liste [ ] de tags sélectionnés)

- `errors` (objet { } pour stocker les erreurs de validation)
- `availableTags` (liste [ ] des tags prédéfinis)

#### PROPRIÉTÉ CALCULÉE `computed`

- `isEditing`:

  - *SI* `memory` existe ALORS mode édition donc retourne `true`
  - *SINON* mode ajout donc retourne `false`


#### AU CHARGEMENT `created()`

- *SI* mode édition `isEditing` est vrai
  - Pré-remplir `formData` avec les données de `memoryStore`

#### MÉTHODES `methods`

`handleImageUpload(event)`

- Récupérer le fichier uploadé: `const file = event.target.files[0];`
- Vérifier la taille (max 2MB)
  - *SI* trop grand:
    - Afficher erreur "Image trop grande"
    - Arrêter (return)
- Convertir le fichier en base64 (pour localStorage)
- Stocker dans formData.image et formData.imagePreview

*Code pour convertir en base64 pour localStorage et stocker (*3 et 4*)*

```
const reader = new FileReader();
reader.onload = (e) => {
  this.formData.image = e.target.result;
  this.formData.imagePreview = e.target.result;
};
reader.readAsDataURL(file);
```

`validateForm()` (on va voir ça la semaine prochaine)

- Réinitialiser l'objet `errors` à un objet vide { }
- *SI* titre est vide:
  - Ajouter erreur "Le titre est obligatoire"
- *SI* description est vide:
  - Ajouter erreur "La description est obligatoire"
- RETOURNER vrai *SI* aucune erreur, *SINON* faux


`handleSubmit()`

- Valider le formulaire en appelant `validateForm()`
  - *SI* non valide:
    - Arrêter (return)
- Récupérer le store des mémoires
- *SI* mode édition:
  - Appeler store.updateMemory(idMémoire, formData)
- *SINON*:
  - Appeler store.addMemory(roomId, formData)
- Émettre (emit) événement "saved" pour fermer le formulaire (*SI* modale) ou retourner en arrière avec this.$router.back
  
`cancel()`

- Émettre (emit) un événement "cancel" pour fermer le formulaire (*SI* modale) ou retourner en arrière avec this.$router.back



## CRUD Complet dans le Store Pinia

`stores/memory.js`

### STORE memoryStore

#### ÉTAT `state`:

- rooms (liste de salles [ ]):

  - Chaque salle contient:

    - id (identifiant unique)
    - name (nom de la salle)
    - color (couleur thématique) (optionnel)
    - image d'arrière plan (optionnel)
    - memories (liste des mémoires dans cette salle)
  
#### GETTERS (fonctions de lecture) `getters`:

##### 📖 <em>R</em>EAD (C<em>R</em>UD)

`getMemoriesByRoom(roomId)`:

- Chercher la salle avec cet ID
  - *SI* la salle est trouvée:
    - RETOURNER sa liste de memories
  - *SINON*:
    - RETOURNER liste vide

`getMemoryById(memoryId)`:

- POUR chaque salle:
  - POUR chaque mémoire dans la salle:
    - *SI* mémoire.id == memoryId:
      - RETOURNER cette mémoire
    - *SI* rien trouvé:
        RETOURNER null
  
#### ACTIONS (fonctions de modification) `actions`:
  
##### ✅ <em>C</em>REATE (<em>C</em>RUD) - `addMemory(roomId, memoryData)`:

- Trouver la salle avec roomId
  - *SI* salle introuvable:
    - Afficher erreur console
    - Arrêter (return)
- Créer nouvelle mémoire:
  - Générer ID unique (timestamp actuel)
  - Copier toutes les données de memoryData
  - Ajouter date de création
- Ajouter la mémoire à room.memories
- Sauvegarder tout dans localStorage (OPTIONNEL POUR LE MOMENT)
  


##### 📖 <em>R</em>EAD (C<em>R</em>UD) - Pas d'`action`, utiliser les `getters`
  


##### ✏️ <em>U</em>PDATE (CR<em>U</em>D) - `updateMemory(memoryId, updates)`:

- POUR chaque salle:
  - Chercher l'index de la mémoire avec `memoryId`
    - *SI* trouvée:
      - Fusionner anciennes données + nouvelles données
      - Ajouter date de modification
      - Remplacer la mémoire à cet index
      - Sauvegarder dans localStorage (*OPTIONNEL POUR LE MOMENT*)
      - Terminer

    - *SI* rien trouvé:
      - Afficher erreur console
  


##### 🗑️ <em>D</em>ELETE (CRU<em>D</em>) - deleteMemory(memoryId):

- POUR chaque salle:
  - Chercher l'index de la mémoire avec `memoryId`
    - *SI* trouvée:
      - Supprimer la mémoire à cet index
      - Sauvegarder dans localStorage
      - RETOURNER vrai
    - *SI* rien trouvé:
      - RETOURNER faux

##### 💾 `saveToLocalStorage()` (*OPTIONNEL POUR LE MOMENT*)

- Convertir rooms en texte JSON
- ESSAYER:
  - Sauvegarder dans localStorage avec clé "museum-data"
- EN CAS D'ERREUR:
  - Afficher erreur console

##### 📥 `loadFromLocalStorage()` (*OPTIONNEL POUR LE MOMENT*)

- ESSAYER `try`
  - Récupérer données de localStorage avec clé "museum-data"
  - *SI* données existent:
    - Convertir de JSON vers objet
    - Remplacer rooms par ces données
- EN CAS D'ERREUR `catch`
  - Afficher erreur console



## 🎯 Utilisation dans les composants

### Exemple : `RoomView.vue` (Afficher et supprimer)

COMPOSANT `RoomView`

#### DONNÉES `data()`

- roomId (ID de la salle actuelle)
- showAddForm (booléen : modal ouvert ou fermé)
- memoryToEdit (mémoire en cours d'édition ou null)
  
#### PROPRIÉTÉ CALCULÉE `computed`

- currentRoom:
  - Chercher la salle avec roomId dans le store

- memories:
  - Obtenir toutes les mémoires de roomId depuis le store
  
#### AU CHARGEMENT `created()`

  1. Récupérer roomId depuis l'URL
  2. Charger les données du localStorage
  
  MÉTHODES `methods` :
  
  `editMemory(memory)`

    1. Stocker memory dans memoryToEdit
    2. Ouvrir le modal (showAddForm = vrai)
  
  `confirmDelete(memoryId)`

    1. Demander confirmation "Supprimer cette mémoire ?"
    2. *SI* utilisateur confirme:
          Appeler store.deleteMemory(memoryId)
  
  `handleSaved()`

    Fermer le formulaire
  
  `closeForm()`

    1. Fermer le modal (showAddForm = faux)
    2. Réinitialiser memoryToEdit à null
  
#### TEMPLATE:

Vue de la salle avec:

- Titre de la salle
- Bouton "+ Ajouter une mémoire"
- Grille de cartes mémoires:

  POUR chaque mémoire:

  - Image (*SI* existe)
  - Titre
  - Description
  - Date
  - Bouton "Modifier"
  - Bouton "Supprimer"

  - Modal avec formulaire (visible *SI* `showAddForm` = vrai)



## 📋 Flux CRUD complet

### FLUX D'AJOUT (CREATE)  

1. Utilisateur clique "Ajouter une mémoire"
   ↓
2. Modal s'ouvre avec formulaire vide (ou navigation vers page du formulaire)
   ↓
3. Utilisateur remplit les champs
   ↓
4. Utilisateur clique "Ajouter"
   ↓
5. Validation du formulaire
   *SI* valide:
     ↓
   6. Appel store.addMemory(roomId, formData)
      ↓
   7. Store crée nouvelle mémoire avec ID unique
      ↓
   8. Store l'ajoute au tableau memories de la salle
      ↓
   9. Store sauvegarde dans localStorage
      ↓
   10. Événement "saved" émis
       ↓
   11. Modal se ferme (ou navigation back à la page précédente)
       ↓
   12. Liste des mémoires se met à jour automatiquement

### FLUX DE LECTURE (READ)  

1. Utilisateur arrive sur la page d'une salle
   ↓
2. Composant charge les données du localStorage
   ↓
3. Getter store.getMemoriesByRoom(roomId) est appelé
   ↓
4. Retourne toutes les mémoires de cette salle
   ↓
5. Vue affiche les cartes de mémoires

### FLUX DE MODIFICATION (UPDATE) 

1. Utilisateur clique "Modifier" sur une mémoire
   ↓
2. Modal s'ouvre avec formulaire pré-rempli
   ↓
3. Utilisateur modifie des champs
   ↓
4. Utilisateur clique "Modifier"
   ↓
5. Validation du formulaire
   *SI* valide:
     ↓
   6. Appel store.updateMemory(memoryId, formData)
      ↓
   7. Store trouve la mémoire avec cet ID
      ↓
   8. Store fusionne anciennes + nouvelles données
      ↓
   9. Store sauvegarde dans localStorage (*OPTIONNEL POUR LE MOMENT*)
      ↓
   10. Modal se ferme
       ↓
   11. Carte de mémoire se met à jour automatiquement


### FLUX DE SUPPRESSION (DELETE)   

1. Utilisateur clique "Supprimer" sur une mémoire
   ↓
2. Popup de confirmation apparaît
   ↓
3. *SI* utilisateur confirme:
      ↓
   4. Appel store.deleteMemory(memoryId)
      ↓
   5. Store trouve la mémoire avec cet ID
      ↓
   6. Store la supprime du tableau
      ↓
   7. Store sauvegarde dans localStorage (*OPTIONNEL POUR LE MOMENT*)
      ↓
   8. Carte disparaît de la vue automatiquement



## 📊 Structure de données simplifiée pour le LocalStorage

*OPTIONNEL POUR LE MOMENT*

```
STRUCTURE localStorage:

{
  "museum-data": [
    {
      id: "room-1",
      name: "Enfance",
      memories: [
        {
          id: "mem-123456789",
          title: "Mon premier vélo",
          description: "Un vélo rouge...",
          date: "1995-06-15",
          image: "data:image/jpeg;base64,/9j/4AAQ...",
          tags: ["enfance", "cadeau"],
          createdAt: "2025-11-18T10:30:00Z"
        },
        {
          id: "mem-123456790",
          title: "Anniversaire 8 ans",
          ...
        }
      ]
    },
    {
      id: "room-2",
      name: "Voyages",
      memories: [...]
    }
  ]
}
```



## ✅ Points clés résumés

VALIDATION:

- AVANT d'enregistrer → Vérifier que les champs obligatoires sont remplis
  
IDENTIFIANTS UNIQUES:

- Utiliser Date.now() ou UUID pour générer des IDs
  
PERSISTANCE (*OPTIONNEL POUR LE MOMENT*)

- APRÈS chaque CREATE/UPDATE/DELETE → Sauvegarder dans localStorage
- AU CHARGEMENT de l'app → Charger depuis localStorage
  
CONFIRMATION:

- AVANT de supprimer → Demander confirmation utilisateur
  
RÉACTIVITÉ:

- Pinia met à jour automatiquement toutes les vues qui utilisent les données
