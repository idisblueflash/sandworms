var express = require('express');
var app = express();
var coder = require('./lib/coder');
var thing = require('./lib/thing');
var thingsOfCoder = require('./lib/thingsOfCoder');
var mysql = require('mysql');

var options = require('./db.json');
options.credentials.database = options.db; // work around for db.json file

var db = mysql.createConnection(options.credentials);

app.set('port', process.env.PORT || 3000);

app.get('/coders', function(req, res){
  coder.list(db, req, res);
});

app.get('/things', function(req, res){
  thing.list(db, req, res);
});

app.get('/things-of-coders', function(req, res){
  thingsOfCoder.list(db, req, res);
});

app.get('/points', function(req, res){
  thingsOfCoder.point(db, req, res);
});

app.get('/utility', function(req, res){
  thingsOfCoder.utility(db, req, res);
});

app.get('/points/:id', function(req, res){
  thingsOfCoder.pointById(db, req, res);
});

app.put('/things-of-coders/:id/thing', function(req, res){
  thingsOfCoder.add(db, req, res);
});

app.listen(app.get('port'), function () {
	console.log('Sandworms server listening on port %s', app.get('port'));
});
