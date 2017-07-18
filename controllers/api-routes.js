/*jshint esversion:6*/
//express Dependencies
const express = require('express');
const router = express.Router();
//DB Dep adding our models
let Article = require('../models/articles.js');

router.get("/saved", function(req, res) {
  // This GET request will search for all articles
  Article.find({}).exec(function(err, doc) {

    if (err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  });

});

router.post("/saved", function(req, res) {
  console.log('inside post');
  console.log(req.body.NYTArticles);


  Article.create({
    title: req.body.NYTArticles.headline.main,
    by: req.body.NYTArticles.byline.original,
    date: req.body.NYTArticles.pub_date,
    section: req.body.NYTArticles.section_name,
    url: req.body.NYTArticles.web_url
  }, function(err) {
    if (err) {
      console.log(err);
    } else {
      res.send("Saved Search");
    }
  });
});

// });

module.exports = router;
