var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');




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

// Create Express application
var app = module.exports = express();

var NODE_ENV = 'development';
//Set Variables
app.set('env', process.env.NODE_ENV || 'production');

app.use(bodyParser.urlencoded({ extended: true }));


app.use(bodyParser.json({limit:'50mb'}));
app.use(express.static(__dirname));
//routes = require('./routes/index')
//app.use('/api', routes);

// Use environment defined port or 3000
var port = process.env.PORT || 4000;

// Start the server
app.listen(port);
console.log('Insert getat on port ' + port);
