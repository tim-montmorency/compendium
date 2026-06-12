"use strict";

let _glightbox = null;

const initGLightbox = () => {
  if (typeof GLightbox === "undefined") return;

  let changed = false;

  // Handle .gallery containers — images grouped per gallery
  document.querySelectorAll(".gallery:not([data-glightbox-ready])").forEach((gallery, i) => {
    gallery.setAttribute("data-glightbox-ready", "");
    changed = true;

    // Flatten paragraphs (MkDocs wraps inline content in <p>)
    gallery.querySelectorAll("p").forEach((p) => {
      while (p.firstChild) gallery.appendChild(p.firstChild);
      p.remove();
    });

    gallery.querySelectorAll("img").forEach((img) => {
      if (img.closest("a")) {
        const a = img.closest("a");
        a.classList.add("glightbox");
        a.dataset.gallery = `gallery-${i}`;
      } else {
        const a = document.createElement("a");
        a.href = img.src;
        a.className = "glightbox";
        a.dataset.gallery = `gallery-${i}`;
        img.parentNode.insertBefore(a, img);
        a.appendChild(img);
      }
    });
  });

  // Handle individual zoomable images (data-zoom-image attribute)
  document.querySelectorAll("img[data-zoom-image]:not([data-glightbox-ready])").forEach((img) => {
    img.setAttribute("data-glightbox-ready", "");
    changed = true;

    if (!img.closest("a")) {
      const a = document.createElement("a");
      a.href = img.src;
      a.className = "glightbox";
      img.parentNode.insertBefore(a, img);
      a.appendChild(img);
    }
  });

  if (!changed) return;

  if (_glightbox) _glightbox.destroy();
  _glightbox = GLightbox({ selector: ".glightbox" });
};

document.addEventListener("DOMContentLoaded", () => {
  initGLightbox();

  // Re-init on SPA navigation (MkDocs Material instant loading)
  const observer = new MutationObserver((mutations) => {
    const relevant = mutations.some(
      (m) =>
        m.type === "childList" &&
        [...m.addedNodes].some(
          (n) =>
            n.nodeType === Node.ELEMENT_NODE &&
            !n.closest?.(".hljs, pre code.hljs")
        )
    );
    if (relevant) initGLightbox();
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
