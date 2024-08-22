

Cet exercice vous aidera à vous familiariser avec les principes de la 3D dans Unity.    


***  


## Préparer le projet

<br>- [ ] Premièrement, créez un nouveau projet à l'aide du modèle 3D core.
- [ ] Créez les dossiers pour ranger vos fichiers dans la fenêtre project. <a href="https://tim-montmorency.com/timdoc/582-434MO/unity/introduction/#nomenclature">Nomenclature</a>
- [ ] Ensuite, importez le paquet Polygon - Sampler Pack de Synty studio à l'aide du Package Manager.

<youtube src="jaqGgmCTjPI"></youtube>

***  


## Préparer la première Scène

<br>- [ ] Créez une nouvelle scène à votre nom.
- [ ] Dans les dossiers Synty studio, sélectionnez un Prefab de sol que vous placerez en position (0,0,0).
- [ ] Dans les mêmes dossiers, sélectionnez un bâtiment qui comprend un intérieur et un extérieur. Positionnez celui-ci sur le terrain. Ajustez la taille du bâtiment au besoin.
- [ ] Agrémentez la maison et son extérieur de quelques prefabs. Tentez de diviser l'intérieur de votre bâtiment en trois zones grâce aux objets.
- [ ] Dans le dossier Assets-> SyntyStudios-> PolygonStarter-> PolygonPrototype-> Prefabs-> Icons, trouvez les objets point light et spot light, mettez-les dans deux zones différentes de votre bâtiment.
Cette vidéo comprends les étapes précédentes:   

<youtube src="6JgRHcI3-Ow"></youtube>


***  

## Créer une télévision

Nous allons créer une télé à l'aide des objets 3D de Unity.   
<br>- [ ] Créez un objet vide, les parties de votre télévision iront à l'intérieur de celui-ci.
- [ ] Créez un cube, puis redimensionnez-le au format de votre télévision.
- [ ] Créez ensuite un plane qui sera votre écran et positionnez-le au-dessus du cadre de votre télévision.
- [ ] Créez un matériel pour le cadre de votre télé et choisissez sa couleur.
- [ ] Créez également un matériel pour votre écran et choisissez une image par défaut.
Cette vidéo comprends les étapes précédentes:   

<youtube src="F20wMIDgLn0"></youtube>

***  

## Modifier le ciel (Skybox)

Nous allons modifier la Skybox de votre scene.   
<br>- [ ] Créez un nouveau matériel. Comme shader, sélectionnez Skybox, procedural.
- [ ] Ouvrez la fenêtre lighting à partir du menu window, rendering.
- [ ] Glissez votre nouveau ciel comme Skybox material dans la section Environnement de la fenêtre Lighting.
- [ ] Dans l'inspecteur, modifiez les paramètres de votre ciel pour lui donner les couleurs de votre choix.
Cette vidéo comprends les étapes précédentes:   

<youtube src="1rOjHaAOPbM"></youtube>

***  

## Déplacement du personnage
Pour configurer le déplacement de votre caméra, vous devez télécharger ces scripts:   
[📁 Scripts 📁](fichiers/scripts_exercice1.zip){ .md-button }   <br>
<br>- [ ] Suivez ensuite la vidéo suivante pour bien configurer votre joueur et ses déplacements:

<youtube src="J1zJ__tEtho"></youtube>

***  

## Éclairage de la scène
<br>- [ ] Suivez ensuite la vidéo suivante pour configurer l'éclairage de votre bâtiment:

<youtube src="eVzF0QE1zFE"></youtube>

***  
## Création de zones
<br>- [ ] Créez un objet vide avec un box collider pour chaque pièce de la maison. Assurez-vous que les colliders ont la bonne taille pour couvrir toute la pièce.
- [ ] Activez la fonction is Trigger de chaque collider pour permettre à votre personnage de se promener entre les pièces.

<youtube src="wBlLnqNaRK0"></youtube>

***  
## Allumer ou éteindre une lumière avec la détection
<br>- [ ] Suivez la vidéo suivante pour allumer ou éteindre une ampoule selon la présence ou non de votre personnage dans la pièce:

<youtube src="QuisWgC1V7U"></youtube>

***  
## Partir ou arrêter une vidéo avec la détection
<br>- [ ] Suivez la vidéo suivante pour partir ou arrêter une vidéo dans votre télévision selon la présence ou non de votre personnage dans la pièce:

<youtube src="Ljcn5VG5958"></youtube>


***  
## Animer un paramètre sur une lumière
<br>- [ ] Suivez la vidéo suivante pour animer l'état d'une lumière et partir vos animations selon la présence ou non de votre personnage dans la pièce:

<youtube src="VUM6iT5u-DQ"></youtube>

***  
## Créer des prefabs
<br>- [ ] Suivez la vidéo suivante pour ajouter des objets que le personnage pourra récupérer dans votre pièce:

<youtube src="HmLe22qIjAM"></youtube>

***  
## Amasser des objets
<br>- [ ] Suivez la vidéo suivante pour amasser des objets et les compter:

<youtube src="pktYZ4XboPU"></youtube>

***  
## Canvas et réussite
<br>- [ ] Suivez la vidéo suivante pour terminer votre exercice:
- [ ] Vous pouvez télécharger votre son de réussite depuis internet, pixabay en a des bons.

<youtube src="h0uvCte0Lq4"></youtube>


***  
## Défis
Avant de terminer, vous devez réaliser un des défis suivants. Il n'y a pas d'indications sur comment les réussir, faites des tests!   
<br>- [ ] Créer une animation sur votre prefab pour que tous ses duplicatas soient animés.
- [ ] Animez une lumière Directionnal light pour simuler le cycle du jour et de la nuit à l'extérieur de la maison.
- [ ] Ajustez le script de votre personnage pour qu'il apparaisse au même endroit à chaque fois que le jeu recommence.
- [ ] Ou ajustez le script pour que peu importe la position de votre personnage au début, la bonne zone est détectée, puis animée.
- [ ] Créez une "zone de téléportation", lorsque votre personnage entre dedans, il est amené à l'extérieur de votre bâtiment. Ensuite, de l'extérieur, assurez-vous que lorsque le personnage revient à sa zone de téléportation, il soit ramené à l'intérieur. Assurez-vous aussi que le personnage ne puisse pas tomber dans le vide.




***  

## Exporter le jeu
<br>- [ ] Exporter le jeu à l'aide du bouton build dans File, build settings.
- [ ] Remettez le .exe de votre jeu à votre nom dans le dossier de remise:

[📁 Remise Exercice](https://cmontmorency365-my.sharepoint.com/:f:/g/personal/lora_boisvert_cmontmorency_qc_ca/Er2IHGKhv29PonR8Sp1Un4QBGEPjr_iXWQU0Ua4snlOoXw?e=hYWvav){ .md-button }   <br>


***  

## Notes de cours 📚

<intlink href="../../unity/prefabs/"></intlink>
<intlink href="../../code/coroutine/"></intlink>
