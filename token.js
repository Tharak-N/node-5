
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

class TokenGenerationAndVerification {
    secretKey;

    generateSecretKey(){
        this.secretKey = crypto.randomBytes(32).toString('hex');
    }

    generateToken(_payload){
        this.generateSecretKey();
        try {
            const JWT_TOKEN = jwt.sign(
                _payload,
                this.secretKey,
                { expiresIn: "2h" }
            )
            return JWT_TOKEN
        }
        catch(error) {
            throw new Error(error)
        }
    }

    verify(token){
        try {
            let _payload = jwt.verify(token, this.secretKey)
            return _payload
        }
        catch(error){
            throw new Error(error)
        }
    }

    getSecretKey(){
        return this.secretKey
    }
}

const TOKEN = new TokenGenerationAndVerification()
module.exports = TOKEN