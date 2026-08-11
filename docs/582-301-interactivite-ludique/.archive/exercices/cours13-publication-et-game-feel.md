# Exercice - Publication web et game feel

> Exercice du [cours 13](../cours13.md)

## 1. Le build web (à lancer EN PREMIER)

- [ ] Vérifie le module Web (Unity Hub) et la compression (**Gzip + Decompression Fallback**)
- [ ] **File → Build Profiles → Web → Switch Platform** (⏳ la conversion prend quelques minutes)
- [ ] **Build** dans un dossier `BuildsWeb` hors de `Assets` → ⏳ **lance-le et passe à la partie 2 pendant l'attente**

## 2. Application express (30 min) - l'éclat de collecte

- [ ] Dans ta scène : **GameObject → Effects → Particle System**, nomme-le `EclatCollecte`, place-le comme **enfant de ta clé**
- [ ] Configure : décoche **Looping** · Duration 0.5 · Start Lifetime 0.6 · Start Speed 4 · **Start Color** : la couleur de ta clé
- [ ] **Emission** → Rate over Time = 0 → **Bursts → +** : Count 20, Time 0
- [ ] Décoche **Play On Awake** (sinon il éclate au lancement du jeu)
- [ ] Dans `Cle.cs` :

```csharp
public ParticleSystem eclat; // Glisser EclatCollecte ici

// ...dans OnTriggerEnter, AVANT gameObject.SetActive(false) :
eclat.transform.parent = null; // Détache l'effet : il survit à la clé
eclat.Play();
```

- [ ] ▶️ Ramasse la clé : elle éclate. Ferme les yeux, rouvre-les, compare l'avant/après. **C'est ça, le juice** - 10 minutes de travail, 100 % de satisfaction en plus
- [ ] Bonus rapide : le pitch aléatoire sur tes bruits de pas (le snippet de la capsule)

## 3. Application express 2 (15 min) - le bloom

- [ ] Hierarchy → **Volume → Global Volume** → **New** Profile → **Add Override → Post-processing → Bloom** : Threshold ~0.9, Intensity ~0.6
- [ ] **Add Override → Vignette** : Intensity ~0.25
- [ ] Vérifie **Post Processing** coché sur ta caméra
- [ ] Crée un material **émissif** (Emission cochée, couleur vive, intensité 2+) sur ta clé ou ton objectif → il rayonne
- [ ] Compare avec/sans (coche du Volume) : garde la version subtile

## 4. Mise en ligne du build de test

- [ ] Zippe le **contenu** du dossier de build → sur itch.io : nouvelle page (ou réutilise celle du jeu de session) → mode **HTML** → téléverse → coche « played in browser » → viewport 1280 × 720
- [ ] **Teste dans le navigateur** : chargement, jeu, son. Puis fais-le tester par un voisin depuis SON poste
- [ ] Garde la page en **Draft/Restricted** : elle devient publique à la remise finale

## 5. Production

- [ ] Issues **Must** d'abord - il en reste combien? C'est le moment de le savoir précisément
- [ ] Le juice sur tes autres interactions (porte, victoire, échec) → issues `[COULD]` - le meilleur rapport plaisir/temps de ta fin de session, mais APRÈS les Must
- [ ] Issues Must finies? [**Recettes avancées**](../extra/recettes-avancees.md) : double saut, dash, projectiles, coroutines - et le fondu de scène de la capsule
- [ ] Commit de fin de séance : `Production S13 : premier build web en ligne` → Push
