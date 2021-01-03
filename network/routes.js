//? Recibe desde server la app (server) y establece laa función más alta
//? De cada una de las rutas después llama a messages/network quienes envian el mensaje de respuesta
const express = require('express')
const message = require('../components/messages/network')

const routes = function (server) {
	server.use('/message', message)
}

module.exports = routes