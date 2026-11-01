# Compte-Bonbons 🍬

Compte ton butin d'Halloween avec ton enfant et découvre vos statistiques : podium hanté, chaudron de sorcière, familles de bonbons, et la comparaison d'une année à l'autre.

## Comment ça marche

- On ouvre le lien, on l'ajoute à l'écran d'accueil du téléphone.
- On entre le prénom de l'enfant, puis on compte ensemble avec les boutons **+** (une liste de bonbons est déjà prête, on peut en ajouter).
- **Voir mon butin hanté** affiche le tableau de bord de l'enfant.
- Plusieurs enfants par téléphone, et une nouvelle année se compare automatiquement aux précédentes.
- **Voir l'exemple de Léo** montre un butin déjà rempli.

## Vie privée

Tout reste dans le téléphone (stockage local du navigateur) : pas de compte, pas de serveur, aucune donnée envoyée.
Le menu ⋮ permet de **sauvegarder** les données dans un fichier et de les **restaurer** sur un autre téléphone.

Astuce : ajoute l'app à l'écran d'accueil. Sur iPhone, un site visité seulement dans Safari peut voir ses données effacées après une longue période sans visite.

## Les fichiers

- `index.html` : toute l'app (graphiques avec [d3](https://d3js.org), polices Creepster, Luckiest Guy et Fredoka de Google Fonts).
- `version.json` : la version publiée, pour le bouton « Mettre à jour ».
- `icon-*.png`, `favicon-*.png`, `apple-touch-icon.png`, `manifest.webmanifest` : l'icône de l'app.

## Publier une mise à jour

À chaque changement de `index.html`, change la version au même endroit dans deux fichiers :
`APP_VERSION` dans `index.html` et `version` dans `version.json`. Les téléphones qui ont l'app verront apparaître le bouton « Mettre à jour ».
