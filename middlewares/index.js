
const login = require('./login')
const register = require('./register')
const authorization = require('./authorization')
const home = require('./home')
const asyncErrorHandler = require('./error-handler')

module.exports = { 
    login, register, 
    authorization, home, 
    asyncErrorHandler
}