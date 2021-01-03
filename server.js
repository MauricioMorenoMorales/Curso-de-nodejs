//Modulos node-express
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

//Modulos locales
const response = require('./network/response')

//Creando la app
const app = express()

//variables de la app
app.set('port', 3000)
//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//! Router siempre debe de ir al final
app.use(router)

//Rutas
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
			'Trataron de usar delete',
		)
	}
})

app.use('/app', express.static('public'))

//Empezando el servidor en el puerto $port
app.listen(app.get('port'))
console.log(`La aplicacion está corriendo en el puerto ${app.get('port')}`)
