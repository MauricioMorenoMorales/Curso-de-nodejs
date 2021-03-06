//? Este modulo será consumido por el controller
const db = require('mongoose')
const Model = require('./model')

db.Promise = global.Promise //? Permite usar promesas con mongoose, puedes usar librerias de promesas
const uri =
	'mongodb+srv://db_user_otro:12345@nodejsplatzi.cg57m.mongodb.net/nodejsplatzi?retryWrites=true&w=majority'
db.connect(uri, {
	useNewUrlParser: true,
})
console.log('[db] conectada con exito')

function addMessage(message) {
	const myMessage = new Model(message)
	myMessage.save()
}

async function getMessages(filterUser) {
	let filter = {}
	if (filterUser !== null) {
		filter = { user: filterUser }
	}
	//return list
	const messages = await Model.find(filter)
	return messages
	// let userFilter = {}
	// if (user) {
	// 	userFilter.user = new RegExp(user, 'i')
	//? } Hacer case insensitive la consulta a la db
}

function removeMessage(id) {
	return Model.deleteOne({ _id: id })
}

async function updateText(id, message) {
	const foundMessage = await Model.findOne({ _id: id })
	foundMessage.message = message
	const newMessage = await foundMessage.save()
	return newMessage
}

module.exports = {
	add: addMessage,
	list: getMessages,
	updateText: updateText,
	removeMessage: removeMessage,
}
