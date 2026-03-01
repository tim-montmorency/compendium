import { createRouter, createWebHistory } from 'vue-router';
// TODO: importer les Vue views du projet pour lesquelles on souhaite paramétrer des routes. 
// Notes de cours ici: https://tim-montmorency.com/compendium/582-511-web5/vue/router-and-views.html#etape-3-configuration-de-base

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // TODO: Définir les routes pour l'accueil, la liste des salles et la la page du détail d'une salle (les salles doivent être configurées avec un "paramètre dynamique" qui correspond à l'ID de la salle).
    // Notes de cours ici: https://tim-montmorency.com/compendium/582-511-web5/vue/router-and-views.html#etape-3-configuration-de-base
  ]
});

export default router;