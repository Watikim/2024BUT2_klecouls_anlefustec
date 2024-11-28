const express = require("express");
const router = express.Router();
const md5 = require('md5');
const addProduct = require("../models/produits.js");

router.post("/ajt", (req, res) => {
  let nom_article = req.body.nom;
  let type = req.body.type;
  let description = req.body.description;
  let marque = req.body.marque;
  let model = req.body.model;
  let prix = req.body.prix_location;
  let image = req.body.image;

  console.log("Données du formulaire reçues :", {
    nom_article,
    type,
    description,
    marque,
    model,
    prix,
    image
  });

  addProduct(nom_article, type, description, marque, model, prix, image)
    .then(() => {
      console.log("Produit ajouté avec succès");
      res.redirect("/");
    })
    .catch((err) => {
      console.error("Erreur lors de l'ajout du produit :", err);
      res.status(500).send("Erreur lors de l'ajout du produit");
    });
});

module.exports = router;
