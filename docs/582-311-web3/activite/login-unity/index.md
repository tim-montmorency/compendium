---
tags:
  - Exercice
  - npm
  - DaisyUI
  - Vite
---

# Page de connexion Unity

![](./preview.png){.w-100 data-zoom-image}

L'objectif de cet exercice est de démontrer sa capacité à installer et à utiliser des technologies `npm` dans un projet Vite, puis à assembler une page avec Tailwind et DaisyUI.

## Résultat attendu

[Ouvrir dans le navigateur](https://tim-w3.github.io/login-unity-solution/){ .md-button .md-button--primary }

Prendre quelques minutes pour **observer** la page avant de commencer :

- Redimensionner la fenêtre pour voir le comportement des breakpoints
- Cliquer sur l'interrupteur en haut à droite
- Recharger la page. Observer.

## Consignes

### Étape 1 - Mise en place

- [ ] [Accepter le devoir Classroom 50](https://classroom50.org/tim-w3/web-3/assignments/connexion-unity/accept)
- [ ] Cloner le dépôt avec GitHub Desktop
- [ ] Ouvrir le dossier cloné dans VSCode
- [ ] Installer les packages déjà présents dans `package.json`

  ??? quote "Indice"

      Le récapitulatif du cours 4 présente deux commandes d'installation : `npm install xyz` et `npm install`. Une seule des deux lit le fichier `package.json` pour tout réinstaller d'un coup.

- [ ] Lancer le serveur de développement et ouvrir l'adresse affichée
  
  ??? quote "Indice"

      La ligne de commande commence par `npx` et fini par `vite` 🤪

- [ ] Tester que DaisyUI fonctionne en ajoutant temporairement `<button class="btn btn-primary">Test</button>` dans le `<body>`.
- [ ] Si le résultat attendu est là, retirer le test et passer à la prochaine étape.

### Étape 2 - Installer les technologies

La page utilise trois _packages_ supplémentaires : **FontSource**, **Lucide** et **Animatecss**

- [ ] Installer les trois paquets
- [ ] Vérifier dans `package.json` que les trois _packages_ y sont
- [ ] Dans `style.css`, importer :
  - [ ] la police Poppins en graisse normale **et** en graisse `700`
  - [ ] la police d'icônes de Lucide
  - [ ] Animate.css
- [ ] Déclarer Poppins comme police par défaut de Tailwind

!!! example "Vérification"

    Ajouter temporairement ce code dans le `<body>` :

    ```html
    <h1 class="text-3xl font-bold animate__animated animate__bounce">
      Test <span class="icon-rocket"></span>
    </h1>
    ```

    Le titre est en Poppins, gras, avec une fusée, et il rebondit au chargement ? Parfait, tout est installé. Retirer le code de test.

### Étape 3 - Thèmes

La page utilise deux thèmes intégrés de DaisyUI : `caramellatte` (par défaut) et `halloween`.

- [ ] Configurer le plugin DaisyUI dans `style.css` pour activer ces deux thèmes, avec `caramellatte` comme thème par défaut
- [ ] Ajouter au `<body>` les classes `min-h-screen bg-base-100`
- [ ] Ajouter un [contrôleur de thème](https://daisyui.com/components/theme-controller/) de type `toggle` qui bascule vers `halloween`
- [ ] Positionner en absolute l'interrupteur en haut à droite de la page, mais pas collé collé.

  ??? quote "Indice"

      Deux classes Tailwind pour sortir l'élément du flux, et deux autres pour le décaler du haut et de la droite (`top-…`, `right-…`).

### Étape 4 - Squelette de la page

Sur desktop, la page est divisée en **deux colonnes**. Un visuel à gauche (caché en mobile) et le formulaire à droite. 

<p class="codepen" data-theme-id="50173" data-height="300" data-pen-title="Tailwind - Structure login Unity" data-version="2" data-default-tab="result" data-slug-hash="jEBVRXq" data-user="tim-momo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/editor/tim-momo/pen/01a0ad8b-217d-74d1-a1e6-666c403c8061">
  Tailwind - Structure login Unity</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

- [ ] Créer une `div` en grille qui occupe au minimum toute la hauteur de l'écran et qui passe à **2 colonnes** à partir de `lg`
- [ ] Dans cette grille, ajouter un `<aside>` et un `<main>`
- [ ] Cacher le `<aside>` sur mobile et l'afficher en `grid` à partir de `lg`
- [ ] Faire du `<main>` une colonne `flex` verticale

??? tip "Indice : caché sur mobile"

    En Tailwind, le mobile vient en premier. On cache d'abord (`hidden`), puis on réaffiche à partir d'un point de rupture (`lg:…`).

!!! success "Vérification"

    Ajouter temporairement une couleur de fond différente à chaque colonne (ex. `bg-red-200`, `bg-blue-200`) et redimensionner la fenêtre. Retirer ensuite ces couleurs.

### Étape 5 - Colonne visuelle

S'inspirer de la structure **« Texte sur image »** vue au cours 3.

- [ ] Donner au `<aside>` un fond noir, un texte blanc, et centrer son contenu
- [ ] Empêcher le contenu de dépasser du `<aside>` (`overflow`)
- [ ] Ajouter l'image `bg.jpg` en position absolue, qui couvre toute la colonne (`object-cover`)
- [ ] Rendre l'image semi-transparente (50 %) pour laisser paraître le fond noir
- [ ] Par-dessus l'image, ajouter une `div` en position relative, avec une largeur maximale et un bon espacement intérieur
- [ ] Dans cette `div`, coller le code SVG du logo Unity (ouvrir `unity.svg` dans VSCode pour copier son contenu)
- [ ] Ajuster le logo : la moitié de la largeur de son parent, centré horizontalement, rempli en noir à 60 % d'opacité

??? tip "Indice : pourquoi `relative` sur la `div` ?"

    Un élément `absolute` passe par-dessus les éléments non positionnés. Pour que le logo reste **au-dessus** de l'image, sa `div` doit elle aussi être positionnée.

??? tip "Indice : couleur d'un SVG"

    Un SVG en ligne se colore avec les classes `fill-…`. La syntaxe `/60` fonctionne aussi sur `fill`, comme sur `bg`.

!!! success "Vérification"

    Sur grand écran, la colonne de gauche montre l'image assombrie avec le logo Unity au centre.

### Étape 6 - Formulaire

La colonne `<main>` contient deux parties : une zone qui **prend tout l'espace disponible** et qui centre le formulaire, puis le pied de page.

- [ ] Dans le `<main>`, créer une `div` qui grandit pour occuper l'espace restant (`flex-1`) et qui centre son contenu
- [ ] Dans cette zone, créer un conteneur pleine largeur limité à `max-w-sm`
- [ ] Ajouter :
  - [ ] un titre « Connexion » en `3xl` gras
  - [ ] un paragraphe « Pas encore de compte ? » suivi d'un lien « Créer un compte » (composante [Link](https://daisyui.com/components/link/), couleur `primary`)
- [ ] Ajouter un `<form>` en grille avec un espacement entre les éléments
- [ ] Ajouter le champ **Adresse courriel** et le champ **Mot de passe** :
  - [ ] chacun dans un `fieldset` DaisyUI
  - [ ] avec un [libellé flottant](https://daisyui.com/components/input/) (_floating label_)
  - [ ] pleine largeur, et obligatoire (`required`)
- [ ] Sous le mot de passe, ajouter le lien « Mot de passe oublié ? », aligné à droite, en petit, souligné seulement au survol
- [ ] Ajouter un bouton `submit` primaire pleine largeur « Se connecter », suivi de l'icône `icon-arrow-right`
- [ ] Sous le formulaire, ajouter un [séparateur](https://daisyui.com/components/divider/) contenant le mot « ou »
- [ ] Ajouter un bouton contour (`outline`) pleine largeur « Continuer avec Google », précédé de l'icône `icon-globe`

??? tip "Indice : libellé flottant"

    Dans la documentation de la composante **Input**, chercher l'exemple « Floating label ». Le texte du `placeholder` et celui du `<span>` sont identiques.

??? tip "Indice : texte atténué"

    Pour les textes secondaires, DaisyUI offre la couleur sémantique `base-content`. Avec une opacité (`text-base-content/70`), le texte reste lisible dans les deux thèmes.

!!! success "Vérification"

    Cliquer dans un champ : le libellé glisse vers le haut. Cliquer sur « Se connecter » avec des champs vides : le navigateur affiche un message d'erreur.

### Étape 7 - Pied de page

- [ ] Sous la zone du formulaire (toujours dans le `<main>`), ajouter un `<footer>`
- [ ] Y placer « © 2026 Unity », puis les liens « Confidentialité » et « Conditions d'utilisation »
- [ ] Centrer le contenu horizontalement, espacer les éléments et permettre le retour à la ligne sur petit écran
- [ ] Texte très petit et atténué

!!! success "Vérification"

    Le pied de page reste collé en bas de l'écran, peu importe la hauteur de la fenêtre. Sinon, revoir l'étape 6 : quelle classe permet à la zone du formulaire de prendre l'espace restant ?

### Étape 8 - Animations

- [ ] Faire apparaître en fondu (`fadeIn`) le logo dans la colonne visuelle
- [ ] Faire apparaître le formulaire en glissant vers le haut (`fadeInUp`)

??? tip "Indice"

    Deux classes par élément. La section **Animations** du cours 4 indique laquelle est obligatoire.

!!! success "Vérification"

    Recharger la page : le logo apparaît doucement et le formulaire monte en place.

### Étape 9 - Finition

- [ ] Comparer avec le [résultat attendu](https://tim-w3.github.io/login-unity-solution/) : grand écran, mobile (DevTools) et thème `halloween`
- [ ] Vérifier qu'aucune couleur Tailwind fixe n'est utilisée dans le formulaire (seulement des couleurs sémantiques : `primary`, `base-100`, `base-content`…)
- [ ] Formater le code HTML et ajouter des commentaires pour identifier les grandes zones
- [ ] Faire un build et tester le résultat avec `npx vite preview`
- [ ] Ouvrir le dossier `dist/assets` : les fichiers de police Poppins et d'icônes Lucide s'y trouvent-ils ? Pourquoi ?

[STOP]
