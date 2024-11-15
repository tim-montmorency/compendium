<style>.md-footer{display:none;}</style>
<style>.md-Headher{display:none;}</style>

<style>.md-footer{display:none;}</style>
<style>.md-Headher{display:none;}</style>


# Guide pour la création d'images fixes dans des modules d'intelligence artificielle

### Outils en ligne

- [Glibatree](https://chatgpt.com/g/g-hfOosvOH7-glibatree-consistent-character-assistant
)
- [Midlibrary](https://midlibrary.io/)

### Structure des prompts

- [x] **Utiliser des :: suivie d'un chiffre permet d'ajuster l'importance relative de certains éléments.** Par exemple, ::3 rend un mot ou une phrase trois fois plus importante pour le rendu de l’image, alors qu’un ::-1 réduit son importance. Cette technique est particulièrement utile pour orienter l’IA vers certains détails sans alourdir la description.

- [x] **Exclure des éléments non désirés avec la commande --no** :  
   Si vous souhaitez éviter qu’un élément soit présent dans votre image, vous pouvez ajouter la commande --no suivie de l’élément à exclure à la fin du prompt.


### Comment rédiger un prompt pour une scène visuelle

- [x] **Mentionner la valeur de plan et l'angle de vue**  
  (De quel point de vue la scène est-elle capturée ? Exemple : plan rapproché, plongée, contre-plongée, vue aérienne)  
  *Un plan large en légère contre-plongée, capturant à la fois la femme et le chat géant dans le même cadre.*

- [x] **Définir les personnages, l’action et les émotions des personnages**  
  (Décrivez ce que vous voulez voir dans la scène. Incluez les actions et émotions des personnages.)  
  *Un énorme chat blanc et duveteux marche lentement dans une rue urbaine, surplombant les bâtiments et les voitures. Une femme, vêtue d'une robe blanche, traverse tristement la rue, indifférente à la présence imposante de l'immense créature.*

- [x] **Décrire les personnages ou objets principaux**  
  (Quels sont les détails des personnages ou objets clés ?)  
  *Le chat est immense, avec un pelage blanc et duveteux. Il dégage une aura tranquille malgré sa taille colossale. La femme, petite en comparaison, porte une robe blanche fluide et marche sereinement, sans prêter attention au chat.*

- [x] **Décrire les costumes et le maquillage des personnages**  
  (Quels sont les détails vestimentaires et esthétiques des personnages ?)  
  *La femme est vêtue d'une robe blanche fluide, légère et simple. Elle n'a pas de maquillage visible, renforçant l'aspect naturel et sobre de son apparence. Le chat n'a pas d'accessoires particuliers, son pelage blanc et duveteux étant sa caractéristique principale.*

- [x] **Définir le lieu**  
  (Où se passe la scène ?)  
  *La scène se déroule dans une rue animée d'une ville japonaise, avec des bâtiments étroits, des enseignes en kanji, et des voitures garées le long des trottoirs.*

- [x] **Ajouter des détails sur le décor**  
  (Décrivez ce qu'il y a en arrière-plan. Exemple : nature, ville, intérieur minimaliste.)  
  *En arrière-plan, on distingue des bâtiments typiques de l'architecture urbaine japonaise, des enseignes commerciales en kanji, et des câbles électriques qui traversent la rue. Les trottoirs sont bordés de petites boutiques et de voitures garées.*

- [x] **Préciser la profondeur de champ**  
  (Où doit être la mise au point ? Exemple : flou artistique en arrière-plan, mise au point nette sur l'objet principal)  
  *La mise au point est nette sur la femme et le chat géant, avec un arrière-plan légèrement flou pour concentrer l'attention sur les personnages principaux.*

- [x] **Indiquer le moment**  
  (Quelle est l'heure ou le moment de la journée ?)  
  *La scène se passe en milieu de journée, avec une lumière douce et diffuse, créant une atmosphère calme et sereine.*

- [x] **Indiquer l’éclairage**  
  (Quel type d'éclairage souhaitez-vous ? Exemple : lumière naturelle, artificielle, diffuse, directionnelle, forte ou douce)  
  *L'éclairage est doux et diffus, sans ombres marquées, accentuant l'atmosphère tranquille et irréelle de la scène. La lumière naturelle enveloppe la rue, créant une ambiance paisible.*

- [x] **Spécifier les couleurs ou palettes chromatiques**  
  (Quelles couleurs dominent la scène ? Exemple : couleurs douces, contraste élevé, teintes saturées)  
  *Utiliser des tons vintage avec des couleurs désaturées : des nuances de vert et de beige prédominent, donnant une impression nostalgique. Les couleurs sont subtiles, évoquant un passé lointain ou un rêve doux.*

- [x] **Inclure des modificateurs de style**  
  (Quel style artistique ou visuel voulez-vous ? Pour créer une image avec un style visuel spécifique, il est essentiel d’ajouter des modificateurs de style. Ceux-ci permettent de définir l’esthétique artistique, qui peut être réaliste, abstraite, rétro, futuriste, ou inspirée d’un réalisateur ou d’un directeur de la photographie. Pour une précision accrue, vous pouvez inclure des détails techniques comme la caméra, le type de pellicule, l’objectif, et même le nom d’un photographe pour guider l’inspiration.)
  * Exemple : L'ambiance doit être surréaliste et cinématographique, rappelant les films de Studio Ghibli et les techniques des grands films à gros budgets, capturés avec une caméra ARRI Alexa et une pellicule Kodak Portra 800, dans le style de Gregory Crewdson. Des éléments surnaturels s’intègrent dans des décors réalistes, créant une atmosphère immersive. Le style fait écho au mouvement artistique du surréalisme, où le fantastique et le quotidien se mêlent harmonieusement, donnant vie à des scènes qui semblent à la fois familières et extraordinaires.
  * Exemple : Photography, shot by [camera brand], in the style of [photographer], ASA 20, prime [xx] mm lenses, [type of lighting such as ring flash, natural lighting etc.]
  * Exemple : Or --- portrait photography, natural skin, clean detailed eyes, insane detail, detailed hair, dslr photography, detailed natural skin, no makeup, 8k
  * Exemple : Or --- portrait photography, natural skin, clean detailed eyes, insane detail, detailed hair, dslr photography, detailed natural skin, no makeup, 8k
  * Exemple : Or --- extremely intricate design, photorealistic, epic composition, golden ratio, mist, breathtaking, UHD, 8k, dramatic lighting, volumetric rays, Zeiss 35mm photograph

- [x] **Exemples du type de caméra** :
   - [x] Canon EOS 5D Mark IV or Nikon D850: These create high-quality, realistic images with a clean, professional look. Use them for natural, crisp imagery with shallow depth of field.
   - [x] Sony Alpha A7III: Known for vibrant colors and excellent low-light performance. Perfect for moody or atmospheric images with a cinematic touch.
   - [x] Kodak Portra 400 (Film): Adds a vintage, grainy texture with warmer tones and a more nostalgic aesthetic. Mentioning “film” with this can also adjust the look.
   - [x] Polaroid SX-70: Adds a soft, dreamy vibe with muted colors and a vintage touch. Excellent for retro-themed prompts.
   - [x] Leica M6: Known for a classic filmic look with high detail, often used in street photography. Adds elegance and timelessness.

- [x] **Exemples du type de pellicule** :
   - [x] *Kodak Portra 800* – Pour des couleurs douces et chaudes.  
   - [x] *FujiFilm 400H* – Pour des tons pastels doux et un aspect cinématographique.  
   - [x] *Kodak Ektar 100* – Pour des couleurs vibrantes et une haute saturation.  
   - [x] *Ilford HP5 400* – Pour un style noir et blanc avec un grain distinctif.  
   - [x] *Cinestill 800T* – Pour un look cinématographique avec des teintes légèrement bleutées dans les zones de lumière artificielle.  
   - [x] *Kodak Tri-X 400* – Pour un rendu noir et blanc classique avec un grain visible.  
   - [x] *Polaroid 600* – Pour des images vintage avec des couleurs un peu délavées.  
   - [x] *Polaroid SX-70* – Pour un rendu doux, lumineux et un peu flou, avec des couleurs subtiles.  
   - [x] *Instant film* – Pour obtenir un effet général de film instantané avec un cadre blanc typique des Polaroids.  
   - [x] *Expired Polaroid Film* – Pour un look encore plus vintage avec des couleurs imprévisibles et des artefacts visuels.

- [x] **Exemples d'effets supplémentaires** :
   - [x] *Cross Processed Film* – Pour un effet de développement chimique alternatif, donnant des couleurs inattendues et un contraste élevé.  
   - [x] *Light Leaks* – Pour simuler des fuites de lumière, souvent présentes dans les vieux appareils photo ou les films mal enroulés.  
   - [x] *Double Exposure* – Pour superposer deux images avec un effet analogue typique.  
   - [x] *Film Grain* – Pour ajouter une texture granuleuse typique des films anciens.  
   - [x] *Desaturated Vintage Film* – Pour des images avec des couleurs délavées et un look vieilli.

- [x] **Préciser s'il y a utilisation d'un fond green screen (optionnel)** :  
   (Si vous souhaitez isoler certains éléments pour un travail de post-production, mentionnez-le)  
   *Non applicable pour cette scène.*

- [x] **Vérifier la cohérence générale** :  
   (Assurez-vous que tous les éléments se complètent bien pour créer une scène harmonieuse et captivante)  
   *Tous les éléments de la scène se complètent harmonieusement pour créer une atmosphère de calme surréaliste, où le fantastique côtoie le quotidien de manière fluide et naturelle.*



---

### Prompts en français

Un énorme chat blanc et duveteux marche dans une rue urbaine, surplombant les bâtiments et les voitures. Une femme en robe blanche traverse la rue, indifférente à la présence de l'immense créature. La scène se déroule dans une rue animée d'une ville japonaise, avec des bâtiments étroits, des enseignes en kanji et des voitures garées le long des trottoirs. La scène se passe en milieu de journée, avec une lumière douce et diffuse.

L'image doit transmettre un sentiment de calme surréaliste, où le fantastique se fond harmonieusement dans le quotidien urbain. La femme marche tranquillement dans la rue, tandis que le chat géant se déplace lentement derrière elle. Un plan large en légère contre-plongée capture à la fois la femme et le chat géant dans le même cadre.

L'ambiance est surréaliste et cinématographique, rappelant les films de Studio Ghibli et les techniques des grands films à gros budgets, où des éléments surnaturels sont intégrés dans des décors réalistes. Le style fait écho au mouvement artistique du surréalisme.

Le chat est immense, avec un pelage blanc et duveteux. La femme, vêtue d'une robe blanche fluide, semble petite en comparaison et marche sereinement, sans prêter attention au chat. Utiliser des tons vintage avec des couleurs désaturées : des nuances de vert et de beige prédominent, donnant une impression nostalgique.

L'éclairage est doux et diffus, sans ombres marquées, accentuant l'atmosphère tranquille et irréelle de la scène. En arrière-plan, on voit des bâtiments typiques de l'architecture urbaine japonaise, des enseignes commerciales, et des câbles électriques qui traversent la rue.

L'ambiance doit être surréaliste et cinématographique, rappelant les films de Studio Ghibli et les techniques des grands films à gros budgets, capturés avec une caméra ARRI Alexa et une pellicule Kodak Portra 800, dans le style de Gregory Crewdson. Des éléments surnaturels s’intègrent dans des décors réalistes, créant une atmosphère immersive. Le style fait écho au mouvement artistique du surréalisme, où le fantastique et le quotidien se mêlent harmonieusement, donnant vie à des scènes qui semblent à la fois familières et extraordinaires.

Tous les éléments de la scène se complètent harmonieusement pour créer une atmosphère de calme surréaliste, où le fantastique côtoie le quotidien de manière fluide et naturelle.

---



### Prompts en anglais

Pour l'instant, il semble mieux d'entrer les Prompts en anglais.

A huge, fluffy white cat is walking down an urban street, towering over the buildings and cars. A woman in a white dress calmly crosses the street, unaffected by the massive creature’s presence. The scene takes place in a busy Japanese city street, with narrow buildings, kanji signs, and parked cars lining the sidewalks. It is midday, with soft, diffused light.

The image should convey a surreal sense of calm, where the fantastical blends harmoniously with everyday urban life. The woman walks peacefully down the street, while the giant cat moves slowly behind her. A wide, slightly low-angle shot captures both the woman and the giant cat within the same frame.

The atmosphere is surreal and cinematic, reminiscent of Studio Ghibli films and the techniques used in big-budget movies, where supernatural elements are seamlessly integrated into realistic environments. The style echoes the surrealist art movement.

The cat is enormous, with fluffy white fur. The woman, dressed in a flowing white dress, appears small in comparison and walks serenely, paying no attention to the cat. The scene uses vintage tones with desaturated colors: shades of green and beige predominate, creating a nostalgic impression.

The lighting is soft and diffuse, with minimal shadows, emphasizing the calm and otherworldly atmosphere. In the background, you can see typical Japanese urban architecture, commercial signs, and electric cables crossing the street.

The visual style should be realistic but with a dreamlike touch, reminiscent of the fantastical animation style of Studio Ghibli and the surrealist compositions of the art movement. The focus is on the woman and the giant cat, with a slightly blurred background to draw attention to the main subjects.

All elements of the scene come together harmoniously to create an atmosphere of surreal calm, where the fantastical and the ordinary coexist fluidly and naturally.



