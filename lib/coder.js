exports.sendJSON = function (res, json) {
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Content-Length', Buffer.byteLength(json));
	res.send(json);
};

exports.formatCoders = function (rows) {
	var data ="";
	for(var i in rows) {
		data += rows[i].name + " " ;
		data += rows[i].email + "\n";
	}
	return data;
};

exports.list = function (db, req, res) {
	var query = "SELECT * from coder";
	db.query(
		query,
		function (err, rows) {
			if (err) throw err;
			var data = exports.formatCoders(rows);
			exports.sendJSON(res, rows);
		}
	);
}
