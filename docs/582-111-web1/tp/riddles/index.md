# Énigmorency

## Le concept

Le type de jeu _riddle_ est un jeu où chaque page contient une énigme et, en la résolvant, on trouve l’URL de la page suivante.

[Exemples en ligne](./exemples.md){.back}



[STOP]



Objectif du TP2

Créer un mini-site Web de type riddle game :
	•	Le site est composé de 5 pages d’énigmes (par exemple 6 à 8 niveaux).
	•	Chaque page contient :
        •	Une énigme (texte, image, indices…)
        •	Un indice permettant de trouver l’URL ou le chemin de la page suivante.
        •	L’utilisateur doit trouver la bonne réponse pour passer au prochain niveau.

Créer un fichier word avec les réponses.


---

Comment fonctionne techniquement un jeu de riddles ?

Pour rester simple, nous allons utiliser uniquement des pages HTML/CSS.

1. Une page = un niveau

Chaque énigme correspond à un fichier HTML :
	•	index.html → page d’accueil / règles du jeu
	•	niveau1.html → énigme 1
	•	niveau2.html → énigme 2
	•	etc.

L’utilisateur commence sur index.html, puis doit trouver comment atteindre la page suivante.

2. Comment on « débloque » la page suivante ?

Plusieurs possibilités pour ce TP (tu peux en choisir une ou combiner) :
	1.	Version “old school”
	•	L’énigme donne la réponse.
	•	La réponse est aussi le nom de la prochaine page :
Exemple : si la réponse est dragon, alors la page suivante est dragon.html.
	•	L’utilisateur doit taper lui-même dragon.html dans l’URL (ou cliquer sur un lien discret une fois trouvée).
	2.	Lien discret dans la page
	•	La page contient un <a href="niveau2.html"> mais le texte du lien est caché / très discret / intégré dans un mot.
	•	L’énigme sert à deviner où cliquer.
	3.	Formulaire de réponse (optionnel, si vous utilisez un peu de JS plus tard)
	•	Un petit formulaire <input> où l’utilisateur tape sa réponse.
	•	Si la réponse est bonne, JavaScript redirige vers la bonne page.

⸻

Types d’énigmes possibles (avec exemples)

Vous devez proposer des énigmes variées. Voici plusieurs catégories avec des idées concrètes.

1. Enigmes d’observation (contenu visible)

Principe : la réponse est visible dans la page, mais il faut bien regarder.

Exemples :
	•	Un texte du type :
« Compte le nombre de lettres R dans cette page et utilise ce nombre comme nom de fichier. »
S’il y a 7 lettres R, la page suivante s’appellera 7.html.
	•	Une phrase étrange :
« Cherche la clé cachée dans le pied de page. »
Dans le <footer>, tu mets :

<footer>La clé est : licorne</footer>

→ La prochaine page : licorne.html.

⸻

2. Enigmes dans le code source / inspecteur

Principe : l’utilisateur doit ouvrir le code source ou utiliser l’inspecteur.

C’est parfait pour les débutants Web : ça les force à voir les balises, attributs, commentaires…

Exemples :
	•	Un commentaire caché :

<!-- Bravo, tu as pensé à regarder le code source !
     La prochaine page s’appelle : secret.html -->


	•	Un texte trompeur :

<p>Le mot de passe n’est pas ici...</p>
<p class="hidden">… mais ici : pyramide</p>

Avec du CSS :

.hidden {
  display: none;
}

Dans la page, on ne voit rien, mais dans le code, on découvre pyramide.
→ Prochaine page : pyramide.html.

⸻

3. Enigmes basées sur l’URL / le nom du fichier

Principe : la page elle-même donne un indice sur le nom de la prochaine page.

Exemples :
	•	La page actuelle est couleurs.html. Le texte dit :
« Pour continuer, enlève le s à la fin de cette page. »
→ La prochaine page : couleur.html.
	•	Un titre de page <title> :

<title>Le mot de passe est "galaxie"</title>

→ Dans l’onglet du navigateur, on voit « Le mot de passe est “galaxie” ».
→ Prochaine page : galaxie.html.

⸻

4. Enigmes avec les images

Principe : l’énigme se cache dans l’image ou dans ses attributs.

Exemples :
	•	Le nom du fichier image :

<img src="assets/img/papillon-liberte.png" alt="Un papillon">

L’énigme dit :
« Le nom de ce fichier t’indique la suite. »
La prochaine page peut s’appeler liberte.html.

	•	Le texte alternatif (alt) :

<img src="assets/img/porte.png" alt="La réponse est minotaure">

→ L’utilisateur doit inspecter l’image pour voir l’attribut alt.
→ Prochaine page : minotaure.html.

⸻

5. Enigmes avec des codes 

Principe : utiliser des codes faciles à comprendre avec un minimum d’explication sur la page.

Tu peux par exemple :
	•	Donner le tableau de conversion sur la page.
	•	Donner un indice très clair pour que ce soit jouable pour tout le monde.

Exemples possibles :

a) Code couleur hexadécimal (liens avec CSS)
Dans le CSS :

body {
  background-color: #4169E1;
}

Dans le texte de l’énigme :

« Regarde le code couleur de fond de la page. Cherche son nom en anglais, tout en minuscules. »

Si #4169E1 correspond à royalblue, la prochaine page peut être royalblue.html ou juste royal.html.

b) Alphabet chiffré simple (A=1, B=2…)
Tu affiches :

3 – 8 – 1 – 20 – 7 – 16 – 20

Avec l’indice :

« A=1, B=2, C=3… »

La réponse est chatgpt → prochaine page : chatgpt.html.

c) ROT13 / décalage de lettres (optionnel)
Tu peux écrire :

qrirybczrag
Avec un indice :
« Chaque lettre a été décalée de 13 positions dans l’alphabet. »

La réponse : development → page suivante development.html.

⸻

6. Enigmes de logique / devinettes classiques

Principe : une petite devinette où la réponse est un mot.

Exemples :
	•	Texte dans la page :
« Je suis pris avant de manger, je peux être d’entrée, de sortie ou de remerciement. Qui suis-je ? »
→ Réponse : priere → page priere.html.
	•	Ou encore :
« Plus je suis grand, moins tu en vois. Qui suis-je ? »
→ Réponse : nuit → page nuit.html.

⸻

Recommandations pour votre TP

Pour que votre jeu soit agréable à jouer :

	•	Variez les énigmes :
	•	Au moins 3 types différents (ex. observation, code source, image, URL, code simple…).
	•	Aidez le joueur :
	•	Donnez des indices (pas trop flous).
	•	Essayez vos niveaux sur quelqu’un pour vérifier que ce n’est pas impossible.
	•	Soignez la présentation :
	    •	Structure HTML propre (titres, paragraphes, images…)
	    •	Un minimum de CSS pour rendre ça lisible et agréable.

⸻
