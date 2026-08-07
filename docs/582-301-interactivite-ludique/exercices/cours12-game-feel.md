# Exercice - Game feel : l'éclat, le bloom et la production

> Exercice du [cours 12](../cours12.md)

## Application express (30 min) - l'éclat de collecte

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

## Application express 2 (15 min) - le bloom

- [ ] Hierarchy → **Volume → Global Volume** → **New** Profile → **Add Override → Post-processing → Bloom** : Threshold ~0.9, Intensity ~0.6
- [ ] **Add Override → Vignette** : Intensity ~0.25
- [ ] Vérifie **Post Processing** coché sur ta caméra
- [ ] Crée un material **émissif** (Emission cochée, couleur vive, intensité 2+) sur ta clé ou ton objectif → il rayonne
- [ ] Compare avec/sans (coche du Volume) : garde la version subtile

## Production

- [ ] Issues **Must** d'abord, comme toujours
- [ ] Le juice sur tes autres interactions (porte, victoire, échec) → issues `[COULD]` - le meilleur rapport plaisir/temps de ta fin de session, mais APRÈS les Must
- [ ] Issues Must finies? [**Recettes avancées**](../extra/recettes-avancees.md) : double saut, dash, projectiles, coroutines - et le fondu de scène de la capsule
- [ ] Commit de fin de séance : `Production S12 : ...` → Push
