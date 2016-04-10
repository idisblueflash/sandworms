var express = require('express');
var app = express();
var coder = require('./lib/coder');
var mysql = require('mysql');

var options = require('./db.json');
options.credentials.database = options.db; // work around for db.json file

var db = mysql.createConnection(options.credentials);

app.get('/coders', function(req, res){
  coder.list(db, req, res);
});

app.listen(3000);