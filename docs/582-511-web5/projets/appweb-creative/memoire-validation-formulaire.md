# Validation de formulaire

Dans le formulaire, sous chaque champs à valider, vous pouvez ajouter une ligne qui affichera le message d'erreur s'il la donnée contient quelque chose:

`<span v-if="errors.title" class="error">{{ errors.title }}</span>`

Voici l'exemple complet:

```vue
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
```



## Dans la composante : `MemoryForm.vue`

### Dans les `data()`

Initialisez une données errors qui contiendra un objet vide:

```vue
data() {
    return {
        errors: {}
    };
}
```

### Dans les `methods`


`validateForm()`

- Réinitialiser l'objet `errors` à un objet vide { }

- *SI* titre est vide:
  - Ajouter erreur "Le titre est obligatoire" à l'objet `errors`

- *SI* description est vide:
  - Ajouter erreur "La description est obligatoire"
- RETOURNER vrai *SI* aucune erreur, *SINON* faux


`handleSubmit()`

- Valider le formulaire en appelant `validateForm()`
  - *SI* non valide:
    - Arrêter (return)
- Récupérer le store des mémoires
- *SI* mode édition:
  - Appeler `store.updateMemory(memoryId, formData)`
- *SINON*:
  - Appeler `store.addMemory(roomId, formData)`
- Émettre (`emit`) événement `saved` pour fermer le formulaire (si modale) ou retourner en arrière avec `this.$router.back`
  