# **Exercice** Vue Router


## Aperçu du résultat

<div style="max-width: 1280px"><div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe src="https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=8d815c3b-dde9-4231-b422-a45c4224cf31&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="1280" height="720" frameborder="0" scrolling="no" allowfullscreen title="apercu.mp4" style="border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;"></iframe></div></div>

## Étape 1: Créer votre premier router

*Instructions:*

- [ ] 0. Dans VS Code ouvrez le dossier ou vous classez vos exercices et ouvrez le terminal
  - [ ] Créez un projet Vue+Vite ([lien vers les instructions Vue+Vite](../vue/creation-projet-CLI.md))
  - [ ] À la question `Ignorer tout le code d'exemple et commencer avec un projet Vue vierge ?` répondez `no` et vous aurez des fichiers de départ en démo avec lesquels commencer.
  - [ ] Ajoutez *Vue Router* lors de l'installation ([sinon installez le par la suite](../vue/router-and-views.html#2-installation-et-configuration))
  - [ ]  N'oubliez pas de faire un `npm install`pour installer toutes les autres dépendances
  - [ ] Démarrez le serveur Vite `npm run dev`

- [ ] 1. Créez le fichier `src/router/index.js`
- [ ] 2. Configurez 3 routes de base:
  - [ ] `/` → `HomeView`
  - [ ] `/recipes` → `RecipesView`
  - [ ] `/recipe/:id` → `RecipeDetailView`

- [ ] 3. Dans `App.vue`, ajoutez:
  - [ ] Navigation avec `<router-link>`
  - [ ] `<router-view />` pour afficher les pages

- [ ] 4. Créez 3 fichiers `Views` simples avec juste un titre

*Code de départ d'un fichier Views:*

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

## Étape 2: Navigation programmatique

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
      // TODO: Implémenter la navigation programmatique vers la page de la recette via son id
      
    }
  }
}
</script>
```

<!-- Solution: this.$router.push({ name: 'recipe', params: { id: recipeId } }); -->

## Étape 3: Récupérer les paramètres

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
    // TODO: Récupérer/Accéder au paramètre dynamique id
    
  }
}
</script>
```

<!-- Solution: this.recipeId = this.$route.params.id; -->


## Notes de cours

- [Les routes avec Vue Router](../vue/router-and-views.html)
