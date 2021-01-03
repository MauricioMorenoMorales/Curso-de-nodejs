//? Este archivo es usado dentro de el enrutador para enviar respuestas
//* Server <- routes <- network <- responses

exports.success = function (req, res, message, status) {
	res.status(status || 200).send(message)
}

exports.error = function (req, res, message, status, details) {
	console.log(details)
	res.status(status || 404).send(`Mensaje de error :( "${message}"`)
}
