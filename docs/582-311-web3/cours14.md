# Cours 14

[STOP]

| Optimisation


Idée : Jeu de classes (monstre, personne, hit, score) et stats du jeu.

## Introduction aux classes JavaScript

![](./assets/images/clone.gif){.w-100}

Une classe en JavaScript, c’est un concept qui permet de structurer le code et de réutiliser la même logique plusieurs fois.

### Pourquoi on utiliserait ça ?

Imaginez que vous voulez programmer une page Web dans laquelle des poissons nagent indépendamment.

Vous pourriez commencer par écrire le code d’un premier poisson… puis copier-coller ce code pour en avoir un deuxième, un troisième, et ainsi de suite. Rapidement, ça devient lourd à maintenir.

C’est là que les classes sont utiles :

- On définit une seule fois une classe Poisson.
- Chaque nouveau poisson créé dans la page utilisera le même code.
- Peu importe si vous ajoutez 3 poissons ou 1 000 000, ils partageront tous la même logique.

### Comment ça fonctionne ?

```js
class Poisson {
  constructor(nom, couleur) {
    this.nom = nom;
    this.couleur = couleur;
  }

  coucou() {
    console.log(`${this.nom} (${this.couleur}) nage joyeusement.`);
  }
}

// On crée plusieurs poissons à partir de la même classe
const poisson1 = new Poisson("Nemo", "orange");
const poisson2 = new Poisson("Dory", "bleu");
const poisson3 = new Poisson("Sharky", "gris");

// Ils utilisent tous le même code défini dans la classe
poisson1.coucou(); // Résultat : Nemo (orange) nage joyeusement
poisson2.coucou(); // Résultat : Dory (bleu) nage joyeusement
poisson3.coucou(); // Résultat : Sharky (gris) nage joyeusement
```

<div class="grid grid-1-2" markdown>
  ![](./exercices/1001poissons/preview.gif)

<small>Exercice - JavaScript</small><br>
**[1001 poissons](./exercices/1001poissons/index.md){.stretched-link .back}**

</div>

## Programmation Orientée Objet (POO) en JavaScript (ES6)

## 1. Le constructeur

Le **constructeur** est une fonction spéciale qui s’exécute automatiquement quand on crée une instance avec `new`.  
Il sert souvent à **initialiser les propriétés** de la classe.

```js
class Voiture {
  constructor(marque, annee) {
    this.marque = marque;
    this.annee = annee;
  }

  infos() {
    console.log(`Cette voiture est une ${this.marque} fabriquée en ${this.annee}.`);
  }
}

const auto1 = new Voiture("Toyota", 2020);
auto1.infos();
// Résultat : Cette voiture est une Toyota fabriquée en 2020.
```

📝 **Notes**

- Le mot clé `constructor` est réservé.
- On ne peut avoir **qu’un seul constructeur** par classe.

👉 **Exercice 1**  
Crée une classe `Livre` qui prend un `titre` et un `auteur` en paramètre. Ajoute une méthode `resume()` qui affiche :  
`"Le livre TITRE a été écrit par AUTEUR."`

---

## 2. Héritage (extends, super)

Une classe peut **hériter** d’une autre classe avec `extends`.  
Cela permet de **réutiliser** du code existant et de **l’enrichir**.

```js
class Animal {
  constructor(nom) {
    this.nom = nom;
  }

  parler() {
    console.log(`${this.nom} fait un bruit.`);
  }
}

class Chien extends Animal {
  constructor(nom, race) {
    super(nom); // on appelle le constructeur de la classe parent
    this.race = race;
  }

  parler() {
    console.log(`${this.nom} aboie !`);
  }
}

const chien = new Chien("Rex", "Labrador");
chien.parler();
// Résultat : Rex aboie !
```

📝 **Notes**

- `extends` = hérite d’une autre classe.
- `super(...)` = appelle le constructeur du parent.

👉 **Exercice 2**  
Crée une classe `Employe` avec un nom et un salaire.  
Puis crée une classe `Manager` qui hérite de `Employe`, ajoute une propriété `departement` et une méthode `infos()` qui affiche toutes les infos.

---

## 3. Variables publiques et privées

En JavaScript (ES6+), on peut créer des **propriétés privées** avec `#`.  
Elles ne sont accessibles **que dans la classe**.

```js
class CompteBancaire {
  #solde; // propriété privée

  constructor(titulaire, soldeInitial) {
    this.titulaire = titulaire;
    this.#solde = soldeInitial;
  }

  deposer(montant) {
    this.#solde += montant;
  }

  afficherSolde() {
    console.log(`Solde de ${this.titulaire} : ${this.#solde}$`);
  }
}

const compte = new CompteBancaire("Alex", 100);
compte.deposer(50);
compte.afficherSolde();
// Résultat : Solde de Alex : 150$

console.log(compte.#solde);
// ❌ Erreur : propriété privée !
```

📝 **Notes**

- Une variable **publique** peut être accédée partout.
- Une variable **privée** (avec `#`) est protégée et uniquement accessible dans la classe.

👉 **Exercice 3**  
Crée une classe `CoffreFort` avec une variable privée `#codeSecret`.  
Ajoute une méthode `verifierCode(code)` qui dit `"Accès autorisé"` ou `"Accès refusé"` selon le code.

---

## 4. Méthodes statiques

Une méthode `static` appartient à la **classe elle-même** et non à une instance.  
On l’appelle directement avec `NomDeClasse.methode()`.

```js
class Maths {
  static carre(x) {
    return x * x;
  }
}

console.log(Maths.carre(5));
// Résultat : 25
```

📝 **Notes**

- `static` = méthode utilitaire qui n’a pas besoin d’une instance.
- Exemple : méthodes mathématiques, outils de validation, etc.

👉 **Exercice 4**  
Crée une classe `Convertisseur` avec une méthode statique `kmToMiles(km)` qui retourne la conversion en miles (`1 km = 0.621 miles`).  
Teste-la avec `Convertisseur.kmToMiles(10)`.








Optimisation médias
Compatibilité & validation
Préparation à l'examen

Exercices de préparation à l'examen final. Voici quelques ressources pour vous aider :

* <https://gsap.com/resources/getting-started/Staggers/>
* <https://gsap.com/docs/v3/Eases/>
* <https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_loops1>
* On peut modifier le curseur de lecteur d'une vidéo en manipulant l'attribut `currentTime` de la vidéo.
* <https://gsap.com/docs/v3/GSAP/Timeline/to()>
* <https://gsap.com/docs/v3/GSAP/Timeline/fromTo()>

## Stagger

<iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="GSAP - Révision - Stagger" src="https://codepen.io/tim-momo/embed/PwYZdRb?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/PwYZdRb">
  GSAP - Révision - Stagger</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

- [ ] Effectuer un fork du [codepen de départ](https://codepen.io/tim-momo/pen/wBwMEyd).
- [ ] En JavaScript, effectuer une animation et un effet stagger sur les enfants du `.wrapper`.

## Boucle et stagger (débutant)

<iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="GSAP - Boucle et stagger 1 - SOLUTION" src="https://codepen.io/tim-momo/embed/ogvbPyN?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/ogvbPyN">
  GSAP - Boucle et stagger 1</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

- [ ] Effectuer un fork du [codepen de départ](https://codepen.io/tim-momo/pen/vEBLzrL).
- [ ] En CSS, ajouter un effet de dégradé en bas du `.wrapper`.
- [ ] En JavaScript, à l'aide d'une boucle, ajoutez des enfants à `.wrapper`. Le nombre d'itération de la boucle doit simplement être estimé.
- [ ] En JavaScript, effectuer une animation et un effet stagger sur les enfants du `.wrapper`.

## Boucle et stagger (intermédiaire)

<iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="GSAP - Boucle et stagger 2 - PUBLIC" src="https://codepen.io/tim-momo/embed/vEBLzzL?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/vEBLzzL">
  GSAP - Boucle et stagger 2 - PUBLIC</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

- [ ] Effectuer un fork du [codepen de départ](https://codepen.io/tim-momo/pen/gbYPddL).
- [ ] En CSS, ajouter un effet de dégradé en bas du `.wrapper`.
- [ ] En CSS, ajouter une variable `--row-height` et donner lui la valeur `100px`;
- [ ] En CSS, remplacez les mentions 100px (taille des images) par la variable créée.
- [ ] En JavaScript, modifier la valeur de la variable `--row-height` par une valeur de votre choix (ex: `50px`);
- [ ] En JavaScript, déterminer le nombre d'itération d'une boucle (le nombre d'images à ajouter) en fonction de la taille d'écran et de la valeur de `--row-height`.
- [ ] En JavaScript, à l'aide d'une boucle, ajoutez des enfants à `.wrapper`.
- [ ] En JavaScript, effectuer une animation et un effet stagger sur les enfants du `.wrapper`.

## Dorohedoro (ScrollTrigger)

<iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="GSAP - Dorohedoro - PUBLIC" src="https://codepen.io/tim-momo/embed/ZYzQqzw?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/ZYzQqzw">
  GSAP - Dorohedoro - PUBLIC</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

- [ ] Effectuer un fork du [codepen de départ](https://codepen.io/tim-momo/pen/raBxqBb).
- [ ] En JavaScript, effectuer une animation qui permet de faire défiler la vidéo en même temps que le scroll de la page.

## Monsieur Sandwich (ScrollTrigger)

<iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="GSAP - Monsieur Sandwich - PUBLIC" src="https://codepen.io/tim-momo/embed/pvzgOWa?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/pvzgOWa">
  GSAP - Monsieur Sandwich - PUBLIC</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

- [ ] Effectuer un fork du [codepen de départ](https://codepen.io/tim-momo/pen/raBxZGZ).
- [ ] Animez la page de sorte à reproduire les animations dans l'aperçu.

[STOP]

Sources

https://fr.freepik.com/vecteurs-libre/illustration-dessin-anime-bagel-dessine-main_54047953.htm
https://fr.freepik.com/vecteurs-libre/illustration-dessin-anime-pomme-terre-dessine-main_54047725.htm
https://fr.freepik.com/vecteurs-libre/illustration-dessin-anime-pain-grille-dessine-main_54048110.htm
https://www.youtube.com/watch?v=iH_YJde1yps