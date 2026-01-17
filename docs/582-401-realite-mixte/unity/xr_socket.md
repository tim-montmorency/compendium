# XR socket


Dans Unity, les sockets sont des endroits spécifiques sur lesquels on peut déposer un objet. Vous apprendrez comment les configurer dans les tutoriels suivant:   

- [ ] Assurez-vous d'avoir un objet qu'on peut prendre et bouger et un objet sur lequel on viendra déposer celui-ci. Pour le socle, on doit avoir un collider et isTrigger doit être coché.
- [ ] Sur le socle, on ajoute la composante XR Socket Interactor.
- [ ] Dans le paramètre Interaction Manager on glisse notre XR Interaction Manager.
- [ ] Créer un objet vide comme enfant de votre socle. Positionnez celui-ci à l'endroit sur lequel vous allez déposer l'autre objet.
- [ ] Dans le XR Socket Interactor, glissez cet objet dans Attach transform.
- [ ] Testez, puis voyez si L'objet se positionne correctement. Si non, jouez avec la rotation et la position de l'enfant du socle. Prennez en note les nouvelles coordonnées et réécrivez les une fois sorti du mode de jeu.
- [ ] Pour l'instant, votre socle n'affiche pas la position prévue de l'objet lorsqu'il sera relaché. Pour modifier cela, vous pouvez assigner un nouveau matériel au paramètre Hover Mesh Material.

### Pour assigner un objet spécifique à un socle:
- [ ] Dans votre objet, créez un Interaction Layer Mask pour celui-ci. Assignez-le ensuite dans le paramètre Interaction Layer de la composante XR Grab Interactable.
- [ ] Ensuite, sélectionnez votre socle, puis dans Interaction Layer Mask, sélectionnez uniquement le layer que vous venez de créer.
- [ ] Dans tous vos autres objets sélectionnables, assurez-vous que le nouveau layer mask n'est pas coché, sinon ils pourront interagir avec votre socle.

<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/VCxaXsLxTs0?si=5_tT8E2khmVc8E0G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
