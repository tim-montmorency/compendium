<style>.md-footer{display:none;}</style>
# Exercice
Le but de cet exercice est d'appliquer un style avec des images de Référence 
<img src="../assets/image/04_rosie_pieuvre_02.png">
***

[📁 Document de départ](../assets/image/04_clown.png){ .md-button }   <br>
[📁 Document de départ](../assets/image/04_rosie_pieuvre.png){ .md-button }   <br>


## Étapes 

- [ ] **Télécharger l'image de référence (pieuvre)** :
   - Sélectionne l'icône de personnage dans le prompt pour attacher l'image de la pieuvre en tant que **caractère**. Cela permet à l’IA d’intégrer les caractéristiques visuelles de la pieuvre pour le sujet principal.

- [ ] **Télécharger l'image de référence (clown)** :
   - Sélectionne l'icône de trombone dans le prompt pour attacher l'image du clown en tant que **style**. Cette image sert de référence stylistique pour influencer l'ambiance, les textures, et les couleurs de la scène.

- [ ] **Écrire un prompt pour l'image** :
   - Rédige un prompt détaillé pour guider l’IA dans la création de l’image. Par exemple :
     - *"A pale-skinned redheaded woman with vibrant, flowing hair stands in a 1950s German train station. A large, intricately detailed octopus wraps its tentacles around her neck and shoulders. The station, with its post-war architecture--large windows, stone walls, and vintage signage--has an eerie and oppressive atmosphere. Around her, people are collapsed on the ground, some visibly ill, others dead, their bodies contorted in dramatic, unsettling poses. Trains emerge from the station's doors, their metal exteriors weathered and grimy, releasing thick clouds of smoke that swirl ominously through the space. The entire scene is bathed in dim, cinematic lighting, casting long, surreal shadows. In the style of Gregory Crewdson, the composition is meticulously staged, with hyperrealistic details and a dreamlike, unsettling quality that heightens the haunting, mysterious mood."*

- [ ] **Appliquer le poids du style avec le paramètre `--sw`** :
  - Utilisez le code `--sw` pour gérer l’intensité du style appliqué par l'image du clown en tant que référence stylistique.
    - **100** est la valeur par défaut, **0** désactive le style, et **1000** est l'intensité maximale.
    - **Exemple** : `--sw 1000` pour appliquer un style plus fort.

- [ ] **Appliquer le poids du personnage avec le paramètre `--cw`** :
  - Utilisez le code `--cw` pour contrôler l’intensité de l'influence de l'image de la pieuvre en tant que personnage principal.
    - **100** est la valeur par défaut, **0** désactive le personnage, et **100** est l'influence maximale.
    - **Exemple** : `--cw 40` pour accorder davantage de poids au style.

- [ ] **Pour appliquer plus fortement le style ("Vary Strong")** :
   - Une fois l’image générée, cliquez sur **"Vary (Strong)"** pour intensifier l'effet stylistique. Cette option accentue les éléments artistiques de l’image mais peut aussi atténuer certains détails précis du prompt.


[📖 Consulter la page suivante](../ai/prompt.md) pour plus d’informations sur la rédaction d'un prompt efficace.<br>
[📖 Consulter la page suivante](../ai/midjourney_code.md) pour plus d’informations sur la rédaction de code dans Midjourney. <br>



## Tutoriel 📚

[📖 Pour en savoir plus](https://cmontmorency365-my.sharepoint.com/:v:/g/personal/flpilote_cmontmorency_qc_ca/EV1gSzxV02dCnk8Zq_cDqoIBrhgU_jAXSPZF3OLHJnRIXQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=C9CAYc){ .md-button }   <br>

