const express = require('express')
const{connectToDb ,getDb} = require('./config/db')
const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
 





const app = express()
const PORT = 5000




mongoose.connect("mongodb://localhost:27017/collebradb")
.then(()=> console.log("connected to server"))
.catch((err)=>console.log("unable connectedto server"+ err))




const bodyParser =  require('body-parser')
app.use(bodyParser.json())
 
app.listen(PORT, () => {
    console.log("connected to server")
})


app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 