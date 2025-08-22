# Cours 5
 
## Correction devoir 
* [groupe am]()  <br>
* [groupe pm]()  <br>

## [Da Vinci - La base](da_vinci_base.md) (15  minutes)
* Retour le son
  * Fades
    * Sur des bruits de pas
    * Sur une musique
  * Panoramiques
  * Sychnonisation image et son

## [Da Vinci - La colorisation](da_vinci_colorisation.md) (90  minutes)
* Nodes (Alt + S), Parallèle (Alt + P), Layer (Alt + L), Outside (Alt + O) et Splitter & Combine (Alt + Y).
* Correction de couleur 
* Mixer rgb 
* Courbes 
* Color wraper 
* Qualifier 
* Power window / tracker 
* Stabilisation 
* Flou 
* Keyframe
* Copier des effets

## Pause (25  minutes)

## [Da Vinci - La colorisation](da_vinci_colorisation.md) (90  minutes)

# Techniques de Correction et Effets dans DaVinci Resolve

## 1. Créer un look Polaroid avec le mode Log
Le mode **Log** permet d'obtenir des ajustements précis pour reproduire le style Polaroid, caractérisé par des teintes pastel et une saturation équilibrée.

### Étapes :
1. Passez en mode **Log Wheels** dans la palette des roues de couleur.
2. Ajustez les paramètres :
   - **Highlights** : augmentez légèrement pour adoucir les hautes lumières.
   - **Midtones** : appliquez une teinte pastel (ex. rose ou cyan).
   - **Shadows** : conservez les ombres légères pour préserver un faible contraste.
3. Ajoutez une légère saturation pour renforcer l’effet Polaroid.

---

## 2. Créer un look Duotone
Le look **Duotone** applique deux teintes dominantes à une image, souvent dans les ombres et les hautes lumières, pour un effet artistique.

### Étapes :
1. **Désaturez dans le RGB Mixer** :
   - Ouvrez le **RGB Mixer** dans la **Color Page**.
   - Décochez **Preserve Luminance** et cochez **monochrome**
   - Réglez les canaux pour obtenir une image en niveaux de gris.

2. **Ajoutez des couleurs dans le mode Log** :
   - Dans les **Shadows**, appliquez une teinte pour les ombres (ex. bleu ou violet).
   - Dans les **Highlights**, ajoutez une teinte pour les hautes lumières (ex. orange ou rouge).
   - Ajustez les **Midtones** pour équilibrer la transition entre les deux teintes.

3. **Affinez les contrastes** :
   - Utilisez les **Curves** pour ajuster les contrastes et obtenir un rendu harmonieux.

---
## 3. Utilisation des Layer Nodes
Les **Layer Nodes** permettent de superposer des corrections avec une hiérarchie définissant la priorité des effets.

### Exemples d’utilisation :
- **Correction d’arrière-plan sans affecter la peau** :
  1. Utilisez un **qualifier** pour isoler les tons de peau.
  2. Appliquez des corrections distinctes sur l’arrière-plan dans un node séparé.

- **Colorisation ciblée avec une Power Window** :
  1. Dessinez une Power Window en forme de triangle, rond ou autre.
  2. Appliquez une correction colorimétrique uniquement à l’intérieur ou à l’extérieur de cette zone.

---

## 4. Utilisation des Parallel Nodes
Les **Parallel Nodes** permettent d'appliquer plusieurs corrections indépendantes, qui sont ensuite combinées sans hiérarchie.

### Exemples d’utilisation :
- **Assombrir les arbres** :
  - Sélectionnez les arbres avec une **Power Window** et réduisez leur luminosité.
- **Saturer le ciel sans affecter le reste** :
  - Isolez le ciel avec un **qualifier** et augmentez la saturation.
- **Appliquer deux dégradés distincts** :
  - Utilisez deux Power Windows avec des dégradés différents pour créer des effets de transition complexes.

---

## 5. Créer un effet de séparation des couleurs (Combine Node)
Bien qu’un **Combine Node** ne soit pas officiel, vous pouvez simuler un effet de séparation RVB en manipulant les canaux de couleurs.

### Étapes :
1. **Séparer les canaux** :
   - Créez des nodes distincts pour isoler les canaux rouge, vert et bleu.
2. **Décaler les canaux** :
   - Appliquez un décalage spatial sur chaque canal pour créer un effet de séparation.
3. **Recombiner les canaux** :
   - Utilisez un **Layer Mixer** pour recombiner les canaux et finaliser l’effet.


## 6. Colorisation dynamique avec des Keyframes
Les **Keyframes** permettent d’animer des corrections colorimétriques au fil du temps, créant des transitions fluides ou des effets visuels progressifs.

### Exemples d’utilisation :
- Transition d’une ambiance froide à une ambiance chaude.
- Passage progressif du noir et blanc à la couleur.
- Animation de la saturation ou de la luminosité d’un élément spécifique.

### Étapes :
1. Ajoutez un **Keyframe** dans la **Color Page** pour les paramètres à animer.
2. Modifiez les réglages (teinte, saturation, luminosité) entre les keyframes.
3. Prévisualisez et ajustez pour assurer une transition fluide.

---

## 7. Isoler un personnage et flouter l’arrière-plan
Cet effet consiste à garder le personnage ou le sujet principal net tout en floutant l’arrière-plan, avec suivi des mouvements grâce au **tracking**.

### Étapes :
1. **Créer une Power Window** :
   - Dessinez une Power Window autour du personnage ou du sujet principal.
   - Ajustez sa taille et sa forme pour bien correspondre au sujet.

2. **Effectuer un Tracking** :
   - Passez à l’onglet **Tracker** dans la **Color Page**.
   - Activez le **Tracking** pour suivre les mouvements du sujet tout au long de la vidéo.

3. **Appliquer un flou à l’arrière-plan** :
   - Inversez la sélection avec le bouton **Invert** dans la Power Window.
   - Appliquez un effet de **Blur** (gaussien ou radial) pour flouter l’arrière-plan.

4. **Affiner les bords** :
   - Augmentez la **Softness** dans la Power Window pour rendre la transition plus naturelle.
   - Corrigez les imperfections du tracking si nécessaire.

---
## 8. Keying pour isoler une couleur
Le **keying** permet d’isoler une zone de l’image en fonction de sa couleur dominante, souvent utilisé pour les fonds verts.

### Étapes :
1. Accédez à l’outil **Qualifier** dans la **Color Page**.
2. Sélectionnez la couleur cible (ex. fond vert ou bleu).
3. Affinez les réglages avec **Threshold**, **Clean Black/White**, et **Denoise** pour supprimer les imperfections.
4. Remplacez le fond ou appliquez des effets supplémentaires dans des nodes séparés.

---
## 8. Fusion
1. Création d’animation de texte 
https://www.youtube.com/watch?v=rXA7JBzmlWI

## Devoir
* Montage offline de votre projet
  * Le montage vidéo/son doit être terminé pour la semaine prochaine. 
