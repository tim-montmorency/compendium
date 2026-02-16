# Exercice UI jeu vidéo


<div class="class-content-link">
  <img src="./assets/IA-interdite.png">
  <span class="sidetext">Utilisation de l'IA générative ou d'agent de codage IA interdits à cette phase dans la session: vous devez solidifier les bases d'abord !</span>
</div>


## Flexbox: Interface de jeu vidéo

Durée : *25 minutes*

### Contexte

Vous devez créer l'interface principale d'un RPG en utilisant Flexbox. L'interface doit s'adapter à différentes tailles d'écran tout en gardant certaines sections fixes.

## Aperçu du résultat

<div style="max-width: 640px"><div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe src="https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=15f4a4a2-fa0a-4fa5-a756-38f3184a82ca&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen title="apercu.mp4" style="border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;"></iframe></div></div>


## Objectifs

- Maîtriser flex-grow, flex-shrink, flex-basis
- Créer des layouts avec des ratios spécifiques
- Comprendre comment contrôler l'espace flexible vs fixe

## Fichier de départ

<span class="important-label">IMPORTANT</span> : Connectez-vous à CodePen d'abord et ensuitefaites un *FORK* du Pen de départ pour l'enregistrer dans votre compte, archiver l'exercice et pouvoir avoir un lien unique vers votre exercice complété pour la remise.

[Pen de départ | FAIRE UN FORK](https://codepen.io/tim-momo/pen/emzoWgw){ .md-button }

## Consignes de base

Vous avez 4 zones dans votre interface de jeu :

1. *Inventaire (gauche)* - Doit rester à une largeur fixe
2. *Carte du monde (centre)* - Doit prendre tout l'espace restant
3. *Stats du personnage (droite)* - Doit rester à une largeur fixe
4. *Barre d'actions (en bas, optionnel)* - Hauteur fixe

## Étape 1 : Inventaire fixe (10 min)

L'inventaire doit **toujours rester à 200px de large**, même si l'écran rétrécit.

**Propriétés à utiliser :**

- `flex-basis: 200px`
- `flex-shrink: ?` (ne doit jamais rétrécir)
- `flex-grow: ?` (ne doit pas grandir)

**Résultat attendu :** L'inventaire garde toujours 200px de largeur.

## Étape 2 : Carte du monde flexible (10 min)

La carte doit *prendre tout l'espace disponible* entre l'inventaire et les stats.

**Propriétés à utiliser :**

- `flex-grow: ?` (doit grandir pour remplir l'espace)
- `flex-shrink: ?` (peut rétrécir si nécessaire)
- `flex-basis: ?` (quelle taille de départ ?)

**Résultat attendu :** La carte s'étire et se rétrécit selon l'espace disponible.

## Étape 3 : Stats du personnage fixes (5 min)

Les stats doivent rester à *250px de large* et ne jamais changer.

**Propriétés à utiliser :**

Utilisez la propriété raccourcie `flex: ? ? ?`

**Résultat attendu :** Le panneau de stats reste toujours à 250px.


## Critères de réussite

### ✅ Votre interface est réussie si

- L'inventaire reste toujours à 200px de large
- Les stats restent toujours à 250px de large
- La carte occupe tout l'espace restant
- Quand vous réduisez la largeur de la fenêtre, seule la carte rétrécit

### ❌ Problèmes courants à éviter

- L'inventaire ou les stats qui rétrécissent quand la fenêtre est petite
- La carte qui garde une taille fixe au lieu de s'adapter
- Utiliser `width` au lieu de `flex-basis`


## 🌟 Bonus (si terminé en avance)

**Bonus 1 :** Faites en sorte que la carte ait une largeur minimale de 400px (indice : utilisez min-width)

**Bonus 2 :** Ajoutez une barre d'actions en bas de l'écran qui reste à 60px de hauteur (vous devrez utiliser flex-direction: column sur le conteneur principal)

**Bonus 3 :** Créez un mode "inventaire étendu" où l'inventaire peut prendre 300px au lieu de 200px en cliquant sur un bouton (utilisez JavaScript pour changer le flex-basis)

## Aide-mémoire

```css
/* Pour une taille FIXE qui ne change jamais */
flex: 0 0 [taille]px;

/* Pour prendre TOUT l'espace restant */
flex: 1;
/* ou */
flex: 1 1 0;

/* Pour une taille de base avec capacité à grandir */
flex: 1 1 [taille]px;
```

<div class="class-content-link">
  <img src="./assets/IA-interdite.png">
  <span class="sidetext">Utilisation de l'IA générative ou d'agent de codage IA interdits à cette phase dans la session: vous devez solidifier les bases d'abord !</span>
</div>


## Remise

Soumettez le *lien de votre CodePen* complété via le *Devoir Teams* avant le prochain cours (cours 6).

## 📚 Notes de cours

[📚 Contenu de cours sur *Flexbox: flex, grow, shrink, basis*](../../css/flexbox02.md){ .md-button .md-button--primary }