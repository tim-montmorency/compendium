Cours 1: **Modifier le nom du package 2d begginer dans le jeu Unity** Unity Learn | 2D Beginner: Adventure Game Complete Project | URP (Vérifier si compatible car URP)


Cours 2: Vérif si unity android bien installé (Test tablette affiche dans Unity remote et build possible) 
Switch créer bonnes images avant créer base données

Simplifier déclencher à partir d'une détecion

Anim objets 2d, séparer les topics ou avoir juste sprite sheet pour que pas mélangés

Enseigner à partir des étapes du travail 1. 

Bloc 1: Composantes + plateforme, laisser temps créer projet + nomenclature plateforme et scène
Bloc 2: Unity remote + intro AR
Bloc 3: Détection
Bloc 4: Calques et anim 2d, ajouter vidéo dans anim 2d, changer calques de cour? 

Cours 6: Vérif si oculus fonctionne avec casque

travail 2: Emplacement des point light bulb dans synty a changé (video) 

Idées: 
- Travailler avec Touch + Unity via spout ou OSC

- Donner un scénario ou schéma + assets et donner une période aux étudiants pour intégrer le contenu: Formatif? Ou après le TP2 style exam pour valider compréhension. 

- Faire un peu de CQ pour critère 015W

- Évaluer GitHub et nomenclaute: 015w = 7

- Utiliser Gabarit JF pour création Jeu puisque élèves habitués

- Cours 01: Enlever image publish webgl du tuto

- Cours 01: Refaire tutoriel étape 0 dans figma plutôt que Illustrator.

Exercice cours 3: 
Compter: Accumuler des valeurs de update (voir dans inspecteur ou debog.log) init variable dans start

Défi: Créer un message avec nom + chiffre qui change (préfixe et suffixe)

Tester différentes fonctions (Start, update et personnalisé)

Compter des secondes et montrer nombre sur texte

Défi: 1 clic de bouton et voir le chiffre en haut changer

Décision dans update (leur faire réaliser le schéma ou faire avec eux): If seconde impaire activer un objet et quand paire, activer un autre.
% pour vérifier si 0 ou non avec somme qui s'additionne. time.realtime ou time.time  
void Update()
somme += time.deltaTime;

if(somme %2­ 0)
pair 
else
impair

Après, demander que ce soit une méthode. (méthode avec valeur de retour)
void update()
somme += time.deltaTime;
if(check(somme))
impair
else
pair

bool check(float valeur)
return valeur % 2 ­plus grand 0f;

Démo: Coroutine: quand le compte arrive à 5 secondes, activer un élément du canevas, partir dans le start pour qu'ils sachent comment

Avoir un schéma de prog pour les premiers exercices, ensuite le faire en classe avec eux et après leur faire faire 

Imprimer grille correction cours 4


GITHUB cours 4 - préparer notes

**Travail 2:** 
- travailler ennemis ou personnages avec 2 états (prefb = ennemi?)
- Retirer canvas
- Code sur animator - modifier animation
- Avoir des déplacements
- Détection espace (Change élément)
- Faire version initiale de la dynamique du projet 3: On choisi un jeu de base et on demande aux étudiants d'adapter au contexte 3D. (Ex: frogger)
- Mouvement interpolate ou tween.
- Partager données entre les scènes. (Valeur du dernier HighScore). 













