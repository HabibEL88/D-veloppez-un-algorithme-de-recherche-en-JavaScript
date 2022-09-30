# Découpage du projet

## Cartes

Afficher une carte (Card) de recette

[X] 1/ Développer le composant UI de la recette avec toutes les datas

[X] 2/ Afficher toutes les recette dans une grille HTML

## Filtres

Afficher les différents filtres (rouge/bleu/vert)

[x] Développer un composant "filtre" avec un affichage par défaut "toggle"

[x] Afficher les trois filtres, l'un à côté de l'autre, dans la page principale

\*\* // => Pouvoir cliquer sur le filtre, pour afficher la totalité des données

\*\* // => Afficher toutes les valeurs possibles de ce filtre

\*\* Afficher des filtres sélectionnés entre la barre de recherche et les filtres

\*\*\* Bonus => Pour un filtre fixe ("Coco"), afficher ce filtre dans l'interface, en respectant la maquette

\*\*\* Afficher le filtre en fonction de son type (couleur)

\*\*\* Prendre en compte une variable pour afficher ou non ce filtre

\*\*\* En cliquant sur une valeur possible du filtre, ajouter ce filtre aux filtres sélectionnés

\*\* Ajouter un champs de recherche dans le filtre

\*\* Filtrer les valeurs possibles du filtre dans l'interface, en fonction du texte rentré

\*\* Factoriser pour s'assurer que je ne me répètre pas dans le code

## Algorithmes de recherche

\*\* 3/ Barre de recherche, qui répond à du texte rentré dedans => console.debug()

\*\* 4/ En utilisant un premier algorithme de recherche, je cache ou j'affiche la recette si un texte donné ("Coco") est compris dans le titre, les ingrédients ou la description

\*\* 5/ A chaque fois que je modifie le texte rentré dans la barre de recherche, je l'utilise pour filtrer mes recettes avec l'algo développé dans l'étape précédente

\*\* Bonus => Pour mon premier algorithme, j'utilise jsbench ou un timer (Date) pour afficher le temps pris par l'algorithme de recherche

```
var timerStart = new Date().getTime()
var timerStop = new Date().getTime()
console.debug(`search Duration: $(timerStop-timerStart)ms`)
```

\*\* Pour ce même algorithme, je filtre sur une valeur fixe d'ingrédient, d'outils, ...

\*\* Quand je sélectionne un filtre, je relance l'algorithme de recherche, en me basant sur la query et les filtres sélectionnés

\*\* Je développe un 2e algorithme de recherche, en utilisant plutôt les fonctions sur Array (.map, .reduce, .filter, ...)
