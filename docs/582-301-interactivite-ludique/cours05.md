# Cours 5

!!! abstract ":material-check-decagram: GDD remis avant le début de la séance (5 %)"
    Je valide les GDD **un par un** pendant que la classe travaille. Ton document est verrouillé à la fin de notre rencontre : après ça, on construit, on ne reconçoit plus.

!!! tip "Pendant que j'appelle les élèves"
    Tu montes ton chantier, dans cet ordre :

    1. Créer le **projet Unity** du jeu de session et appliquer la structure de dossiers de la S2
    2. **Synchroniser avec GitHub** : dépôt, `.gitignore` Unity, premier commit, tableau **GitHub Projects** avec ta liste de sprint de la S4
    3. **Greybox de la zone 1**, et le **HUD** monté en parallèle


<!-- ## Déroulement de la séance

| Temps | Activité |
|---|---|
| 0h00 – 0h50 | Canvas, TextMeshPro, ancres, HUD |
| 0h50 – 1h20 | Menu titre → jeu → fin |
| 1h20 – 1h35 | Pause |
| 1h35 – 2h05 | Premier script : lire, brancher, comprendre |
| 2h05 – 2h50 | C# de survie |
| 2h50 – 3h15 | Prefabs custom |
| 3h15 – 3h35 | Le kit de scripts + atelier | -->

## L'interface

### Canvas, EventSystem, boutons

### TextMeshPro

### Les interfaces de jeu : un petit zoo

### Les 3 règles du HUD

### Les ancres : tenir à tous les écrans

## Le flux de scènes

### Titre → jeu → fin

### La pause et `Time.timeScale`

## Le feedback : la moitié de l'agentivité

## Ton premier script

!!! note "Le code est donné"
    Tu ne l'écris pas, tu le **lis** et tu le **branches**. Le but est de démystifier avant d'enseigner — dans une heure, tu écriras le tien.

### Anatomie de ce qu'on te donne

### Brancher une méthode sur `Button.onClick`

## C# de survie

!!! important "Un script écrit par toi est exigé au projet final"
    L'exigence **B6** du [travail final](./devoirs/projet-final.md) demande **au moins un script C# écrit par toi**, dont tu peux expliquer chaque ligne à l'oral. Pas un script du kit branché : un que **tu** as écrit.

    Une quinzaine de lignes suffisent. Tu n'as pas à trouver l'idée aujourd'hui — garde simplement l'œil ouvert : dès qu'un besoin de ton jeu résiste au kit et au CES, c'est ton script. Si rien ne s'est présenté d'ici le [cours 11](./cours11.md), on en choisit un ensemble.

### Pourquoi programmer, si le CES existe?

### Anatomie d'un script

### Les variables : les boîtes mémoire du jeu

### Le temps : `Update` et `deltaTime`

### Les conditions

### Les méthodes : nommer un bloc d'actions

### La Console : ta lampe de poche

### Usage cool : générer des GameObjects

## Les prefabs custom

### Créer, instancier, surcharger

### Les variantes et les prefabs imbriqués

## Le kit de scripts

!!! tip "À conserver précieusement"
    Compteur, minuterie, santé et dégâts, collectible, *spawner*, changement de scène différé, *screen shake*, suivi d'objet. Chacun est commenté, exposé dans l'Inspector, et appelable depuis un CES. Le kit s'enrichit d'une séance à l'autre.

## Pratique

## Devoirs

<!-- Savoirs essentiels touchés (note pour l'enseignant) :

-->

<!--
================================================================
NOTES DE RÉDACTION — à supprimer une fois la séance écrite
================================================================
À rapatrier depuis .archive/ (voir .archive/MIGRATION.md) :
  - .archive/cours09.md  § Canvas, EventSystem, boutons
                         § Les interfaces de jeu : un petit zoo
                         § Les 3 règles du HUD
                         § Les ancres
                         § Le feedback : la moitié de l'agentivité
                         § Rappel : le flux de scènes
  - .archive/cours06.md  § Anatomie d'un script / Les variables / Le temps
                         § Les conditions / Les méthodes / La Console
  - .archive/cours03.md  § Les prefabs
  - .archive/exercices/cours06-controles-et-premier-script.md
  - .archive/exercices/cours09-camera-hud-et-feedback.md (partie HUD)

À écrire à neuf : TextMeshPro, Instantiate en boucle, ET SURTOUT le kit
de scripts (dépendance de toutes les séances suivantes).

Les materials sont partis au cours 9 (passe visuelle) — cette séance
est déjà bien assez chargée.
================================================================
-->
