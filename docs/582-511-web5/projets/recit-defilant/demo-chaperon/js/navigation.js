// =========================================================
// navigation.js : composant Vue, le navigateur de chapitres
// (Options API). Responsable : Personne A
// =========================================================

export function createNavigation(chapters) {
  Vue.createApp({
    data() {
      return {
        chapters: chapters,    // reçus de main.js, après le fetch
        activeChapterIndex: 0, // l'index du chapitre à l'écran
      };
    },

    methods: {
      // Défiler jusqu'au chapitre cliqué, en douceur,
      // ou d'un coup si le visiteur veut moins de mouvement
      goTo(id) {
        const reduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        document.getElementById(id).scrollIntoView({
          behavior: reduced ? "auto" : "smooth",
        });
      },

      // Le chapitre actif : la dernière section dont le haut
      // a dépassé le milieu de l'écran
      updateActive() {
        const middle = window.innerHeight / 2;
        this.chapters.forEach((chapter, index) => {
          const section = document.getElementById(chapter.id);
          if (section.getBoundingClientRect().top <= middle) {
            this.activeChapterIndex = index;
          }
        });
      },
    },

    // Une fois branché : écouter le défilement, et un premier appel
    // si la page s'ouvre au milieu
    mounted() {
      window.addEventListener("scroll", this.updateActive, {
        passive: true,
      });
      this.updateActive();
    },
  }).mount("#navigation");
}
