# Vérification formative : « explique et modifie ton code » (portfolio)

Notes pour l'enseignante, pas une page à publier. À utiliser en circulant au cours 6.1 ou à la remise bêta. Environ 3 minutes par étudiant.

## Posture

- Formatif, sans note, sans enjeu. Le but : que l'étudiant découvre lui-même ce qu'il maîtrise ou non, **avant** le jury.
- On ne demande jamais « qui a écrit ce code? ». On demande « montre-moi » et « modifie ».
- L'étudiant pilote le clavier. Copilot fermé pendant les 3 minutes.

## Les 3 questions

### 1. « Montre-moi où tes projets sont chargés. »

Ce qu'on attend :

- ouvre `js/data.js` (ou l'équivalent) sans chercher longtemps;
- pointe le `fetch()` et l'adresse de la source;
- explique en ses mots ce que retourne la fonction (un tableau de projets).

Signal d'alerte : ne trouve pas le fichier, ou décrit le code ligne par ligne sans pouvoir dire ce qu'il fait globalement.

### 2. « Ajoute une propriété `tools` à un projet et affiche-la sur sa carte. »

Ce qu'on attend :

- ajoute la propriété dans la source (JSON, feuille ou Airtable);
- trouve la fonction qui fabrique la carte et y ajoute `${project.tools}`;
- recharge et vérifie dans le navigateur.

Signal d'alerte : ne sait pas où la carte est générée, ou modifie le HTML statique au lieu du gabarit JS.

Variante si c'est trop facile : « Affiche-la seulement si elle existe » (ternaire).

### 3. « Que se passe-t-il si le chargement échoue? »

Ce qu'on attend :

- pointe le `try` / `catch` ou le `.catch()`;
- ou, s'il n'y en a pas, peut dire ce qui arriverait (section vide, erreur dans la console) et où l'ajouter.

Test rapide : changer l'adresse du `fetch()` pour une adresse erronée, recharger, observer. Remettre la bonne adresse après.

Signal d'alerte : ne connaît pas la notion d'erreur de chargement, ou n'a aucune idée de ce que ferait la page.

## Grille de notes rapide

| Étudiant | Q1 Trouver | Q2 Modifier | Q3 Erreur | Code d'une autre source (Make, React...) | Suivi |
|---|---|---|---|---|---|
| | ✓ / ~ / ✗ | ✓ / ~ / ✗ | ✓ / ~ / ✗ | Oui / Non | |

- **3 ✓** : rien à faire.
- **Un ou deux ~ ou ✗** : « Voici ce que le jury pourrait te demander. Relis [Afficher les projets] et refais cette partie toi-même d'ici la remise finale. »
- **Code généré non maîtrisé** : proposer la réécriture guidée (`data.js` et `main.js` réécrits à partir des pages de cours, code généré ouvert à côté comme référence, entrée au journal qui explique la différence).

## Autres signaux à observer, sans en faire une preuve

- Historique Git : un seul gros commit qui contient tout le JS.
- Code en React, Tailwind ou autre cadriciel, alors que le portfolio est en JS vanilla.
- Structure qui ne suit pas l'arborescence du cours (`data.js`, `main.js`, composants).
- Commentaires très génériques ou en anglais « de générateur » que l'étudiant ne peut pas paraphraser.

Ce sont des occasions de dire « explique-moi comment tu as bâti ça », jamais des accusations.
