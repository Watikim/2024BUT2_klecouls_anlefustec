const express = require("express");
const router = express.Router();
const md5 = require("md5");
const database = require("../models/database.js");

router.get("/", function (req, res) {
  res.render("inscription");
});

router.post("/", function (req, res) {
  const login = req.body.login;
  const password = req.body.password;
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const ddn = req.body.ddn;
  const email = req.body.email;

  const hashPass = md5(password);

  const sql = "INSERT INTO utilisateurs (login, password, nom, prenom, ddn, email, type_utilisateur) VALUES (?, ?, ?, ?, ?, ?, 'client')";

  database.query(sql, [login, hashPass, nom, prenom, ddn, email], function (err, result) {
    if (err) {
      console.error(err);
      res.status(500).send("Erreur lors de l'inscription");
      return;
    }

    req.session.isAuth = true;
    req.session.user = {
      id: result.insertId,
      login: login,
      nom: nom,
      prenom: prenom,
      role: "client"
    };

    res.redirect("/");
  });
});

module.exports = router;
