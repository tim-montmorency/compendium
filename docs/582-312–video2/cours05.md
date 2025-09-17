# Cours 5

## [Da Vinci - La base](da_vinci_base.md) (15 minutes)
- Retour sur le son  
  - Fades  
    - Sur des bruits de pas  
    - Sur une musique  
    - Sur du texte  
  - Synchronisation image et son  

---

# Différences entre les types de Nodes dans DaVinci Resolve

## 1. Serial Node (Alt + S)
- **Fonction** : Node de base, enchaîné en série.  
- **Principe** : Chaque node applique sa correction l’un après l’autre.  
- **Usage typique** : Balance des blancs → contraste → colorimétrie.  
- **Avantage** : Simple, clair et ordonné.  
- **Limite** : Chaque correction dépend de ce qui précède.

---

## 2. Parallel Node (Alt + P)
- **Fonction** : Permet de travailler plusieurs corrections en parallèle.  
- **Principe** : Tous les nodes reçoivent la même source, puis leurs résultats se combinent.  
- **Usage typique** : Corriger la peau d’un côté et le ciel de l’autre, puis fusionner.  
- **Avantage** : Les traitements restent indépendants.  
- **Limite** : Les corrections se superposent, risque de saturation.

---

## 3. Layer Mixer Node (Alt + L)
- **Fonction** : Système de calques avec ordre et modes de fusion.  
- **Principe** : Chaque entrée est un calque, avec différents modes de mélange.  
- **Usage typique** : Appliquer un look global sur le calque supérieur et un vignettage en dessous.  
- **Avantage** : Plus de contrôle, comme dans Photoshop.  
- **Limite** : Plus complexe à gérer qu’un Parallel Node.

---

## 4. Outside Node (Alt + O)
- **Fonction** : Crée un node qui traite l’extérieur d’une sélection ou d’un masque.  
- **Principe** : Utilise l’inverse d’une qualification ou d’un masque du node précédent.  
- **Usage typique** : Qualifier un visage, puis corriger uniquement l’arrière-plan.  
- **Avantage** : Rapide, pas besoin de recréer un masque inversé.  
- **Limite** : Dépend entièrement du masque précédent.

---

## 5. Splitter & Combiner (Alt + Y)
- **Fonction** : Sépare l’image en composantes (R, G, B, Luma, etc.) pour les corriger individuellement.  
- **Principe** : Le Splitter crée plusieurs branches, chaque canal peut être corrigé, puis le Combine recompose l’image.  
- **Usage typique** : Retoucher uniquement le canal bleu pour le ciel, ou réduire le bruit dans un canal précis.  
- **Avantage** : Très précis, idéal pour des corrections techniques.  
- **Limite** : Avancé, rarement nécessaire pour des corrections basiques.

---

## Résumé rapide

| Node                | Raccourci | Usage principal |
|---------------------|-----------|-----------------|
| **Serial**          | Alt + S   | Workflow linéaire, corrections en série |
| **Parallel**        | Alt + P   | Corrections indépendantes en parallèle |
| **Layer Mixer**     | Alt + L   | Corrections superposées avec modes de fusion |
| **Outside**         | Alt + O   | Corriger l’extérieur d’un masque/qualif |
| **Splitter & Combine** | Alt + Y | Travailler canal par canal (R, G, B, Luma) |

---

## [Da Vinci - La colorisation](da_vinci_colorisation.md) (90 minutes)
- Nodes (Alt + S), Parallèle (Alt + P), Layer (Alt + L), Outside (Alt + O) et Splitter & Combine (Alt + Y)  
- Correction de couleur  
- Mixer RGB  
- Courbes  
- Color Wrapper  
- Qualifier  
- Power Window / Tracker  
- Stabilisation  
- Flou  
- Keyframe  
- Copier des effets  

---

## Pause (15 minutes)

---

## [Da Vinci - La colorisation](da_vinci_colorisation.md) (90 minutes)

# Techniques de Correction et Effets dans DaVinci Resolve

## 1. Créer un look Polaroid avec le mode Log
Le mode **Log** permet d'obtenir des ajustements précis pour reproduire le style Polaroid, caractérisé par des teintes pastel et une saturation équilibrée.

### Log wheels
1. Créer un **serial Node** (Alt + S)
2. Passez en mode **Log Wheels** dans la palette des roues de couleur.  
3. Ajustez les paramètres :  
   - **Highlights** : tirées vers le **rose/orange** → adoucir et réchauffer les hautes lumières.  
   - **Midtones** : poussées vers le **magenta/violet** → donner une teinte artistique.  
   - **Shadows** : tirées vers le **cyan/bleu** → refroidir légèrement les ombres.  
4. Ajoutez une légère **saturation** pour renforcer l’effet Polaroid.  


### Glow (Lueur diffuse)
1. Créer un **serial Node** (Alt + S)
2. **Seuil de brillance** : ~0.31 → agit surtout sur les hautes lumières.  
3. **Diffusion** : ~1.21 → halo doux et large.  
4. **Diffusion relative** : **Rouge augmenté**, **Bleu diminué** → lueur chaude et rosée.  
5. **Gain** : ~0.40 → intensité subtile.  

---

### Film Grain (16mm 250D)
1. Créer un **serial Node** (Alt + S)
2. **Opacité** : ~0.80 → grain visible mais équilibré.  
3. **Taille** : ~0.40 → grain moyen, organique.  
4. **Intensité** : ~0.20 → subtil, pas numérique.  



---

## 2. Créer un look Duotone
Le look **Duotone** applique deux teintes dominantes à une image (ombres et hautes lumières), pour un effet artistique.

### Étapes
1. **Désaturez avec le RGB Mixer** :  
   - Ouvrez le **RGB Mixer**.  
   - Décochez **Preserve Luminance** et cochez **Monochrome**.  
   - Réglez les canaux pour obtenir une image en niveaux de gris.  

2. **Ajoutez des couleurs en mode Log** :  
   - Dans les **Shadows**, appliquez une teinte (ex. bleu ou violet).  
   - Dans les **Highlights**, ajoutez une teinte contrastée (ex. orange ou rouge).  
   - Ajustez les **Midtones** pour équilibrer la transition.  

3. **Affinez les contrastes avec les Curves**.

---

## 3. Utilisation des Layer Nodes
Les **Layer Nodes** permettent de superposer des corrections avec une hiérarchie.  

### Exemples
- **Corriger l’arrière-plan sans affecter la peau**.  
- **Coloriser une zone avec une Power Window**.

---

## 4. Utilisation des Parallel Nodes
Les **Parallel Nodes** appliquent des corrections indépendantes, combinées sans hiérarchie.  

### Exemples
- Assombrir les arbres.  
- Saturer le ciel.  
- Appliquer deux dégradés différents.

---

## 5. Effet de séparation des couleurs (Combine Node)
### Étapes
1. Créez des nodes distincts pour chaque canal (R, G, B).  
2. Décalez chaque canal pour créer un effet de séparation.  
3. Recombinez avec un **Layer Mixer**.

---

## 6. Colorisation dynamique avec des Keyframes
### Exemples
- Transition froide → chaude.  
- Noir et blanc → couleur.  
- Animation de saturation ou luminosité.

### Étapes
1. Ajoutez un **Keyframe**.  
2. Modifiez les réglages entre les keyframes.  
3. Prévisualisez et ajustez la transition.

---

## 7. Isoler un personnage et flouter l’arrière-plan
### Étapes
1. Créez une **Power Window** autour du personnage.  
2. Trackez le mouvement.  
3. Inversez la sélection et appliquez un **Blur**.  
4. Adoucissez la transition avec la **Softness**.

---

## 8. Keying pour isoler une couleur
### Étapes
1. Sélectionnez la couleur avec le **Qualifier**.  
2. Affinez avec **Threshold**, **Clean Black/White**, **Denoise**.  
3. Appliquez vos effets dans des nodes séparés.

---

## 9. Fusion
- Création d’animation de texte :  
  [Tutoriel vidéo](https://www.youtube.com/watch?v=rXA7JBzmlWI)

---

## Devoir
- **Montage offline de votre projet**  
  - Le montage vidéo/son.
