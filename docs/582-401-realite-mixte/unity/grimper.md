
## Procédure écrite
### Climb Provider
- [ ] Sur le GameObject Locomotion System, ajouter la composante Climb Provider.
- [ ] Glissez le locomotion System dans le paramètre System du Climb Provider.

### Système d'interaction direct pour les mains
- [ ] Créer un objet vide comme enfant d'une des manettes, le nommer DirectInteractor.
- [ ] Ajouter la composante XR Direct Interactor sur cet objet vide.
- [ ] Glissez votre XR Interaction Manager dans le paramètre Interaction Manager de votre composante.
- [ ] Cocher Improve Accuracy With Sphere Collider.
- [ ] Ajouter un Sphere Collider sur l'objet pour représenter votre main.
- [ ] Ajuster le radius du Collider pour qu'il aie la bonne taille.
- [ ] Répéter ces étapes pour l'autre main.

### Créer un mur d'escalade
- [ ] Créer un objet vide nommé Prises.
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
- [ ] Sur le GameObject XR Origin, ajoutez une composante Character Controller.
- [ ] Ajoutez aussi un Character Controller Driver.
- [ ] Dans son paramètre Locomotion Provider, glissez le Locomotion System.


## Tutoriel

<iframe width="560" height="315" src="https://www.youtube.com/embed/Fg1I0DrB8K8?si=eWkfWPBNIpK5Hd1n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



      
