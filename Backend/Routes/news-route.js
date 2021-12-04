const express = require('express');
const News = require("../Models/News");
const router = express.Router();


router.post('/blognews',(req, res)=>{
    const news = new News({
      news_title: req.body.title,
      news_text: req.body.text,
      news_image: req.body.image,
      publish_date: req.body.date,
    });
})
