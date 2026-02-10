# Travail 1

L'objectif est de produire une application de réalité augmentée.

Celle-ci devra contenir une scène « Menu » et une scène « Jeu » (détection d'images). 

Dans la scène Jeu, vous devrez produire **trois images** détectables par l'application. 

## Matériel permis

Vous pouvez utiliser l'IA pour générer du matériel graphique et sonore, ou simplement tout créer par vous-même !

L'ensemble du matériel utilisé (assets, modèles, sons, effets sonores, textures, images, police de caractères) doit provenir de sources libres de droits ([Kenney.nl](https://kenney.nl/), [pixabay](https://pixabay.com/), etc.).

La thématique est libre. L'important est que vous créiez vos propres images. La fonctionnalité ainsi que le design du jeu seront évalués.

!!! info "Attribution des crédits"

    Toutes les sources utilisées dans le projet devront être inscrites dans une section **Sources** afin de créditer les auteurs.

    Si vous avez créé des assets, vous devrez aussi vous créditer vous-même 😉

## Contenus essentiels

### Scène « Menu » (accueil)

- [ ] Affichez les éléments suivants : 
  - le nom de l’expérience 
  - votre nom
  - un bouton pour démarrer l’expérience
  - un bouton pour quitter
  - un bouton pour accéder aux crédits
  - un bouton pour accéder aux consignes
- [ ] Créez un menu consignes avec au moins **deux pages** contenant du texte qui explique les règles et les contrôles. On doit pouvoir alterner entre ces pages.
- [ ] Faites apparaître les crédits du jeu lorsqu’on clique sur le bouton Crédits.
- [ ] Chargez la scène « Jeu » lorsqu’on clique sur le bouton pour démarrer le jeu.

### Scène « Jeu »

- [ ] Affichez un bouton qui charge la scène « Menu » pour revenir au menu.
- [ ] Affichez la silhouette de l'image à détecter. 
- [ ] Lorsque la bonne image est détectée, superposez une animation et affichez la progression à l'écran (slider ou images).
- [ ] Activez un son en même temps que l’animation (un son différent pour chaque animation).
- [ ] Lorsque le joueur a détecté les trois images, affichez un message de succès avec un bouton de retour au menu et un bouton pour recommencer le jeu.

### Général

- [ ] Personnalisez l’ouverture de l’application avec une image ou en changeant la couleur. 
- [ ] Personnalisez l'icône de l'application.
- [ ] Assurez-vous que l'entièreté de l'expérience est en français et ne contient aucune faute.
- [ ] Remettez votre travail en format exporté (i.e. build).

### Visuel statique

- [ ] Créez 3 images de détection qu'on pourra scanner avec un appareil mobile. (Vous pouvez prendre en photo vos assemblages de papier et les utiliser comme visuel statique).
- [ ] Créez 3 silhouettes vectorielles. (Vous devez reproduire la silhouette des images de détection en format vectoriel).
- [ ] Créez des formes en carton, puis recréez-les en vectoriel. Vous pouvez changer les couleurs et appliquer des textures sur les formes vectorielles. 
- [ ] Créez des visuels pour les boutons.
- [ ] Créez des visuels pour le menu.
- [ ] Trouvez une police de caractère libre de droits qui vous plaît et téléchargez-la (pour le menu et les messages).

### Animations
 
- [ ] Créez 3 animations réalisées dans Unity avec au moins 5 keyframes chacune. Pour composer ces animations, reproduisez vos formes de carton en vectoriel, puis importez-les dans Unity. 
- [ ] Associez un son unique à chaque animation.

## Exemple

<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/ZR2lMygvYEg?si=ux010zmkJYRVvPuL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Étapes

Les notes de cours reliées à chaque étape vous expliqueront plus en détail comment faire. Elles sont disponibles via les mots soulignés en rouge.

### 0 | Création des éléments visuels et recherche de contenu

Créez les contenus suivants :     

- [ ] Plusieurs formes aux **arrêtes droites** en carton. 
- [ ] 3 images de détection qu'on pourra scanner avec un appareil mobile. (JPG) Pour créer ces images, assemblez vos formes de carton et prenez l'assemblage en photo. Idéalement, redimensionnez ensuite vos photos au format carré (1024 x 1024 ou 2048 x 2048 sont idéals).
- [ ] Créez la silhouette vectorielle de vos images de détection. (PNG24)
- [ ] Recréez toutes vos formes de carton au format vectoriel. Vous pouvez changer les couleurs, ajouter des détails ainsi que des textures. (PNG24)
- [ ] Créez ou trouvez des visuels pour les boutons et le menu. Les visuels de vos boutons doivent être en harmonie avec vos images de détection. (PNG24)

Recherchez ensuite les éléments suivants (libres de droits) :

- [ ] Trouvez une police de caractère et téléchargez-la (pour le menu et les messages).
- [ ] Trouvez 3 sons. Une pour chaque animation.

### 1 | Création du projet

- [ ] Créez un projet `2D Built-in Render Pipeline` à partir du Unity Hub. [Créer le projet](../unity/creer_projet.md){.back}
- [ ] Modifiez la plateforme de développement pour Android. [Changer de plateforme](../installation/configuration.md#developper-pour-android){.back}
- [ ] Créez les dossiers pour ranger vos fichiers dans la fenêtre project. [Nomenclature](../unity/nomenclature.md){.back}
- [ ] Créez deux scènes dans votre dossier Scenes. Pour ce faire, faites un clic droit dans la fenêtre Project, puis sélectionnez Create, Scene, Scene. Une scène sera pour votre jeu et l'autre pour votre menu. Donnez-leur des noms évocateurs.

**Tutoriel 🎥**

<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/BI0okHN1Bkw?si=biMaznc0AHKAlgpp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


!!! info "Note"

    Le reste des consignes apparaîtra à chaque semaine selon vos apprentissages. 



### 2 | Préparation de Vuforia

- [ ] Créez votre compte sur le site de Vuforia. [Créer un compte](../realite-augmentee/compte_vuforia.md){.back}
- [ ] Créez une licence Vuforia pour votre projet. [Licence](../realite-augmentee/license_vuforia.md){.back}
- [ ] Importez Vuforia Engine grâce au Package Manager. [Package Manager](../realite-augmentee/vuforia_unity.md){.back}

**Tutoriel 🎥**

<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/IChbRlhdONM?si=FAI2FPKYwgwOBWEg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 3 | Création de la scène Jeu - détection AR

- [ ] Ouvrez la scène jeu en double-cliquant sur celle-ci. Vous pouvez maintenant lui apporter des modifications.
- [ ] Créez une base de données pour les images de détection de votre projet (les images qui seront balayées avec le téléphone). Je vous recommande de les exporter au format .jpg avant de les amener dans Vuforia. [Base de données](../realite-augmentee/base_donnees.md){.back}
- [ ] Téléchargez la base de données que vous venez de créer. [Télécharger](../realite-augmentee/base_donnees.md#telecharger-la-base-de-donnees){.back}
- [ ] Importez les images de détection dans Unity. [Importer](../realite-augmentee/importer_detection.md){.back}
- [ ] Dans la fenêtre jeu, vous devez maintenant créer une caméra pour la réalité augmentée (ARCamera). Vous devez aussi vous assurer de mettre la licence sur la caméra. [ARCamera](../realite-augmentee/camera_detection.md){.back}
- [ ] Maintenant, créez trois GameObjects Image Target. Ceux-ci vous permettront de détecter les images que vous avez mises dans votre base de données. [Image Target](../realite-augmentee/detecter_image.md){.back}

**Tutoriel 🎥**

<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/-5awHGHMQ7g?si=o5qleI-0IZfVK_Y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 4 | Création de la scène Jeu - Animations

- [ ] Toujours dans la scène jeu, nous allons maintenant importer les images vectorielles qui composeront nos animations. [Importation Image](../unity/anim_import.md){.back}
- [ ] Créez un Animator par animation pour la contrôler. [Animator Controller](../unity/anim_controller.md){.back}
- [ ] Créez un GameObject avec la composante Animator par animation. Ceux-ci contrôleront vos animations. [GameObject Animator](../unity/anim_animator.md){.back}
- [ ] Créez une animation pour chacuns de vos groupes d'images vectorielles. [Créer une animation](../unity/animation_avance.md#creation-danimations-de-parametres-de-gameobject){.back}
- [ ] Redimensionnez vos animations et positionnez-les au-dessus de vos images de détection dans la fenêtre Scene. Vous pouvez utiliser l'outil RectTool (T) pour vous aider.
- [ ] Dans la fenêtre hierarchy, glissez vos animations sur le ImageTarget créé plus tôt. (Assurez-vous que chaque animation correspond au bon Image target) Elles deviendront enfants du ImageTarget.
- [ ] Désactivez vos animations. Nous les activerons à l'aide d'un script. Pour se faire, dans la fenêtre hierarchy, appuyez sur votre animation. Ensuite, dans l'inspecteur, appuyez sur le crochet à côté du nom du GameObject. Celui-ci devient alors gris pâle dans la hierarchy.

**Tutoriel 🎥**

<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/SZLAsk_fQtE?si=10cZ0tSH82XY-MKb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



### 5 | Création de la scène Menu - UI

- [ ] Ouvrez la scène Menu en double-cliquant sur celle-ci. N'oubliez pas de sauvegarder la scène Jeu avant de la quitter ! Vous pouvez maintenant lui apporter des modifications.
- [ ] Créez un canvas qui contiendra tous les objets de votre scène. Assurez-vous qu'il se fie à une taille d'écran de 1920 x 1080 (Scale with screen size). [Créer un canvas](../unity/UI.md#canvas){.back}
- [ ] Dans la fenêtre Game, modifiez le format de votre Scene de Free Aspect à 1920 x 1080 Landscape ou 16:9 Aspect.
- [ ] Dans le canvas, créez un Panel. Il contiendra les objets de votre menu.
- [ ] Créez 4 boutons dans votre Panel. Un pour quitter le jeu, un pour ouvrir les consignes, un pour ouvrir les crédits et un pour ouvrir le jeu. [Modifier le texte des boutons](../unity/UI.md#button){.back}
- [ ] Créez un objet texte dans votre panel pour inscrire le titre de votre expérience.
- [ ] Créez un objet texte dans le panel pour inscrire votre nom.
- [ ] Créez une nouvelle police pour vos textes. [Créer une police](../unity/font.md#creer-une-police){.back}
- [ ] Ajustez l'ancrage de tous vos objets. Le panneau devrait être en bleu pour s'étirer et les autres objets en rouge pour s'ancrer à des positions précises. [Rect Transform](../unity/UI.md#rect-transform){.back}

**Tutoriel 🎥**    

<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/jjTNyBJHOcA?si=k3Q491l4Uiec0Z4z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Tutoriel 2 - Images personnalisées 🎥**    

<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/TplC8o_9L9o?si=4MTAfuSANpN7WoZ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 6 | Création de la scène Menu - Consignes et crédits

- [ ] Dans le canvas, créez un nouveau Panel pour les consignes.
- [ ] Dans ce panel, créez un panel par étape de vos consignes.
- [ ] Dans chaque panel d'étape, mettez des boutons pour passer à l'étape suivante ou revenir à la précédente. Mettez aussi le texte des consignes et des images pour appuyer vos consignes au besoin.
- [ ] Dans le canvas, créez un nouveau Panel pour les crédits.
- [ ] Dans ce panel, insérez du texte pour vos crédits et un bouton pour retourner au menu principal. TOUS les contenus doivent être crédités. 

### 7 | Création de la scène Jeu - UI

- [ ] Assurez-vous d'être dans la scène Jeu. 
- [ ] Créez un canvas qui contiendra tous les objets de votre scène. Assurez-vous qu'il se fie à une taille d'écran de 1920 x 1080 (Scale with screen size). [Créer un canvas](../unity/UI.md#canvas){.back}
- [ ] Dans le canvas, créez un Panel. Il contiendra les objets de votre menu.
- [ ] Créez un bouton qui permettra de retourner au menu principal.
- [ ] Affichez trois images qui représenteront la progression ou encore ajoutez un slider.
- [ ] Ajoutez une image qui indiquera l'élément à balayer.

### 8 | Création de la scène Jeu - Sons

- [ ] Importez vos sons dans la fenêtre project en faisant un clic-droit dans cette fenêtre, puis import New Asset.
- [ ] Ajoutez une composante AudioSource sur vos GameObject animations.
- [ ] Glissez vos clips audio dans le AudioSource et assurez-vous qu'il jouera en boucle lorsque l'objet sera activé. [Son](../code/variables.md#audiosource){.back}

**Tutoriel 🎥**

<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/XykuWzP0I2M?si=MTJ037z3a-HogduL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 9 | Création de la scène Menu - Script consignes et crédits

- [ ] Sur chaque bouton, utilisez l'événement OnClick pour activer et désactiver les panels nécessaires (grâce à GameObject -> SetActive). [Événement](../code/evenements.md#evenement){.back}
- [ ] Créez aussi un bouton fermeture qui ferme le panel consigne lorsqu'on appuie dessus.
- [ ] Créez aussi un bouton fermeture pour le panel crédits. 

### 10 | Création de la scène Jeu - Script
Votre script devra comprendre les éléments suivants:     

- [ ] La scène jeu montre l'image à recréer avec vos papiers. 
- [ ] Lorsque la bonne image est détectée, elle s'anime et votre barre de progression avance ou votre image de progression devient opaque.
- [ ] Lorsque le joueur réussit à recréer les 3 images, un message de succès apparaît, dans celle-ci, un bouton nous permet de retourner au menu et un autre nous offre de rejouer.  
- [ ] En tout temps, un bouton nous permet de retourner au menu. 


### 11 | Création de la scène Menu - Script UI

- [ ] Créez un objet vide et nommez-le. Ce sera le contrôleur de votre scène.
- [ ] Sur l'objet vide, créez un nouveau script et donnez-lui un nom.
- [ ] Créez la fonction de changement de scène dans votre nouveau script. [Script Scene](../code/changement_scene.md){.back}
- [ ] Ajoutez aussi la fonction pour quitter le jeu. [Script Quitter](../code/quitter_jeu.md){.back}
- [ ] Assignez les nouvelles fonctions créées à vos boutons « Démarrer le jeu » et « Quitter le jeu ». [Événement](../code/evenements.md#evenement){.back}


### 12 | Création de l'application

- [ ] Suivez le tutoriel suivant pour exporter votre application et modifier l'écran d'intro de votre jeu. Changez aussi l'icône par défaut de votre jeu. [Exporter pour Android](../unity/build.md){.back}

**Tutoriel 🎥**
<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/PBDSuIeR_dg?si=8T51GUENMc1BarN8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 


## Remise

Remettez votre travail dans le dossier suivant, votre dossier doit contenir le .apk de votre jeu et vos 3 images à scanner :

<!-- TODO : Ajouter un dossier de remise pour 2026 -->

[📁 Remise du Travail 1 - Lora](https://cmontmorency365-my.sharepoint.com/:f:/g/personal/lora_boisvert_cmontmorency_qc_ca/IgCxMpkir0lSQK3uvDWJsEfkAdPi33TNAgr3fIIFjv3M1v8?e=TKfJmt){ .md-button .md-button--primary }

