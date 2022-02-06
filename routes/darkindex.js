//use router from express then export the router
const router = require('express').Router();
//get card ejs
const cards = require('./views/diary_card.js');

//get the data from the db
//import db
const db = require('../database/database');
const ObjectId = require('mongodb').ObjectId;
//import db model
const Article = require('../database/models/article');

router.get('/index/:key/:card_id/:card_key', (req , res) => {
    if (req.params.key == 'ihatemylife' && req.params.card_id == '1' && req.params.card_key == '1') {
      
      res.render(__dirname +'/views/dark/index.ejs',{diary_cards: cards()});
        
    }
    else if (req.params.key == 'ihatemylife') {
      let o_id
      try{
        o_id = ObjectId(req.params.card_id);
      } catch(err) {
        res.status(404);
        res.render(__dirname +'/views/error/404.ejs',{'error': '404 Error wrong key'});
      }
      
      Article.findOne({_id:o_id}, (err, article) => {
        console.log(article);
        if (err){
          res.status(404);
          res.render(__dirname +'/views/error/404.ejs',{'error': '404 Error wrong id/key'});
          return console.error(err);
        } 
        else{
          try{
          console.log(article);
          if (req.params.card_key.toLowerCase() == article.key.toLowerCase()) {
            
            res.render(__dirname +'/views/dark/index.ejs',{'diary_cards': cards([article.secret_title],[article.author],[article.secret_description],[article._id],[article.key],true)});
          
          } 
         } catch(err){
          res.status(404);
           res.render(__dirname +'/views/error/404.ejs',{'error': '404 Error wrong id/key'});
           return console.error(err);
         }
        }
    
      })

        
    }
    else {
      res.status(404);
        res.render(__dirname +'/views/error/404.ejs',{'error': 'require "key" parameter'});
    }
  });



router.get('/article/:id/:key', (req , res) => {
  let key = req.params.key;
  let id = req.params.id;
  let o_id = ObjectId(id);
  Article.findOne({_id:o_id}, (err, article) => {
    console.log(article);
    if (err){
      res.status(404);
      res.render(__dirname +'/views/error/404.ejs',{'error': '404 no article found'});
      return console.error(err);
    } 
    else{
      if (req.params.key == article.key) {
        res.render(__dirname +'/views/dark/article.ejs',{'title': article.secret_title, 'author': article.secret_author, 'content': article.secret_content});
      
      } else{
        res.status(404);
        res.render(__dirname +'/views/error/404.ejs',{'error': '404 Require "key" parameter'});
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
