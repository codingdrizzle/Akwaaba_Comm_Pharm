const express = require("express");
const mongoose = require("mongoose");
const MongoClient = require('mongodb').MongoClient
const User = require("./Models/User");
const Tips = require("./Models/Tips");

const app = express();
var database;
var url = "mongodb://localhost:27017";

app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.get('/news-feed', (req, res)=>{
   database.collection('news').find({}).toArray((err,result)=>{
        if (err) throw err
        res.send(result)
    })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    // const connection = mongoose.createConnection("mongodb://localhost:27017/Blog");
    MongoClient.connect(url, {useNewUrlParser: true}, (error, result)=>{
        if(error) throw err
       database =  result.db('Blog')
       console.log('Connection Successful')
    });
})
// module.exports = connection;
