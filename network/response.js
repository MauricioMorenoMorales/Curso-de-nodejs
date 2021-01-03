//? Este archivo es usado dentro de el enrutador para enviar respuestas

exports.success = function (req, res, message, status) {
	res.status(status || 200).send(`Mensaje de exito :) "${message}"`)
}

exports.error = function (req, res, message, status) {
	res.status(status || 404).send(`Mensaje de error :( "${message}"`)
}
