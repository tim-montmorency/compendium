Ce travail vous aidera à vous familiariser avec les principes de la 3D dans Unity.    
     

## 1. Préparer le projet

- [ ] Premièrement, créez un nouveau projet à l'aide du modèle 3D (Built-In Render Pipeline).
- [ ] Créez les dossiers suivants pour ranger vos fichiers dans la fenêtre project:

    - Animation    
    - Art    
    - Audio    
    - Font
    - Materials   
    - Prefabs    
    - Scripts    

- [ ] Ensuite, importez le paquet Polygon - Sampler Pack de Synty studio à l'aide du Package Manager.

<iframe width="560" height="315" src="https://www.youtube.com/embed/jaqGgmCTjPI?si=ygy8YXiUjzRxEadI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

       


## 2. Préparer la première Scène

- [ ] Créez une nouvelle scène à votre nom.
- [ ] Dans les dossiers Synty studio, sélectionnez un Prefab de sol que vous placerez en position (0,0,0). Au besoin, utilisez plusieurs tuiles pour créer un assez gros terrain. 
- [ ] Dans les mêmes dossiers, sélectionnez un bâtiment qui comprend un intérieur et un extérieur. Positionnez celui-ci sur le terrain. Si le terrain est trop petit pour la maison, agrandissez-le. On va essayer de laisser la taille de la maison à (1,1,1).
- [ ] Agrémentez la maison et son extérieur de quelques prefabs. Divisez l'intérieur de votre bâtiment en trois zones grâce aux objets. *Note: Vous pouvez aussi créer trois zones à l'extérieur et ne pas avoir de bâtiment ou encore avoir un bâtiment qui est une zone et deux zones à l'extérieur ou l'inverse. C'est à votre choix!*
- [ ] Dans le dossier Assets-> SyntyStudios-> PolygonStarter-> PolygonPrototype-> Prefabs-> Icons, trouvez les objets point light et spot light, mettez-les dans deux zones différentes de votre bâtiment.

!!! info "Bonne pratique"

    Classez vos objets de décoration dans des GameObject Empty bien nommés. Cela vous permettra de vous retrouver plus facilement dans votre hiérarchie!    
    

<iframe width="560" height="315" src="https://www.youtube.com/embed/6JgRHcI3-Ow?si=nqablW2qHugk8-ab" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


       

## 3. Créer une télévision
!!! info "Information"

    Assurez-vous d'être dans la zone qui ne contient ni le spot light, ni le point light.     
    
Nous allons créer une télé à l'aide des objets 3D de Unity.   

- [ ] Créez un objet vide à une position de (0,0,0) nommé tele, les parties de votre télévision iront à l'intérieur de celui-ci. (Hierarchy -> Clic droit -> Create Empty)
- [ ] Créez un cube, puis redimensionnez-le au format de votre télévision. (Hierarchy -> Clic droit -> 3D Object -> Cube)
- [ ] Créez ensuite un plane qui sera votre écran et positionnez-le au-dessus du cadre de votre télévision. (Hierarchy -> Clic droit -> 3D Object -> Plane)
- [ ] Créez un matériel pour le cadre de votre télé et choisissez sa couleur. (Project -> Materials -> Clic droit -> Create -> Material)
- [ ] Créez également un matériel pour votre écran et choisissez une image par défaut.
 

<iframe width="560" height="315" src="https://www.youtube.com/embed/F20wMIDgLn0?si=wKwnkFppa3IO-xLl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

       

## 4. Modifier le ciel (Skybox)

Nous allons modifier la Skybox de votre scene.   

- [ ] Créez un nouveau matériel. Comme shader, sélectionnez Skybox, procedural.
- [ ] Ouvrez la fenêtre lighting. (Window -> Rendering -> Lighting)
- [ ] Glissez votre nouveau ciel comme Skybox material dans la section Environnement, Skybox Material de la fenêtre Lighting.
- [ ] Dans l'inspecteur, modifiez les paramètres de votre ciel pour lui donner les couleurs de votre choix.
 

<iframe width="560" height="315" src="https://www.youtube.com/embed/1rOjHaAOPbM?si=i6hlXV36nSFdla-u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

       

## 5. Déplacement du personnage
Pour configurer le déplacement de votre caméra, vous devez télécharger ces scripts:      

[📁 Scripts](https://cmontmorency365-my.sharepoint.com/:u:/g/personal/lora_boisvert_cmontmorency_qc_ca/EWdo4xAPmEVGkE2bubEdFN0B9IbA-EwjbAlXnEWqW6ZI3w?e=5KWhuU){ .md-button }      

- [ ] Suivez ensuite la vidéo suivante pour bien configurer votre joueur et ses déplacements:

<iframe width="560" height="315" src="https://www.youtube.com/embed/J1zJ__tEtho?si=M0Fb65VN4E_ERDEx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

       

## 6. Éclairage de la scène
- [ ] Suivez ensuite la vidéo suivante pour configurer l'éclairage de votre bâtiment:

<iframe width="560" height="315" src="https://www.youtube.com/embed/eVzF0QE1zFE?si=G9Ca0fWpnw0XFrYS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

       
## 7. Création de zones
- [ ] Créez un objet vide avec un box collider pour chaque pièce de la maison. Assurez-vous que les colliders ont la bonne taille pour couvrir toute la pièce.
- [ ] Activez la fonction is Trigger de chaque collider pour permettre à votre personnage de se promener entre les pièces.

<iframe width="560" height="315" src="https://www.youtube.com/embed/wBlLnqNaRK0?si=b9CxZ64HDYmdPUd6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

       
## 8. Allumer ou éteindre une lumière avec la détection
- [ ] Suivez la vidéo suivante pour allumer ou éteindre une ampoule selon la présence ou non de votre personnage dans la pièce:

<iframe width="560" height="315" src="https://www.youtube.com/embed/QuisWgC1V7U?si=9MS-zsAGQ_Vsd7YF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

       
## 9. Partir ou arrêter une vidéo avec la détection
- [ ] Suivez la vidéo suivante pour partir ou arrêter une vidéo dans votre télévision selon la présence ou non de votre personnage dans la pièce:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ljcn5VG5958?si=iBgchBjInUY2wa73" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

       
## 10. Animer un paramètre sur une lumière
- [ ] Suivez la vidéo suivante pour animer l'état d'une lumière et partir vos animations selon la présence ou non de votre personnage dans la pièce:

<iframe width="560" height="315" src="https://www.youtube.com/embed/VUM6iT5u-DQ?si=BIEPm585rdrDDEW_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

       
## 11. Créer des prefabs
- [ ] Suivez la vidéo suivante pour ajouter des objets que le personnage pourra récupérer dans votre pièce:

<iframe width="560" height="315" src="https://www.youtube.com/embed/HmLe22qIjAM?si=9YAWA3zfWbnKtqCy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

       
## 12. Amasser des objets
- [ ] Suivez la vidéo suivante pour amasser des objets et les compter:

<iframe width="560" height="315" src="https://www.youtube.com/embed/pktYZ4XboPU?si=wFWQL9AsoRv9aB_M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

       
## 13. Canvas et réussite
- [ ] Suivez la vidéo suivante pour terminer votre exercice:
- [ ] Vous pouvez télécharger votre son de réussite depuis internet, pixabay en a des bons.

<iframe width="560" height="315" src="https://www.youtube.com/embed/h0uvCte0Lq4?si=CB0radcWYP3eApq1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


       
## 14. Défis
Avant de terminer, vous devez réaliser au moins deux des défis suivants. Il n'y a pas d'indications sur comment les réussir, faites des tests!      

- [ ] Créer une animation sur votre prefab pour que tous ses duplicatas soient animés.
- [ ] Animez une lumière Directionnal light pour simuler le cycle du jour et de la nuit à l'extérieur de la maison.
- [ ] Ajustez le script de votre personnage pour qu'il apparaisse au même endroit à chaque fois que le jeu recommence.
- [ ] Ou ajustez le script pour que peu importe la position de votre personnage au début, la bonne zone est détectée, puis animée.
- [ ] Créez une "zone de téléportation", lorsque votre personnage entre dedans, il est amené à l'extérieur de votre bâtiment. Ensuite, de l'extérieur, assurez-vous que lorsque le personnage revient à sa zone de téléportation, il soit ramené à l'intérieur. Assurez-vous aussi que le personnage ne puisse pas tomber dans le vide.




       

## 15. Exporter le jeu
- [ ] Exporter le jeu à l'aide du bouton build dans File, build settings.
- [ ] Remettez le .exe de votre jeu à votre nom dans le dossier de remise:

[📁 Remise Travail 2](https://cmontmorency365-my.sharepoint.com/:f:/g/personal/lora_boisvert_cmontmorency_qc_ca/EnRFbzMcF0RAm9tgW8u1s4YBJ1gViadzaHLENmELO_eL5w?e=SX3BnU){ .md-button }   


       

## Notes de cours 📚
[📝 Prefabs](../unity/prefabs.md){ .md-button }
[📝 Coroutine](../code/coroutine.md){ .md-button }

