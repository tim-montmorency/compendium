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

Le package **AI Navigation** doit être installé : **Window > Package Manager > Unity Registry > AI Navigation > Install**.

1. Dans la **Hierarchy** : clic-droit **Create Empty**, le nommer `NavMesh`
1. **Add Component > NavMesh Surface**
1. **Use Geometry** = `Physics Colliders` : le calcul se base sur les colliders, plus simples que les maillages détaillés des packs, ce qui évite les petits morceaux parasites
1. Cliquer **Bake** : la zone marchable apparaît en bleu dans la **Scene**

!!! warning "Refaire le bake après chaque modification du décor"
    Le NavMesh est une photo de la scène au moment du **Bake**. Un mur déplacé, une salle ajoutée : il faut cliquer **Bake** de nouveau.

### Le `NavMeshAgent`

Le composant qui calcule le chemin et déplace le personnage sur le NavMesh.

1. Sélectionner le PNJ, puis **Add Component > Nav Mesh Agent**
1. Poser le PNJ **sur une zone bleue** du NavMesh

| Réglage | Valeur | Rôle |
|---|---|---|
| **Agent Type** | `Humanoid` | Doit être le même que celui de la **NavMesh Surface** |
| **Base Offset** | `0` | Au-dessus de 0, le personnage flotte |
| **Speed** | ≈ `1.3` | Vitesse de déplacement en m/s. Celle d'une marche Mixamo (voir plus bas) |
| **Acceleration** | `8` à `12` | Plus c'est haut, moins le personnage glisse au démarrage et à l'arrêt |
| **Stopping Distance** | `0.3` | Distance à laquelle la destination est considérée atteinte |
| **Radius**, **Height** | Taille du personnage | Pour contourner les obstacles sans les frôler |

!!! warning "Pas de Rigidbody sur un agent"
    Le **NavMeshAgent** et un **Rigidbody** se disputent la position du personnage. Retirer le Rigidbody, ou cocher **Is Kinematic**.

### Zones et obstacles

Sans réglage, le bake crée des zones marchables sur le dessus des tables, des étagères et des lits. Le composant **NavMesh Modifier** règle le problème.

| Besoin | Composant | Réglage |
|---|---|---|
| Les meubles bloquent le passage, mais on ne marche pas dessus | **NavMesh Modifier** sur le parent des props | **Override Area** coché, **Area Type** = `Not Walkable`, **Apply To Children** coché |
| Un objet n'existe pas pour le NavMesh (tapis, plafond, lampe suspendue) | **NavMesh Modifier** | **Ignore From Build** coché |
| Une salle interdite aux PNJ | **NavMesh Modifier Volume** : une boîte invisible qui englobe la salle | **Area Type** = `Not Walkable` |
| Un obstacle qui bouge (porte, caisse poussée) | **NavMesh Obstacle** | **Carve** coché : le NavMesh se découpe autour en temps réel |
| De petits îlots bleus isolés | **NavMesh Surface > Advanced** | **Minimum Region Area** = `2` à `5` |

Après chaque ajout de **NavMesh Modifier** : **Bake** de nouveau.

## Animer un personnage avec Mixamo

Les personnages Synty ont déjà un squelette : inutile de les faire *rigger* par Mixamo. Mixamo sert seulement à **récupérer des animations**. Unity les transfère ensuite sur n'importe quel personnage Synty grâce à l'**avatar Humanoid** : c'est le *retargeting*.

### Télécharger l'animation

1. Aller sur [mixamo.com](https://www.mixamo.com) et se connecter avec un compte Adobe
1. Cliquer **Upload Character** et choisir un personnage Polygon en format FBX (ex. : `Models/Characters.fbx` du pack)
1. Choisir une animation dans la liste
1. Cliquer **Download**, régler les champs ci-dessous, puis cliquer **Download** de nouveau

| Champ | Valeur |
|---|---|
| **Frames per Second** | `60` |
| **Pose** *(si affiché)* | `Original Pose` |
| **Skin** *(si affiché)* | `Without Skin` : seulement le squelette et l'animation, un fichier beaucoup plus léger |

!!! info "Plusieurs personnages superposés"
    Le fichier `Characters.fbx` d'un pack Synty contient **tous** les personnages du pack sur un seul squelette. Dans Mixamo, ils apparaissent superposés : c'est normal. Avec **Without Skin**, aucun de ces maillages ne se retrouve dans le fichier téléchargé.

!!! warning "Toujours le même personnage dans Mixamo"
    Une animation téléchargée alors qu'un **autre** personnage est sélectionné (le Y Bot par défaut, par exemple) n'a pas les mêmes noms d'os : `mixamorig:Hips` au lieu de `Hips`. Unity refuse alors de copier l'avatar : `Transform 'Hips' for human bone 'Hips' not found`. Vérifier le personnage sélectionné avant chaque téléchargement.

### Configurer le rig

1. Glisser le FBX téléchargé dans **📁 Assets > 📁 _ > 📁 Animations**
1. Dans l'**Inspector**, onglet **Rig** : **Animation Type** = `Humanoid`, puis **Apply**
1. Cliquer **Configure…** et corriger les os que Unity n'arrive pas à associer (tableau ci-dessous), puis **Apply** et **Done**

| Partie | Os | Valeur |
|---|---|---|
| **Head** | Jaw | `None` |
| **Left Hand** | Tous les *Little…* | `None` |
| | Middle Proximal | `Finger_01` |
| | Middle Intermediate | `Finger_02` |
| | Middle Distal | `Finger_03` |
| **Right Hand** | Tous les *Little…* | `None` |
| | Middle Proximal | `Finger_011` |
| | Middle Intermediate | `Finger_021` |
| | Middle Distal | `Finger_031` |

!!! tip "Configurer une seule fois"
    Pour les animations suivantes, inutile de refaire **Configure…** : onglet **Rig**, **Avatar Definition** = `Copy From Other Avatar`, puis choisir l'avatar du premier FBX configuré. Sélectionner plusieurs FBX dans le panneau **Project** permet de les régler tous d'un coup. Fonctionne seulement si les animations viennent du même personnage Mixamo.

### Configurer le clip

1. Dans l'**Inspector**, onglet **Animation**
1. Renommer le clip (champ à droite du triangle turquoise) : `Idle`, `Marche`…
1. Cocher **Loop Time**
1. Régler les trois sections **Root Transform** selon le type d'animation (tableau ci-dessous)
1. **Source Take** = `mixamo.com`, puis vérifier que les mêmes cases sont toujours cochées
1. **Apply**

| Root Transform | Animation sur place (idle, danse) | Marche, course |
|---|---|---|
| **Rotation** : Bake Into Pose | ✔ | ✔ |
| **Position (Y)** : Bake Into Pose | ✔ | ✔, avec **Based Upon** = `Feet` |
| **Position (XZ)** : Bake Into Pose | ✔ | **✘** |

!!! warning "La marche qui revient en arrière"
    Une animation de marche Mixamo fait avancer le corps. Avec **Position (XZ) : Bake Into Pose** coché, ce déplacement reste dans les os : le corps avance pendant le cycle, puis revient d'un coup à son point de départ quand le clip recommence. Décoché, le déplacement est retiré de la pose et le personnage marche sur place, pendant que le **NavMeshAgent** le fait avancer.

    Autre solution : cocher **In Place** dans Mixamo avant de télécharger les marches et les courses.

!!! tip "Lire la vitesse de la marche"
    Avec **Position (XZ) : Bake Into Pose** décoché, l'**Inspector** affiche **Average Velocity** sous l'aperçu du clip. La valeur **Z** est la vitesse de la marche en m/s : c'est la valeur à mettre dans **Speed** du **NavMeshAgent** pour que les pieds ne glissent pas.

### Jouer l'animation : l'Animator Controller

1. Dans **📁 Assets > 📁 _ > 📁 Animations** : clic-droit **Create > Animation > Animator Controller**
1. Double-cliquer le controller pour ouvrir le panneau **Animator**
1. Clic-droit dans la grille, **Create State > Empty**
1. Sélectionner le nouvel état; dans l'**Inspector**, le renommer (ex. : `Idle`) et choisir le clip dans le champ **Motion**
1. Sélectionner le personnage dans la **Hierarchy**; dans son composant **Animator** :
    - **Controller** = le controller créé
    - **Avatar** = l'avatar du personnage Synty
    - **Apply Root Motion** décoché : le déplacement est géré par le code ou le **NavMeshAgent**, pas par l'animation

## Faire bouger un PNJ

### Le figurant : une errance aléatoire

Un PNJ qui ne réagit à rien : il choisit un point au hasard sur le NavMesh, s'y rend, attend quelques secondes, puis recommence. Passants, clients d'un café, animaux : ils peuplent la scène sans participer à la mécanique.

#### L'Animator Controller

Deux clips Mixamo configurés comme plus haut : une animation de repos (ex. : `Idle`, *Look Around*) et une marche (`Walking`, **Position (XZ) : Bake Into Pose** décoché).

1. Créer un Animator Controller (ex. : `AC_PNJ`) et y ajouter deux états : `Idle` (l'état par défaut, en orange) et `Marche`
1. Onglet **Parameters** du panneau **Animator** : **+ > Bool**, le nommer `walking`
1. Clic-droit sur `Idle` **> Make Transition** vers `Marche`, puis de `Marche` vers `Idle`
1. Sélectionner chaque transition; dans l'**Inspector** :

| Réglage | Idle → Marche | Marche → Idle |
|---|---|---|
| **Has Exit Time** | décoché | décoché |
| **Transition Duration** | `0.2` | `0.2` |
| **Conditions** | `walking` = `true` | `walking` = `false` |

!!! warning "Has Exit Time : décoché"
    Coché, l'Animator attend la fin du clip en cours avant de changer d'état. Le PNJ commence à se déplacer en jouant encore son animation de repos : il glisse au lieu de marcher.

!!! info "Pourquoi un Bool plutôt qu'un Trigger"
    Un **Trigger** est un événement ponctuel : saluer, sauter, ramasser. Marcher est un **état qui dure** : un **Bool** dit en permanence à l'Animator si le PNJ est en train de marcher. Si une transition est manquée, l'Animator se replace de lui-même sur le bon état à l'image suivante. Un Trigger manqué, lui, laisse l'animation désynchronisée du mouvement.

#### Le script

1. Dans **📁 Assets > 📁 _ > 📁 Scripts** : clic-droit **Create > MonoBehaviour Script**, le nommer `PNJErrantSimple`, y coller le code ci-dessous
1. Sur le PNJ : un **NavMeshAgent** (voir plus haut), un **Animator** avec le controller `AC_PNJ`, puis le script `PNJErrantSimple`
1. Glisser le composant **Animator** du PNJ dans le champ **Animator** du script

```c# title="PNJErrantSimple.cs"
using UnityEngine;
using UnityEngine.AI;

/// <summary>
/// Le PNJ choisit un point au hasard sur le NavMesh, s'y rend, attend un peu, puis recommence.
/// Il se tourne d'abord vers sa direction, puis avance : pas de « glissade » en virage.
/// Animation : le script informe l'Animator (Bool) ; l'Animator Controller décide quoi jouer.
/// </summary>
[RequireComponent(typeof(NavMeshAgent))]
public class PNJErrantSimple : MonoBehaviour
{
    [Header("Errance")]
    [SerializeField] private float rayonErrance = 10f;
    [SerializeField] private Vector2 pauseMinMax = new Vector2(1f, 3f);

    [Header("Déplacement")]
    [Tooltip("Vitesse du clip de marche (m/s). À ajuster jusqu'à ce que les pieds ne glissent plus.")]
    [SerializeField] private float vitesseMarche = 1.3f;
    [Tooltip("Temps (en secondes) pour faire un demi-tour complet")]
    [SerializeField] private float dureeDemiTour = 0.75f;
    [Tooltip("Au-delà de cet angle, le PNJ pivote sur place avant d'avancer")]
    [SerializeField] private float angleMaxPourAvancer = 45f;

    [Header("Animation (optionnel)")]
    [SerializeField] private Animator animator;
    [Tooltip("Nom exact du paramètre Bool dans l'Animator Controller")]
    [SerializeField] private string parametreMarche = "walking";

    // Vitesse (m/s) sous laquelle le PNJ est considéré immobile
    private const float SeuilMarche = 0.1f;

    private NavMeshAgent agent;
    private float heureDepart = -1f;
    private int idMarche;

    private void Awake()
    {
        agent = GetComponent<NavMeshAgent>();
        agent.updateRotation = false;   // la rotation est gérée par ce script
        agent.speed = vitesseMarche;
        idMarche = Animator.StringToHash(parametreMarche);
        if (animator != null) animator.applyRootMotion = false;
    }

    private void Start()
    {
        if (!agent.isOnNavMesh)
        {
            Debug.LogWarning($"{name} n'est pas sur le NavMesh : vérifier le Bake et la position du personnage.", this);
            enabled = false;
            return;
        }
        ChoisirDestination();
    }

    private void Update()
    {
        Orienter();

        // L'Animator reflète toujours l'état réel du déplacement
        if (animator != null)
            animator.SetBool(idMarche, agent.velocity.magnitude > SeuilMarche);

        bool arrive = !agent.pathPending && agent.remainingDistance <= agent.stoppingDistance;
        if (!arrive) return;

        if (heureDepart < 0f)
            heureDepart = Time.time + Random.Range(pauseMinMax.x, pauseMinMax.y);
        else if (Time.time >= heureDepart)
        {
            ChoisirDestination();
            heureDepart = -1f;
        }
    }

    /// <summary>
    /// Tourne le PNJ vers le prochain coin du chemin.
    /// Tant que l'écart d'angle est grand, l'agent est freiné : il pivote presque sur place.
    /// </summary>
    private void Orienter()
    {
        if (!agent.hasPath) { agent.speed = vitesseMarche; return; }

        Vector3 direction = agent.steeringTarget - transform.position;
        direction.y = 0f;
        if (direction.sqrMagnitude < 0.0001f) return;

        Quaternion cible = Quaternion.LookRotation(direction);
        transform.rotation = Quaternion.RotateTowards(transform.rotation, cible, (180f / dureeDemiTour) * Time.deltaTime);

        // 1 quand le PNJ fait face à sa direction, 0 quand l'écart dépasse angleMaxPourAvancer
        float angle = Quaternion.Angle(transform.rotation, cible);
        float facteur = Mathf.Clamp01(1f - angle / angleMaxPourAvancer);
        agent.speed = vitesseMarche * facteur;
    }

    private void ChoisirDestination()
    {
        Vector3 point = transform.position + Random.insideUnitSphere * rayonErrance;
        if (NavMesh.SamplePosition(point, out NavMeshHit hit, rayonErrance, NavMesh.AllAreas))
            agent.SetDestination(hit.position);
    }

    // Affiche la destination dans la vue Scene (sélectionner le PNJ)
    private void OnDrawGizmosSelected()
    {
        if (agent == null || !agent.hasPath) return;
        Gizmos.color = Color.yellow;
        Gizmos.DrawLine(transform.position, agent.destination);
        Gizmos.DrawSphere(agent.destination, 0.2f);
    }
}
```

| Champ | Rôle |
|---|---|
| **Rayon Errance** | Distance maximale du prochain point choisi |
| **Pause Min Max** | Durée de la pause à l'arrivée, entre deux valeurs (en secondes) |
| **Vitesse Marche** | Remplace le **Speed** du NavMeshAgent. Mettre la valeur Z de l'**Average Velocity** du clip de marche |
| **Duree Demi Tour** | Temps pour faire un demi-tour, en secondes. Plus petit = pivot plus vif |
| **Angle Max Pour Avancer** | Au-delà de cet écart d'angle, le PNJ pivote sur place avant d'avancer |
| **Parametre Marche** | Nom exact du Bool dans l'Animator Controller |

!!! tip "Se tourner, puis avancer"
    Par défaut, le **NavMeshAgent** tourne lentement tout en avançant : le PNJ décrit des courbes en glissant de côté, ce qu'aucune animation de marche ne peut suivre. Le script désactive la rotation de l'agent (`updateRotation = false`) et fait pivoter le PNJ lui-même; tant que l'écart d'angle est grand, l'agent est freiné. Le PNJ se tourne d'abord, puis avance.

!!! tip "Plusieurs figurants"
    Le même prefab, dupliqué : chaque PNJ choisit ses propres destinations. Pour éviter une foule trop uniforme, varier légèrement **Vitesse Marche** et **Pause Min Max** d'un PNJ à l'autre, et changer de modèle Synty.

#### Dépannage

| Symptôme | Cause probable |
|---|---|
| Le PNJ ne bouge pas | Message *n'est pas sur le NavMesh* dans la **Console** : PNJ posé hors de la zone bleue, ou NavMesh pas *baked*. Sinon : **Rigidbody** non *kinematic*, ou **Apply Root Motion** coché |
| Le PNJ glisse en jouant l'animation de repos | **Has Exit Time** coché sur les transitions |
| La marche revient en arrière à chaque cycle | **Position (XZ) : Bake Into Pose** coché sur le clip de marche |
| Les pieds glissent sur le sol | **Vitesse Marche** différente de la vitesse du clip |
| Le PNJ flotte au-dessus du sol | **Base Offset** du NavMeshAgent différent de `0`, ou **Position (Y)** pas sur **Based Upon** = `Feet` |
| Le PNJ se déplace sans animation | Champ **Animator** du script vide, ou nom du Bool différent de **Parametre Marche** |

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
    Un personnage Synty, des animations de repos et de marche récupérées sur Mixamo (voir [Animer un personnage avec Mixamo](#animer-un-personnage-avec-mixamo)) et un Bool dans l'Animator, comme pour [le figurant](#le-figurant-une-errance-aleatoire). Un PNJ qui patrouille avec une vraie animation de marche vaut dix lignes de code de plus.

### Le son

### L'indicateur visuel

!!! note "Contenir l'ambition"
    NavMesh, patrouille et détection : **ça suffit**. Pas d'arbre de comportement, pas de *behavior tree* d'asset store, pas de dialogue à embranchements, pas de combat à états multiples. Un PNJ qui patrouille, qui te voit et qui te poursuit produit déjà 90 % de la tension recherchée — et c'est faisable en une séance. Tout ce qui va au-delà mange trois semaines de production et finit rarement dans le build final.

## Trello

### Nouvelles cartes

> Sprint 3 : l'alpha (cours 12)

**Zones 2 et 3**

- `Must` Habiller la zone 2 : aucun objet flottant ni raccord visible
- `Must` Éclairer la zone 2
- `Must` Habiller la zone 3 : aucun objet flottant ni raccord visible
- `Must` Éclairer la zone 3

**PNJ** (facultatif : une initiative possible au critère créativité)

- `Could` Préparer le NavMesh de la zone du PNJ
- `Could` Monter le PNJ : patrouille, détection, réaction
- `Could` Animer le PNJ avec Mixamo : repos et marche
- `Could` Monter un dialogue avec un PNJ (package Dialogue System)

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
