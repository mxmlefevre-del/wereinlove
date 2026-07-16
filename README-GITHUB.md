# WereInLove - version GitHub

Cette version est prête pour GitHub Pages.

La vidéo est incluse à la racine pour éviter d'alourdir le dossier assets :

- `hero-video.mp4` à côté de `index.html`

Gardez `hero-video.mp4` à la racine : la page lira cette version en priorité. Le code garde aussi un chemin de secours vers `wereinlove-assets/hero-video.mp4`, mais il n'est pas nécessaire de mettre la vidéo dans ce dossier.

## Important : les photos

Si des blocs apparaissent beiges ou vides en ligne, c'est que le dossier `wereinlove-assets` n'a pas été envoyé au même niveau que `index.html`.

La structure en ligne doit être exactement :

```text
index.html
app.html
compatibilite.html
...
wereinlove-assets/
  family-field.jpg
  friends-sunset.jpg
  couple-chair.jpg
  couple-evening.jpg
  couple-car.jpg
  family-walk.jpg
  ...
```

Après upload, cette adresse doit afficher une image :

```text
https://wereinlove.app/wereinlove-assets/family-field.jpg
```

Si elle affiche une erreur 404, il manque le dossier `wereinlove-assets` sur GitHub ou il a été placé dans un sous-dossier.

## Vidéo

Après upload, cette adresse doit télécharger ou lire la vidéo :

```text
https://wereinlove.app/hero-video.mp4
```

Ou, si vous avez envoyé tout le dossier assets :

```text
https://wereinlove.app/wereinlove-assets/hero-video.mp4
```

Si GitHub refuse un jour le fichier, vous pourrez héberger la vidéo sur Cloudinary ou Bunny.net et remplacer la source dans `index.html`.
