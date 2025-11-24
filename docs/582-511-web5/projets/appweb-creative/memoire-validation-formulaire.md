# Validation de formulaire

## Pourquoi valider un formulaire?

- Empêcher les données invalides ou incomplètes
- Améliorer l'expérience utilisateur (messages d'erreur clairs)
- Protéger l'intégrité des données dans `localStorage`

## Types de validation

- Champs obligatoires : Titre, description
- Vérification du format : Email, date, URL
- Longueur : Min/max caractères
- Taille de fichier : Images < 2MB


## Champs obligatoires

Le libellé des champs obligatoires devrait être succédé d'un `*`.

## Pour votre projet

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



### Dans la composante : `MemoryForm.vue`

#### Dans les `data()`

Initialisez une données errors qui contiendra un objet vide:

```vue
data() {
    return {
        errors: {}
    };
}
```

#### Dans les `methods`

`handleImageUpload(event)`

- Récupérer...
- Vérifier la taille du fichier (max 2 Mo)
  - *SI* trop grand:
    - Afficher une erreur `img` contenant "Image trop grande, la taille du fichier doit être en bas de de 2 Mo" dans l'objet `errors`.
    - Arrêter (return)

`validateForm()`

- Réinitialiser l'objet `errors` à un objet vide { }

- *SI* titre est vide:
  - Ajouter une erreur `title` contenant "Le titre est obligatoire" dans l'objet `errors`

- *SI* description est vide:
  - Ajouter erreur une erreur `desc` contenant "La description est obligatoire" dans l'objet `errors`
- RETOURNER vrai *SI* aucune erreur, *SINON* faux

`handleSubmit()`

- Valider le formulaire en appelant `validateForm()`
  - *SI* non valide:
    - Arrêter (return)
- ...
  