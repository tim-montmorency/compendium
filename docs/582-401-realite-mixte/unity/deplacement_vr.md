# Déplacement avec le joystick des manettes
- [ ] Appuyez sur le Locomotion System dans la hiérarchie pour l'ouvrir dans l'inspecteur.
- [ ] Décochez la téléportation si vous ne souhaitez pas l'utiliser.
- [ ] Ajouter la composante Continuous Move Provider (Action based) au Locomotion System.
- [ ] Dans le paramètre System, glissez lui-même donc le locomotion System.
- [ ] Pour utiliser une seule main, décochez la boîte Use Reference de la main non voulue. Je recommande de mettre le snap turn sur une main et le continuous move sur l'autre.
- [ ] Appuyez sur le XR Origin dans la hiérarchie pour l'ouvrir dans l'inspecteur.
- [ ] Ajoutez la composante Character controller à cet objet. Ajustez son collider.
- [ ] Ajoutez aussi la composante Character Controller Driver.
- [ ] Dans les paramètres de cette nouvelles composante, glissez votre Locomotion System sur le paramètre Locomotion Provider.

!!! warning "Attention"

    Attention pour tester le vrai déplacement avec les manettes et l'interaction avec les colliders, vos manettes doivent être sélectionnées en mode clavier souris. Ne pas sélectionner HMD, c'est controller qui doit être en bleu!
    

<iframe width="560" height="315" src="https://www.youtube.com/embed/F6ETKU5e_5M?si=MQMvl-P4ga1D_zLY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
