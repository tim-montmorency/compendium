# Définition des commandes dans MidJourney

### 1. --sw (poids du style basé sur l'image de référence) :  
**Définition** : Le paramètre **--sw** (Style Weight) contrôle à quel point MidJourney applique un style artistique à l'image, basé sur un style pré-défini ou une image de référence. Plus la valeur est élevée, plus l'IA stylisera l'image en s'éloignant de la représentation réaliste pour obtenir un rendu plus artistique et abstrait.

- **Valeurs typiques** : Le **--sw** accepte des valeurs entre 0 et 1000. Par défaut, la valeur est de **100**, ce qui permet une stylisation modérée. Pour plus de créativité et de liberté dans le style, tu peux augmenter cette valeur. Une valeur plus faible, comme **--sw 100**, produit une stylisation plus subtile et précise, tandis qu'une valeur élevée comme **--sw 1000** donne un rendu beaucoup plus stylisé et créatif.
- **Exemple** : --sw 1000 donne une grande liberté à l'IA pour styliser l'image de manière très artistique, influençant fortement le rendu.

### 2. --stylize (stylisation générale) :  
**Définition** : Le **--stylize** contrôle le degré de créativité que MidJourney applique lors de l'interprétation du texte du prompt. Il influence globalement la quantité de stylisation dans l'image générée. Plus la valeur est élevée, plus l'image sera artistique et embellie, mais potentiellement moins fidèle à la description littérale du texte.

- **Valeurs typiques** : Les valeurs varient entre **--stylize 100** (pour un rendu plus précis et fidèle au texte) et **--stylize 1000** ou plus (pour un rendu très créatif et stylisé).
- **Exemple** : --stylize 1000 permet à l'IA de prendre des libertés dans la manière d'interpréter le prompt, tout en conservant une structure reconnaissable par rapport au texte.

---

### **Résumé des commandes** :

- **--sw 1000** : Donne une grande liberté artistique à l'IA pour styliser l'image en fonction d'une référence de style ou d'une influence artistique prédéfinie. Plus la valeur est élevée, plus l'image s'éloigne du réalisme et adopte un style créatif.
- **--stylize 1000** : Définit le degré de stylisation appliqué à l'interprétation du texte du prompt. Une valeur de 1000 offre un rendu artistique tout en restant reconnaissable.

---

### **Différences clés** :

- **--sw** contrôle la force de stylisation basée sur une influence artistique ou un style prédéfini.
- **--stylize** influence le degré global de stylisation basé sur le texte du prompt.

Ces paramètres te permettent de moduler avec précision la créativité


Ces paramètres te permettent de contrôler avec précision le degré de créativité, d'influence de référence, et de cohérence dans les résultats générés dans MidJourney.
