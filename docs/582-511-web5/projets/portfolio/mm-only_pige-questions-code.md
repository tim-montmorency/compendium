# Pige : questions de code (jury du portfolio)

<!-- MM : page pour l'enseignante, à ouvrir sur le portable, en retrait. Pas dans la navigation. -->

Une pige par banque, devant l'étudiant. Si une pige ne s'applique pas à son portfolio, **Repiger** dans la même banque. Repères de temps : environ 45 s pour montrer, 45 s pour le CSS, 1 min 30 pour le JS.

<div class="pige" id="pige">

  <div class="pige__barre">
    <button type="button" class="md-button md-button--primary" data-pige-tout>Tout piger</button>
    <div class="pige__minuteur" aria-live="polite">
      <span class="pige__temps" data-pige-temps>3:00</span>
      <button type="button" class="md-button" data-pige-demarrer>Démarrer</button>
      <button type="button" class="md-button" data-pige-reinit>Réinitialiser</button>
    </div>
  </div>

  <div class="pige__grille">
    <section class="pige__carte" data-banque="a">
      <p class="pige__etiquette">A · Montrer et expliquer</p>
      <p class="pige__question" data-pige-question>…</p>
      <p class="pige__attendu" data-pige-attendu></p>
      <button type="button" class="md-button" data-pige-repiger>Repiger</button>
    </section>
    <section class="pige__carte" data-banque="css">
      <p class="pige__etiquette">B1 · Modifier en CSS</p>
      <p class="pige__question" data-pige-question>…</p>
      <p class="pige__attendu" data-pige-attendu></p>
      <button type="button" class="md-button" data-pige-repiger>Repiger</button>
    </section>
    <section class="pige__carte" data-banque="js">
      <p class="pige__etiquette">B2 · Modifier en JS ou dans les données</p>
      <p class="pige__question" data-pige-question>…</p>
      <p class="pige__attendu" data-pige-attendu></p>
      <button type="button" class="md-button" data-pige-repiger>Repiger</button>
    </section>
  </div>

</div>

<style>
.md-typeset .pige__barre {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin: 1.5rem 0;
}
.md-typeset .pige__minuteur {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.md-typeset .pige__temps {
  font-size: 2rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  min-width: 4.5rem;
}
.md-typeset .pige__temps.is-fini {
  color: var(--md-primary-fg-color);
}
.md-typeset .pige__grille {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  gap: 1rem;
}
.md-typeset .pige__carte {
  display: flex;
  flex-direction: column;
  padding: 1rem 1.2rem;
  border: 0.05rem solid var(--md-default-fg-color--lighter);
  border-top: 0.25rem solid var(--md-primary-fg-color);
  border-radius: 0.2rem;
  background-color: var(--md-code-bg-color);
}
.md-typeset .pige__etiquette {
  margin: 0 0 0.8rem;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--md-primary-fg-color);
}
.md-typeset .pige__question {
  margin: 0 0 0.8rem;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.4;
}
.md-typeset .pige__attendu {
  margin: 0 0 1rem;
  font-size: 0.7rem;
  color: var(--md-default-fg-color--light);
}
.md-typeset .pige__carte .md-button {
  margin-top: auto;
  align-self: flex-start;
}
</style>

<script>
(function () {
  const BANQUES = {
    a: [
      ["Où sont chargés vos projets?", "Ouvre le bon fichier sans chercher longtemps, pointe le fetch() et l'adresse de la source, dit ce que la fonction retourne."],
      ["Où est générée une carte de projet? Montrez la ligne qui insère le titre.", "Trouve la fonction qui fabrique la carte et le gabarit littéral (${project.title} ou l'équivalent)."],
      ["Comment le détail d'un projet sait-il quel projet afficher?", "Un id dans l'adresse, un paramètre ou un attribut data-, et le code qui le lit."],
      ["Où le site change-t-il de mise en page pour le mobile? À quelle largeur?", "Pointe la ou les @media et dit la largeur de bascule."],
      ["Où est défini le style de vos cartes de projets? Avec quel sélecteur?", "Ouvre le bon fichier CSS et nomme la classe."],
      ["Comment s'ouvre votre menu (ou un autre élément interactif)? Montrez l'événement.", "Pointe l'addEventListener et ce qu'il change (classe ajoutée, attribut, style)."],
      ["Que se passe-t-il si vos données ne se chargent pas?", "Pointe le try / catch ou le .catch(); sinon, dit ce qui arriverait et où le gérer."]
    ],
    css: [
      ["Changez la couleur d'accent du site.", "Une variable CSS modifiée à un seul endroit, ou les bonnes règles trouvées rapidement."],
      ["Changez le nombre de colonnes de la grille de projets sur desktop.", "grid-template-columns (ou l'équivalent en flexbox) sur le bon sélecteur."],
      ["Changez l'espacement entre les cartes de projets.", "gap (ou les marges) sur le conteneur de la grille."],
      ["Agrandissez les titres des cartes de projets.", "font-size sur le bon sélecteur, sans toucher aux autres titres."],
      ["Arrondissez davantage les coins des cartes (ou retirez l'arrondi).", "border-radius sur la carte."],
      ["Masquez un élément de votre choix, seulement sur mobile.", "display: none dans la bonne @media."]
    ],
    js: [
      ["Ajoutez une propriété « logiciel utilisé » à 2 ou 3 projets et affichez-la sur leur carte, sans style.", "Ajoute la propriété dans la source, puis ${project.logiciel} (ou l'équivalent) dans le gabarit de la carte."],
      ["Ajoutez un projet fictif dans votre source de données.", "Le projet apparaît sans toucher au HTML. Sait expliquer pourquoi."],
      ["Affichez sur chaque carte une propriété déjà présente dans vos données, mais pas encore affichée (ex. l'année).", "Trouve le gabarit de la carte et y ajoute la propriété."],
      ["Changez le texte du lien ou du bouton de chaque carte (ex. « Voir le projet » devient « Découvrir »).", "Modifie le gabarit JS, pas le HTML statique."],
      ["Affichez le nombre de projets au-dessus de la grille (ex. « 6 projets »).", "Utilise la longueur du tableau (projects.length) une fois les données chargées."]
    ]
  };

  const DUREE = 180;

  function init() {
    const racine = document.getElementById("pige");
    if (!racine || racine.dataset.pret) return;
    racine.dataset.pret = "1";

    const dernier = {};

    function piger(carte) {
      const cle = carte.dataset.banque;
      const banque = BANQUES[cle];
      let i;
      do {
        i = Math.floor(Math.random() * banque.length);
      } while (banque.length > 1 && i === dernier[cle]);
      dernier[cle] = i;
      carte.querySelector("[data-pige-question]").textContent = banque[i][0];
      carte.querySelector("[data-pige-attendu]").textContent = "Attendu : " + banque[i][1];
    }

    const cartes = racine.querySelectorAll("[data-banque]");
    cartes.forEach(function (carte) {
      carte.querySelector("[data-pige-repiger]").addEventListener("click", function () {
        piger(carte);
      });
    });
    racine.querySelector("[data-pige-tout]").addEventListener("click", function () {
      cartes.forEach(piger);
    });

    const affichage = racine.querySelector("[data-pige-temps]");
    const bouton = racine.querySelector("[data-pige-demarrer]");
    let reste = DUREE;
    let minuterie = null;

    function afficher() {
      const m = Math.floor(reste / 60);
      const s = String(reste % 60).padStart(2, "0");
      affichage.textContent = m + ":" + s;
      affichage.classList.toggle("is-fini", reste === 0);
    }

    function arreter() {
      clearInterval(minuterie);
      minuterie = null;
      bouton.textContent = "Démarrer";
    }

    bouton.addEventListener("click", function () {
      if (minuterie) {
        arreter();
        return;
      }
      if (reste === 0) return;
      bouton.textContent = "Pause";
      minuterie = setInterval(function () {
        reste = Math.max(0, reste - 1);
        afficher();
        if (reste === 0) arreter();
      }, 1000);
    });

    racine.querySelector("[data-pige-reinit]").addEventListener("click", function () {
      arreter();
      reste = DUREE;
      afficher();
    });

    afficher();
  }

  if (window.document$) {
    window.document$.subscribe(init);
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
</script>
