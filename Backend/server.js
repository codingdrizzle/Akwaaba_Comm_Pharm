const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const MongoClient = require('mongodb').MongoClient
const User = require("./Models/User");
const Tips = require("./Models/Tips");

const app = express();
var database;
var url = "mongodb://localhost:27017";

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Yesss!!, This is working.")
})
app.get('/get-news-feed', (req, res)=>{
   database.collection('news').find({}).toArray((err,result)=>{
        if (err) throw err
        res.send(result)
    })
})

app.listen(8080, ()=>{
    // const connection = mongoose.createConnection("mongodb://localhost:27017/Blog");
    MongoClient.connect(url, {useNewUrlParser: true}, (error, result)=>{
        if(error) throw error
       database =  result.db('Blog')
       console.log('Connection Successful')
    });
})
// module.exports = connection;
