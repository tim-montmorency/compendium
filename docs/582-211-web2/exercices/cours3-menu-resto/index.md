# 🍽️ EXERCICE BOOTCAMP : MENU DE RESTAURANT

## 📋 Contexte

Vous êtes intégrateur Web pour une agence qui développe des sites pour des restaurants. Votre mission : créer la section "Menu" d'un site de restaurant en HTML et CSS.



## 🎯 Objectifs d'apprentissage

- ✅ Réviser la structure HTML sémantique
- ✅ Pratiquer le modèle de boîte CSS (padding, margin, border)
- ✅ Comprendre la spécificité CSS (quelle règle gagne?)
- ✅ Appliquer une nomenclature cohérente (BEM recommandé)
- ✅ Créer une mise en page lisible et professionnelle



## 📝 Ce que vous devez créer

Un menu de restaurant qui contient :

### Structure minimale obligatoire :

1. **Un titre principal** pour le menu
2. **3 catégories minimum** (ex: Entrées, Plats principaux, Desserts)
3. **Au moins 3 items par catégorie** (9 items minimum au total)
4. **Pour chaque item :**
   - Nom du plat
   - Description courte
   - Prix
5. **Au moins 2 items avec un badge** "POPULAIRE" ou "VÉGÉ" ou "NOUVEAU"



## 🔧 Exigences techniques

### HTML

✅ Structure HTML5 valide (doctype, head, body)  
✅ Balises **sémantiques** (`<section>`, `<article>`, `<header>`, etc.)  
✅ **Listes** utilisées pour les items (ul/li ou ol/li)  
✅ Classes CSS cohérentes (BEM recommandé)  
✅ Code bien **indenté**  
✅ Fichier externe `style.css` (pas de CSS inline ou internal)  



### CSS

✅ **CSS externe** uniquement (fichier `style.css`)   
✅ **Modèle de boîte** maîtrisé (padding, margin, border)  
✅ **Typographie** lisible et hiérarchisée :
   - Titre principal plus grand
   - Titres de catégories moyens
   - Noms de plats en gras
   - Descriptions plus petites et en gris
✅ **Prix alignés à droite**  
✅ **Badges** stylisés avec couleur de fond et border-radius  
✅ **Séparateurs visuels** entre les catégories (border ou margin)  
✅ **Spécificité CSS** : utiliser des sélecteurs variés (balise, classe, descendant)  
✅ **Au moins un état :hover** (sur les items par exemple)  



## 📐 Contraintes de design

- 📏 Largeur maximale du menu : **800px**
- 📏 Menu **centré** sur la page
- 🎨 Palette de couleurs cohérente (3-4 couleurs maximum) [Coolors](https://coolors.co/)
- 📝 Police lisible ([Google Fonts](https://fonts.google.com/) recommandé)
- 🖼️ Pas d'images requises (optionnel si vous voulez en ajouter)



## 💡 Exemple de rendu attendu

Ne pas copier-coller, utilisez-le comme inspiration seulement!

```
════════════════════════════════════════════════
            MENU DU RESTAURANT
════════════════════════════════════════════════

ENTRÉES
────────────────────────────────────────────────

Salade César                             12.99$
Laitue romaine, croûtons, parmesan, sauce césar

Soupe à l'oignon gratinée                 8.99$
Oignons caramélisés, bouillon, fromage suisse

Tartare de saumon            [POPULAIRE] 14.99$
Saumon frais, avocat, câpres, citron

────────────────────────────────────────────────

PLATS PRINCIPAUX
────────────────────────────────────────────────

Steak frites                   [POPULAIRE] 24.99$
8oz AAA, sauce au poivre, frites maison

Saumon grillé                              22.99$
Légumes de saison, riz basmati, beurre citronné

Risotto aux champignons           [VÉGÉ]   18.99$
Champignons sauvages, parmesan, truffe

────────────────────────────────────────────────

DESSERTS
────────────────────────────────────────────────

Crème brûlée                   [POPULAIRE]  7.99$
Vanille de Madagascar, sucre caramélisé

Tarte au citron                             6.99$
Meringuée, zeste de citron frais

Fondant au chocolat                         8.99$
Chocolat noir 70%, crème anglaise

════════════════════════════════════════════════
```


## Structure de fichiers attendue

```
menu-restaurant/
├── index.html
├── style.css
└── README.md
```



## Étapes suggérées

### 1. Structure HTML (20 min)

- Créer la structure de base
- Ajouter titre principal
- Créer les 3 sections de catégories
- Ajouter les items avec listes

### 2. CSS de base (10 min)

- Styler le conteneur principal (largeur, centrage)
- Typographie de base

### 3. Style des catégories (20 min)

- Titres de catégories
- Séparateurs visuels
- Espacements

### 4. Style des items (25 min)

- Layout nom/prix (flexbox ou float)
- Descriptions
- Badges

### 5. Finitions (10 min)

- États hover
- Vérifications finales
- Validation HTML

### 6. Complétez le README (5 min)

- Complétez le fichier README.md avec vos réflexions sur l'exercice


## Critères d'évaluation (formatif)

- **Structure HTML valide et sémantique**
- **CSS externe avec variables**
- **Nomenclature cohérente (BEM ou similaire)**
- **Modèle de boîte bien appliqué**
- **Typographie hiérarchisée et lisible**
- **Prix alignés correctement**
- **Badges stylisés**
- **Séparateurs visuels** 
- **Spécificité CSS démontrée** 
- **Code propre et indenté**
- **Créativité et effort visuel**|


## 🔗 Ressources utiles

Outils et références

- [Google Fonts](https://fonts.google.com/)
- [Coolors (palettes de couleurs)](https://coolors.co/)
- [Validateur HTML W3C](https://validator.w3.org/)
- [Guide BEM](http://getbem.com/)

CSS Web 1

- [CSS Cours 08](https://tim-montmorency.com/compendium/582-111-web1/cours08.html)
- [CSS Cours 09](https://tim-montmorency.com/compendium/582-111-web1/cours09.html)
- [CSS Cours 10](https://tim-montmorency.com/compendium/582-111-web1/cours10.html)
- [CSS Cours 11](https://tim-montmorency.com/compendium/582-111-web1/cours11.html)

BEM

- [BEM Documentation](https://tim-montmorency.com/compendium/582-111-web1/cours11.html#bem)

Documentation/résumé Web 1 pré 2025 :

- [Résumé HTML](https://tim-montmorency.com/timdoc/582-211/html/resume/)
- [Résumé CSS](https://tim-montmorency.com/timdoc/582-211/css/resume-css/)



## 📅 Remise

**Date limite :** Avant le cours 3 de la semaine prochaine (2, 4 février) 
**Méthode :** Push sur GitHub Classroom  

### ✅ Vérification avant remise :

- HTML validé W3C
- CSS externe uniquement
- Fichiers bien nommés
- Code indenté



## 💡 Conseils

💡 Commencez simple, puis améliorez progressivement  
💡 Testez régulièrement dans le navigateur  
💡 Utilisez l'inspecteur pour déboguer  
💡 Documentez vos choix avec des commentaires CSS  
💡 Si vous êtes bloqué, cherchez d'abord, puis demandez de l'aide  



## 🍕 Exemples de restaurants (inspiration)

Vous pouvez vous inspirer de vrais restaurants ou inventer :

- Restaurant italien
- Bistro français
- Sushi bar
- Café brunch
- Restaurant végétarien
- Food truck mexicain
- etc.

**Choisissez un thème qui vous plaît!** 🍕🍣🥗🍔