---
tags:
  - Exercice
  - Vite
  - GSAP
---

# Potion

![type:video](./preview.webm){.h-auto}

**[Voir le résultat attendu en ligne](https://tim-w3.github.io/potion-solution/){target="_blank"}**

L'objectif de cet exercice est de mettre en pratique les plugins **SplitText**, **ScrollTrigger**, **Draggable** et **ScrollToPlugin**. 

> Les sorcières se rassemblent,<br>
> Pour danser la sarabande.<br>
> Elles tournent, tournent en rond,<br>
> Tout autour du grand chaudron.<br>
> Bouille bouillon, bouille bouillon (bis).<br><br>
> L'une y jette la sonnette<br>
> Du serpent grichou-grichette.<br>
> L'autre, queues de trois lézards,<br>
> Par malheur levés trop tard.<br>
> Bouille bouillon, bouille bouillon (bis).<br><br>
> Souris grises toutes entières<br>
> Accompagnent vers de terre.<br>
> Oeil de chat, dents de rongeurs,<br>
> Seront bien à la chaleur.<br>
> Bouille bouillon, bouille bouillon (bis).

## Consignes

### Préparation

- [ ] [Accepter le devoir Classroom 50](https://classroom50.org/tim-w3/web-3/assignments/potion/accept)
- [ ] Cloner le répertoire avec GitHub Desktop
- [ ] Ouvrir le dossier cloné dans VSCode
- [ ] Dans le terminal, installer les dépendances, puis lancer le projet Vite.

### Exploration du projet

Presque tout le HTML et le CSS sont déjà faits et les images sont déjà dans `public/images`.

- [ ] Ouvrir `index.html` et repérer les cibles des animations :

  | Cible | Rôle |
  | :--- | :--- |
  | `header` | La section qui contient le champignon et le chaudron |
  | `#cta` | Un bouton, invisible au départ |
  | `#ingredient` | Le champignon, qui sera à « dragger » |
  | `#chaudron` | Le chaudron, la cible du « drag » |
  | `.bulle` | Les cinq bulles du chaudron |
  | `#abra`, `#cada`, `#bra` | Les trois mots de la formule magique |
  | `#grenouille` | La grenouille |

  ??? quote "Observation"

      J'ai encore utilisé la méthode de couche (_layer_) pour donner un effet plus ou moins 3d au chaudron.

### Installer la police 🚨

<figure markdown>
![type:video](./cop.webm){.h-auto .w-50}
</figure>

La formule magique doit utiliser la police de caractères **Princess Sofia** tirée de Fontsource.

Dans `index.html`, la section de la formule a déjà la classe `font-display`.

- [ ] Trouver et installer la fonte avec `npm`
- [ ] Ajouter la fonte dans le fichier `src/style.css`
- [ ] Déclarer _Princess Sofia_ comme police `display` de Tailwind (`--font-display`, dans `@theme`)
- [ ] Vérifier que « abra », « cada » et « bra » s'affichent avec la nouvelle police
- [ ] Commit + push

### Activer les plugins

- [ ] Dans `gsap.js`, configurer les plugins suivants : 
  - **Draggable**
  - **SplitText**
  - **ScrollToPlugin**
  - **ScrollTrigger**

### ScrollTrigger + SplitText

<figure markdown>
![type:video](./scroll.webm){.h-auto .w-50}
</figure>

- [ ] Découper `#abra` en **lettres** avec `SplitText.create()`
- [ ] Avec un `.from()`, faire apparaître les lettres de `#abra` :
  - [ ] `y` de `80`
  - [ ] Une opacité de `0`
  - [ ] Une `rotation` aléatoire entre `-40` et `40`
  - [ ] Un décalage de `0.05` entre chaque lettre 🤓
  - [ ] Un lissage `back.out(2)`
  - [ ] Un `scrollTrigger` qui surveille `#abra` :
    - [ ] Débute à `"top 80%"`
    - [ ] Finit à `"top 40%"`
    - [ ] scrub à `true` (ou `1`, c'est plus fun)
- [ ] Faire la même chose pour `#cada` et `#bra`
- [ ] Faire défiler la page lentement pour vérifier, dans les deux sens
- [ ] Commit + push

### Draggable + SplitText

<figure markdown>
![type:video](./drag-drop.webm){.h-auto .w-50}
</figure>

- [ ] Découper `#cta` en **mots** avec `SplitText.create()`
- [ ] Avec `Draggable.create()`, rendre `#ingredient` déplaçable sur les axes x et y, sans qu'il puisse sortir du `header` (option `bounds`)
- [ ] Ajouter un `onDragEnd()` au Draggable
- [ ] Si le champignon chevauche le chaudron à au moins 50% de sa superficie, créer une timeline :
  - [ ] `#ingredient` disparaît (`scale` à `0` et `autoAlpha` à `0`), durée de `0.3`, lissage `back.in(2)`
  - [ ] Ensuite, `#chaudron` s'écrase un peu, puis revient :
    - [ ] Le pivot doit être en bas au centre (`transformOrigin: "50% 100%"`)
    - [ ] `scaleX` à `1.1` et `scaleY` à `0.9`
    - [ ] Durée de `0.15`, avec `yoyo` et `repeat: 1`
  - [ ] Ensuite, `#cta` devient visible (`autoAlpha` à `1`)
  - [ ] Ensuite, les mots du CTA arrivent avec un `.from()` :
    - [ ] `y` de `40`
    - [ ] Une opacité de `0`
    - [ ] Une `rotation` aléatoire entre `-100` et `100`
    - [ ] Durée de `0.6`
    - [ ] Un lissage `back.out(2)`
    - [ ] Un décalage de `0.5` entre chaque mot 🤓
- [ ] Sinon, le champignon retourne à sa place (`x: 0, y: 0`) en `0.6` seconde, avec un lissage `elastic.out(1, 0.3)`
- [ ] Tester les deux cas de figure
- [ ] Commit + push

  ??? question "Pourquoi `x: 0, y: 0` ramène le champignon à sa place&nbsp;?"

      Draggable traite les déplacement comme un `transform` en css. Une valeur à `0` revient à annuler le déplacement.

### ScrollTo

<figure markdown>
![type:video](./bob.webm){.h-auto .w-50}
</figure>

- [ ] Au clic sur `#cta`, faire défiler la page **tout en bas** :
  - [ ] Durée de `5`, lissage `power1.inOut`
  - [ ] `scrollTo` avec `y: "max"`
- [ ] Vérifier que la formule magique s'écrit pendant le défilement
- [ ] Commit + push

  ??? tip "Indice"

      Dans un ScrollToPlugin, la valeur `"max"` (ex. : `y: "max"`) correspond au défilement maximal de la page.
 
### Finition

**Les bulles**

<figure markdown>
![type:video](./boil.webm){.h-auto .w-50}
</figure>


- [ ] Avec un `fromTo()`, animer les `.bulle` :
  - [ ] Au départ : `y`, `x` et `scale` sont à `0`
  - [ ] À l'arrivée, des valeurs aléatoires :
    - [ ] `y` entre `-100` et `-15`
    - [ ] `x` entre `-10` et `10`
    - [ ] `scale` entre `0.6` et `1.3`
    - [ ] Durée entre `0.8` et `1.6`
  - [ ] Lissage `power1.out`
  - [ ] Un `stagger` sous forme d'**objet** `{ }`, qui contient :
    - [ ] Un décalage de `0.3` (`each`)
    - [ ] Un ordre aléatoire (`from: "random"`)
    - [ ] Une répétition à l'infini (`repeat: -1`)
    - [ ] De nouvelles valeurs aléatoires à chaque tour (`repeatRefresh: true`)

**La grenouille**

<figure markdown>
![type:video](./toad.webm){.h-auto .w-50}
</figure>


- [ ] Animer le scale vertical de `#grenouille` en boucle, comme si elle respirait :
  - [ ] `scaleY` à `1.1`
  - [ ] Le pivot en bas au centre
  - [ ] Durée de `0.8`, lissage `sine.inOut`
  - [ ] Aller-retour à l'infini (`yoyo` et `repeat: -1`)
- [ ] Commit + push

  ??? info "Onomatopée de la grenouille"

      En anglais 🇬🇧, la grenouille fait « ribbit », en français 🇫🇷 « coâ ».

      Donc elle coasse. À ne pas confondre avec le corbeau qui croasse.

### Mise en ligne

<figure markdown>
![type:video](./github.webm){.h-auto .w-25}
</figure>


Le résultat doit être accessible en ligne, comme l'exemple du résultat attendu. 

> Vous savez déjà comment faire, à vous de jouer

- [ ] Exporter le projet vite
- [ ] Le publier avec GitHub Pages, dans un nouveau depot Github, distinct de celui du devoir
- [ ] Vérifier que tout fonctionne en ligne : images, police et animations
- [ ] Dans le `README.md` à la racine du répertoire du devoir, inscrire le lien vers le site en ligne
- [ ] Commit + push

### Défi pour éviter la répétition

<figure markdown>
![type:video](./puzzle.webm){.h-auto .w-25}
</figure>

- [ ] Les animations de `#abra`, `#cada` et `#bra` sont identiques.<br>Il serait donc préférable d'écrire l'animation **une seule fois**, mais dans une boucle (`forEach`) qui passe sur les trois mots.
- [ ] Commit + push
