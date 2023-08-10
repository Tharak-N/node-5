const express = require('express')

const middlewares = require('../middlewares/index')

const router = express.Router()

router
.get('/', (req, res) => {
    res.send("Hola!")
})
.post('/login', middlewares.login())
.post('/register', middlewares.register())
.use(middlewares.authorization())
.get('/home', middlewares.home())

module.exports = router;