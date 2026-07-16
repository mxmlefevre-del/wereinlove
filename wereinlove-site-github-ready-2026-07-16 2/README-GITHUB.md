# WereInLove - version GitHub

Cette version est prête pour GitHub Pages.

La vidéo `wereinlove-assets/hero-video.mp4` a été retirée pour éviter les limites d'upload GitHub. La page affiche l'image de couverture à la place.

Pour remettre une vidéo en ligne :

1. Hébergez la vidéo sur Cloudinary, Bunny.net ou un autre hébergeur.
2. Dans `index.html`, retrouvez le bloc :

```html
<video class="hero-video" autoplay loop muted playsinline poster="wereinlove-assets/family-field.jpg">
  <!-- Version GitHub : la vidéo lourde est retirée. Ajoutez ici une URL Cloudinary/Bunny si besoin. -->
</video>
```

3. Remplacez le commentaire par :

```html
<source src="https://votre-url-video.mp4" type="video/mp4">
```

