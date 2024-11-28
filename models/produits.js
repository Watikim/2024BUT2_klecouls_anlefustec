const database = require("./database.js");

async function getAllProducts() {
    const sql = "SELECT * FROM produit";
    
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
    const sql = "SELECT * FROM produit WHERE id=?";
    
    return new Promise((resolve, reject) => {
        database.query(sql, id, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results[0]);
        });
    });
}

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

async function addProduct(nom_article, type, description, marque, model, prix, image, etat) {
    const sql = `
      INSERT INTO produit (nom, type, description, marque, modele, prix_location, image, etat)
      VALUES (?, ?, ?, ?, ?, ?, ?, "disponible")
    `;
    
    return new Promise((resolve, reject) => {
        database.query(sql, [nom_article, type, description, marque, model, prix, image, etat], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}




module.exports = { addProduct, getAllProducts, getProductById, getProductWithDates};
