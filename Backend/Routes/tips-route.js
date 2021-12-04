const express = require("express");
const Tips = require("../Models/Tips");
const router = express.Router();

router.post("/blogtips", (req, res) => {
  const tips = new Tips({
    tips_title: req.body.title,
    tips_text: req.body.text,
    tips_image: req.body.image,
    publish_date: req.body.date,
  });
});
