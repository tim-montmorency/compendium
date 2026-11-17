# **Vue.js** View dans une application monopage (SPA)

Dans les applications monopage (SPA: Single Page Application), les composants de type `views` se différencient des composants généraux puisqu'ils représentent une page accessible via un URL comme par exemple pour *mémoires interactives*: `/rooms/memory/65/` ou pour *trace ton chemin*: `/story/chapter/4b/`.

## Différences entre `composant` et `view`

- *`components`* → petits blocs réutilisables de ton interface  
- *`views`* → pages entières, souvent liées à une *route (un URL)*

## View (page)

*Emplacement:* `src/views/`  
*Rôle:* Page complète accessible via URL

Les views sont *les pages* (ou “vues”) de ton application, généralement reliées au *routeur (vue-router)*.  

Exemples : 

- `HomeView.vue`  
- `AboutView.vue`  
- `ProfileView.vue`  

Chaque vue représente *un écran complet* affiché selon l’URL courante :

```js
// router/index.js
{
  path: '/about',
  name: 'about',
  component: () => import('../views/AboutView.vue')
}


```vue
<!-- src/views/RoomView.vue -->
<template>
  <div class="room-view">
    <RoomHeader :room="room" />
    <MemoryGrid :memories="memories" />
    <AddMemoryButton @click="openModal" />
  </div>
</template>

<script>
import RoomHeader from '@/components/rooms/RoomHeader.vue';
import MemoryGrid from '@/components/memories/MemoryGrid.vue';
import AddMemoryButton from '@/components/ui/AddMemoryButton.vue';

export default {
  components: {
    RoomHeader,
    MemoryGrid,
    AddMemoryButton
  },
  // Logique de la page...
}
</script>
```

*Caractéristiques d'une View:*

- ✅ Accessible via une route (URL)
- ✅ Inclut plusieurs composants
- ✅ Gère la logique de la page
- ✅ Accède aux stores (Pinia)
- ✅ Nom avec suffixe `View.vue`



## Composant (partie d'une page)

*Emplacement:* `src/components/`  
*Rôle:* Partie réutilisable de l'UI

Les composants sont *les morceaux d’interface réutilisables* : 

- Un bouton (`Button.vue`)  
- Une carte d’utilisateur (`UserCard.vue`)  
- Une barre de navigation (`Navbar.vue`)  
- Un modal (`Modal.vue`)  

👉 Ces éléments ne correspondent pas à une page complète, mais à des *parties* de page qu’on assemble à l’intérieur des vues.


```vue
<!-- src/components/rooms/RoomCard.vue -->
<template>
  <div class="room-card">
    <h3>{{ room.name }}</h3>
    <p>{{ room.description }}</p>
    <button @click="$emit('click', room.id)">Voir</button>
  </div>
</template>

<script>
export default {
  props: {
    room: {
      type: Object,
      required: true
    }
  },
  emits: ['click']
}
</script>
```

*Caractéristiques d'un composant:*

- ✅ Utilisé DANS les Views
- ✅ Réutilisable
- ✅ Props et Events
- ✅ Focalisé sur une tâche




## Règle simple

> *View = Page avec URL*  
> *Composant = Bloc réutilisable*
