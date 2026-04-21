"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Sélectionner toutes les galeries
  const galleries = document.querySelectorAll(".gallery");

  // Parcourir chaque galerie
  galleries.forEach((gallery) => {
    // Trouver toutes les images dans la galerie
    const images = gallery.querySelectorAll("img");

    const paragraphs = gallery.querySelectorAll("p");
    paragraphs.forEach((p) => {
      while (p.firstChild) {
        gallery.appendChild(p.firstChild);
      }
      p.remove();
    });

    // Transformer chaque image pour être compatible avec LightGallery
    images.forEach((img) => {
      // Créer un lien autour de chaque image si nécessaire
      if (!img.closest("a")) {
        const link = document.createElement("a");
        link.href = img.src; // Utiliser l'attribut src de l'image pour lier à la version grand format
        //link.setAttribute("data-lg-size", "1200-800"); // Exemple de dimensions (à ajuster si nécessaire)

        // Insérer l'image dans le lien
        img.parentNode.insertBefore(link, img);
        link.appendChild(img);
      }
    });

    // Initialiser LightGallery sur la galerie
    lightGallery(gallery, {
      selector: "a", // Indique que seuls les éléments <a> seront pris en compte
    });
  });
});
