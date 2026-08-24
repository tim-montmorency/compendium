---
tags:
  - Projet
---

[:material-arrow-u-left-top: Cours 11](../cours11.md){.breadcrumb}

# Projet final - Site promotionnel

Le projet final est l'**épreuve intégratrice** du cours&nbsp;: il réunit tout ce que vous avez appris cette session. Vous créez un **site Web promotionnel** dont les médias — logo, visuels, bande-annonce, musique et effets sonores — sont la matière première.

Il vaut **50 % de la note de session**.

!!! abstract "Objectif intégrateur"

    Programmer l'interface audiovisuelle d'un site Web à l'aide de **librairies** et d'un **cadriciel**.

## Le calendrier

| Cours | Ce qui se passe |
| :--: | --- |
| **11** | Présentation de l'énoncé — vous commencez à concevoir |
| **12** | Découpage du site en sections et plan de production |
| **13** | Atelier encadré&nbsp;: médias, intégration, interactivité, animations, formulaire |
| **14** | Atelier encadré&nbsp;: gel, validation, tests, déploiement, préparation de l'oral |
| **15** | **Remise et présentation orale** |

## Deux volets, un même barème

Vous déclarez votre volet au **cours 8**.

=== "Volet A - Jeu vidéo"

    Site promotionnel du **jeu vidéo que vous développez en Interactivité ludique**. Vos propres médias de jeu sont réutilisés tels quels&nbsp;: logo, captures d'écran, bande-annonce, trame sonore et effets sonores 🎮.

    **Exigence propre au volet**&nbsp;: la **démo jouable** publiée sur itch.io (votre build WebGL) est intégrée au site par `<iframe>`, avec un repli visuel si le build n'est pas encore public.

    !!! info "Un projet, deux cours"

        Le **jeu** est évalué en Interactivité ludique. Ici, en Web 3, c'est le **site promotionnel** qui est évalué&nbsp;: son intégration, son interactivité, ses animations et sa mise en ligne.

=== "Volet B - Œuvre culturelle"

    Pour les étudiants qui ne suivent pas Interactivité ludique. Site promotionnel d'une **œuvre culturelle** au choix&nbsp;:

    * un **film** (réel ou fictif)&nbsp;: affiche, photos de production, bande-annonce, trame sonore&nbsp;;
    * un **livre** ou une série de livres&nbsp;: couverture, extraits, lecture audio, univers visuel&nbsp;;
    * un **groupe de musique** ou un album&nbsp;: pochette, photos, clip vidéo, extraits musicaux&nbsp;;
    * un **festival**, une **exposition** ou un **balado** (sur approbation).

    **Exigence propre au volet**&nbsp;: une **bande-annonce ou un extrait vidéo** intégré au site (`<video>` local ou `<iframe>` YouTube/Vimeo) **et** un lecteur audio contrôlé par programmation.

!!! warning "Droits et crédits"

    Les médias doivent provenir de sources libres de droits, de contenus promotionnels officiels autorisés, ou être créés par vous — y compris par IA, alors citée selon la PIÉA (art. 6.1.2).

    Un fichier `CREDITS.md` à la racine du dépôt liste chaque média avec sa source et sa licence. **Il est obligatoire dans les deux volets.**

## Sections attendues

Votre site (une ou plusieurs pages) doit contenir au minimum&nbsp;:

- [ ] **Accueil (hero)** — logo, accroche, bouton d'appel à l'action, visuel fort
- [ ] **À propos** — présentation de l'œuvre et de son univers
- [ ] **Galerie** — carrousel ou grille de visuels
- [ ] **Points forts / fonctionnalités** — en composantes DaisyUI
- [ ] **Démo jouable** (volet A) ou **bande-annonce** (volet B)
- [ ] **Contact** — formulaire fonctionnel avec EmailJS
- [ ] **Pied de page** — crédits et liens

## Critères d'évaluation

| Volet évalué | Critères | Points |
| --- | --- | :--: |
| **Environnement et structure** | Projet Vite fonctionnel (`npm`, `build`), `.gitignore`, arborescence claire *(cours 3)* | 2 |
| **Intégration Tailwind + DaisyUI** | Composantes pertinentes et **adaptées** · thème personnalisé cohérent avec l'œuvre · mise en page responsive *(cours 2 à 4)* | 5 |
| **Interactivité - Alpine.js** | Au moins deux comportements (menu mobile, onglets, galerie, filtre…), dont un **état persistant** `$persist` *(cours 7)* | 4 |
| **Animation - GSAP** | Apparitions au défilement (ScrollTrigger) · une timeline **ou** un effet de parallaxe · adaptation `matchMedia()` *(cours 9 à 11)* | 5 |
| **Médias** | Optimisation (WebP/AVIF, `<source>` de repli, `loading="lazy"`) · **contrôle par programmation** d'un média audio ou vidéo · classement et nomenclature · `CREDITS.md` complet *(cours 8)* | 5 |
| **Librairie supplémentaire** | Intégration pertinente d'au moins une librairie vue en classe&nbsp;: Howler, Chart.js, Tone.js, Three.js *(cours 8, 12)* | 2 |
| **Mise en ligne et validation** | Site publié (GitHub Pages ou cPanel) · dépôt GitHub public · validation W3C · test multinavigateurs *(cours 5, 8)* | 4 |
| **Présentation orale** | Démonstration claire (3 min) et justification des choix techniques | 3 |
| **Qualité et créativité** | Code lisible, sans bogue majeur · design soigné au service de l'œuvre | 2 |
| | **Total** | **/32** |

!!! warning "Français"

    Des points de français peuvent être retirés jusqu'à concurrence de **10 %** de la note de l'évaluation (PIÉA, art. 5.4).

## Livrable

Au cours 15, dans le devoir **Projet final** sur Teams&nbsp;:

- [ ] Le dossier complet du projet en `.zip` (**sans** `node_modules`)
- [ ] Le **lien du site en ligne**
- [ ] Le **lien du dépôt GitHub**

Nomenclature&nbsp;: `[nom]-[prénom]_projet-final_582-311MO`.

!!! danger "Présence obligatoire"

    La présentation orale a lieu au cours 15. Une absence entraîne la note 0 pour cette évaluation, même si le projet a été remis en ligne (PIÉA, art. 7.2).
