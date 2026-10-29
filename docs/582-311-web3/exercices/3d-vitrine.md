---
tags:
  - Exercice
  - 3D
---

# 🧊 Vitrine 3D

L'objectif de cet exercice est de faire passer **un modèle créé dans Maya** jusqu'au navigateur, puis de le présenter dans une **vitrine interactive** avec `<model-viewer>`.

C'est le pipeline complet d'un média 3D&nbsp;: export, conversion, optimisation, classement et intégration.

<!-- ![](../assets/images/3d-vitrine.png){.w-100 data-zoom-image} -->

## Résultat attendu

Une section *hero* DaisyUI dont le visuel principal est un modèle 3D que le visiteur peut faire tourner. Une image s'affiche pendant le chargement, deux points d'intérêt présentent des détails du modèle, et un bouton permet de le voir en réalité augmentée sur cellulaire.

## Indices

Le modèle part de Maya en `.fbx`, passe par Blender et en ressort en `.glb`. Avant de l'intégrer, glissez-le dans **[gltf.report](https://gltf.report/)**&nbsp;: si le poids vous surprend, regardez d'abord du côté des textures 😜

Pour placer les points d'intérêt sans deviner les coordonnées, l'**[éditeur de model-viewer](https://modelviewer.dev/editor/)** fait le travail.

## Instructions

### Le modèle

- [ ] Choisissez un modèle réalisé dans le cours de 3D (personnage, objet, accessoire, décor simple)
- [ ] Préparez-le dans Maya&nbsp;: centré à l'origine, transformations gelées, historique supprimé
- [ ] Exportez-le en `.fbx`, puis convertissez-le en `.glb` avec Blender
- [ ] Optimisez-le avec `gltf-transform` (géométrie Draco, textures WebP, 1024&nbsp;px maximum)
- [ ] Notez dans le `README.md` le poids **avant** et **après** optimisation
- [ ] Classez le fichier dans `public/modeles/`, avec une image *poster* en WebP

!!! info "Pas de modèle Maya utilisable ?"

    Un modèle du répertoire [glTF Sample Assets](https://github.com/KhronosGroup/glTF-Sample-Assets) est accepté, à condition de le citer dans le `README.md`. L'étape d'optimisation reste obligatoire.

### La vitrine

- [ ] Créez un projet Vite avec Tailwind et DaisyUI, puis installez `@google/model-viewer` et `three`
- [ ] Intégrez le modèle dans une section *hero*, avec une taille définie en Tailwind
- [ ] Ajoutez les attributs `alt`, `camera-controls`, `poster`, `loading="lazy"` et `shadow-intensity`
- [ ] Choisissez un angle de départ flatteur avec `camera-orbit`
- [ ] Ajoutez **deux points d'intérêt** stylisés avec des composantes DaisyUI
- [ ] Si le modèle est animé, jouez une animation avec `autoplay` et `animation-name`
- [ ] Activez la réalité augmentée (`ar`)

### Vérification

- [ ] Le modèle s'affiche, tourne à la souris, et le *poster* apparaît pendant le chargement (DevTools → onglet **Network** → limitation *Slow 4G*)
- [ ] Les points d'intérêt suivent le modèle et disparaissent quand ils passent derrière
- [ ] Le site est en ligne, et le bouton de réalité augmentée fonctionne sur un cellulaire

[STOP]

## Solution de référence

```html title="index.html"
<section class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse gap-8">

    <model-viewer
      src="/modeles/perso.glb"
      poster="/modeles/perso-poster.webp"
      loading="lazy"
      alt="Le héros du jeu, tenant son épée"
      camera-controls
      camera-orbit="30deg 75deg 105%"
      shadow-intensity="1"
      autoplay
      animation-name="Idle"
      ar
      class="w-full lg:w-1/2 h-[60vh]">

      <button class="badge badge-primary" slot="hotspot-epee"
              data-position="0.35 1.1 0.1" data-normal="0 0 1">
        Épée légendaire
      </button>
      <button class="badge badge-secondary" slot="hotspot-cape"
              data-position="0 1.4 -0.2" data-normal="0 0 -1">
        Cape enchantée
      </button>

    </model-viewer>

    <div>
      <h1 class="text-5xl font-bold">Le héros</h1>
      <p class="py-6">Faites-le tourner, découvrez son équipement.</p>
    </div>

  </div>
</section>
```

```js title="src/main.js"
import "./style.css"
import "@google/model-viewer"
```

```bash title="Terminal"
npx @gltf-transform/cli optimize perso.glb public/modeles/perso.glb --compress draco --texture-compress webp --texture-size 1024
```
