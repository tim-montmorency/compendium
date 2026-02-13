# Commandes dans MidJourney 6

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
