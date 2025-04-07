# Collaboration avec GitHub

Il est possible d'utiliser GitHub pour travailler à plusieurs sur le même projet Unity. Ici nous verrons comment configurer votre projet.   


!!! warning "Attention"

    On parle ici de projet HDRP, cependant si vous souhaitez faire un build sur votre casque et non sur l'ordinateur à la fin de votre projet, vous devriez travailler en 3D built-in render pipeline. Si vous avez des objets MAYA, les rendus seront beaucoup mieux en HDRP, donc c'est ok de travailler sur l'ordinateur.  
      

## Étapes résumées

### Coéquipier 1
- [ ] Créer un repository public par équipe dans GitHub. Inclure le Gitignore Unity dedans.
- [ ] Cloner votre repo dans GitHub desktop pour travailler dessus.
- [ ] Créer un projet unity (High Definition 3D (HDRP) pour travail VR, version 2022.3.45) dans le dossier de votre repo GitHub.
- [ ] Déplacer le .gitignore dans le dossier de projet Unity.
- [ ] Faire un commit dans GitHub desktop pour inclure notre projet Unity.
- [ ] Ensuite, push to origin pour envoyer notre projet en ligne.
- [ ] Dans GitHub en ligne, allez ajouter votre coéquipier dans Collaborators.

### Coéquipier 2
- [ ] Accepter l'invitation de collaboration.
- [ ] Cloner le projet dans votre GitHub desktop.
- [ ] Dans Unity Hub, appuyez sur Open, add project from disk et trouvez le dossier de projet Unity dans le dossier de votre repo GitHub.
- [ ] Maintenant, vous pouvez ouvrir le projet Unity commun. Assurez-vous d'être dans la même version Unity que votre coéquipier!

### Méthode de travail
Une fois que votre projet est prêt, vous pouvez le modifier en même temps. Avant de faire un commit, appuyez toujours sur Fetch Origin, si Pull apparaît, vous devez faire un Pull. Ensuite, vous pourrez faire votre commit, puis le push.   

!!! warning "Attention"

    L'ordre est toujours Pull, puis Push!!


## Exercice conflits

- [ ] Coéquipiers 1 et 2 : faire pull de la même version du projet
- [ ] Coéquipiers 1 et 2 : ouvrir le projet et créer une nouvelle scène `SceneIntro`
- [ ] Coéquipier 1 : Ajouter un Cube à la scène et l'enregistrer.
- [ ] Coéquipier 2 : Ajouter une Sphere à la scène et l'enregistrer.
- [ ] Coéquipier 1 : Faire un commit avec tous les changements et faire push.
- [ ] Coéquipier 2 : Faire un commit avec tous les changements.
- [ ] Coéquipier 2 : Essayez de faire un push.

Quand on a un **conflit** dans un fichier, il faut choisir comment le résoudre : usiliser la version du commit antérieur, la version du nouveau commit, ou les combiner ligne par ligne.


## Tutoriel
<iframe width="560" height="315" src="https://www.youtube.com/embed/vxFN77MpROE?si=OpBN9erf2apGl-Ry" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
