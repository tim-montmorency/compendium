# Atelier pratique: composant de portfolio

Mini système de composants réutilisables une interface web de type portfolio, avec Flexbox et un thème visuel cohérent.

> **Durée totale :** 2h à 3h (~45 min en classe + 2h en devoir)

> **Remise :** Début du cours 6 (23 ou 25 février)

> **Évaluation :** Formative (rétroaction en personne au cours 6)


<div class="class-content-link">
  <img src="../../assets/IA-interdite.png">
  <span class="sidetext">Utilisation de l'IA générative ou d'agent de codage IA interdits à cette phase dans la session: vous devez solidifier les bases d'abord !</span>
</div>


## Objectif

Créer un mini-système de *3 composants réutilisables* avec Flexbox que vous pourrez utiliser dans vos futurs projets (portfolio futur, projets dans les cours Web 3, Web 4, Web 5, Préparation au milieu du travail etc.)

**Pourquoi c'est important :**

- Vous construisez VOTRE bibliothèque de composants 📚
- Pratique réelle de la réutilisabilité ♻️
- Exercice de cohérence visuelle 🎨
- Code que vous garderez et réutiliserez (on ne travaille pas pour rien 😉)

## Fichier de départ

[:material-download: Atelier composants portfolio | GitHub Classroom](https://classroom.github.com/a/0uopKp36){ .md-button }

## Consignes

### Étape 1 : Choisir vos 3 composants (5-10 min)

Choisissez **UN composant de chaque catégorie**:

??? abstract "Catégorie A - Interface de contenu (choisir 1)"

    **Option A1 : Carte de projet (Project Card)**

    - Image du projet en haut
    - Titre + description
    - Liste de technologies (tags)
    - Boutons "Voir démo" + "Code"

    **Option A2 : Carte de compétence (Skill Card)**

    - Icône ou emoji de la compétence
    - Nom de la compétence
    - Niveau (barre de progression ou étoiles)
    - Courte description

    **Option A3 : Timeline (Ligne du temps)**

    - Année/date à gauche
    - Point de connexion au centre
    - Titre + description à droite
    - Minimum 3 entrées

    **Option A4 : Section "À propos" (About Section)**

    - Photo/avatar à gauche ou droite
    - Titre + paragraphe
    - Liste de points forts ou skills
    - Bouton de contact

??? question "Catégorie B - Navigation/Interaction (choisir 1)"

    **Option B1 : Footer multi-colonnes**

    - Logo/nom à gauche
    - 2-3 colonnes de liens (Liens, Réseaux, Contact)
    - Copyright en bas

    **Option B2 : Header avec navigation**

    - Logo à gauche
    - Menu de navigation au centre ou droite
    - Bouton CTA (Contact, CV)

    **Option B3 : Tabs/Onglets**

    - 3-4 onglets horizontaux
    - Onglet actif visuellement distinct
    - Contenu qui change selon l'onglet (vous pouvez simuler avec du texte)

    **Option B4 : Section de contact avec formulaire et info**

    - Formulaire à gauche
    - Infos de contact à droite (email, téléphone, réseaux)
    - Layout flexible

??? example "Catégorie C - Micro-composant (choisir 1)"

    **Option C1 : Système de badges/tags**

    - Badge pour technologies (HTML, CSS, JS, React, etc.)
    - Au moins 3 variantes de couleurs
    - Tailles variables (sm, md, lg)

    **Option C2 : Système de boutons**

    - Bouton primary, secondary, outline
    - Bouton avec icône (icône + texte alignés)
    - États : normal, hover, disabled

    **Option C3 : Card de statistique (Stat Card)**

    - Gros chiffre/pourcentage
    - Label en dessous
    - Icône ou emoji
    - Minimum 3 cartes alignées

    **Option C4 : Alert/Notification**

    - Message de succès (vert)
    - Message d'erreur (rouge)
    - Message d'info (bleu)
    - Icône + texte + bouton fermer

---

### Étape 2 : Choisir votre thème visuel (5 min)

Choisissez **UN thème** pour créer une cohérence visuelle :

- **Thème 1 : Jeu vidéo en mode sombre (dark mode gamer)**
  - Fond sombre (#1a1a2e, #16213e)
  - Accents néons (cyan, magenta, jaune)
  - Bordures et ombres prononcées
- **Thème 2 : Pastel doux**
  - Fond clair (#f8f9fa)
  - Couleurs pastel (rose pâle, bleu ciel, lavande)
  - Bordures subtiles, coins arrondis
- **Thème 3 : Néon cyberpunk**
  - Fond noir pur
  - Néons (rose électrique, cyan, violet)
  - Effets glow, ombres colorées
- **Thème 4 : Minimaliste monochrome**
  - Noir et blanc uniquement
  - 1 seule couleur d'accent (au choix)
  - Typographie forte, espaces généreux
- **Thème 5 : Nature/terreux**
  - Verts, bruns, beiges
  - Fond crème ou blanc cassé
  - Ombres douces, coins arrondis
- **Thème 6 : Brutaliste**
  - Fond blanc ou gris très clair
  - Noir pur pour le texte et bordures épaisses (2-3px)
  - Aucun dégradé, aucune ombre
  - Coins carrés (border-radius: 0)
  - Typographie monospace ou sans-serif très bold
  - Espacements généreux et asymétriques
  - Couleurs primaires brutes (rouge pur #FF0000, bleu pur #0000FF, jaune pur #FFFF00)
- **Thème 7 : Glassmorphisme**
  - Fond avec dégradé
  - Éléments semi-transparents (backdrop-filter: blur)
  - Bordures subtiles blanches
- **Thème 8 : Solar punk**
  - Fond beige chaud ou crème (#f5f0e8, #fef9f3)
  - Palette de verts variés (vert lime, vert sauge, vert forêt)
  - Accents dorés/cuivrés (#d4a574, #b8860b)
  - Touches de turquoise et orange brûlé
  - Ombres organiques et douces
  - Coins arrondis généreux
  - Effet de texture ou grain subtil

---

### Étape 3 : Créer votre système de variables CSS (10 min)

**OBLIGATOIRE** : Créez vos design tokens AVANT de coder vos composants.

!!! Note "Couleur"
    Utilsez des coutils tels que [coolors.co](https://coolors.co), [colohunt.co](https://colorhunt.co/), [cssgradient.io](https://cssgradient.io), ou des [palettes de couleurs sur Figma](https://www.figma.com/color-palettes/) pour vous aider à choisir vos couleurs et que votre palette soit harmonieuse et cohérente avec votre thème.

    Pour les nuances de vos couleurs telles que `primary` et `secondary` (si nécessaire), vous pouvez utiliser [Tailwind Shades Generator](https://www.tints.dev/) pour générer automatiquement les différentes nuances (50, 100, 200... 900) à partir de votre couleur de base.

```css 
    :root {
      /* ===== COULEURS ===== */
      --color-primary: #...;
      --color-secondary: #...;
      --color-accent: #...;
      --color-bg: #...;
      --color-surface: #...;
      --color-text: #...;
      --color-text-secondary: #...;
      --color-border: #...;
      
      /* États */
      --color-success: #...;
      --color-error: #...;
      --color-warning: #...;
      
      /* ===== ESPACEMENTS ===== */
      --space-xs: 4px;
      --space-sm: 8px;
      --space-md: 16px;
      --space-lg: 24px;
      --space-xl: 32px;
      --space-2xl: 48px;
      
      /* ===== TYPOGRAPHIE ===== */
      --font-size-sm: 0.875rem;
      --font-size-base: 1rem;
      --font-size-lg: 1.25rem;
      --font-size-xl: 1.5rem;
      --font-size-2xl: 2rem;
      
      /* ===== BORDURES ===== */
      --radius-sm: 4px;
      --radius-md: 8px;
      --radius-lg: 12px;
      --radius-full: 9999px;
      
      /* ===== OMBRES ===== */
      --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
      --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.15);
      --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

```

---

### Étape 4 : Coder vos 3 composants (1h30-2h)

**Structure de fichier recommandée :**

    index.html (tous vos composants sur une même page)
    style.css (votre CSS)

**Pour CHAQUE composant :**

1. HTML sémantique (évitez les div inutiles, utilisez des balises appropriées)
2. Flexbox pour la mise en page (pas de floats, position absolute, etc.)
3. Variables CSS utilisées (pas de valeurs en dur)
4. Code commenté
5. Au moins 1 variante d'une des composante (modifier)

**Exemple de variante (ne pas utiliser que cet exemple) :**

    /* Composant de base */
    .btn { }
    
    /* Variantes */
    .btn--primary { }
    .btn--secondary { }
    .btn--large { }

---

### Étape 5 : Documentation (15 min)

Ajoutez en haut de votre fichier HTML :

    <!--
    PORTFOLIO COMPONENT KIT
    Par: [Votre nom]
    
    Thème choisi: [Nom du thème]
    
    Composants créés:
    1. [Nom composant A] - [Catégorie A]
    2. [Nom composant B] - [Catégorie B]
    3. [Nom composant C] - [Catégorie C]
    
    Notes:
    - Toutes les valeurs utilisent des variables CSS
    - Flexbox utilisé pour tous les layouts
    - [Autres notes importantes]
    -->



## Critères d'évaluation (formatif): Rétroaction en classe

### Flexbox

- ✅ Les 3 composants utilisent Flexbox de manière appropriée
- ✅ Propriétés flex pertinentes (justify-content, align-items, gap, etc.)
- ✅ flex-grow/shrink/basis utilisés intelligemment
- ✅ Responsive considéré (même si basique)

### Cohérence visuelle

- ✅ Même palette de couleurs entre les 3 composants
- ✅ Espacements cohérents
- ✅ Bordures/rayons cohérents
- ✅ Le thème choisi est respecté

### Variables CSS

- ✅ Système de design tokens créé
- ✅ Pas de valeurs en dur (couleurs, espacements)
- ✅ Variables bien nommées et organisées

### Code

- ✅ HTML sémantique
- ✅ CSS organisé et commenté
- ✅ Nomenclature cohérente (BEM recommandé)
- ✅ Au moins 1 variante par composant (si applicable)



## 💡 Conseils

**Commencez simple :**

- Faites fonctionner le composant de base AVANT d'ajouter des variantes
- Ne cherchez pas à faire un composant parfait dès le début, vous pouvez itérer

**Réutilisez vos variables :**

```css
    /* ✅ Bon */
    
    .card {
      padding: var(--space-md);
      border-radius: var(--radius-md);
      background: var(--color-surface);
    }
    
    /* ❌ Mauvais */
    .card {
      padding: 16px;
      border-radius: 8px;
      background: #363a4a;
    }
```

**Testez avec du contenu réel :**

- Textes de longueurs différentes
- Avec et sans images
- Plusieurs instances du composant

**Inspirez-vous, mais ne copiez pas :**

- Regardez des portfolios sur Dribbble, Behance, Awwwards
- Adaptez les idées à VOTRE thème
- Le code doit être le vôtre


## ❓ Questions fréquentes

**Q: Puis-je utiliser des icônes ?**  
R: Oui ! Utilisez des emojis ou des icônes SVG simples.

**Q: Puis-je m'inspirer des composants montrés en classe ?**  
R: Vous pouvez vous inspirer du CONCEPT, mais le code et le design doivent être différents.

**Q: Mon thème peut être un mix ?**  
R: Oui, mais gardez la cohérence. Ex: "Dark Mode Pastel" = fond sombre + accents pastel.

**Q: Je peux changer de composants en cours de route ?**  
R: Oui, tant que vous respectez "1 de chaque catégorie".

**Q: Combien de variantes minimum ?**  
R: Au moins 1 variante pour AU MOINS 1 composant. Exemples :

- Bouton : primary/secondary
- Card : large/small
- Alert : success/error/info


<div class="class-content-link">
  <img src="../../assets/IA-interdite.png">
  <span class="sidetext">Utilisation de l'IA générative ou d'agent de codage IA interdits à cette phase dans la session: vous devez solidifier les bases d'abord !</span>
</div>




## 📤  REMISE

AVANT le cours 6 (23 ou 25 février). 

Envoyez votre code complété sur [GitHub Classroom](https://classroom.github.com/a/0uopKp36) (que vous avez préalablement cloné avant d'ajouter tous vos fichiers et modifications) :

Via VS Code dans l'onglet git:

- Ajoutez tous fichiers et modifications [+] au commit
- Nommez votre commit "Remise".
- Faites ensuite un push.

Assurez-vous que votre code est bien poussé sur GitHub Classroom avant le début du cours 6.