## Procédure écrite


### Créer un mur d'escalade
- [ ] Créer un objet vide nommé Prises.
- [ ] Créez une prise d'escalade dans l'objet Prises. (Assurez-vous que chacune de vos prises est un objet individuel.)
- [ ] Assurez-vous de mettre un sphere collider ou un box collider sur votre prise.
- [ ] Sur le parent des prises, soit l'objet Prises, ajoutez la composante Climb Interactable.
- [ ] Sur le nouveau Rigidbody, décochez use Gravity pour éviter que vos prises tombent au sol. Cochez isKinematic.
- [ ] Dans la composante Climb Interactable, dans le paramètre Interaction Manager, glissez votre XR Interaction Manager.
- [ ] Dans le paramètre Climb Provider, glissez l'objet Climb enfant de votre Locomotion System.
- [ ] Toujours sur l'objet Prises, ajoutez la composante XR Interactable Affordance State Provider.
- [ ] Maintenant, allez dans l'enfant de Prises, soit une prise. Créez un enfant à cette prise.
- [ ] Ajoutez la composante Material Property Block Helper sur ce nouvel objet.
- [ ] Dans le paramètre Renderer, glissez son parent.
- [ ] Ajoutez aussi la composante Color Material Property Affordance Receiver.
- [ ] Dans le paramètre Affordance Theme Datum, appuyez sur la cible et sélectionnez le seul choix possible.
- [ ] Créez un prefab avec votre prise.
- [ ] Glissez ensuite votre prefab dans la scène pour avoir plus d'une prise.


!!! warning "Attention"

    Pour la vidéo, écoutez seulement les sections créer un mur d'escalade et démonstration. Le reste a déjà été fait pour vous. 

## Tutoriel

<iframe width="560" height="315" src="https://www.youtube.com/embed/Fg1I0DrB8K8?si=eWkfWPBNIpK5Hd1n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



      
