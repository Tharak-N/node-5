const express = require('express')
/**Middleware Imports */
const login = require('../middlewares/login')
const register = require('../middlewares/register')
const authorization = require('../middlewares/authorization')
const home = require('../middlewares/home')

const router = express.Router()

router
.get('/', (req, res) => {
    res.send("Hola!")
})
.post('/login', login())
.post('/register', register())
.use(authorization())
.get('/home', home())

module.exports = router;