var http = require('http');
var coder = require('./lib/coder');
var mysql = require('mysql');

var options = require('./db.json');

var db = mysql.createConnection(options);

var server = http.createServer(function(req, res) {
	switch (req.method) {
		case 'GET':
			switch(req.url) {
				case '/coders':
					coder.list(db, req, res);
					break;
			}
		break;
	}
});

console.log('Server started...');
server.listen(3000, '127.0.0.1');
