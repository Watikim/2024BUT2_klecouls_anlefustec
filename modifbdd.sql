alter table produit 
Add nom VARCHAR(255);

TRUNCATE TABLE produit;

INSERT INTO produit (nom, type, description, marque, modele, prix_location, etat) 
VALUES 
('Fury Run Master', 'tapis de course', 'Un tapis de course conçu pour les athlètes déterminés. Il offre une stabilité incomparable et des performances de haut niveau.', 'TechRunner', 'FXR100', 29.99, 'disponible'),
('Cyclo Thunder X', 'velo', 'Un vélo de course ultra-léger, conçu pour les routes les plus extrêmes. Parfait pour les cyclistes à la recherche de vitesse.', 'SpeedTech', 'CTX500', 19.99, 'loué'),
('Titan Row Beast', 'rameur', 'Ramez comme un champion avec ce rameur robuste. Conçu pour maximiser l\'efficacité de vos entraînements en plein effort.', 'PowerRow', 'TRB3000', 24.99, 'disponible'),
('Velocity Sprint Pro', 'tapis de course', 'Poussez vos limites avec ce tapis qui simule des courses sur de multiples terrains. Parfait pour des entraînements intenses.', 'HyperFit', 'VSP450', 34.99, 'loué'),
('Endurance Ride X', 'velo', 'Vélo tout terrain, conçu pour une conduite confortable et rapide sur tous types de surfaces.', 'SpeedTech', 'ERX750', 22.99, 'disponible'),
('Aqua Storm Row', 'rameur', 'Rameur hybride avec résistance hydraulique pour des séances d\'entraînement en eau, puissant et silencieux.', 'HydroFit', 'ASR200', 27.99, 'loué'),
('Ultimate Speedster', 'tapis de course', 'Tapis de course dernier cri, idéal pour les entraînements intensifs avec une surface de course extra large.', 'TechRunner', 'US3500', 32.50, 'disponible'),
('Thunder Pedal Racer', 'velo', 'Conçu pour les cyclistes professionnels, ce vélo allie confort et performance pour une conduite sans faille.', 'SpeedTech', 'TPR600', 25.00, 'loué'),
('Rower Xtreme Elite', 'rameur', 'Le rameur ultime pour les athlètes exigeants. Résistance réglable et design épuré pour des entraînements efficaces.', 'PowerRow', 'RXE500', 21.99, 'disponible'),
('Blaze Trail Runner', 'tapis de course', 'Révélez votre potentiel avec ce tapis de course conçu pour imiter des parcours extérieurs, parfait pour les coureurs avides.', 'HyperFit', 'BTR800', 28.00, 'loué'),
('Cyclone Aero Sprint', 'velo', 'Vélo de compétition, conçu pour la vitesse pure avec un cadre aérodynamique ultra-léger.', 'SpeedTech', 'CAS3000', 35.99, 'disponible'),
('Power Row Titan', 'rameur', 'Un rameur robuste pour des entraînements en force. La résistance hydraulique assure des sessions puissantes et dynamiques.', 'HydroFit', 'PRT1000', 30.00, 'loué'),
('RapidRunner Pro', 'tapis de course', 'Tapis de course de haute performance pour des utilisateurs exigeants. Il offre une traction exceptionnelle et une surface spacieuse.', 'TechRunner', 'RRP900', 40.00, 'disponible'),
('Fusion Ride Racer', 'velo', 'Le vélo de route qui fusionne performance et confort pour des courses longues et rapides sur tout type de terrain.', 'SpeedTech', 'FRR750', 26.50, 'loué'),
('Maxx Row Force', 'rameur', 'Un rameur pour des entraînements de force pure. Idéal pour les athlètes en quête de performance et d\'endurance.', 'PowerRow', 'MRF800', 22.99, 'disponible'),
('Velocity Rush Sprint', 'tapis de course', 'Tapis de course rapide, idéal pour les entraînements quotidiens avec des options de vitesse et d\'inclinaison automatiques.', 'HyperFit', 'VRS200', 33.99, 'loué'),
('Speedster Ride Pro', 'velo', 'Un vélo haut de gamme pour les courses intenses. Ses composants de qualité assurent des performances inégalées.', 'TechRunner', 'SRP1200', 29.99, 'disponible'),
('Titan Row Master', 'rameur', 'Rameur de haute performance avec résistance magnétique. Parfait pour des séances d\'entraînement intenses et régulières.', 'PowerRow', 'TRM600', 23.99, 'loué'),
('Rapid Sprint Pro', 'tapis de course', 'Tapis de course haut de gamme conçu pour des entraînements extrêmes. Il s\'adapte à toutes vos demandes d\'intensité.', 'TechRunner', 'RSP400', 31.00, 'disponible'),
('Endurance Speed X', 'velo', 'Vélo tout terrain conçu pour l\'endurance et la vitesse. Il est parfait pour les cyclistes qui cherchent à repousser leurs limites.', 'SpeedTech', 'ESX600', 21.50, 'loué'),
('Hydro Power Row', 'rameur', 'Un rameur spécialement conçu pour maximiser la performance avec une résistance de l\'eau pour des entraînements fluides.', 'HydroFit', 'HPR1000', 25.00, 'disponible');

alter table produit 
Add image VARCHAR(255);