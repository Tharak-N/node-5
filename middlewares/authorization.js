const TOKEN = require('../token')

const authorization = () => (req, res, next) => {
 let token = req?.headers['authorization']?.split("Bearer ")[1] ?? null;
    if(!!token){
        let data = TOKEN.verify(token)
        if(!!data) next()
        else res.status(401).send("Invalid Credentails / Token Expired")
    }
    else {
        throw new Error("Not a Valid Token")
    }
}

module.exports = authorization