# Configuration caméra Sony A6500 et utilisation de Dragon Frame  
Guide pour la capture image par image (stop motion)

Ce guide explique comment **connecter, configurer et utiliser la caméra Sony A6500 avec le logiciel Dragon Frame** pour la capture image par image.  
L’objectif est d’assurer une **connexion stable**, un **contrôle manuel complet de l’exposition dans Dragon Frame** et une **capture visuelle cohérente**.

---

## Partie 1 – Connexion et préparation de la caméra

Avant d’ouvrir Dragon Frame, la caméra doit être en **mode manuel (M)** et en **mode de communication PC Remote** pour dialoguer avec l’ordinateur.

### Mise en route et branchement

- [ ] Allumer la caméra et tourner la molette sur **M (Manuel)**.  
- [ ] Aller dans **Menu > Valise (Page 4)** et régler **Mode USB : PC Remote**.  
- [ ] Connecter le **câble micro USB à USB** entre la caméra et l’ordinateur.  
- [ ] Brancher le **clavier externe** si disponible.  
  - [ ] Sinon, dans Dragon Frame : **Fenêtre > Afficher le clavier**.  
- [ ] Vérifier que la caméra est reconnue par Dragon Frame.

#### En cas de problème de connexion

- [ ] **Changer le câble USB** (c’est la cause la plus fréquente de problème).  
- [ ] Débrancher et rebrancher le câble (côté caméra et côté ordinateur).  
- [ ] Vérifier que la caméra est toujours en **Mode USB : PC Remote**.  
- [ ] Dans Dragon Frame, ouvrir **Capture > Capturer la source** et s’assurer que la **Sony A6500 (ou A6000)** est bien sélectionnée.  
- [ ] Redémarrer Dragon Frame si la caméra n'apparaît toujours pas.

---

## Partie 2 – Démarrage et création de projet dans Dragon Frame

Dragon Frame sert à **capturer, visualiser et animer des images fixes**.  
Chaque projet contient une scène, des dossiers d’images et des réglages de capture.

### Création d’un nouveau projet

- [ ] Ouvrir **Dragon Frame**.  
- [ ] Cliquer sur **Nouvelle scène**.  
- [ ] Créer un **dossier de sauvegarde** pour vos images (ex. : `fleur.dng`).  
  - Le nom du projet sera utilisé pour nommer les sous-dossiers (ex. `fleur_take_01`, `fleur_X1`).

---

## Partie 3 – Connexion de la source (caméra)

Le logiciel doit reconnaître la caméra pour capturer les images directement depuis le capteur.

### Sélection de la caméra

- [ ] Ouvrir le menu **Capture > Capturer la source**.  
- [ ] Choisir **Sony A6500** (ou **A6000** selon le matériel disponible).  
- [ ] Vérifier que l’image s’affiche dans la fenêtre de prévisualisation.

---

## Partie 4 – Réglages de mise au point et d’exposition

### 4.1 Mise au point (dans la caméra)

La **mise au point se fait dans la caméra**.  
Vous pouvez utiliser **l’autofocus** ou la **mise au point manuelle**, mais elle doit être réglée avec soin avant la capture.

#### Option 1 – Autofocus (AF)
- Si le sujet est **immobile** :
  - [ ] Utiliser **AF-S (autofocus simple)**.  
  - [ ] Faire la mise au point une fois sur le sujet.  
  - [ ] Une fois la mise au point faite, idéalement **passer en MF** (mise au point manuelle) pour verrouiller le focus.

> Remarque : pour du **stop motion pur**, l’AF-C est généralement déconseillé, car le point risque de changer d’image en image. Privilégier AF-S puis MF, ou directement MF.

#### Option 2 – Mise au point manuelle (MF)

- [ ] Passer l’objectif en **MF (mise au point manuelle)**.  
- [ ] Tourner la **bague de mise au point** jusqu’à ce que le sujet soit parfaitement net.  
- [ ] Utiliser le **focus peaking** (si activé) pour voir les zones nettes en surbrillance.  
- [ ] Ne plus toucher à l’objectif ni à la caméra une fois le point établi.

---

### 4.2 Réglages d’exposition (dans Dragon Frame)

Les réglages d’exposition (vitesse, ouverture, ISO) doivent se faire **dans Dragon Frame**, pas sur la caméra.

- [ ] Ouvrir le panneau de contrôle de la caméra dans Dragon Frame (**Camera Controls / Capture Settings**, généralement à gauche).  
- [ ] Régler directement dans Dragon Frame :
  - [ ] la **vitesse d’obturation (Shutter Speed)**,  
  - [ ] l’**ouverture (Aperture / f-stop)**,  
  - [ ] les **ISO**.

#### Limites physiques de la caméra

Dragon Frame ne peut pas dépasser les limites matérielles de la caméra et de l’objectif :

- Si votre objectif **ouvre au maximum à f/4**, vous **ne pouvez pas régler une valeur plus grande** (ex. f/2.8) dans Dragon Frame.  
- De la même façon, les vitesses et ISO disponibles dans Dragon Frame doivent correspondre aux valeurs valides de la Sony A6500.  
- En cas de valeur invalide, Dragon Frame peut refuser le réglage ou ne pas l’appliquer.

---

### 4.3 Réglage de la balance des blancs (dans la caméra)

Pour garder une couleur cohérente sur toute la séquence :

- [ ] Ouvrir le **menu FN** sur la caméra.  
- [ ] Sélectionner **Balance des blancs (AWB ou K)**.  
- [ ] Choisir une valeur **fixe**, selon la lumière ambiante :  
  - 3200 K → lumière chaude (intérieur, tungstène)  
  - 5600 K → lumière du jour  
  - 7000 K → lumière froide ou ombrée  
- [ ] Valider le réglage avant de quitter le menu et **ne plus le changer** pendant la séance.

---

## Partie 5 – Format, qualité et taille d’image

### 5.1 Format d’enregistrement

- [ ] Dans Dragon Frame, configurer la capture pour utiliser **JPG + RAW** (si disponible avec votre configuration).  
  - Les **JPEG** seront utilisés par Dragon Frame pour l’aperçu et l’animation.  
  - Les **RAW (fichiers .ARW)** seront enregistrés sur la carte SD pour le travail en haute résolution (montage, étalonnage).

### 5.2 Taille d’image (aperçu) dans Dragon Frame

Dragon Frame propose une option de **taille d’image** pour l’aperçu :

- [ ] Dans les **paramètres de capture** de Dragon Frame, choisir la taille **Large**.  
  - Cela permet de recevoir de la caméra une image d’aperçu à une résolution élevée, équivalente à la pleine résolution supportée pour l’aperçu.  
  - Ce réglage concerne la **taille de l’image transmise à Dragon Frame**, pas le réglage de “qualité JPEG” dans la caméra.

> Important : le réglage de “qualité” (Large / Medium / Small) dans les menus internes de la caméra est ignoré lorsque la caméra est contrôlée en **PC Remote** par Dragon Frame. C’est Dragon Frame qui dicte la taille d’image transmise.

---

## Partie 6 – Fenêtre ANIMATION dans Dragon Frame

La fenêtre **Animation** permet de visualiser votre séquence, vérifier la continuité et ajuster la fluidité du mouvement.

### 6.1 Configuration de l’affichage

- [ ] Aller dans la **fenêtre ANIMATION**.  
- [ ] En bas à gauche, ouvrir les **options de visualisation**.  
- [ ] Régler le format à **16/9**.  
- [ ] Activer la **pelure d’oignon (Onion Skin)** pour voir les images avant/après la frame courante.

### 6.2 Lecture et fluidité

- [ ] Régler la **vitesse de lecture (FPS)** :
  - 12 FPS → animation plus saccadée, effet stop motion marqué.  
  - 24 FPS → animation plus fluide, effet cinéma.  
- [ ] Utiliser les outils pour :
  - zoomer sur les images,  
  - afficher la **fenêtre de montage**,  
  - afficher la **fenêtre d’informations de frame** à droite.  
- [ ] Cliquer sur **Play** pour visualiser l’animation complète.

---

## Partie 7 – Organisation des fichiers et récupération des images

Lorsque le projet se nomme par exemple **fleur**, Dragon Frame crée une structure de dossiers similaire à :

```text
fleur.dng/
 └── fleur_take_01/
      └── fleur_X1/
          img0001.jpg
          img0002.jpg
          ...
