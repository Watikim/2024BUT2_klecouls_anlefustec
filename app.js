const express = require('express');
const app = express();
const session = require('express-session');
const moment = require('moment');
const controllerUtilisateur = require('./controllers/utilisateurs.js')
const utilisateurs = require("./models/utilisateurs.js")
const prod = require("./models/produits.js")



app.set('view engine', 'ejs');


app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: 'oui',
    resave: false,
    saveUninitialized: false
}));

app.use(function(req,res,next){
    if(req.session.userId){
        res.locals.isAuth = true;
        res.locals.id = req.session.userId;
        res.locals.prenom = req.session.prenom;
        res.locals.Role = req.session.role;
        res.locals.nom = req.session.nom;
        res.locals.ddn = req.session.ddn;
        res.locals.login = req.session.login;
        res.locals.email = req.session.email
    }
    else{
        res.locals.isAuth = false;
        res.locals.id = null;
        res.locals.prenom = "";
        res.locals.Role = "";
        res.locals.nom = "";
        res.locals.ddn="";
        res.locals.login="";
        res.locals.email=""



    }
    next();
    
})


app.use("/utilisateurs", controllerUtilisateur)

//extraction des données du formulaire

app.use(express.urlencoded({extended : false}))


app.get('/catalogue', async (req, res) => {
    const produits = await prod.getAllProducts()
    console.log(produits);
    res.render("catalogue", { produits });
})
app.get('/liste', (req, res) => {
    res.render("liste");
})
app.get('/ajoutproduit', (req, res) => {
    res.render("ajoutproduit");
})
app.get('/calendrier', (req, res) => {
    res.render("agenda");
})

app.get('/produit/:id', async function(req, res) {
    let Id = req.params.id;
    let resultat = await prod.getProductById(Id);
    console.log(resultat);
    res.render('produit', { resultat });
});


app.get('/', async function (req, res) {
    try {
        const user = await utilisateurs.getUserById(1);
        console.log(user)
        res.render('index', { user });
    } catch (err) {
        console.log(err);
        res.status(500).send('Erreur lors de la récupération des données');
    }
});






app.use((req, res) => {
    res.status(404).render("404");
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

