/*jshint esversion:6*/
//express Dependencies
const express = require('express');
const router = express.Router();
//DB Dep adding our models
let Article = require('../models/articles.js');

router.get("/saved", function(req, res) {
  // This GET request will search for all articles
    Article.find({}).exec(function (err, doc) {

        if (err) {
            console.log(err);
        }
        else {
            res.send(doc);
        }
    });

});

router.post("/", function(req, res) {


});


module.exports = router;
