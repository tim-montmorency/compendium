# Évaluation 1 - Le jeu express

*[ETB] : Enhanced Trigger Box
*[GDD] : Game Design Document

## Objectif

Démontrer que tu maîtrises les **gestes de base d'Unity** vus aux cours 2 et 3 : créer et ranger un projet, construire un environnement solide **au service d'un objectif**, y placer un personnage contrôlable, l'habiller (matériaux, son) et déclencher un événement de victoire.

C'est une évaluation des **acquis techniques**, pas du talent de designer. Le jeu est volontairement minuscule : ce qui est noté, c'est qu'il **fonctionne** et qu'il soit **propre**.

!!! important "Trouve ta logique de jeu"
    On ne te demande pas une grande idée - on te demande une **règle**. Choisis un *gating* vu au [cours 1](../cours01.md) (une clé, un pont à activer, un passage caché, un saut difficile) et construis ton monde autour. Sans ça, tu remets une promenade, pas un jeu.

!!! tip "Presque tout est déjà fait"
    Si tu as suivi les deux séances, il ne te reste qu'à finir ce qui traîne. Ce devoir n'est pas un nouveau projet.

## Ce qu'il faut remettre

1. Le **dossier du projet Unity** compressé - sans les dossiers `Library/` et `Builds/`
2. Le **build** compressé séparément (le `.exe` / `.app` et ses fichiers) : je dois pouvoir lancer ton jeu sans ouvrir Unity

## La grille

| Critère | Ce qu'on regarde | Points |
|---|---|---|
| **Environnement** | Un monde construit avec les prefabs Synty : un départ, un parcours, une arrivée identifiable. Le décor **sert l'objectif** : le chemin est lisible, on comprend où aller. Les matériaux sont convertis (rien en magenta) | 15 |
| **Solidité de l'environnement** | On ne passe pas au travers du décor et on ne tombe pas hors du monde : sol continu, colliders présents, boîtes invisibles aux limites, passages assez larges | 15 |
| **Objectif et *gating*** | Le jeu a un but clair et **au moins un prérequis** ([cours 1](../cours01.md)) entre le joueur et sa victoire : une clé, un pont à activer, un passage à trouver, un saut à réussir | 10 |
| **Personnage contrôlable** | Le prefab *Starter Assets* (1re **ou** 3e personne) est en place et fonctionne : déplacement, saut, caméra | 15 |
| **Physique** | Au moins un objet utilise réellement la physique (`Rigidbody` + `Collider` cohérent avec la forme) | 5 |
| **Détection et victoire** | Un **ETB** correctement configuré déclenche la fin : tag `Player` assigné au personnage, zone bien placée, réponse `Load Scene` avec le nom **exact** de la scène, scènes présentes dans la *Scene List* | 20 |
| **Habillage** | Au moins un **material** créé et appliqué, et au moins un **son** dans la scène (ambiance en boucle ou effet déclenché) | 10 |
| **Classement des fichiers** | L'arborescence vue au cours 2 est respectée (`_` avec `Scenes`, `Scripts`, `Materials`, `Audio`…), les imports laissés à la racine d'`Assets` | 5 |
| **Compilation** | Un build autonome qui se lance et se joue du début à la fin | 5 |
| | **Total** | **100** |

*Pondération : 15 % de la note finale.*

## Remise

* **Échéance :** **la veille de la séance 4** — on s'en sert en classe pour le retour collectif
* **Format :** projet compressé + build compressé

!!! warning "Les trois pièges qui coûtent des points chaque session"
    1. Le tag `Player` **créé mais pas assigné** au personnage - l'ETB ne se déclenche jamais
    2. Le nom inscrit dans `Load Level Name` ≠ le nom du fichier de scène (`Victoire` vs `victoire`)
    3. Une scène **absente de la Scene List** : elle ne peut pas être chargée, même si elle existe

!!! note "Et la mise en ligne?"
    Pas cette fois. La publication sur itch.io (et le build WebGL) arrive plus tard dans la session - ton jeu de session, lui, sera publié.

## Savoirs essentiels évalués

Logiciels d'intégration d'expériences ludiques, installation et configuration des ressources, classement des fichiers et des médias, création d'un environnement virtuel navigable, intégration d'images dans l'environnement virtuel, déplacement dans l'environnement virtuel, détection de collisions pour le déclenchement d'événements, transitions de scènes, compilation de l'application.
