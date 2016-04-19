exports.format = function (rows) {
	var data ="";
	for(var i in rows) {
		data += rows[i].id + " " ;
		data += rows[i].coder_id + " \t" ;
		data += rows[i].thing_id + " \t" ;
    data += rows[i].status + "\t";
    data += rows[i].zone + "\n";
	}
	return data;
};

exports.list = function (db, req, res) {
	var query = "SELECT * from things_of_coders ORDER BY ID DESC LIMIT 5";
	db.query(
		query,
		function (err, rows) {
			if (err) throw err;
			var data = exports.format(rows);
			res.send(res, data);
		}
	);
}
