# Projet intégrateur: Solarix

**582-211-MO** : Web 2 | Session H2026 <br>
**Pondération** : 55 points<br>
**Remise de la planification** : cours 11 (20 ou 22 avril)<br>
**Remise finale** : cours 15 (11 ou 14 mai)<br>



## Mise en contexte

*Solarix* est un jeu de rôle fictif à l'esthétique *Solarpunk* : un univers où technologie et nature coexistent harmonieusement. Votre mandat : intégrer le **tableau de bord du joueur** de ce jeu à partir d'une maquette fournie.

Vous recevez :

- La maquette Figma (version desktop et mobile)
- Un canevas de départ (fichiers HTML et JavaScript fournis)

Votre travail consiste à **structurer le HTML et écrire tout le CSS** pour que l'interface soit fidèle à la maquette, fluide, responsive et accessible.



## Objectifs d'apprentissage ciblés

- Assembler une interface Web fluide à partir d'une maquette
- Adapter l'affichage à différentes résolutions d'écran (approche **mobile first**)
- Produire un code CSS lisible, maintenable et bien documenté
- Utiliser l'intelligence artificielle comme outil professionnel de façon critique et réfléchie



## Description de l'interface à intégrer

L'interface comprend **une vue principale** : le tableau de bord du joueur.

### Composants à intégrer

| Composant | Description |
|---|---|
| Barre de navigation latérale | Avatar, nom du personnage, liens de navigation (desktop) / barre de navigation fixée en bas (mobile) |
| Carte de profil | Avatar, nom, niveau, rang, barre de progression XP |
| ⭐ Zone de stats globales  | 4 statistiques clés (quêtes terminées, temps de jeu, alliés, insignes) |
| Cartes de quêtes récentes | 3 cartes avec image, titre, description, statut et récompenses |

> ⭐ **Zone libre** : La zone de stats globales est la section que vous devez **concevoir vous-même**. Le contenu est fourni (les 4 statistiques et leurs valeurs), mais la mise en page et le traitement visuel sont libres. Votre conception doit demeurer cohérente avec le système visuel de la maquette fournie. 

Voici le contenu de la ⭐**zone libre** à intégrer :

- Quêtes terminées : 142
- Temps de jeu : 1204h
- Alliés : 38
- Insignes : 12



## Exigences techniques

### HTML

- Structure sémantique rigoureuse (`header`, `nav`, `main`, `section`, `article`, etc.)
- Respect de la hiérarchie des titres
- Attributs d'accessibilité (`alt`, `aria-label`, `aria-current`, etc.)
- Code propre et lisible : indentation, sections séparées clairement par des commentaires

### CSS

- Approche **mobile first** obligatoire
- **Flexbox** obligatoire pour la mise en page des composants
- Utilisation judicieuse de **media queries** et/ou de **container queries** selon le contexte :
  - Utiliser les **media queries** pour les changements de disposition globale (ex. : sidebar → bottom nav)
  - Utiliser les **container queries** pour les composants qui doivent s'adapter à leur conteneur plutôt qu'à la fenêtre
- **Variables CSS** pour les couleurs, espacements et typographie
- Faire une version *mode sombre (dark mode)* en modifiant uniquement les variables CSS et en utilisant les requêtes média de préférence de thème de l'utilisateur
- Nomenclature **BEM** appliquée par composant défini (pas nécessairement partout, mais de façon cohérente et justifiée)
- Noms de classes, identifiants et variables CSS rédigés en **anglais**
- Code annoté via des commentaires CSS


#### Animations et transitions CSS

- Les consignes pour les animations et transitions seront données dans les prochaines semaines. Elles devront être réalisées en CSS et respecter les critères suivants :
  - Pertinentes et subtiles : elles doivent améliorer l'expérience utilisateur sans être distrayantes
  - Performantes : éviter les propriétés qui causent des ralentissements (ex. : `box-shadow`, `filter`)
  - Accessibles : fournir une alternative statique pour les utilisateurs qui préfèrent réduire les animations (via `prefers-reduced-motion`)

### Responsive

- Trois points de rupture minimum : mobile, tablette, desktop
- La disposition doit être fidèle à la maquette fournie à chaque résolution

### Accessibilité

- Respect des critères WCAG de base (contraste, focus visible, tailles de cible)
- Navigation possible au clavier
- Audit obligatoire avec Lighthouse ou axe DevTools (voir journal de bord, semaine 4)
- Version *mode sombre (dark mode)* pour respecter les préférence de thème de l'utilisateur


## Politique d'utilisation de l'intelligence artificielle

Vous pourrez utiliser des outils d'IA pour vous assister dans ce projet, *EXCEPTÉ dans la phase de planification (semaine 1) où l'utilisation de l'IA est strictement interdite*. Pour les autres phases, voici les règles à suivre :

**Non autorisé :**

- Utiliser l'IA pour générer du code sans le comprendre ou le modifier
- Se contenter de copier-coller du code généré sans jugement critique
- Utiliser l'IA pour faire le travail à votre place

**Autorisé :**

- Poser des questions, analyser des solutions, comparer des approches
- Utiliser l'IA pour déboguer, optimiser ou améliorer votre code
- S'en servir pour explorer des solutions alternatives

!!! warning
    Vous devez vous en tenir strictement aux techniques que nous avons vues en classe. L'utilisation de techniques avancées non vues en classe (ex. : CSS Grid, JavaScript, frameworks CSS) même si elles sont suggérées par une IA, n'est pas autorisée et peut entraîner une pénalité.

**Toujours obligatoire, peu importe l'outil utilisé :**

- *Comprendre* chaque ligne de code remise
- Être *capable de l'expliquer et de le justifier* à l'oral
- En assurer la *qualité*, la *cohérence* et l'*accessibilité* du code
- En assurer la *réutilisabilité* et la *flexibilité* des composants
- *Documenter au fur et à mesure l'utilisation de l'IA* dans le journal de bord : noimmer l'outil IA et ta requête exacte (ton prompt)

!!! danger Important sur la documentation de tes prompts
    Tout contenu généré par une IA doit être cité en mentionnant le nom de l'outil IA et ta requête (ton prompt) utilisée. Ne pas le mentionner constitue du *plagiat*.



## Structure du projet et livrables

Le projet se déroule sur **4 semaines** avec un livrable par semaine.

---

### Semaine 1: Planification | 13 au 19 avril

> 10 points (10% de la note finale)

> Remise : avant le début du prochain cours (cours 11 - 20/22 avril)

Avant d'écrire une seule ligne de code, vous planifiez votre intégration.

-

<div class="class-content-link">
  <img src="../../assets/IA-interdite.png">
  <span class="sidetext">Utilisation de l'IA INTERDITE à cette phase du projet. Tu dois démontrer tes capacités de planification et d'intégration.</span>
</div>

-

#### Maquette préliminaire pour la planification

Veuillez noter que pour la planification, vous devez travailler à partir de la *maquette préliminaire* fournie ici. Le contenu de la maquette finale à intégrer va possiblement un peu varier mais les grandes lignes de la mise en page restent les mêmes.

Veuillez noter aussi que cette maquette ne comprend pas la zone libre ⭐ que vous allez concevoir (zone de statistiques du joueur). L'objectif de cette étape-ci est de vous concentrer sur l'analyse de la *structure globale* et des *composants de base* avant d'ajouter votre propre conception pour la zone libre.

**Aperçu de la maquette préliminaire :**

<img src="./Solarix-Desktop-thumbnail.png" alt="Aperçu de la maquette desktop" width="200">

**Téléchargez les maquettes préliminaires pour la planification ici :**

- [Maquette préliminaire: Format grand écran :material-download:](https://cmontmorency365-my.sharepoint.com/:i:/g/personal/mariem_ouellet_cmontmorency_qc_ca/IQBHTIsqKEzQQqQopOZecPOfAZiY6sRh4aY9QBYMR_At5zo?e=vEubmQ)
- [Maquette préliminaire: Format mobile :material-download:](https://cmontmorency365-my.sharepoint.com/:i:/g/personal/mariem_ouellet_cmontmorency_qc_ca/IQCqzZYkXDBpQJ15A51dopvjAcswgqmSbru1DI_nJvicttI?e=UfhcKH)

#### Étapes de la planification :

- Créer un dépôt GitHub *privé* nommé `nom-prenom-projet-solarix`.
  - Accorder l'accès à votre dépot à l'enseignante via le nom d'utilisateur `kid-synthetique` (Settings / Collaborators and teams / Add people).
- Créer un fichier `PLANIFICATION.md` dans votre dépôt GitHub.

#### Contenu attendu :

1. **Analyse de la maquette** : Identifiez et nommez tous les composants de l'interface. Faites un schéma ou une liste annotée.

2. **Nomenclature CSS prévue** : Pour chaque composant identifié, définissez les noms de classes BEM que vous prévoyez utiliser (en anglais).  
   Exemple :
   ```
   .quest-card
   .quest-card__image
   .quest-card__title
   .quest-card__status
   .quest-card__status--completed
   ```

3. **Découpage en tâches** : Listez les étapes de votre intégration dans l'ordre où vous prévoyez les réaliser.

4. **Stratégie responsive** : Décrivez brièvement comment vous prévoyez gérer le passage desktop → mobile pour chaque composant. Justifiez votre choix entre media queries et container queries pour au moins un composant.

5. **Conception de la zone libre** : Décrivez ou esquissez votre vision pour la zone de stats globales. Comment allez-vous la mettre en page tout en restant cohérent avec le reste de l'interface? Voici le contenu de la zone libre à intégrer :
   - Quêtes terminées : 142
   - Temps de jeu : 1204h
   - Alliés : 38
   - Insignes : 12

**Format de remise :** Fichier `PLANIFICATION.md` déposé dans votre dépôt GitHub.

Si vous avez des images à ajouter (votre esquisse par exemple), ajoutez un dossier `assets` à votre dépôt, puis [insérez-les images en markdown](https://www.markdownguide.org/basic-syntax/#images-1) dans votre fichier `PLANIFICATION.md` avec des liens relatifs.

---

### Semaine 2: Structure HTML | 20 au 26 avril

> incluse dans les 30 points du code

> Remise : avant le début du cours 14 (4 mai)

**Contenu attendu :**

- HTML complet de l'interface intégré dans le canevas fourni
- Structure sémantique respectée
- Attributs d'accessibilité de base en place
- Aucun style CSS requis à cette étape (ou très minimal)

**Journal de bord : questions de la semaine 2 :**
> Répondez dans votre fichier `JOURNAL.md`.

1. Quelle décision de structure HTML vous a demandé le plus de réflexion? Expliquez votre raisonnement.
2. Y a-t-il un composant dont la structure sémantique n'était pas évidente? Comment avez-vous tranché?
3. Avez-vous utilisé l'IA cette semaine? Si oui, pour quoi et qu'en avez-vous retenu ou modifié?

---

### Semaine 3: CSS et responsive | 27 avril au 3 mai

> incluse dans les 30 points du code

> Remise : avant le début du cours 15 (11 mai) : en même temps que la remise finale

**Contenu attendu :**

- CSS complet de l'interface (approche mobile first)
- Responsive fonctionnel aux trois résolutions
- Variables CSS définies et utilisées
- Nomenclature BEM appliquée
- Zone libre intégrée

**Journal de bord : questions de la semaine 3 :**

> Répondez dans votre fichier `JOURNAL.md`.

1. Quel composant vous a posé le plus de difficultés en responsive? Comment avez-vous résolu le problème?
2. Avez-vous utilisé des container queries? Si oui, pour quel composant et pourquoi ce choix plutôt que des media queries?
3. Qu'est-ce qui a changé par rapport à votre planification initiale? Pourquoi?
4. Décrivez vos décisions de conception pour la zone libre : qu'avez-vous choisi et pourquoi est-ce cohérent avec le système visuel?
5. Avez-vous utilisé l'IA cette semaine? Si oui, montrez un exemple concret : quelle était la requête, qu'est-ce que l'IA a généré, qu'avez-vous gardé, modifié ou rejeté?

---

### Semaine 4:  Finalisation et accessibilité | 4 au 10 mai

> incluse dans les 30 points du code

> Remise finale : avant le début du cours 15 (11 ou 14 mai)

**Contenu attendu :**

- Interface finalisée et peaufinée
- Audit d'accessibilité complété
- Journal de bord complet
- Dépôt GitHub à jour

**Journal de bord : questions de la semaine 4 :**

> Répondez dans votre fichier `JOURNAL.md`.

1. Effectuez un audit d'accessibilité avec Lighthouse ou axe DevTools. Nommez deux problèmes identifiés et expliquez comment vous les avez corrigés.
2. Y a-t-il un problème d'accessibilité que vous n'avez pas pu corriger? Expliquez pourquoi et ce que vous auriez fait avec plus de temps.
3. Quel est l'aspect de votre CSS dont vous êtes le plus satisfait? Pourquoi?
4. Si vous recommenciez ce projet, qu'est-ce que vous feriez différemment?

## REMISE

### Dates

- Remise planification: avant le début du cours 11 (20 ou 22 avril)
- Remise finale: avant le début du cours final (11 ou 14 mai)

### Format de remise

- **Dépôt GitHub** nommé `nom-prenom-projet-solarix`. Votre dépôt GitHub doit être *privé*.
  - Accorder l'accès à votre dépot à l'enseignante via le nom d'utilisateur `kid-synthetique` (Settings / Collaborators and teams / Add people).

- Pour la remise de la planification (20-22 avril) votre dépot github doit inclure fichier un `PLANIFICATION.md` avec les éléments décrits dans la section "Semaine 1: Planification". Votre dépôt GitHub doit être *privé* et l'accès à l'enseignante doit être accordé. Le lien veres le dépot GitHub doit être soumis via le Devoir associé dans Teams.

- Pour remise finale votre dépot github doit inclure :

  ```
  solarix/
  ├── index.html
  ├── styles/
  │   └── main.css (ou structure de votre choix)
  ├── assets/
  │   └── (images et icônes fournis)
  ├── PLANIFICATION.md
  └── JOURNAL.md
  ```

!!! danger
    Le dépôt doit être accessible à l'enseignante au moment de la remise. Un dépôt *privé* sans accès accordé équivaut à une remise manquante. Pour accorder l'accès à votre dépot à l'enseignante via le nom d'utilisateur `kid-synthetique` (Settings / Collaborators and teams / Add people).


## Présentation orale : cours 15

> 5 points (5% de la note finale)

> Remise finale : avant le début du cours 15 (11 ou 14 mai)

Chaque étudiant présente son interface au reste de la classe. La présentation doit couvrir :

1. **L'interface finale**: démonstration en direct aux trois résolutions
2. **Deux décisions techniques**  : expliquez pourquoi vous avez fait ce choix (ex. : choix de Flexbox vs container query, structure BEM d'un composant)
3. **La zone libre**  : présentez votre conception et justifiez vos choix visuels
4. **L'utilisation de l'IA**  : si utilisée, montrez un exemple concret de votre démarche (requête → résultat → jugement critique)
5. **Un défi rencontré**  : qu'est-ce qui a été difficile et comment l'avez-vous surmonté?

!!! warning
    La présence à la remise et à la présentation est obligatoire. Une absence entraîne la note 0 pour la présentation, même si le travail a été remis en ligne.

!!! question
    L'enseignante peut poser des questions de relance sur votre code. L'incapacité à expliquer votre propre code peut affecter votre note globale.



## Grille d'évaluation

### Planification  : 10 points

| Critère | Points |
|---|---|
| Identification complète et juste des composants | 2 pts |
| Nomenclature BEM cohérente et en anglais | 2 pts |
| Découpage en tâches réaliste et ordonné | 2 pts |
| Stratégie responsive décrite et justifiée | 2 pts |
| Vision claire pour la zone libre | 2 pts |

---

### Code et interface : 30 points

| Critère | Points |
|---|---|
| **Structure HTML** : sémantique, hiérarchie, attributs d'accessibilité | 4 pts |
| **Fidélité à la maquette** : desktop et mobile | 4 pts |
| **Flexbox** : utilisation appropriée et maîtrisée | 4 pts |
| **Responsive mobile first** : trois résolutions, media queries et/ou container queries justifiés | 5 pts |
| **Variables CSS et système cohérent** : couleurs, espacements, typographie | 3 pts |
| **Nomenclature BEM** : appliquée par composant, cohérente, en anglais | 3 pts |
| **Zone libre** : cohérence visuelle, qualité d'exécution, sens esthétique | 3 pts |
| **Animations et transitions** : pertinentes, performantes, accessibles | 2 pts |
| **Accessibilité** : contraste, focus, tailles de cible, préférence de thème (sombre), audit complété | 2 pts |

---

### Journal de bord : 10 points

| Critère | Points |
|---|---|
| Semaine 2 : questions complètes et réfléchies | 2 pts |
| Semaine 3 : questions complètes, choix techniques justifiés | 4 pts |
| Semaine 4 : audit d'accessibilité documenté, regard critique | 2 pts |
| Qualité générale : honnêteté, profondeur, évolution visible | 2 pts |

---

### Présentation orale : 5 points

| Critère | Points |
|---|---|
| Démonstration de l'interface aux trois résolutions | 1 pt |
| Justification claire d'au moins deux décisions techniques | 2 pts |
| Présentation de la zone libre et de ses choix | 1 pt |
| Capacité à répondre aux questions de relance | 1 pt |

---

**Total : 55 points**



## Ressources

- Contenu du cours Web 2 : [tim-montmorency.com/compendium/582-211-web2](https://tim-montmorency.com/compendium/582-211-web2/)
- Documentation MDN : [developer.mozilla.org/fr/docs/Web](https://developer.mozilla.org/fr/docs/Web)
- Guide Flexbox : CSS Tricks : [css-tricks.com/snippets/css/a-guide-to-flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- Validateur HTML/CSS : [validator.w3.org](https://validator.w3.org/)
- Méthodologie BEM : [getbem.com](https://getbem.com/)



!!! info
    *Pour toute question, contactez l'enseignante par Teams de préférence. Comptez un délai de deux journées ouvrables pour obtenir une réponse.*
