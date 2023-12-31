const mysql=require("mysql")

  var con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("DB Connected !!!");
  });


  module.exports=con