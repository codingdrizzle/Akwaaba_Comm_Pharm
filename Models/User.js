var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var user = new Schema({
    email: {
      type: String,
      required: true,
    },
  username: {
    type: String,
    required: true,
  },
  password: {
      type: String,
      required: true
  } 
});

const User = mongoose.model('User', user);
module.exports = User;
