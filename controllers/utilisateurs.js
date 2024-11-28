const express = require("express");
const router = express.Router();
const md5 = require('md5');
const utilisateurs = require("../models/utilisateurs.js")



router.get('/connexion', (req, res) => {
    res.render("connexion", {error: null});
})
router.post('/connexion', async function (req, res){
    const login = req.body.login;
    let mdp = req.body.password;

    mdp = md5(mdp);

    const user = await utilisateurs.checklogin(login);
    if (user && user.password == mdp){
        req.session.prenom = user.prenom;
        req.session.userId = user.id;
        req.session.role = user.type_utilisateur;
        req.session.nom = user.nom;
        req.session.ddn = user.ddn;
        req.session.login = user.login;
        req.session.password = user.password;
        req.session.email = user.email;
        return res.redirect("/");
    }
    else{
        res.render("connexion", {error: "Mauvais login ou mot de passe"});
    }


})





router.get('/compte', (req, res) => {
    res.render("compte");
})

module.exports = router;
