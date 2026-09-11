# Cours 3.2

## Projet portfolio

<div class="class-content-link">
  <img src="./projets/assets/icon-portfolio.svg">
  <a href="./projets/portfolio/index.html">Projet Portfolio : consignes sommaires</a>
</div>

<div class="class-content-link">
  <img src="./projets/assets/icon-portfolio.svg">
  <a href="./projets/portfolio/index-textuel.html">Projet Portfolio : consignes complètes (en détail)</a>
</div>

---


<div class="class-content-link">
  <img src="./projets/assets/icon-portfolio.svg">
  <a href="./projets/portfolio/index-textuel.html#remise-1-planification-et-design-gr-enric-14-sept-gr-lora-17-sept">Instructions de la <em>Remise 1 : Planification et design</em> (gr. Enric 14 sept. | gr. Lora 17 sept.)</a>
</div>

<div class="class-content-link">
  <img src="./projets/assets/icon-portfolio.svg">
  <a href="./projets/portfolio/index-textuel.html#remise-2-version-beta-semaine-6-2-octobre">Instructions de la <em>Remise 2 : Version Beta et QA</em> (semaine 6, 2 octobre)</a>
</div>

<div class="class-content-link">
  <img src="./projets/assets/icon-portfolio.svg">
  <a href="./projets/portfolio/index-textuel.html#remise-3-finale-portfolio-complet-et-presentation-devant-le-jury-semaine-7-gr-lora-8-oct-gr-enric-15-oct">Instructions de la <em>Remise FINALE : Portfolio complet et présentation devant le jury</em> (semaine 7 | gr. Lora 8 oct. | gr. Enric 15 oct.)</a>
</div>


## Aujourd'hui

- [ ] Retour sur Figma (FR, Make > Design, partager le lien avec l'enseignante)
- [ ] Tour d'horizon : les 4 choix technologiques à justifier dans `PLANIFICATION.md`
- [ ] Finaliser vos maquettes Figma (mobile + desktop)
- [ ] Finaliser `PLANIFICATION.md`
- [ ] Journal de bord

!!! info "Rappel : remise 1 la semaine prochaine"
    Planification et design à remettre : **groupe Enric, 14 septembre** · **groupe Lora, 17 septembre**. C'est votre dernier bloc de cours pour finaliser `PLANIFICATION.md` avant la remise.

## Retour sur Figma

### Changer la langue de Figma en français

#### Sur le site web

1. Aller sur le site Figma (pas l'app) et défiler jusqu'au pied de page et vous verrez la liste déroulnante pour changer la langue. 
2. Sélectionner **Français**.

![alt text](./ia/assets/figma-francais.png)

#### Dans l'application Figma

<div style="max-width: 1280px"><div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe src="https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=9bab5590-634f-4255-ac19-bf8f3f8739e1&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="1280" height="720" frameborder="0" scrolling="no" allowfullscreen title="changer-langue-figm-app.mp4" style="border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;"></iframe></div></div>

### Figma Make vers Figma Design

<div style="max-width: 1280px"><div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe src="https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=0201aebd-0be6-4321-af38-a65a443c0247&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="1280" height="720" frameborder="0" scrolling="no" allowfullscreen title="export-de-figma-make-vers-figma-design.mp4" style="border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;"></iframe></div></div>

### Partager le lien de votre design Figma avec votre enseignante

1. Inviter votre enseignante à votre projet Figma (marie-michelle.ouellet@cmontmorency.qc.ca) avec le rôle **Can edit** (peut éditer).
2. Copier le lien de partage de votre design Figma et l'ajouter dans le fichier *README.md* de votre dépôt GitHub.

<div style="max-width: 1280px"><div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe src="https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=43ce894a-6553-4d12-988d-490b461bb499&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="1280" height="720" frameborder="0" scrolling="no" allowfullscreen title="partager-design-avec-prof.mp4" style="border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;"></iframe></div></div>


## Les 4 choix technologiques de votre portfolio 🎯

Pour chacun des 4 éléments suivants, vous devez choisir une approche et **l'expliquer dans `PLANIFICATION.md`**. Il n'y a pas de mauvais choix, seulement des choix pas justifiés. L'objectif aujourd'hui : que vous ayez une idée claire de comment chaque option fonctionne concrètement, avant de trancher.

[:material-file-document-outline: Voir les consignes complètes du portfolio](./projets/portfolio/index-textuel.html#vos-choix-technologiques-a-justifier-dans-votre-planification){ .md-button :target="_blank" }

### 1. Gestion des données 🗂️

Vos projets (titre, description, image, catégorie, lien) doivent être séparés du reste du HTML et chargés de façon asynchrone en JavaScript. 

**Trois familles d'options :**

| Option | Comment ça marche | Bon pour |
|---|---|---|
| **Fichier JSON local** | Un fichier `projets.json` dans votre dépôt, chargé avec `fetch()`. Aucun serveur, aucun compte externe. | La majorité d'entre vous. Simple, fiable, fonctionne directement sur GitHub Pages. |
| **Base de données en ligne (gratuite)** | Vos données vivent ailleurs (Airtable, Google Sheets publié en JSON, Supabase, Firebase), récupérées par une requête `fetch()` vers une URL au lieu d'un fichier local. | Si vous voulez pouvoir modifier vos projets sans toucher au code ni redéployer. |
| **Petit CMS headless gratuit** (Contentful, Sanity) | Une interface d'édition de contenu en ligne (texte riche, images), qui expose vos données via une API. | Si vous avez déjà utilisé ce genre d'outil ou voulez une vraie interface de gestion de contenu. Un peu plus de configuration au départ. |

!!! tip
    Le JSON local est le choix par défaut le plus sûr pour ce projet. Une base de données en ligne, ce n'est pas plus « avancé » en soi, c'est utile seulement si la mise à jour fréquente du contenu est un vrai besoin pour vous.

### 2. Animations 🎬

| Outil | Ce que c'est | À considérer |
|---|---|---|
| **CSS pur** (transitions, keyframes) | Ce que vous connaissez déjà de Web 2. | Suffisant pour la majorité des interactions simples (survol, apparition). Le plus léger, aucune dépendance. |
| **Anime.js** | Une librairie JS légère, que vous avez déjà utilisée dans vos cours précédents. | Bon compromis : plus de contrôle que le CSS, syntaxe que vous connaissez déjà. |
| **GSAP** | La librairie professionnelle standard de l'industrie pour l'animation web. | Puissante, mais pas encore enseignée formellement, ce sera fait à l'intégrateur. Si vous la choisissez maintenant, ce sera en autodidacte (documentation officielle, Copilot en soutien), et ce sera à documenter dans votre journal. |
| **Scroll-driven animation (CSS natif)** | `animation-timeline: scroll()`, une fonctionnalité CSS récente qui anime un élément en fonction du défilement, sans JS. | Élégant et natif, mais support navigateur encore inégal (à vérifier). Aussi vu plus en profondeur à l'intégrateur. |

Peu importe l'outil, précisez dans `PLANIFICATION.md` : **quoi** vous voulez animer, **comment**, et **sur quel événement** (scroll, survol, clic).

### 3. Structure de navigation 🧭

Deux grandes familles, selon votre concept :

**One-pager avec pop-up**
Toutes les données sont chargées une seule fois au chargement de la page. Un clic sur un projet ouvre une fenêtre modale (ex. l'élément natif `<dialog>`) qui affiche le détail, sans changer de page.

**Multipages avec paramètre d'URL**
La page d'accueil liste les projets (cartes), chacune pointant vers une page comme `projet.html?id=cafe-du-coin`. La page projet lit ce paramètre dans l'URL et va chercher, dans le même JSON (ou la même source), les données du projet correspondant pour les afficher.

```js
// Dans projet.html
const params = new URLSearchParams(window.location.search);
const idProjet = params.get('id'); // "cafe-du-coin"
```

!!! note
    C'est ça, « passer le projet en paramètre dans l'URL » : pas besoin de routeur ni de cadriciel, juste la chaîne de requête (`?id=...`) et `URLSearchParams`. On détaille le code plus tard, aujourd'hui c'est pour que vous compreniez le principe avant de choisir.

### 4. Hébergement 🌐

| Service | Domaine par défaut | Remarque |
|---|---|---|
| **GitHub Pages** | `votre-nom.github.io/nom-du-depot` | Recommandé, déjà lié à votre dépôt. Aucune configuration serveur. |
| **Netlify** | `nom-du-projet.netlify.app` | Déploiement automatique depuis GitHub, gratuit, offre aussi des fonctions serverless si jamais vous en avez besoin. |
| **Vercel** | `nom-du-projet.vercel.app` | Même principe que Netlify. |
| **Cloudflare Pages** | `nom-du-projet.pages.dev` | Même principe, très rapide. |

**Nom de domaine personnalisé (optionnel)** : au lieu du sous-domaine gratuit, vous pouvez acheter un vrai domaine (quelques dollars par année, chez un registraire comme Namecheap ou OVH) et le pointer vers l'hébergeur choisi. Pas exigé pour ce projet, mais bon à savoir pour votre futur portfolio professionnel.

## Peu importe vos choix, le principe reste le même 🔁

Que vos données viennent d'un fichier JSON ou d'une base de données en ligne, le patron de code est identique. Deux syntaxes possibles, selon celle que vous avez déjà vue, choisissez celle avec laquelle vous êtes le plus à l'aise :

**Avec `async`/`await`**

```js
async function chargerProjets() {
  const reponse = await fetch('projets.json'); // ou une URL d'API
  const projets = await reponse.json();
  return projets;
}
```

**Avec `.then()`**

```js
function chargerProjets() {
  return fetch('projets.json') // ou une URL d'API
    .then(reponse => reponse.json())
    .then(projets => projets);
}
```

Les deux font exactement la même chose : `fetch()` retourne une promesse, `async`/`await` l'écrit de façon plus linéaire, `.then()` l'enchaîne étape par étape. Aucune n'est « meilleure », c'est une question de préférence et de ce que vous avez déjà pratiqué.

Seule l'adresse dans `fetch()` change. On reverra ce mécanisme en détail au bloc 5.1, c'est votre aide-mémoire JS qui couvre déjà `fetch`/async : 
- [Aide-mémoire JavaScript de JF Cartier](https://jfcmontmorency.github.io/aide-memoire/){ :target="_blank" }
- [Promesse JavaScript](https://tim-montmorency.com/timdoc/582-424MO/javascript/promesses-js/){ :target="_blank" }
- [Fetch API](https://tim-montmorency.com/timdoc/582-424MO/javascript/fetch-api/){ :target="_blank" }
- [Structure du JSON et accès aux propriétés](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Scripting/JSON#structure_du_json){ :target="_blank" }

## Maintenant, à vous 📝

Avec ces 4 choix plus clairs, terminez vos maquettes Figma et complétez `PLANIFICATION.md`. Je circule pour répondre aux questions.
