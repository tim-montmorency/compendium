# Cours 8 | Responsive

[STOP]

![](./assets/img/formats-banner.webp){.w-100}

## Un message, plusieurs supports

En design graphique, une création n'existe presque jamais dans un seul contexte. Une même campagne peut vivre sur une affiche imprimée, un story Instagram, un bandeau Google, un écran de présentation et une carte de visite — **en même temps**.

> Le message est le même. Le support change tout.

Le défi : adapter le visuel **sans diluer le message**, en respectant les contraintes propres à chaque format (dimensions, lisibilité, résolution, comportement de l'utilisateur).

!!! example "Étude de cas : une affiche de festival"

    Un festival de musique doit communiquer sa programmation. Son équipe prépare :
    
    - Une affiche 24×36 po (impression)
    - Un bandeau numérique 970×250 px (web)
    - Une story Instagram 1080×1920 px (mobile)
    - Un post Facebook 1200×628 px (fil d'actualité)

    Ce n'est pas la même information présentée de la même façon. C'est la même **intention** déclinée selon les **contraintes** de chaque support.

## Les formats courants

### Impression (_Print_)

![](./assets/img/print-formats.png){data-zoom-image .w-75}

Les formats physiques les plus communs en design graphique :

| Format | Dimensions | Usage typique |
| --- | --- | --- |
| Lettre | 8,5 × 11 po | Flyer, affiche intérieure |
| Tabloïd | 11 × 17 po | Affiche, programme |
| A3 | 297 × 420 mm | Affiche, dépliant |
| A4 | 210 × 297 mm | Brochure, flyer |
| Grand format | Variable | Bannière, bâche, mupi |

!!! warning "L'impression, c'est du CMYK et du DPI"

    - **DPI** (_Dots Per Inch_) : résolution en points par pouce. L'impression nécessite au minimum **300 DPI**. Les écrans tournent à 72–96 DPI. Exporter une image d'écran pour l'imprimer = image floue 🙁
    - **CMYK** : le mode colorimétrique de l'imprimerie. Les couleurs vives en RGB peuvent paraître plus ternes une fois imprimées.

#### Le fond perdu (_Bleed_)

![](./assets/img/bleed-diagram.png){data-zoom-image .w-50}

Quand on imprime et qu'on rogne le papier, la lame de coupe n'est jamais parfaite à 0,1 mm près. Si ton fond s'arrête exactement au bord, tu risques d'avoir une mince bande blanche sur le bord de l'impression.

La solution : **étendre le fond de 3 mm au-delà du bord** de l'affiche.

![](./assets/img/bleed-safe-zone.png){data-zoom-image .w-50}

- **Zone de sécurité** : les éléments importants (texte, logo) doivent rester à **au moins 5 mm** des bords.
- **Fond perdu** : l'arrière-plan doit dépasser de **3 mm** de chaque côté.

!!! info "Dans Figma"

    Figma ne gère pas nativement le fond perdu. L'approche : agrandir le _frame_ de 6 mm (3 mm × 2) dans chaque dimension, et travailler le design à l'intérieur de la zone de sécurité.

### Formats numériques

#### Réseaux sociaux

![](./assets/img/social-media-sizes.png){data-zoom-image}

Les formats bougent souvent ! Voici les formats les plus stables :

| Plateforme | Format | Dimensions |
| --- | --- | --- |
| Instagram – Post carré | 1:1 | 1080 × 1080 px |
| Instagram – Story / Reels | 9:16 | 1080 × 1920 px |
| Facebook – Post paysage | 1.91:1 | 1200 × 628 px |
| LinkedIn – Post | 1.91:1 | 1200 × 628 px |
| TikTok – Vidéo | 9:16 | 1080 × 1920 px |
| Pinterest – Pin vertical | 2:3 | 1000 × 1500 px |

!!! tip "Référence à jour"

    Les formats changent régulièrement. Consultez [sproutsocial.com/insights/social-media-image-sizes-guide](https://sproutsocial.com/insights/social-media-image-sizes-guide/) avant un vrai projet.

#### Formats publicitaires Web (_Display_)

![](./assets/img/display-ad-sizes.png){data-zoom-image .w-75}

Les formats publicitaires sont standardisés par l'IAB (_Interactive Advertising Bureau_). Les plus courants :

| Nom | Dimensions | Usage |
| --- | --- | --- |
| Leaderboard | 728 × 90 px | Haut de page |
| Medium Rectangle | 300 × 250 px | Sidebar, contenu |
| Large Rectangle | 336 × 280 px | Contenu |
| Half Page | 300 × 600 px | Sidebar premium |
| Billboard | 970 × 250 px | Haut de page large |
| Mobile Banner | 320 × 50 px | Mobile |

!!! note "Pour Meta Ads (Facebook / Instagram)"

    Meta recommande le format carré 1080 × 1080 px pour les publicités image, car il s'adapte à la fois au fil et à la story (avec recadrage automatique).

### Présentation (_Slides_)

| Logiciel | Format standard |
| --- | --- |
| PowerPoint / Google Slides | 16:9 → 1920 × 1080 px |
| Figma (présentation) | Libre, souvent 1920 × 1080 px |

## Adapter un design : ce qui change

Quand on décline un design sur plusieurs formats, **tout** peut être à revoir :

**La hiérarchie**  
Sur une affiche, on peut avoir 3 niveaux d'info (titre, détails, CTA). Sur un bannière 728 × 90, on n'a souvent de la place que pour **un seul message**.

**La typographie**  
Une fonte à 14 px lisible sur desktop devient illisible sur mobile ou en impression. Taille minimale pratique : 16 px à l'écran, 9 pt en impression.

**Le cadrage et la composition**  
Un visuel centré sur une affiche peut devenir mal cadré dans un format vertical 9:16. Prévoir des marges de sécurité intelligentes dès le début.

**Le contenu**  
Moins de place = **moins d'information**. Il faut apprendre à couper sans trahir le message. Qu'est-ce qui est vraiment essentiel ?

!!! example "Règle pratique ✂️"

    Sur une affiche : titre + sous-titre + 3 informations clés + CTA.  
    Sur une story : titre + CTA.  
    Sur un bandeau 728 × 90 : **une seule phrase + logo**.

## _Auto Layout_ : concevoir pour l'adaptabilité

![](./assets/img/auto-layout-intro.gif){.w-100}

_Auto Layout_ dans Figma permet de créer des composants **vivants** : ils s'adaptent à leur contenu et à leur contenant.  

C'est l'équivalent du **Flexbox** en CSS.

### Horizontal vs. Vertical

![](./assets/img/auto-layout-direction.png){data-zoom-image .w-50}

Un _Auto Layout_ peut s'organiser en **ligne** (horizontal) ou en **colonne** (vertical). Les deux peuvent être imbriqués pour créer des grilles complexes.

### Padding et espacement

![](./assets/img/auto-layout-spacing.png){data-zoom-image .w-50}

- **Padding** : espace intérieur entre le contenu et les bords du _frame_.
- **Gap** (_spacing between items_) : espace entre les éléments enfants.

### Le trio magique : Hug / Fill / Fixed

![](./assets/img/hug-fill-fixed.png){data-zoom-image}

C'est ici que ça devient puissant :

| Mode | Description | Quand l'utiliser |
| --- | --- | --- |
| **Hug** | Le _frame_ se colle au contenu | Bouton, étiquette, badge |
| **Fill** | L'élément remplit l'espace disponible | Colonne flexible, fond |
| **Fixed** | Taille fixe, peu importe le contenu | Image, icône, bloc précis |

!!! example "Exemple classique : un bouton"

    Un bouton bien fait :
    - Le texte est en **Fixed** (taille précise)
    - Le _frame_ du bouton est en **Hug** (s'adapte au texte)
    - Le bouton dans un conteneur est en **Fill** (prend la largeur disponible)
    
    Résultat : changez le texte du bouton, le bouton se redimensionne tout seul 🪄

### _Auto Layout_ imbriqué (_Nested_)

![](./assets/img/nested-auto-layout.png){data-zoom-image .w-75}

On peut imbriquer des _frames_ Auto Layout pour créer des grilles et des layouts complexes.

> Exemple : une liste de cartes (colonnes horizontales) contenant chacune une image, un titre et un bouton (colonne verticale).

!!! tip "Raccourci"

    ++shift+a++ : ajouter l'Auto Layout à une sélection

## Responsive et points de rupture (_Breakpoints_)

![](./assets/img/responsive-breakpoints.png){data-zoom-image .w-75}

Sur le web, un design doit s'adapter à plusieurs tailles d'écran. On définit des **points de rupture** (_breakpoints_) là où la mise en page change.

Les points de rupture les plus courants (en px) :

| Taille | Largeur |
| --- | --- |
| Mobile | < 768 px |
| Tablette | 768 – 1024 px |
| Desktop | > 1024 px |
| Large desktop | > 1280 px |

### Dans Figma : simuler le responsive

Pour représenter les déclinaisons responsive dans Figma, on crée **plusieurs _frames_** côte à côte — une par taille d'écran — avec les mêmes composants réorganisés.

![](./assets/img/responsive-figma-frames.png){data-zoom-image}

!!! info "Figma Sites"

    Figma Sites est une fonctionnalité qui permet de publier un design directement en site Web réel, avec une gestion des _breakpoints_ intégrée.

    <iframe class="aspect-16-9 w-75 center" src="https://www.youtube.com/embed/Wqvia5z1les" title="Figma Sites" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Composants (_Components_)

![](./assets/img/components-figma.png){data-zoom-image .w-75}

Les composants permettent de créer des éléments réutilisables. Modifier le composant principal met à jour toutes ses instances automatiquement.

C'est essentiel pour les déclinaisons : **un seul bouton, une seule carte** → décliné sur 10 écrans, modifiable en un clic.

- Créer un composant : ++ctrl+alt+k++ (Windows) / ++cmd+opt+k++ (Mac)
- L'icône des composants est un losange ◆

!!! tip "Bonne pratique"

    Regroupez tous vos composants sur une page dédiée « 🧩 Composants » dans votre fichier Figma.

## Figma

### Export pour l'impression

Pour exporter un fichier prêt pour l'impression :

1. Sélectionner le _frame_
2. Export → **PDF**
3. S'assurer que les dimensions correspondent à la taille physique souhaitée

!!! warning "Figma travaille en pixels, l'impression en pouces/mm"

    Pour une affiche 8,5 × 11 po à 300 DPI :  
    8,5 × 300 = **2550 px** de large  
    11 × 300 = **3300 px** de haut

### Export pour le web

- Formats recommandés : **PNG** (transparence), **JPG** (photo, fond opaque), **SVG** (vectoriel, logo)
- Activer l'option **2×** pour les écrans Retina/HiDPI

## Exercices

<div class="grid grid-1-2" markdown>
  ![](./activite/exercice/declination/prev.png)

  <small>Exercice - Figma</small><br>
  **[Déclinaison de formats](./activite/exercice/declination/index.md){.stretched-link .back}**
</div>

<div class="grid grid-1-2" markdown>
  ![](./activite/exercice/bouton-autolayout/prev.png)

  <small>Exercice - Figma</small><br>
  **[Bouton Auto Layout](./activite/exercice/bouton-autolayout/index.md){.stretched-link .back}**
</div>

## Devoir

<div class="grid grid-1-2" markdown>
  ![](./activite/devoir/declination/prev.jpg)

  <small>Devoir - Figma</small><br>
  **[Affiche déclinée](./activite/devoir/declination/index.md){.stretched-link .back}**
</div>