const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = new Schema({
	user: String,
	message: {
		type: String,
	},
	date: Date,
})

const model = mongoose.model('message', mySchema)
module.exports = model
