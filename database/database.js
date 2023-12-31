const mysql = require("mysql")

// var con = mysql.createConnection({
//   host: process.env.HOST,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE,
// });


var con = mysql.createConnection({
  host: 'databasenode1.cvkw22kocp5o.ap-south-1.rds.amazonaws.com',
  user: 'root',
  password: '123456789',
  database: 'databasenode1'
});

con.connect(function (err) {
  if (err) throw err;
  console.log("DB Connected !!!");
});


module.exports = con
