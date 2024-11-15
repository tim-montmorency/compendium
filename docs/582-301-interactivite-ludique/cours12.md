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

## Sauvegarde et chargement

Sauvegardes et chargement de partie
—IndexedDB
— JSON
— LocalStorage

## Snap shot

<https://labs.phaser.io/index.html?dir=snapshot/&q=>
