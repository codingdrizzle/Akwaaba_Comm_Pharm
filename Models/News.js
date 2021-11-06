var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var news = new Schema({
  news_title: {
      type: String,
      required: true
  },
  news_text:{
      type: String,
      required: true
  },
  news_image: {
      data : Buffer,
      required: true
  },
  publish_date:{
      type: Date,
       default: Date.now,
      required: true
  }
});

const News = mongoose.model("News", news);
module.exports = News;
