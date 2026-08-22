<style>.md-footer{display:none;}</style>

Le but de cet exercice est de faire la sélection d'un sujet, d'améliorer le contour et de masquer l'arrière plan.

![](../assets/image/08_selectionner_sujet_ameliorer_le_contour.png)

***

## Matériel

Télécharger et ouvrer le fichier suivant:

[📁 Document de départ](../assets/image/07_over_busy.psd){ .md-button }   <br>

## Étapes
# Photoshop – Amélioration de Sélection et Détourage

## Étape 1 – Préparer la sélection
- [ ] **Cliquer sur l'icône Sélection d'objet (W)** dans la barre d'outils.  
  Photoshop utilise l’IA pour détecter les zones principales de l’image.  
- [ ] **Cliquer sur "Sélectionner un sujet"** dans le panneau d'options.  
  Cela permet à Photoshop d’isoler automatiquement le sujet principal.  
- [ ] **Cliquer sur "Sélectionner et masquer"** pour passer en mode d’affinage.  

### Modes d’affichage
Ces options servent uniquement à mieux visualiser le détourage :  
- Sur noir / blanc : vérifier si les bords sont nets.  
- Sur transparence : vérifier l’intégration du sujet dans un montage.  
- Sur calques : visualiser directement dans la composition finale.  

---

## Étape 2 – Améliorer les zones complexes
- [ ] **Activer le rayon dynamique (Smart Radius)**.  
  Il adapte la largeur de l’analyse : petit sur bords nets, grand sur cheveux/tissus fins.  
- [ ] **Utiliser le pinceau d’amélioration des contours**.  
  Passer sur les mèches de cheveux, la fourrure ou les dentelles pour que Photoshop distingue mieux le fond du sujet.  

### Mode Améliorer
- Basée sur la couleur : Photoshop analyse les différences de teintes (efficace avec fond uni, ciel bleu, fond vert).  
- Basée sur l’objet : Photoshop analyse formes et contours (efficace si bords nets et contraste fort).  

Astuce : pour un portrait avec cheveux → commencer par "Objet", puis retoucher certaines zones avec "Couleur".  

### Détection des contours
- Petit rayon (0–2 px) : objets nets et simples.  
- Grand rayon (2–10 px) : cheveux, tissus fins, fourrure.  
- Smart Radius : ajuste automatiquement selon la complexité.  

---

## Étape 3 – Améliorations globales
- [ ] **Arrondi (Smooth)** : supprime les irrégularités et adoucit les contours.  
  - Produit/logo : 10–20  
  - Portrait simple : 5–10  
  - Cheveux/poils : 0–5  

- [ ] **Contour progressif (Feather)** : crée une transition douce entre sujet et fond.  
  - Produit/logo : 0,5–1 px  
  - Portrait simple : 1 px  
  - Cheveux/poils : 2 px  

- [ ] **Contraste (Contrast)** : rend les contours plus nets après Feather.  
  - Produit/logo : 30–50 %  
  - Portrait simple : 20 %  
  - Cheveux/poils : 10–15 %  

- [ ] **Décalage du contour (Shift Edge)** : déplace les bords.  
  - Vers l’intérieur (–) : supprime les halos.  
  - Vers l’extérieur (+) : récupère des détails.  
  - Produit/logo : –5 à –10 %  
  - Portrait simple : –5 %  
  - Cheveux/poils : –10 à –20 %  

### Combinaisons utiles
- Feather + Contraste : adoucit le bord puis redonne de la netteté.  
- Smooth + Décalage : corrige la forme générale, puis affine le contour.  

Ordre conseillé :  
1. Corriger avec Smooth et Décalage.  
2. Ajuster Feather et Contraste.  

---

## Étape 4 – Vérifier et ajuster
- [ ] Alterner les **modes d’affichage** (fond noir, blanc, transparence, calques).  
- [ ] Choisir la **sortie finale** :  
  - Masque de fusion (conserve l’image originale et masque seulement le fond).  
  - Nouveau calque avec masque (sujet détouré prêt à être réutilisé).  

### Astuce finale
- Contour = géométrie → utiliser Smooth + Décalage.  
- Couleur = transition → utiliser Feather + Contraste.  


***

## Tutoriel 📚

[📖 Pour en savoir plus](https://cmontmorency365-my.sharepoint.com/:v:/g/personal/flpilote_cmontmorency_qc_ca/EcTPTAucQzVJiqSlfidXeI4B0ykDSHYiE1bFgZZtL2cTXA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=o06Hi0){ .md-button }   <br>
