// =========================================================
// progression.js : composant Vue, la barre de progression
// (Options API). Responsable : Personne B
// =========================================================

export function createProgressBar() {
  Vue.createApp({
    data() {
      return {
        progress: 0, // de 0 (en haut de la page) à 1 (en bas)
      };
    },

    methods: {
      // La distance défilée, divisée par la distance totale
      updateProgress() {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        this.progress = max > 0 ? window.scrollY / max : 0;
      },
    },

    // Une fois branché : écouter le défilement, et un premier appel
    mounted() {
      window.addEventListener("scroll", this.updateProgress, {
        passive: true,
      });
      this.updateProgress();
    },
  }).mount("#barre-progression");
}
