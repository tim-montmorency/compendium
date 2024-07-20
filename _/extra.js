// https://skalman.github.io/UglifyJS-online/
// https://obfuscator.io/

// ref: https://squidfunk.github.io/mkdocs-material/reference/data-tables/?h=table#sortable-tables-docsjavascriptstablesortjs
document$.subscribe(function() {
    var tables = document.querySelectorAll("article table:not([class])")
    tables.forEach(function(table) {
        new Tablesort(table)
    })
})

// Retire la navigation principale sous forme de tabs 
document.querySelector('.md-container > .md-tabs').outerHTML = '';

// Retrait du lien sur le logo 
var aElement = document.querySelector('.md-header__button.md-logo');
var spanElement = document.createElement('span');
Array.from(aElement.attributes).forEach(attr => {
    spanElement.setAttribute(attr.name, attr.value);
});
while (aElement.firstChild) {
    spanElement.appendChild(aElement.firstChild);
}
aElement.parentNode.replaceChild(spanElement, aElement);

document.addEventListener("DOMContentLoaded", function() {
    const iframes = document.querySelectorAll("iframe");

    iframes.forEach(iframe => {
        const url = new URL(iframe.src);
        const editable = url.searchParams.get("editable");
        const themeId = url.searchParams.get("theme-id");

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

// Extlink
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
            if (isExternal) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
                link.innerHTML += ' <svg style="vertical-align: middle; display: inline-block;" width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Interface / External_Link"><path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#4051b5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>';
            }
        }
    }
});

// Checkbox memory
document.addEventListener('DOMContentLoaded', (event) => {

    const taskLists = document.querySelectorAll('.task-list');

    if (taskLists.length === 0) { // Correction de l'égalité
        return;
    }

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

    const checkAllChecked = (checkboxes) => {
        if (Array.from(checkboxes).every(cb => cb.checked)) {
            fireworks.start();
        } else {
            fireworks.stop();
        }
    };

    taskLists.forEach((taskList, taskListIndex) => {
        const checkboxes = taskList.querySelectorAll('[type="checkbox"]');
        checkboxes.forEach((checkbox, checkboxIndex) => {
            const isChecked = localStorage.getItem(`checkbox-${taskListIndex}-${checkboxIndex}`) === 'true';
            checkbox.checked = isChecked;
            checkbox.addEventListener('change', (event) => {
                checkAllChecked(checkboxes);
                localStorage.setItem(`checkbox-${taskListIndex}-${checkboxIndex}`, event.target.checked);
            });
        });
        checkAllChecked(checkboxes);
    });

});

/* OpenDyslexic font switch */
// document.addEventListener("DOMContentLoaded", function() {
//     const dyslexicIcon = document.getElementById('icon-dyslexic');
//     const defaultIcon = document.getElementById('icon-default');
//     const toggleButton = document.querySelector('.md-header__opendyslexic');
  
//     // Function to update the icon visibility based on localStorage
//     function updateIconVisibility() {
//       const body = document.body;
//       const isDyslexic = localStorage.getItem('isDyslexic') === 'true';
//       if (isDyslexic) {
//         dyslexicIcon.style.display = 'none';
//         defaultIcon.style.display = 'block';
//         body.style.setProperty('--md-text-font-family', '"OpenDyslexic", sans-serif');
//       } else {
//         dyslexicIcon.style.display = 'block';
//         defaultIcon.style.display = 'none';
//         body.style.removeProperty('--md-text-font-family');
//       }
//     }
  
//     // Initial visibility based on localStorage
//     updateIconVisibility();
  
//     // Add event listener to toggle button
//     toggleButton.addEventListener('click', function() {
//       const isDyslexic = localStorage.getItem('isDyslexic') === 'true';
//       localStorage.setItem('isDyslexic', !isDyslexic);
//       updateIconVisibility();
//     });
//   });