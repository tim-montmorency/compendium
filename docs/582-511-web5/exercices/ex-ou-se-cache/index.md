# **Exercice** :material-code-json:  Où se cache la donnée?

<div class="class-content-link">
  <img src="../../assets/IA-interdite.png">
  <span>Utilisation de l'IA interdite pour cette activité. Faites chauffer vos méninges!</span>
</div>

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Trouver le **chemin** vers une donnée dans une réponse d'API, à partir de `data`.
2. **Chaque personne, sur son poste**, 25 minutes. Vos réponses vont dans Wooclap.
3. C'est exactement ce que vous ferez avec l'API de votre moment dataviz.

</div>

Au besoin : [la méthode](../../js/json-chemin.md#methode) pour lire un chemin.

## Le Wooclap de votre groupe { #wooclap }

Le défi de la partie A et les trois API de la partie B : vos réponses vont dans le Wooclap de votre groupe. Elles restent cachées aux autres jusqu'à la mise en commun.

- [Gr1 mercredi AM](https://app.wooclap.com/BZUIEPD) (code `BZUIEPD`)
- [Gr2 mercredi PM](https://app.wooclap.com/UQLJRRR) (code `UQLJRRR`)

## Partie A : Pikachu *10 min* { #partie-a }

**D'où viennent les données?** De la [PokéAPI](https://pokeapi.co/){ target="_blank" }, une API gratuite sur les Pokémon. 

Copiez l'adresse de la version 2 de leur API (ci-bas) dans Firefox pour voir la réponse complète, et sa structure :

```
https://pokeapi.co/api/v2/pokemon/pikachu
```

Gardez-la ouverte à côté : c'est en lisant cette structure qu'on trouve les chemins.

La démo ci-dessous charge la même réponse. Essayez les chemins proposés, du plus simple au plus difficile, puis relevez le défi.

<iframe src="https://tim-montmorency.com/Fragment/v/?f=w5-json-chemin&onglets=resultat&modifiable=1&boutons=rejouer,ouvrir" style="width:100%;height:650px;border:0" loading="lazy"></iframe>

### Défi : les points de vie (hp) de Pikachu { #defi }

Dans le champ **Le chemin** de la démo ci-dessus, trouvez le chemin qui donne le **nombre** de points de vie de Pikachu : la démo doit afficher **35**.

Indice : cherchez `stats` dans la réponse. C'est un tableau d'objets. Le **nom** de la statistique (`"hp"`) vous dit dans quelle case regarder, mais ce n'est pas la valeur que vous cherchez.

Écrivez votre **chemin** dans le Wooclap de votre groupe.

## Partie B : trois vraies API *15 min* { #partie-b }

Trois adresses, de la plus facile à la plus difficile. Pour chacune :

- [ ] Ouvrez l'adresse dans **Firefox** : il affiche le JSON de façon lisible ([explorer la réponse](../../js/json-chemin.md#firefox)).
- [ ] Trouvez le **chemin** vers la valeur demandée.
- [ ] Testez-le dans la **console** de la page de l'API (++f12++), avec le code ci-dessous.
- [ ] Écrivez le **chemin** et la **valeur** dans le Wooclap de votre groupe. Vos réponses restent cachées aux autres jusqu'à la mise en commun.

| L'API | La valeur à trouver | L'adresse à copier dans Firefox |
|---|---|---|
| [Open-Meteo](https://api.open-meteo.com/v1/forecast?latitude=45.5&longitude=-73.57&daily=temperature_2m_max&timezone=America%2FToronto){ target="_blank" } | La température maximale prévue **demain** à Montréal | `https://api.open-meteo.com/v1/forecast?latitude=45.5&longitude=-73.57&daily=temperature_2m_max&timezone=America%2FToronto` |
| [USGS](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson){ target="_blank" } | Le lieu du **premier** séisme de la liste | `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson` |
| [Nager.Date](https://date.nager.at/api/v3/PublicHolidays/2026/CA){ target="_blank" } | Le nom anglais du **premier** jour férié de 2026 au Canada | `https://date.nager.at/api/v3/PublicHolidays/2026/CA` |

**Tester un chemin dans la console** : dans la console de Firefox, collez ces deux lignes, puis remplacez `data.propriete` par votre chemin. La console affiche la valeur, ou `undefined` si le chemin est faux.


```js
const data = $json.data;
data.propriete
```

Si vous voulez plutôt tester un chemin dans Chrome ou Edge [voir les détails ici](../../js/json-chemin.md#console).

