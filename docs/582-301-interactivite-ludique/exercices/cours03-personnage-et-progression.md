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

## 2. La clé

- [ ] Place un prefab Synty qui servira de **clé** — au sens de TON jeu : gemme, offrande, batterie, carte magnétique
- [ ] Glisse un **ETB** (`Enhanced Trigger Box` > `Prefabs` > `ETB`) autour de cet objet, un peu plus gros que lui
- [ ] Options de base : `Trigger Tags` = `Player` · `Debug Trigger Box` ✅ (on le décochera quand ça marchera)
- [ ] Ajoute la réponse ***Player Pref Response*** :
    - `Player Pref Key` : `aCle`
    - `Player Pref Type` : **int**
    - `Player Pref Value` : `1`
- [ ] Ajoute la réponse ***Modify GameObject*** : ton objet clé, `Modify Type` = **Disable**
- [ ] `After Trigger` : **Destroy Trigger Box**
- [ ] ▶️ Passe sur la clé : elle disparaît, et la Console confirme le déclenchement

## 3. La porte

- [ ] Place un objet qui **bloque** un passage (garde son collider solide!)
- [ ] Glisse un deuxième **ETB** devant, un peu plus large que la porte
- [ ] Options de base : `Trigger Tags` = `Player`
- [ ] Ajoute la condition ***Player Pref Condition*** :
    - `Condition Type` : **equal to**
    - `Player Pref Key` : `aCle` · `Type` : **int** · `Value` : `1`
    - **`Refresh Every Frame`** ✅ ← **ne saute pas cette case**
- [ ] Ajoute la réponse ***Modify GameObject*** : le battant, `Modify Type` = **Disable**
- [ ] ▶️ Teste **les deux chemins** :
    - sans la clé → la porte reste fermée
    - avec la clé → elle s'ouvre

!!! danger "Ça ne marche pas? Le diagnostic en 4 questions"
    1. `Trigger Tags` contient bien `Player`, et le personnage porte bien ce tag?
    2. `Refresh Every Frame` est coché sur la condition?
    3. Le nom du pref est **identique** des deux côtés? `aCle` ≠ `acle` ≠ `aClé`
    4. `Debug Trigger Box` coché sur les deux : si le message de la clé apparaît mais pas celui de la porte, le problème est dans la **condition**. S'il n'apparaît nulle part, le problème est dans le **tag**.

    Couper le problème en deux, puis en deux encore : c'est ça, déboguer.

## 4. Le piège de la persistance

- [ ] Arrête le jeu, relance-le. **La porte est déjà ouverte.**
- [ ] Comprends pourquoi : un *player pref* est écrit sur le disque et survit à la fermeture du jeu
- [ ] Corrige-le : crée un troisième ETB nommé `ResetProgression`
    - Coche ***Disable Entry Check*** (il se déclenche seul au démarrage, sans attendre personne)
    - Réponse ***Player Pref Response*** : `aCle` = `0`
- [ ] ▶️ Relance deux fois : la porte doit être fermée les deux fois

## 5. Habiller le personnage

- [ ] Repère le FBX d'un personnage dans ton pack Synty
- [ ] Sur [Mixamo](https://www.mixamo.com) : `Upload Character` → place les marqueurs → `Skeleton LOD: Standard (65)` → `Download` en **FBX for Unity**, pose **T-pose**
- [ ] Dans Unity : onglet `Rig` → `Animation Type: Humanoid` → `Avatar Definition: Create From This Model` → `Apply`
- [ ] `Configure…` : vérifie que les os sont **verts**
- [ ] Glisse le personnage riggé comme **enfant de PlayerArmature**, en position `0, 0, 0`
- [ ] Désactive l'ancien mesh gris
- [ ] Sur `PlayerArmature` > `Animator` > `Avatar` : assigne le **nouvel** avatar
- [ ] Réassigne le **material Synty** sur ton personnage (Mixamo l'a perdu)
- [ ] Ajuste le `Scale Factor` et la capsule du `CharacterController` si nécessaire
- [ ] ▶️ Marche, cours, saute — les animations des Starter Assets fonctionnent sur ton personnage

!!! tip "Mixamo est en panne?"
    Utilise un personnage **déjà riggé** du lecteur de classe et reprends à l'avant-dernière étape. Ne perds pas ta séance là-dessus.

## 6. À toi : détourner le patron

- [ ] Adapte le clé/porte à **ton** jeu. Mêmes montages, autre histoire :

| Variante | Ce qui change |
|---|---|
| Levier → pont qui apparaît | `Modify Type` devient **Enable** |
| Bouton → lumière qui révèle un passage | La réponse devient ***Lighting Response*** |
| Statue à regarder → passage ouvert | La condition devient ***Camera Condition*** (*Looking At*) |
| 3 gemmes → sortie déverrouillée | `Player Pref Value` = `++` sur chaque gemme · condition ***greater than or equal to*** `3` |

- [ ] Fais-en un **prefab** : glisse ta clé (ETB compris) dans `📁 _MOMO/Prefabs`. Duplique-la : tu as maintenant un moule
- [ ] Renomme tes objets pour qu'ils racontent TON jeu — `LevierSalleDesMachines`, pas `ETB (3)`
- [ ] **Passe d'affordance** : ta clé est-elle visible et désirable? Ta porte a-t-elle l'air d'une porte et pas d'un mur décoratif? Si non, change sa couleur ou son material

## 7. La fin et le build

- [ ] Une scène `Victoire` créée et ajoutée à la `Scene List` (`File` > `Build Profiles`)
- [ ] Un ETB à l'arrivée avec la réponse ***Load Level Response*** → le nom **exact** de la scène
- [ ] `Build` vers un dossier `Builds`, **à l'extérieur** de `Assets`
- [ ] Lance ton jeu en dehors d'Unity 🎉
- [ ] Décoche `Debug Trigger Box` sur tes ETB avant de remettre

## 8. Avant de partir

- [ ] Fais essayer ton build à un voisin. Regarde-le jouer **sans parler**
- [ ] Note ce qu'il n'a pas compris — c'est ta dernière liste de corrections avant le dépôt du jeu express
