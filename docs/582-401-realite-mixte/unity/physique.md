Dans Unity, il existe un système de physique qui peut nous aider à controller nos objets.   



## Portes - Hinge joint

Dans ce tutoriel, nous allons explorer la mécanique d'une porte avec un **Hinge Joint** pour permettre à la porte de s'ouvrir et se fermer.

<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/o4wmlcrBF74?si=Q35INM4N8A0oL5-k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Tutoriel écrit

Voici les étapes à suivre :

### Étape 1 : Créer les objets nécessaires
- [ ] **Créer l'objet vide pour la porte** : Commencez par créer un objet vide qui contiendra votre porte.
- [ ] **Ajouter un cube pour la porte** : Ajoutez un cube, qui servira de porte.
- [ ] **Créer un cadre** : Placez également un cadre autour de la porte. Vous pouvez utiliser n'importe quel objet comme cadre, mais il est important qu'il possède des **Box Colliders** pour la détection de collision.

### Étape 2 : Paramétrer le cadre
- [ ] **Ajouter un Rigidbody au cadre** : Le cadre doit avoir un Rigidbody avec l'option **Is Kinematic** activée. Décocher **Use gravity** pour qu'il ne soit pas affecté par la gravité. Cela permettra à la porte de rester fixe pendant que le reste du mécanisme bouge.

### Étape 3 : Configurer la porte
- [ ] **Ajouter un Rigidbody à la porte** : La porte aura également un Rigidbody, mais cette fois-ci, la gravité doit être activée pour qu'elle puisse se déplacer.
- [ ] **Ajouter un Hinge Joint à la porte** : Ce joint permettra à la porte de s'ouvrir et se fermer comme une porte classique. Glissez le cadre de la porte dans la section **Connected body** du hinge joint.

### Étape 4 : Configurer l'axe de rotation
- [ ] **Aligner l'axe de la porte** : Pour que la porte s'ouvre correctement, vous devez ajuster l'axe de rotation. 
   - [ ] Cliquez sur le bouton **Edit angular limits** du Hinge Joint pour afficher la flèche de rotation. Activez aussi les **gizmos** si ce n'est pas fait.
   - [ ] Changez l'axe de rotation pour qu'il corresponde à celui du cadre, en ajustant les axes **X**, **Y**, ou **Z** selon la direction que vous souhaitez pour l'ouverture de la porte. Assurez-vous aussi de modifier la position du **anchor** pour que la flèche soit au point de rotation de la porte. 

### Étape 5 : Définir les limites de mouvement
- [ ] **Ajouter des limites de rotation** : Vous pouvez définir jusqu'où la porte peut s'ouvrir en activant les options **Use Limits** dans le Hinge Joint.
   - [ ] Ajustez les limites pour restreindre l'ouverture de la porte avec les poignées oranges. Cela empêchera la porte de tourner librement et assurera qu'elle ne dépasse pas la zone souhaitée.

### Étape 6 : Tester la porte
- [ ] **Testez l'ouverture de la porte** : Appuyez sur Play pour voir si la porte fonctionne comme prévu.
   - [ ] La porte devrait pouvoir tourner autour de l'axe que vous avez configuré et se fermer ou s'ouvrir en fonction de l'interaction.

### Étape 7 : Ajouter l’interaction avec le joueur
- [ ] **Configurer l’interaction avec le joueur** : Pour que la porte puisse être poussée par le joueur, vous devez ajouter un système d'interaction.
   - [ ] Créez des **Direct Interactions** pour que le joueur puisse pousser la porte avec ses mains. 
   - [ ] Ajoutez un Rigidbody cinématique à la main du joueur et désactivez l'option **Use Gravity** pour éviter que les mains soient affectées par la gravité.

### Étape 8 : Finaliser et tester avec la manette
- [ ] **Testez avec la manette** : Une fois l’interaction configurée, utilisez la manette pour tester l’ouverture de la porte.
   - [ ] La porte devrait s’ouvrir lorsque vous interagissez avec elle. Vous pouvez ajuster la limite de rotation si nécessaire pour modifier l’angle d’ouverture.




## Pont - Hinge joint

Dans ce tutoriel, nous explorerons le fonctionnement du Hinge joint pour créer un pont avec des planches indépendantes reliées entre elles.   

<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/_j9J9VltPj4?si=n2c0SWbqyPC7kvHJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
