# Exo 04 - Mise en place d'un session

Sur base de l'exo 03, ajouter la gestion de la session \

Ajouter les pages suivants: 
- **/auth/login**
- **/auth/register**
- **/auth/logout**

Ajouter le modele (toujours en FakeDB) pour stocker les données de l'utilisateur :
- Username
- Email
- Password
- Prenom _(Optionnel)_
- Nom _(Optionnel)_

## Fonctionnalité à ajouter 
- Connexion et création de compte utilisateur
- La page detail devient accessible uniquement si on connecté
- Le formlaire d'ajouter de produit necessite d'être connecté également

## Fonctionnalité bonus
- Ajouter un role aux utilisateur
  - Les roles disponible sont "Admin" et "Member"
  - Un utilisateur créer depuis la page web est toujours un "Member"
  - La page d'ajout de produit est reservé au role "Admin"

- Ajout de commentaire de produit
  - Un utilisateur a la possibilité d'ajouter un commentaire sur les produits
  - La page produit affiche tout les commentaires de celui-ci.