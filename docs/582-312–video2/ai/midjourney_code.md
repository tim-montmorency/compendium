# Définition des commandes dans MidJourney

## 1. `--sw` (style weight) :
**Définition** : Le `--sw` ou "style weight" contrôle combien de liberté artistique MidJourney prend pour styliser l'image en fonction du texte du **prompt**.  C'est utilisé pour guider le style de l'image générée en fonction du **prompt** que tu fournis.  
**Plus la valeur est élevée**, plus l'image sera stylisée de manière artistique, souvent en s'éloignant du texte littéral pour un rendu plus abstrait ou créatif.  
**Valeurs typiques** : Tu peux ajuster le `--sw` entre une valeur basse (comme `--sw 250` pour une image très fidèle au texte) et une valeur haute (comme `--sw 1000` pour un rendu plus créatif et artistique).  
**Exemple** : `--sw 1000` donne une grande liberté à l'IA pour styliser l'image de manière artistique.

## 2. `--sref` (style reference weight) :
**Définition** : Le `--sref` contrôle combien d'influence une image de référence donnée aura sur la génération de l'image. C'est utilisé pour guider le style de l'image générée en fonction d'une **image référence** que tu fournis.  
**Plus la valeur est élevée**, plus l'image générée ressemblera stylistiquement à l'image de référence, en s'appuyant sur ses couleurs, textures, ou composition.  
**Valeurs typiques** : Le `--sref` peut varier en fonction de l'influence que tu veux que l'image de référence ait. Par exemple, `--sref 1000` donnerait une forte influence à l'image de référence.  
**Exemple** : `--sref 1000` signifie que l'image générée sera fortement influencée par l'image de référence que tu as donnée.

## 3. `--stylize` (stylization) :
**Définition** : Le `--stylize` contrôle le degré de créativité que MidJourney applique en interprétant le texte du **prompt**. Cette commande définit combien de liberté l'IA prend pour styliser l'image.  
**Plus la valeur est élevée**, plus l'image sera artistique et stylisée. À des valeurs élevées, l'image peut devenir moins fidèle à une description littérale.  
**Valeurs typiques** : Tu peux utiliser des valeurs comme `--stylize 100` pour plus de précision, et des valeurs plus élevées comme `--stylize 1000` ou plus pour un rendu très stylisé.  
**Exemple** : `--stylize 1000` donne à l'IA une certaine liberté pour embellir et styliser l'image, tout en restant reconnaissable par rapport au **prompt**.

## 4. `--seed` (graine de génération) :
**Définition** : Le `--seed` contrôle la graine aléatoire utilisée pour générer l'image. Chaque graine produit une composition unique, et en réutilisant la même graine, tu peux générer des images qui sont similaires ou répétables.  
**Si tu utilises la même valeur de seed**, tu obtiendras des images similaires à chaque fois, ce qui permet de créer des variations tout en gardant une cohérence.  
**Exemple** : `--seed 12345` génère une image avec une composition particulière. Si tu refais une génération avec la même graine, l'image ressemblera beaucoup à la première.

---

## Résumé des commandes :
- **`--sw 1000`** : Permet une grande liberté artistique à l'IA pour styliser l'image en fonction du **prompt**. Plus la valeur est élevée, plus l'image sera abstraite et créative.
- **`--sref 1000`** : Donne une forte influence à une image de référence. L'image générée sera très stylisée d'après l'**image de référence.**
- **`--stylize 1000`** : Définit à quel point l'image sera stylisée. Une valeur de 1000 permet une stylisation modérée, créative, mais toujours reconnaissable par rapport au **prompt**.
- **`--seed`** : Fixe la graine aléatoire de génération. Utiliser la même graine permet de générer des images similaires.

## Différences clés :
- **`--sw` et `--stylize`** influencent tous les deux la créativité artistique, mais `--sw` est plus spécifique pour l'application de style basé sur le texte, alors que `--stylize` influence l'approche créative globale.
- **`--sref`** est utilisé spécifiquement avec une image de référence, tandis que `--seed` détermine la composition aléatoire pour rendre les images reproductibles.

Ces paramètres te permettent de contrôler avec précision le degré de créativité, d'influence de référence et de cohérence dans les résultats générés dans MidJourney.
