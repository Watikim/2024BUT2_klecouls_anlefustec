const database = require("./database.js");

async function getUserById(id) {

    sql = "SELECT * FROM utilisateur WHERE id=?";
    
    return new Promise((resolve, reject) => {
        database.query(sql, id, (err, results) => {

            if (err) {
                return reject(err);
            }
            resolve(results[0]);

        });
    });
}

async function checklogin(login) {

    sql = "SELECT * FROM utilisateur WHERE login = ?";
    
    return new Promise((resolve, reject) => {
        database.query(sql, login, (err, results) => {

            if (err) {
                return reject(err);
            }
            resolve(results[0]);

        });
    });
}

async function modifnom(nom, login) {
    
    sql = "UPDATE utilisateur SET nom = ? WHERE login = ?";
    
    return new Promise((resolve, reject) => {
        database.query(sql, [nom, login],  (err, results) => {

            if (err) {
                return reject(err);
            }
            resolve(results);

        });
    });
}

async function addUtilisateur(nouv_login, nouv_password, nouv_nom, nouv_prenom, nouv_ddn, nouv_email) {
    const sql = `
      INSERT INTO utilisateur (login, password, nom, prenom, ddn, email)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    
    return new Promise((resolve, reject) => {
        database.query(sql, [nouv_login, nouv_password, nouv_nom, nouv_prenom, nouv_ddn, nouv_email], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}


module.exports = { getUserById, checklogin, modifnom, addUtilisateur};

