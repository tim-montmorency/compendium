# Exercice - Sonoriser TON jeu

> Exercice du [cours 8](../cours08.md)

### 1. Choisir et importer

- [ ] Trouve : 1 musique/ambiance qui colle à ton moodboard + au moins 2 SFX (ex. : collecte, porte)
- [ ] Écoute tes SFX ensemble : se ressemblent-ils? (leçon Hidden Folks - pas un son cartoon au milieu de sons réalistes)
- [ ] Importe dans `_Project/Audio`
- [ ] **Tout de suite** : ajoute les sources dans ton `README.md` (titre, auteur, lien, licence) - pas « plus tard »

### 2. L'ambiance

- [ ] GameObject vide `Musique` dans la scène `Jeu` → **Add Component → Audio Source**
- [ ] Glisse ta musique dans **AudioClip** → coche **Loop** et **Play On Awake** → **Volume ~0.3**
- [ ] ▶️ Marche 30 secondes dans ton niveau : la musique doit accompagner, pas écraser. Ajuste

### 3. Les SFX sur événements

- [ ] Modifie `Cle.cs` (ou ton équivalent détourné) :

```csharp
public AudioClip sonCollecte; // Glisser le clip .wav dans l'Inspector

private void OnTriggerEnter(Collider other)
{
    if (other.CompareTag("Player"))
    {
        // Source temporaire à la position de la clé :
        // le son survit même si la clé est désactivée juste après
        AudioSource.PlayClipAtPoint(sonCollecte, transform.position);
        porte.RecevoirCle();
        gameObject.SetActive(false);
    }
}
```

- [ ] Même recette dans `Porte.cs` : un `public AudioClip sonOuverture;` et un `PlayClipAtPoint` à l'ouverture
- [ ] ▶️ Teste : **chaque action importante de ton jeu doit s'entendre.** Une action muette est une action que le joueur doute d'avoir réussie
- [ ] Bonus spatial : mets un objet sonore localisé dans ton niveau (une radio, une fontaine) - AudioSource avec **Spatial Blend = 1**, Loop, Play On Awake. Approche-toi, éloigne-toi : le son vit dans l'espace

### 4. Test croisé par les pairs

- [ ] Échange de poste avec un pair. Joue à son jeu **sans qu'il t'explique rien** - et lui de même
- [ ] Note pour l'autre : (1) où tu as hésité ou bloqué, (2) une chose que le son améliore, (3) une suggestion concrète
- [ ] Reprends ton poste, lis tes retours, corrige ce qui se corrige en 10 minutes

### 5. Présentation éclair (30 secondes chacun)

- [ ] Ton titre, ta boucle en une phrase, l'état du chantier. Pas de démo - juste le point, à voix haute, devant tous. (S'exercer à parler de son jeu fait partie du métier.)

### 6. Build et remise

- [ ] Compile un build → **lance-le** → vérifie que le son joue dans le build (pas juste dans l'éditeur!)
- [ ] Commit : `Sonorisation complete` → Push
- [ ] Garde ce build : c'est lui que tu montreras au jalon F2 du [cours 9](../cours09.md)

!!! success "Tu prépares le jalon F2 (cours 9) — formatif, aucune note"
    **Attendu au cours 9 :** une **tranche verticale** — un segment court mais fini, habillé, animé, sonorisé, éclairé. Pas le jeu au complet.

    **Ce que je regarderai :** environnement navigable construit avec les assets Synty · images intégrées et fichiers classés · une ambiance sonore · au moins 2 échantillons déclenchés par des événements · build qui se lance · sources citées au README.

    C'est l'**activité de rétroaction de l'objectif 1** : *intégrer des médias visuels et sonores dans une expérience ludique*. Tu repars avec un avis écrit et des *issues*, **pas avec une note** — l'état du jeu n'est évalué qu'au cours 15.
