const express = require('express');
const app = express();
const session = require('express-session');
const md5 = require('md5');

const utilisateurs = require("./models/utilisateurs.js")


app.set('view engine', 'ejs');


app.use(express.static('public'));

app.use(express.urlencoded({extended: false }));

app.use(session({
    secret:'oui',
    resave: false,
    saveUninitialized: false
}));

app.use(function(req,res,next){
    if(req.session.userId){
        res.locals.isAuth = true;
        res.locals.id = req.session.userId;
        res.locals.prenom = req.session.prenom
    }
    else{
        res.locals.isAuth = false;
        res.locals.id = null;
        res.locals.prenom = ""

    }
    next();
    
})

app.get('/catalogue', (req, res) => {
    res.render("catalogue");
})
app.get('/produit', (req, res) => {
    res.render("produit");
})
app.get('/connexion', (req, res) => {
    res.render("connexion", {error: null});
})
app.post('/connexion', async function (req, res){
    const login = req.body.login;
    let mdp = req.body.password;

    mdp = md5(mdp);

    const user = await utilisateurs.checklogin(login);
    if (user && user.password == mdp){
        req.session.prenom = user.prenom;
        req.session.userId = user.id;
        req.session.role = user.type_utilsateur;
        return res.redirect("/");
    }
    else{
        res.render("connexion", {error: "Mauvais login ou mot de passe"});
    }


})
app.get('/inscription', (req, res) => {
    res.render("inscription");
})

app.get('/', async function (req, res) {
    try {
        const user = await utilisateurs.getUserById(1);
        console.log(user)
        res.render('index',{ user});
    } catch (err) {
        console.log(err);
        res.status(500).sen('Erreur lors de la récupération des données');
    }
});




app.use((req, res) => {
    res.status(404).render("404");
    });

app.listen(3000, () => {
    console.log('Server running on port 3000');
    });

