var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var connect=require('./controllers/users');
// Create Express application
var app = module.exports = express();

connect.connection();

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
