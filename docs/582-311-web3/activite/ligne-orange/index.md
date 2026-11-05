---
tags:
  - Exercice
  - Vite
  - GSAP
---

# Ligne orange

Au défilement de la page, un train de la ligne orange descend de Montmorency à Henri-Bourassa. Quand on arrête de défiler, il termine lui-même son trajet jusqu'à la station la plus proche&nbsp;: c'est le travail des **étiquettes** d'une timeline et de l'option `snap` 🚇.

<!--
Notions mises en pratique :

* Une timeline pilotée par le défilement (pin, scrub)
* Avec scrub, les durées deviennent des proportions
* addLabel() : poser des étiquettes dans une timeline
* snap: "labels" : aimanter le défilement sur les étiquettes
-->

## Le principe

!!! info "Des arrêts qui ne sont pas espacés également"

    `snap: 0.25` aimante le défilement à intervalles **réguliers**. Or, les stations d'une ligne de métro ne sont pas à égale distance les unes des autres. En posant une **étiquette** dans la timeline à chaque station, on peut aimanter le train exactement aux stations, peu importe leur espacement.

Dans cet exercice, toutes les valeurs sont fournies. L'objectif est de comprendre le principe, pas de chercher les bons chiffres.

## Consignes

### Préparation

- [ ] [Accepter le devoir Classroom 50](https://classroom50.org/tim-w3/web-3/assignments/ligne-orange/accept)
- [ ] Cloner le répertoire avec GitHub Desktop
- [ ] Ouvrir le dossier cloné dans VSCode
- [ ] Dans le terminal, installer les dépendances, puis lancer le projet&nbsp;:
    ```bash
    npm install
    ```
    ```bash
    npx vite
    ```

### Exploration du projet

Tout le HTML et le CSS sont déjà faits. Avant d'animer, prendre quelques minutes pour comprendre comment la ligne est construite.

- [ ] Ouvrir `index.html` et repérer les 4 stations à l'intérieur de `#piste`. Leur position est donnée par `top`&nbsp;:

    | Station | Position (`top`) |
    | :--- | :--- |
    | Montmorency | `0%` |
    | De la Concorde | `30%` |
    | Cartier | `55%` |
    | Henri-Bourassa | `100%` |

- [ ] Repérer `#train`, et le `#wagon` à l'intérieur

??? question "Pourquoi le wagon est-il dans un cadre&nbsp;?"

    Le cadre `#train` est transparent et fait **exactement la hauteur de la piste**. Le wagon est placé en haut de ce cadre.

    Or, `yPercent` se calcule sur la hauteur de l'élément animé. Si on anime le cadre, `yPercent: 30` le déplace de 30&nbsp;% de la piste&nbsp;: le wagon arrive pile sur la station placée à `top: 30%`. Les valeurs de l'animation sont donc les mêmes que les positions des stations.

- [ ] Ouvrir `src/gsap.js`. Tout le code de l'exercice sera écrit dans la fonction `gsapAnimations()`.

### Activer ScrollTrigger

- [ ] Sous la ligne `import gsap from "gsap"`, importer ScrollTrigger, puis l'activer (voir *Activer un plugin* dans les notes de cours)

  ??? tip "Indice"

      ```js
      import gsap from "gsap"
      import { ScrollTrigger } from "gsap/ScrollTrigger"

      gsap.registerPlugin(ScrollTrigger)
      ```

### Étape 1 - Le trajet

![type:video](./preview-etape1.webm){.h-auto}

Le train descend la ligne au fil du défilement, d'une station à l'autre.

- [ ] Créer une timeline avec&nbsp;:
    - [ ] Des réglages communs&nbsp;: `defaults: { ease: "power1.inOut" }`
    - [ ] Un `scrollTrigger`&nbsp;:
        - [ ] Déclencheur&nbsp;: `#ligne`
        - [ ] Début&nbsp;: `"top top"`
        - [ ] Fin&nbsp;: `"+=3000"`
        - [ ] `pin: true`
        - [ ] `scrub: 1`

  ??? question "Pourquoi `power1.inOut`&nbsp;?"

      `power1.inOut` accélère au début et ralentit à la fin. Appliqué à chaque trajet, il fait **démarrer** et **freiner** le train à chaque station, comme un vrai métro.

- [ ] Ajouter un `.to()` sur `#train` pour chaque trajet&nbsp;:

    | Trajet | `yPercent` | `duration` |
    | :--- | :--- | :--- |
    | Montmorency → De la Concorde | `30` | `30` |
    | De la Concorde → Cartier | `55` | `25` |
    | Cartier → Henri-Bourassa | `100` | `45` |

- [ ] Pas de `"<"` cette fois&nbsp;: les trajets se font **l'un après l'autre**

  ??? tip "Indice : la structure"

      ```js
      gsap.timeline({
        defaults: { /* ... */ },
        scrollTrigger: {
          // les paramètres ici
        }
      })
        .to("#train", { yPercent: 30, duration: 30 })
        .to("#train", { /* ... */ })
      ```

  ??? question "Pourquoi ces durées&nbsp;?"

      Avec `scrub`, les durées ne sont plus des secondes&nbsp;: elles deviennent des **proportions** du défilement (voir les notes de cours). Ici, la durée de chaque trajet est la distance entre ses deux stations&nbsp;: `30 - 0`, `55 - 30` et `100 - 55`. Chaque bout de piste demande donc autant de défilement, et le train garde le même rythme d'un bout à l'autre.

  ??? quote "Observation"

      Mettre temporairement toutes les durées à `1`. Le dernier trajet, le plus long, se fait alors aussi vite que les autres&nbsp;: le train semble accélérer. Remettre ensuite les bonnes durées.

- [ ] Commit + push

### Étape 2 - Les arrêts

![type:video](./preview-etape2.webm){.h-auto}

Pour l'instant, le train s'arrête n'importe où entre deux stations. On va poser une étiquette à chaque station, puis aimanter le défilement sur ces étiquettes.

- [ ] Poser une étiquette avec `.addLabel()`&nbsp;:
    - [ ] Au tout début de la timeline&nbsp;: `"Montmorency"`
    - [ ] Après chaque `.to()`&nbsp;: le nom de la station d'arrivée

  ??? info "`.addLabel()`"

      `.addLabel("Cartier")` pose une étiquette à l'endroit où la timeline est rendue&nbsp;: ici, à la fin du trajet qui arrive à Cartier. Une étiquette ne fait rien bouger&nbsp;; c'est seulement un **repère** dans la timeline.

  ??? tip "Indice : la structure"

      ```js
      gsap.timeline({ /* ... */ })
        .addLabel("Montmorency")
        .to("#train", { yPercent: 30, duration: 30 })
        .addLabel("De la Concorde")
        // ...
      ```

- [ ] Dans le `scrollTrigger`, ajouter `snap: "labels"`

  ??? question "Pourquoi pas `snap: 1 / 3`&nbsp;?"

      Il y a 3 trajets, donc `1 / 3` donnerait des arrêts à `0`, `0.33`, `0.67` et `1`. Mais les stations sont à `0`, `0.30`, `0.55` et `1`&nbsp;: le train s'arrêterait à côté des stations. Les étiquettes, elles, sont toujours exactement sur les stations.

  ??? quote "Observation"

      Remplacer temporairement `"labels"` par `1 / 3`. Le train s'arrête un peu après De la Concorde, et bien après Cartier. Remettre ensuite `"labels"`.

- [ ] Commit + push

## Défis

- [ ] Remplacer `"labels"` par `"labelsDirectional"`. Le train va maintenant à la station **suivante** dans le sens du défilement, même si on s'arrête juste après une station.
- [ ] Ajouter la station **Sauvé** après Henri-Bourassa&nbsp;: placer les 5 stations à de nouvelles positions (par exemple `0%`, `25%`, `45%`, `80%` et `100%`), puis ajuster les `yPercent`, les durées et les étiquettes
- [ ] Commit + push
