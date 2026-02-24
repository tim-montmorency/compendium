# Flexbox: Figma Auto Layout

## **Séance : De Figma à Visual Studio Code – Auto-Layout et Flexbox**

**Objectifs**

- Comprendre et utiliser l'auto-layout dans Figma.
- Explorer le Dev Mode et la génération de code CSS (Flexbox).
- Intégrer le code généré dans Visual Studio Code et l’adapter pour une vraie interface web.
- Comprendre l’usage de Figma en industrie.


## 1\. Auto-Layout dans Figma


### 📌 Pourquoi utiliser l’auto-layout ?

- Facilite la gestion des espacements, alignements et tailles des éléments.
- Simule le comportement CSS (Flexbox).
- Optimisé pour le responsive design.
- La page s'ajustera de façon fluide au contenu, peu importe sa longueur, sa largeur.

[FICHIER DE DEMO](https://www.figma.com/design/iUiwmQrCE7wneBx6k1OpZO/flexbox-demo?node-id=0-1&t=RERhHjRJq8BIaJdV-1)

Pour mieux comprendre l'auto-layout et son lien avec le principle de flexbox, veuille **afficher les libellés dans les panneau de configuration de Figma**

![](https://tim-montmorency.com/timdoc/582-211/css/flexbox-figma-auto-layout/images/menu-logo-figma.png) / View / Property labels

### 🛠️ Démonstration : cadre de texte dynamique et bouton en _auto-layout_

[ ] 1. Créer un cadre (frame) et y insérer 3 paragraphes _Lorem ipsum_.
[ ] 2. Sélectionner la boîte de texte. Dans la panneau _layout_ à droite, ajuster la redimension automatique de la boite de texte sur (1) la largeur (auto-width) ou sur (2) la hauteur (auto-height): ![](https://tim-montmorency.com/timdoc/582-211/css/flexbox-figma-auto-layout/images/ajuster-boite-au-texte.png) Celle-ci s'ajustera automatiquement à la taille du texte, qu'on ajoute ou qu'on enlève un paragraphe. Sa dimension est maintenant dynamique.
[ ] 3. Créer un bouton (outil rectangle et arrondir les coins) et y inscrire du texte.
[ ] 4. À l'aide de l'outil _aligner_ qui se trouve dans le panneau _Position_ à droite, centrer verticalement et horizontalement le texte dans le bouton.
[ ] 5. Sélectionner le bouton et le texte et appliquer l' _auto-layout_ (soit par le panneau _layout_ à droite ou soit par le raccourci clavier `Shift` + `A`).
[ ] 6. Ajuster la padding horizontal à 50px ![](https://tim-montmorency.com/timdoc/582-211/css/flexbox-figma-auto-layout/images/padding-h-50.png)
[ ] 7. Réduire la largeur du bouton plus petit que le texte et observer comment le texte s'ajuste à la taille du bouton.
[ ] 8. S'ajuste-t-il? Non. Il faudra changer la largeur fixe du bouton pour _hug content_. ![](https://tim-montmorency.com/timdoc/582-211/css/flexbox-figma-auto-layout/images/width-hug-content.png)
[ ] 9. Changer maintenant le texte du bouton pour un texte plus long, observer ce qui se passe. La dimension du bouton s'ajuste maintenant à la largeur de son contenu.

### Le panneau auto-layout dans Figma

![Panneau auto-layout est ses options](https://tim-montmorency.com/timdoc/582-211/css/flexbox-figma-auto-layout/images/panneau-auto-layout.png)

- [Capsule vidéo partie 1:](https://cmontmorency365-my.sharepoint.com/:v:/g/personal/mariem_ouellet_cmontmorency_qc_ca/EdN3tKSngKhGpd_MhVJH9MUBWpKQkDPAcCvk2aSyEl8Z7Q?e=pH06Yt&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)
  - Activation de l'auto-layout sur des contenus sélectionnés.
  - Gestion de la dimension du conteneur parent.
  - Principe du _hug content_.
- [Capsule vidéo partie 2:](https://cmontmorency365-my.sharepoint.com/:v:/g/personal/mariem_ouellet_cmontmorency_qc_ca/EV91i5VnU3xLo-4uagzhl14B5V-Kw4qoYv84mQ-8Fjg92Q?e=YKfWaL&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)
  - gap (espace entre les éléments enfants)
  - flex-direction (row, column)
  - flex-wrap (no-wrap, wrap)
  - Alignement (flex-start, flex-end, center etc)
  - padding (marge intérieure du conteneur parent)
  - clip-content (overflow: visible ou hidden)

### Suite de la démo

[FICHIER DE DEMO](https://www.figma.com/design/iUiwmQrCE7wneBx6k1OpZO/flexbox-demo?node-id=0-1&t=RERhHjRJq8BIaJdV-1)

Flexbox sur parent: Autres exemples de placements en explorant le panneau d' _auto-layout_

![](https://tim-montmorency.com/timdoc/582-211/css/flexbox-figma-auto-layout/images/demo-flexbox-autolayout-suite2.png)

Explorons aussi les propriétés auto-layout (flexbox) sur les éléments enfants, tels que flex-grow, flex-shrink, flex-basis (et flex qui est le raccourcis des 3 propriétés).

![](https://tim-montmorency.com/timdoc/582-211/css/flexbox-figma-auto-layout/images/demo-flexbox-autolayout-suite3.png)



## 2\. Passage en Dev Mode et extraction du code CSS

🔍 **Présentation du Dev Mode**

- Activer le mode développeur dans Figma.
- Explorer les propriétés CSS générées.
- Comprendre comment Figma traduit l’auto-layout en `display: flex`.

🛠️ **Démonstration :**

1. Sélectionner un élément et voir son code CSS généré.
2. Analyser quelques exemples.
3. Comparer avec le code qu’on écrirait soi-même.

Vous ne pouvez effectuer aucune modification tant que le _Dev Mode_ reste activé. Il ne sert qu'à consulter le code généré. Il rend votre fichier en mode "read only". Pour modifier votre fichier, veuillez désactiver ce fameux _Dev Mode_ en bas de l'écran.



## 3\. Intégration dans VS Code

📌 **Objectif : Recréer l’interface avec un code propre.**

🛠️ **Démonstration :**

1. Créer un fichier `index.html` et `style.css`.
2. Structurer l’HTML (sections, divs, classes).
3. Appliquer les styles avec Flexbox en s’inspirant du code généré par Figma.
4. Ajuster les styles pour améliorer la propreté et la maintenabilité du code.

### Extention à installer maintenant sur vos Visual Studio Code

[_OUTIL_ Figma for VS CodeExtension pour Visual Studio Code qui permet d'importer des designs Figma et de les convertir en code CSS.](https://marketplace.visualstudio.com/items?itemName=figma.figma-vscode-extension) [Apprendre à utiliser l'extension\\
**Figma pour VS Code** (en français)](https://help.figma.com/hc/fr/articles/15023121296151-Figma-pour-VS-Code)

## 4\. Comment l’industrie utilise Figma en développement Web ?



🛠️ **Workflow en entreprise :**

1. **Designer** → Création des maquettes dans Figma avec Auto-Layout.
2. **Développeur** → Exploration en Dev Mode pour récupérer les propriétés.
3. **Intégration** → Transposition dans HTML/CSS en adaptant le code généré.

📌 **Bonnes pratiques :**

- Nommer et organiser ses calques proprement.
- Utiliser des styles globaux et des composants réutilisables.
- Travailler avec des variables CSS et des classes bien structurées.



## 5\. Exercice

[_EXERCICE_ Carte auto-layout et convertie en HTML/CSSVous devrez configurer la carte est ses éléments en auto-layout dans Figma, explorer le code Flexbox généré via le DevMode et intégrer le tout en HTML+CSS dans VS Code.](https://tim-montmorency.com/timdoc/582-211/css/flexbox-figma-auto-layout/exercices/carte-salle-conference/)



## Pour en savoir plus

### L'auto-layout dans Figma

<iframe width="560" height="315" src="https://www.youtube.com/embed/3XIQZrrhx-I?si=xRifhD8EZ6vDPBff" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

En anglais mais vous pouvez ajouter les sous-titres français.

\+ [Fichier\\
de travail pour suivre l'atelier](https://www.figma.com/community/file/1419019707467348375)

### Flexbox via l'auto-layout et le Dev mode dans Figma

<iframe width="560" height="315" src="https://www.youtube.com/embed/Pi6MipIG5iI?si=EDNzPUrNscGXY7Cv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

En anglais mais vous pouvez ajouter les sous-titres français.