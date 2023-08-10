
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

class TokenGenerationAndVerification {
    secretKey;

    generateSecretKey(){
        this.secretKey = crypto.randomBytes(32).toString('hex');
    }

    generateToken(_payload){
        this.generateSecretKey();
        const JWT_TOKEN = jwt.sign(
            _payload,
            this.secretKey,
            { expiresIn: "2h" }
        )
        return JWT_TOKEN
    }

    verify(token){
        let _payload = jwt.verify(token, this.secretKey)
        return _payload
    }

    getSecretKey(){
        return this.secretKey
    }
}

const TOKEN = new TokenGenerationAndVerification()
module.exports = TOKEN