const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017";
var database;

    MongoClient.connect(url, {useNewUrlParser: true}, (error, result)=>{
        if(error) throw error
       database =  result.db('Blog')
    }); 

router.get('/health-tips', (req, res)=>{
   database.collection('tips').find({}).toArray((err,result)=>{
        if (err) throw err
        res.send(result)
    }) 
})

router.post('/health-tips', (req, res)=>{
   database.collection('tips').insertOne({ 
       tips_image: req.body.img,
       tips_title: req.body.title,
       tips_text: req.body.text,
       publisher: req.body.publisher,
       publish_date: req.body.publish_date
   });
})

module.exports = router;