# Travail 2

Ce travail vous aidera à vous familiariser avec les principes de la 3D dans Unity.    

## Exemple de travail 2
Vous pouvez télécharger le dossier et ensuite ouvrir le fichier nommé daher_elie_projet2.exe pour jouer à un exemple de travail 2: 

[📁 Exemple travail 2](https://cmontmorency365-my.sharepoint.com/:f:/g/personal/lora_boisvert_cmontmorency_qc_ca/IgBaADNdw6EITKudraCmHjyuAYLCXjV0F2N7HEyCTrJakMs?e=KAZBv2){ .md-button .back }

## 1. Préparer le projet

- [ ] Premièrement, créez un nouveau projet à l'aide du modèle 3D (Built-In Render Pipeline) et de GitHub.

<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/g54553M4Swc?si=Wf3ZkhHisT0zX1Lz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>       

Utilisateurs GitHub de vos enseignants:     

- LoraBoisvert
- Enric Granzotto Llagostera (egl-mo)

- [ ] Créez les dossiers suivants pour ranger vos fichiers dans la fenêtre project:

    - Animation    
    - Art    
    - Audio    
    - Font    
    - Materials       
    - Prefabs    
    - Scripts    

- [ ] Ensuite, importez le paquet Polygon - Sampler Pack de Synty studio à l'aide du Package Manager. Si vous n'êtes pas capable d'y avoir accès, vous pouvez le récupérer ici: [Student pack](https://cmontmorency365-my.sharepoint.com/:u:/g/personal/lora_boisvert_cmontmorency_qc_ca/EfKwHJ4FR8xAsVfA8vjB_FsBkbTmx5G78a1C6vRmuAFBfg?e=YtAR6h) 

<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/jaqGgmCTjPI?si=ygy8YXiUjzRxEadI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

       


## 2. Préparer la première Scène

- [ ] Créez une nouvelle scène à votre nom.
- [ ] Dans les dossiers Synty studio, sélectionnez un Prefab de sol que vous placerez en position (0,0,0). Au besoin, utilisez plusieurs tuiles pour créer un assez gros terrain. 
- [ ] Dans les mêmes dossiers, sélectionnez un bâtiment qui comprend un intérieur et un extérieur. Positionnez celui-ci sur le terrain. Si le terrain est trop petit pour la maison, agrandissez-le. On va essayer de laisser la taille de la maison à (1,1,1).
- [ ] Agrémentez la maison et son extérieur de quelques prefabs. Divisez l'intérieur de votre bâtiment en trois zones grâce aux objets. *Note: Vous pouvez aussi créer trois zones à l'extérieur et ne pas avoir de bâtiment ou encore avoir un bâtiment qui est une zone et deux zones à l'extérieur ou l'inverse. C'est à votre choix!*
- [ ] Dans le dossier Assets-> SyntyStudios-> PolygonPrototype-> Prefabs-> Icons, trouvez les objets point light et spot light, mettez-les dans deux zones différentes de votre bâtiment.
- [ ] Insérez quelques petits objets qu'on pourrait prendre facilement (Exemple: livre, nourriture, ...) 

!!! info "Bonne pratique"

    Classez vos objets de décoration dans des GameObject Empty bien nommés. Cela vous permettra de vous retrouver plus facilement dans votre hiérarchie!    
    

<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/6JgRHcI3-Ow?si=nqablW2qHugk8-ab" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


       

## 3. Créer une télévision
!!! info "Information"

    Assurez-vous d'être dans la zone qui ne contient ni le spot light, ni le point light. Vous pouvez créer une télévision ou tout autre objet. L'important est qu'éventuellement une vidéo jouera sur la surface.      
    
Nous allons créer une télé à l'aide des objets 3D de Unity.   

- [ ] Créez un objet vide à une position de (0,0,0) nommé tele, les parties de votre télévision iront à l'intérieur de celui-ci. (Hierarchy -> Clic droit -> Create Empty)
- [ ] Créez un cube, puis redimensionnez-le au format de votre télévision. (Hierarchy -> Clic droit -> 3D Object -> Cube)
- [ ] Créez ensuite un plane qui sera votre écran et positionnez-le au-dessus du cadre de votre télévision. (Hierarchy -> Clic droit -> 3D Object -> Plane)
- [ ] Créez un matériel pour le cadre de votre télé et choisissez sa couleur. (Project -> Materials -> Clic droit -> Create -> Material)
- [ ] Créez également un matériel pour votre écran et choisissez une image par défaut.
 

<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/F20wMIDgLn0?si=wKwnkFppa3IO-xLl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

       

## 4. Modifier le ciel (Skybox)

Nous allons modifier la Skybox de votre scene.   

- [ ] Créez un nouveau matériel. Comme shader, sélectionnez Skybox, procedural.
- [ ] Ouvrez la fenêtre lighting. (Window -> Rendering -> Lighting)
- [ ] Glissez votre nouveau ciel comme Skybox material dans la section Environnement, Skybox Material de la fenêtre Lighting.
- [ ] Dans l'inspecteur, modifiez les paramètres de votre ciel pour lui donner les couleurs de votre choix.
 

<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/1rOjHaAOPbM?si=i6hlXV36nSFdla-u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

       

## 5. Déplacement du personnage
Pour configurer le déplacement de votre caméra, vous devez télécharger ces scripts:      

[📁 Scripts](https://cmontmorency365-my.sharepoint.com/:u:/g/personal/lora_boisvert_cmontmorency_qc_ca/EWdo4xAPmEVGkE2bubEdFN0B9IbA-EwjbAlXnEWqW6ZI3w?e=5KWhuU){ .md-button }      

- [ ] Une fois les scripts téléchargés, les extraire du .zip. 

**Importer les scripts**    

- [ ] Faites un clic droit dans le panneau **Project**.
- [ ] Sélectionnez **Import New Asset**.
- [ ] Allez chercher les scripts extraits nommés :

     - `PlayerMovement.cs`
     - `MouseLook.cs`

- [ ] Importez-les dans Unity.

 **Créer le joueur**    
 
- [ ] Allez dans **Project > Assets > SyntyStudio > PolygonStarter > Prefabs > Characters**.
- [ ] Recherchez un personnage simple (ex. : capsule ou modèle 3D minimal).
- [ ] Ajouter le modèle dans la scène.
- [ ] Redimensionnez-le pour qu'il soit proportionnel à votre environnement.
- [ ] Assurez-vous que le personnage touche le sol (sans être enfoncé).
- [ ] Renommez l'objet **Joueur**.
- [ ] Cliquez sur **Add Component**.
- [ ] Cherchez **Character Controller** et ajoutez-le.
- [ ] Activez les **Gizmos** en haut à droite de la scène pour voir le collider de votre personnage.
- [ ] Ajustez les valeurs de radius et height pour que le collider entoure correctement le personnage.
- [ ] Assurez-vous que le collider est légèrement au-dessus du sol.


**Ajouter le script PlayerMovement**    

- [ ] Faites glisser **PlayerMovement.cs** sur l'objet **Joueur**.
- [ ] Le script demande une référence au **Character Controller**. Faites glisser l'objet **Joueur** dans le champ **Controller** du script.
- [ ] Modifiez la vitesse **(Speed)** et la gravité **(gravity)** selon vos préférences.
- [ ] Ajustez la hauteur de saut si nécessaire.

**Créer un Ground Check**

- [ ] Faites un clic droit sur **Joueur**.
- [ ] Sélectionnez **Create Empty**.
- [ ] Renommez l’objet **GroundCheck**.
- [ ] Assurez-vous que **GroundCheck** est placé à la hauteur du plancher. Il doit toucher le sol sans être enfoncé.
- [ ] Créez un **Layer** pour le sol. Allez en haut de l'inspecteur dans **Layer > Add Layer**. Créez un nouveau layer nommé **Ground**.
- [ ] Assignez le layer **Ground** à tous les objets qui constituent le plancher pour votre joueur.
- [ ] Retournez sur l'objet **Joueur**.
- [ ] Assurez-vous de choisir le layer **Ground** sur le **GroundMask**.


**Configurer la caméra**    

- [ ] Glissez la caméra principale comme **enfant** de l’objet **Joueur**.
- [ ] Ajustez sa position pour qu’elle soit au niveau des yeux du joueur. Vous verrez alors à l'intérieur du joueur. Pour ne plus voir les éléments visuels qui bloquent votre champ de vision, décochez l'objet **Mesh Renderer** de votre joueur. 
- [ ] Faites glisser le script **MouseLook.cs** sur la caméra.
- [ ] Assurez-vous que le **Joueur** est assigné comme **Player Body** dans le script.
- [ ] Modifiez la **sensibilité de la souris** selon vos préférences.



<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/J1zJ__tEtho?si=M0Fb65VN4E_ERDEx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

!!! warning "Attention"

    Assurez-vous que le scale de votre personnage n'est pas inférieur à (0.1, 0.1, 0.1). Cela nous assurera du bon fonctionnement des colliders.

## 6. Colliders
- [ ] Assurez-vous que le personnage ne puisse pas tomber dans le vide en disposant des box colliders autour de votre terrain.
- [ ] Assurez-vous aussi qu'on puisse entrer et sortir de vos bâtiments. 


## 7. Éclairage de la scène
- [ ] Ajustez le directionnal light à votre goût.
- [ ] Créez une point light sur le bulbe que vous avez inséré plus tôt.
- [ ] Créez un spot light sur le spot que vous avez inséré plus tôt. 

<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/eVzF0QE1zFE?si=G9Ca0fWpnw0XFrYS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

!!! info "Note"

    Si vous ne voulez aucune ombre, vous pouvez aller dans le paramètre Shadow Type de votre éclairage et sélectionner No Shadows.   
       
## 8. Création de zones
!!! info "Note"

    Rappel, vous avez besoin de 3 zones, une avec une télévision (ou un objet qui joue une vidéo), une avec un spotlight et une avec un pointlight. Les zones peuvent être à l'extérieur ou l'intérieur, mais elles doivent être faciles à trouver. 

- [ ] Créez un objet vide avec un box collider pour chacune de vos zones. Assurez-vous que les colliders ont la bonne taille pour couvrir toute la zone. Nommez bien vos zones. 
- [ ] Activez la fonction is Trigger de chaque collider pour permettre à votre personnage de se promener entre les zones.

!!! info "Note"

    Pour vous aider à créer vos zones, vous pouvez créer des cube et ensuite décocher le paramètre Mesh Renderer. 

<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/wBlLnqNaRK0?si=b9CxZ64HDYmdPUd6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

       
## 9. Allumer ou éteindre une lumière avec la détection

**Configurer la zone interactive**  

- [ ] Sélectionnez la zone qui contient votre Point light dans la hiérarchie.  
- [ ] En haut de l'inspecteur, cliquez sur **Tag**.  
- [ ] Sélectionnez **Add Tag...**.  
- [ ] Cliquez sur le **+** et ajoutez un tag nommé **Zone1**(ou le nom de votre choix).  
- [ ] Assignez le tag **zone1** à la zone de votre point light.


**Créer le script pour contrôler les objets interactifs**  

- [ ] Faites un clic droit dans le panneau **Project**.  
- [ ] Sélectionnez **Create > C# Script**.  
- [ ] Nommez le script `InteractionsJoueur.cs` (ou un nom de votre choix).  
- [ ] Déplacez le script dans le dossier **Scripts** pour garder votre projet bien organisé.  
- [ ] Double-cliquez sur le script pour l'ouvrir dans votre éditeur de code préféré.
- [ ] Créez une variable publique pour l'ampoule :  

```csharp
public GameObject ampoule;
```

**Créer la détection d'entrée dans une zone**

- [ ] Ajoutez la fonction OnTriggerEnter dans votre script :

```csharp
void OnTriggerEnter(Collider other)
{
  
}
```

- [ ] Dans cette fonction, vous devez activer votre objet si vous êtes dans la bonne zone:

```csharp
 if (other.CompareTag("nomDeVotreLayer"))
    {
        ampoule.SetActive(true);
    }
```

**Créer la détection de sortie d'une zone**

- [ ] Lorsque votre joueur sort, c'est plutôt la fonction de sortie que vous devez utiliser. 

```csharp
void OnTriggerExit(Collider other)
{
    //Insérer le code pour vérifier de quel zone on sort et pour désactiver l'ampoule.
}
```

- [ ] Sauvegardez votre script et retournez dans Unity. 

**Assigner le script au joueur**    

- [ ] Sélectionnez Joueur dans la hiérarchie.
- [ ] Faites glisser le script PlayerInteraction.cs sur l'objet Joueur.
- [ ] Faites glisser l'ampoule de la cuisine dans le champ Ampoule de l'inspecteur.


<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/QuisWgC1V7U?si=9MS-zsAGQ_Vsd7YF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

       
## 10. Partir ou arrêter une vidéo avec la détection

**Configurer la zone interactive**  

- [ ] Sélectionnez la zone qui contient votre télévision dans la hiérarchie.  
- [ ] En haut de l'inspecteur, cliquez sur **Tag**.  
- [ ] Sélectionnez **Add Tag...**.  
- [ ] Cliquez sur le **+** et ajoutez un tag nommé **Zone2**(ou le nom de votre choix).  
- [ ] Assignez le tag **zone2** à la zone de votre télévision. 

**Télécharger et importer la vidéo**  

- [ ] Allez sur un site comme Pexels ou Pixabay pour télécharger une vidéo. Choisissez une vidéo de taille raisonnable (par exemple, 1920x1080 ou 1280x720) pour éviter les vidéos trop lourdes.  
- [ ] Téléchargez la vidéo (par exemple, une vidéo de 3 à 15 secondes).  
- [ ] Créez un dossier **Vidéo** dans le dossier **Art** de votre projet Unity pour garder tout organisé.  
- [ ] Importez la vidéo en la faisant glisser dans ce dossier.

**Ajouter le composant Vidéo Player à l'écran**  

- [ ] Sélectionnez l'objet **Écran Télé** dans la hiérarchie de votre scène.  
- [ ] Dans l'inspecteur, cliquez sur **Add Component**.  
- [ ] Recherchez et ajoutez le composant **Video Player**.  
- [ ] Dans le champ **Video Clip**, glissez votre vidéo importée.  
- [ ] Pour que la vidéo joue en boucle, cochez **Loop**.  
- [ ] Si vous ne voulez pas de son, choisissez **None** dans l'option **Audio Output Mode** .

**Ajuster le matériel de l'écran pour afficher la vidéo**  

- [ ] Sélectionnez l'écran télé et allez dans le **Material** de l'objet.  
- [ ] Changez le type de matériel (shader en haut de l'inspecteur) en **Unlit/Texture** pour permettre l'affichage de la vidéo.  
- [ ] Vous devez créer une texture pour l'écran éteint (par exemple, un écran noir avec quelques boutons).
- [ ] Importez votre texture personnalisée dans Unity. 
- [ ] Appliquez cette texture à l'écran dans le paramètre **None/texture** du material. 

**Contrôler la vidéo avec le script du joueur**  

- [ ] Sélectionnez l'objet **Joueur** dans la hiérarchie.  
- [ ] Trouvez le script **InteractionsJoueur**.
- [ ] Ouvrez le script et ajoutez la bibliothèque pour la vidéo:

```csharp
// Ajouter une bibliothèque
using UnityEngine.Video;
```

- [ ] Créez ensuite un objet pour contenir votre vidéo

```csharp
// Référence au VideoPlayer de l'écran
public VideoPlayer videoPlayer; 
```

- [ ] Utilisez ensuite la fonction d'entrée dans la zone. Si le bon tag est détecté, vous pouvez partir votre vidéo:

```csharp
 if (other.CompareTag("nomDeVotreLayer"))
    {
        // Démarre la vidéo
        videoPlayer.Play(); 
    }
```

- [ ] Lors de la sortie, utilisez plutôt la ligne suivante: 

```csharp
// Arrête la vidéo
videoPlayer.Stop(); 
```

- [ ] Sauvegardez votre script et retournez dans Unity.

**Terminer de préparer le joueur**   

- [ ] Sélectionnez l'objet **Joueur** dans la hiérarchie.
- [ ] Dans l'inspecteur du joueur, faites glisser l'objet **Écran Télé** dans le champ **VideoPlayer** du script.

<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/Ljcn5VG5958?si=iBgchBjInUY2wa73" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

       
## 11. Animer un paramètre sur une lumière

**Configurer la zone interactive**  

- [ ] Sélectionnez la zone qui contient votre SpotLight dans la hiérarchie.  
- [ ] En haut de l'inspecteur, cliquez sur **Tag**.  
- [ ] Sélectionnez **Add Tag...**.  
- [ ] Cliquez sur le **+** et ajoutez un tag nommé **Zone3**(ou le nom de votre choix).  
- [ ] Assignez le tag **zone3** à la zone de votre SpotLight. 

**Créer l'animateur et les animations**

- [ ] Sélectionnez le **parent** du Spotlight (ou le Spotlight lui-même si vous n'avez pas de parent).
- [ ] Cliquez sur **Add Component** et recherchez **Animator**. Ajouter cette composante.
- [ ] Dans la fenêtre **Project**. Allez dans le dossier **Animation**.
- [ ] Faites un clic droit et sélectionnez **Create > Animator Controller**.
- [ ] Nommez-le **Controleur**.
- [ ] Glissez ce contrôleur dans le champ **Controller** de l'Animator de l'objet SpotLight.
- [ ] Ouvrez les fenêtres **Animation** et **Animator** si vous ne les avez pas avec **Window>Animation>...**.
- [ ] Sélectionnez l'objet qui contient **l'Animator** du SpotLight.
- [ ] Dans la fenêtre **Animation** créez trois animations :
 
- **FadeIn**: L'intensité de la lumière commence à 0, quelques frames plus tard elle est à 1 ou 2.
- **ChangeColor**: Modifiez le paramètre color de votre animation pour que la couleur de votre lumière change dans le temps. L'animation doit être fluide.
- **FadeOut**: Faire l'animation inverse du fadeIn. Débuter à 1 ou 2 pour l'intensité, puis terminer à 0.

- [ ] Ouvrez la fenêtre **Animator**. Assurez-vous d'être encore sur l'objet SpotLight qui contient l'animator.
- [ ] Assurez-vous que l'animation **FadeIn** est en orange (Première animation). Si ce n'est pas le cas, faite un clic-droit sur **FadeIn**, cliquez ensuite sur **Set as LayerDefaultState**.
- [ ] Ensuite, sélectionnez **FadeIn**, appuyez sur le clic-droit, puis sélectionnez **Make Transition**. Appuyez ensuite sur **ColorChange**. Cela créera une transition entre vos deux animations.
- [ ] Sélectionnez ensuite **Any State**, appuyez sur le clic-droit, puis sélectionnez **Make Transition**. Appuyez ensuite sur **FadeOut**. Cela fera en sorte que vous pourrez sortir quand vous voulez de votre animation.
- [ ] Pour les animations **FadeIn** et **FadeOut**: Double-cliquez sur les animations et décochez le paramètre **Loop Time**. Cela va vous assurez que votre animation jouera une seule fois.


**Créer le script pour déclencher les animations**

- [ ] Sélectionnez l'objet **Joueur** dans la hiérarchie.  
- [ ] Trouvez le script **InteractionsJoueur**.
- [ ] Ouvrez le script et créez un objet pour parler à votre SpotLight:

```csharp
// Référence au SpotLight
public Animator animLumiere; 
```

- [ ] Utilisez ensuite la fonction d'entrée dans la zone. Si le bon tag est détecté, vous pouvez partir votre animation:

```csharp
 if (other.CompareTag("nomDeVotreLayer"))
    {
        // Démarre l'animation
        animLumiere.Play("FadeIn");
    }
```

- [ ] Lors de la sortie, assurez-vous de jouer l'animation FadeOut.
- [ ] Sauvegardez votre script et retournez dans Unity.

**Terminer de préparer le joueur**   

- [ ] Sélectionnez l'objet **Joueur** dans la hiérarchie.
- [ ] Dans l'inspecteur du joueur, faites glisser l'objet **SpotLight** dans le champ **AnimLumiere** du script.

<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/VUM6iT5u-DQ?si=BIEPm585rdrDDEW_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

       
## 12. Créer des prefabs


**Créer un parent pour les objets**

- [ ] Faites un clic droit dans la **Hiérarchie**. Sélectionnez **Create Empty**.
- [ ] Renommez cet objet, par exemple **ParentEtoile**.
- [ ] Assurez-vous que la position de cet objet est à **(0, 0, 0)**.
- [ ] Ajoutez votre modèle 3D dans la scène (par exemple une étoile).
- [ ] Positionnez-le correctement. **(0, 0 ,0)**
- [ ] Glissez l'étoile comme **enfant** de l'objet vide **ParentEtoile**.

**Configurer le Collider pour la détection**

- [ ] Sélectionnez votre objet (par exemple l'étoile).
- [ ] Cliquez sur **Add Component** et recherchez **Box Collider**.
- [ ] Si le Collider est trop petit ou trop grand, cliquez sur le triangle de **Edit Collider** et modifier manuellement la boîte pour qu'elle s'adapte à la forme de l'objet. (Elle devrait être légèrement plus grande)
- [ ] Assurez-vous que **Is Trigger** est coché si vous voulez détecter l'entrée et la sortie.


**Créer un tag pour les objets ramassables**

- [ ] Sélectionnez votre objet (étoile).
- [ ] En haut de l'Inspecteur, cliquez sur **Tag > Add Tag**.
- [ ] Cliquez sur le **+** et ajoutez un nouveau tag appelé **Etoile** (ou un autre nom selon votre choix).
- [ ] Retournez sur votre étoile.
- [ ] Assignez-lui le tag **Etoile**.


**Créer un Prefab pour dupliquer l'objet**

- [ ] Allez dans votre dossier **Prefabs** dans le **Project**.
- [ ] Glissez le parent **ParentEtoile** dans ce dossier.
- [ ] Le parent devient **bleu**, indiquant qu'il est maintenant un Prefab.


**Dupliquer les objets dans la scène**

- [ ] Glissez le Prefab dans la scène autant de fois que nécessaire.
- [ ] Placez les objets dans la scène de manière à ce qu'ils soient accessibles au joueur. Assurez-vous qu'ils ne traversent pas d'autres objets comme des tables ou des murs.


**Créer une animation pour l'objet**

- [ ] Sélectionnez le parent **ParentEtoile**.
- [ ] Cliquez sur **Add Component** et ajoutez **Animator**.
- [ ] Créez un **Animator Controller** nommé **AnimatorEtoile**.
- [ ] Glissez-le dans le champ **Controller** de l'Animator.
- [ ] Ouvrez la fenêtre **Animation**.
- [ ] Créez un **nouveau clip** appelé **AnimationEtoile**.
- [ ] Sélectionnez l'enfant (l'étoile) pour animer un de ses paramètres.
- [ ] Exemple: Position de départ : (0, 0, 0). Position après 15 frames : légèrement plus haut. Retour à la position de départ à 30 frames.  


**Modifier le Prefab globalement**  

- [ ] Double-cliquez sur le Prefab pour l'ouvrir.
- [ ] Apportez les modifications nécessaires (par exemple, changer la couleur).
- [ ] Sauvegardez les modifications.
- [ ] Toutes les copies dans la scène seront mises à jour automatiquement.


<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/csC7q3mFQjQ?si=Dn2UczlfJ8Qq80HJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
## 13. Amasser des objets

**Créer le script pour ramasser les prefab**

- [ ] Sélectionnez l'objet **Joueur** dans la hiérarchie.  
- [ ] Trouvez le script **InteractionsJoueur**.
- [ ] Ouvrez le script, ajoutez une variable pour compter les prefabs amassés:

```csharp
public int count; 
```

- [ ] Dans le OnTriggerEnter, allez ajouter une condition pour le **TriggerEnter**. Si le tag est celui de votre prefab:

```csharp
        // Désactiver le Prefab (Il faut ABSOLUMENT parler à other, c'est l'objet avec lequel on est entré en collision.)
        other.gameObject.SetActive(false);
        // Ajouter 1 à notre décompte
        count ++; 

```

<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/pktYZ4XboPU?si=wFWQL9AsoRv9aB_M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 14. Pointage et meilleur pointage
- [ ] Pour configurer le pointage, vous devez télécharger et importer dans votre jeu ce paquet personnalisé dans votre projet:      

[📁 Pointage](https://cmontmorency365-my.sharepoint.com/:u:/g/personal/lora_boisvert_cmontmorency_qc_ca/EWEV07uUq1JJoHfK1ALCmMwBvrEaXVA3Cb8p1C5p1MV6Kw?e=eqP3CM){ .md-button }      

**Ajouter le script**

- [ ] Dans la hiérarchie, faites **Clic-droit > Create empty**.
- [ ] Nommez l'objet **Pointage**.
- [ ] Dans le dossier **Assets > HighScore**, sélectionnez le script **High Score Persistant** et glissez-le sur l'objet **Pointage**.

**Créer un canvas pour afficher le pointage**

- [ ] Sur l'objet **Pointage**, **Clic-droit > UI > Canvas**. Cela créera un canvas comme enfant du pointage.
- [ ] Sur l'objet **Canvas**, assurez-vous que le **UI Scale Mode** du **Canvas scaler** est en mode **Scale With Screen Size**. La **Reference resolution** doit être à **1920 x 1080**.
- [ ] Pour voir votre Canvas: appuyez sur **F** et assurez-vous d'être en 2D avec le bouton 2D en haut à droite de la fenêtre Scene.
- [ ] Sur l'objet **Canvas**, **Clic-droit > UI > Panel**. Assurez-vous que le fond est transparent.
- [ ] Sur l'objet **Panel**, **Clic-droit > UI > Text - TextMeshPro**. Choisir la couleur de votre texte. Renommer votre objet **PointageActuel**.
- [ ] Dupliquez l'objet texte et renommez-le **MeilleurPointage**.
- [ ] Créez deux autres objets de texte qui seront les titres pour vos pointages.
- [ ] Cliquez sur l'objet **Pointage**. Glissez l'objet **PointageActuel** dans le paramètre **Texte Pointage** du script **High Score Persistant**.
- [ ] Glissez ensuite l'objet **MeilleurPointage** dans le paramètre **Texte High Score** du script **High Score Persistant**.

**Modifier le pointage**

- [ ] Sélectionnez l'objet **Joueur** dans la hiérarchie.  
- [ ] Trouvez le script **InteractionsJoueur**.
- [ ] Ouvrez le script, ajoutez une variable pour parler au script de pointage: 

```csharp
public HighScorePersistant pointage; 
```

- [ ] Ajoutez votre pointage dans la bonne fonction (elle existe déjà). Vous avez déjà une variable qui contient le nouveauPointage, vous devez la trouver et remplacer nouveauPointage par cette variable:

```csharp
pointage.OnChangerPointage(nouveauPointage);
```

- [ ] Sélectionnez l'objet **Joueur** dans la hiérarchie.
- [ ] Dans l'inspecteur du joueur, faites glisser l'objet **Pointage** dans le champ **Pointage** du script.

<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/AlMWnTkihvk?si=zqATKfYjvwWOHk9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## 15. Minuterie
- [ ] Pour configurer la minuterie, vous devez télécharger et importer dans votre jeu ce paquet personnalisé dans votre projet:      

[📁 Minuterie](https://cmontmorency365-my.sharepoint.com/:u:/g/personal/lora_boisvert_cmontmorency_qc_ca/ETaDogb42qlNgkLmQfibaY0BNe8O8tyC4GR_GI6i7EFvAA?e=Brnmgr){ .md-button }      


- [ ] Ouvrir le dossier **Assets > Minuteries**.
- [ ] Glissez le prefab **MinuterieRedemarrage** dans votre jeu.
- [ ] Modifiez le paramètre **Duration** du script. Ce paramètre détermine la durée de votre jeu. Il devrait être d'au moins 30 secondes. 

<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/4HjRzJdY0Ws?si=_AjXtztvvCEiqHyF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



## 16. Défis
Avant de terminer, vous devez réaliser au moins deux des défis suivants. Il n'y a pas d'indications sur comment les réussir, faites des tests!      

- [ ] Animez une lumière Directionnal light pour simuler le cycle du jour et de la nuit à l'extérieur de la maison.
- [ ] Créez une quatrième zone de détection. Dedans il y a un objet animé et lorsque vous entrez dans la zone l'animation de cet objet change.
- [ ] Lorsque votre minuterie se termine, plutôt que de recommencer le jeu tout de suite, affichez un menu avec le score actuel, le meilleur score, un bouton pour quitter le jeu et un bouton pour le redémarrer. (Expliqué partiellement dans le tutoriel de minuterie)


## 17. Exporter le jeu
- [ ] Exporter le jeu à l'aide du bouton build dans File, build settings. Sauvegarder le tout dans un dossier nommé **Build**.
- [ ] Remettez le dossier build de votre jeu dans un dossier à votre nom dans le dossier de remise:

[📁 Remise Travail 2](https://cmontmorency365-my.sharepoint.com/:f:/g/personal/lora_boisvert_cmontmorency_qc_ca/Etxrw-BcDyBIiQBwBSHKIIAB5nD74_l8FJF2CNYIjjQPbw?e=JYEvdE){ .md-button }   
     

## Notes de cours 📚
[:pencil: Prefabs](../unity/prefabs.md){ .md-button }
[:pencil: Coroutine](../code/coroutine.md){ .md-button }
[:pencil: Minuterie](../code/bibliotheque_exemples.md#L166){ .md-button }
[:pencil: Score et pointage](../code/bibliotheque_exemples.md#L11){ .md-button }

