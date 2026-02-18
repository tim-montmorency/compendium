![](../assets/images/custom-theme.jpg){data-zoom-image}

## EXERCICE — Création d’un thème FSE personnalisé

**À partir de la structure officielle minimale**

### Objectifs

* Comprendre la structure d’un thème bloc (FSE)
* Créer un thème minimal fonctionnel
* Utiliser theme.json
* Comprendre les commentaires <!-- wp: -->
* Intégrer header et footer via template parts
* Respecter la hiérarchie des modèles

### PARTIE 1 — Structure obligatoire 

**Créer le dossier :**
```
wp-content/themes/tim_momo/
```

**Puis créer la structure suivante :**

```
tim_momo/
├── parts/
│   ├── header.html
│   └── footer.html
├── templates/
│   ├── index.html
│   └── single.html
├── theme.json
├── style.css
```

### Vérification

* Le thème apparaît dans Apparence > Thèmes
* Il peut être activé sans erreur

### PARTIE 2 — Fichier style.css (10%)

**Créer un fichier avec un en-tête valide :**

```
/*
Theme Name: Tim Momo
Author: Votre nom
Description: Thème FSE personnalisé
Requires at least: 6.7
Version: 1.0
*/
```

⚠️ Aucun CSS obligatoire pour cet exercice.

### PARTIE 3 — Fichier theme.json

**Créer un theme.json fonctionnel incluant :**

* $schema
* settings
* layout
* typography
* templateParts

Exigences minimales :

* contentSize = 620px
* wideSize = 1000px
* 1 font family personnalisée
* déclaration des templateParts (header et footer)

### PARTIE 4 — Template Parts 
#### header.html

**Doit contenir :**

* Logo du site
* Titre du site
* Navigation
* Spacer

**Utiliser les commentaires :**

```
<!-- wp:site-logo /-->
<!-- wp:site-title /-->
<!-- wp:navigation /-->
```

#### footer.html

**Doit contenir :**

* Un paragraphe
* Le texte :
```
© Année – Nom du site
```

* Utiliser un bloc paragraph

### PARTIE 5 — Modèles
#### index.html (obligatoire)

**Doit contenir :**

```
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->
```

**Puis :**

* Un bloc Query Loop affichant :

  * Image mise en avant
  * Titre
  * Extrait

**Puis :**

```
<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
```

#### single.html

**Doit contenir :**

* Header
* Titre dynamique (post-title)
* Contenu dynamique (post-content)
* Footer
