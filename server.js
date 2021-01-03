const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

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
	console.log(req.headers)
	console.log(req.body)
	console.log(req.query)
	res.send('Hla desde get')
})

router.post('/', (req, res) => {
	console.log(req.headers)
	console.log(req.body)
	console.log(req.query)
	res.send('Hola desde post')
})

router.delete('/', (req, res) => {
	console.log(req.headers)
	console.log(req.body)
	console.log(req.query)
	res.send('HOla desde delete')
})

//Empezando el servidor en el puerto 3000
app.listen(app.get('port'))
console.log(`La aplicacion está corriendo en el puerto ${app.get('port')}`)
