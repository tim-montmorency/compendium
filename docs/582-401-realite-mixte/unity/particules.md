Dans ce tutoriel, nous explorerons comment créer des particules dans Unity.   

## Paramètres des particules
[📁 Paramètres détaillés des particules](https://learn.unity.com/tutorial/introduction-to-particle-systems#6025fdd9edbc2a112d4f0136){ .md-button }   <br>

Note: La vidéo n'a pas de son, mais vous pouvez voir des paramètre modifiés dans l'inspecteur et leur résultat.    

<iframe width="560" height="315" src="https://www.youtube.com/embed/4DZIaZ_BZ2E?si=turLE4hUrhKFQOeo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Animation de sprite sheet
Ici, on utilise l'animation de Sprite Sheet pour créer de la fumée dans Unity. Vous aurez besoin du canva suivant pour créer votre feuille animée dans Photoshop:       

[📁 Fichier de base Photoshop](https://cmontmorency365-my.sharepoint.com/:i:/g/personal/lora_boisvert_cmontmorency_qc_ca/Ef8BiNB-HThNlw4ECnKykfMBOJoLYdTIP1aEh30nMRkL2w?e=zhyxSc){ .md-button }   

<iframe width="560" height="315" src="https://www.youtube.com/embed/eub9QMYbS0U?si=4LhGsPcKw2-sWfc8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



### Tutoriel écrit: 

### 1. Créer un Fichier de Base dans Photoshop :
- [ ] Ouvrez Photoshop avec un fichier de 512x512 pixels en 72 dpi. 
- [ ] Divisez le document en 16 cases égales avec des règles, chaque case étant destinée à un élément de l'animation. (Déjà fait dans le fichier fourni ci-haut).

### 2. Préparer les Calques et les Brosses :    

- [ ] Créez un calque de fond et remplissez-le en noir.
- [ ] Ajoutez un calque par-dessus pour peindre vos effets spéciaux.
- [ ] Téléchargez des brosses de fumée ou de flamme en ligne, (Recommandation: Brusheezy) extrayez-les, puis importez-les dans Photoshop (Outil Pinceau > Flèche sur la brosse > Engrenage > Importer des Pinceaux).

### 3. Peindre les Éléments d'Animation :
- [ ] Assurez-vous que la couleur de votre pinceau est blanche.
- [ ] Peignez chaque case avec des effets de fumée ou de flammes en utilisant différentes brosses pour varier le style.
- [ ] Assurez-vous que chaque élément reste dans sa case et que l'ensemble est uniforme.

### 4. Exporter le Document :
- [ ] Supprimez le calque de fond pour conserver la transparence.
- [ ] Exportez le fichier au format PNG 24 avec transparence.

### 5. Importer la Sprite Sheet dans Unity :
- [ ] Importez votre PNG dans Unity (par glisser-déposer dans un dossier).
- [ ] Sélectionnez le fichier et définissez-le comme **Sprite (Multiple)**.
- [ ] Cliquez sur **Apply** pour appliquer les paramètres.

### 6. Créer un Matériel pour les Particules :
- [ ] Cliquez droit dans Unity > **Create > Material** et nommez-le (ex. : “Particules Fumée”).
- [ ] Définissez le type du matériel en tant que **Particle** et choisissez le mode **Additive**.
- [ ] Faites glisser votre sprite sheet dans le champ “Albedo” du matériel.

### 7. Créer un Système de Particules :
- [ ] Cliquez droit dans Unity > **Effects > Particle System**.
- [ ] Changez le matériel du système de particules pour celui que vous venez de créer.
- [ ] Accédez à l’option **Texture Sheet Animation**, cochez “Grid”, et entrez 4x4 si votre sprite sheet contient 16 images.

### 8. Ajuster les Paramètres du Système de Particules :
- [ ] **Shape** : Modifiez la dispersion en ajustant l'angle et la direction pour que la fumée reste dans une zone précise.
- [ ] **Start Speed** : Diminuez la vitesse pour ralentir les particules.
- [ ] **Max Particles** : Limitez à 20 pour optimiser les performances.
- [ ] **Size Over Lifetime** : Cochez cette option pour faire varier la taille des particules au cours de leur durée de vie.

### 9. Créer une Variation Naturelle :
- [ ] Dans **Texture Sheet Animation**, changez “Whole Sheet” en “Random Between Two Constants” pour éviter la répétition et rendre l’effet plus naturel.
- [ ] **Color Over Lifetime** : Ajoutez des couleurs variées (ex. : dégradé de rose et violet) pour personnaliser la couleur de la fumée.

### 10. Tester et Finaliser :
- [ ] Jouez avec les paramètres pour obtenir l’effet souhaité (ex. : arrêter le système après une certaine durée ou choisir une animation en boucle).
- [ ] Appuyez sur Play dans Unity pour voir votre animation de particules.

