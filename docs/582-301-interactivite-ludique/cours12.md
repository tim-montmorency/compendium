---
tags:
  - Cours 12
  - Mardi 19 novembre
---

[STOP]

# Cours 12

## Transition de scène

play.once('pointerdown', () => {

            const fx = this.cameras.main.postFX.addWipe();

            this.scene.transition({
                target: 'MainGame',
                duration: 2000,
                moveBelow: true,
                onUpdate: (progress) => {

                    fx.progress = progress;

                }
            });
        });

## Particules

### Émetteur de particules

```js
// this.add.particles(x, y, texture, config);
```

* `x` (nombre) : Coordonnée x de l'émetteur.
* `y` (nombre) : Coordonnée y de l'émetteur.
* `texture` (chaîne) : Clé de la texture utilisée pour les particules.
* `config` (objet) : Configuration de l'émetteur, incluant des propriétés telles que :
  * `frame` : Cadre(s) de la texture à utiliser.
  * `speed` : Vitesse des particules.
  * `scale` : Échelle des particules.
  * `alpha` : Opacité des particules.
  * `lifespan` : Durée de vie des particules en millisecondes.
  * `blendMode` : Mode de fusion utilisé lors du rendu des particules.

```js
preload() {
  this.load.image('particle', 'chemin/vers/particle.png');
}
create() {
  const particles = this.add.particles('particle');
  const emitter = particles.createEmitter({
    x: 400,
    y: 300,
    speed: 100,
    lifespan: 2000,
    blendMode: 'ADD',
    scale: { start: 1, end: 0 },
    on: false
  });
  this.input.on('pointerdown', (pointer) => {
    emitter.setPosition(pointer.x, pointer.y);
    emitter.explode(10);
  });
}
```

## Sauvegarde et chargement

Sauvegardes et chargement de partie
—IndexedDB
— JSON
— LocalStorage

## Snap shot

<https://labs.phaser.io/index.html?dir=snapshot/&q=>
