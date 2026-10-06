# Compendium : travailler en local

Oct 6, 2026 · @Marie-Michelle Ouellet

## Pourquoi

On voit ses modifications au compendium en quelques secondes, sur son ordi, au lieu d'attendre le déploiement GitHub après chaque *push*. On ne pousse sur GitHub qu'une fois le résultat vérifié.

Toutes les commandes se lancent dans le **terminal de VS Code**, ouvert à la racine du dossier `compendium` (là où se trouve `mkdocs.yml`).

## Installation (une seule fois par poste)

Une commande installe mkdocs et toutes les extensions du compendium, listées dans `requirements.txt` :

```
python -m pip install -r requirements.txt
```

Elle installe notamment :

| Paquet | Rôle |
| --- | --- |
| `mkdocs-material` | Le thème (et mkdocs lui-même) |
| `pymdown-extensions` | Onglets, admonitions, touches `++ctrl++`, etc. |
| `mdx-truly-sane-lists` | Listes Markdown plus strictes |
| `mkdocs-video`, `mkdocs-audio` | Vidéos et sons intégrés |
| `mkdocs-render-stopper` | La balise `[STOP]` |
| `beautifulsoup4` | Utilisé par les *hooks* du compendium |

À relancer seulement si `requirements.txt` change, ou sur un nouveau poste.

**Toujours écrire `python -m mkdocs`**, jamais `mkdocs` seul : au Collège, l'exécutable `mkdocs.exe` est bloqué par les droits administrateur. Passer par `python -m` contourne ce blocage.

## Aperçu en direct : `serve`

```
python -m mkdocs serve
```

1. Ouvrir `http://127.0.0.1:8000` dans le navigateur.
2. Modifier un fichier `.md` ou `extra.css`, puis enregistrer : la page se recharge seule.
3. Pour arrêter : **Ctrl + C** dans le terminal.

`serve` compile dans un dossier temporaire caché, effacé à l'arrêt : aucun fichier HTML n'apparaît sur le disque. Pour en obtenir, voir la section `build` plus bas.

Sur le compendium complet, le démarrage et chaque recompilation sont longs. Pour travailler sur Web 5, utiliser plutôt la section suivante.

## Compiler seulement Web 5

Un petit fichier `mkdocs-web5.yml`, à la racine de `compendium` (à côté de `mkdocs.yml`), reprend toute la configuration et exclut les autres cours :

```yaml
INHERIT: mkdocs.yml
exclude_docs: |
  /*
  !/index.md
  !/_/
  !/582-511-web5/
```

Il garde la page d'accueil, le dossier `_/` (la feuille de styles globale) et `582-511-web5/`. Pour l'aperçu :

```
python -m mkdocs serve -f mkdocs-web5.yml --dirty
```

- `-f mkdocs-web5.yml` : utilise ce fichier au lieu de `mkdocs.yml`.
- `--dirty` : à chaque enregistrement, recompile seulement le fichier modifié.

Les lignes `INFO` qui disent que des pages du menu sont exclues sont normales.

Le dépôt est partagé avec les autres enseignants : pour garder ce fichier sur son ordi seulement, ajouter la ligne `mkdocs-web5.yml` au `.gitignore`.

## Obtenir les fichiers HTML : `build`

`build` écrit de vrais fichiers HTML dans le dossier **`site/`**, à la racine de `compendium` :

Web 5 seulement :

```
python -m mkdocs build -f mkdocs-web5.yml
```

Tout le compendium :

```
python -m mkdocs build
```

Les fichiers générés se trouvent ensuite ici, par exemple :

```
compendium/site/582-511-web5/cours07a.html
compendium/site/582-511-web5/qa/optimisation-medias.html
```

- Ces pages s'ouvrent d'un double-clic : l'extension `material/offline` les rend utilisables sans serveur (la recherche peut être limitée).
- Chaque `build` remplace tout le dossier `site/` : on n'y range rien.
- `site/` ne va pas sur GitHub : c'est l'action GitHub qui compile la version en ligne. Il est déjà exclu par le `.gitignore` du dépôt.

## Aide-mémoire

| Je veux... | Commande |
| --- | --- |
| Installer (une fois) | `python -m pip install -r requirements.txt` |
| Voir Web 5 en direct | `python -m mkdocs serve -f mkdocs-web5.yml --dirty` |
| Voir tout le compendium en direct | `python -m mkdocs serve --dirty` |
| Fichiers HTML de Web 5 | `python -m mkdocs build -f mkdocs-web5.yml` |
| Fichiers HTML de tout le compendium | `python -m mkdocs build` |
| Arrêter `serve` | Ctrl + C |

## Problèmes fréquents

| Symptôme | Cause probable | Solution |
| --- | --- | --- |
| `mkdocs` n'est pas reconnu ou est bloqué | L'exécutable est bloqué par les droits admin | Utiliser `python -m mkdocs` |
| Erreur du type *plugin not installed* ou *No module named...* | Extensions pas installées | Relancer `python -m pip install -r requirements.txt` |
| *Port 8000 is already in use* | Un autre `serve` tourne encore | Fermer l'autre terminal, ou ajouter `-a 127.0.0.1:8001` |
| Une modification faite par Claude disparaît | VS Code a réenregistré l'ancienne version encore ouverte | Fermer l'onglet sans enregistrer, puis le rouvrir |
| Les cartes s'affichent mal (une liste par carte) | L'extension `mdx_truly_sane_lists` coupe les listes de cartes | Utiliser la syntaxe `<div class="grid" markdown>` + `<div class="card" markdown>` |
| Une image en HTML brut ne s'affiche pas | mkdocs ne réécrit pas les chemins du HTML brut | Chemin relatif à la page `.html` publiée (ex. `assets/...`) |
