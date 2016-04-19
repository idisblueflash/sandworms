var common = require('./common');

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

exports.offensive= function (db, req, res) {
	var query = "SELECT      coder.name, SUM(complexity) AS score FROM     sandworms.things_of_coders,     sandworms.coder WHERE     coder.id = things_of_coders.coder_id         AND catalog = 'task' GROUP BY coder_id LIMIT 0, 10";
	db.query(
		query,
		function (err, rows) {
			if (err) throw err;
      common.sendJSON(res, rows);
		}
	);
}
