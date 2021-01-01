const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const response = require('./network/response')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use(router)
router.get('/message', (req, res) => {
	console.log(req.headers)
	res.header({
		'custom.header': 'Nuestro valor personalizado',
	})
	//res.send('Message list')
	response.success(req, res, 'lista de mensajes')
})

app.use(router)
router.delete('/message', (req, res) => {
	res.send('Message posted')
})

app.use(router)
router.post('/message', (req, res) => {
	console.log(req.query)
	console.log(req.body)
	if (req.query.error == 'ok') {
		response.error(
			req,
			res,
			'Error inesperado',
			401,
			'Es solo una simulacion de los errores',
		)
	} else {
		response.success(req, res, 'creado correctamente', 201)
	}
	//res.status(201).send([{ error: '', body: 'Creado correctamente' }])
})
// app.use('', (req, res) => {
// 	res.send('Hola')
// })

app.use('/app', express.static('public'))

app.listen(3000)
console.log('La aplicacion está escuchando en el puerto 3000')
