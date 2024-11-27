const express = require("express");
const router = express.Router();
const md5 = require('md5');
const { addProduct } = require("../models/produit.js");


router.post("/ajt", (req, res) => {

  let nom_article = req.body.nom_article;
  let type = req.body.type;
  let description = req.body.description;
  let marque = req.body.marque;
  let model = req.body.model;
  let prix = req.body.prix;
  let image = req.body.image;

  addProduct(nom_article, type, description, marque, model, prix, image)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur lors de l'ajout du produit");
    });
});

module.exports = router;
