const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017";
var database;

MongoClient.connect(url, { useNewUrlParser: true }, (error, result) => {
  if (error) throw error;
  database = result.db("Blog");
});

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(
      { usernameField: 'email', passwordField: 'password' },
      (email, password, done) => {
        //Match User
        database
          .collection("users")
          .findOne({ email: email })
          .then((user) => {
            console.log(user)
            if (!user) {
              return done(null, false);
            }
            bcrypt.compare(password, user.password, (err, isMatch) => {
              if (err) throw err;
              if (isMatch) {
                return done(null, user);
              } else {
                return done(null, false);
              }
            });
          })
          .catch((err) => console.log('you got an error hear'));
      }
    )
  );

  passport.serializeUser((user, done) => {
      done(null, user);
  });

  passport.deserializeUser((user, done) => {
      done(null, user)
  })
};