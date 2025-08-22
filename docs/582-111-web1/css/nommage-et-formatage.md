# Nommage et formatage
À priori, nommer des éléments peut sembler facile. Par exemple, voici trois noms de classes: `.truc`, `.patente` et `.chose`. Pourquoi ces noms?

Théoriquement, nous pouvons donner n'importe quel nom à nos classes sans affecter le fonctionnement de notre code.

Cependant, imaginez si vous deviez embarquer sur un projet. **(Écrit par quelqu'un d'autre ou par vous-même il y a longtemps.)** Vous fait un survole du CSS et vous voyez ces classes `.truc`, `.patente`, `.chose`…


![type:video](https://github.com/user-attachments/assets/cb468664-1c05-4eaa-9f61-3aa71d4e9254)


Bonne chance pour comprendre!

Si à l'opposé ces classes étaient nommées: `.grille`, `.carte` et `.titre` leurs rôles et relation, serait soudainement plus évident. D'où l'importance de donner des noms représentatifs.


## Cohérence

Il existe plusieurs façons de nommer ses classes.

**Par exemple:**

- `.MaClasse { ... }`
- `.maClasse { ... }`
- `.ma-classe { ... }`
- `.ma_classe { ... }`
- Etc.

  
Le tout devient rapidement mélangeant si l'on se met à jongler avec ces différentes possibilités. Il est donc fortement encouragé de s'en tenir à une seule approche.

!!!note

    Au moment d’écrire ces lignes, le modèle le plus répandu est celui en miniature où les espaces sont remplacés par des tirets. ex: .ma-classe { ... }


## Formatage

Un code bien formaté est un code facile à lire et surtout facile à déboguer!

Voici quelques règles de base.

### Accolades
Un espace entre le sélecteur et l'accolade ouvrante devrait toujours être présent et elle devrait être suivi d'un retour de chariot Enter ↵ afin de simplifier la lisibilité du code.

Quant à elle, l'accolade fermante devrait être seule sur la ligne suivant la dernière propriété et sont indentation devrait correspondre à celle de son sélecteur. Une ligne vide devrait ensuite la suivre afin de délimiter proprement chaque bloc.

👌

```
.carte {
  display: block;
  width: 100%;
}
```

<br><br>
🚫

```
.carte{display: block;
  width: 100%;}
```


## Espaces

Lorsque vous écrivez vos propriétés, elles devraient normalement être indentées à l'intérieur de vos accolades

👌

```
sélecteur {
  propriété: valeur;
}
```

<br><br>
🚫

```
sélecteur {
propriété: valeur;
}
```
!!!note

    Actuellement, deux espaces est l’indentation la plus courante en CSS.

L'important est de garder une indentation cohérente d'une ligne à l'autre.

👌

```
.carte {
  display: block;
  width: 100%;
  padding: 20px;
}
```

<br><br>
🚫

```
.carte {
  display: block;
width: 100%;
    padding: 20px;
}
```


## Formatage automatique

### VS Code
Lorsqu'un code est sélectionné, VS Code permet de le formater automatiquement à l'aide d'un raccourcis clavier:

Windows: `Shift` + `Alt` + `F`
<br><br>
Mac: `Shift` + `Options` + `F`

### CodePen
Dans l'entête de chacune des fenêtres **(HTML, CSS, JavaScript)** se trouve un chevron pointant vers le bas ⌄. Cette icône donne accès aux différentes options de la fenêtre. Parmi elles se trouve **"Format"** permettant de formater votre code automatiquement.

