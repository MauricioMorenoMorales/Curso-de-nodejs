exports.success = function (req, res, message, status) {
	res.status(status || 200).send(`los mensajes son estos: ${message}`)
}

exports.error = function (req, res, message, status, details) {
	console.error(`[error] error interno`)
	res.status(status || 500).send({
		error: message,
		body: message,
	})
	//
}
