# Exercice - Le personnage, l'habillage et la victoire

> Exercice du [cours 3](../cours03.md)

Ouvre le projet `JeuExpress` du cours 2 et la scène de ton monde.

### 1. Le personnage jouable

- [ ] **Window → Package Manager → My Assets** → *Starter Assets: Character Controllers | URP* → **Download**, puis **Import**
- [ ] Laisse Unity installer ses dépendances (*Input System*, *Cinemachine*) et redémarrer au besoin
- [ ] Choisis ta caméra : **1re personne** (plus simple) ou **3e personne** (on voit le personnage)
- [ ] Dans `Starter Assets/Runtime/<TonController>/Prefabs`, glisse ***NestedParent_Unpack*** dans la scène → clic droit → **Prefab → Unpack** → sors son contenu du parent
- [ ] 3e personne seulement : sélectionne ***PlayerFollowCamera*** → champ `Follow` → glisse-y ***PlayerCameraRoot*** (à l'intérieur de PlayerArmature)
- [ ] Désactive « Main Camera » s'il reste **deux** caméras actives
- [ ] Place le personnage à ton point de départ, **au-dessus** du sol
- [ ] Sélectionne-le → en haut de l'Inspector, `Tag` : **Player**
- [ ] ▶️ **Play** : ++w+a+s+d++, ++space++, la souris

!!! warning "Il tombe à l'infini ou il traverse le décor?"
    Le sol ou l'objet n'a pas de collider, ou le personnage démarre **sous** la surface. Remonte-le en `y`.

### 2. La passe « ça se parcourt »

- [ ] Fais le trajet complet départ → arrivée en Play, **trois fois**. Aucun blocage, aucune chute hors du monde
- [ ] Bouche les trous, ajoute des murs invisibles aux limites (cube allongé, `Mesh Renderer` décoché)
- [ ] Élargis les passages où tu restes coincé
- [ ] Un voisin essaie ton monde 60 secondes : trouve-t-il l'arrivée sans que tu parles? Sinon, rends-la plus évidente
- [ ] ++ctrl+s++ / ++cmd+s++ - réflexe à prendre tout de suite

### 3. Ton *gating*

- [ ] Choisis **un** prérequis entre le joueur et sa victoire ([cours 1](../cours01.md)) : une clé à ramasser, un pont à activer, un passage à trouver, un saut à réussir
- [ ] Construis-le avec ce que tu connais :
    - **Pont/porte qui s'active** : un ETB ailleurs dans le monde, réponse ***Modify Gameobject*** → `Enable` sur l'objet
    - **Clé** : un premier ETB avec la réponse ***Player Pref*** (`aCle` = `1`), et sur la porte un second ETB avec la condition ***Player Pref*** (`aCle` égal à `1`)
- [ ] ▶️ **Play** : vérifie qu'on **ne peut pas** gagner sans passer par là

!!! tip "Le décor doit dire où aller"
    Une fois ton *gate* en place, replace ton décor autour : dégage le chemin vers la porte, mets la clé quelque part de visible et attirant. Si le joueur erre, ce n'est pas lui le problème.

### 4. Un prefab à toi

- [ ] Crée un GameObject vide « Bonhomme », mets-y 3 sphères empilées
- [ ] Glisse-le dans `📁 _MOMO/Prefabs` : son nom devient **bleu**
- [ ] Dépose 4 ou 5 copies dans ton monde
- [ ] Double-clic sur le prefab, modifie-le, `Save` → **toutes** les copies changent

### 5. Les materials

- [ ] Dans `📁 _MOMO/Materials`, clic droit → **Create → Material**, nomme-le `M_Sol`
- [ ] Choisis une couleur dans ***Base Map***, glisse le material sur ton plancher
- [ ] Crée-en un deuxième, `M_Objectif`, dans une couleur **vive** (ou avec de l'***Emission***) → applique-le à un repère bien visible à l'endroit d'arrivée
- [ ] Amuse-toi 2 minutes avec `Smoothness` : mat vs miroir

!!! tip "Le repère d'arrivée"
    Un objet grand, haut et de couleur unique à l'arrivée : le joueur sait où aller sans qu'un mot soit écrit. C'est la solution la moins chère à « je ne savais pas où aller ».

### 6. Le son

- [ ] Télécharge 2 sons libres de droits ([Kenney](https://kenney.nl/assets?q=audio), [Pixabay](https://pixabay.com/sound-effects/), [Freesound](https://freesound.org)) : une **ambiance** en boucle et un **effet** court
- [ ] Dépose-les dans `📁 _MOMO/Audio`
- [ ] GameObject vide « Ambiance » → **Add Component → Audio Source** → ton clip, `Play On Awake` ✅, `Loop` ✅, `Volume` 0.3
- [ ] *(Optionnel)* Sur un objet du décor : une deuxième Audio Source avec ***Spatial Blend*** à **1** → le son devient localisé
- [ ] Note dans un fichier `credits.txt` : *titre - auteur - lien - licence* pour chaque son

### 7. La zone de victoire (ETB)

- [ ] **File → New Scene** → **Save As** → `Victoire` dans `📁 _MOMO/Scenes`
- [ ] Décore-la : un sol, un objet, une couleur - et un son de fanfare (`Play On Awake` ✅, `Loop` ❌)
- [ ] Rouvre ta scène de jeu
- [ ] **File → Build Profiles → Scene List** : glisse-y tes **deux** scènes, ta scène de jeu en **position 0**
- [ ] Glisse un prefab **ETB** à l'endroit d'arrivée, redimensionne la zone pour qu'on ne puisse pas la manquer
- [ ] Réponse ***Audio Response*** → `Response Type` **Sound Effect** → ton effet court
- [ ] Réponse ***Load Level*** → `Load Level Name` : `Victoire` (le nom **exact**, majuscule comprise)
- [ ] ▶️ **Play** : marche jusqu'à la zone → l'écran de victoire apparaît 🎉

!!! warning "Rien ne se passe?"
    1. Le tag `Player` est-il **assigné** au personnage (pas juste créé)?
    2. Le nom dans `Load Level Name` est-il **identique** au nom du fichier de scène?
    3. La scène `Victoire` est-elle bien dans la ***Scene List***?

### 8. Compiler

- [ ] **File → Build Profiles** → **Build**
- [ ] Choisis un dossier `Builds` **à l'extérieur** de `Assets`
- [ ] Attends, puis **lance ton jeu** comme une vraie application

!!! success "Jalon 0 : tu as fait un jeu"
    Un monde, un personnage, une couleur, un son, une fin - et il se lance sans Unity. Échange ton build avec un voisin et essayez le jeu de l'autre.

### 9. Avant de partir

- [ ] Relis la [grille de remise](../devoirs/jeu-express.md) : tout y est? Ce qui manque se termine en devoir, pour le début du cours 4
