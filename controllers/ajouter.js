const express = require("express");
const router = express.Router();
const md5 = require('md5');
const utilisateurs = require("../models/utilisateurs.js")

router.post("/ajt", (req, res)=>{

  let nom_article = req.body.nom_article
  let type = req.body.type
  let description = req.body.description
  let marque = req.body.marque
  let model = req.body.model
  let prix = req.body.prix
  let image = req.body.image

    
})

module.exports = router;