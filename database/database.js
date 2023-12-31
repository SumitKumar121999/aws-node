const mysql = require("mysql")

// var con = mysql.createConnection({
//   host: process.env.HOST,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE,
// });


var con = mysql.createConnection({
  host: 'databasenode.cvkw22kocp5o.ap-south-1.rds.amazonaws.com',
  user: 'admin',
  password: 'root12345',
  database: 'resultdatabase'
  //  host: "localhost",
  // user: "root",
  // password: "root12345",
  // database: "resultdatabase"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("DB Connected !!!");
});


module.exports = con
