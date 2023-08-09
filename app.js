const express = require('express')

const routes = require('./routes/router')

const app = express()

app.use(routes)

module.exports = app