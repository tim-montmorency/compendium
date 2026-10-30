---
tags:
  - Exercice
  - Vite
  - GSAP
---

# Zombi

![](./zombi.jpg){data-zoom-image}

L'objectif de cet exercice est de créer une première animation avec **GSAP**&nbsp;: faire battre le coeur d'un zombi et faire varier la couleur de fond de la page.

Notions mises en pratique&nbsp;:

* `gsap.to()` et `gsap.fromTo()`
* Les propriétés `scale` et `backgroundColor`
* Les paramètres `duration`, `repeat`, `yoyo` et `ease`

## Résultat attendu

![type:video](./preview.webm){.h-auto}

## Consignes

### Préparation

- [ ] [Accepter le devoir Classroom 50](https://classroom50.org/tim-w3/web-3/assignments/zombi/accept)
- [ ] Cloner le répertoire avec GitHub Desktop
- [ ] Ouvrir le dossier cloné dans VSCode

---

- [ ] Dans le terminal, installer les dépendances, puis lancer le projet&nbsp;:
    ```bash
    npm install
    ```
    ```bash
    npx vite
    ```
- [ ] Confirmer que le coeur s'affiche au centre de la page 

??? question "Pas besoin d'installer GSAP ?"

    Non, pas là là. Tout va s'installer tout seul via le `package.json` de départ. 
    
    Disons que c'est un cadeau pédagogique 😜

### Exploration du projet

Avant d'écrire du code, prendre une minute pour comprendre comment le projet est branché.

- [ ] Ouvrir `index.html` et repérer l'image du coeur
  > Noter sa classe css. C'est elle qui servira de cible à l'animation.
- [ ] Ouvrir `src/main.js`
  > Il importe la fonction custom `gsapAnimations()` du fichier `gsap.js`, puis l'appelle.
- [ ] Ouvrir `src/gsap.js`
  > C'est **ici, et seulement ici**, que tout le code de l'exercice sera écrit, à l'intérieur de la fonction `gsapAnimations()`.

### Animation A - Le coeur :green_heart:

#### Un premier tween

- [ ] À l'aide de `gsap.to()`, animer le coeur
  - [ ] Agrandissement à `1.2` fois sa taille (`scale`)
  - [ ] Durée de `0.6` seconde

  ??? quote "Observation"

      Le coeur grossit une seule fois, puis plus rien. Un tween joue **une seule fois** par défaut.

#### Répétition

- [ ] Ajouter le paramètre `repeat` pour que l'animation se répète **à l'infini**

  ??? quote "Observation"

      Ça se répète, mais le coeur revient à sa taille d'origine d'un coup sec, sans transition.

#### L'aller-retour

- [ ] Ajouter le paramètre `yoyo` pour que le coeur revienne **en douceur** à sa taille d'origine

#### Le lissage

- [ ] Ouvrir le [visualiseur de lissages de GSAP](https://gsap.com/docs/v3/Eases) et essayer des lissages différents pour arriver au résultat attendu. Ne regardez pas tout de suite la réponse 😜

  ??? success "Réponse"

      Le lissage utilisé est `elastic.out(1, 0.3)`

      <!-- Le lissage `elastic` accepte deux réglages&nbsp;: l'**amplitude** (la force du rebond) et la **période** (la fréquence des oscillations). Modifier le `0.3` pour `0.1`, puis pour `0.8`, et observer la différence. Revenir ensuite à `0.3`. -->

- [ ] Commit + push

### Animation B - Le fond

- [ ] Dans la même fonction, sous l'animation du coeur, animer la couleur de fond du `body` avec `gsap.fromTo()`&nbsp;:
  - [ ] Couleur de départ&nbsp;: `#838B2F`
  - [ ] Couleur d'arrivée&nbsp;: `#BDAF88`
  - [ ] Durée de `2.4` secondes
  - [ ] Répétition à l'infini, en aller-retour

  ??? tip "Indice `fromTo()`"

      `fromTo()` reçoit deux objets :

      ```js
      gsap.fromTo("cible",
        { /* valeurs de départ */ },
        { /* valeurs d'arrivée + paramètres */ }
      )
      ```

      Les paramètres comme `duration` ou `repeat` vont **toujours dans le deuxième objet**.

- [ ] Commit + push

### Défi du zombi :zombie:

- [ ] Ajouter une légère rotation au coeur pendant qu'il bat (quelques degrés seulement)
- [ ] Commit + push
