exports.sendJSON = function (res, json) {
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Content-Length', Buffer.byteLength(json));
	res.send(json);
};
