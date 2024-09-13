# Audio
La balise `<audio>` permet d'intégrer un contenu sonore dans une page.

## Src & Source

Afficher un lecteur audio peut se faire en une seule ligne, comme suit:

```
<audio src="audio.mp3"></audio>
```
Telle une image 🖼️

Il est aussi possible, de l’afficher avec une ou des balises enfants de type source, de la sorte:

```
<audio>
    <source src="audio.mp3">
    <source src="audio.webm">
    </audio>
```
!!! info
    
    Si vous ne désirez pas avoir à fournir plusieurs sources, les mp3 sont supportés sur tous les navigateurs modernes. caniuse.com/mp3

## Controls

Si présent, cet attribut indique au navigateur d’afficher les contrôles de base du lecteur audio.

play/pause
volume
etc.
À moins de définir ses propres boutons, il est préférable dans la majorité des cas d'ajouter cet attribut.

```
<audio src="audio.mp3" controls></audio>
```

!!! warning

    Sans cet attribut, le lecteur audio sera invisible.

## Loop

Indique au navigateur de jouer l'udio en boucle 🔁

```
<audio src="audio.mp3" loop></audio>
```

## Autoplay

Indique au navigateur de démarrer l'audio si possible dès le chargement de la page.

```
<audio src="audio.mp3" autoplay></audio>
```

Les navigateurs bloquent presque tous cette option à moins qu'ils aient détecté un engagement de la part de l'utilisateur. Par exemple: avoir déjà déclenché manuellement un son, etc.

audio
 
audio
