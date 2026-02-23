# Interface de tableau de bord (Dashboard UI)


- [< retour au *cours 6*](../../cours06.md)

---

<div class="class-content-link">
  <img src="../../assets/IA-interdite.png">
  <span class="sidetext">Utilisation de l'IA générative ou d'agent de codage IA interdits à cette phase dans la session: vous devez solidifier les bases d'abord !</span>
</div>

## Concept

Reproduire une interface de type dashboard avec des cartes de statistiques, une section principale et une barre latérale. Le défi est que chaque composant a une direction flex différente, et les conteneurs s'imbriquent sur 3 niveaux.

## Aperçu de l'interface à reproduire



## Fichier de départ

<span class="important-label">IMPORTANT</span> : Connectez-vous à CodePen d'abord et ensuitefaites un *FORK* du Pen de départ pour l'enregistrer dans votre compte, archiver l'exercice et pouvoir avoir un lien unique vers votre exercice complété pour la remise.

[Pen de départ | FAIRE UN FORK](https://codepen.io/tim-momo/pen/KwgPvYz){ .md-button }


## Ce que ça renforce dans votre maîtrise de flexbox

- Alterner `flex-direction: row` et `flex-direction: column` selon le niveau d'imbrication
- Comprendre que `justify-content` et `align-items` changent de rôle selon la direction
- Gérer l'alignement vertical ET horizontal dans le même composant



<!--
## Structure des composants à reproduire :

```
┌─────────────────────────────────────────┐
│  HEADER (row, space-between)            │
│  [Logo + Nav]          [Avatar + Nom]   │
└─────────────────────────────────────────┘

┌──────────────────┬──────────────────────┐
│  SIDEBAR         │  CONTENU PRINCIPAL   │
│  (column)        │  (column)            │
│                  │                      │
│  [Nav item]      │  ┌────┬────┬────┐    │
│  [Nav item]      │  │Stat│Stat│Stat│    │  ← row, stretch
│  [Nav item]      │  └────┴────┴────┘    │
│                  │                      │
│                  │  ┌──────────────┐    │
│                  │  │ Carte large  │    │
│                  │  │ (row)        │    │
│                  │  │ [Icône][Text]│    │
│                  │  └──────────────┘    │
└──────────────────┴──────────────────────┘
```
-->

## REMISE

Soumettez le *lien de votre CodePen* complété via le *Devoir Teams* avant le prochain cours (cours 7).

## 📚 Notes de cours

[📚 Contenu de cours sur *Flexbox: display: flex, direction, justify-content, aligns-items, flex-wrap*](../../css/flexbox01.md){ .md-button .md-button--primary }

[📚 Contenu de cours sur *Flexbox: flex, grow, shrink, basis*](../../css/flexbox02.md){ .md-button .md-button--primary }

[📚 Contenu de cours sur *Flexbox: orders*](../../css/flexbox-order.md){ .md-button .md-button--primary }
