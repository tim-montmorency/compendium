# Atelier — Le GDD de ton jeu

> Exercice du [cours 4](../cours04.md)

L'atelier se fait **en classe**, avec moi dans la salle. L'objectif : sortir d'ici avec un concept qui tient debout, pour n'avoir plus qu'à le mettre au propre en devoir.

Les 14 éléments attendus sont dans l'[énoncé du travail](../devoirs/gdd-jeu.md). L'atelier couvre les plus durs — ceux qu'on ne peut pas écrire seul à minuit.

[Modèle de GDD](https://www.figma.com/fr-fr/communaute/file/1657116644655532636/document-de-conception-gdd){ .md-button .md-button--primary }

### 1. Trois idées, pas une (10 min)

- [ ] Écris **trois** concepts en une phrase chacun. Pas un : trois. La première idée est presque toujours la plus convenue
- [ ] Format imposé : *« Un jeu où le joueur [VERBE] des [OBJETS] pour [OBJECTIF], dans un univers [AMBIANCE]. »*
- [ ] Relis-les à voix basse. Laquelle te donne envie de commencer tout de suite? Garde celle-là

### 2. Le parti pris en une phrase (5 min)

- [ ] Trois adjectifs qui décrivent le *feeling* visé — ex. : « lent, inquiétant, industriel »
- [ ] Écris-les sous forme de phrase : *« un jeu lent et inquiétant dans une station vide »*

!!! important "C'est un élément noté"
    Le parti pris (**H1**) est l'intention que tu devras **tenir jusqu'au bout**, et il est évalué au critère créativité. Écris-le maintenant : tu le reliras à chaque décision de la session.

### 3. La boucle en verbes (15 min)

- [ ] Écris ce que le joueur fait pendant les **30 premières secondes**. Uniquement des verbes concrets
- [ ] Écris ce qu'il fait pendant les **5 minutes** suivantes. Est-ce la même chose en plus difficile? Bien. Est-ce autre chose complètement? Attention : tu as deux jeux
- [ ] Encercle **LA** mécanique principale. Une seule. Les autres sont du décor et se coupent

!!! warning "Test de survie"
    Retire tout sauf ta mécanique principale. Reste-t-il un jeu jouable? Si non, ta mécanique principale n'est pas celle que tu crois.

### 4. Victoire et défaite programmables (10 min)

- [ ] Remplis la colonne de droite pour ton jeu :

| Ce que je veux | Ce que ça donne en code |
|---|---|
| Ma condition de **victoire** : | `if (…)` |
| Ma condition d'**échec** : | `if (…)` |

- [ ] Pas de défaite dans ton jeu? Écris ici le paragraphe qui le **justifie** — c'est exigé (**A7**)
- [ ] Bloqué? Lève la main : c'est exactement ce que je suis là pour débloquer

### 5. Tes 3 zones (15 min)

Trois **lieux**, pas trois morceaux de terrain.

- [ ] Pour chacune : le lieu, la palette, l'ambiance sonore, **ce qu'on y fait qu'on ne fait pas ailleurs**

| | Zone 1 | Zone 2 | Zone 3 |
|---|---|---|---|
| Lieu | | | |
| Palette | | | |
| Ambiance sonore | | | |
| Ce qu'on y fait | | | |

!!! warning "Test de la carte postale"
    Imagine une capture de chacune de tes trois zones, côte à côte. **On doit reconnaître instantanément trois lieux différents.** Si deux captures sont interchangeables, tu n'as pas trois zones, tu en as une.

### 6. Tes 3 portes (15 min)

Trois moments où l'interacteur est bloqué et doit accomplir quelque chose pour continuer. Ensemble, elles forment **un système cohérent** avec ton genre — transversal, ou propre à chaque zone. Au moins une doit être un vrai **clé/serrure**.

Les types disponibles : clé/serrure · adresse · connaissance · collecte · confrontation · mécanisme · découverte · négociation. **C'est un menu, pas une liste à cocher.**

- [ ] Écris d'abord la phrase : *« Dans mon jeu, on avance en ______________. »* Si elle a besoin d'un « et aussi », ce n'est pas un système, c'est une collection

- [ ] Remplis le tableau. Une phrase par case, maximum

| | Type de *gating* | Ce qui bloque | Ce qui débloque |
|---|---|---|---|
| Porte 1 | | | |
| Porte 2 | | | |
| Porte 3 | | | |

- [ ] Passe chaque porte au **[test des trois questions](../devoirs/projet-final/index.md#le-test-des-trois-questions)** : pourquoi c'est fermé? comment le joueur sait-il quoi faire? qu'est-ce qui change quand ça s'ouvre?
- [ ] **Test du retrait** : retire une porte par la pensée. Le jeu devient-il meilleur? Alors elle ne sert à rien — la qualité des portes est évaluée, pas leur nombre

!!! tip "Une courbe, pas trois fois la même chose"
    La porte 1 **enseigne**, la porte 3 **défie**. Si franchir la première et la troisième demande le même effort, l'engagement s'érode.

### 7. Le découpage technique (5 min)

Le découpage est **imposé** : trois scènes Unity, une par zone.

- [ ] Nomme tes trois scènes et note-les au GDD

!!! tip "Pourquoi c'est imposé"
    Pouvoir couper la zone 3 sans casser le jeu est le meilleur filet de sécurité qui soit — et tu ne sais pas encore comment se passera ta semaine 13.

### 8. Le schéma de contrôle (5 min)

- [ ] Encercle : **première personne** ou **troisième personne**. Lequel sert ta boucle?
- [ ] Le clavier et la souris sont le défaut. Coche si tu veux aussi **supporter la manette Xbox** — c'est gratuit avec les Starter Assets, mais les menus demandent un réglage au cours 6

!!! tip "Si tu vises la borne d'arcade (optionnel)"
    **4 directions, 2 boutons, aucune caméra libre.** Trois décisions à écrire tout de suite :

    - [ ] Ma caméra : fixe · suivi automatique · vue de dessus · isométrique
    - [ ] Mon bouton 1 fait : ____________________
    - [ ] Mon bouton 2 fait : ____________________
    - [ ] Relis tes 3 portes : aucune ne doit exiger de viser ni d'appuyer sur une touche nommée

### 9. Le croquis du niveau (15 min)

- [ ] À main levée, vue du dessus, sur papier ou sur tablette. Pas besoin que ce soit beau
- [ ] Marque : le **départ**, tes **3 zones**, tes **3 portes** (P1, P2, P3), la **fin**
- [ ] Trace le **chemin** du joueur au crayon. Compte le temps : **1 minute minimum par zone**, 10 minutes au total maximum
- [ ] Écris **un mot** à côté de chaque zone : ce qu'on doit ressentir en y arrivant. Trois mots différents?

### 10. L'ambiance et le moodboard (15 min)

- [ ] Rassemble **4 à 8 images** de référence : captures de jeux, photos, illustrations, palettes de couleurs
- [ ] Note la **source** de chaque image — la citation des médias est dans la grille
- [ ] Test de cohérence : montre ton moodboard à un voisin sans rien dire. Nomme-t-il tes trois adjectifs?

### 11. Vérification Synty (10 min)

- [ ] Ouvre le POLYGON Sampler Pack dans Unity et cherche les éléments de ton croquis
- [ ] Note les noms des prefabs que tu utiliseras, zone par zone
- [ ] Un élément essentiel n'existe pas dans le pack? **Change-le maintenant**, pas à la semaine 10. C'est cinq minutes aujourd'hui, une soirée perdue plus tard

### 12. La liste de sprint et la colonne `Won't` (20 min)

- [ ] **8 cartes maximum**, sur papier. Un seul objectif : le prototype jouable du cours 7
- [ ] Chaque carte commence par un **verbe** et tient en **2 h** de travail
- [ ] Ordonne-les par **risque** : ce qui peut faire échouer ton projet passe en premier
- [ ] Écris **trois cartes `Won't`** : trois choses que tu ne feras pas dans cette version

### 13. Le filtre avant de partir (5 min)

- [ ] Passe ton concept aux [six questions du GDD](../extra/heuristiques.md#les-6-questions-du-gdd)
- [ ] Une question sans réponse claire = un point à régler ce soir, pas à la validation

!!! success "En sortant d'ici"
    Tu devrais avoir : un concept, un parti pris, une boucle en verbes, deux conditions programmables, trois zones, un système de gating et ses trois portes, un schéma de contrôle, un croquis, un début de moodboard et une liste de sprint sur papier.

    Le devoir, c'est la **mise au propre** des 14 éléments — remise **avant le début du cours 5**.
