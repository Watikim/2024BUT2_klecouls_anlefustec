# 2024BUT2_klecouls_anlefustec_hcossec


### LES FONCTIONNALITÉS TERMINÉES

- **Création et ajout d’un produit**  
  *En tant qu’agent, je dois pouvoir créer et ajouter un nouveau produit.*

- **Création de compte pour un agent**  
  *En tant qu’administrateur, je dois pouvoir créer un compte pour un agent, cette création est indépendante de l'inscription d’un client.*

- **Inscription et création de compte pour un client**  
  *En tant que client, je dois pouvoir m’inscrire et me créer un compte sur le site. Un utilisateur doit être majeur pour s'inscrire.*

- **Connexion au compte client**  
  *En tant que client, je dois pouvoir me connecter sur mon compte.*

--------------------------------------------------------------------------------------

### LES FONCTIONNALITÉS QUI NE SONT PAS TERMINÉES

- **Modification des informations du compte client**  
  *En tant que client, je dois pouvoir modifier mon nom, prénom, date de naissance, mot de passe et adresse mail, mais pas mon login, il est définitif.*

- **Location d’un produit**  
  *En tant que client, je dois pouvoir louer un produit. Le produit doit être disponible aux dates demandées. Un prix prévisionnel doit être affiché.*

--------------------------------------------------------------------------------------

### LES FONCTIONNALITÉ QUI N'ONT PAS ÉTÉ FAITES

- **Suppression d’un produit**  
  *En tant qu'agent, je dois pouvoir supprimer un produit si et seulement s'il n'est pas en location.*

- **Finalisation d’une location**  
  *En tant qu’agent, je dois pouvoir finaliser une location. C'est-à-dire valider que le client a bien rendu le matériel et payé les éventuels surcoûts.*

- **Suppression du compte client**  
  *En tant que client, je dois pouvoir supprimer mon compte. Si c'est un client, il ne peut supprimer son compte que s'il n'a pas de réservation ou de location en cours. Si c'est un agent, il ne peut pas supprimer son compte.*

- **Annulation d’une location**  
  *En tant que client, je dois pouvoir annuler une location qui n'a pas encore démarré. C'est-à-dire que la date de début n'est pas dépassée.*

--------------------------------------------------------------------------------------

### LE TRAVAIL DE CHACUN

#### Anaïs

##### Fonctionnalités assignées

- La moitié des fichiers HTML / CSS
- En tant que client, je dois pouvoir me connecter sur mon compte.
- En tant que client, je dois pouvoir supprimer mon compte. Si c'est un client, il ne peut supprimer son compte que s'il n'a pas de réservation ou de location en cours. Si c'est un agent, il ne peut pas supprimer son compte.
- En tant que client, je dois pouvoir modifier mon nom, prénom, date de naissance, mot de passe et adresse mail, mais pas mon login, il est définitif.
- Les fonctions de récupération des informations des produits
- 

#### Kimberley

#### Hugo

Fonctionnalitée calendrier en entier (plage en rouge / Sélection des plages / Prix prévisionnel )  
Fichier : agenda.ejs / produit.css / produit.js -> fonction getProductWithDates
app.js -> ligne 222 à 243.



##### Fonctionnalitées

##### Difficultés rencontrées 😡

- Difficultés dans la récupération des données
- Difficultés dans la conversion des dates
- Difficultés dans la création du formulaire et de pouvoir modifier les données dans la base de données (*ex : changer le nom...*)
- Difficultés pour récupéré les ID des produits dans l'URL
- 'IsAuth is not defined' donc impossible d'accéder à certaines pages

##### Difficultées rencontrées

- Difficultée à mettre les éléments dans la base de donnée
- Difficultée avec les controleurs : le codde fonctionne dans app.js, mais pas dans le controleur 
- "is Auth is not defined" donc pas possible d'acceder à certaine pages, il est impossible de voir si la modification du compte fonctionne

##### Solutions

- Recherches sur internet
- Aide du groupe
- Aide du prof 


##### Solutions 

- Documentation sur internet, forums, cours sur moodle
- Aide du professeur 😜
- Aide du groupe


--------------------------------------------------------------------------------------

### NOS EXTENSIONS ET MODULES

EXPRESS
MD5

--------------------------------------------------------------------------------------

### INFORMATIONS COMPLÉMENTAIRES TRES IMPORTANTES

Il faut modifier la base de données : regarder dans le ficher 'modifbdd.sql' et executer les requêtes.



### A ajouter en bdd

/*TRUNCATE TABLE produit;    Pour remettre les ID à 0 - ignorer */



INSERT INTO produit (id, nom, type, description, marque, modele, prix_location, etat) 
VALUES 
(1, 'Fury Run Master', 'tapis de course', 'Un tapis de course conçu pour les athlètes déterminés. Il offre une stabilité incomparable et des performances de haut niveau.', 'TechRunner', 'FXR100', 29.99, 'disponible'),
(2, 'Cyclo Thunder X', 'velo', 'Un vélo de course ultra-léger, conçu pour les routes les plus extrêmes. Parfait pour les cyclistes à la recherche de vitesse.', 'SpeedTech', 'CTX500', 19.99, 'loué'),
(3, 'Titan Row Beast', 'rameur', 'Ramez comme un champion avec ce rameur robuste. Conçu pour maximiser l\'efficacité de vos entraînements en plein effort.', 'PowerRow', 'TRB3000', 24.99, 'disponible'),
(4, 'Velocity Sprint Pro', 'tapis de course', 'Poussez vos limites avec ce tapis qui simule des courses sur de multiples terrains. Parfait pour des entraînements intenses.', 'HyperFit', 'VSP450', 34.99, 'loué'),
(5, 'Endurance Ride X', 'velo', 'Vélo tout terrain, conçu pour une conduite confortable et rapide sur tous types de surfaces.', 'SpeedTech', 'ERX750', 22.99, 'disponible'),
(6, 'Aqua Storm Row', 'rameur', 'Rameur hybride avec résistance hydraulique pour des séances d\'entraînement en eau, puissant et silencieux.', 'HydroFit', 'ASR200', 27.99, 'loué'),
(7, 'Ultimate Speedster', 'tapis de course', 'Tapis de course dernier cri, idéal pour les entraînements intensifs avec une surface de course extra large.', 'TechRunner', 'US3500', 32.50, 'disponible'),
(8, 'Thunder Pedal Racer', 'velo', 'Conçu pour les cyclistes professionnels, ce vélo allie confort et performance pour une conduite sans faille.', 'SpeedTech', 'TPR600', 25.00, 'loué'),
(9, 'Rower Xtreme Elite', 'rameur', 'Le rameur ultime pour les athlètes exigeants. Résistance réglable et design épuré pour des entraînements efficaces.', 'PowerRow', 'RXE500', 21.99, 'disponible'),
(10, 'Blaze Trail Runner', 'tapis de course', 'Révélez votre potentiel avec ce tapis de course conçu pour imiter des parcours extérieurs, parfait pour les coureurs avides.', 'HyperFit', 'BTR800', 28.00, 'loué'),
(11, 'Cyclone Aero Sprint', 'velo', 'Vélo de compétition, conçu pour la vitesse pure avec un cadre aérodynamique ultra-léger.', 'SpeedTech', 'CAS3000', 35.99, 'disponible'),
(12,'Power Row Titan', 'rameur', 'Un rameur robuste pour des entraînements en force. La résistance hydraulique assure des sessions puissantes et dynamiques.', 'HydroFit', 'PRT1000', 30.00, 'loué'),
(13, 'RapidRunner Pro', 'tapis de course', 'Tapis de course de haute performance pour des utilisateurs exigeants. Il offre une traction exceptionnelle et une surface spacieuse.', 'TechRunner', 'RRP900', 40.00, 'disponible'),
(14, 'Fusion Ride Racer', 'velo', 'Le vélo de route qui fusionne performance et confort pour des courses longues et rapides sur tout type de terrain.', 'SpeedTech', 'FRR750', 26.50, 'loué'),
(15, 'Maxx Row Force', 'rameur', 'Un rameur pour des entraînements de force pure. Idéal pour les athlètes en quête de performance et d\'endurance.', 'PowerRow', 'MRF800', 22.99, 'disponible'),
(16, 'Velocity Rush Sprint', 'tapis de course', 'Tapis de course rapide, idéal pour les entraînements quotidiens avec des options de vitesse et d\'inclinaison automatiques.', 'HyperFit', 'VRS200', 33.99, 'loué'),
(17, 'Speedster Ride Pro', 'velo', 'Un vélo haut de gamme pour les courses intenses. Ses composants de qualité assurent des performances inégalées.', 'TechRunner', 'SRP1200', 29.99, 'disponible'),
(18, 'Titan Row Master', 'rameur', 'Rameur de haute performance avec résistance magnétique. Parfait pour des séances d\'entraînement intenses et régulières.', 'PowerRow', 'TRM600', 23.99, 'loué'),
(19, 'Rapid Sprint Pro', 'tapis de course', 'Tapis de course haut de gamme conçu pour des entraînements extrêmes. Il s\'adapte à toutes vos demandes d\'intensité.', 'TechRunner', 'RSP400', 31.00, 'disponible'),
(20, 'Endurance Speed X', 'velo', 'Vélo tout terrain conçu pour l\'endurance et la vitesse. Il est parfait pour les cyclistes qui cherchent à repousser leurs limites.', 'SpeedTech', 'ESX600', 21.50, 'loué'),
(21,'Hydro Power Row', 'rameur', 'Un rameur spécialement conçu pour maximiser la performance avec une résistance de l\'eau pour des entraînements fluides.', 'HydroFit', 'HPR1000', 25.00, 'disponible');



alter table produit 
Add image VARCHAR(255);


ALTER TABLE produit 
ADD date_debut_loue DATE NULL,
ADD date_fin_loue DATE NULL;


UPDATE produit
SET 
    date_debut_loue = DATE_ADD('2024-11-01', INTERVAL FLOOR(RAND() * 92) DAY),
    date_fin_loue = DATE_ADD(date_debut_loue, INTERVAL FLOOR(RAND() * 15 + 1) DAY)
WHERE etat = 'loué';









