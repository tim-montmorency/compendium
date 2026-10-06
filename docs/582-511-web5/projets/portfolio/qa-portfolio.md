# Contrôle de la qualité du portfolio : consignes

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. **Trois personnes** testent votre portfolio : **vous** et **deux camarades**, chacun dans un **environnement différent** (navigateur ou appareil). Tous les tests se font sur votre **bêta en ligne**.
2. **Un seul fichier Excel**, `qa-prenom-nom.xlsx`, contient tout : les scénarios, les résultats des 3 testeurs, vos correctifs et leur validation, puis votre autoévaluation.
3. Les tests se font sur la branche **`beta`**. Une fois les 3 tests terminés, vous passez GitHub Pages sur **`main`**, vous corrigez, et vous **validez** chaque correctif en refaisant le scénario en ligne.

</div>

<br>

C'est le **critère 3** de votre grille d'évaluation *Contrôle rigoureux de la qualité du portfolio 015Q · vaut pour 10% de la note finale de la session* : la vérification auprès de 3 personnes, le rapport de tests et les correctifs validés. Les tests d'accessibilité et de médias servent aussi aux critères 1 et 2.

[:material-magnify-scan: Le contrôle de la qualité : les notions](../../qa/controle-qualite.md){ .md-button }

[:material-human: L'accessibilité : tester les 4 points de la grille](../../qa/accessibilite.md){ .md-button }

## Les dates

| Étape | Gr. Lora | Gr. Enric |
|---|---|---|
| Tests (vous + 2 camarades), sur le site web publié en ligne | ven. 2 oct., en classe | ven. 2 oct., en classe |
| **Date limite** : les 3 tests sont terminés | **lun. 5 oct. à 23h59** | **lun. 5 oct. à 23h59** |
| Passer GitHub Pages sur `main`, corriger, valider | dès vos 3 tests terminés | dès vos 3 tests terminés |
| Autoévaluation (à la maison, en devoir) | avant le 8 oct. | avant le 15 oct. |
| Remise finale et jury | **jeu. 8 oct.** | **jeu. 15 oct.** |

!!! warning "Absent vendredi?"
    Faites vos tests hors classe avec **deux camarades**, avant la date limite de votre groupe. Les règles sont les mêmes : chacun dans un environnement différent, directement dans votre fichier Excel.

## Étape 1 : préparer votre fichier { #etape-1-preparer-votre-fichier }

1. Ouvrez le dossier partagé sur OneDrive : [dossier QA du portfolio](https://cmontmorency365-my.sharepoint.com/:f:/r/personal/mariem_ouellet_cmontmorency_qc_ca/Documents/01_cours/Cours%20Web%205%20-%20Projet%20Web/04_projets/01-projet-portfolio/qa-2026?d=w4a3f50b34edd4cb1a4014fafe79b1ea2&csf=1&web=1&e=HML1yB){ :target="_blank" }.
2. **Ne modifiez pas le gabarit.** Clic droit sur le gabarit → **Copier vers** → le même dossier.
3. Renommez votre copie `qa-prenom-nom.xlsx` : **minuscules, sans accents, sans espaces**. Ex. `qa-helene-cote.xlsx`.
4. Ouvrez votre copie (dans le navigateur, avec Excel en ligne) et remplissez l'onglet **Lisez-moi** : vos informations, l'adresse de votre site, et les 3 testeurs.
5. Dans l'onglet **Scénarios**, ajoutez **2 ou 3 scénarios personnels** (scénarios 12 à 14) : les fonctions propres à votre site. Ex. « Filtrer les projets par catégorie », « Changer de thème clair/sombre », « Faire défiler le carrousel d'un projet ».

!!! danger "Dans le fichier d'un autre, on écrit seulement dans son bloc de testeur"
    Tout le monde a accès au dossier. Vous écrivez dans **deux** situations :

    - dans **votre** fichier : tous les onglets;
    - dans le fichier d'un camarade **que vous testez** : seulement dans
      **votre bloc** de l'onglet Tests (testeur 2 ou 3), rien d'autre.

    N'ouvrez pas les autres fichiers. Si un fichier est écrasé par erreur,
    OneDrive garde les anciennes versions (clic droit → *Historique des
    versions*) : avertissez-moi.

??? info "Si OneDrive ne fonctionne pas"
    Téléchargez le gabarit, travaillez dans Excel sur votre poste, et déposez votre fichier dans le dossier partagé dès que possible.

    [:material-microsoft-excel: Télécharger le gabarit](qa-gabarit-portfolio.xlsx){ .md-button }

## Étape 2 : choisir 3 environnements différents { #etape-2-choisir-3-environnements-differents }

La grille exige que chaque testeur utilise un **navigateur ou un appareil différent**. En classe, on travaille en **trios** : chaque personne garde **son** environnement pendant tout le cours.

| Personne du trio | Son environnement | Ce qu'il représente |
|---|---|---|
| A | Chrome ou Edge, fenêtre **ancrée à la moitié de l'écran** (environ 1920 px) | L'écran d'ordinateur courant de vos visiteurs |
| B | Firefox, fenêtre **plein écran** sur l'écran large de la classe | Le cas limite : un très grand écran |
| C | Son téléphone (Safari sur iPhone, Chrome sur Android) | Le mobile |

!!! info "Pas de Mac ni d'iPhone? Aucun problème"
    Safari n'est pas exigé : il faut seulement 3 environnements
    **différents**. Un téléphone Android avec Chrome compte comme
    un environnement à part entière. Pas de téléphone du tout? Le
    3e testeur utilise Edge (si A est sur Chrome) en mode appareil
    de l'inspecteur, à 375 px de large.

Inscrivez la largeur dans l'onglet **Lisez-moi**, colonne *Appareil et largeur* : ex. « ordinateur, 1920 px ».

!!! tip "Obtenir une fenêtre d'environ 1920 px sur l'écran large"
    1. Dans le navigateur, faites **Windows + ←** : la fenêtre s'ancre sur la moitié gauche de l'écran.
    2. Vérifiez la largeur réelle : dans la console (F12), tapez `window.innerWidth`. Si Windows applique une mise à l'échelle, le chiffre peut différer : ajustez la largeur de la fenêtre à la main jusqu'à environ 1920.
    3. Plan B : le mode appareil de l'inspecteur (Ctrl + Maj + M) → **Responsive** → tapez `1920` × `1080`.

!!! question "Pourquoi tester aussi le plein écran large?"
    C'est un **cas limite**, et la grille les valorise. Sur 3840 px, votre contenu s'étire-t-il sur toute la largeur (lignes de texte interminables, images géantes), ou est-il contenu par un `max-width`?

A teste son propre site (auto-test), puis ceux de B et de C. Même chose pour B et C. Résultat : chaque site est testé 3 fois, dans 3 environnements différents. ✔️

!!! tip "Vous comptez comme l'une des 3 personnes"
    Votre **auto-test** est le testeur 1. Il suit **les mêmes scénarios**, avec la même rigueur, et il est consigné dans le même tableau que ceux de vos camarades.

## Étape 3 : tester { #etape-3-tester }

Chaque testeur fait **tous les scénarios**, dans **son bloc** de l'onglet **Tests**, sur l'**adresse de la bêta**.

Pour chaque ligne :

- **Résultat** : *Conforme* (le résultat attendu est obtenu) ou *Écart* (il ne l'est pas).
- **Résultat observé** : seulement s'il y a un écart. Décrivez **ce que vous voyez**, précisément : où, quoi, comment le reproduire.
- **Gravité** : *Bloquant*, *Majeur* ou *Mineur* (définitions dans l'onglet Lisez-moi).

| Pas utile | Utile |
|---|---|
| « Le menu marche pas. » | « Sur téléphone (375 px), le bouton du menu ouvre le menu, mais il ne se referme pas après un clic sur un lien : il cache la section. » |
| « Couleurs bof. » | « Le texte gris des descriptions de cartes (#999 sur blanc) a un ratio de 2,8:1. Il faut 4,5:1. » |
| « Erreur. » | « Console : `GET .../images/Biome.jpg 404`. L'image du projet Biome ne s'affiche pas. » |

!!! info "Règles du testeur"
    - On teste, on ne corrige pas. On ne touche pas au code de l'autre.
    - Un écart = une ligne. Si vous trouvez deux problèmes dans le même scénario, décrivez les deux dans la case.
    - On décrit des faits observables, pas des goûts. « Je n'aime pas le vert » n'est pas un écart; « le texte vert sur fond vert pâle a un contraste de 2:1 » en est un.
    - Firefox ne fait pas encore les animations au défilement : si le contenu s'affiche normalement sans animation, c'est **conforme**.
    - Sur téléphone, suivez la colonne *Sur téléphone* de l'onglet Scénarios (scénarios 7, 8, 10 et 11). Un scénario non applicable : *Non testé*, avec la mention « non applicable sur mobile ». Le testeur sur téléphone aura donc 12 ou 13 tests faits au lieu de 14 : c'est normal.

Comptez environ **30 minutes par site**. Les scénarios 7 à 9 (clavier, contraste, WAVE) demandent les outils vus en classe : [page Accessibilité](../../qa/accessibilite.md).

!!! warning "Vous êtes responsable de votre rapport"
    Vos camarades écrivent dans votre fichier, mais c'est **votre** rapport qui est évalué. Si une description est vague (« le menu marche pas »), demandez des précisions au testeur et complétez-la : où, quoi, comment le reproduire.

## Étape 4 : passer GitHub Pages sur `main` { #etape-4-passer-github-pages-sur-main }

**Seulement quand vos 3 tests sont terminés.** Avant, vos testeurs doivent voir la bêta.

1. Sur GitHub : votre dépôt → **Settings** → **Pages**.
2. **Branch** : remplacez `beta` par **`main`**, dossier `/ (root)`, **Save**.
3. Attendez une ou deux minutes, puis vérifiez que votre site s'affiche à la même adresse.

La branche `beta` reste dans votre dépôt : c'est la trace de la version testée. Ne la supprimez pas, et ne travaillez jamais dessus.

## Étape 5 : corriger et valider

1. **Priorisez** : tous les bloquants, puis les majeurs, puis les mineurs si le temps le permet.
2. Pour chaque écart corrigé, une ligne dans l'onglet **Correctifs** :
    - l'**ID du test** (ex. `T-21`) : le scénario, l'écart et la gravité s'affichent seuls;
    - le **correctif apporté**, dans vos mots;
    - le **commit**, dont le message commence par l'ID : `T-21 : focus visible sur les cartes`.
3. **Validez** : refaites le scénario **en ligne**, sur `main`, dans le même environnement que le testeur si possible. Inscrivez la date, *Oui* dans **Validé?**, et comment vous avez validé.

!!! question "Un écart que vous ne corrigez pas?"
    C'est permis, si c'est justifié. Choisissez *Pas corrigé (justifié)* et expliquez pourquoi dans **Comment j'ai validé** : ex. un mineur reporté faute de temps, ou un écart qui n'en est pas un après vérification. Un bloquant non corrigé, par contre, sera difficile à justifier devant le jury.

## Étape 6 : l'autoévaluation (à la maison)

Dans l'onglet **Autoévaluation**, pour chaque indicateur de la [grille critériée](index-textuel.md#criteres-devaluation) : votre niveau, et **la preuve** qui le justifie (un fichier, une ligne du tableau QA, un commit). C'est aussi votre meilleure préparation pour les questions du jury.

## Ce que je regarde dans votre fichier

| Indicateur du critère 3 | Où |
|---|---|
| Vérification auprès de 3 personnes, 3 environnements différents | Lisez-moi (les 3 testeurs) + Tests (les 3 blocs remplis) |
| Rapport de tests : scénario, résultat observé, écart | Tests : des écarts décrits précisément, avec une gravité |
| Correctifs adéquats, décrits et validés | Correctifs : le correctif, le commit, la validation en ligne |

L'onglet **Synthèse** se calcule seul : vérifiez qu'il ne reste aucun « écart sans gravité » avant la remise.

## Avant la remise finale

- [ ] Les 3 blocs de l'onglet Tests sont remplis : aucune ligne vide.
- [ ] Chaque écart a une gravité.
- [ ] Chaque bloquant et chaque majeur a sa ligne dans Correctifs, validée ou justifiée.
- [ ] GitHub Pages publie la branche `main`, et le site en ligne contient vos correctifs.
- [ ] L'onglet Autoévaluation est rempli.
- [ ] Le lien vers votre fichier `qa-prenom-nom.xlsx` est dans votre `README.md`.
