

Nous allons voir différentes méthodes de déplacement en VR dans Unity.   


***  

## Déplacement avec le joystick des manettes
<br>- [ ] Appuyez sur le Locomotion System dans la hiérarchie pour l'ouvrir dans l'inspecteur.
- [ ] Décochez la téléportation si vous ne souhaitez pas l'utiliser.
- [ ] Ajouter la composante Continuous Move Provider (Action based) au Locomotion System.
- [ ] Dans le paramètre System, glissez lui-même donc le locomotion System.
- [ ] Pour utiliser une seule main, décochez la boîte Use Reference de la main non voulue. Je recommande de mettre le snap turn sur une main et le continuous move sur l'autre.
- [ ] Appuyez sur le XR Origin dans la hiérarchie pour l'ouvrir dans l'inspecteur.
- [ ] Ajoutez la composante Character controller à cet objet. Ajustez son collider.
- [ ] Ajoutez aussi la composante Character Controller Driver.
- [ ] Dans les paramètres de cette nouvelles composante, glissez votre Locomotion System sur le paramètre Locomotion Provider.
Le tout en vidéo:   
<youtube src="F6ETKU5e_5M"></youtube>
***  

## Téléportation
<br>- [ ] S'assurer que Teleportation Provider est coché dans le Locomotion System et décochez le continuous move provider au besoin.
- [ ] Dans la hiérarchie, clic-droit, XR, ajoutez Teleportation Anchor ou Teleportation Area. Teleportation anchor: On est mieux de créer les zones de téléportation (ex: pastilles) et ensuite de leur ajouter la composante Teleportation anchor. Teleportation area: Zone dans laquelle on peut se téléporter.
- [ ] Dans les paramètres de ces composantes, glissez votre XR Interaction Manager dans le paramètre Interaction Manager.
- [ ] Custom reticle = un objet qui apparaît pour montrer que la téléportation est possible.
- [ ] Teleportation provider: Glissez Locomotion System pour qu'on puisse se téléporter.
Le tout en vidéo:   
<youtube src="vx27jJdFB-k"></youtube>

    ***  

## Grimper

### Climb Provider
<br>- [ ] Sur le GameObject Locomotion System, ajouter la composante Climb Provider.
- [ ] Glissez le locomotion System dans le paramètre System du Climb Provider.
### Système d'interaction direct pour les mains
<br>- [ ] Créer un objet vide comme enfant d'une des manettes, le nommer DirectInteractor.
- [ ] Ajouter la composante XR Direct Interactor sur cet objet vide.
- [ ] Glissez votre XR Interaction Manager dans le paramètre Interaction Manager de votre composante.
- [ ] Cocher Improve Accuracy With Sphere Collider.
- [ ] Ajouter un Sphere Collider sur l'objet pour représenter votre main.
- [ ] Ajuster le radius du Collider pour qu'il aie la bonne taille.
- [ ] Répéter ces étapes pour l'autre main.
### Créer un mur d'escalade
<br>- [ ] Créer un objet vide nommé Prises.
- [ ] Créez une prise d'escalade dans l'objet Prises. (Assurez-vous que chacune de vos prises est un objet individuel.)
- [ ] Assurez-vous de mettre un sphere collider ou un box collider sur votre prise.
- [ ] Sur le parent des prises, soit l'objet Prises, ajoutez la composante Climb Interactable.
- [ ] Sur le nouveau Rigidbody, décochez use Gravity pour éviter que vos prises tombent au sol. Cochez isKinematic.
- [ ] Dans la composante Climb Interactable, dans le paramètre Interaction Manager, glissez votre XR Interaction Manager.
- [ ] Dans le paramètre Climb Provider, glissez votre Locomotion System.
- [ ] Toujours sur l'objet Prises, ajoutez la composante XR Interactable Affordance State Provider.
- [ ] Maintenant, allez dans l'enfant de Prises, soit une prise. Créez un enfant à cette prise.
- [ ] Ajoutez la composante Material Property Block Helper sur ce nouvel objet.
- [ ] Dans le paramètre Renderer, glissez son parent.
- [ ] Ajoutez aussi la composante Color Material Property Affordance Receiver.
- [ ] Dans le paramètre Affordance Theme Datum, appuyez sur la cible et sélectionnez le seul choix possible.
- [ ] Créez un prefab avec votre prise.
- [ ] Glissez ensuite votre prefab dans la scène pour avoir plus d'une prise.
### Physique du personnage
<br>- [ ] Sur le GameObject XR Origin, ajoutez une composante Character Controller.
- [ ] Ajoutez aussi un Character Controller Driver.
- [ ] Dans son paramètre Locomotion Provider, glissez le Locomotion System.

<youtube src="Fg1I0DrB8K8"></youtube>



***  

## Sauter

Voici le tutoriel qui vous montera comment créer le saut en VR:   
<youtube src="vvfZbVfikJ8"></youtube>

<br>
Voici le code pour sauter (si le code est nommé jump):   
<highlight lang="csharp">
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;

public class jump : MonoBehaviour
{
    [SerializeField] private InputActionProperty jumpButton;
    [SerializeField] private float jumpHeight = 3f;
    [SerializeField] private CharacterController joueur;
    [SerializeField] private LayerMask groundLayer;

    private float gravity = Physics.gravity.y;
    private Vector3 mouvement;

    private void Update()
    {
        bool _isGrounded = isGrounded(); 

        if(jumpButton.action.WasPressedThisFrame()&& _isGrounded)
        {
            Jump();
        }

        mouvement.y += gravity * Time.deltaTime;

        joueur.Move(mouvement * Time.deltaTime);
    }


    private void Jump()
    {
        mouvement.y = Mathf.Sqrt(jumpHeight * -3.0f * gravity); 
    }

    private bool isGrounded()
    {
        return Physics.CheckSphere(transform.position, 0.2f, groundLayer); 
    }
}
    

</highlight>


***  

## Ascenseur

Voici le tutoriel qui vous aidera à créer une plateforme en mouvement:   

<youtube src="eJCu7YEFBu4"></youtube>