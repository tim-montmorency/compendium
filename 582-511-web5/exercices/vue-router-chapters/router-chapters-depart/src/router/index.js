import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ChapterView from '../views/ChapterView.vue';
// TODO: importer les Vue views du projet pour lesquelles on souhaite paramétrer des routes. 
// Notes de cours ici: https://tim-montmorency.com/compendium/582-511-web5/vue/router-and-views.html#etape-3-configuration-de-base


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  
  
    // TODO: Définir les routes pour l'accueil et les chapitres (les chapitres doivent être configurés avec un "paramètre dynamique" qui correspond à l'ID du chapitre).
    // Notes de cours ici: https://tim-montmorency.com/compendium/582-511-web5/vue/router-and-views.html#etape-3-configuration-de-base

    
   
  ]
});

export default router;