# Méthode de sélection
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

      


 
