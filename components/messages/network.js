const express = require('express')
const router = express.Router()

// Modulos locales
const response = require('../../network/response')

//!||
router.get('/', (req, res) => {
	//console.log(req.headers)
	console.log(req.body)
	console.log(req.query)
	res.header({
		Valor: 'Personalizado',
	})
	//?Enviamos un send desde otras funciones en otro archivo (response)
	if (req.query.error == 'ok') {
		response.error(
			req,
			res,
			'Tu peticion por url no puede ser completada',
			403,
			'Parametro rechazado',
		)
	} else {
		response.success(req, res, 'Hola desde get')
	}
})

//!||
router.post('/', (req, res) => {
	//console.log(req.headers)
	console.log(req.body)
	console.log(req.query)
	res.header({
		Valor: 'Personalizado',
	})
	//?Enviamos un send desde otras funciones en otro archivo (response)
	if (req.query.error == 'ok') {
		response.error(
			req,
			res,
			'Tu peticion por url no puede ser completada',
			403,
			'Parametro rechazado',
		)
	} else {
		response.success(req, res, 'Hola desde post')
	}
})

//!||
router.delete('/', (req, res) => {
	//console.log(req.headers)
	console.log(req.body)
	console.log(req.query)
	res.header({
		Valor: 'Personalizado',
	})
	//?Enviamos un send desde otras funciones en otro archivo (response)
	if (req.query.error == 'ok') {
		response.error(
			req,
			res,
			'Tu peticion por url no puede ser completada',
			403,
			'Parametro rechazado',
		)
	} else {
		response.error(
			req,
			res,
			'hola desde delete aqui te retornaré un 404 :B',
			403,
			'Trataron de usar delete',
		)
	}
})

module.exports = router
