const database = require("./database.js");

async function getAllProducts() {

    sql = "SELECT * FROM produit";
    
    return new Promise((resolve, reject) => {
        database.query(sql, (err, results) => {

            if (err) {
                return reject(err);
            }
            resolve(results);

        });
    });
}

async function getProductById(id) {

    sql = "SELECT * FROM produit WHERE id=?";
    
    return new Promise((resolve, reject) => {
        database.query(sql, id, (err, results) => {

            if (err) {
                return reject(err);
            }
            resolve(results[0]);

        });
    });
}


// récupère infos dateloué 
async function getProductWithDates(id) {
    const sql = `
        SELECT id, nom, type, description, marque, modele, prix_location, etat, date_debut_loue, date_fin_loue 
        FROM produit 
        WHERE id = ?
    `;

    return new Promise((resolve, reject) => {
        database.query(sql, id, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results[0]);
        });
    });
}


module.exports = { getAllProducts, getProductById, getProductWithDates };

