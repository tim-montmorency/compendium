

Pour le travail 1, vous devrez produire une application simple en réalité augmentée. Celle-ci devra contenir une scène menu et une scène de détection. Vous devrez produire deux images détectables par votre application. 

!!! warning "Attention"

    Attention : les seuls médias (assets, modèles, sons, échantillons sonores, textures, images, etc.) permis dans vos projets sont ceux disponibles sur le site web [kenney.nl](https://kenney.nl/) ou ce que vous créez vous-même! Pour les médias sonores (musique, effets sonores, échantillons sonores) et la police de caractères, vous pouvez utiliser des sources libres de droits et qui doivent être bien créditées sur le jeu.


       
## Contenus essentiels
Votre travail devra contenir les éléments suivants:      

- [ ] L’expérience doit commencer avec un écran d’introduction qui affiche le nom de l’expérience ainsi que votre propre nom. Il doit y avoir un bouton pour démarrer l’expérience, un pour la quitter, un pour accéder aux crédits et un pour accéder aux consignes.
- [ ] Dans votre écran d’introduction, vous devez créer un menu consignes avec au moins deux pages qui contiennent du texte qui explique les règles et les contrôles. Vous devez pouvoir alterner entre ces pages.
- [ ] Lorsqu'on clique sur le bouton crédits, les crédits de votre jeu doivent apparaître. 
- [ ] Lorsqu’on clique sur le bouton pour démarrer le jeu, une nouvelle scène doit être chargée.
- [ ] Dans la scène de jeu, on doit avoir un bouton qui charge la scène menu.
- [ ] Vous devez dessiner vos propres visuels pour les boutons ainsi qu'un fond pour votre menu principal.
- [ ] La scène de jeu montre une nouvelle image à balayer à chaque 5 secondes. 
- [ ] Lorsque la bonne image est détectée, elle s'anime et un point s'ajoute à votre pointage.
- [ ] Lorsque le joueur atteint 5 points, un message de succès apparaît, dans celle-ci, un bouton nous permet de retourner au menu.  
- [ ] Si la mauvaise image est balayée, un message d'erreur apparaît et une vie est perdue.
- [ ] Si trois vies sont perdues, un message d'échec apparaît et le jeu se termine. Un bouton nous permet de retourner au menu. 
- [ ] Vous devez personnaliser l’ouverture de l’application avec une image ou en changeant la couleur. Vous devez également personnaliser l'icône de l'application.
- [ ] Un son doit être activé en même temps que l’animation. Il doit être différent pour chaque animation.
- [ ] Langue : votre expérience doit être en français.
- [ ] La remise doit être en format exporté (i.e. build).

       
## Thématique
La thématique est libre. L'important est que vous créiez vos propres sprites et vos sons. Vos sprite sheet doivent contenir au minimum neuf images. La fonctionnalité ainsi que le design du jeu seront évalués.    

Voici quelques pistes d'inspiration: 
Générer une palette dans Coolors et créer un projet à partir de celle-ci: 

[📁 Coolors](https://coolors.co/){ .md-button }       

Créer une affiche animée à partir de ces inspirations: 

[📁 Pinterest](https://pin.it/5dXguOqAu){ .md-button }       

Voici un site qui donne des idées de thématiques: 

[📁 Inspiration](https://davebirss.com/inspiration/){ .md-button }       



       
## Exemple
Voici un exemple de l'expérience que vous allez produire:    

<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/t9dXH39bxjg?si=mguphPcpF2VTraW1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

       
## Contenus à inclure
**Visuel en mouvement**

- [ ] 2 animations avec une durée de au moins 9 frames chaque.

Pour composer ces animations, vous pouvez utiliser (et modifier) les images de personnage disponibles sur [kenney.nl](https://kenney.nl/).

**Visuel statique**

- [ ] 2 images de détection qu'on pourra scanner avec un appareil mobile.
- [ ] Des visuels pour les boutons.
- [ ] Des visuels pour le menu.

Pour les images à scanner, vous pouvez combiner et modifier différentes images disponibles à l'adresse [kenney.nl](https://kenney.nl/). Par exemple, vous pouvez faire un collage pour placer un personnage dans un certain environnement.

**Police de caractère**

- [ ] Trouver une police de caractère libre de droits qui vous plaît et la télécharger (pour le menu et les messages).

**Sonore**

- [ ] 2 sons qui accompagneront les animations.

_Rappel_ : Pour les médias sonores (musique, effets sonores, échantillons sonores) et la police de caractères, vous pouvez utiliser des sources libres de droits et qui doivent être bien créditées sur le jeu.


       
## Plan de travail détaillé
Voici étape par étape comment créer votre travail 1. Les notes de cours reliées à chaque étape vous expliquerons plus en détail comment faire. Elles sont disponibles via les mots soulignés en rouge.   

### 0. Création des éléments visuels et recherche de contenu
- [ ] Téléchargez le modèle illustrator suivant:    
[📁 Modèle TP1](https://cmontmorency365-my.sharepoint.com/:u:/g/personal/lora_boisvert_cmontmorency_qc_ca/Ef0Aoqi7gUBKsiMOzLyTfmwBFaCH06hkjcFkerENbBs9sw?e=d0JAnG){ .md-button }      

Créez ensuite les contenus suivants à l'aide de la vidéo:     

- [ ] 2 animations avec une durée de au moins 9 frames chaque. (Exports en PNG24)
- [ ] 2 images de détection qu'on pourra scanner avec un appareil mobile. (Exports en JPG)
- [ ] Des visuels pour les boutons et le menu. (Exports en PNG24)

Recherchez ensuite les éléments suivants (Libres de droit):     

- [ ] Trouver une police de caractère et la télécharger (pour le menu et les messages).
- [ ] 2 sons qui accompagneront les animations.

**Tutoriel 🎥**
<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/_GDZf-k5oV8?si=OOCTZ1Rc2fMEF75N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 1. Création du projet

- [ ] Créez un projet 2D Built-in Render Pipeline à partir du Unity Hub. <a href="https://tim-montmorency.com/compendium/582-401-realite-mixte/unity/creer_projet.html">Créer le projet</a>
- [ ] Modifiez la plateforme de développement pour Android. <a href="https://tim-montmorency.com/compendium/582-401-realite-mixte/installation/configuration.html#developper-pour-android">Changer de plateforme</a>
- [ ] Créez les dossiers pour ranger vos fichiers dans la fenêtre project.  <a href="https://tim-montmorency.com/compendium/582-401-realite-mixte/unity/nomenclature.html">Nomenclature</a>
- [ ] Créez deux scènes dans votre dossier Scenes. Pour ce faire, faites un clic droit dans la fenêtre Project, puis sélectionnez Create, Scene, Scene. Une scene sera pour votre jeu et l'autre pour votre menu. Donnez-leur des noms évocateurs.

**Tutoriel 🎥**
<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/BI0okHN1Bkw?si=biMaznc0AHKAlgpp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 2. Préparation de Vuforia
- [ ] Créez votre compte sur le site de Vuforia. <a href="https://tim-montmorency.com/compendium/582-401-realite-mixte/realite-augmentee/compte_vuforia.html">Créer un compte</a>
- [ ] Créez une license Vuforia pour votre projet. <a href="https://tim-montmorency.com/compendium/582-401-realite-mixte/realite-augmentee/license_vuforia.html">License</a>
- [ ] Importer Vuforia Engine grâce au Package Manager. <a href="https://tim-montmorency.com/compendium/582-401-realite-mixte/realite-augmentee/vuforia_unity.html">Package Manager</a>

**Tutoriel 🎥**
<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/IChbRlhdONM?si=FAI2FPKYwgwOBWEg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 3. Création de la scène Jeu - détection AR
- [ ] Ouvrez la scène jeu en double-cliquant sur celle-ci. Vous pouvez maintenant lui apporter des modifications.
- [ ] Créez une base de données pour les images de détection de votre projet (Les images qui seront balayées avec le téléphone). Je vous recommande de les exporter au format .jpg avant de les amener dans Vuforia. <a href="https://tim-montmorency.com/compendium/582-401-realite-mixte/realite-augmentee/base_donnees.html">Base de données</a>
- [ ] Téléchargez la base de données que vous venez de créer. <a href="https://tim-montmorency.com/compendium/582-401-realite-mixte/realite-augmentee/base_donnees.html#telecharger-la-base-de-donnees">Télécharger</a>
- [ ] Importez les images de détection dans Unity. <a href="https://tim-montmorency.com/compendium/582-401-realite-mixte/realite-augmentee/importer_detection.html">Importer</a>
- [ ] Dans la fenêtre jeu, vous devez maintenant créer une caméra pour la réalité augmentée (ArCamera). Vous devez aussi vous assurez de mettre la license sur la caméra. <a href="https://tim-montmorency.com/compendium/582-401-realite-mixte/realite-augmentee/camera_detection.html">ArCamera</a>
- [ ] Maintenant, créez deux GameObjects Image target. Ceux-ci vous permettront de détecter les images que vous avez mises dans votre DataBase.  <a href="https://tim-montmorency.com/compendium/582-401-realite-mixte/realite-augmentee/detecter_image.html">Image Target</a>

**Tutoriel 🎥**
<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/-5awHGHMQ7g?si=o5qleI-0IZfVK_Y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 4 Création de la scène Jeu - Animations
- [ ] Toujours dans la scène jeu, nous allons maintenant importer les deux sprites sheet de nos animations. <a href="https://tim-montmorency.com/compendium/582-401-realite-mixte/unity/anim_import.html">Importation SpriteSheet</a>
- [ ] Créer un Animator par animation pour la contrôler. <a href="https://tim-montmorency.com/compendium/582-401-realite-mixte/unity/anim_controller.html">Animator Controller</a>
- [ ] Créer un GameObject avec la composante Animator par animation. Ceux-ci controlleront vos animations. <a href="https://tim-montmorency.com/compendium/582-401-realite-mixte/unity/anim_animator.html">GameObject Animator</a>
- [ ] Créez une animation pour chaque Sprite Sheet. <a href="https://tim-montmorency.com/compendium/582-401-realite-mixte/unity/animation.html">Créer une animation</a>
- [ ] Redimensionner vos animations et positionnez-les au-dessus de vos images de détection dans la fenêtre Scene. Vous pouvez utiliser l'outil RectTool (T) pour vous aider.
- [ ] Dans la fenêtre hierarchy, glissez vos animations sur le ImageTarget créé plus tôt. (Assurez-vous que chaque animation correspond au bon Image target) Elles deviendront enfants du ImageTarget.
- [ ] Désactivez vos animations. Nous les activerons à l'aide d'un script. Pour se faire, dans la fenêtre hierarchy, appuyez sur votre animation. Ensuite, dans l'inspecteur, appuyez sur le crochet à côté du nom du GameObject. Celui-ci devient alors gris pâle dans la hierarchy.

**Tutoriel 🎥**
<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/SZLAsk_fQtE?si=10cZ0tSH82XY-MKb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


### 5. Création de la scène Menu - UI

- [ ] Ouvrez la scène Menu en double-cliquant sur celle-ci. N'oubliez pas de sauvegarder la Scene Jeu avant de la quitter! Vous pouvez maitenant lui apporter des modifications.
- [ ] Créez un canvas qui contiendra tous les objets de votre Scene. Assurez-vous qu'il se fie à une taille d'écran de 1920 x 1080 (Scale with screen size).  <a href="https://tim-montmorency.com/compendium/582-401-realite-mixte/unity/UI.html#canvas">Créer un canvas</a>
- [ ] Dans la fenêtre Game, modifier le format de votre Scene de Free Aspect à 1920 x 1080 Landscape.
- [ ] Dans le canvas, créez un Panel. Il contiendra les objets de votre menu.
- [ ] Créez 4 boutons dans votre Panel. Un pour quitter le jeu, un pour ouvrir les consignes, un pour ouvrir les crédits et un pour ouvrir le jeu. <a href ="https://tim-montmorency.com/compendium/582-401-realite-mixte/unity/font.html#composante">Modifier le texte des boutons</a>
- [ ] Créez un objet texte dans votre panel pour inscrire le titre de votre expérience.
- [ ] Créez un objet texte dans le panel pour inscrire votre nom.
- [ ] Créez une nouvelle police pour vos textes. <a href ="https://tim-montmorency.com/compendium/582-401-realite-mixte/unity/font.html#creer-une-police">Créer une police</a>
- [ ] Ajustez l'ancrage de tous vos objets. Le panneau devrait être en bleu pour s'étirer et les autres objets en rouge pour s'ancrer à des positions précises. <a href="https://tim-montmorency.com/compendium/582-401-realite-mixte/unity/UI.html#rect-transform">Rect Transform</a>

**Tutoriel 🎥**    
<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/jjTNyBJHOcA?si=k3Q491l4Uiec0Z4z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Tutoriel 2 - Images personnalisées 🎥**    
<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/TplC8o_9L9o?si=4MTAfuSANpN7WoZ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 6. Création de la scène Menu - Consignes et crédits
- [ ] Dans le canvas, créez un nouveau Panel pour les consignes.
- [ ] Dans ce panel, créez un panel par étape de vos consignes.
- [ ] Dans chaque panel d'étape, mettez des boutons pour passer à l'étape suivante ou revenir à la précédente. Mettez aussi le texte des consignes et des images pour appuyer vos consignes au besoin.
- [ ] Dans le canvas, créez un nouveau Panel pour les crédits.
- [ ] Dans ce panel, insérez du texte pour vos crédits et un bouton pour retourner au menu principal. TOUS les contenus qui ne viennent pas de vous doivent être crédités. 



### 7. Création de la scène Jeu - UI
- [ ] Assurez-vous d'être dans la scène Jeu. 
- [ ]  Créez un canvas qui contiendra tous les objets de votre Scene. Assurez-vous qu'il se fie à une taille d'écran de 1920 x 1080 (Scale with screen size).  <a href="https://tim-montmorency.com/compendium/582-401-realite-mixte/unity/UI.html#canvas">Créer un canvas</a>
- [ ] Dans le canvas, créez un Panel. Il contiendra les objets de votre menu.
- [ ] Ajoutez un texte qui affichera le pointage.
- [ ] Créez un bouton qui permettra de retourner au menu principal.
- [ ] Affichez trois images qui représenteront les vies.
- [ ] Insérez le cadre qui servira à balayer les images.
- [ ] Ajoutez une image qui indiquera l'élément à balayer.
- [ ] Pour le défi: Ajoutez trois boutons qui contrôleront le niveau de difficulté. 

### 8. Création de la scène Jeu - Sons
- [ ] Importez vos sons dans la fenêtre project en faisant un clic-droit dans cette fenêtre, puis import New Asset.
- [ ] Ajouter une composante AudioSource sur vos GameObject animations.
- [ ] Glissez vos clips audio dans le AudioSource et assurez-vous qu'il jouera en boucle lorsque l'objet sera activé. <a href="https://tim-montmorency.com/compendium/582-401-realite-mixte/code/variables.html#audiosource">Son</a>

**Tutoriel 🎥**
<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/XykuWzP0I2M?si=MTJ037z3a-HogduL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 9. Création de la scène Menu - Script consignes et crédits
- [ ] Sur chaque bouton, utilisez l'événement OnClic pour activer et désactiver les panels nécessaires (grâce à GameObject -> SetActive). <a href ="https://tim-montmorency.com/compendium/582-401-realite-mixte/code/evenements.html#evenement">Événement</a>
- [ ] Créez aussi un bouton fermeture qui ferme le panel consigne lorsqu'on appuie dessus.
- [ ] Créez aussi un bouton fermeture pour le panel crédits. 


### 10. Création de la scène Jeu - Script
Un schéma de programmation sera créé en classe. Votre script devra comprendre les éléments suivants:     

- [ ] La scène jeu montre une nouvelle image à balayer à chaque 5 secondes. 
- [ ] Lorsque la bonne image est détectée, elle s'anime et un point s'ajoute à votre pointage.
- [ ] Lorsque le joueur atteint 5 points, un message de succès apparaît, dans celle-ci, un bouton nous permet de retourner au menu.  
- [ ] Si la mauvaise image est balayée, un message d'erreur apparaît et une vie est perdue.
- [ ] Si trois vies sont perdues, un message d'échec apparaît et le jeu se termine. Un bouton nous permet de retourner au menu. 

Voici une ressource pour vous aider à créer votre code: 
[📝 Ressource pour vous aider](https://cmontmorency365-my.sharepoint.com/:x:/g/personal/lora_boisvert_cmontmorency_qc_ca/EWJdsTQPuRVPgBz5Lu2ZSHUBTLNfNMt24XsHZ7vI2R8STQ?e=cfHmee){ .md-button }    

**Tutoriel 🎥**
<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/veUN337o2Nc?si=eEXHlg-frZOAN89_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 11. Création de la scène Menu - Script UI
- [ ] Créez un objet vide et nommez le. Ce sera le controlleur de votre scene.
- [ ] Sur l'objet vide, créez un nouveau script et donnez lui un nom.
- [ ] Créez la fonction changement de scène dans votre nouveau script. <a href ="https://tim-montmorency.com/compendium/582-401-realite-mixte/code/changement_scene.html">Script Scene</a>
- [ ] Ajoutez aussi la fonction pour quitter le jeu. <a href ="https://tim-montmorency.com/compendium/582-401-realite-mixte/code/quitter_jeu.html">Script Quitter</a>
- [ ] Assignez les nouvelles fonctions créés à vos boutons démarrer le jeu et quitter le jeu. <a href ="https://tim-montmorency.com/compendium/582-401-realite-mixte/code/evenements.html#evenement">Événement</a>


### 12. Défi (Sera évalué)
- [ ] Dans la scène jeu, créez un bouton X ou retour qui nous permettra de retourner à la scène menu.
- [ ] Dans la scène jeu, créez des boutons qui permettent d'ajuster la difficulté du jeu: Facile = l'image change à chaque 5 secondes, moyen = l'image change à chaque 4 secondes, difficile = l'image change à chaque 3 secondes. 


### 13. Création de l'application
- [ ] Suivez le tutoriel suivant pour exporter votre application et modifier l'écran d'intro de votre jeu. Changez aussi l'icône par défaut de votre jeu. <a href ="https://tim-montmorency.com/compendium/582-401-realite-mixte/unity/build.html">Exporter pour Android</a>


### 14. Remise du travail 1
Remettre votre travail dans le dossier suivant: 

[📁 Remise Travail 1](https://cmontmorency365-my.sharepoint.com/:f:/g/personal/lora_boisvert_cmontmorency_qc_ca/EqD3pun06hRMg_pJF1EHOx8Bb4YBZCGASLu_OV1PRCOwlg?e=bVj2Nu){ .md-button }   


