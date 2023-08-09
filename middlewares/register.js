const User = require('../models/user')
const TOKEN = require('../token');

const register = () => async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = new User({name, email, password})
        let registeredUser = await user.save();
        if(!!registeredUser){
            let JWT = TOKEN.generateToken({
                name: user.email,
                email: user.email
            })
            res.status(201).json(
                {
                    token: JWT,
                    message: 'User Registered Successfully'
                }
            )
        }
        else {
            throw new Error("creating user failed")
        }
    }
    catch(error){
        throw new Error(error)
    }
}

module.exports = register