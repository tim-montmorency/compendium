// =========================================================
// dataviz.js : deux moments dataviz au défilement
// 1. On attend que le moment approche de l'écran (IntersectionObserver).
// 2. On charge les données réelles (fetch).
// 3. On construit la forme (chiffre, points, barres).
// 4. On ajoute la classe .est-visible : le CSS fait l'animation.
// =========================================================

const moinsDeMouvement = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------------------------------------------------------
// Outil : lancer une fonction une seule fois, quand un élément approche
// ---------------------------------------------------------
function quandVisible(element, action) {
  const observateur = new IntersectionObserver((entrees) => {
    entrees.forEach((entree) => {
      if (entree.isIntersecting) {
        observateur.unobserve(entree.target);
        action(entree.target);
      }
    });
  }, { rootMargin: "0px 0px -25% 0px" }); // quand le haut du moment atteint les 3/4 de l'écran
  observateur.observe(element);
}

// ---------------------------------------------------------
// Outil : faire défiler un nombre de 0 jusqu'à sa valeur finale
// ---------------------------------------------------------
function animerCompteur(element, cible, duree = 1500) {
  if (moinsDeMouvement) {
    element.textContent = cible;
    return;
  }
  const debut = performance.now();
  function etape(maintenant) {
    const progression = Math.min((maintenant - debut) / duree, 1);
    const adouci = 1 - Math.pow(1 - progression, 3); // ralentit à la fin
    element.textContent = Math.round(cible * adouci);
    if (progression < 1) requestAnimationFrame(etape);
  }
  requestAnimationFrame(etape);
}

// =========================================================
// Moment 1 : les séismes de la semaine (API USGS, sans clé)
// =========================================================
async function chargerSeismes() {
  const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson";
  const reponse = await fetch(url);
  if (!reponse.ok) throw new Error("USGS indisponible (" + reponse.status + ")");
  const donnees = await reponse.json();

  // On ne garde que ce dont on a besoin : la magnitude et le lieu
  return donnees.features.map((seisme) => ({
    magnitude: seisme.properties.mag,
    lieu: seisme.properties.place,
  }));
}

async function afficherSeismes(section) {
  let seismes;
  try {
    seismes = await chargerSeismes();
  } catch (erreur) {
    console.error(erreur);
    section.querySelector(".moment__chute").textContent = "Les données n'ont pas pu être chargées. Rechargez la page.";
    section.classList.add("est-visible");
    return;
  }

  // 1. Le chiffre géant
  animerCompteur(section.querySelector(".compteur"), seismes.length);

  // 2. Un point par séisme : sa taille dépend de la magnitude
  const conteneur = section.querySelector(".points");
  conteneur.innerHTML = seismes.map((s, i) => {
    const taille = Math.max(4, (s.magnitude - 2) * 7); // magnitude 2,5 : 4 px; magnitude 6 : 28 px
    const classe = s.magnitude >= 6 ? "fort" : "";
    return `<span class="${classe}" style="--taille:${taille}px; --i:${i}"></span>`;
  }).join("");

  // 3. La chute : ce que la donnée raconte
  const plusFort = seismes.reduce((max, s) => (s.magnitude > max.magnitude ? s : max));
  section.querySelector(".moment__chute").innerHTML =
    `Le plus fort : <strong>magnitude ${plusFort.magnitude.toFixed(1).replace(".", ",")}</strong>, ${plusFort.lieu}. En rouge, ceux de magnitude 6 et plus.`;

  // 4. La révélation : le CSS anime tout ce qui est dans .est-visible
  requestAnimationFrame(() => section.classList.add("est-visible"));
}

// =========================================================
// Moment 2 : la météo de Montréal (API Open-Meteo, sans clé)
// =========================================================
async function chargerMeteo() {
  const url = "https://api.open-meteo.com/v1/forecast"
    + "?latitude=45.50&longitude=-73.57"
    + "&daily=temperature_2m_max&timezone=America%2FToronto";
  const reponse = await fetch(url);
  if (!reponse.ok) throw new Error("Open-Meteo indisponible (" + reponse.status + ")");
  const donnees = await reponse.json();

  // Deux tableaux de même longueur : les dates et les températures
  return donnees.daily.time.map((date, i) => ({
    date: date,
    max: donnees.daily.temperature_2m_max[i],
  }));
}

function nomDuJour(dateTexte) {
  // "2026-10-21" devient "mer."
  const date = new Date(dateTexte + "T12:00:00");
  return date.toLocaleDateString("fr-CA", { weekday: "short" });
}

async function afficherMeteo(section) {
  let jours;
  try {
    jours = await chargerMeteo();
  } catch (erreur) {
    console.error(erreur);
    section.querySelector(".moment__chute").textContent = "Les données n'ont pas pu être chargées. Rechargez la page.";
    section.classList.add("est-visible");
    return;
  }

  const plusChaud = Math.max(...jours.map((j) => j.max));
  const plusFroid = Math.min(...jours.map((j) => j.max));
  // L'échelle commence un peu sous le jour le plus froid, pour que les écarts se voient
  const bas = Math.min(0, plusFroid - 2);

  section.querySelector(".barres").innerHTML = jours.map((jour, i) => {
    const hauteur = ((jour.max - bas) / (plusChaud - bas)) * 100; // en %
    const classe = jour.max === plusChaud ? "barre barre--max" : "barre";
    return `
      <div class="${classe}" style="--i:${i}">
        <span class="barre__valeur">${Math.round(jour.max)}°</span>
        <span class="barre__colonne" style="--hauteur:${hauteur}%"></span>
        <span class="barre__jour">${nomDuJour(jour.date)}</span>
      </div>`;
  }).join("");

  const ecart = Math.round(plusChaud - plusFroid);
  section.querySelector(".moment__chute").innerHTML =
    `<strong>${ecart} degrés</strong> d'écart entre le jour le plus chaud et le plus froid de la semaine.`;

  requestAnimationFrame(() => section.classList.add("est-visible"));
}

// =========================================================
// On branche chaque moment à son observateur
// =========================================================
quandVisible(document.querySelector("[data-moment='seismes']"), afficherSeismes);
quandVisible(document.querySelector("[data-moment='meteo']"), afficherMeteo);
