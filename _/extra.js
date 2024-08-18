// Liens pour les outils de minification et d'obfuscation de code JavaScript
// https://skalman.github.io/UglifyJS-online/
// https://obfuscator.io/

// Fonction pour générer un hachage simple
const hashCode = (str) => {
    let hash = 0, i, chr;
    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convertir en entier 32 bits
    }
    return hash;
};

// Référence : https://squidfunk.github.io/mkdocs-material/reference/data-tables/?h=table#sortable-tables-docsjavascriptstablesortjs
document$.subscribe(function () {
    var tables = document.querySelectorAll("article table:not([class])")
    tables.forEach(function (table) {
        new Tablesort(table)
    })
})

// Retire la navigation principale sous forme d'onglets
document.querySelector('.md-container > .md-tabs').outerHTML = '';

// Action une fois que le DOM est entièrement chargé
document.addEventListener("DOMContentLoaded", function () {
    var tabsElement = document.querySelector('.md-nav__link--active');
    // Si aucun onglet actif, retirer le bouton associé au logo
    if (tabsElement === null) {
        document.querySelector('.md-logo ~ .md-header__button').remove();
    } else {
        document.querySelector('.md-logo ~ .md-header__button').classList.add("show");
    }
});

// Remplace le lien du logo par un élément non-cliquable
var aElement = document.querySelector('.md-header__button.md-logo');
var spanElement = document.createElement('span');
// Copie tous les attributs de l'élément <a> vers <span>
Array.from(aElement.attributes).forEach(attr => {
    spanElement.setAttribute(attr.name, attr.value);
});
// Transfère les enfants de l'élément <a> vers <span>
while (aElement.firstChild) {
    spanElement.appendChild(aElement.firstChild);
}
// Remplace <a> par <span>
aElement.parentNode.replaceChild(spanElement, aElement);

// Ajout d'un lien "Ouvrir l'exemple" sous les iframes spécifiques
document.addEventListener("DOMContentLoaded", function () {
    const iframes = document.querySelectorAll("iframe");

    iframes.forEach(iframe => {
        const url = new URL(iframe.src);
        const editable = url.searchParams.get("editable");
        const themeId = url.searchParams.get("theme-id");

        // Condition spécifique pour ajouter le lien
        if (editable === "true" && themeId === "50173") {
            const link = document.createElement("a");
            link.href = iframe.src;
            link.className = "codepen-open";
            link.textContent = "Ouvrir l’exemple";
            link.target = "_blank";
            iframe.parentNode.insertBefore(link, iframe.nextSibling);
        }
    });
});

// ExtLink
// Ajout d'icônes et de comportements spécifiques pour les liens externes
document.addEventListener('DOMContentLoaded', () => {
    var currentDomain = window.location.hostname;
    var currentPath = window.location.pathname.split('/').slice(0, -1).join('/');
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var href = link.href;
        if (href && !href.startsWith('javascript:') && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
            var isExternal = !href.includes(currentDomain);
            var isOtherDirectory = false;
            if (!isExternal) {
                var linkPath = new URL(href).pathname.split('/').slice(0, -1).join('/');
                isOtherDirectory = linkPath !== currentPath;
            }
            // Ajoute des attributs spécifiques aux liens externes
            if (isExternal) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
                link.innerHTML += ' <svg style="vertical-align: middle; display: inline-block;" width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Interface / External_Link"><path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#4051b5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>';
            }
        }
    }
});

// Gestion de la mémoire des cases à cocher (checkboxes)
document.addEventListener('DOMContentLoaded', (event) => {

    const taskLists = document.querySelectorAll('.task-list');

    if (taskLists.length === 0) {
        return;
    }

    // Génère une clé unique basée sur l'URL
    const getUrlKey = () => {
        const url = new URL(window.location.href);
        return hashCode(url.pathname).toString();
    };

    const fireworksContainer = document.createElement('div');
    fireworksContainer.id = 'fireworks';
    document.body.appendChild(fireworksContainer);

    const fireworks = new Fireworks.default(fireworksContainer, {
        autoresize: true,
        acceleration: 1.0,
        opacity: 0.5,
        particles: 150,
        intensity: 60,
        lineStyle: 'square',
    });

    // Vérifie si toutes les cases sont cochées pour déclencher l'effet de feu d'artifice
    const checkAllChecked = (checkboxes) => {
        if (Array.from(checkboxes).every(cb => cb.checked)) {
            fireworks.start();
        } else {
            fireworks.stop();
        }
    };

    const urlKey = getUrlKey();

    taskLists.forEach((taskList, taskListIndex) => {
        const checkboxes = taskList.querySelectorAll('[type="checkbox"]');
        checkboxes.forEach((checkbox, checkboxIndex) => {
            const localStorageKey = `checkbox-${urlKey}-${taskListIndex}-${checkboxIndex}`;
            const isChecked = localStorage.getItem(localStorageKey) === 'true';
            checkbox.checked = isChecked;
            checkbox.addEventListener('change', (event) => {
                checkAllChecked(checkboxes);
                localStorage.setItem(localStorageKey, event.target.checked);
            });
        });
        checkAllChecked(checkboxes);
    });

});