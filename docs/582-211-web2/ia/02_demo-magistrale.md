# Cours 11 — Guide de démonstration magistrale : L'IA en temps réel

**Durée estimée : 20–25 minutes**  
**Format : Démonstration par l'enseignante, observation active par les étudiants**

---

## Objectif pédagogique

Modéliser le regard critique d'un professionnel face au code généré par l'IA. Les étudiants n'interagissent pas encore avec l'outil — ils observent et notent. L'objectif est de leur montrer *comment penser*, pas seulement *comment faire*.

---

## Matériel requis

- Accès à un outil IA (ex. : Claude.ai, GitHub Copilot, ou ChatGPT) projeté à l'écran
- Un éditeur de code visible (VS Code ou similaire)
- Un navigateur pour afficher le résultat en temps réel
- Une feuille de papier (ou un fichier texte ouvert) pour que les étudiants notent leurs observations

---

## Consigne à donner aux étudiants AVANT de commencer

> *« Je vais générer un composant CSS avec l'IA devant vous. Pendant que je le fais, je veux que vous notiez en silence deux choses : ce qui vous semble bon dans le code, et ce qui vous semble discutable ou étrange. On en parlera après. »*

Insister : pas de commentaires pendant la génération. L'observation silencieuse d'abord.

---

## Scénario de démonstration recommandé

### Brief à soumettre à l'IA

Utiliser ce prompt (ou une variante) à l'écran :

```
Génère un composant CSS "carte de profil" qui s'adapte à son conteneur 
avec des container queries. La carte contient une photo, un nom, 
un titre de poste et un bouton. Utilise des custom properties pour 
les couleurs et les espacements.
```

---

### Ce que tu vas chercher dans le code généré

Voici les éléments à repérer et à commenter à voix haute lors de la démonstration. Tu n'as pas besoin de tous les trouver — utilise ceux qui apparaissent naturellement dans la réponse de l'IA.

#### ✅ Choses potentiellement bonnes à nommer
- Utilisation des custom properties (`--color-primary`, etc.)
- Structure logique du HTML (sémantique correcte)
- Nommage de classes cohérent
- Présence de `container-type` sur le bon élément

#### ⚠️ Choses discutables à pointer
- Unités absolues (`px`) là où des unités relatives (`rem`, `%`) seraient plus robustes
- Manque de `gap` ou d'espacement cohérent avec le système de design
- Classes trop génériques (`card`, `btn`) sans contexte ou méthodologie
- Absence de styles pour les états interactifs (`hover`, `focus`)
- Valeurs de breakpoint arbitraires dans les container queries

#### ❌ Erreurs courantes ou hallucinations à surveiller
- Syntaxe de container queries incorrecte (ex. : `@container card (min-width: 300px)` sans le nom déclaré)
- Propriétés qui n'existent pas ou sont mal utilisées
- `display: flex` sur un élément qui n'en a pas besoin
- Spécificité excessive (ex. : `div.card > p.card__title`)
- Commentaires auto-générés qui décrivent ce que le code fait mais pas *pourquoi*

---

## Déroulement pas à pas

### 1. Génération (3–5 min)
Soumettre le prompt. Lire le code à voix haute pendant qu'il s'affiche, sans commenter encore. Coller dans l'éditeur.

### 2. Premier regard (2 min)
Dire à voix haute ce que tu fais :

> *« Première chose que je fais : je lis sans exécuter. Est-ce que le code me semble logique structurellement ? »*

Faire défiler lentement. Lire quelques propriétés à voix haute.

### 3. Exécution et résultat visuel (3 min)
Afficher dans le navigateur. Commenter l'écart entre le résultat visuel et les attentes :

> *« Est-ce que ça ressemble à ce qu'on a demandé ? Qu'est-ce qui manque ou qui surprend ? »*

### 4. Retour dans le code — analyse commentée (8–10 min)
Parcourir le code en nommant ce que tu vois. Utiliser les catégories ✅ / ⚠️ / ❌ à voix haute, sans les projeter comme telles.

Exemples de formulations à utiliser :
- *« Ça, c'est une bonne décision parce que… »*
- *« Ça, je changerais parce que… »*
- *« Ça, c'est une erreur — l'IA a inventé quelque chose qui ne fonctionne pas de cette façon. »*

### 5. Discussion collective (5 min)
Ouvrir la parole :

> *« Vous avez noté quoi de votre côté ? Qu'est-ce que vous avez vu que je n'ai pas mentionné ? »*

Valider, compléter, corriger. Ne pas chercher à tout couvrir — l'objectif est d'activer leur regard critique, pas d'être exhaustif.

---

## Messages clés à faire passer pendant la démo

1. **Le code généré n'est pas neutre.** L'IA fait des choix — souvent des choix corrects, parfois des choix paresseux ou erronés.
2. **Lire avant d'exécuter.** Un professionnel ne fait pas tourner du code qu'il n'a pas lu.
3. **L'IA ne connaît pas ton projet.** Elle génère du code générique. Toi, tu as un contexte, un système de design, des contraintes.
4. **Le code commenté par l'IA n'est pas du code documenté.** Documenter, c'est expliquer les *décisions*, pas les *lignes*.

---

## Transition vers l'atelier

Conclure avec :

> *« Maintenant c'est votre tour. Vous allez faire exactement ce qu'on vient de faire — mais vous allez le documenter. L'IA génère, vous analysez, vous améliorez, vous justifiez. »*
