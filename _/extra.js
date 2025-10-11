// Liens pour les outils de minification et d'obfuscation de code JavaScript
// https://skalman.github.io/UglifyJS-online/
// https://obfuscator.io/

// Fonction pour générer un hachage simple
// Utilisé pour donner un identifiant aux checkboxes dans une page
const generateHash = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convertir en entier 32 bits
  }
  return hash;
};

// Initialisation des tableaux triables
/* const initializeSortableTables = () => {
  const tables = document.querySelectorAll("article table:not([class])");
  tables.forEach((table) => new Tablesort(table));
}; */

// Suppression de la navigation principale sous forme d'onglets
// On retire en javascript parce qu'on veut conserver les onglets en mobile
const removeMainTabsNavigation = () => {
  const tabs = document.querySelector(".md-container > .md-tabs");
  if (tabs) tabs.outerHTML = "";
};

// Gestion de l'affichage du bouton lié au logo
// C'est surtout pour la logique en mobile.
// Je cherche à éviter qu'on puisse consulter les autres cours dans compendium
const toggleLogoButtonVisibility = () => {
  const activeTab = document.querySelector(".md-nav__item--active");
  const logoButton = document.querySelector(".md-logo ~ .md-header__button");

  if (!activeTab) {
    logoButton.classList.remove("show");
  } else {
    logoButton.classList.add("show");
  }
};

// Remplacement du lien du logo par un élément non-cliquable
// C'est surtout pour éviter que l'utilisateur sorte du contexte de son cours
const replaceLogoLinkWithSpan = () => {
  const logoLink = document.querySelector(".md-header__button.md-logo");
  if (!logoLink) return;

  const spanElement = document.createElement("span");
  Array.from(logoLink.attributes).forEach((attr) =>
    spanElement.setAttribute(attr.name, attr.value)
  );
  while (logoLink.firstChild) {
    spanElement.appendChild(logoLink.firstChild);
  }
  logoLink.parentNode.replaceChild(spanElement, logoLink);
};

// Ajout d'un lien "Ouvrir l'exemple" sous les iframes spécifiques de codepen
// Si le iframe est configuré à éditable et que le theme est celui sans tabs, on ajoute un lien vers l'exemple.
const addOpenExampleLinks = () => {
  const iframes = document.querySelectorAll("iframe");

  iframes.forEach((iframe) => {
    const url = new URL(iframe.src);
    const existingLink =
      iframe.parentNode.tagName === "FIGURE" &&
      iframe.parentNode.querySelector("figcaption a.codepen-open");

    // Vérifie si le lien existe déjà pour cet iframe
    if (
      url.searchParams.get("editable") === "true" &&
      url.searchParams.get("theme-id") === "50173" &&
      !existingLink
    ) {
      // Extrait l'identifiant du Pen de l'URL du iframe
      let penUrl = url.pathname;

      // Remplacement spécifique selon la structure du lien
      if (penUrl.includes("/embed/preview")) {
        penUrl = penUrl.replace("/embed/preview", "/full");
      } else if (penUrl.includes("/embed")) {
        penUrl = penUrl.replace("/embed", "/full");
      }

      // Construit l'URL complète
      const fullPenUrl = `https://codepen.io${penUrl}`;

      // Création de l'élément figure
      const figure = document.createElement("figure");

      // Déplacement de l'iframe dans le figure
      iframe.parentNode.insertBefore(figure, iframe);
      figure.appendChild(iframe);

      // Création du figcaption avec le lien
      const figcaption = document.createElement("figcaption");
      const link = document.createElement("a");
      link.href = fullPenUrl;
      link.className = "codepen-open";
      link.textContent = "Ouvrir l’exemple";
      link.target = "_blank";

      figcaption.appendChild(link);
      figure.appendChild(figcaption);
    }
  });
};

// Gestion des liens externes et ajout d'icônes d'accessibilité
const handleExternalLinks = () => {
  const currentDomain = window.location.hostname;
  const currentPath = window.location.pathname
    .split("/")
    .slice(0, -1)
    .join("/");

  // Extensions des fichiers à inclure
  const fileExtensions = [
    // Fichiers de compression
    ".zip",
    ".rar",
    ".7z",
    ".tar",
    ".gz",
    ".bz2",
    // Documents
    ".pdf",
    ".doc",
    ".docx",
    ".xls",
    ".xlsx",
    ".ppt",
    ".pptx",
    ".txt",
    ".rtf",
    ".odt",
    ".ods",
    ".odp",
    // Images
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".bmp",
    ".tiff",
    ".svg",
    ".webp",
    // Vidéos
    ".mp4",
    ".avi",
    ".mov",
    ".wmv",
    ".flv",
    ".mkv",
    ".webm",
  ];

  const links = document.querySelectorAll(
    'a[href]:not([href^="javascript:"]):not([href^="#"]):not([href^="mailto:"]):not([href^="tel:"])'
  );

  links.forEach((link) => {
    const href = link.href;
    const isExternal = !href.includes(currentDomain);
    const linkPath = new URL(href).pathname.split("/").slice(0, -1).join("/");
    const isOtherDirectory = !isExternal && linkPath !== currentPath;

    // Vérifie si le lien correspond à une des extensions de fichiers spécifiées
    const hasFileExtension = fileExtensions.some((ext) =>
      href.toLowerCase().endsWith(ext)
    );

    if (isExternal || hasFileExtension) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");

      // Forcer l'affichage de la boîte de dialogue de téléchargement pour les fichiers spécifiés
      if (hasFileExtension) {
        link.setAttribute("download", "");
      }

      // Vérifier si le SVG est déjà présent pour les liens externes
      if (isExternal && !link.querySelector("svg")) {
        link.insertAdjacentHTML(
          "beforeend",
          ' <svg class="ext-link-icon" style="vertical-align: middle; display: inline-block;" width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Interface / External_Link"><path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>'
        );
      }
    }
  });
};

const handleDestinations = () => {
  var destination = window.location.pathname;
  console.log("Processing destination:", destination);

  var backLinks = document.querySelectorAll(".back");

  backLinks.forEach(function (link) {
    var url = new URL(link.href);
    if (!url.searchParams.has("destination")) {
      var separator = link.href.includes("?") ? "&" : "?";
      link.href += separator + "destination=" + encodeURIComponent(destination);
    }
  });
};

const addBreadcrumb = () => {
  // Vérifie si le breadcrumb existe déjà pour éviter les doublons
  if (document.querySelector(".breadcrumb-container")) {
    return;
  }

  // Récupérer les paramètres de l'URL actuelle
  var urlParams = new URLSearchParams(window.location.search);

  if (urlParams.has("destination")) {
    var destination = urlParams.get("destination");

    // Créer un élément <p> contenant le breadcrumb
    var breadcrumbContainer = document.createElement("p");
    breadcrumbContainer.classList.add("breadcrumb-container");

    // Créer le lien avec la classe breadcrumb
    var breadcrumbLink = document.createElement("a");
    breadcrumbLink.classList.add("breadcrumb");
    breadcrumbLink.href = destination;

    // Ajouter l'icône SVG
    var svgContainer = document.createElement("span");
    svgContainer.classList.add("twemoji");
    svgContainer.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M20 13.5a6.5 6.5 0 0 1-6.5 6.5H6v-2h7.5c2.5 0 4.5-2 4.5-4.5S16 9 13.5 9H7.83l3.08 3.09L9.5 13.5 4 8l5.5-5.5 1.42 1.41L7.83 7h5.67a6.5 6.5 0 0 1 6.5 6.5"></path>
        </svg>
      `;

    // Ajouter le texte du lien (extraire la dernière partie de l'URL pour le titre)
    var linkText = document.createTextNode(
      " Cours " + extractCourseNumber(destination)
    );

    // Ajouter les éléments dans le lien
    breadcrumbLink.appendChild(svgContainer);
    breadcrumbLink.appendChild(linkText);

    // Ajouter le lien dans le paragraphe
    breadcrumbContainer.appendChild(breadcrumbLink);

    // Trouver le premier élément <h1> dans la page
    var firstH1 = document.querySelector("h1");
    if (firstH1) {
      // Insérer le breadcrumb juste avant le premier <h1>
      firstH1.parentNode.insertBefore(breadcrumbContainer, firstH1);
    } else {
      // Si aucun <h1> n'est trouvé, ajouter en haut du body
      document.body.prepend(breadcrumbContainer);
    }
  }
};

// Fonction pour extraire le numéro de cours depuis l'URL
const extractCourseNumber = (url) => {
  var match = url.match(/cours(\d+)/i);
  return match ? match[1] : "";
};

// Fonction pour l'instanciation et la configuration des feux d'artifice
const initializeFireworks = () => {
  let fireworksContainer = document.getElementById("fireworks");
  if (!fireworksContainer) {
    fireworksContainer = document.createElement("div");
    fireworksContainer.id = "fireworks";
    document.body.appendChild(fireworksContainer);
  }

  const fireworks = new Fireworks.default(fireworksContainer, {
    autoresize: true,
    acceleration: 1.0,
    opacity: 0.5,
    particles: 150,
    intensity: 60,
    lineStyle: "square",
  });

  fireworksContainer.style.display = "none"; // Masque le container initialement
  return { fireworks, fireworksContainer };
};

const initModal = () => {
  // Récupère tous les boutons
  const buttons = document.querySelectorAll(".btn-open-modal");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.dataset.modal; // récupère la valeur de data-modal
      const modal = document.getElementById("modal-" + modalId);
      if (modal) modal.style.display = "flex"; // flex pour centrer
    });
  });

  // Gestion des fermetures
  document.querySelectorAll(".modal").forEach(modal => {
    const closeBtn = modal.querySelector(".close");

    // Fermer en cliquant sur la croix
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Fermer en cliquant à l'extérieur du contenu
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
}

// Fonction pour vérifier les checkbox et afficher/masquer les feux d'artifice
const handleCheckboxesWithFireworks = (fireworks, fireworksContainer) => {
  const taskLists = document.querySelectorAll("ul.task-list");
  if (taskLists.length === 0) {
    fireworksContainer.style.display = "none";
    fireworks.stop();
    return;
  }

  const urlKey = generateHash(window.location.pathname).toString();

  const checkAllChecked = (checkboxes) => {
    if ([...checkboxes].every((cb) => cb.checked)) {
      fireworksContainer.style.display = "block";
      fireworks.start();
    } else {
      fireworksContainer.style.display = "none";
      fireworks.stop();
    }
  };

  taskLists.forEach((taskList, taskListIndex) => {
    const checkboxes = taskList.querySelectorAll('[type="checkbox"]');
    checkboxes.forEach((checkbox, checkboxIndex) => {
      const localStorageKey = `checkbox-${urlKey}-${taskListIndex}-${checkboxIndex}`;
      checkbox.checked = localStorage.getItem(localStorageKey) === "true";
      checkbox.addEventListener("change", (event) => {
        localStorage.setItem(localStorageKey, event.target.checked);
        checkAllChecked(
          document.querySelectorAll('ul.task-list [type="checkbox"]')
        );
      });
    });
    checkAllChecked(
      document.querySelectorAll('ul.task-list [type="checkbox"]')
    );
  });
};

const { fireworks, fireworksContainer } = initializeFireworks();




// Fonction qui permet d'ajouter des styles personnalisés (via la classe .finishing sur le body) pour peaufiner et ajouter une touche de finition sur le mkdocs material de base. Cette classe sera ajoutée uniquement sur le body si l'URL actuelle contient un des dossiers spécifiés dans les arguments de la fonction.
const addCustomStyles = (...folders) => {
  const path = window.location.pathname;
  const found = folders.some(str => path.includes(str));

  if (found) {
    const body = document.querySelector('body');
    if (body) {
      body.classList.add('finishing');
    }
  }
};


// Exécution de logique au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  runOnce();
  runFunctions();

  const targetNode = document.body;
  const config = { childList: true, subtree: true };
  const callback = function (mutationsList, observer) {
    for (let mutation of mutationsList) {
      console.log(mutation);
      if (mutation.type === "childList") {
        setTimeout(() => {
          runFunctions();
        }, 50);
        break;
      }
    }
  };
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
});


function runFunctions() {
  //initializeSortableTables();
  toggleLogoButtonVisibility();
  addOpenExampleLinks();
  handleExternalLinks();
  handleDestinations();
  addBreadcrumb();
  handleCheckboxesWithFireworks(fireworks, fireworksContainer);
  addCustomStyles("582-511-web5");
  initModal();
  // selectIframe();

  /* highlight.js initialization */
  if (typeof hljs !== "undefined") {
    hljs.highlightAll();
  }

}

function runOnce() {
  removeMainTabsNavigation();
  replaceLogoLinkWithSpan();
}




