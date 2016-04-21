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

exports.point= function (db, req, res) {
	var query = "SELECT      coder.name, SUM(complexity) AS point " + 
    " FROM     sandworms.things_of_coders, sandworms.coder " + 
    " WHERE     coder.id = things_of_coders.coder_id" + 
    "   AND catalog = 'task'" + 
    "   AND WEEK(close_time) = WEEK(CURRENT_DATE()) - 1" +
    " GROUP BY coder_id LIMIT 0, 10";
	db.query(
		query,
		function (err, rows) {
			if (err) throw err;
      common.sendJSON(res, rows);
		}
	);
}

exports.pointById= function (db, req, res) {
  var coder_id = req.params.id;
  var query = " SELECT  " + 
    "coder.name, SUM(complexity) AS score " + 
    " FROM     sandworms.things_of_coders, sandworms.coder " + 
    " WHERE     coder.id = things_of_coders.coder_id " + 
    "   AND catalog = 'task'" + 
    "   AND coder_id = ? " + 
    "   AND WEEK(close_time) = WEEK(CURRENT_DATE()) - 1" +
    " GROUP BY coder_id LIMIT 0, 100";
	db.query(
		query,
    [coder_id],
		function (err, rows) {
			if (err) throw err;
      common.sendJSON(res, rows);
		}
	);
}

exports.utility= function (db, req, res) {
  var query ="SELECT      coder.name, COUNT(sandworms.things_of_coders.id) AS utility " + 
    " FROM     sandworms.things_of_coders,     sandworms.coder " + 
    " WHERE     coder.id = things_of_coders.coder_id        " + 
    "   AND catalog = 'task' " + 
    "   AND WEEK(close_time) = WEEK(CURRENT_DATE()) - 1" +
    " GROUP BY coder_id LIMIT 0, 100";
	db.query(
		query,
		function (err, rows) {
			if (err) throw err;
      common.sendJSON(res, rows);
		}
	);
}

exports.assists= function (db, req, res) {
  var query ="SELECT " + 
    " coder.name, " +
    " SUM(sandworms.things_of_coders.complexity) AS assists " +     
    "   FROM     " +
    "   sandworms.things_of_coders, " +
    " sandworms.coder " +
    "   WHERE " +
    "   coder.id = things_of_coders.coder_id " +
    "   AND (catalog = 'help' OR catalog = 'break') " +
    "   AND WEEK(close_time) = WEEK(CURRENT_DATE()) -1 " +
    " GROUP BY coder_id LIMIT 0, 100";
	db.query(
		query,
		function (err, rows) {
			if (err) throw err;
      common.sendJSON(res, rows);
		}
	);
}

