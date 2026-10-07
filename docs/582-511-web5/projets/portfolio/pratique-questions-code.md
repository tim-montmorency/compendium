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

[:material-presentation-play: Présentation devant le jury : les consignes](./presentation-jury.md#questions-jury){ .md-button }

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
  // Les demandes sont encodées pour ne pas se lire d'un coup d'oeil dans le code source.
  const DONNEES = "eyJhIjogWyJNb250cmV6IGxhIHByZW1pw6hyZSBmb25jdGlvbiBxdWkgcydleMOpY3V0ZSBhdSBjaGFyZ2VtZW50IGRlIGxhIHBhZ2UuIFF1J2VzdC1jZSBxdWkgbGEgZMOpY2xlbmNoZT8iLCAiU3VpdmV6IHVuIGNsaWMgc3VyIHVuZSBjYXJ0ZSBkZSBwcm9qZXQgOiBxdWVsIGNvZGUgcydleMOpY3V0ZSwgZGFucyBsJ29yZHJlPyIsICJPw7kgc29udCBkw6lmaW5pZXMgdm9zIGNvdWxldXJzIGV0IHZvcyBwb2xpY2VzICh2YXJpYWJsZXMgQ1NTIG91IGF1dHJlKT8iLCAiT8O5IGwnaW1hZ2UgZCd1bmUgY2FydGUgcmXDp29pdC1lbGxlIHNvbiB0ZXh0ZSBhbHRlcm5hdGlmIChhbHQpPyIsICJMZSBjb250ZW51IGRlIHZvdHJlIHNlY3Rpb24gw4AgcHJvcG9zIGVzdC1pbCBkYW5zIGxlIEhUTUwgb3UgZGFucyB2b3MgZG9ubsOpZXM/IFBvdXJxdW9pIGNlIGNob2l4PyIsICJNb250cmV6IG/DuSBlc3QgaW1wb3J0w6llIHZvdHJlIHBvbGljZSBkZSBjYXJhY3TDqHJlcy4iXSwgImNzcyI6IFsiQ2hhbmdleiBsYSBjb3VsZXVyIGRlIGZvbmQgZHUgcGllZCBkZSBwYWdlLiIsICJDaGFuZ2V6IGxhIHBvbGljZSBvdSBsYSBncmFpc3NlIGRlcyB0aXRyZXMgZGUgc2VjdGlvbi4iLCAiQWpvdXRleiB1bmUgb21icmUgYXV4IGNhcnRlcyBhdSBzdXJ2b2wuIiwgIkNoYW5nZXogbGEgbGFyZ2V1ciBtYXhpbWFsZSBkdSBjb250ZW51IGRlIGxhIHBhZ2UuIiwgIkNoYW5nZXogbGEgY291bGV1ciBkZXMgbGllbnMgYXUgc3Vydm9sLiJdLCAianMiOiBbIkNoYW5nZXogbGUgdGl0cmUgZCd1biBwcm9qZXQgZGFucyB2b3RyZSBzb3VyY2UgZGUgZG9ubsOpZXMgOiBpbCBkb2l0IGNoYW5nZXIgc3VyIGxlIHNpdGUgc2FucyB0b3VjaGVyIGF1IEhUTUwuIiwgIkFmZmljaGV6IHNldWxlbWVudCBsZXMgMyBwcmVtaWVycyBwcm9qZXRzIChpbmRpY2UgOiBzbGljZSkuIiwgIkFqb3V0ZXogdW5lIHByb3ByacOpdMOpIHZlZGV0dGU6IHRydWUgw6AgdW4gcHJvamV0LCBldCB1bmUgY2xhc3NlIENTUyBzcMOpY2lhbGUgc3VyIHNhIGNhcnRlIHNldWxlbWVudC4iLCAiR8OpbsOpcmV6IGxlIGFsdCBkZSBsJ2ltYWdlIGRlIGNoYXF1ZSBjYXJ0ZSDDoCBwYXJ0aXIgZGVzIGRvbm7DqWVzIChleC4gbGUgdGl0cmUgZHUgcHJvamV0KS4iLCAiRMOpZmkgOiBham91dGV6IHVuZSBwcm9wcmnDqXTDqSDCqyBkdXLDqWUgZHUgcHJvamV0IMK7IMOgIHVuIHNldWwgcHJvamV0IGV0IGFmZmljaGV6LWxhIHNldWxlbWVudCBzaSBlbGxlIGV4aXN0ZS4iXX0=";
  const BANQUES = (function () {
    const octets = Uint8Array.from(atob(DONNEES), function (c) { return c.charCodeAt(0); });
    const brut = JSON.parse(new TextDecoder().decode(octets));
    const sortie = {};
    Object.keys(brut).forEach(function (cle) {
      sortie[cle] = brut[cle].map(function (q) { return [q]; });
    });
    return sortie;
  })();

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
