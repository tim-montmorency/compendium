# Exercice - Le monde et le personnage

> Exercice du [cours 2](../cours02.md)

### 1. Créer le projet

- [ ] Unity Hub → **New project** → gabarit **Universal 3D** (URP)
- [ ] Nom : `JeuExpress` - emplacement : un dossier **sans accents ni espaces**, PAS dans OneDrive/Google Drive
- [ ] **Create project** (c'est long la première fois, c'est normal)
- [ ] Dans la fenêtre **Project**, crée l'arborescence vue en théorie (`_Project` avec `Scenes`, `Scripts`, etc., et `Plugins`)

### 2. Importer le POLYGON Sampler Pack

- [ ] Le pack doit être lié à ton compte Unity (sinon : [page de l'asset](https://assetstore.unity.com/packages/3d/props/polygon-sampler-pack-207048) → **Add to My Assets**)
- [ ] **Window → Package Manager → My Assets** → *POLYGON Sampler Pack* → **Download**, puis **Import** (laisse tout coché)
- [ ] Range le dossier importé dans `Plugins`
- [ ] Ouvre la **scène démo** du pack et explore-la 2 minutes : voilà ce qu'on peut construire avec

!!! warning "Tout est rose?!"
    Des matériaux **magenta** = des matériaux non convertis pour URP. Sélectionne les matériaux du pack, puis
    **Edit → Rendering → Materials → Convert Selected Built-in Materials to URP**. On le fait ensemble.

### 3. Construire ton mini-monde

- [ ] **File → New Scene** → sauvegarde-la sous `Jeu` dans `_Project/Scenes`
- [ ] Clic droit dans la Hierarchy → **3D Object → Plane** : ton sol. Agrandis-le (échelle 5-5-5)
- [ ] Depuis le dossier Synty, **glisse-dépose** des prefabs : bâtiments, arbres, clôtures, accessoires
- [ ] Compose un **petit parcours** : un point de départ, un chemin, un endroit d'arrivée évident
- [ ] Classe tes objets de décor dans des **GameObject Empty** bien nommés (bonne pratique vue au cours 1)

!!! tip "Pense « terrain de jeu », pas « diorama »"
    Ton monde doit se **parcourir** : laisse des passages assez larges, évite de tout coller. Tu le testeras dans 10 minutes.

### 4. Un personnage jouable, sans code

- [ ] **Window → Package Manager → Unity Registry** → cherche **Starter Assets - ThirdPerson** (Unity Technologies, gratuit) → **Install**
- [ ] Dans le dossier importé, trouve le prefab complet du joueur (avec sa caméra) et glisse-le dans ta scène
- [ ] ▶️ **Play** : déplace-toi (++w++/++a++/++s++/++d++), saute (++space++), oriente la caméra à la souris
- [ ] Ajuste ton monde en alternant Play et édition : trous, obstacles trop hauts, passages trop étroits

!!! abstract "Prends deux secondes"
    Déplacement, gravité, saut, caméra, animations - **fournis par un prefab**. C'est ça, un moteur de jeu : on assemble d'abord, on programme ensuite. Au cours 6, tu apprendras ce qu'il y a dedans.

### 5. La passe « ça se parcourt »

- [ ] Fais le trajet complet départ → arrivée en Play, **trois fois**. Aucun blocage, aucune chute hors du monde
- [ ] Un voisin essaie ton monde 60 secondes : trouve-t-il l'endroit d'arrivée sans que tu parles? Sinon, rends-le plus évident (dégage le chemin, mets un repère haut et visible)
- [ ] Sauvegarde ta scène (++ctrl+s++ / ++cmd+s++) - réflexe à prendre tout de suite

!!! success "Fin de la séance 1"
    Tu as un monde qui se parcourt. Au [cours 3](../cours03.md), il devient un jeu : un objectif, une victoire, un menu, un build et une page web.
