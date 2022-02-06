//use router from express then export the router
const router = require('express').Router();
//get card ejs
const cards = require('./views/diary_card.js');

router.get('/index/:key', (req , res) => {
    if (req.params.key == 'ihatelife') {
      res.render(__dirname +'/views/dark/index.ejs',{diary_cards: cards(['no cards'],['no cards'])});
        
    }
    else {
        res.send('<h1 align="center" style="color: red;">Require Key params</h1>');
    }
  });

//get the data from the db
//import db
const db = require('../database/database');
const ObjectId = require('mongodb').ObjectId;
//import db model
const Article = require('../database/models/article');

router.get('/article/:id/:key', (req , res) => {
  let key = req.params.key;
  let id = req.params.id;
  let o_id = ObjectId(id);
  Article.findOne({_id:o_id}, (err, article) => {
    console.log(article);
    if (err){
      res.send('<h1 align="center" style="color: red;">404 Error No article found</h1>');
      return console.error(err);
    } 
    else{
      if (req.params.key == article.key) {
        res.render(__dirname +'/views/dark/article.ejs',{'title': article.secret_title, 'author': article.secret_author, 'content': article.secret_content});
      
      } else{
        res.send('<h1 align="center" style="color: red;">Require Key</h1>');
      }
    }

  })
});


router.get('/get_article/:key', (req, res) => {
  let hidden = req.params.key == 'true' ? true : false;
  Article.find({hidden:hidden},{title:1,author:1,description:1}, (err, articles) => {
    if (err) return console.error(err);
    else{
        res.json(articles);
    }

  })
});


module.exports = router;
