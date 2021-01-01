const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

let app = express()
app.use(bodyParser.json()).use(bodyParser.urlencoded()).use(router)

router.get('/', (req, res) => {
	console.log(req.body)
	console.log(req.headers)
	res.status(202).send('Hola')
})

router.get('/primersitio', (req, res) => {
	console.log(req.body)
	res.status(201).send({ hola: 'ola k ase' })
})

app.listen(3003)
console.log('mira empezaste tu practica')
