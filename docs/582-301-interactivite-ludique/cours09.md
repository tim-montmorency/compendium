# Cours 9

## Animation et états du personnage

Un monde immobile est un décor; un monde qui bouge est vivant. Aujourd'hui : animer les éléments visuels de ton jeu, comprendre la machine qui décide *quelle* animation joue *quand* (l'Animator), et détecter **l'état** de ton personnage pour le montrer au joueur - par l'image et par le son.

<!-- ## Déroulement de la séance

| Temps | Activité |
|---|---|
| 0h00 – 0h15 | Retour : HUD et feedbacks, questions |
| 0h15 – 1h30 | Théorie : principes d'animation, l'Animator, les machines à états |
| 1h30 – 1h45 | Pause |
| 1h45 – 3h20 | Pratique : animer le décor, la porte, sonoriser les états |
| 3h20 – 3h35 | Rituel de commit + devoirs | -->


## Théorie

### Tu sais déjà animer

Tu as fait de l'After Effects : des **keyframes**, de l'**interpolation**, des courbes d'**easing**. Unity anime exactement pareil - tu poses des valeurs à des moments, le moteur remplit les trous :

```
frame 0 :  y = 0
frame 30 : y = 0.5     ← Unity interpole tout ce qui est entre
frame 60 : y = 0
```

La différence avec After Effects : ici, l'animation doit **réagir au joueur**. Un film joue toujours pareil; ta porte ne s'ouvre que si l'interacteur a la clé. D'où la deuxième moitié du cours : la machine à états.

### Trois principes d'animation qui changent tout

Des 12 principes classiques de Disney, trois font 90 % du travail dans un jeu :

* **Anticipation** : un petit mouvement inverse avant le mouvement principal (s'accroupir avant de sauter). Sans elle, tout paraît téléporté
* **Squash & stretch** : les objets s'écrasent et s'étirent à l'impact - c'est ce qui rend une balle « vivante » et un bloc « mort ». On s'en resservira au cours 12
* **Timing** : lent = lourd, majestueux; rapide = léger, nerveux. Ta porte de château et ta porte de saloon n'ont pas le même timing

<div class="grid grid-1-2" markdown>
![Blasphemous](./assets/img/games/blasphemous.jpg){data-zoom-image}

[Blasphemous (2019)](https://store.steampowered.com/app/774361/Blasphemous/) : du pixel art, donc peu d'images - mais chaque animation a une anticipation et un timing si soignés que le combat « pèse ». L'animation, c'est du design avant d'être du dessin.
</div>

### Les 3 pièces de l'animation Unity

| Pièce | Rôle | Analogie |
|---|---|---|
| **Animation Clip** | UNE séquence de keyframes (position, rotation, couleur, intensité…) | Une chanson |
| **Animator Controller** | Le graphe qui décide quel clip joue quand | Le DJ |
| **Animator** (composant) | Exécute le controller sur un GameObject | Le haut-parleur |

!!! warning "Deux fenêtres au nom cruel"
    **Animation** (on crée les clips, les keyframes) et **Animator** (on organise les états et transitions). Les confondre est LE piège de la séance. Mnémo : Anima**tion** = créa**tion**; Anima**tor** = organisa**teur**.

### La machine à états : le cerveau

Un **état** = « ce que l'objet fait en ce moment » (fermée / en train de s'ouvrir / ouverte). Une **transition** = le passage autorisé d'un état à l'autre, sous condition. Un **paramètre** = la variable qui déclenche la condition.

```mermaid
graph LR
    A(Fermee) -->|"ouvrir = true"| B(Ouverture)
    B --> C(Ouverte)
```

Tu as déjà rencontré ce concept sans le nom : `aCle` du cours 5 EST un état. La machine à états, c'est la version visuelle et animée de tes `bool`.

!!! warning "Loop Time : le piège"
    Un clip destiné à jouer **une fois** (porte qui s'ouvre) : sélectionne le clip → **décoche Loop Time**. Sinon ta porte s'ouvrira… en boucle, pour l'éternité. Symptôme classique : « mon animation clignote ».

### L'état du personnage : détecter, puis montrer

Le devis demande de **détecter l'état du personnage** (au sol, dans les airs, en collision) et de l'**indiquer** visuellement et par le son. Comment un jeu sait-il qu'un personnage est « au sol »?

* **Le raycast** : un rayon invisible tiré vers le bas - s'il touche le sol à moins de X cm, on est au sol. (Un laser de mesure, littéralement)
* **Le CharacterController** : expose directement `isGrounded`

Ton contrôleur Starter Assets fait déjà cette détection et pilote un Animator complet avec des paramètres (`Speed`, `Grounded`, `Jump`, `FreeFall`). Aujourd'hui on ne le réécrit pas - on l'**observe** (rétro-ingénierie, comme au cours 5), puis on le **sonorise**.

```mermaid
graph LR
    A(Au sol) -->|saut| B(Dans les airs)
    B -->|"atterrissage → POUF + son"| A
```


## Pratique

### 1. Animer un collectable (flottement + rotation)

L'affordance du cours 5 en action : **l'œil est attiré par ce qui bouge**. Ta clé doit flotter.

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

## Devoir

- [ ] Au moins **3 animations** intégrées à ton jeu (collectable, porte, + une au choix)
- [ ] Rédige ta **liste des tâches restantes** (tout ce qui manque à ton jeu, en vrac) : on la transforme en plan de production au prochain cours - c'est le jalon 2!

## Ressources

* [Les 12 principes d'animation (vidéo, sous-titres FR)](https://www.youtube.com/watch?v=uDqjIdI4bF4)
* [Documentation Unity : Animator Controller](https://docs.unity3d.com/Manual/class-AnimatorController.html)

## Savoirs essentiels touchés

Animation d'éléments visuels, détection de l'état du personnage (collision, au sol, dans les airs), indication visuelle et animation de l'état du personnage, déclenchement d'échantillons sonores.
