const express = require('express');
const app = express();

const utilisateurs = require("./models/utilisateurs.js")


app.set('view engine', 'ejs');

app.use(express.static('public'));


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