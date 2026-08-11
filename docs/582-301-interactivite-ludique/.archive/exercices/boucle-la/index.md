# Boucle-là !

![](./giphy.gif){.w-100}

À la manière d'une [machine de Rube Goldberg](https://en.wikipedia.org/wiki/Rube_Goldberg_machine), utilisez la physique de Unity pour donner un parcours infini à une sphère.

L'objectif de cet exercice est de : 

- pratiquer le positionnement spatial en Unity
- faire usage de la physique
- créer un événement quand la sphère atteint une zone

## Résultat suggéré

![type:video](./output.webm){data-zoom-image .h-100}

## Consignes

!!! warning "Attention au mode Play"

    Lorsque vous effectuez des modifications en mode ***Play***, sachez qu'elles sont temporaire et qu'elles disparaîtront après le ***Stop***.

### Première partie

- [ ] Dans un projet « 3D Universal », ajoutez des cubes sur une scène
- [ ] Assurez-vous que l'axe z de tous les cubes soit à 0
- [ ] Redimensionnez et déplacez les cubes de sorte à fabriquer un parcours
- [ ] Ajoutez une sphère au début du parcours
- [ ] Pour activer la physique de la sphère, ajoutez-y un Rigidbody
- [ ] Testez votre parcours de sorte à ce que la sphère puisse le terminer

### Seconde partie

- [ ] Ajoutez un prefab ETB ([Enhanced Trigger Box](../../extra/assets/index.md){.back}) à la fin du parcours pour interagir avec la sphère
- [ ] Assignez le tag « Player » à la sphère
- [ ] Ajoutez un GameObject vide et positionnez-le au début du parcours
- [ ] Configurez l'ETB de sorte qu'à chaque fois que la sphère entre dans sa zone, celle-ci se téléporte à la position du GameObject vide.

### Bonus

- [ ] Positionne la lumière directionnelle de sorte à ce qu'on voit le soleil dans la caméra