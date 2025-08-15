<style>.md-header{display:none;}</style>

# Utilisation de [Runway](https://runwayml.com/product/use-cases)
[stop]
* [▶️ Présentation de Runway](https://uqam-my.sharepoint.com/:v:/g/personal/lavoie-pilote_francoise_uqam_ca/EZjDI-72M_5Ol5TNR2L944EBbetsYmjIE0zsiJ0QFJqnHQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=a0p4uc)  <br>
* [▶️ Organisation de Runway](https://uqam-my.sharepoint.com/:v:/g/personal/lavoie-pilote_francoise_uqam_ca/EWJpTOdw-PhEn5cKlvQD320B7gv6b2R_O_mw2EBPP4OtyQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=jHGL1b)  <br>
* [▶️ Prompt](https://uqam-my.sharepoint.com/:v:/g/personal/lavoie-pilote_francoise_uqam_ca/Efi-bVFuQAlMtydCBq2OBR4BshX99OZxooUKDZ79-RIAWg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=HdmlaO)  <br>
* [▶️ Mot clés](https://uqam-my.sharepoint.com/:v:/g/personal/lavoie-pilote_francoise_uqam_ca/EfwzfKksFC9LgqNpoOofHkkBPPq5KwmreJ0VJESV475aLA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=A4EWBb)  <br>
* [▶️ Look](https://uqam-my.sharepoint.com/:v:/g/personal/lavoie-pilote_francoise_uqam_ca/Eb7Jl0ShAkBCqQ9oGQ6oXDIBeNxAPwPpiUI4YqwjPfiIGA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=fkciaS)  <br>

[📁 image_exercice_01](../assets/image/03_rosie_detective_high.png){ .md-button }   <br>
[📁 image_exercice_02](../assets/image/divan_01.png){ .md-button }   <br>
[📁 image_exercice_02](../assets/image/divan_02.png){ .md-button }   <br>

## Gen-3 et la cohérence des prompts

Le modèle **Gen-3 Alpha** fonctionne différemment des modèles de langage comme ChatGPT. Il ne traite pas les descriptions de manière approfondie, mais se concentre sur les **mots-clés** pour générer les vidéos. Cela signifie que les descriptions peuvent être courtes mais doivent être précises. Gardez à l’esprit que **500 caractères** est la limite pour les prompts, donc chaque mot compte.

## Comment structurer un prompt pour Gen-3 Alpha

1. **Mouvement de la caméra et type de prise de vue**  
   Indiquez le mouvement de la caméra et le type de plan souhaité. Cela définit la manière dont la scène est filmée
   - **Mouvement de caméra** :  *Travelling backward* shot pour un travelling arrière. Pour une image qu'on peut fixe, il faut indiquer *Static camera. The camera is still.*
   - **Caméra** : *Wide shot* pour un plan large
   - **Vitesse de mouvement** : *Slow motion* pour un ralenti
     
3. **La scène**  
   - **Sujet** : Décrivez le personnage, l'objet ou le lieu principal de la scène. Qui ou quoi est au centre de l'action ? Il faut décrire des éléments marquants du personnage.
   - **Astuce** : Les élémens les plus difficiles à animer sont : les mains, les lunettes, les cigarettes, les images avec des colorisations trop étranges.
   - **Action** : Expliquez ce que fait le sujet dans la scène, on peut exprimer des sentiments (Ex. : *la femme semble un peu triste*, *la femme pense*). 

4. **Cadre et ambiance**  
   Décrivez où la scène se déroule et l'atmosphère. Cela inclut des informations sur le lieu et l'ambiance (Ex. : *Le train est en mouvement*).

5. **Style visuel**  
   Ajoutez des éléments stylistiques pour définir l'apparence de la vidéo (Ex. : *Film cinématographique*, *Film d’action des années 80*).  
   - **Astuce** : Mentionnez **Desaturated colors, muted tones, and low contrast** (couleurs désaturées, tons atténués, faible contraste) pour éviter une saturation excessive des images.

## Prompt avec Image + Texte

Si vous utilisez une image comme point de départ, concentrez-vous sur la **description du mouvement ou de l’action** plutôt que de simplement décrire l'image. Si la description diverge trop de l'image, le résultat peut être imprévisible.

## [Mots-clés pour les Prompts](https://help.runwayml.com/hc/en-us/articles/30586818553107-Gen-3-Alpha-Prompting-Guide)

L'ajout de mots-clés spécifiques aide à personnaliser les détails visuels et techniques de vos vidéos. Voici des catégories de mots-clés à inclure dans vos prompts pour obtenir le style désiré :

### **Styles de Caméra**
- Static shot
- Low angle
- High angle
- Overhead
- FPV (First-Person View)
- Hand held
- Wide angle
- Close up
- Macro cinematography
- Over the shoulder
- Tracking
- Establishing wide
- 50mm lens
- SnorriCam
- Realistic documentary
- Camcorder

### **Styles d'Éclairage**
- Diffused lighting
- Silhouette
- Lens flare
- Back lit
- Side lit
- [Color] gel lighting
- Venetian lighting
- Clean studio green screen shot

### **Vitesses de Mouvement**
- Dynamic motion
- Slow motion
- Fast motion
- Timelapse

### **Types de Mouvement**
- Grows
- Emerges
- Explodes
- Ascends
- Undulates
- Warps
- Transforms
- Ripples
- Shatters
- Unfolds
- Vortex

### **Style et Esthétique**
- Moody
- Cinematic
- Iridescent
- Home video VHS
- Glitchcore
- An animated film


### **Styles de Texte**
- Bold
- Graffiti
- Neon
- Varsity
- Embroidery

## Résumé

Pour bien utiliser **Gen-3 Alpha** et créer des vidéos cohérentes et stylisées :<br> 
- **Structurez vos prompts** selon les étapes : Mouvement de la caméra, Sujet, Action, Cadre et ambiance, Style visuel.<br> 
- **Utilisez des mots-clés spécifiques** pour contrôler l’apparence et le style de la vidéo.<br> 
- **Restez concis** (500 caractères maximum) et précis dans vos descriptions.<br> 
