const express = require('express')
const router = express.Router()

// Modulos locales
const response = require('../../network/response')
const controller = require('./controller')

//!||
router.get('/', (req, res) => {
	const filterMessage = req.query.user || null
	//? Enviamos info de el req a el archivo -> controller lo que retorna una promesa
	//? Después recibimos la response de el archivo response y enviamos success o error
	controller
		.getMessages(filterMessage)
		.then(message => response.success(req, res, message, 200))
		.catch(message =>
			response.error(req, res, 'No pudimos acceder a los datos', 404, message),
		)
})

//!||
router.post('/', (req, res) => {
	//? Enviamos info de el req a el archivo -> controller lo que retorna una promesa
	//? Después recibimos la response de el archivo response y enviamos success o error
	controller // -> Controller
		.addMessage(req.body.user, req.body.message)
		.then(fullMessage => {
			response.success(req, res, fullMessage, 201) // -> Response
		})
		.catch(() => {
			response.error(
				// -> Response error
				req,
				res,
				'Informacion invalida',
				403,
				'El usuario no ha introducido datos correctos',
			)
		})
	res.header({
		//-> Envía un header a el cliente
		Valor: 'Personalizado',
	})
})

//!||
router.delete('/:id', (req, res) => {
	controller
		.deleteMessage(req.params.id)
		.then(() => {
			response.success(req, res, `Usuario ${req.params.id} eliminado`, 200)
		})
		.catch(e => {
			response.error(req, res, 'Error interno', 500, `[Network] Error ${e}`)
		})
})

//!||
router.patch('/:id', (req, res) => {
	console.log(req.params.id)
	controller
		.updateMessage(req.params.id, req.body.message)
		.then(data => {
			response.success(req, res, data, 200)
		})
		.catch(err => response.error(req, res, 'Error interno', 500, err))
})

module.exports = router
