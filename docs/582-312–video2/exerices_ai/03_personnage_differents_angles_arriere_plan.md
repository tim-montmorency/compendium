<style>.md-footer{display:none;}</style>
<style>.md-header{display:none;}</style>
# Exercice
Le but de cet exercice est de générer un personnage consistant dans Midjourney. 
<img src="../assets/image/03_nina_differents_angles.png">
***

## Étapes

Pour commencer, utilisez l’outil [Glibatree Consistent Character Assistant](https://chatgpt.com/g/g-hfOosvOH7-glibatree-consistent-character-assistant) pour générer des prompts optimisés et créer un personnage cohérent. Suivez chaque étape pour obtenir des résultats uniformes et réalistes.

### 1. **Rédiger un prompt décrivant le personnage pour le collage initial**
- [ ] **Description détaillée** : Décrivez le personnage en fonction des traits physiques souhaités. Mentionnez des éléments comme la couleur et la texture des cheveux, le teint, la couleur des yeux, l’âge, les vêtements et une description subtile de la posture ou de l’expression.<br>
- [ ] **Création du collage de référence** : Utilisez un prompt pour générer un collage de six portraits, avec des variations d'expressions, d'angles et de légères différences de posture. Cela servira de référence visuelle pour maintenir la cohérence dans d’autres images.<br>

   **Exemple de prompt pour le collage** :<br>
   ```Midjourney
   A six-panel photo collage of a woman, 30 years old, red hair, freckles on her face, wearing simple everyday clothes. Standing in front of a plain solid background with studio lighting. Candid cell-phone photography, highlighting the beauty of imperfections. The person is moving, turning, and getting slightly happier in each frame. Closeup photos. ::3 
   Painting, artistic, bokeh with beautiful ambience ::-1 
   evenly-spaced photo grid with deep color tone ::1 --style raw --ar 16:9
   ```
      
   - **Remarque** : Assurez-vous que le style est en mode `--style raw` pour un rendu réaliste.<br>

### 2. **Générer le prompt dans Midjourney**
- [ ] **Vérifier les réglages** : Confirmez que le style est bien défini sur `--style raw` pour conserver la netteté et les détails réalistes.<br>
- [ ] **Lancer la génération** : Utilisez le prompt dans Midjourney pour obtenir le collage. Choisissez l’option de **Subtle Upscale** sur l’image la plus réussie pour améliorer la qualité sans trop de changements.<br>

### 3. **Découper les images dans Midjourney**
- [ ] **Découpage des portraits individuels** : Sélectionnez chaque portrait du collage pour capturer les variations distinctes du personnage. Cela peut se faire en **enregistrant chaque image** individuellement ou en utilisant un outil de capture d’écran pour isoler les portraits.<br>
- [ ] **Préparer les références pour une utilisation future** : Conservez les images découpées dans une bibliothèque de référence que vous pourrez utiliser dans les étapes suivantes.<br>

Le but de cet exercice est de créer un arrière plan
<img src="../assets/image/03_nina_differents_backgrounds.png">
***

### 4. **Réinsérer les images dans Midjourney et générer un prompt avec un arrière-plan**<br>
- [ ] **Insérer les images de référence** : Dans Midjourney, insérez trois à cinq images découpées du personnage en tant que références visuelles. Cela peut se faire en ajoutant les liens d’URL des images après le prompt.<br>
- [ ] **Créer un prompt pour un arrière-plan spécifique** : Rédigez un prompt pour situer le personnage dans un contexte ou un décor particulier. Assurez-vous de rester simple dans la description physique du personnage (par exemple, "femme de 30 ans aux cheveux roux et aux yeux verts"). Les images de référence maintiendront la cohérence visuelle.<br>

- [ ] **Utiliser un seed commun** : Pour assurer une cohérence visuelle entre plusieurs images de la même scène, ajoutez un seed spécifique à la fin de chaque prompt. Par exemple, utilisez `--seed 1500`. Ce seed aide à conserver des éléments visuels communs entre les images, tout en permettant une variation naturelle dans les détails.
- [ ] **Utiliser le style raw** : L’option --style raw permet d’obtenir un rendu plus réaliste et fidèle.

   **Exemple de prompt avec arrière-plan et seed commun, en mode raw** :<br>
   ```Midjourney
   A cinematic nighttime scene in a vintage Argentinian kitchen, with low-light and colorful, repetitive tile patterns. A red-haired woman in her 30s with freckles, wearing a slightly worn olive-green fur coat, stands near an open refrigerator, bathed in its soft glow as she drinks milk with a vacant expression. The kitchen is subtly illuminated by the strange glow of a streetlamp casting shadows through a window, creating a disturbing atmospheric tension. Shot on an Arri camera, ultra-realistic composition with sharp focus, shallow depth of field, and desaturated colors, resembling the meticulous, cinematic realism of Gregory Crewdson’s photography. --style raw --ar 16:9 --seed 1500
   ```

Ces étapes vous permettront de générer un personnage cohérent et fidèle à vos attentes dans diverses scènes. Pour toute assistance supplémentaire, utilisez l’outil [Glibatree Consistent Character Assistant](https://chatgpt.com/g/g-hfOosvOH7-glibatree-consistent-character-assistant).

[📖 Consulter la page suivante](../ai/prompt.md) pour plus d’informations sur la rédaction d'un prompt efficace.<br>
***


### **Variation pour la création d'une image initiale pour obtenir plusieurs angles**

- [ ] **Ajuster le ratio pour un affichage côte à côte des images** : Dans l’éditeur, définissez le ratio de l’image de manière à faciliter l’affichage côte à côte des différentes vues (par exemple, `--ar 16:9` pour un format paysage large qui permet de juxtaposer les images). Ce ratio rendra plus simple la création de variations d’angle et d’arrière-plan tout en gardant les images alignées.

- [ ] **Utiliser un prompt pour des vues sous différents angles** : Employez un prompt qui génère plusieurs perspectives de votre personnage afin d’obtenir des vues alignées.

   **Prompt recommandé** :
   ```Midjourney
   High-res photo of the same woman seen from multiple angles: front and side view. --style raw --ar [votre ratio]



