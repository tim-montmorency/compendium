# Swap de visage avec un modèle Nano Banana Pro
Modèle Nano Banana Pro via [Freepik](https://www.freepik.com/) ou via [Gemini](https://gemini.google.com/app?hl=fr)

## Résumé
* Objectif : utiliser soit un **modèle de personnage entraîné** (ex. `@sarah`), soit **une image de Sarah**, pour **remplacer uniquement le visage + les cheveux** dans une image de base (`@img1`) sans toucher au décor.  
* Image de base : `@img1`  
* Personnage utilisé : **modèle entraîné** `@sarah` **ou** **image de Sarah**  
* Ce qui change : **visage + cheveux uniquement**  
* Ce qui reste identique : **décor, vêtements, cadrage, lumière**

---

### 🛠️ Swap de visage avec modèle Nano Banana Pro

* Option 1 — Entraîner un modèle de personnage (plus stable)  
  * Rassembler 3 images du même visage  
  * Créer et lancer l’entraînement du modèle (ex. `@sarah`)

* Option 2 — Utiliser directement une image de Sarah  
  * Importer une photo nette et cohérente  
  * La sélectionner comme **source du visage**

* Insérer `@img1` comme image de départ  
  * Choisir une photo nette avec le visage bien visible → `@img1`

* Sélectionner la source  
  * Soit : ton modèle entraîné (`@sarah`)  
  * Soit : une image de Sarah

---

## Exemple de prompt prêt à copier-coller (version simple)

* Utiliser ce prompt (adapter les noms si nécessaire) :
  * Prompt :

    ```
    Dans @img1, remplace uniquement le visage et les cheveux de la femme 
    par le visage et les cheveux de @sarah.
    ```

---

## Exemple de prompt prêt à copier-coller (version complète)

* Utiliser ce prompt (adapter les noms si nécessaire) :
  * Prompt :

    ```
    Dans @img1, remplace uniquement le visage et les cheveux de la femme par le visage et les cheveux de @sarah.
    Conserve la même position de la tête, le même angle de vue, la même expression générale,
    la même structure du visage, la même direction de la lumière et des ombres.

    Ne modifie pas le background : garde le décor, les couleurs, la perspective, la lumière ambiante,
    les vêtements, la composition et le cadrage exactement tels quels.
    Aucun changement d’environnement, aucun ajout ou retrait d’élément visuel.

    Intègre @sarah de manière réaliste, sans déformation ni mélange.
    Aucun hybride, aucune fusion, aucune interprétation artistique.
    Use strong identity matching, Face Lock ON.
    Fully override the original face with the exact facial identity and hair of @sarah.
    ```
