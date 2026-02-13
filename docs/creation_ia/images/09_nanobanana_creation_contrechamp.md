# Créer un contrechamp dans Nano Banana Pro ou Nano Banana

Nano Banana disponible via :  
* **Nano Banana Pro ou Nano Banana** (via [Freepik](https://www.freepik.com/) ou [Gemini](https://gemini.google.com/app?hl=fr))  

---

## Principe
Objectif : générer un **contrechamp** (reverse shot) depuis une image existante (`@img1`), tout en **préservant le style, la lumière, l’ambiance et la cohérence visuelle de la scène d’origine**.

---

## 🟠 Intégrer un contrechamp dans Nano Banana Pro ou Nano Banana

* Préparer l’image  
  * Importer l’image de référence → devient **@img1**  
  * Vérifier que lumière, ambiance, vapeur, néons et textures sont bien lisibles  

* Définir le contrechamp  
  * Donner la **position de la caméra** : POV du personnage, top-down, face à la salle…  
  * Indiquer **ce qui doit apparaître** dans ce nouveau cadrage (mains, bol, salle, clients, cuisine)

* Verrouiller la scène  
  * Lumière identique : direction, qualité, intensité  
  * Ambiance identique : néons, vapeur, palette FujiFilm, grain, halation  
  * Cohérence spatiale : profondeur, composition générale  

* Générer  
  * Coller le prompt adapté  
  * Lancer la génération  
  * Vérifier cohérence POV + ambiance  
  * Ajuster angle et distance si nécessaire  

---

# Exemple de prompt prêt à copier-coller — Contrechamp top-down (bol + mains)

* Utiliser ce prompt (adapter si nécessaire) :
  * Prompt :

    ```
    Use @img1 as reference.

    Keep the same lighting, neon colors, steam behavior, atmosphere, and overall visual style.
    Preserve the 1970s Japanese grocery-store environment exactly.

    Change the camera to a close-up top-down perspective from the woman's point of view.
    Show the steaming soup bowl in the center, her hands holding chopsticks, and the snake
    clearly visible near the bowl.

    Maintain the Gregory Crewdson–style cinematic lighting, FujiFilm 400H tones, soft halation,
    pastel highlights, subtle film grain, and realistic glossy textures.
    ```

---

# Exemple de prompt prêt à copier-coller — Contrechamp « regard vers la salle »

* Utiliser ce prompt (adapter si nécessaire) :
  * Prompt :

    ```
    Use @img1 as reference.

    Keep the same lighting direction, neon reflections, steam density, atmosphere, grain,
    halation, and FujiFilm 400H color palette.

    Create the reverse shot from the woman's point of view: show the rest of the restaurant,
    including the open kitchen in the background, and a few unusual or eccentric customers
    seated at other tables.

    Maintain the chaotic 1970s Japanese diner environment: steaming pots, hanging utensils,
    flickering reflections, dense details everywhere.

    Blend Gregory Crewdson’s cinematic realism with vintage luxury advertising style:
    controlled studio light, soft frontal flash, refined composition, shallow depth of field
    focusing on the mid-space, soft fill light, realistic textures, and a 50 mm lens look.
    ```
