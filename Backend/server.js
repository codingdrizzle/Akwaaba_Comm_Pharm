const express = require("express");
const cors = require("cors");
const MongoClient = require('mongodb').MongoClient

const app = express();
var database;
// const {data} = '../BlogComponents/PostTypes/NewPost";'
var url = "mongodb://localhost:27017";

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json());

// get requests here...
app.get('/users', (req, res)=>{
   database.collection('users').find({}).toArray((err,result)=>{
        if (err) throw err
        res.send(result)
    })
})
app.get('/news-feed', (req, res)=>{
   database.collection('news').find({}).toArray((err,result)=>{
        if (err) throw err
        res.send(result)
    })
})
app.get('/health-tips', (req, res)=>{
   database.collection('tips').find({}).toArray((err,result)=>{
        if (err) throw err
        res.send(result)
    })
})
//post requests here...
app.post('/news-feed', (req, res)=>{
   database.collection('news').insertOne({
       news_image: req.body.img,
       news_title: req.body.title,
       news_text: req.body.text,
       publisher: req.body.publisher,
       publish_date: req.body.publish_date
   });
})
app.post('/health-tips', (req, res)=>{
   database.collection('tips').insertOne({
       tips_image: req.body.img,
       tips_title: req.body.title,
       tips_text: req.body.text,
       publisher: req.body.publisher,
       publish_date: req.body.publish_date
   });
})
app.listen(8080, ()=>{
    MongoClient.connect(url, {useNewUrlParser: true}, (error, result)=>{
        if(error) throw error
       database =  result.db('Blog')
       console.log('Connection Successful')
  
    });
})
