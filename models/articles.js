/*jshint esversion:6*/
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
//Create the Schema Class
let Schema = mongoose.Schema;

//Create the techArticle Schema

let ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: String,
    required: true,
    unique: true
  },
  by:{
    type: String,
    unique: true,
  },
  section:{
    type: String,
    unique: true,
  },
  url:{
    type: String,
    unique: true,
  },
  saved:{
    type: Boolean,
    default: false
  }
});
ArticleSchema.plugin(uniqueValidator);
ArticleSchema.methods.saveArticle = function() {
    this.saved = true;
    return this.saved;
};

//Create the article model with the ArticleSchema
let Article = mongoose.model('Article', ArticleSchema);

//lets export this model
module.exports = Article;
