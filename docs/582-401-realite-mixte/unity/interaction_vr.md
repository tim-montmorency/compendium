Nous allons voir comment prendre et lancer des objets dans Unity.   

      

## XR grab
En résumé, voici les étapes pour créer un objet interactif:   

- [ ] Créer un objet, soit avec les objets 3D de Unity ou en important votre modèle.
- [ ] Ajoutez un box collider ou un sphere collider sur votre objet.
- [ ] Ajouter la composante XR Grab Interactable sur votre objet.
- [ ] S'assurer que Use Gravity est coché sur le Rigidbody de votre objet.
- [ ] Glissez le Interaction Manager de votre joueur dans la boîte Interaction Manager de la composante XR Grab Interactable.

Sur la composante XR Grab Interactable, il y a en bas complètement une catégorie événement. Lorsque vous l'ouvrez vous pouvez déclencher des éléments précis lorsque votre objet atteint certains stages. Par exemple, si vous prenez votre objet et que vous appuyez sur la gachette, vous pourriez déclencher quelque chose.   

<iframe width="560" height="315" src="https://www.youtube.com/embed/KljYJ8an1dU?si=LmdERAx5lstY23Ow" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      

## Méthode de sélection
En vr, nous verrons deux méthodes de sélection, le rayon et l'interaction directe. Le rayon nous permet de sélectionner un objet en pointant notre manette vers celui-ci. L'interaction directe pour sa part sélectionne l'objet lorsqu'on le touche ou qu'on entre dans sa zone de collision. Par défaut, vous avez un XR Ray Interactor composante sur vos deux manettes, vous pourrez le désactiver si vous ne voulez pas utiliser cette méthode. Vous pouvez aussi utiliser un mélange des deux méthodes. Pour l'interaction directe, vous devrez vous créer un objet vide comme enfant de votre controlleur et lui donner une composante XR Direct Interactor et un sphere Collider.  

Pour utilisez les rayons, il n'y a rien à faire, ils viennent par défaut.   

### Utiliser la sélection directe:
- [ ] Créez un objet vide sur un de vos deux controlleurs et nommez-le DirectInteractor.
- [ ] Ajouter la composante XR Direct Interactor.
- [ ] Ajouter un sphere collider, choisissez sa taille selon la taille que vous voulez pour les mains. (ex: 0.2) Cochez IsTrigger pour que vos mains puissent toucher les objets.
- [ ] Sur les controlleurs, désactivez les composantes Ray Interactor, Line renderer et XR Interactor Line visual si vous ne voulez pas utiliser les rayons.
      
### Pour utiliser les rayons pour la téléportation et l'interacteur direct pour les objets:
- [ ] Dans XR Ray Interactor, modifiez le Interaction Layer Mask, dans cette option, cliquez sur Add Layer. Créez un layer avec le nom de votre choix (exemple: Teleport). Choisissez uniquement ce layer comme layer mask de votre interacteur.
- [ ] Sur les plateformes ou les zones de téléportation dans la composante Teleport Anchor ou Area, choisissez votre nouveau Layer comme Interaction Layer Mask.
- [ ] Dans DirectInteractor, vous devez aller décocher votre nouveau layer dans le paramètre Interaction Layer Mask de la composante XR Direct Interactor.
- [ ] Pour permettre au rayon de disparaître quand on est assez proche de l'objet: Ajouter un XR Interaction Group sur le controlleur parent. Cocher la case qui dit que Direct Interactor peut override le rayon.
      
<iframe width="560" height="315" src="https://www.youtube.com/embed/O4XpqZM7R0U?si=Vy5tzjMfTwjyuSus" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      

## Movement type
 Dans la composante XR Grab Interactable, il y a le paramètre Movement type qu'on peut modifier. Je vous invite à tester les 3 types de mouvements pour voir les différences. 
 
**Kinematic:** Quand on tient un objet kinematic, il peut passer à travers les autres objets sans Rigidbody. Si on pousse un objet avec celui-ci, la physique sera prise en compte. 

**Instantaneous:** C'est le mouvement le plus stable. Lorsqu'on tient un objet, il ne bouge pas. Par contre, lorsqu'il touche un autre objet, il ne prends pas les règles de la physique en compte.   

**Velocity tracking:** Cet objet pourra entrer en collision avec n'importe quel objet qu'il touche. Ce type de mouvement prend en compte la vitesse de votre main. Ainsi, quand on lache l'objet, on lui induit un mouvement plus réaliste.   

      

## Choisir le point d'attache de l'objet
Dans certaines situations, vous voudrez attacher votre objet à un point précis de votre main. Par exemple, si vous tenez une raquette, vous voulez la tenir par la poignée. Voici comment choisir votre point d'attache:   

- [ ] Créez un enfant vide (empty) sur votre objet, vous pouvez le nommer attache.
- [ ] Modifiez la position de cet objet pour qu'il soit au point d'attache de votre objet.
- [ ] Sélectionnez ensuite votre objet et trouvez la composante XR Grab Interactable.
- [ ] Dans le paramètre Attach transform, glissez l'enfant que vous venez de créer.
- [ ] Faites ensuite Play et regardez le résultat.
- [ ] Il est possible que vous deviez ajuster la rotation de votre enfant pour que votre objet soit tenu dans le bon sens. Vous pouvez aussi donner un léger angle à votre objet puisqu'on tient rarement un objet très droit.

      

## Empêcher l'objet de bouger avec le Joystick
Vous avez peut-être remarqué, par défaut, on peut bouger l'objet qu'on tient dans nos mains avec le joystick. Parfois cela peut être intéressant, mais à d'autres moments ce n'est pas ce qu'on souhaite. Pour empêcher cela, on doit aller sur la composante XR Ray Interactor de nos controlleurs et désactiver le paramètre Anchor Control. 


      

## Cacher les mains lorsqu'un objet est sélectionné
Peu importe la méthode de sélection (XR Ray Interactor ou XR Direct Interactor), vous avez un bouton que vous pouvez cocher sur leur composante qui est: Hide Controller On Select. (Dans la section Selection Configuration pour le Ray Interactor) Celui-ci permet de cacher vos mains lorsque vous prenez un objet. Cela peut être pratique si vos mains n'ont pas l'air de bien agripper les objets.    
      

## Déclencher un événement lorsqu'un objet est sélectionné

Peu importe la méthode de sélection (XR Ray Interactor ou XR Direct Interactor), vous avez plusieurs événements en bas de la composante. Par exemple, les audio events vous permettent de jouer un son selon si votre manette touche un objet. Vous pouvez aussi utiliser les haptic events pour faire vibrer les controlleur. Finalement, les interactor events permettent de partir des scripts.   

      

## Empêcher un objet lancé de passer à travers le sol
Si votre objet passe parfois au travers de certains ojbets alors qu'il ne devrait pas, voici comment régler la situation:  

- [ ] Trouvez votre objet dans la hiérarchie et dans l'inspecteur, trouvez sa composante Rigidbody.
- [ ] Changez le Collision detection Type pour Continuous dynamic. Ainsi, le rigidbody fera toujours effet.
- [ ] Assurez-vous que isKinematic n'est pas coché sur votre Rigidbody.

      

## Réduire le tremblement de l'objet dans votre main
Parfois, l'objet dans votre main peut avoir l'air de trembler beaucoup, car il tente de suivre vos mouvements. Voici comment ajuster cela: 

- [ ] Sur votre objet, trouvez la composante XR Grab Interactable.
- [ ] Dans votre composante, trouvez le paramètre Smooth position et cochez-le.
- [ ] Ajustez ensuite les sliders de Smooth position et tighten position pour diminuer le tremblement.
- [ ] Faites le même procédé pour le paramètre Smooth Rotation.

      

## XR socket


Dans Unity, les sockets sont des endroits spécifiques sur lesquels on peut déposer un objet. Vous apprendrez comment les configurer dans les tutoriels suivant:   

- [ ] Assurez-vous d'avoir un objet qu'on peut prendre et bouger et un objet sur lequel on viendra déposer celui-ci. Pour le socle, on doit avoir un collider et isTrigger doit être coché.
- [ ] Sur le socle, on ajoute la composante XR Socket Interactor.
- [ ] Dans le paramètre Interaction Manager on glisse notre XR Interaction Manager.
- [ ] Créer un objet vide comme enfant de votre socle. Positionnez celui-ci à l'endroit sur lequel vous allez déposer l'autre objet.
- [ ] Dans le XR SOxket Interactor, glissez cet objet dans Attach transform.
- [ ] Testez, puis voyez si L'objet se positionne correctement. Si non, jouez avec la rotation et la position de l'enfant du socle. Prennez en note les nouvelles coordonnées et réécrivez les une fois sorti du mode de jeu.
- [ ] Pour l'instant, le matériel de votre socle est rose. Pour le modifier, au-dessus de Hover Mesh Material vous pouvez cocher ou décocher si vous ne voulez pas voir le futur placement de l'objet. Vous pouvez aussi assigner un nouveau matériel qui sera celui de votre position proposée.

### Pour assigner un objet spécifique à un socle:
- [ ] Dans votre objet, créez un Interaction Layer Mask pour celui-ci. Assignez-le ensuite dans le paramètre Interaction Layer de la composante XR Grab Interactable.
- [ ] Ensuite, sélectionnez votre socle, puis dans Interaction Layer Mask, sélectionnez uniquement le layer que vous venez de créer.
- [ ] Dans tous vos autres objets sélectionnables, assurez-vous que le nouveau layer mask n'est pas coché, sinon ils pourront interagir avec votre socle.

<iframe width="560" height="315" src="https://www.youtube.com/embed/VCxaXsLxTs0?si=5_tT8E2khmVc8E0G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
