//?Este archivo recibe informacion desde la network

//Modulos locales
const store = require('./store')

function addMessage(user, message) {
	return new Promise((resolve, reject) => {
		if (!user || !message) {
			console.error('[MessageController] No hay usuario o mensaje')
			reject('Los datos son incorrectos')
			return false
		}
		const fullMessage = {
			user: user,
			message: message,
			date: new Date(),
		}
		console.log(fullMessage)
		store.add(fullMessage)
		resolve(fullMessage)
	})
}

function getMessages(filterUser) {
	return new Promise((resolve, reject) => {
		resolve(store.list(filterUser))
	})
}

function updateMessage(id, message) {
	return new Promise(async (resolve, reject) => {
		if (!id || !message) {
			reject('[Controller]Invalid data')
		}
		const result = await store.updateText(id, message)
		resolve(result)
	})
}

function deleteMessage(id) {
	return new Promise((resolve, reject) => {
		if (!id) {
			reject('[controller] id invalido')
		}
		store
			.removeMessage(id)
			.then(() => {
				resolve()
			})
			.catch(e => {
				reject(e)
			})
	})
}

module.exports = {
	addMessage: addMessage,
	getMessages: getMessages,
	updateMessage: updateMessage,
	deleteMessage: deleteMessage,
}
