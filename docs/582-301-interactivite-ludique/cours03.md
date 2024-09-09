---
tags:
  - Cours 3
  - Mardi 10 septembre
---

[STOP]

# Scènes & HUD

Retour sur les exercices, Monstre, Damier,

Exercice tilemap important
Tilemap

<https://labs.phaser.io/index.html?dir=tilemap/&q=>

Gestion des scènes

Contrôles

```js
create(){
  this.cursors = this.input.keyboard.createCursorKeys();
}

update(){
  if (this.cursors.left.isDown) {
    // ...
  }
}
```

Introduction à l'affichage tête haute (HUD)
