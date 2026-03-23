# Amorce: le constat du site qui casse

## Activité 1 : Le site qui casse (10 min)

Présentation et observation.



*Objectif:* **Sentir/comprendre** le **problème** avant d'apprendre la **solution**.

## Déroulement

Je vous montre 3 sites dans le navigateur et rétrécit la fenêtre en direct. Ces sites sont flexibles (stylisé avec `flexbox`) mais non 100% *responsives*. Donc sur mobile, on va avoir un problème d'affichage.

### Pixel&Co

#### Sans viewport

- [Sans viewport](../../demos/no-resp01.html) 
- ou tappez ce URL sur votre cellulaire: ­[https://bit.ly/*4lQ5bRS*](https://bit.ly/4lQ5bRS): 4, L minuscule...

#### Avec viewport

```html
<head>
    <meta charset="UTF-8">
    <!-- meta viewport configuré pour que la page soit responsive -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>PIXEL & CO — Studio numérique</title>
</head>
```

- [Avec Viewport](../../demos/no-resp02.html) 
- ou tappez ce URL sur votre cellulaire:  ­[https://bit.ly/*4br7pU7*](https://bit.ly/4br7pU7)


### Observe et réponds (discussion en classe) :

- Qu'est-ce qui se casse en premier ?
- À quel moment le site devient inutilisable/illisbile ?
- Selon toi, pourquoi ça arrive ?

---

> **À retenir :** Le principe du *responsive* ne corrige pas un site cassé: il anticipe les contraintes dès le départ.
