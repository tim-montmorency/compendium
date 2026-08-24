# Exercice — Le personnage et la progression

> Exercice du [cours 3](../cours03.md)

!!! abstract "La méthode d'aujourd'hui"
    Aucune ligne de code. Tout se monte dans l'Inspector. L'objectif n'est pas d'apprendre des cases à cocher — c'est de comprendre qu'un système de progression, c'est **une valeur qu'on écrit quelque part et qu'on relit ailleurs**. Le reste n'est que de l'habillage.

## 1. Le personnage

- [ ] Importe les **Starter Assets: Character Controllers (URP)** via `Package Manager` > `My Assets`
- [ ] Choisis ta perspective et monte le contrôleur correspondant :
    - **Première personne** : glisse `NestedParent_Unpack` du `FirstPersonController`, puis clic-droit > `Prefab` > **`Unpack Completely`**
    - **Troisième personne** : glisse `NestedParent_Unpack` du `ThirdPersonController`, **`Unpack Completely`**, puis mets `PlayerCameraRoot` dans le champ `Follow` de `PlayerFollowCamera`
- [ ] **Désactive la « Main Camera » d'origine de la scène** — celle qu'Unity avait créée tout seul. Celle du contrôleur, qui porte le `CinemachineBrain`, reste active
- [ ] Place le personnage **au-dessus** du sol, à ton point de départ
- [ ] Assigne le tag **Player** au parent (celui qui porte le `CharacterController`)
- [ ] ▶️ Marche, saute, regarde autour

!!! warning "Diagnostic en 3 questions"
    1. Il tombe à l'infini? Ton sol n'a pas de collider, ou le personnage démarre dessous
    2. L'écran est noir? Tu as désactivé la caméra du contrôleur au lieu de celle de la scène
    3. Un avertissement `AudioListener`? Il y en a deux — la Main Camera d'origine est encore active

## 2. La Variable

L'état du jeu se crée **une seule fois**, et les deux zones s'y branchent ensuite.

- [ ] `Assets` > `Create` > `Collider Event System` > `Variables` > ***Bool Variable***
- [ ] Nomme-la `aCle` et range-la dans `📁 _/Variables`
- [ ] Laisse **`Persistent` décoché** — on verra à l'étape 4 pourquoi ça compte

## 3. La clé

- [ ] Place un prefab Synty qui servira de **clé** — au sens de TON jeu : gemme, offrande, batterie, carte magnétique
- [ ] Glisse un **`Trigger Cube`** (`Packages` > `Collider Event System` > `Prefabs`) autour de cet objet, un peu plus gros que lui
- [ ] Options de base : `Required Tags` = `Player` · `Debug Logging` ✅ (déjà coché par défaut — on le décochera quand ça marchera)
- [ ] `Add Action` > ***Variable*** :
    - `Target Variable` : `aCle`
    - `Value` : ✅ (true)
- [ ] `Add Action` > ***Game Object*** : `Target Mode` **Specific Object**, `Target` = ton objet clé, `Operation` = **Disable**
- [ ] `After Trigger` : **Destroy**
- [ ] ▶️ Passe sur la clé : elle disparaît, et la Console confirme le déclenchement

## 4. La porte

- [ ] Place un objet qui **bloque** un passage (garde son collider solide!)
- [ ] Glisse un deuxième **`Trigger Cube`** devant, un peu plus large que la porte
- [ ] Options de base : `Required Tags` = `Player`
- [ ] `Add Condition` > ***Variable*** :
    - `Target Variable` : `aCle`
    - valeur attendue : ✅ (true)
- [ ] `Add Action` > ***Game Object*** : `Target` = le battant, `Operation` = **Disable**
- [ ] ▶️ Teste **les deux chemins** :
    - sans la clé → la porte reste fermée
    - avec la clé → elle s'ouvre

!!! danger "Ça ne marche pas? Le diagnostic en 4 questions"
    1. `Required Tags` contient bien `Player`, et le personnage porte bien ce tag?
    2. Les deux zones pointent-elles vers **le même asset** `aCle`? Un champ `Target Variable` vide ne déclenche jamais rien
    3. As-tu glissé la porte depuis la **Hierarchy** et non depuis le panneau Project? Un prefab *asset* n'est pas l'objet de ta scène
    4. `Debug Logging` coché sur les deux : si le message de la clé apparaît mais pas celui de la porte, le problème est dans la **condition**. S'il n'apparaît nulle part, le problème est dans le **tag**.

    Couper le problème en deux, puis en deux encore : c'est ça, déboguer.

## 5. Le piège de la persistance

- [ ] Sélectionne ton asset `aCle` et coche **`Persistent`**
- [ ] ▶️ Ramasse la clé, ouvre la porte. Arrête le jeu, relance-le. **La porte est déjà ouverte.**
- [ ] Comprends pourquoi : une Variable `Persistent` est écrite sur le disque et rechargée au lancement suivant
- [ ] **Décoche `Persistent`** et relance deux fois : la porte doit être fermée les deux fois

!!! tip "Quand Persistent est utile"
    Pas pour une progression à l'intérieur d'une partie — pour ce qui doit **survivre entre deux parties** : le meilleur score, le volume choisi, le dernier niveau atteint. C'est ta première rencontre avec la sauvegarde, on y revient au [cours 11](../cours11.md).

## 6. Habiller le personnage

- [ ] Repère un personnage en **T-pose** dans ton pack Synty (`Prefabs` > `Characters`, ou le FBX dans `Models`)
- [ ] Glisse-le comme **enfant de PlayerArmature**, en position `0, 0, 0`
- [ ] Désactive l'ancien mesh gris (ne le supprime pas)
- [ ] Ajuste le `Scale Factor` du FBX et la capsule du `CharacterController` si nécessaire
- [ ] ▶️ Ton jeu a maintenant un visage

!!! note "Il glisse les bras en croix?"
    Normal : un T-pose Synty n'a pas de squelette, donc aucune animation ne s'y applique. On le riggera au [cours 6](../cours06.md), avec l'Animator. Aujourd'hui, ce qui compte c'est l'**identité visuelle** et le **build**.

!!! tip "Ton personnage a déjà un squelette?"
    Certains packs en livrent. Onglet `Rig` → `Animation Type: Humanoid` → `Avatar Definition: Create From This Model` → `Apply`. Si `Configure…` montre des os **verts**, assigne ce nouvel avatar dans l'`Animator` de PlayerArmature et les animations partent tout de suite.

## 7. À toi : détourner le patron

- [ ] Adapte le clé/porte à **ton** jeu. Mêmes montages, autre histoire :

| Variante | Ce qui change |
|---|---|
| Levier → pont qui apparaît | `Operation` devient **Enable** |
| Bouton → lumière qui révèle un passage | Action ***Game Object*** > **Enable** sur la lumière |
| Statue à regarder → passage ouvert | La condition devient ***Looking At*** |
| Appuyer sur ++e++ devant l'objet | Ajoute une condition ***Input*** (`Key` : `E`, `Trigger On` : **Press**) |
| 3 gemmes → sortie déverrouillée | `Int Variable` · sur chaque gemme, Action ***Variable*** en `Value Mode` **Additive** `+1` · sur la sortie, Condition ***Variable*** *Greater Than Or Equal* `3` |

- [ ] Fais-en un **prefab** : glisse ta clé (zone CES comprise) dans `📁 _/Prefabs`. Duplique-la : tu as maintenant un moule
- [ ] Renomme tes objets pour qu'ils racontent TON jeu — `LevierSalleDesMachines`, pas `Trigger Cube (3)`
- [ ] **Passe d'affordance** : ta clé est-elle visible et désirable? Ta porte a-t-elle l'air d'une porte et pas d'un mur décoratif? Si non, change sa couleur ou son material

!!! tip "Le raccourci de l'affordance : Hint Material"
    Dans les options de base, coche ***Show Hint Material*** et glisse un material bien visible : il sera appliqué **tant que les conditions ne sont pas remplies**, puis retiré automatiquement. Ta porte reste surlignée tant que tu n'as pas la clé. Deux clics, et l'interaction devient lisible sans un mot d'explication.

## 8. La fin et le build

- [ ] Une scène `Victoire` créée et ajoutée à la `Scene List` (`File` > `Build Profiles`)
- [ ] Une zone CES à l'arrivée avec l'action ***Scene*** : `Operation` **Load**, et **glisse la scène** dans le champ `Scene Asset` (pas de nom à taper — ça évite les fautes de frappe)
- [ ] `Build` vers un dossier `Builds`, **à l'extérieur** de `Assets`
- [ ] Lance ton jeu en dehors d'Unity 🎉
- [ ] Décoche `Debug Logging` sur tes zones CES avant de remettre

!!! danger "La scène doit être dans les Build Settings"
    Charger une scène absente de la liste **fonctionne dans l'éditeur** et **échoue dans le build**. Unity a une commodité en Play Mode qui retrouve la scène par son nom dans tout le projet; le jeu compilé, lui, ne l'a pas. Vérifie ta `Scene List` avant de compiler.

## 9. Avant de partir

- [ ] Fais essayer ton build à un voisin. Regarde-le jouer **sans parler**
- [ ] Note ce qu'il n'a pas compris — c'est ta dernière liste de corrections avant le dépôt du jeu express
