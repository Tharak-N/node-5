
const User = require('../models/user') 
const TOKEN = require('../token')

const login = () => async (req, res) => {
    const { email, password } = req.body;
    if(!(email && password)) req.status(400).send("Email and Password Fields are required")
    try {
        let existedUser = await User.findOne({ email, password })
        if(!!existedUser){
            const JWT = TOKEN.generateToken({
                name: existedUser.name,
                email: existedUser.email
            }) 
            res.send({
                token: JWT,
                message: "Login Successfull"
            })
        }
        else {
            res.status(401).send("User not found, please register")
        }
    }        
    catch(error){
        throw new Error(error)
    }

}

module.exports = login