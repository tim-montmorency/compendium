"use strict";

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('abbr[title]').forEach(el => {
    const title = el.getAttribute('title');
    el.setAttribute('data-tippy-content', title);
    el.removeAttribute('title'); // Évite le tooltip natif
  });

  tippy('abbr[data-tippy-content]', {
    animation: 'shift-away',
    theme: 'light-border',
    placement: 'auto',
    maxWidth: 250,
    delay: [100, 0],
  });
});