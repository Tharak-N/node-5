const mongoose = require('mongoose')

class DatabaseConnection {
    server = 'mongodb://127.0.0.1:27017';
    connect(){
        mongoose.connect(this.server)
        .then((res) => console.log("Connected to DB Successfully"))
        .catch((error) => console.log("Failed to Connect DB", error))
    }
}

const db = new DatabaseConnection()
module.exports = db