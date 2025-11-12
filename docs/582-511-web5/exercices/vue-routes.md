# Exercice pratique avec *Vue Router*

## Exercice 1: Créer votre premier router

*Instructions:*

1. Créez le fichier `src/router/index.js`
2. Configurez 3 routes de base:
   - `/` → HomeView
   - `/museum` → MuseumView
   - `/room/:id` → RoomView

3. Dans `App.vue`, ajoutez:
   - Navigation avec `<router-link>`
   - `<router-view />` pour afficher les pages

4. Créez 3 Views simples avec juste un titre

*Code de départ:*

```vue
<!-- src/views/HomeView.vue -->
<template>
  <div class="home">
    <h1>🏠 Bienvenue</h1>
    <p>Ceci est la page d'accueil</p>
    <router-link to="/museum">Voir le musée →</router-link>
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

Dans `MuseumView.vue`, créez une liste de salles avec des boutons. Quand on clique, naviguer vers `/room/:id`:

```vue
<template>
  <div>
    <h1>Mes Salles</h1>
    <button 
      v-for="room in rooms" 
      :key="room.id"
      @click="goToRoom(room.id)"
    >
      {{ room.name }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rooms: [
        { id: 'room-1', name: 'Tokyo' },
        { id: 'room-2', name: 'Paris' },
        { id: 'room-3', name: 'New York' }
      ]
    }
  },
  methods: {
    goToRoom(roomId) {
      // TODO: Implémenter la navigation
      this.$router.push({ name: 'room', params: { id: roomId } });
    }
  }
}
</script>
```

## Exercice 3: Récupérer les paramètres

Dans `RoomView.vue`, affichez l'ID de la salle depuis `this.$route.params.id`:

```vue
<template>
  <div>
    <h1>Salle: {{ roomId }}</h1>
    <button @click="$router.back()">← Retour</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roomId: null
    }
  },
  created() {
    // TODO: Récupérer l'ID depuis les params
    this.roomId = this.$route.params.id;
  }
}
</script>
```
