const express = require('express')
const router = express.Router()

// Modulos locales
const response = require('../../network/response')
const controller = require('./controller')

router.post('/', function (req, res) {
	controller
		.addUser(req.body.user)
		.then(data => {
			response.success(req, res, data, 201)
		})
		.catch(e =>
			response.error(
				req,
				res,
				'Internal error',
				500,
				`[Usernetwork] Error: ${e}`,
			),
		)
})

router.get('/', (req, res) => {
	controller
		.getAllUsers()
		.then(users => {
			response.success(req, res, users, 200)
		})
		.catch(e => {
			response.error(req, res, 'Unexpected Error', 500, e)
		})
})

module.exports = router //! SI no importas esto te aparecera un error de Router.use() requires a middleware function
