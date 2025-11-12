# Exercice pratique avec *Vue Router*

Vous pouvez vous placer en équipe de deux pour faire l'exercice. Nul besoin d'être les même équipes que le projet final.

## Exercice 1: Créer votre premier router

*Instructions:*

- [ ] 0. Dans VS Code ouvrez le dossier ou vous classez vos exercices et ouvrez le terminal
  - [ ] Créez un projet Vue+Vite ([lien vers les instructions Vue+Vite](../vue/creation-projet-CLI.md))
  - [ ] Ajoutez *Vue Router* lors de l'installation ([sinon installez le pas la suite](../vue/router-and-views.html#2-installation-et-configuration))
  - [ ] Démarrez le serveur Vite `npm run dev`
  - [ ]  N'oubliez pas de faire un `npm install`pour installer toutes les autres dépendances
- [ ] 1. Créez le fichier `src/router/index.js`
- [ ] 2. Configurez 3 routes de base:
  - [ ] `/` → HomeView
  - [ ] `/recipes` → RecipesView
  - [ ] `/recipe/:id` → RecipeDetailView

- [ ] 3. Dans `App.vue`, ajoutez:
  - [ ] Navigation avec `<router-link>`
  - [ ] `<router-view />` pour afficher les pages

- [ ] 4. Créez 3 Views simples avec juste un titre

*Code de départ:*

```vue
<!-- src/views/HomeView.vue -->
<template>
  <div class="home">
    <h1>🍳 Bienvenue au Livre de Recettes</h1>
    <p>Découvrez des recettes délicieuses</p>
    <router-link to="/recipes">Voir les recettes →</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>
```

## Exercice 2: Navigation programmatique

*Instructions:*

- [ ] Dans `RecipesView.vue`, créez une liste de recettes avec des boutons. Quand on clique, naviguer vers `/recipe/:id`:

```vue
<template>
  <div>
    <h1>Mes Recettes</h1>
    <button 
      v-for="recipe in recipes" 
      :key="recipe.id"
      @click="goToRecipe(recipe.id)"
    >
      {{ recipe.name }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipes: [
        { id: 'recipe-1', name: 'Pâtes Carbonara' },
        { id: 'recipe-2', name: 'Tarte aux Pommes' },
        { id: 'recipe-3', name: 'Salade César' }
      ]
    }
  },
  methods: {
    goToRecipe(recipeId) {
      // TODO: Implémenter la navigation
      
    }
  }
}
</script>
```

<!-- Solution: this.$router.push({ name: 'recipe', params: { id: recipeId } }); -->

## Exercice 3: Récupérer les paramètres

- [ ] Dans `RecipeDetailView.vue`, affichez l'ID de la salle depuis `this.$route.params.id`:

```vue
<template>
  <div>
    <h1>Recette: {{ recipeId }}</h1>
    <button @click="$router.back()">← Retour aux recettes</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipeId: null
    }
  },
  created() {
    // TODO: Récupérer l'ID depuis les params
    
  }
}
</script>
```

<!-- Solution: this.recipeId = this.$route.params.id; -->
