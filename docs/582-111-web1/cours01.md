# Cours 1 | Bienvenue

<style>.md-nav .md-nav .md-nav { display: none; }</style>

*[HTML]: HyperText Markup Language
*[CSS]: Cascading Style Sheets
*[UX]: Expérience utilisateur (User eXperience)
*[UI]: Interface utilisateur (User Interface)
*[ANI]: Artificial Narrow Intelligence
*[AGI]: Artificial General Intelligence
*[ASI]: Artificial Super Intelligence
*[IA]: Intelligence Artificielle
*[LLM]: Large Language Model (ex: ChatGPT)
*[URL]: Uniform Resource Locator
*[DOM]: Document Object Model

*[CERN]: L’Organisation européenne pour la recherche nucléaire. Le plus grand centre de physique des particules du monde.
*[ARPANET]: Advanced Research Projects Agency Network

![](./assets/images/bienvenue.jpg){ .w-100 }

## Introduction

<div class="grid gap-lg" markdown>
![](./assets/images/trudeau.gif)

Présentations et plan de cours
</div>

## Ressources du collège

### Outils étudiants

* [:material-microsoft-office: Suite Microsoft 365](https://ccti.cmontmorency.qc.ca/rentree) : Word, Office, Excel, PowerPoint
* [:material-microsoft-teams: Teams](https://ccti.cmontmorency.qc.ca/rentree) : Cours, notes de cours, clavardage
* [:material-microsoft-outlook: Courriel](https://ccti.cmontmorency.qc.ca/rentree)
* [:material-wifi: Wifi](https://ccti.cmontmorency.qc.ca/rentree)
* [ColNET](https://www.cmontmorency.qc.ca/ColNET/etudiant/Messagesgeneraux/ColNET_procedure_connexion.pdf) : Bulletin, horaire, carte étudiante, messagerie médiévale 🤪.

### Soutien et aide

* [Soutien psychosocial](https://www.cmontmorency.qc.ca/etudiants/services-aux-etudiants/soutien-psychosocial/)
* [Service d’aide à l’apprentissage](https://www.cmontmorency.qc.ca/etudiants/services-aux-etudiants/aide-a-lapprentissage/presentation/)
* [Service d'aide financière](https://www.cmontmorency.qc.ca/etudiants/services-aux-etudiants/service-aide-financiere/presentation-du-service/)
* :fontawesome-regular-hand-point-right:{ .horizontal-anim-cos .valign-bottom } [Centre d’aide en intégration multimédia](https://www.cmontmorency.qc.ca/etudiants/services-aux-etudiants/aide-a-la-reussite/aide-techniques/centre-aide-integration-multimedia/) :fontawesome-regular-hand-point-left:{ .horizontal-anim .valign-bottom }

<!-- ## Un peu d'histoire

<div class="grid grid-1-2" markdown>
  ![](./exercices/timeline1/thumb.gif)

  <small>Ligne du temps ludique</small><br>
  **[La fabuleuse histoire de l'Internet](./exercices/timeline1/index.md){.stretched-link .back}**
</div> -->

## Le développement Web

![](./assets/images/devweb.jpg)

Le développement Web c’est ce qui permet de créer des **sites Web**, des **outils** ou des applications **accessibles depuis un navigateur**, peu importe l’appareil.

La notion plus classique du Web est composée des éléments suivants :

* **Site vitrine** (ex. : <https://tim-montmorency.com/>)
* **Blogue / Forum** (ex. : <https://www.reddit.com/>)
* **Commerce en ligne** (ex. : <https://www.simons.ca/>)
* **Réseaux sociaux** (ex. : <https://www.instagram.com/>)
* **Messagerie** (ex. : <https://discord.com/>)
* _et cætera_

Toutefois, le développement Web permet aussi de concevoir une surprenante panoplie d'usage. En voici quelques exemples :

<div class="grid grid-1-4" markdown>
![](./assets/images/domotique.jpg)

<div markdown>
**Tableaux de bord** (ex. : [Domotique](https://www.home-assistant.io/))
</div>
</div>

<div class="grid grid-1-4" markdown>
![](./assets/images/ifttt.jpg)

<div markdown>
**Automatisation** (ex. : [IFTTT](https://ifttt.com/) / [Zapier](https://zapier.com/))
</div>
</div>

<div class="grid grid-1-4" markdown>
![](./assets/images/combat-trials.png)

<div markdown>
**Jeux vidéos** (ex. : [itch.io](https://itch.io/games/platform-web))
</div>
</div>

<div class="grid grid-1-4" markdown>
![](./assets/images/place-des-arts.png)

<div markdown>
**Environnement interactif** (ex. : [Réservation - Place des Arts](https://www.placedesarts.com/programmation))
</div>
</div>

<div class="grid grid-1-4" markdown>
![](./assets/images/collaboration.webp)

<div markdown>
**Outils collaboratifs**  (ex. : [Wooclap](https://www.wooclap.com/fr/) / [Figma](https://www.figma.com/))
</div>
</div>

<div class="grid grid-1-4" markdown>
![](./assets/images/data-visualisation.png)

<div markdown>
**Visualisation de données**  (ex. : [World Economic Forum](https://intelligence.weforum.org/topics/a1Gb0000000pTDREA2/key-issues/a1Gb00000017LD8EAM))
</div>
</div>

<div class="grid grid-1-4" markdown>
![](./assets/images/llm.png)

<div markdown>
**Assistants virtuels** :  (ex. : [ChatGPT](https://chatgpt.com/))
</div>
</div>

## Comment ça marche ?

Le développement Web est généralement divisé en deux grandes parties : le **front-end** (ce que voit l’utilisateur) et le **back-end** (la logique côté serveur).

Voici les trois langages principaux utilisés pour développer la partie **front-end** :

* **HTML** : définit la structure et le contenu des pages (ex. : titres, paragraphes, images)
* **CSS** : gère la présentation visuelle (ex. : couleurs, mise en page, typographie)
* **JavaScript** : rend la page interactive et dynamique (ex. : menus déroulants, formulaires réactifs, animations)

Voici un exemple simple de code HTML :

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Web 1</title>
  </head>
  <body>
    <h1>Bienvenue en Web 1</h1>
    <p>Ok bye !</p>
  </body>
</html>
```

!!! question "Bon qu'est-ce que je regarde ?"
    1. J’observe des mots entourés des caractères « plus petit que » (`<`) et « plus grand que » (`>`). C'est ce qu'on appelle des balises HTML.
    1. J’observe aussi une certaine **indentation** (des espaces au début des lignes). C'est fait pour rendre le code plus lisible.
    1. Je reconnais du **contenu textuel** : « Web 1 », « Bienvenue en Web 1 » et « Ok bye ! ».

## Outils

### Éditeur de code

![](./assets/images/vscode.png){ data-zoom-image }

Techniquement, on peut programmer un site Web complet avec **Notepad**, mais ce serait particulièrement innéficace.

Un peu comme **Microsoft Word** sert à la rédaction de texte, **[Visual Studio Code](https://code.visualstudio.com/)** (aussi appelé VSCode) est conçu spécifiquement pour programmer dans différents langages de programmation. C'est d'ailleurs l'application qui sera utilisée dans le cadre du cours et de la technique.

!!! example "Tant qu'à y être, créons notre première page Web !"
    1. Ouvrir l'application VSCode
    1. Créer une nouvelle page et nommez la `index.html`
    1. Sauvegarder sur le bureau
    1. Dans la page, inscrire le caractère `!` (point d'exclamation) puis appuyer sur ++enter++
      ![](./assets/images/emmet.png)
    1. Entre les balises `<body>` et `</body>`, inscrire n'importe quoi.
    1. Sauvegarder
    1. Sur le bureau de votre ordinateur, double-cliquer sur le fichier `index.html`.

### Navigateur

Les navigateurs principaux : **Chrome**, Safari, Edge et Firefox

![StatCounter](./assets/images/StatCounter-browser-CA-monthly.png){ data-zoom-image }

#### Inspecteur

![Onglet élément de l'inspecteur](./assets/images/inspector-elements.png){ data-zoom-image }

L'inspecteur (ou _DevTools_) est un outil qui sert à analyser et déboguer une page Web.

On y accède soit en appuyant sur la touche ++f12++, soit en faisant un clic droit et en choisissant Inspecter.

!!! example "Essayons ensemble l'inspecteur 🕵"
    1. Ouvrir la page Web créée plus tôt
    1. Ouvrir l'inspecteur et observer le contenu de l'onglet « Éléments »
    1. Trouver le moyen de changer le contenu du HTML

    ---
    
    **🧑‍🏫 Démo du prof**

    Essayons l'inspecteur sur le site <https://www.banq.qc.ca/> et observez bien ce qu'on peut réaliser avec !
    <!-- Lors de la démo, on montre comment en modifiant le DOM dans l'inspecteur, on peu bypasser le popup qui bloque la page. -->

### Raccourcis

* Naviguer une page Web à l’aide du clavier : ++tab++
* Rouvrir un onglet fermé : ++ctrl+shift+t++
* Rechargement forcé (hard reload) sans utiliser le cache (mémoire temporaire du navigateur) : ++ctrl+shift+r++

## Vocabulaire et concepts Web

<div class="grid grid-1-1" markdown>
![](./assets/images/code.gif)

<div markdown>
**Open source**
<p class="sm">Application dont la programmation est accessible au public. Le code peut être consulté, modifié et redistribué. L'inverse d'une application propriétaire.</p>
</div>
</div>

<div class="grid grid-1-1" markdown>
![](./assets/images/responsive.gif)

<div markdown>
**Responsive**
<p class="sm">Mise en page qui s’adapte à la taille de l’écran</p>
</div>
</div>

| Terme | Description |
|-------|-------------|
| **Header**                    | En-tête d’une page Web, généralement fixe, contenant le logo, le menu de navigation et parfois un bouton de recherche. |
| **Footer**                    | Pied de page contenant des liens secondaires, des infos légales, les coordonnées ou les réseaux sociaux. |
| **Navigation**                | Ensemble de liens qui permet de se déplacer entre les différentes pages ou sections d’un site. |
| **Accordéon**                 | Composant qui permet d’afficher ou masquer du contenu en cliquant sur un titre ou une section. |
| **Breadcrumb (fil d’Ariane)** | Chemin de navigation qui montre à l’utilisateur sa position dans la structure du site (ex. : Accueil > Cours > Chapitre 1). |
| **Carte (Card)**              | Bloc visuel regroupant une image, un titre, un résumé et une action (souvent cliquable). Très utilisé pour des listes de contenus. |
| **Carousel / Slideshow**      | Composant qui affiche plusieurs éléments (souvent des images) un à un, avec un défilement automatique ou manuel. |
| **CTA (Call to Action)**      | Élément (souvent un bouton) incitant clairement l’utilisateur à faire une action précise (ex. : "S’inscrire", "Acheter"). |
| **Hero**                      | Grande bannière en haut d’une page, souvent visuelle, servant à capter l’attention avec un message fort et un CTA. |
| **Modal / Popup / Lightbox**  | Fenêtre flottante qui s’ouvre au-dessus du contenu, pour afficher des informations, des formulaires ou des images en grand (zoom galerie). |
| **Onglets (Tabs)**            | Composant permettant de naviguer entre plusieurs sections de contenu sans quitter la page. |
| **Placeholders**              | Texte gris dans un champ de formulaire qui donne un exemple de ce que l’utilisateur doit écrire. |
| **Toasts**                    | Petites notifications temporaires qui apparaissent à l’écran pour informer (ex. : "Message envoyé"). |
| **Tooltips / Popovers**       | Bulles d’information contextuelle qui apparaissent lorsqu’on survole ou clique sur un élément. |

## Expérience utilisateur

![](./assets/images/barman.gif){ .w-100 }

L’expérience utilisateur (UX) c'est ce qui désigne la qualité de l’interaction d'une personne avec un produit ou un système.

La qualité se mesure en fonction de son **efficacité**, de son **efficience** et de la **satisfaction**[^nng].

[^nng]: [The Definition of User Experience (UX)](https://www.nngroup.com/articles/definition-user-experience/)

!!! question "Efficacité et efficience, c'est pas la même chose ?"

    Non 😜

    * **Efficacité** : Est-ce que l’utilisateur atteint son objectif ?
    * **Efficience** : Combien d’efforts ou de temps ça lui prend pour y arriver ?

    Prenons l'exemple d'arroser un jardin avec un toyeau d'arrosage ou avec un verre d'eau. Les deux sont efficace, mais il y en a un plus efficient que l'autre. 

### 10 principes UX

Voici la liste des [10 heuristiques d’utilisabilité](https://www.nngroup.com/articles/ten-usability-heuristics/) de Jakob Nielsen.

<!-- Résumé en image https://miro.medium.com/v2/resize:fit:4800/format:webp/1*QhwEGRQWg_yv_FTrJnsxBQ.png -->

#### 1️⃣ Visibilité de l’état du système

Le système doit toujours informer l’utilisateur de ce qui se passe.

=== "Bof"
    <iframe class="aspect-16-9" height="300" style="width: 100%;" scrolling="no" title="Web 1 - Heuristique UX 1 Bof" src="https://codepen.io/tim-momo/embed/ByopqGP?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

=== "Bon"
    <iframe class="aspect-16-9" height="300" style="width: 100%;" scrolling="no" title="Web 1 - Heuristique UX 1 Bon" src="https://codepen.io/tim-momo/embed/empgPQY?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<!-- Exemple : Lors d’un paiement en ligne, un message « Traitement en cours… » avec une animation de chargement indique que l’action est en cours. -->

#### 2️⃣ Correspondance entre le système et le monde réel

L’interface doit utiliser un langage et des concepts familiers aux utilisateurs.

=== "Bof"
    <iframe class="aspect-16-9" height="300" style="width: 100%;" scrolling="no" title="Web 1 - Heuristique UX 2 Bof" src="https://codepen.io/tim-momo/embed/bNVgmzm?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

=== "Bon"
    <iframe class="aspect-16-9" height="300" style="width: 100%;" scrolling="no" title="Web 1 - Heuristique UX 2 Bon" src="https://codepen.io/tim-momo/embed/raOjqRV?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<!-- Exemple : Une icône de panier 🛒 pour symboliser les achats, ou un bouton « Télécharger votre CV » sur un site d’emploi. -->

#### 3️⃣ Contrôle et liberté de l’utilisateur

Les utilisateurs doivent pouvoir annuler ou corriger facilement leurs actions.

=== "Bof"
    <iframe class="aspect-16-9" height="300" style="width: 100%;" scrolling="no" title="Web 1 - Heuristique UX 3 Bof" src="https://codepen.io/tim-momo/embed/NPGdEKo?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>
=== "Bon"
    <iframe class="aspect-16-9" height="300" style="width: 100%;" scrolling="no" title="Web 1 - Heuristique UX 3 Bon" src="https://codepen.io/tim-momo/embed/QwjdJWR?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<!-- Exemple : Un lien « Annuler » ou « Retour à la page précédente » dans un formulaire ou une configuration. -->

#### 4️⃣ Cohérence et standards

Le design doit suivre des conventions reconnues afin que les utilisateurs n’aient pas à se poser de question ou à apprendre de nouveaux concepts.

=== "Bof"
    <iframe height="300" style="width: 100%;" scrolling="no" title="Web 1 - Heuristique UX 4 Bof" src="https://codepen.io/tim-momo/embed/ogjBQBp?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>
=== "Bon"
    <iframe height="300" style="width: 100%;" scrolling="no" title="Web 1 - Heuristique UX 4 Bon" src="https://codepen.io/tim-momo/embed/XJmpyap?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

#### 5️⃣ Prévention des erreurs

Le design doit minimiser les risques d’erreurs en guidant correctement l’utilisateur.

=== "Bof"
    <iframe class="aspect-16-9" height="300" style="width: 100%;" scrolling="no" title="Web 1 - Heuristique UX 5 Bof" src="https://codepen.io/tim-momo/embed/VYvPVxB?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>
=== "Bon"
    <iframe class="aspect-16-9" height="300" style="width: 100%;" scrolling="no" title="Web 1 - Heuristique UX 5 Bon" src="https://codepen.io/tim-momo/embed/QwjdJxb?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<!-- Exemple : Un champ de formulaire qui vérifie en temps réel si l’adresse courriel est au bon format avant l’envoi. -->

#### 6️⃣ Reconnaissance plutôt que rappel

Les interfaces doivent minimiser la mémoire nécessaire de l'utilisateur. Prioriser la reconnaissance plutôt que le rappel.

❌ **Quelle est la capitale du Japon ?**

✅ **Est-ce que Tokyo est la capitale du Japon ?**

=== "Bof"
    <iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="Web 1 - Heuristique UX 6 Bof" src="https://codepen.io/tim-momo/embed/WbQRYLQ?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>
=== "Bon"
    <iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="Web 1 - Heuristique UX 6 Bon" src="https://codepen.io/tim-momo/embed/YPyNRBR?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<!-- Exemple : Un champ de recherche avec suggestions automatiques (auto-complétion). -->

#### 7️⃣ Flexibilité et efficacité

Le système devrait convenir autant aux débutants qu’aux utilisateurs expérimentés.

L'exemple parfait ici est l'existence de l'inspecteur dans le navigateur.

=== "Débutant"
    ![](./assets/images/browser-simple.png)
=== "Avancé"
    ![](./assets/images/browser-advanced.png)
<!-- Exemple : Des filtres personnalisables dans une boutique en ligne, ou des raccourcis clavier dans une application Web. -->

#### 8️⃣ Design esthétique et minimaliste

L’interface ne doit pas être surchargée. Chaque élément visuel ou textuel doit servir un objectif clair.

> Less is more

=== "Bof"
    <iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="Web 1 - Heuristique UX 8 Bof" src="https://codepen.io/tim-momo/embed/jEbyQjr?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>
=== "Bon"
    <iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="Web 1 - Heuristique UX 8 Bof" src="https://codepen.io/tim-momo/embed/ZYbLZXr?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<!-- Exemple : Une page de destination simple avec un seul bouton d’appel à l’action, sans distractions inutiles. -->

#### 9️⃣ Aider à reconnaître, diagnostiquer et corriger les erreurs

Les messages d’erreur doivent être compréhensibles, indiquer la nature du problème et suggérer une solution.

=== "Bof"
    <iframe class="aspect-16-9" height="300" style="width: 100%;" scrolling="no" title="Web 1 - Heuristique UX 9 Bof" src="https://codepen.io/tim-momo/embed/yyYgrEv?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>
=== "Bon"
    <iframe class="aspect-16-9" height="300" style="width: 100%;" scrolling="no" title="Web 1 - Heuristique UX 9 Bon" src="https://codepen.io/tim-momo/embed/EaVZJpO?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<!-- Exemple : « Le mot de passe doit contenir au moins 8 caractères, une majuscule et un chiffre », au lieu de « Erreur 001 ». -->

#### 🔟 Aide et documentation

Même si le système est simple, une aide doit être accessible pour les utilisateurs qui en ont besoin.

<iframe class="aspect-16-9" height="300" style="width: 100%;" scrolling="no" title="Web 1 - Heuristique UX 10 Bon" src="https://codepen.io/tim-momo/embed/zxvNXVe?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/zxvNXVe">
  Web 1 - Heuristique UX 10 Bon</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<!-- Exemple : Une section FAQ, un bouton d’aide ou une bulle contextuelle « Besoin d’aide ? » sur un formulaire complexe. -->

[STOP]

> L’expérience utilisateur regroupe tous les aspects de l’interaction entre un utilisateur final et une entreprise, ses services et ses produits. Pour offrir une expérience exemplaire, il ne suffit pas de répondre aux besoins de l’utilisateur : il faut le faire avec simplicité, fluidité et plaisir. Une bonne UX nécessite une collaboration entre plusieurs disciplines (ingénierie, marketing, design) pour créer un tout cohérent.[^nng]

### Les 7 facettes d'une UX de Peter Morville

| Facette                       | Définition |
|-------------------------------|------------|
| **Utile** (_useful_)          | Le contenu ou la fonctionnalité répond à un besoin réel. |
| **Utilisable** (_usable_)     | Le produit est facile à utiliser, sans effort inutile. |
| **Attractif** (_desirable_)   | L’interface est attrayante et suscite des émotions positives. |
| **Trouvable** (_findable_)    | L’information est facile à localiser et à parcourir. |
| **Accessible** (_accessible_) | Tout le monde peut l’utiliser, y compris les personnes en situation de handicap. |
| **Crédible** (_credible_)     | Le contenu et l’interface inspirent confiance. |
| **Précieux** (_valuable_)     | Le produit crée de la valeur pour l’utilisateur **et** pour l’organisation. |

### Draw.io

![draw-io](https://github.com/user-attachments/assets/2be5053f-6e20-4630-90a4-e72e939a31e6)

Draw.io est un outil en ligne de création de diagrammes et de schémas. Il permet aux utilisateurs de concevoir des diagrammes de flux, des organigrammes, des diagrammes de réseau, des schémas de base de données, des maquettes d'interface utilisateur, des plans d'architecture et bien d'autres types de graphiques visuels.

L'outil offre une interface conviviale qui facilite la création de diagrammes professionnels, même pour les personnes qui ne sont pas des concepteurs expérimentés.

[Draw.io](https://draw.io)

## Lexique

* **HTML** : Langage de balisage pour structurer le contenu Web
* **CSS** : Langage de style pour la présentation visuelle
* **UX** : Expérience utilisateur (User eXperience)
* **UI** : Interface utilisateur (User Interface)
* **Frontend** : Partie visible d'une application Web (côté client)
* **Backend** : Partie serveur d'une application (côté serveur)
* **Responsive** : Mise en forme qui s'adapte à tous les écrans

## Composantes d’une page Web et interactivité

Web components : <https://blog.kamathrohan.com/atomic-design-methodology-for-building-design-systems-f912cf714f53>

/autres/composantes-web.html

## Métiers du Web

| Métier                     | Description                                    | Compétences clés |
|----------------------------|------------------------------------------------|------------------|
| Développeur Frontend       | Interface utilisateur (HTML/CSS/JS)            | HTML, CSS, JavaScript, React/Vue |
| Développeur Backend        | Serveurs, bases de données, API, sécurité      | PHP, Python, Node.js, bases de données |
| Intégrateur Web            | Maquettes graphiques → code HTML/CSS           | HTML, CSS, responsive design |
| Designer UX/UI             | Expérience utilisateur et interface graphique  | Figma, Adobe XD, recherche utilisateur |
| Gestionnaire de projet Web | Coordination des équipes et ressources         | Gestion de projet, communication |

**Autres métiers connexes** : SEO, rédaction Web, analyse Web, DevOps, sécurité Web.

### Un Web à plusieurs niveaux

![Niveaux du Web](./assets/images/clear-deep-dark.webp)

#### Web surfacique

C'est la partie d'Internet accessible à tous via les moteurs de recherche classiques comme <google.ca>, le site du collège ou <lapresse.ca>.

#### Web profond

Partie du Web qui n'est pas accessible aux internautes au moyen des moteurs de recherche usuels[^webprofond]. Cela inclut les bases de données, les intranets ou les contenus protégés par mot de passe (ex. : Netflix, Gmail, AccèsD). Cette portion représente la majorité du Web. Certains estiment qu'elle en constitue jusqu'à 95%[^avast] du Web !

[^webprofond]: [Définition de la toile profonde | OQLF](https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26544511/toile-profonde)
[^avast]: [Avast – Dark web: facts and myths](https://www.avast.com/c-dark-web-facts)

#### Web caché

Partie du Web invisible à laquelle on peut accéder en utilisant des navigateurs Web spéciaux et des logiciels permettant le cryptage des communications[^webcache].

[^webcache]: [Définition du Web caché | OQLF](https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26557092/web-cache)
