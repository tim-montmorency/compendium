# 🎛 Commandes dans MidJourney 6

## 1. --stylize (stylisation générale)
**Définition** : Le paramètre **--stylize** contrôle l'intensité de la créativité que MidJourney applique lors de l'interprétation du texte du prompt. Il influence la manière dont l'image est globalement stylisée. Une valeur plus élevée entraîne un rendu plus artistique, mais potentiellement moins fidèle à la description textuelle initiale.

- **Valeurs typiques** : Les valeurs varient entre **--stylize 100** pour un rendu plus précis et fidèle au texte, et **--stylize 1000** ou plus pour un rendu très créatif et stylisé.
- **Exemple** : `--stylize 1000` permet à l'IA d'interpréter le prompt avec plus de liberté artistique tout en conservant une structure reconnaissable en lien avec le texte.

---

## 2. --cw (poids du personnage basé sur l'image de référence)
**Définition** : Le paramètre **--cw** (Character Weight) est utilisé spécifiquement en combinaison avec le paramètre **--cref** pour générer des personnages cohérents. Il indique à l'IA le poids à donner à l'image de référence de personnage fournie. Plus la valeur est élevée, plus l'IA prendra en compte les détails du personnage, comme les vêtements, le visage et la coiffure.

- **Valeur par défaut** : La valeur par défaut de **--cw** est **100**, ce qui signifie que l'IA suit strictement les caractéristiques du personnage dans l'image de référence (visage, vêtements, etc.).
- **Valeurs typiques** : Le paramètre **--cw** accepte des valeurs entre **0 et 100**. Une valeur plus faible permet d'apporter plus de variations, notamment dans les vêtements ou les autres aspects du personnage.
- **Exemple** : `--cw 10` permet d'ajouter plus de liberté dans la génération du personnage si vous voulez changer ses vêtements ou même si vous voulez affecter la peau du personnage, tandis que `--cw 100` conserve plus strictement les caractéristiques de la référence.

---

## 3. --sw (poids du style basé sur l'image de référence)
**Définition** : Le paramètre **--sw** (Style Weight) contrôle la manière dont MidJourney applique un style artistique à une image, en se basant soit sur une image de référence, soit sur un style prédéfini. Une valeur plus élevée augmente l'effet de stylisation, s'éloignant d'une représentation réaliste pour aller vers une approche plus artistique et abstraite.

- **Valeurs typiques** : Le **--sw** accepte des valeurs comprises entre 0 et 1000. Par défaut, la valeur est de **100**, offrant une stylisation modérée. Pour une stylisation plus artistique et créative, tu peux augmenter cette valeur. Par exemple, une valeur comme **--sw 100** produit une stylisation subtile, tandis qu'une valeur plus élevée comme **--sw 1000** crée un rendu beaucoup plus créatif et stylisé.
- **Exemple** : `--sw 1000` donne une grande liberté à l'IA pour styliser l'image de manière fortement influencée par un style ou une référence artistique, avec un rendu très artistique.

---

## 4. --iw (poids de l'image de référence)
**Définition** : Le paramètre **--iw** (Image Weight) contrôle l'importance de l'image de référence par rapport au texte du prompt. Il permet de donner plus ou moins de poids à une image utilisée comme référence, influençant ainsi directement le rendu final.

- **Valeur par défaut** : La valeur par défaut de **--iw** est **1**, ce qui signifie une influence équilibrée entre l'image de référence et le texte.
- **Valeurs typiques** : Les valeurs pour **--iw** vont de **0 à 3**.
  - Une valeur proche de **0** privilégie le texte et minimise l'influence de l'image.
  - Une valeur proche de **3** maximise l'influence de l'image, en réduisant l'impact du texte.
- **Exemple** :
  - `--iw 0.5` : donne plus de flexibilité à l'IA pour interpréter le prompt texte.
  - `--iw 3` : impose strictement les caractéristiques de l'image de référence dans le rendu final.

---

# Résumé des commandes

- **--stylize 1000** : Définit le degré de stylisation artistique appliqué à l'interprétation du prompt texte, offrant un rendu plus artistique tout en maintenant une certaine cohérence avec le prompt.
- **--cw 100** : Par défaut, contrôle la fidélité de l'IA à un personnage généré via une image de référence, offrant un rendu précis du personnage selon la référence fournie.
- **--sw 1000** : Accentue l'influence artistique sur l'image, en fonction d'une référence ou d'un style prédéfini, s'éloignant du réalisme pour aller vers un rendu créatif.
- **--iw 3** : Contrôle l'importance relative de l'image de référence, offrant un équilibre par défaut avec le texte.

---

# Différences clés

- **--stylize** : Influence le degré global de stylisation basé sur le texte du prompt.
- **--cw** : Gère le poids des caractéristiques d'un personnage à partir d'une référence visuelle, avec une valeur par défaut de 100 pour une fidélité maximale à la référence.
- **--sw** : Contrôle la force de stylisation basée sur une influence artistique ou un style prédéfini.
- **--iw** : Contrôle l'équilibre entre texte et image de référence pour déterminer leur importance relative.


# 🎛 Commandes dans MidJourney 7


## 🔹 Moodboard & Personalize (Personnalisation)
- **Moodboard** : un dossier d’images qui agit comme un **`--sref` appliqué automatiquement à toutes les générations d’un projet** (style global constant).  
  - Chaque image du moodboard est traitée comme une référence de style.  
  - Poids fixe interne : **`--sw 100`** (non modifiable ; ce poids est interne au Moodboard. Le paramètre `--sw` que tu écris dans un prompt ne change pas ce poids, il ne s’applique qu’aux `--sref` ajoutés manuellement).  
- **Personalize** : un style appris automatiquement de ton usage/notations et appliqué à toutes tes générations.  
- **Stylize (`--stylize`)** : contrôle la **force combinée** du moodboard & de la personnalisation.  
- **Ajouter des `--sref` manuels** : permet de moduler ou compléter ponctuellement le style du moodboard/personnalisation.  

---

## 1. `--stylize` / `--s` (Stylisation générale)
- **Rôle** : contrôle le **niveau de stylisation artistique** appliqué au prompt. Plus la valeur est élevée, plus l’image sera interprétée de façon créative, et moins elle sera strictement fidèle au texte.  
- **Alias** : `--s` est la version abrégée de `--stylize` (même paramètre, même effet).  
- **Plage typique** :  
  - **100–250** → stylisation faible, priorité au texte.  
  - **300–600** → équilibre texte ↔ style (idéal pour un rendu cinématographique réaliste mais “travaillé”).  
  - **700–1000+** → stylisation forte, rendu très artistique / interprétatif.  

**Exemples rapides :**  
- `--stylize 200` → image proche du texte, peu de fantaisie.  
- `--stylize 600` → bon compromis cinéma : réaliste mais stylé.  
- `--stylize 900` → rendu poétique / surréel, style très présent.  

**Interaction Stylize ↔ Moodboard & Personnalisation**  
- **Bas (100–250)** → priorité au texte, moodboard/personnalisation discrets.  
- **Moyen (300–600)** → équilibre texte ↔ moodboard/personnalisation.  
- **Haut (700–1200+)** → moodboard/personnalisation amplifiés, rendu plus artistique et interprétatif.  
👉 Plus la valeur de `--stylize` est élevée, plus le style global issu du **Moodboard** et de la **Personnalisation** prend le dessus sur la description textuelle du prompt (leur présence devient beaucoup plus visible dans l’image).

---

## 2. `--weird` (Weirdness)
- **Rôle** : contrôle le niveau d’**étrangeté / d’inhabituel** dans l’image (à quel point l’IA “déraille” visuellement).  
- **Plage** : 0–3000 (défaut 0).  
- **Effets** :  
  - Bas (0–100) → image relativement “normale”, léger twist créatif.  
  - Moyen (≈250–800) → détails surprenants, rendu expérimental mais lisible.  
  - Haut (≈1000–3000) → imagerie très étrange, surréelle ou abstraite.  

> Différence avec `--chaos` :  
> - `--chaos` agit surtout sur la **diversité entre les images d’une même grille**.  
> - `--weird` agit sur le **degré d’étrangeté à l’intérieur de chaque image**.

---

## 3. Variety (diversité des images – réglage interface)
- **Rôle** : contrôle, via un **slider dans l’interface** (pas de code `--variety` dans le prompt), à quel point les **4 images d’une même grille** seront différentes entre elles.  
- **Effets** :  
  - Variety basse → images très proches (variations fines).  
  - Variety moyenne → variations claires mais cohérentes.  
  - Variety haute → images très différentes (exploration large du même prompt).  

> Lien avec `--chaos` :  
> - Variety = réglage **global dans l’UI** (diversité entre les images).  
> - `--chaos` = paramètre **par prompt**, qui rend les propositions plus ou moins exploratoires.

## 2. `--iw` (Image Weight)
- **Rôle** : poids d’une **Image Prompt** → contrôle son importance par rapport au texte.  
- **Plage** : 0–3 (défaut 1).  
- **Effets** :  
  - Bas (≈0.5) → priorité au texte, image de référence légère.  
  - Moyen (≈1) → équilibre texte ↔ image.  
  - Haut (≈2–3) → l’image de référence domine, texte moins influent.  

---

## 4. `--sw` (Style Weight)
- **Rôle** : intensité d’une **Style Reference (`--sref`)** → influence esthétique (palette, textures, ambiance).  
- **Plage** : 0–1000 (défaut 100).  
- **Effets** :  
  - Bas (≈100) → style subtil.  
  - Moyen (≈300–600) → style marqué mais équilibré.  
  - Haut (≈1000) → style dominant, rendu fortement orienté.  
- **Moodboard** : équivalent d’un ensemble de `--sref` appliqués automatiquement avec un **poids interne proche de `--sw 100`** (non modifiable par l’utilisateur ; `--sw` ne contrôle que les `--sref` ajoutés manuellement dans le prompt).  

---

## 5. `--ow` (Omni Weight)
- **Rôle** : fidélité à une **Omni Reference (`--oref`)** → reproduction d’un élément précis (personnage, objet, motif).  
- **Plage** : 1–1000 (défaut 100).  
- **Effets** :  
  - Bas (≈25) → variations créatives, élément réinterprété.  
  - Moyen (100–300) → équilibre fidélité / créativité.  
  - Haut (400+) → reproduction stricte, proche de la référence (mais rigidité possible).  
---

# ✅ Résumé visuel
- **Moodboard** : comme un **`--sref` appliqué globalement à tout un projet** (fixe `--sw` interne ≈ 100, non modifiable).  
- **Personalize** : style appris automatiquement et appliqué en continu.  
- **`--stylize` / `--s`** : intensité de créativité appliquée au texte **et amplification du moodboard/personnalisation**.  
- **`--weird`** : niveau d’**étrangeté / expérimentation visuelle** dans l’image.  
- **Variety** : contrôle la **diversité entre les 4 images d’une grille** (réglage dans l’interface, pas de code `--variety`).  
- **`--iw`** : poids d’une image de contenu (composition/pose).  
- **`--sw`** : poids d’un style (`--sref`) **ajouté dans le prompt** (ne modifie pas directement le Moodboard).  
- **`--ow`** : poids d’un élément précis (`--oref`).  

---

# 📊 Mini-fiche récap

| Paramètre        | Rôle principal                                | Valeurs (défaut) | Repères rapides |
|------------------|-----------------------------------------------|------------------|-----------------|
| **Moodboard**    | Style global d’un projet (`--sref` auto)      | Fixe `--sw 100`  | Style appliqué automatiquement à toutes les générations |
| **Personalize**  | Style appris de ton usage/notations           | Automatique      | Influence continue, varie avec `--stylize` |
| **--stylize**    | Intensité créativité + amplification du style | 0–1000 (100)     | Bas = texte > style · Moyen = équilibre · Haut = style amplifié |
| **--weird**      | Niveau d’étrangeté / expérimentation visuelle | 0–3000 (0)       | Bas = normal · Moyen = créatif · Haut = très expérimental |
| **Variety**      | Diversité entre les 4 images d’une grille     | Slider (UI)      | Bas = images proches · Moyen = variations nettes · Haut = explorations larges |
| **--iw**         | Poids d’une Image Prompt (composition/pose)   | 0–3 (1)          | Bas = texte prioritaire · Haut = image prioritaire |
| **--sw**         | Poids d’une Style Reference (`--sref`)        | 0–1000 (100)     | Bas = style subtil · Haut = style dominant |
| **--ow**         | Fidélité à une Omni Reference (`--oref`)      | 1–1000 (100)     | Bas = variations · Moyen = équilibre · Haut = copie stricte |

