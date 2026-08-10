# Exercice - Animations et états du personnage

> Exercice du [cours 10](../cours10.md)

### 1. Animer un collectable (flottement + rotation)

L'affordance du cours 7 en action : **l'œil est attiré par ce qui bouge**. Ta clé doit flotter.

- [ ] Crée un GameObject vide `ParentCle` à (0,0,0) → glisse ta clé **comme enfant** → replace le parent où était la clé
    > Pourquoi un parent? Pour animer l'enfant **localement** : l'animation reste valide peu importe où tu déplaces le parent dans le niveau
- [ ] Sélectionne `ParentCle` → **Add Component → Animator**
- [ ] Dans `_Project/Animations` : clic droit → **Create → Animator Controller** → `ControleurCle` → glisse-le dans le champ **Controller** de l'Animator
- [ ] **Window → Animation → Animation** (la fenêtre de créa**tion**) : avec `ParentCle` sélectionné → **Create** → clip `Flottement` dans `_Project/Animations`
- [ ] Clique le bouton d'**enregistrement** (le rond rouge) et pose tes keyframes **sur l'enfant** (la clé) :
    * frame 0 : position de départ
    * frame 30 : Y + 0.3, rotation Y = 180
    * frame 60 : position de départ, rotation Y = 360
- [ ] Arrête l'enregistrement → ▶️ Play : la clé flotte et tourne (Loop Time reste coché ici : c'est une boucle, c'est voulu)

### 2. Animer la porte (une vraie ouverture)

- [ ] Même recette sur ton battant de porte : **Animator** + controller `ControleurPorte` + clip `Ouverture` - une rotation Y de 0 à 100° (ou un glissement latéral) sur ~1 seconde
- [ ] **Décoche Loop Time** sur le clip `Ouverture`!
- [ ] Fenêtre **Animator** (l'organisa**teur**) : clic droit → **Create State → Empty** → nomme-le `Fermee` → clic droit dessus → **Set as Layer Default State** (il devient orange)
    > Sans cet état vide par défaut, la porte jouerait `Ouverture` dès le lancement du jeu. L'état `Fermee` = « ne rien faire, attendre »
- [ ] Dans `Porte.cs`, remplace la disparition par l'animation :

```csharp
public Animator animateurPorte; // Glisser le battant (celui qui a l'Animator) ici
// ...à la place de batantDePorte.SetActive(false) :
animateurPorte.Play("Ouverture"); // Joue l'état nommé "Ouverture", maintenant
```

- [ ] ▶️ Teste le parcours complet : clé → porte → **elle s'ouvre pour vrai**. Compare mentalement avec la porte qui « disparaissait » : ton jeu vient de gagner 10 points de crédibilité
- [ ] Ajuste le **timing** : ta porte est-elle lourde (lente) ou légère (vive)? Fais-la correspondre à ton ambiance

### 3. L'état du personnage : observer, puis sonoriser

- [ ] Sélectionne ton personnage → ouvre la fenêtre **Animator** : le graphe des Starter Assets s'affiche - repère les états (Idle/Walk/Run, InAir…) et, colonne de gauche, les **paramètres** (`Speed`, `Grounded`, `Jump`…)
- [ ] ▶️ Play, et regarde le graphe **en direct** pendant que tu joues : les états s'allument, les paramètres bougent, les transitions s'exécutent. Cours, saute, arrête-toi. **Tu regardes une machine à états professionnelle travailler en temps réel** - c'est la détection d'état du devis, sous tes yeux
- [ ] Réponds dans ton README (section Notes) : quel paramètre passe à `false` quand tu sautes? Quelle transition ramène vers Idle?
- [ ] **Sonorise les états** : le contrôleur Starter Assets expose des champs audio (sons de pas, son d'atterrissage - cherche *Footstep Audio Clips* / *Landing Audio Clip* dans l'Inspector du personnage) → remplace par TES clips, cohérents avec ton ambiance (pas de bruits de béton dans une forêt!)
- [ ] ▶️ Saute d'une plateforme : atterrissage = animation (visuel) + *pouf* (sonore). **État détecté → indiqué sur les deux canaux : le trio complet du devis, en action**

### 4. Une troisième animation, pour TON jeu

- [ ] Choisis un élément de ton niveau qui mérite de vivre : drapeau qui ondule, enseigne qui oscille, plateforme qui monte/descend, cristal qui pulse (animation de **couleur** d'une Light!)
- [ ] Recette connue : parent si nécessaire → Animator → controller → clip → keyframes → Loop selon le cas

### 5. Le rituel

- [ ] Commit : `Animations decor + porte + sons d'etat` → Push
