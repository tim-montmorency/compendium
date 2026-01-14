# Créer une scène et intégrer le casque de VR
- [ ] Barre de menu: File, new scene, puis choisir un modèle HDRP pour créer votre nouvelle scène. (Un GameObject Sky and Fog Volume apparaîtra dans votre scène si vous avez le bon modèle.)
- [ ] Sauvegardez votre scène dans le dossier Scene et nommez la. 
- [ ] Créez un objet Empty et nommez le joueur.
- [ ] Dans le joueur, glissez le **prefab** qui se nomme **XR Origin (XR Rig)**, vous pouvez le rechercher dans la fenêtre project.
- [ ] Sur l'objet XR Origin (Xr Rig), **décochez** le **XR Input Modality Manager** dans l'inspecteur.
- [ ] Appuyez ensuite sur **Add Component** et ajoutez un **Input Action Manager**.
- [ ] Sur le **Input Action Manager**, ouvrez l'option **Action Assets**, appuyez sur le **+** et ajoutez **XRI Default Input Actions** avec la cible. 
- [ ] Supprimez la MainCamera qui était dans votre projet au début (Pas celle de votre joueur).
- [ ] Dans le joueur, ajoutez un objet: **XR > Interaction Manager**.
- [ ] Glissez votre joueur dans la fenêtre projet pour créer un prefab de votre joueur et pouvoir l'utiliser dans d'autres scènes.


<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/0YOqssaDuFE?si=XjIjsMCPFwxTa8Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
