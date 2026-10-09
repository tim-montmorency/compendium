# Momo - solution

Projet de référence de l'exercice *Momo* (cours 7).

## Médias à ajouter

Les médias optimisés ne sont pas inclus dans ce dossier. Les placer ici avant de lancer le projet :

| Fichier | Source | Traitement |
| --- | --- | --- |
| `src/assets/videos/fond-momo.webm` | `Vidéo pas optimisée 5c43af714.mp4` | ≤ 1920 px de large, sans audio, < 5 Mo, WebM (VP9) |
| `src/assets/videos/fond-momo.mp4` | `Vidéo pas optimisée 5c43af714.mp4` | ≤ 1920 px de large, sans audio, < 5 Mo, MP4 (H.264) |
| `src/assets/images/logo-momo.webp` | `logo.png` | 160 px de large, WebP |

## Lancer

```bash
npm install
npm run dev
```

## Vérifier le build

```bash
npm run build
```

La vidéo et le logo doivent se retrouver dans `dist/assets/`.
