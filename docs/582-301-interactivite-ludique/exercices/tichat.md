[:material-arrow-u-left-top: Cours 6](../cours06.md){.breadcrumb}

# Ti chat

## Assets

* Image de fond : <https://assets.codepen.io/9367036/Yellow.png>
* Image de plateforme : <https://assets.codepen.io/9367036/Platform%2848x48%29.png>
* Spritesheet du chat : <https://assets.codepen.io/9367036/Cat-Sheet.png> (32x32)

## Indices

Pour le fond d'écran, utilisez simplement ce qu'on appelle un `tileSprite`.

```js title="Exemple"
this.bg = this.add.tileSprite(0, 0, config.width, config.height, "bg");
this.bg.setOrigin(0, 0);
```

Pour l'animation de saut, vous devrez utiliser l'événement `animationcomplete`. C'est un peu le défi de l'exercice ;)

```js
this.player.on("animationcomplete", (animation) => {
    if (animation.key === "---") {}
});
```

## Résultat attendu

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Phaser - Exercice - Animation sprite (PUBLIC)" src="https://codepen.io/tim-momo/embed/NWQxKzw/b34c190465bc4beb37eb83aacb64e1b2?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

## Consignes

* [ ] Faites une copie de votre [modèle de base](../phaser/phaser-intro.md)
* [ ] Ajoutez la notion de [physique](../cours04.md#deplacement-par-physique) dans l'objet `config`
* [ ] Charger correctement les 3 assets dans `preload()`
* [ ] Dans `create()`, ajouter l'arrière plan (background)
* [ ] Dans `create()`, ajouter les 4 plateformes. Voir la notion de refreshBody() dans un groupe static (cours5)
* [ ] Dans `create()`, ajouter le joueur (le chat), puis ajuster sa **zone de collision** et sa **taille**
* [ ] Dans `create()`, ajouter 4 animations : 'en attente', 'marche', 'saut' et 'chute'
* [ ] Dans `create()`, ajoutez les controles pour le déplacement : A (gauche), D (droite) et ESPACE (saut)
* [ ] Dans `update()`, appeler 3 fonctions : `this.handleMovement()`, `this.handleAnimations()` et `this.handleDeath()`
* [ ] Dans la scène, ajouter les 3 nouvelles fonctions
* [ ] Dans `handleMovement()`, faire la gestion du déplacement horizontal et celui du saut. N'oubliez la de faire un flipX du personnage pour que ce soit plus joli
* [ ] Dans `handleAnimations()`, déterminez l'animation à jouer en fonction de la situation du personnage.
* [ ] Dans `handleDeath()`, lorsque le personnage tomber dans le trou, il doit réapparaitre à son lieu de départ.
