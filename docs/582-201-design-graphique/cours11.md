# Cours 11

[STOP]

<!-- @note : Ce cours vise à enseigner la notion de Prototype dans Figma.  -->

## Les trois stades d'un projet Web

Avant de parler de prototypage, il faut bien comprendre où ça s'inscrit dans le processus de création d'une interface.

<figure markdown>
![](./assets/img/wireframe-mockup-prototype.png){data-zoom-image}
<figcaption>Les trois stades : filaire → maquette graphique → prototype</figcaption>
</figure>

### 1. La maquette filaire (_Wireframe_)

![](./assets/img/wireframe-example.png){data-zoom-image .w-100}

**C'est quoi ?**  
Un plan en noir et blanc, sans couleurs ni typographie finale. On s'intéresse uniquement à la **structure** : où vont les blocs, quelle est la hiérarchie, comment l'information est organisée.

**Analogie** : les plans d'architecte avant la construction. On ne choisit pas la couleur des murs avant de savoir combien il y en a.

**Ce qu'on y décide** :
- La disposition des éléments sur la page
- La navigation (menus, onglets, boutons)
- Le contenu prioritaire vs secondaire
- Le parcours utilisateur

!!! info "Outils courants"
    Figma, FigJam, papier/crayon, Balsamiq

---

### 2. La maquette graphique (_Mockup_)

![](./assets/img/mockup-example.png){data-zoom-image .w-100}

**C'est quoi ?**  
La version **visuellement finalisée** du wireframe. Couleurs, typographie, icônes, images réelles, espacements précis. Tout est à sa place définitive — mais rien ne bouge encore.

**Ce qu'on y décide** :
- L'identité visuelle (design system appliqué)
- Les états visuels des composants
- La cohérence graphique de l'ensemble

!!! warning "Une maquette graphique n'est pas interactive"
    Elle ressemble à l'application finale, mais c'est encore une image statique. On ne peut pas cliquer dessus.

---

### 3. Le prototype

![](./assets/img/prototype-example.gif){data-zoom-image .w-100}

**C'est quoi ?**  
Un prototype, c'est une maquette graphique à laquelle on a ajouté des **interactions** : cliquer sur un bouton navigue vers une autre page, appuyer ouvre une modale, swiper change l'écran, etc.

**À quoi ça sert ?**
- Simuler l'expérience réelle **avant** de coder
- Tester avec de vraies personnes (tests utilisateurs)
- Présenter et valider le design avec un client
- Repérer les problèmes de navigation tôt (avant que ça coûte cher)

> Le prototype est le document qui fait le pont entre le design et le développement.

!!! example "Analogie : la répétition générale 🎭"
    Une pièce de théâtre ne s'improvise pas le soir de la première. On répète, on ajuste, on corrige. Le prototype, c'est la répétition générale de l'interface.

---

## Parcours utilisateur (_User Flow_)

Avant de commencer à connecter des écrans dans Figma, il faut savoir **ce qu'on connecte**.

Un **parcours utilisateur**, c'est la séquence d'étapes qu'une personne suit pour accomplir une tâche dans l'interface.

<figure markdown>
![](./assets/img/user-flow-example.png){data-zoom-image}
<figcaption>Exemple de parcours utilisateur pour une connexion</figcaption>
</figure>

### Comment le construire

Posez-vous la question : **"Qu'est-ce que l'utilisateur veut accomplir ?"**

Puis décrivez chaque étape :

```
Accueil → [Clic sur "Se connecter"] → Page de connexion 
→ [Saisie email + mot de passe] → [Clic "Connexion"] 
  → Si succès → Tableau de bord
  → Si erreur → Message d'erreur + retour formulaire
```

!!! tip "Dessinez votre flow avant de prototyper"
    Un schéma rapide sur FigJam vous évitera de connecter des écrans dans le désordre et de vous perdre dans votre propre prototype.

---

## Prototypage dans Figma

### L'onglet Prototype

<div class="grid grid-1-2" markdown>
![](./assets/img/figma-prototype-tab.png){data-zoom-image}

<div markdown>
Dans Figma, le prototypage se passe dans l'**onglet Prototype** du panneau de droite (à côté de "Design" et "Variables").

Lorsqu'un élément est sélectionné, vous pouvez lui ajouter des **interactions**.
</div>
</div>

### Connexions (_Connections_)

Pour connecter deux écrans :

1. Passez en mode **Prototype** (onglet en haut à droite)
2. Survolez un élément cliquable → une flèche bleue apparaît
3. Glissez cette flèche vers l'écran de destination
4. Configurez le déclencheur et l'action

<figure markdown>
![](./assets/img/figma-connection.gif){data-zoom-image}
<figcaption>Création d'une connexion entre deux frames</figcaption>
</figure>

### Déclencheurs (_Triggers_)

Le déclencheur définit **quelle action de l'utilisateur** lance l'interaction.

| Déclencheur | Usage typique |
| --- | --- |
| **On Click** | Boutons, liens, cartes cliquables |
| **On Hover** | Menus déroulants, tooltips |
| **On Drag** | Sliders, carousels, swipe mobile |
| **On Press** | Boutons tactiles, appui long |
| **While Hovering** | Animations de survol continues |
| **After Delay** | Splash screen, chargement automatique |
| **Key / Gamepad** | Interactions clavier |

### Actions

L'action définit **ce qui se passe** après le déclencheur.

| Action | Description |
| --- | --- |
| **Navigate to** | Aller vers un autre frame (navigation principale) |
| **Open overlay** | Afficher un élément par-dessus (modale, menu, tooltip) |
| **Scroll to** | Faire défiler jusqu'à un élément |
| **Back** | Revenir à l'écran précédent |
| **Close overlay** | Fermer un overlay ouvert |
| **Set variable** | Modifier la valeur d'une variable (états interactifs) |

---

## Transitions et animations

Une fois la connexion créée, vous pouvez définir **comment** la transition se produit.

<figure markdown>
![](./assets/img/figma-transition.png){data-zoom-image .w-75}
<figcaption>Options de transition entre deux écrans</figcaption>
</figure>

### Types de transitions

| Type | Effet |
| --- | --- |
| **Instant** | Changement immédiat, sans animation |
| **Dissolve** | Fondu enchaîné |
| **Move In / Out** | L'écran entre ou sort par un côté |
| **Push** | L'écran suivant pousse l'actuel |
| **Slide In / Out** | Glissement (pour les menus latéraux, tiroirs) |
| **Smart Animate** | Animation intelligente basée sur les changements de propriétés |

!!! info "Smart Animate ✨"
    Si deux frames contiennent des éléments **avec le même nom**, Figma anime automatiquement la transition entre leurs propriétés (position, taille, opacité, couleur...). C'est l'outil le plus puissant pour des animations fluides sans effort.

### Courbes d'accélération (_Easing_)

![](./assets/img/easing-curves.png){data-zoom-image .w-75}

L'easing définit le **rythme** de l'animation. Une animation linéaire semble mécanique. Une courbe d'easing la rend naturelle.

| Courbe | Effet ressenti |
| --- | --- |
| **Linear** | Mécanique, robotique |
| **Ease In** | Démarre lentement, accélère |
| **Ease Out** | Démarre rapidement, ralentit (le plus naturel pour les UI) |
| **Ease In and Out** | Doux au départ et à l'arrivée |
| **Spring** | Effet de rebond, vivant, tactile |

---

## Overlays

Un **overlay** est un élément qui s'affiche **par-dessus** l'écran actuel sans naviguer vers un nouvel écran. C'est le mécanisme derrière les modales, les menus contextuels, les _bottom sheets_, les _tooltips_.

<figure markdown>
![](./assets/img/overlay-example.png){data-zoom-image}
<figcaption>Exemple d'overlay : une modale de confirmation</figcaption>
</figure>

### Configurer un overlay

1. Sélectionnez l'élément déclencheur (ex. : bouton "Supprimer")
2. Dans l'action, choisissez **Open overlay**
3. Sélectionnez le frame qui servira d'overlay
4. Configurez la **position** (centre, bas, haut, côté)
5. Activez **Close when clicking outside** si nécessaire

!!! tip "Préparez vos overlays sur la même page"
    Placez les frames d'overlay à côté de vos écrans principaux, pas dans un autre coin du fichier. Ça facilite la lecture du prototype et la gestion des connexions.

---

## Variables et états interactifs

Les **variables de prototype** permettent de créer des interfaces qui **réagissent** selon des conditions, sans naviguer vers un nouvel écran.

### Exemple concret : un bouton toggle

<figure markdown>
![](./assets/img/figma-variable-boolean.gif){data-zoom-image .w-50}
<figcaption>Un toggle qui change d'état avec une variable booléenne</figcaption>
</figure>

1. Créez une variable **Boolean** (ex. : `activé`) avec la valeur `false`
2. Sur le composant Toggle, ajoutez une interaction **On Click → Set variable** `activé = !activé`
3. Utilisez cette variable dans une **condition** pour afficher la version ON ou OFF du composant

!!! info "C'est l'équivalent d'un `useState` en React"
    Si vous avez déjà fait du React, la logique est exactement la même. Une variable change, l'interface se met à jour.

---

## Prévisualiser et partager

### Prévisualisation locale

Cliquez sur l'icône ▶ **Présenter** en haut à droite (ou ++ctrl+alt+enter++) pour lancer votre prototype dans le navigateur.

!!! tip "Choisissez un Frame de départ"
    Dans l'onglet Prototype, cliquez sur un frame et activez **Starting frame** pour définir par quel écran le prototype démarre.

### Partager le prototype

1. Cliquez sur **Share** en haut à droite
2. Activez **Anyone with the link → can view**
3. Copiez le lien et partagez-le

Le destinataire peut naviguer dans le prototype **sans avoir de compte Figma**.

!!! tip "Mode Présentation vs mode Design"
    Le lien partagé peut s'ouvrir en mode **Présentation** (prototype interactif) ou en mode **Design** (vue des calques). Assurez-vous que le lien pointe vers la présentation.

---

## Checklist du prototype ✅

Avant de remettre ou de présenter un prototype, vérifiez :

1. **Flow complet** : peut-on accomplir la tâche principale de bout en bout sans tomber sur une impasse ?
2. **Retour arrière** : y a-t-il toujours un moyen de revenir en arrière (bouton retour, fermer une modale) ?
3. **Frame de départ** : le prototype démarre bien sur le bon écran
4. **Transitions cohérentes** : le même type de transition est utilisé pour des gestes similaires
5. **Overlays fonctionnels** : les modales et menus s'ouvrent et se ferment correctement
6. **Nom des frames** : tous les écrans sont nommés clairement (pas "Frame 47")

---

## Exercices

<div class="grid grid-1-2" markdown>
  ![](./activite/exercice/proto-navigation/preview.png)

  <small>Exercice - Figma</small><br>
  **[Navigation multi-écrans](./activite/exercice/proto-navigation/index.md){.stretched-link .back}**
</div>

<div class="grid grid-1-2" markdown>
  ![](./activite/exercice/proto-overlay/preview.png)

  <small>Exercice - Figma</small><br>
  **[Modale et overlay](./activite/exercice/proto-overlay/index.md){.stretched-link .back}**
</div>

<div class="grid grid-1-2" markdown>
  ![](./activite/exercice/proto-toggle/preview.gif)

  <small>Exercice - Figma</small><br>
  **[Toggle interactif](./activite/exercice/proto-toggle/index.md){.stretched-link .back}**
</div>
