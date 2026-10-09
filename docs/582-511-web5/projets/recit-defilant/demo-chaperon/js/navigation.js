// =========================================================
// navigation.js : le composant Vue imposé (Options API)
// Barre de progression + navigateur de chapitres
// =========================================================

function creerNavigation(chapitres) {
  Vue.createApp({
    data() {
      return {
        chapitres: chapitres, // reçus de main.js, après le fetch du JSON
        actif: 0,             // index du chapitre à l'écran
        progression: 0,       // de 0 à 1 : où en est-on dans la page
      };
    },

    methods: {
      // Défiler jusqu'au chapitre cliqué
      aller(id) {
        const comportement = moinsDeMouvement ? "auto" : "smooth";
        document.getElementById(id).scrollIntoView({ behavior: comportement });
      },

      // Calculer la progression et le chapitre actif
      majDefilement() {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        this.progression = max > 0 ? window.scrollY / max : 0;

        const milieu = window.innerHeight / 2;
        this.chapitres.forEach((chapitre, index) => {
          const section = document.getElementById(chapitre.id);
          if (section && section.getBoundingClientRect().top <= milieu) {
            this.actif = index;
          }
        });
      },
    },

    mounted() {
      window.addEventListener("scroll", this.majDefilement, { passive: true });
      this.majDefilement();
    },
  }).mount("#navigation");
}
