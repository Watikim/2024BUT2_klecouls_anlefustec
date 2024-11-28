const express = require('express');
const app = express();
const session = require('express-session');
const controllerUtilisateur = require('./controllers/utilisateurs.js');
const utilisateurs = require("./models/utilisateurs.js");
const prod = require("./models/produits.js");
const inscriptionRouter = require("./controllers/inscription.js");
const ajouterRouter = require("./controllers/inscription.js");
const { addProduct } = require("./models/produits.js"); // Correction de l'importation


app.use("/inscription", inscriptionRouter);
app.use("/ajouter", ajouterRouter);


app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: 'oui',
    resave: false,
    saveUninitialized: false
}));

app.use("/utilisateurs", controllerUtilisateur);

app.use(function(req, res, next) {
    if (req.session.userId) {
        res.locals.isAuth = true;
        res.locals.id = req.session.userId;
        res.locals.prenom = req.session.prenom;
        res.locals.Role = req.session.role;
        res.locals.nom = req.session.nom;
        res.locals.ddn = req.session.ddn;
        res.locals.login = req.session.login;
        res.locals.email = req.session.email;
    } else {
        res.locals.isAuth = false;
        res.locals.id = null;
        res.locals.prenom = "";
        res.locals.Role = "";
        res.locals.nom = "";
        res.locals.ddn = "";
        res.locals.login = "";
        res.locals.email = "";
    }
    next();
});

app.post("/ajt", (req, res) => {
    let nom_article = req.body.nom_article;
    let type = req.body.type;
    let description = req.body.description;
    let marque = req.body.marque;
    let model = req.body.model;
    let prix = req.body.prix;
    let image = req.body.image;



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




app.get('/catalogue', async (req, res) => {
    const produits = await prod.getAllProducts();
    console.log(produits);
    res.render("catalogue", { produits });
});

app.get('/', async (req, res) => {
    try {
        const produits = await prod.getAllProducts();
        console.log(produits);
        res.render('index', { produits });
    } catch (err) {
        console.log(err);
        res.status(500).send('Erreur lors de la récupération des données');
    }
});

app.get('/liste', (req, res) => {
    res.render("liste");
});

app.get('/ajoutproduit', (req, res) => {
    res.render("ajoutproduit");
});

app.get('/calendrier/:id', async (req, res) => {
    const productId = req.params.id;

    try {
        const produit = await prod.getProductWithDates(productId);

        if (!produit) {
            return res.status(404).send("Produit introuvable.");
        }

        // Convertit les dates SQL en ISO 8601
        produit.date_debut_loue = new Date(produit.date_debut_loue).toISOString().split("T")[0];
        produit.date_fin_loue = new Date(produit.date_fin_loue).toISOString().split("T")[0];

        res.render("agenda", {
            produit,
        });
    } catch (err) {
        console.error("Erreur :", err);
        res.status(500).send("Erreur de récupération de données.");
    }
});

app.get('/produit/:id', async function(req, res) {
    let Id = req.params.id;
    let resultat = await prod.getProductById(Id);
    console.log(resultat);
    res.render('produit', { resultat });
});




app.use((req, res) => {
    res.status(404).render("404");
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
