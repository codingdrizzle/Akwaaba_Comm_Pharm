var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var tips = new Schema({
  tip_title: {
    type: String,
    required: true,
  },
  tip_text: {
    type: String,
    required: true,
  },
  tip_image: {},
  publish_date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  author : {
    type: String,
    required: true
  }
});

const Tips = mongoose.model("Tips", tips);
module.exports = Tips;
