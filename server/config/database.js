var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database:"test"
});

console.log("insode databse")
exports.connection=con;
