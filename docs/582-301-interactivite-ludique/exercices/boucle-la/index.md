# Boucle-là !

*[CES]: Collision Event System

![](./giphy.gif){.w-100}

À la manière d'une [machine de Rube Goldberg](https://en.wikipedia.org/wiki/Rube_Goldberg_machine), utilisez la physique de Unity pour donner un parcours infini à une sphère.

L'objectif de cet exercice est de : 

- créer un événement quand les sphères atteignent une zone

## Consignes

![type:video](./loop.webm){data-zoom-image .h-100}

- [ ] Ajoutez un prefab CES à la fin du parcours des sphères
- [ ] Configurez le CES pour qu'il repositionne les sphères à une coordonnée fixe et qu'il les redimensionne.

## Finale

![type:video](./loop-dark.webm){data-zoom-image .h-100}

- [ ] Ajouter au CES une autre _Action_ de type _Transform_, mais cette fois-ci, elle affectera la rotation du _Directional Light_ pour descendre le soleil à chaque collision de sphère.
