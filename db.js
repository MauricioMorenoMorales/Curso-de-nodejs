const db = require('mongoose')

db.Promise = global.Promise //? Permite usar promesas con mongoose, puedes usar librerias de promesas
const uri =
	'mongodb+srv://db_user_otro:12345@nodejsplatzi.cg57m.mongodb.net/nodejsplatzi?retryWrites=true&w=majority'

async function connect(url) {
	db.connect(url, {
		useNewUrlParser: true,
	})
	console.log('[db] conectada con exito')
}

module.exports = connect
