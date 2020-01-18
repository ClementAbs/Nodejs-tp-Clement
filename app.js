const mysql = require('mysql');
const bodyParser = require('body-parser');
const fs = require('fs');

const conn = mysql.createConnection({    // Connexion to mysql table
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'aston'
});
let importingToDB = (filePath) => {

  const myfile = fs.readFileSync(filePath);  
  const myfileParsed = JSON.parse(myfile);
  if (myfileParsed && (myfileParsed.length > 0)) {
    for (let i=0;i<myfileParsed.length;i++) {
      let query = conn.query(`INSERT INTO ingredients SET ?`, myfileParsed[i], (err, result) => {
        if (err) {
          console.log(err);
        } if(result) {
          console.log(`Les ingrédients suivants ${myfileParsed[i].label}ont été ajoutés dans la table ingrédients`);
        }
      });
    }
  }
};
module.exports = {importingToDB};
