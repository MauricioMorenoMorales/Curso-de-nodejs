//Modulos node-express
const express = require('express')
const bodyParser = require('body-parser')

//Modulos locales
const response = require('./network/response')
const router = require('./network/routes')

//Creando la app
const app = express()

//variables de la app
app.set('port', 3000)
//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//! Router siempre debe de ir al final
//? Ya no vamos a usar el app.use(router)en su vez usaremos el router app
//Rutas
//?Usaremos las rutas de network
router(app)

app.use('/app', express.static('public'))

//Empezando el servidor en el puerto $port
app.listen(app.get('port'))
console.log(`La aplicacion está corriendo en el puerto ${app.get('port')}`)
