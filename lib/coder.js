exports.sendJSON = function (res, json) {
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Content-Length', Buffer.byteLength(json));
	res.end(json);
};

exports.list = function (db, req, res) {
	var query = "SELECT * from coder";
	db.query(
		query,
		function (err, rows) {
			if (err) throw err;
			exports.sendJSON(res, rows);
		}
	);
}
