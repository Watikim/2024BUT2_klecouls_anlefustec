const express = require('express');
const app = express();

const utilisateurs = require("./models/utilisateurs.js")


app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render("index");
})
app.get('/catalogue', (req, res) => {
    res.render("catalogue");
})
app.get('/produit', (req, res) => {
    res.render("produit");
})
app.get('/connexion', (req, res) => {
    res.render("connexion");
})
app.get('/inscription', (req, res) => {
    res.render("inscription");
})

app.get('/', async function (req, res) {
    try {
        const user = await utilisateurs.getUserById(1);
        console.log(user)
        res.render('index', user);
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