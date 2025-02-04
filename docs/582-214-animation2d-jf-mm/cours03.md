# Cours 3     

## Les calques (la suite)

[:material-play-circle: Les types de calque](https://cmontmorency365-my.sharepoint.com/:v:/g/personal/mariem_ouellet_cmontmorency_qc_ca/ET97Qp5f26pOgspYh56l23UBtVWGLQBvrfEfSJQ_D0rMwg)

### Solides

Les solides sont de simples fonds de couleur. 

La plupart du temps, ils sont utiles pour créer un fond de couleur à une scène ou simplement pour faire un _fade out_ ou un _fade in_.

!!! info "Le saviez-vous ?"

    Vous pouvez facilement redimentionner une image pour qu'elle s'ajuste à la taille de votre composition avec l'option `Calque > Géométrie > Ajuster à la composition`.

### Formes 

Les formes plus complexes demande de connaitre certains raccourcis.

Par exemple, l'étoile peut être modifiée avant de relacher le bouton de la souris lorsqu'on la créé. Essayez les flèches pour constater les propriétées modifiées.

Il est possible également de fabriquer toutes sortes de forme avec l'outil Plume :fontawesome-solid-pen-nib:. Assurez vous simplement de bien refermer vos formes vectorielles pour les utiliser proprement.

### Texte

[Création et modification des calques de texte](https://helpx.adobe.com/ca_fr/after-effects/using/creating-editing-text-layers.html)

!!! info "Le saviez-vous 2 ?"

    Vous pouvez facilement replacer l'ancre d'un objet à son centre en tenant enfoncé ctrl puis double clic sur l'icone de Point d'ancrage.

## Morphage vectoriel

![](./assets/images/ae-morph.png)

La technique d'animation de morphage vectoriel est très simple. 

1. D'abord on cré 2 formes sur 2 calques différents.
1. Ensuite, on sélectionne le tracé (path) de chaque forme et on ajoute pour chacun, un _keyframe_.
1. On sélectionne le _keyframe_ de la forme de destination et on fait un **copier**.
1. Enfin, on sélectionne la forme de départ, on avance le **repère d'instant courant** de quelques _frames_ et on fait un **coller**.

Datsit Datsow

## Animation sur une trajectoire

![](./assets/images/ae-anim-path.png)

L'orientation sur une trajectoire se fait en créant une trajectoire à l'aide de la plume :fontawesome-solid-pen-nib:.

Tout comme le morphage vectoriel, une fois la trajectoire dessinée, on peut copier son tracé (path) et le coller sur l'attribut **Position** de la former ou de l'image.

### Orientation automatique

![](./assets/images/ae-orient.png)

Lorsqu'un calque suit déjà une trajectoire, on peut ajuster sa rotation en fonction du tracé.

`Calque > Géométrie > Orientation automatique`

Si la rotation n'est pas tout à fait correcte, on peut corriger la rotation initiale de l'objet animé tout simplement.

## L'outil Marionnette

L'outil Marionnette permet d'ajouter des points de contrôle (appelés "épingles" :octicons-pin-16:) sur une image pour créer des déformations et des animations fluides. C'est particulièrement utile pour donner vie à des illustrations vectorielles en simulant des mouvements organiques.

[:material-play-circle: L'outil Marionnette  - Les notions de base](https://cmontmorency365-my.sharepoint.com/:v:/g/personal/mariem_ouellet_cmontmorency_qc_ca/EWhxb1HKHIJCs0qwlgzWmkUBpul9N1b1ChknjZ4r81Z_6g)

[:material-play-circle: L'outil Marionnette  - Les options](https://cmontmorency365-my.sharepoint.com/:v:/g/personal/mariem_ouellet_cmontmorency_qc_ca/EcNnPZC9UNhAjUbYGNQvhrsBhd7adgupio04CS6sO3L6Aw)

[:material-play-circle: L'outil Marionnette  - Bonne pratique](https://cmontmorency365-my.sharepoint.com/:v:/g/personal/mariem_ouellet_cmontmorency_qc_ca/EUAv17Pgv4BNkihPBgcox10BPdKy43CBge9f29luTku0eg)

[:material-play-circle: L'outil Marionnette - Enregistrement interactif](https://cmontmorency365-my.sharepoint.com/:v:/g/personal/mariem_ouellet_cmontmorency_qc_ca/Efn8VA_uCv9Fj2ltLMI6ZK0BbrAmRgpt7a2ql4g1b84oKg)

### Positionnement des coins de marionnette

![](./assets/images/ae-puppet-positionnement.png){ data-zoom-image }

Ajoute des points de contrôle fixes permettant des déformations autour d’eux, comme pour placer des articulations sur un personnage (ex. genoux, coudes).

### Emploi des coins de marionnette

![](./assets/images/ae-puppet-emploi.png){ data-zoom-image }

Permet des sélectionner des zones plus rigides entre les points de controles.

### Courbure des coins de marionnette

Ajoute une flexion avancée pour des mouvements plus fluides, pour animer un drapeau qui ondule par exemple.

### Coin de marionnette avancé

![](./assets/images/ae-puppet-avance.png){ data-zoom-image }

Gère la **position**, la **rotation** et la **mise à l’échelle**. Par exemple, c'est utile si on a besoin de plus de contrôle que simplement le positionement.

### Coin de recouvrement de marionnette

![](./assets/images/ae-puppet-recouvrement.png){ data-zoom-image }

Définit l’ordre des couches dans l’animation, par exemple pour s’assurer qu’un bras passe devant ou derrière un corps.

## Exercices

[🛠️ Exercice création de forme complexe avec l'outil plume ](https://www.adobe.com/ca_fr/learn/after-effects/web/draw-complex-shapes?learnIn=1){ .md-button }  

<div class="grid grid-1-2" markdown>
  ![](./exercices_ae/transmutation/transmutation-preview.png)

  <small>Exercice - After Effects</small><br>
  **[Transmutation](./exercices_ae/transmutation/transmutation.md){.stretched-link .back}**
</div>

<div class="grid grid-1-2" markdown>
  ![](./exercices_ae/gaia/gaia-preview.png)

  <small>Exercice - After Effects</small><br>
  **[Gaïa](./exercices_ae/gaia/gaia.md){.stretched-link .back}**
</div>