const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

var database;

    MongoClient.connect(url, {useNewUrlParser: true}, (error, result)=>{
        if(error) throw error
       database =  result.db('Blog')
    });     

router.get('/news-feed', (req, res)=>{
   database.collection('news').find({}).toArray((err,result)=>{
        if (err) throw err
        res.send(result)
    })
})

router.post('/news-feed', (req, res)=>{
   database.collection('news').insertOne({
       news_image: req.body.image,
       news_title: req.body.title,
       news_text: req.body.text,
       publisher: req.body.publisher,
       publish_date: req.body.publish_date
   });
})

module.exports = router;