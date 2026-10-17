<!--
Piste — Package Behavior (Unity 6, Unity Registry)
- Arbres de comportement visuels, nœuds en langage naturel, Blackboard, débogage en temps réel.
- Complète le NavMesh : NavMesh = comment se déplacer, Behavior = quoi faire.
- Hors matière ici (voir l'avertissement « ça suffit ») : à mentionner seulement; démo possible en capsule d'enrichissement au cours 13.
- Limites : package récent, API changeante, peu de tutoriels — vérifier la version installée au labo.
-->

# Cours 9

[STOP]

!!! abstract ":material-comment-check: Jalon formatif F2 — Tranche verticale"
    Rotation individuelle en deuxième partie. **Attendu :** un segment court mais **fini** — habillé, animé, sonorisé, éclairé. Pas le jeu au complet : l'échantillon qui prouve le niveau de qualité que tu vises.

    C'est aussi la **rétroaction sur l'objectif 1** : l'intégration des médias visuels et sonores.

!!! tip "D'ici le jalon 3"
    Trois séances, et c'est le jalon le plus déterminant de la session. **Cours 10 :** particules, projectiles et *game feel*. **Cours 11 :** la mise en ligne pour de vrai. **En parallèle, dès maintenant :** l'habillage et l'éclairage des zones 2 et 3 — tu sais désormais ce que ça coûte, applique-le.

    Le jalon 3 est un **dépôt** : ton build WebGL doit être en ligne **en début de séance**, pas pendant.

<!-- ## Déroulement de la séance

| Temps | Activité |
|---|---|
| 0h00 – 0h50 | NavMesh et NavMeshAgent |
| 0h50 – 1h20 | Patrouille par waypoints |
| 1h20 – 1h35 | Pause |
| 1h35 – 2h20 | Détection : distance, cône de vision, Raycast |
| 2h20 – 2h45 | La machine à états du PNJ |
| 2h45 – 3h05 | PNJ non hostile et dialogue |
| 3h05 – 3h35 | Atelier + rotation F2 | -->

<!-- behaviour ; https://www.youtube.com/watch?v=DWlZK5mqC6E -->

## Le NavMesh

### Ce que c'est : une carte de ce qui est marchable

### Le *baking* du NavMesh

### Le `NavMeshAgent`

### Zones et obstacles

## Faire bouger un PNJ

### La patrouille par waypoints

### La poursuite

### Le retour au poste

## La détection

### Par distance : simple et souvent suffisant

### Le cône de vision

### Le `Raycast` : la ligne de vue

!!! tip "L'ordre des tests compte"
    Distance, puis angle, puis ligne de vue. Un `Raycast` coûte plus cher qu'une soustraction — inutile de le lancer si le joueur est à cinquante mètres.

## La machine à états du PNJ

### Patrouille → alerte → poursuite → perte de trace

### Les temporisations : pourquoi un PNJ ne doit pas réagir instantanément

## Le PNJ non hostile

### Le marchand, le guide

### Le système de dialogue

Le package gratuit [Dialogue System](./unity-assets/index.md#dialogue-system) (HeneGames) affiche une suite de répliques entre le personnage principal et un PNJ, avec le nom et le portrait de la personne qui parle. Aucun code à écrire : tout se règle dans l'**Inspector**.

| Élément | Sur quel objet | Rôle |
|---|---|---|
| **Dialogue Manager** | Le PNJ | Contient les répliques, dans l'ordre |
| **Dialogue Trigger** | Le personnage principal | Détecte l'entrée dans la zone de conversation du PNJ |
| **Dialogue UI** (prefab) | La scène, à la racine | Affiche la boîte de dialogue |
| **Dialogue Character** (asset) | Le panneau **Project** | Le nom et le portrait d'un personnage qui parle |

#### Installer le package

1. Sur l'Asset Store, cliquer **Add to My Assets**
1. Dans Unity : **Window > Package Manager > My Assets**, sélectionner **Dialogue System**, puis **Download** et **Import**

#### Créer les personnages qui parlent

1. Dans le panneau **Project**, dossier **Assets > _ > Dialogues** : clic-droit **Create > Dialogue System > New Dialogue Character**
1. Dans l'**Inspector**, entrer le nom affiché et glisser le portrait dans **Sprite** (image importée en **Texture Type : Sprite (2D and UI)**)
1. Répéter pour chaque personnage : un pour le héros, un par PNJ qui parle

#### Préparer le PNJ

1. Sélectionner le PNJ, puis **Add Component > Dialogue Manager**
1. Ajouter un **Sphere Collider**, cocher **Is Trigger** et régler son **Radius** pour couvrir la zone de conversation (2 à 3 m autour du PNJ)
1. Dans la liste **Sentences**, cliquer **+** pour chaque réplique et remplir :

| Champ | Contenu |
|---|---|
| **Dialogue Character** | Qui parle (glisser l'asset créé plus haut) |
| **Message** | Le texte de la réplique |
| **Sound Clip** *(optionnel)* | Un son joué avec la réplique : voix, grognement, bip |
| **Unity Event** *(optionnel)* | Une action déclenchée quand la réplique s'affiche |

#### Préparer le personnage principal et l'interface

1. Sélectionner le personnage principal, puis **Add Component > Dialogue Trigger**. Le **Character Controller** des Starter Assets suffit pour détecter la zone du PNJ.
1. Glisser le prefab **Dialogue UI** (dossier **Prefabs** du package) dans la **Hierarchy**, à la racine de la scène, jamais dans le personnage
1. Lancer le jeu, s'approcher du PNJ : la première réplique s'affiche. La touche du bouton **Continue Button** du prefab fait passer à la réplique suivante; après la dernière, la boîte disparaît.

#### Brancher le dialogue sur le jeu

Le champ **Unity Event** d'une réplique transforme la conversation en mécanique. Quelques branchements utiles :

| Effet voulu | Unity Event |
|---|---|
| Le PNJ remet la clé à la dernière réplique | `GameObject.SetActive` (true) sur la clé |
| Le marchand ouvre le passage | `Animator.SetTrigger` sur la porte |
| Le PNJ gesticule en parlant | `Animator.SetTrigger` sur le PNJ (ex. : `Parler`) |
| La musique baisse pendant la conversation | `AudioMixerSnapshot.TransitionTo` (voir les *snapshots* du cours 7) |

C'est le type de passage **Négociation** de l'énoncé du projet final : obtenir quelque chose d'un PNJ.

!!! note "Un dialogue linéaire, court"
    Quatre à six répliques, lues dans l'ordre. Pas d'arbre de choix : un dialogue à embranchements multiplie l'écriture, les tests et les bogues. Chaque réplique doit dire au joueur quoi faire ou pourquoi le faire.


## La rétroaction du PNJ

### L'animation

!!! tip "Habiller et animer un PNJ"
    Un personnage **T-pose Synty** passé dans [Mixamo](https://www.mixamo.com) pour le squelette, **Animation Type: Humanoid**, puis les animations de marche et de course récupérées directement sur Mixamo. Un PNJ qui patrouille avec une vraie animation de marche vaut dix lignes de code de plus.

### Le son

### L'indicateur visuel

!!! note "Contenir l'ambition"
    NavMesh, patrouille et détection : **ça suffit**. Pas d'arbre de comportement, pas de *behavior tree* d'asset store, pas de dialogue à embranchements, pas de combat à états multiples. Un PNJ qui patrouille, qui te voit et qui te poursuit produit déjà 90 % de la tension recherchée — et c'est faisable en une séance. Tout ce qui va au-delà mange trois semaines de production et finit rarement dans le build final.

## Trello

### Nouvelles cartes

> Sprint 3 : l'alpha (cours 12)

**PNJ**

- `Must` Préparer le NavMesh de la zone du PNJ
- `Must` Monter le PNJ : patrouille, détection, réaction
- `Should` Monter un dialogue avec un PNJ (package Dialogue System)

**Assets et crédits**

- `Must` Monter la scène Crédits, accessible depuis le menu titre, à partir de la section `## Crédits` du README

## Pratique

## Devoirs

!!! warning "Premier build WebGL"
    Dépose ton jeu sur une page itch.io **privée** cette semaine. Fonctionnel avant tout, pas beau. Les surprises de build WebGL sont nombreuses et il ne faut pas les découvrir la semaine de la remise finale.

<!-- Savoirs essentiels touchés (note pour l'enseignant) :

-->

<!--
================================================================
NOTES DE RÉDACTION — à supprimer une fois la séance écrite
================================================================
SÉANCE ENTIÈREMENT À ÉCRIRE — aucune source dans l'ancien plan.

Prévoir : exercices/cours09-pnj-et-navmesh.md
Prévoir : un ou deux scripts pour le kit (PatrolAgent, VisionCone).
La rotation F2 occupe l'enseignant pendant l'atelier : le kit doit
permettre d'avancer sans aide.

Dialogue System (HeneGames) — à vérifier au labo sur Unity 6 avant la séance :
  - la lecture du clavier (ancien Input Manager?) : si erreur, Player Settings >
    Active Input Handling = Both
  - TextMeshPro requis ou non; l'emplacement exact du prefab Dialogue UI
  - où se règle la touche « continuer » (objet Continue Button)
  - le déclenchement avec un CharacterController en 3D
================================================================
-->
