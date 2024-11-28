const express = require("express");
const router = express.Router();
const md5 = require("md5");
const database = require("../models/database.js");

router.get("/", (req, res) => {
  res.render("inscription");
});


router.post("/", (req, res) => {
  const { login, password, nom, prenom, ddn, email } = req.body;

  if (!login || !password || !nom || !prenom || !ddn || !email) {
    return res.status(400).send("Tous les champs doivent être remplis !");
  }

  const hashPass = md5(password);

  const sql = `
    INSERT INTO utilisateurs (login, password, nom, prenom, ddn, email, type_utilisateur)
    VALUES (?, ?, ?, ?, ?, ?, 'client')
  `;

  database.query(
    sql,
    [login, hashPass, nom, prenom, ddn, email],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Erreur lors de l'inscription");
      }

      req.session.isAuth = true;
      req.session.user = {
        id: result.insertId, 
        login: login,
        nom: nom,
        prenom: prenom,
        role: "client",
      };
      
      res.redirect("/");
    }
  );
});

module.exports = router;
