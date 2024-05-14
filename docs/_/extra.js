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
