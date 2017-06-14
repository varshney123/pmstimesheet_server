var mysql = require('mysql');
module.exports={

connection:function(){

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Varshney19@95",
  database:"pmsdatabase"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("select * from 22959_users", function (err, result) {
    if (err) throw err;
    console.log("Result: " , result);
  });
});

}
}