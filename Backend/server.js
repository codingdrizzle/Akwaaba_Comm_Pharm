const express = require("express");
const cors = require("cors");
const MongoClient = require('mongodb').MongoClient;
const LocalStrategy = require('passport-local').Strategy;
// const multer  = require('multer');
// const upload = multer({ dest: '../src/uploads' });
const passport = require('passport')
const session = require("express-session")

const app = express();

require('./config/passport')(passport);
var url = "mongodb://localhost:27017";
var database;

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json());

// Passport middleware
app.use(passport.initialize());
// app.use(passport.session())
app.use(session({
    secret: 'cats and dogs',
    resave: true,
    saveUninitialized: true
}));
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
