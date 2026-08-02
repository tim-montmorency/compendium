# Cours 3

## GDD et démarrage du jeu de session

À partir d'aujourd'hui, une seule cible : **ton jeu**, construit couche par couche jusqu'à sa publication à la fin de la session. La séance verrouille ton concept, t'apprend à le protéger (versionning) et pose ses fondations (greybox).

<!-- ## Déroulement de la séance

| Temps | Activité |
|---|---|
| 0h00 – 0h30 | Retour de groupe sur les GDD : les 5 pièges |
| 0h30 – 1h10 | Théorie : boucle, victoire/défaite, scope, greyboxing |
| 1h10 – 1h30 | Théorie : versionning (Git/GitHub) |
| 1h30 – 1h45 | Pause |
| 1h45 – 3h20 | Pratique : validations individuelles + démarrage du projet |
| 3h20 – 3h35 | Premier commit + devoirs | -->


## Retour sur vos GDD : les 5 pièges classiques

J'ai lu vos GDD. Chaque cohorte tombe dans les mêmes pièges - les voici, pour qu'on les règle **aujourd'hui**, pas à la semaine 12.

### Piège 1 : le jeu trop grand

« Un monde ouvert avec 3 biomes, un système de craft et des donjons. » Faisons le calcul ensemble : il te reste **12 séances**, soit ~24 h en classe + ~12 h de devoirs = **~35 heures de production totale**. Un studio professionnel met des *années-personnes* sur un monde ouvert. Ton avantage sur eux : tu peux faire un jeu **petit et fini** - eux ne peuvent plus.

<div class="grid grid-1-2" markdown>
![(the) Gnorp Apologue](./assets/img/games/gnorp.jpg){data-zoom-image}

[(the) Gnorp Apologue (2023)](https://store.steampowered.com/app/1473350/the_Gnorp_Apologue/) : un développeur **seul**, un seul écran, une seule idée poussée à fond - un succès critique et commercial. Le scope réduit n'est pas un compromis, c'est une stratégie.
</div>

### Piège 2 : la boucle vague

> ❌ *« Le joueur explore une forêt mystérieuse et découvre ses secrets »*

C'est une ambiance, pas une boucle. Où sont les **verbes**? Le test des 30 secondes : décris ce que le joueur **fait** pendant les 30 premières secondes de jeu. S'il faut plus d'une phrase de verbes concrets, la boucle n'est pas encore trouvée.

> ✅ *« Le joueur cherche 3 offrandes cachées, les rapporte à l'autel en évitant les zones de brume, et déverrouille le portail »*

### Piège 3 : la victoire implicite

« On gagne quand on a fini » ne se programme pas. Ta condition de victoire est **littéralement une ligne de code** :

| Formulation vague | Formulation programmable |
|---|---|
| « Explorer le niveau » | « Atteindre la zone de sortie » → `OnTriggerEnter` |
| « Ramasser des objets » | « Ramasser LES 3 gemmes » → `if (gemmes >= 3)` |
| « Survivre » | « Survivre 60 secondes » → `if (chrono >= 60)` |

Si tu ne peux pas remplir la colonne de droite pour ton jeu, on le fait ensemble à la validation.

### Piège 4 : le jeu-film

Un GDD où tout est cinématique, dialogue et retournement narratif… mais où l'interacteur ne fait que marcher entre les moments scriptés. Rappel du cours 1 : la **narration** est un ingrédient du ludisme - mais le devis exige des **actions à accomplir** avec réussite, échec et progression. L'histoire habille la boucle; elle ne la remplace pas.

### Piège 5 : l'ambiance sans mécanique (ou l'inverse)

Certains GDD ont un moodboard superbe et aucune mécanique; d'autres, une mécanique béton dans un univers générique « château avec des squelettes ». Les deux moitiés doivent se répondre : ta mécanique de lumière appelle un univers sombre; ton univers de plage appelle des mécaniques de marée. Le mariage des deux, c'est ça, un concept.


## Théorie

### Le greyboxing : valider l'espace avant de le décorer

En studio, aucun niveau ne commence par les beaux assets. On construit d'abord en **blocs gris** (d'où le nom) : des cubes, des plans, des volumes bruts. Pourquoi?

* **La vitesse** : ton croquis de GDD devient jouable en 20 minutes
* **La vérité** : on découvre en marchant que le couloir est trop long, la salle trop vide, le saut impossible - des choses invisibles sur papier
* **L'économie** : déplacer un cube coûte 2 secondes; redécorer une salle complète coûte une soirée

La règle : **on décore seulement ce qui est validé en gris.** Décorer un niveau mal proportionné, c'est décorer deux fois.

!!! tip "Les métriques : le secret des pros"
    Avant de construire, mesure ton personnage : sa hauteur, la hauteur de son saut, sa vitesse. Toutes tes dimensions en découlent - hauteur d'un obstacle sautable, largeur d'un fossé franchissable, distance « longue ». Les studios documentent ces *metrics*; toi, note-les dans ton README.

### Les materials : la couleur de ton monde

Tout objet 3D porte un **material** : sa « peinture ». Un material URP définit la **couleur** (Base Map), l'aspect **métallique**, le **lustre** (Smoothness) et même l'**émission** (l'objet devient une source de lumière - on s'en servira au cours 12 avec le bloom).

Créer un material prend 20 secondes : **Project → clic droit → Create → Material**, choisis la Base Map, glisse-le sur l'objet. C'est tout.

Pourquoi en parler aujourd'hui? Parce que ton greybox mérite un **code de couleurs** : sol gris, murs gris foncé, objets interactifs en jaune vif. Avant même le premier asset Synty, ton niveau communique déjà - c'est de l'affordance à coût zéro, et le jury de studio fait exactement ça dans ses prototypes.

### Le versionning : la ceinture de sécurité

Trois histoires vraies, entendues chaque session :

* « Mon projet ne s'ouvre plus depuis la mise à jour » 💀
* « J'ai supprimé un dossier pour faire de la place » 💀
* « Ça marchait hier, j'ai changé plein d'affaires, je ne sais plus quoi » 💀

**Git** règle les trois : il prend des photos (*commits*) de ton projet à chaque étape. Tu peux regarder l'historique, comparer, **revenir en arrière**. **GitHub** en garde une copie en ligne : ton disque dur peut mourir, pas ton jeu.

Trois mots de vocabulaire, c'est tout ce qu'il faut :

| Terme | C'est quoi | Analogie |
|---|---|---|
| **Commit** | Une photo de ton projet + un message | Une sauvegarde nommée dans un jeu |
| **Push** | Envoyer tes commits sur GitHub | Téléverser sa sauvegarde dans le nuage |
| **.gitignore** | La liste de ce qu'on ne photographie PAS | Unity régénère `Library/` tout seul : inutile de le sauvegarder (et il pèse des Go!) |

!!! important "Le rituel, à chaque fin de séance, jusqu'à la fin de la session"
    1. **Commit** avec un message clair
    2. **Push** vers GitHub
    3. Vérifier sur github.com que c'est bien là

Un bon message de commit dit **ce qui a changé** :

| ❌ Mauvais | ✅ Bon |
|---|---|
| `update` | `Ajout du systeme cle/porte` |
| `aaaaa` | `Correction : la porte restait ouverte au redemarrage` |
| `cours 7` | `Sonorisation : musique ambiance + son de collecte` |

Dans 6 semaines, quand tu chercheras « c'était quand, la dernière fois que la porte marchait? », tu remercieras tes messages.


## Pratique - Démarrer TON jeu

!!! info "Pendant les validations"
    Je rencontre chaque élève ~5 minutes pour valider (et verrouiller) son GDD : boucle en verbes, victoire programmable, scope réaliste. Pendant ton attente, avance les étapes ci-dessous - elles sont identiques pour tous, peu importe ton concept.

### 1. Créer le projet

- [ ] Unity Hub → **New project** → **Universal 3D** (URP)
- [ ] Nom : le titre de ton jeu (sans accents ni espaces) - PAS dans OneDrive/Google Drive
- [ ] Crée l'arborescence complète dans la fenêtre Project :

```txt
Assets/
  ├── 📁 Plugins
  └── 📂 _Project
        ├── 📁 Animations
        ├── 📁 Art
        ├── 📁 Audio
        ├── 📁 Prefabs
        ├── 📁 Scenes
        └── 📁 Scripts
```

### 2. Importer les ressources

- [ ] **Package Manager → My Assets** → *POLYGON Sampler Pack* → Download/Import → range dans `Plugins`
- [ ] Matériaux roses? **Edit → Rendering → Materials → Convert Selected Built-in Materials to URP** (réflexe du cours 2)
- [ ] **Package Manager → Unity Registry** → *Starter Assets - ThirdPerson* → Install

### 3. Le dépôt GitHub

- [ ] GitHub Desktop → **Add local repository** → ton dossier de projet
- [ ] Accepte de créer le dépôt avec le **gitignore Unity** - c'est LE moment où ça se joue : sans lui, ton dépôt pèsera des gigaoctets
- [ ] **Publish repository** - nom : le titre de ton jeu
- [ ] Vérifie sur github.com : tu dois voir `Assets/` mais PAS `Library/` (preuve que le gitignore travaille)

### 4. Le README initial

- [ ] À la racine du projet, crée `README.md` :

```markdown
# [Titre de ton jeu]

## Concept
[2-3 phrases de ton GDD]

## Boucle de jeu
[Ta boucle en verbes d'action]

## Moodboard
[Tes images, ou un lien]

## Métriques
- Hauteur du personnage : ...
- Hauteur de saut : ...

## Crédits et médias externes
(à remplir au fil de la session)

## Notes de développement
(à remplir au fil de la session)
```

- [ ] Ce README est le **devlog** de ton projet : chaque phase l'enrichira, et il fait partie de la grille du projet final

### 5. Le greybox du niveau

- [ ] Nouvelle scène `Jeu` dans `_Project/Scenes`
- [ ] Reproduis le **croquis de niveau de ton GDD** avec des formes simples : Planes pour les sols, Cubes pour les murs et volumes - pas un seul asset Synty pour l'instant!
- [ ] Glisse ton personnage (prefab Starter Assets) et **note tes métriques** : construis un escalier de cubes (0.5, 1, 1.5, 2 m) et saute dessus - quelle hauteur passes-tu? Note-la au README
- [ ] **Parcours ton niveau en entier** : distances trop longues? passages trop étroits? salles vides? Ajuste les cubes - ça coûte 2 secondes
- [ ] Quand l'espace est bon (et seulement là) : commence à remplacer le greybox par des prefabs Synty
- [ ] Crée 2-3 **materials** dans `_Project/Art` et code ton greybox par couleurs : neutre pour le décor, une couleur vive pour tout ce qui sera interactif
- [ ] Classe tes objets dans des GameObject Empty bien nommés (`Sol`, `Murs`, `Decor`, `Interactifs`)

### 6. Le rituel (première fois officielle!)

- [ ] Commit : `Demarrage du projet : greybox du niveau` → Push → vérifie sur github.com

## Devoir

- [ ] Termine le greybox et commence l'habillage Synty des zones validées
- [ ] Commit + push à chaque séance de travail - le rituel s'applique aussi à la maison

## Ressources

* [Guide GitHub Desktop (officiel)](https://docs.github.com/fr/desktop)
* [Level design : le greyboxing (article, en anglais)](https://book.leveldesignbook.com/process/blockout)

## Savoirs essentiels touchés

Création d'un environnement virtuel navigable, intégration d'images dans l'environnement virtuel, classement des fichiers et des médias.
