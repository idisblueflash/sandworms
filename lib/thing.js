
exports.sendJSON = function (res, json) {
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Content-Length', Buffer.byteLength(json));
	res.send(json);
};

exports.formatThing = function (rows) {
	var data ="";
	for(var i in rows) {
		data += rows[i].id + " " ;
		data += rows[i].description  + " \t" ;
		data += rows[i].catalog + " \t" ;
		data += exports.levelDescribe(rows[i].catalog) + " \t";
    data += rows[i].level + "\n";
	}
	return data;
};

exports.levelDescribe = function(catalog){
  var msg = " %s ";
  if ( catalog == 'task') {
    msg = "复杂度(1-3):";
  }else if( catalog == 'bug'){
    msg = "严重程度(1-3):";
  }
  return msg;
};

exports.list = function (db, req, res) {
	var query = "SELECT * from thing ORDER BY ID DESC LIMIT 5";
	db.query(
		query,
		function (err, rows) {
			if (err) throw err;
			var data = exports.formatThing(rows);
			exports.sendJSON(res, data);
		}
	);
}
