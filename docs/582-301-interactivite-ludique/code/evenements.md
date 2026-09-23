# Événements

Un événement déclenche une action **sans code**, directement dans l'Inspector. Certains objets en ont par défaut (ex. un `Button` a `On Click`).

## Anatomie d'un événement

<img src="../images/evenement.jpg">

- **Runtime Only** : quand l'événement est actif. Laisse **Runtime Only** (seulement en mode test).
- **le `+`** : ajoute une action à déclencher.

En cliquant sur `+` :

<img src="../images/evenement2.jpg">

- **Object** : glisse ici le GameObject concerné (lui-même ou un autre).
- **Function** : selon l'objet glissé, une liste de fonctions possibles apparaît.

Quelques exemples de fonctions disponibles :

- **GameObject → `SetActive`** : active/désactive l'objet.
- **Button → `enabled`** : active/désactive le clic du bouton (il reste visible).
- **Animator → `Play(string)`** : joue une animation par son nom.

## Appeler une fonction de ton script

Pour déclencher plusieurs actions d'un coup, le plus efficace est de créer une fonction dans un script et de l'assigner à l'événement :

1. Glisse le GameObject qui a ton script dans **Object**.
2. Dans **Function**, choisis ton script, puis ta fonction.

<img src="../images/evenement3.jpg">

Ici, l'objet **Square** est assigné, et la fonction **EvenementClic** du script **Script** est appelée au clic. On peut aussi lui passer un paramètre (ex. pour savoir quel objet a été touché).

!!! warning "La fonction doit être `public`"
    Une fonction `private` n'apparaît pas dans la liste **Function**.
