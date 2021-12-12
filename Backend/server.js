const express = require("express");
const cors = require("cors");
const MongoClient = require('mongodb').MongoClient;
const LocalStrategy = require('passport-local').Strategy;
// const multer  = require('multer');
// const upload = multer({ dest: '../src/uploads' });

const app = express();
var url = "mongodb://localhost:27017";
var database;

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json());

// Routes
app.use('/', require('./Routes/news'))
app.use('/', require('./Routes/health'))
app.use('/users', require('./Routes/user'))



app.listen(8080, ()=>{
    MongoClient.connect(url, {useNewUrlParser: true}, (error, result)=>{
        if(error) throw error 
            // if (error) console.error(error);   
       database =  result.db('Blog')
       console.log('Connection Successful') 
    });
})
