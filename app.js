const express = require('express')
const cors = require('cors')

const db = require('./mongo/database')
const routes = require('./routes/router')

const app = express()
db.connect()
app.use(
    cors(),
    express.json(),
    routes
)

module.exports = app