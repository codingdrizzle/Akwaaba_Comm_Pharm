const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const bcrypt = require("bcryptjs");

var url = "mongodb://localhost:27017";
var database;

MongoClient.connect(url, { useNewUrlParser: true }, (error, result) => {
  if (error) throw error;
  database = result.db("Blog");
});

//Check if email exists routes
// Fetch users handle.
router.get("/user", (req, res) => {
  database
    .collection("users")
    .find({})
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

// Register Handle
router.post("/register", (req, res) => {
  const { email, username, password, re_password } = req.body;
  database
    .collection("users")
    .findOne({ email: email })
    .then((email) => {
      if (email) {
        console.log(email + " already exists");
      } else {
        const newUser = { 
          email: req.body.email,
          username: username,
          password: password,
        };
        bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) console.error(err);

            newUser.password = hash;

            database
            .collection("users")
            .insertOne(newUser)
            .then(user => {
                console.log('User added successfully\n'+user)
            })
            .catch((err) => console.error(err))
          })
        }
        )
      }
    })
    .catch((err) => console.error(err));
  res.send("Register Page");
});

// Login Handle
router.get("/login", (req, res) => {
  res.send("Login Page");
});

module.exports = router;
