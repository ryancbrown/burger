// Connect to Database
var mysql = require('mysql');
var connection; 

// https://blog.edna.tech/2018/08/10/connecting-eat-da-burger-to-jawsdb-on-heroku/
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'burgers_db'
  });
}

connection.connect(function(err) {
   if (err) {
     console.error('error connecting: ' + err.stack);
     return;
   }
   console.log('Connected to burgers_db');
 });

module.exports = connection;