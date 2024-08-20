

Nous allons voir quelles composantes ajouter à votre projet pour pouvoir créer un projet en VR.   

***  
## Ajouter la VR au projet
<br>- [ ] Ouvrir le package manager (window, package manager).
- [ ] Assurez-vous d'être dans Unity Registry et trouvez XR Plugin Management dans la liste.
- [ ] Installez ce paquet.
- [ ] Edit, project settings, puis trouvez l'onglet XR Plug-in Management. Acceptez de redémarrer votre projet.
- [ ] Cochez ensuite OpenXR dans les choix.
- [ ] Ouvrez ensuite l'onglet OpenXR qui vient d'apparaître. Dans Interaction Profiles, cliquez sur le + et choisissez Oculus Touch Controller Profile dans la liste.
- [ ] Retournez dans le package manager.
- [ ] Trouvez ensuite le XR Interaction Toolkit et installez-le.
- [ ] Dans XR Interaction Toolkit, trouvez l'onglet Samples.
- [ ] Installez le paquet Starter Assets (Import).
- [ ] Dans le projet, ouvrez le dossier Samples, XR Interaction toolkit, 2.4.3, Starter Assets.
- [ ] Tous les éléments avec 3 sliders doivent être sélectionnez, puis vous appuyez sur Add to ActionBasedController ou autre choix sur ce bouton en haut.
- [ ] Edit, Project Settings, preset manager. Les actions qu'on vient d'ajouter y sont disponible.
- [ ] Dans Action Based Controller, on écrit Right pour le controlleur droit et Left pour le controlleur gauche.
En vidéo:   
<youtube src="Kk90hhsdOq0"></youtube>




***  
## Créer une scène et intégrer le casque de VR
<br>- [ ] File, new scene, puis choisir un modèle HDRP pour créer votre nouvelle scène. (Un GameObject Sky and Fog Volume apparaîtra dans votre scène si vous avez le bon modèle.)
- [ ] Sauvegardez votre scène dans le dossier Scene.
- [ ] Créez un objet Empty et nommez le joueur.
- [ ] Dans le joueur, ajouter un objet: Xr, XR Origin.
- [ ] Supprimez la MainCamera qui était dans votre projet au début.
- [ ] Vérifier dans XR Origin que dans Input Action Manager, l'élément choisi est XRI Default Input Actions.
- [ ] Ouvrez l'objet XR Origin et trouvez le controlleur Gauche. Dans la fenêtre Inspector sur la composante XR Controller, appuyez sur l'icône de sliders en haut à droite. Sélectionnez ensuite Left Controller dans la liste.
- [ ] Répétez cette étape pour le controlleur droit et choisissez Right controller.
- [ ] Dans le joueur, ajoutez un objet: XR, Locomotion System.
- [ ] Glissez votre XR Origin dans la boîte XR Origin de la composante Locomotion System de votre GameObject Locomotion System.
- [ ] Glissez le GameObject XR Interaction Manager dans le Joueur.
- [ ] Créez un prefab de votre joueur pour pouvoir l'utiliser dans d'autres scènes.

Le tout en vidéo:    
<youtube src="uwBccDZznHo"></youtube>

***  

## Tester avec un clavier et une souris
<br>- [ ] Mettre un plane dans votre scène pour éviter que votre joueur tombe.
- [ ] Ouvrir le package manager (window, package manager).
- [ ] Assurez-vous d'être dans Unity Registry et trouvez XR Interaction ToolKit dans la liste.
- [ ] Dans samples, importez le XR Device Simulator.
- [ ] Recherchez device simulator dans Assets.
- [ ] Glissez le Prefab nommé XR Device Simulator dans votre scène.
- [ ] Vous pouvez maintenant tester avec votre clavier et souris, quand vous faites Play, vous pourrez tester avec vos manettes.
- [ ] Décochez XR Device Simulator quand vous voulez tester avec le casque.

Cette vidéo vous explique comment tester avec une souris et un clavier:   
<youtube src="K9oU2pxeSyw"></youtube>

***  

## Automatiser la détection du casque
Si vous voulez que Unity active ou désactive les tests souris-clavier lorsque vous connectez votre casque à l'ordinateur, vous pouvez suivre la vidéo suivante. Sinon, cochez ou décochez le Device simulator pour tester avec le casque ou la souris.   
<youtube src="hnxy-QOiGAo"></youtube>

Vidéo d'inspiration:    
[📁 Justin P. Barnett](https://youtu.be/ImPZyIM6XNs){ .md-button }   <br>

