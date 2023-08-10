const User = require('../models/user')
const TOKEN = require('../token');
 
const register = () => async (req, res) => {
    const { name, email, password } = req.body;
    if(!(name && email && password)) res.status(400).send("Inputs are required")
    try {
        /**Checking if user already exist*/
        const oldUser = await User.findOne({ email });
        if(oldUser) res.status(409).send("Email already exists, please login")
        // if(oldUser) res.redirect('/login')
        /**Creating a user in DB */
        const user = new User({name, email, password})
        let registeredUser = await user.save();
        /**Generating Token  */
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