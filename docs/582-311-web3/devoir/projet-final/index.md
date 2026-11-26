---
tags:
  - Projet
---

# Projet final

![](./gta6.webp)

Comme projet final, vous devez réaliser le microsite de lancement d'un jeu vidéo de **trois pages Web** !

Le sujet du site est votre jeu du cours d'interactivité ludique.

Le travail vaut pour 50% de la session.

!!! danger "IA"

    L'IA peut aider à **comprendre** une notion ou un message d'erreur, mais pas à faire le projet à votre place. Si l'IA est utilisée, **chaque ligne du code remis doit quand même être comprise** et pouvoir être expliquée à l'oral.

    Une **entrevue individuelle** au cours 15 sert précisément à le vérifier. Elle compte pour **15 % de la note du projet** et un passage du code qui ne peut pas être expliqué fait perdre les points du critère auquel il se rattache.

    Comme le prévoit le plan de cours, tout contenu créé par une IA, **y compris du code**, doit être déclaré dans une section *IA* du `README.md` : le nom et la version de l'IA, la requête utilisée et les fichiers concernés.

??? note "Je n'ai pas Interactivité ludique !"

    No problema !

    Les personnes qui ne suivent pas ce cours choisissent simplement un jeu vidéo existant. Il est également possible de choisir son ancien jeu si on a déjà fait le cours.

    Si on choisit un jeu existant, les médias devront venir idéalement d'un dossier de presse (*press kit*) ou de sa **page Steam**.    

## Le jeu

Vous aurez besoin de ces médias :

- [ ] Logo
- [ ] Captures d'écran
- [ ] Trame sonore
- [ ] Effets sonores
- [ ] Vidéo (Captée via Unity Recorder ou OBS)
- [ ] Une ou deux polices sur [Fontsource](https://fontsource.org/), qui rappellent l'ambiance du jeu

Les médias qui ne viennent pas du jeu doivent être libres de droits (ex. : [Pixabay](https://pixabay.com/)).

## Les 3 pages

Seuls les éléments ci-dessous sont imposés. Le reste du contenu, la mise en page et la place des animations et des médias sont libres.

### Sur toutes les pages

- [ ] La même structure : `<header>`, `<main>` et `<footer>`
- [ ] Le **même header** : le logo, une navbar DaisyUI avec un indicateur visible de la **page active**, un **bouton son** (activer / couper) et un **bouton de thème** (clair / sombre)
- [ ] Le **même footer**, avec cette mention (le prénom seul est permis) :

  > Projet étudiant réalisé par Prénom Nom.<br>
  > Techniques d'intégration multimédia, Collège Montmorency.<br>
  > Non affilié aux titulaires des droits.

- [ ] Un `<title>` propre à chaque page
- [ ] Tout le contenu est en **français** et l'attribut lang est configuré (`<html lang="fr">`)

### Accueil (`index.html`)

- [ ] Hero avec accroche et bouton d'appel à l'action vers la page du jeu (ex. : itch.io)
- [ ] Section *Lancement*
  - Date de sortie
  - Plateformes
  - Widget itch.io (intégrer le jeu jouable directement dans le site est permis, mais n'est pas demandé)
- [ ] Animations GSAP

### Le jeu (`jeu.html`)

- [ ] Le concept et l'univers du jeu
- [ ] Le parcours du joueur (les différentes zones du jeu)
- [ ] Les **contrôles**
- [ ] Une **touche supplémentaire** au choix (voir plus bas)
- [ ] Animations GSAP

### Contact (`contact.html`)

- [ ] Formulaire de contact ou d'inscription à l'infolettre avec les styles de daisyUI pour les éléments de formulaire
- [ ] Envoi de courriel via EmailJS

## Démarrer le projet

- [ ] Créer le projet Vite (Vanilla, JavaScript) et son répertoire GitHub (public!, pas privé), puis faire un premier _commit_
- [ ] Installer les dépendances avec npm : Tailwind, DaisyUI, GSAP, Lucide et la police Fontsource
- [ ] Créer `jeu.html` et `contact.html` à la racine en chargeant le même `src/main.js`
- [ ] Configurer `vite.config.js` : `base: './'` et les trois pages dans `build.rolldownOptions.input`
- [ ] Créer `src/gsap.js` et l'importer dans `main.js`
- [ ] Créer les dossiers `src/assets/images/`, `src/assets/videos/` et `src/assets/audio/`, puis y placer les médias
- [ ] Mettre en ligne sur GitHub Pages dès le départ, même avec des pages presque vides

## Exigences techniques

Seules les cases de cette section valent des points. Le nombre de points est indiqué à la fin de chaque case.

* **(1 pt)** : fait ou pas fait
* **(2 pts)** : noté selon la qualité, 2 (très bien fait), 1 (fait) ou 0 (absent)

### Projet

- [ ] Projet **Vite** Vanilla (JavaScript), dépendances installées avec **npm** seulement (aucun CDN) : `npm install` puis `npx vite` fonctionnent sans erreur **(1 pt)**
- [ ] `npx vite build` fonctionne sans erreur **(1 pt)**
- [ ] Les trois pages déclarées dans `vite.config.js` : après `npx vite build`, elles sont toutes dans `dist/` **(1 pt)**
- [ ] Toutes les animations dans **`src/gsap.js`**, importé dans `main.js` **(1 pt)**
- [ ] Un `.gitignore` qui exclut `node_modules` et `dist` **(1 pt)**
- [ ] Un **historique de _commits_** qui montre le travail en cours. Gros MINIMUM, un _commit_ par cours **(1 pt)**

### JavaScript

- [ ] Le code est bien indenté, clair et sans erreur **(2 pts)**

### Médias

- [ ] Images converties en **WebP ou AVIF** et **dimensionnées** à leur taille d'affichage **(1 pt)**
- [ ] `loading="lazy"` sur les images non visibles au chargement **(1 pt)**
- [ ] Au moins **une vidéo** de **3 Mo ou moins** **(1 pt)**
- [ ] La vidéo est intégrée de l'une des façons suivantes : **(1 pt)**
  * Vidéo d'arrière-plan muette (`autoplay muted loop playsinline`), avec contenu superposé
  * Vidéo avec `controls` et un `poster`
  * Vidéo sans `controls`, contrôlée par programmation
- [ ] Médias classés dans `src/assets/` (`images/`, `videos/`, `audio/`) et nommés sans espace ni accent **(1 pt)**
- [ ] **Musique d'ambiance** contrôlée par programmation avec un bouton dans le header (jouer / muet) **(1 pt)**
- [ ] Au moins un **effet sonore** déclenché par une interaction (survol, clic, envoi du formulaire, etc.) **(1 pt)**
- [ ] Les médias qui ne viennent pas du jeu sont libres de droits, et la mention *projet étudiant* est dans le footer **(1 pt)**
- [ ] Chaque page pèse **5 Mo ou moins** au chargement **(1 pt)**

  ??? tip "Mesurer le poids d'une page"

      DevTools > Onglet **Réseau** (ou Network) : cocher **Désactiver le cache**, puis recharger la page.
     
      Le poids se lit en bas du panneau (ex. : _1.6 MB transferred_).

### Animation - GSAP

- [ ] Une **timeline** GSAP **(2 pts)**
- [ ] Au moins **deux animations** déclenchées ou pilotées par le défilement (ScrollTrigger) **(2 pts)**
- [ ] Une **animation SVG** (ex. : DrawSVG, MorphSVG, MotionPath, ou l'animation d'un élément SVG) **(2 pts)**
- [ ] Un des plugins suivants : SplitText, ScrambleTextPlugin, TextPlugin, Draggable, ScrollToPlugin **(1 pt)**
- [ ] Des animations fluides, au service du contenu, sans `markers` oubliés **(2 pts)**

### Interactivité et sauvegarde

- [ ] Le thème choisi par le visiteur (clair / sombre) est mémorisé avec `localStorage` **(1 pt)**
- [ ] Ce choix est **restauré sur chaque page** **(1 pt)**
- [ ] Formulaire stylé avec les composantes de DaisyUI **(1 pt)**
- [ ] Formulaire **EmailJS** qui envoie réellement un courriel **(1 pt)**
- [ ] Un message de succès ou d'erreur affiché au visiteur après l'envoi **(1 pt)**

### Touche supplémentaire

Vous devrez choisir **une** des options suivantes. L'important, c'est la qualité et la pertinence de son implémentation.

| Option | Ce que ça fait |
| --- | --- |
| **[`<model-viewer>`](https://modelviewer.dev/)** | Affichage de modèle 3D |
| **[Chart.js](https://www.chartjs.org/)** | Graphiques et statistiques |
| **[Barba](https://barba.js.org/)** | Améliore la transition entre les pages |
| **[Leaflet](https://leafletjs.com/)** | Cartes géographiques |
| **[PhotoSwipe](https://photoswipe.com/)** | Galerie d'images |

- [ ] Une option intégrée de façon pertinente **(2 pts)**

### Mise en page

- [ ] Deux thèmes DaisyUI : un clair et un sombre **(1 pt)**
- [ ] **Police(s)** installée(s) avec **Fontsource** (npm).<br>Aucune police chargée depuis Google Fonts ou via un CDN **(1 pt)**
- [ ] **Icônes** installées avec npm **(1 pt)**
  - **Lucide** ou librairie similaire (ex. : Hugeicons, Phosphor Icons, Heroicons)
- [ ] Structure `<header>`, `<main>`, `<footer>`, avec le même header (et sa navbar DaisyUI) et le même footer sur les trois pages **(1 pt)**
- [ ] Un indicateur visible de la **page active** dans la navbar **(1 pt)**
- [ ] Un `<title>` propre à chaque page **(1 pt)**
- [ ] Tout le contenu en **français**, avec `<html lang="fr">` **(1 pt)**
- [ ] Site **responsive** avec les breakpoints Tailwind : mobile, tablette, bureau **(2 pts)**
- [ ] **Bouton d'appel à l'action** vers la page du jeu (ex. : itch.io) **(1 pt)**
- [ ] Section **Contrôles** sur la page *Le jeu* **(1 pt)**
  - les commandes du jeu (touches, souris ou manette) présentées avec la composante `kbd` de DaisyUI

### Mise en ligne

- [ ] Site publié sur **GitHub Pages** **(1 pt)**
- [ ] Tous les liens entre les pages fonctionnent **en ligne** **(1 pt)**
- [ ] Aucune erreur dans la console **(1 pt)**

### Le `README.md`

- [ ] Contenu du readme **(1 pt)**
  - Nom du jeu
  - Lien du GitHub Pages

### Qualité

- [ ] Design soigné et cohérent d'une page à l'autre. Design cohérent au jeu **(2 pts)**

## Oraux et entrevues

Le cours 15 se déroule en deux temps.

### Oral

> 3 minutes ou moins

- Devant le groupe, chaque personne présente son site en ligne : 
  - Le choix du jeu
  - Les trois pages
  - Les animations
  - Les défis rencontrés et les solutions trouvées
  - Ce qui serait fait autrement si c'était à recommencer
  - La plus grande fierté du projet

- [ ] Préparer l'oral

### Entrevue individuelle 

> Environ 2 minutes

Répertoire GitHub ouvert sur son écran

- L'enseignant désigne, sur le moment, **n'importe quelle partie du code** : un fichier JavaScript, une animation GSAP, une partie du HTML, la configuration de Vite 🤷
- Expliquer **ce que fait** ce passage et **comment** il le fait
- Répondre à une question de **modification** : prédire l'effet d'un changement (retirer `scrub`, changer un `start`, inverser une condition…)

---

- [ ] **Se préparer à l'entrevue**<br>Relire **tout** son code, fichier par fichier, comme si quelqu'un d'autre l'avait écrit. Pour chaque bloc, se demander : *qu'est-ce que ça fait et qu'arriverait-il si je changeais cette valeur ?*

## Critères d'évaluation

| Partie | Points | Poids dans la note du projet |
| --- | :--: | :--: |
| **Le site** (cases des *Exigences techniques*) | /50 | **80 %** |
| **L'oral** | /5 | **5 %** |
| **L'entrevue** | /15 | **15 %** |

<!-- La note du projet se calcule ainsi : `(points du site × 1,6) + points de l'oral + points de l'entrevue`. Par exemple, 42/50 pour le site, 4/5 pour l'oral et 12/15 pour l'entrevue donnent `67 + 4 + 12 = 83 %`. -->

### L'oral

| Critère | Pts |
| --- | :--: |
| 3 minutes ou moins | 1 |
| Tous les points demandés sont abordés *(2 / 1 / 0)* | 2 |
| Présentation claire et fluide *(2 / 1 / 0)* | 2 |
| **Total** | **/5** |

### L'entrevue

| Critère | Pts |
| --- | :--: |
| Explication du passage désigné : ce qu'il fait et comment *(6 : complète et juste · 3 : partielle · 0 : impossible)* | 6 |
| Vocabulaire juste (noms des propriétés, méthodes, événements, plugins utilisés) | 3 |
| Effet d'une modification correctement prédit *(6 : juste et justifié · 3 : juste, sans justification · 0 : faux)* | 6 |
| **Total** | **/15** |

## Livrable

**La veille du cours 15, à 23 h 59**, dans le devoir **Projet final** sur Teams :

- [ ] Le **lien du répertoire GitHub** (public)
- [ ] Le **lien du site en ligne**
