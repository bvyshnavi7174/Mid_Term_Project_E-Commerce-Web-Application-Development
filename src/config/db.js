const {MongoClient} = require('mongodb')
 
var dbConnection
var url = "mongodb://localhost:27017/collebradb"
 
module.exports = {
    connectToDb : (mycallback) => {
        MongoClient.connect(url)
        .then((client) => {
            dbConnection = client.db()
            return mycallback()
        })
        .catch((err) => {
            console.log(`error is ${err}`)
            return mycallback(err)
        })
    },
    getDb : () => dbConnection,
 
}
