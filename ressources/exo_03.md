# Exo 03 - Utilisation du Pattern MVC

Sur base de la demo 04, ajouter les pages suivantes : 
- **/product** \
   _Affiche la liste des produits (nom et prix actuel)_
 
- **/product/42** \
  _Affichage le détail d'un produit (nom, desc, prix et prix soldé si nécessaire)_

- **/product/add** \
  _Formulaire permettant d'ajouter un nouveau produit._

L'objectif de l'exercice est de réaliser les pages. \
Il n'est pas nécessaire d'utiliser la "FakeDB" pour le moment :wink:

## Fonctionnalité du formulaire
- Le nom et le prix d'un produit sont obligatoire.
- Les prix doivent toujours être un nombre positif ou égale à 0.
- Le prix soldé doit toujours être strictement inférieure au prix.
- Si un utilisateur encode des mauvaises valeurs :
  - Afficher des messages avec les erreurs.
  - Conserver les données (L'utilisateur ne souhaite pas devoir tout réencoder)