const express = require("express");
const router = express.Router();
const md5 = require("md5");
const database = require("../models/database.js");

// router.get("/inscription", function (req, res) {
//   res.render("inscription");
// });

// router.post("/nouvutilisateur", (req, res) => {

//   let nouv_login = req.body.nouv_login;
//   let nouv_password = req.body.nouv_password;
//   let nouv_prenom = req.body.nouv_prenom;
//   let nouv_nom = req.body.nouv_nom;
//   let nouv_ddn = new Date(req.body.nouv_ddn);
//   let nouv_email = req.body.nouv_email;




//   nouv_password = md5(nouv_password);

//   function getAge(dateNaissance) {
//     let diff = Date.now() - dateNaissance.getTime();
//     let ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }

//   if (getAge(nouv_ddn) > 18) {
//     addUtilisateur(nouv_login, nouv_password, nouv_nom, nouv_prenom, nouv_ddn, nouv_email)
//       .then(() => {
//         console.log("Utilisateur ajouté avec succès");
//         res.redirect("/");
//       }).catch((err) => {
//         console.error("Erreur lors de l'ajout de l'utilisateur :", err);
//         res.status(500).send("Erreur lors de l'ajout de l'utilisateur");
//       });
//   }
//   else {
//     console.log("L'utilisateur doit avoir plus de 18 ans.");
//     res.status(400).send("L'utilisateur doit avoir plus de 18 ans.");
//   }

//   req.session.isAuth = true;
//   req.session.user = {
//     id: result.insertId,
//     login: login,
//     nom: nom,
//     prenom: prenom,
//     role: "client"
//   };

//   res.redirect("/");
// });

module.exports = router;
