const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const bcrypt = require("bcryptjs");
const passport = require('passport');

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
  const { email, username, password } = req.body;
  database
    .collection("users")
    .findOne({ email: email })
    .then((user) => {
      if (user) {
        console.log(user + " already exists");
      } else {
        const newUser = {
          email: email,
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
              .then((user) => {
                console.log("User added successfully\n" + user);
              })
              .catch((err) => console.error(err));
          });
        });
      }
    })
    .catch((err) => console.error(err));
});

// Login Handle
router.get("/login", (req, res) => {
  res.send("Login Page");
});

// router.post('/login', (req, res, next) => {
//   console.log('Request to Login route')
//   passport.authenticate('local', {
//     // successRedirect: 'http://localhost:3000/admin',
//     // failureRedirect: 'http://localhost:3000/admin',
//   })(req, res, next);
// });

router.post('/login', passport.authenticate('local'), (req, res) => {
  console.log('was a success')
  // res.redirect('http://localhost:3000')
  res.redirect('/users/user')
  console.log(req.user.username)
});

module.exports = router;