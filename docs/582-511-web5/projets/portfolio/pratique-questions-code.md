# Pratique : « Mon code, je le comprends et je l'assume »

En duo, chacun son tour : l'un **pige** et joue le jury, l'autre **répond** sur son propre portfolio, dans VS Code, **Copilot fermé**. Puis on inverse, et on recommence avec une nouvelle pige.

Ces demandes ne sont **pas** celles du jury : elles sont du même genre et du même niveau, pour vous habituer au format. Le jour du jury, vous aurez 3 minutes : environ 45 s pour montrer, 45 s pour le CSS, 1 min 30 pour le JS.

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
      <button type="button" class="md-button" data-pige-repiger>Repiger</button>
    </section>
    <section class="pige__carte" data-banque="css">
      <p class="pige__etiquette">B1 · Modifier en CSS</p>
      <p class="pige__question" data-pige-question>…</p>
      <button type="button" class="md-button" data-pige-repiger>Repiger</button>
    </section>
    <section class="pige__carte" data-banque="js">
      <p class="pige__etiquette">B2 · Modifier en JS ou dans les données</p>
      <p class="pige__question" data-pige-question>…</p>
      <button type="button" class="md-button" data-pige-repiger>Repiger</button>
    </section>
  </div>

</div>


## La grille du partenaire

Pendant que votre partenaire répond, observez :

- [ ] Il trouve le bon fichier en moins de 30 secondes.
- [ ] Il explique ce que fait le code en ses mots, sans le lire ligne par ligne.
- [ ] La modification fonctionne quand on recharge la page.
- [ ] Il n'a utilisé ni Copilot ni Internet.

Une case reste vide? Notez la notion à revoir, ou **levez la main** : Marie-Michelle vient vous voir.

[:material-presentation-play: Présentation devant le jury : les consignes](presentation-jury.md#questions-jury){ .md-button }

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
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
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
      ["Montrez la première fonction qui s'exécute au chargement de la page. Qu'est-ce qui la déclenche?"],
      ["Suivez un clic sur une carte de projet : quel code s'exécute, dans l'ordre?"],
      ["Où sont définies vos couleurs et vos polices (variables CSS ou autre)?"],
      ["Où l'image d'une carte reçoit-elle son texte alternatif (alt)?"],
      ["Le contenu de votre section À propos est-il dans le HTML ou dans vos données? Pourquoi ce choix?"],
      ["Montrez où est importée votre police de caractères."]
    ],
    css: [
      ["Changez la couleur de fond du pied de page."],
      ["Changez la police ou la graisse des titres de section."],
      ["Ajoutez une ombre aux cartes au survol."],
      ["Changez la largeur maximale du contenu de la page."],
      ["Changez la couleur des liens au survol."]
    ],
    js: [
      ["Changez le titre d'un projet dans votre source de données : il doit changer sur le site sans toucher au HTML."],
      ["Affichez seulement les 3 premiers projets (indice : slice)."],
      ["Ajoutez une propriété vedette: true à un projet, et une classe CSS spéciale sur sa carte seulement."],
      ["Générez le alt de l'image de chaque carte à partir des données (ex. le titre du projet)."],
      ["Défi : ajoutez une propriété « durée du projet » à un seul projet et affichez-la seulement si elle existe."]
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
