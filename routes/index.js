//use router from express then export the router
const router = require('express').Router();
//get card ejs
const cards = require('./views/diary_card.js');
//import axios from axios
const axios = require('axios');

router.get('/', (req , res) => {
    //get the data from the api
    
    const response = axios.get('http://localhost:3000/dark/get_article/.').then((article_list) => {
      console.log(article_list.data);
      var title = []
      var author = []
      var description = []
      var id = []

      article_list.data.forEach(article => {

        title.push(article.title)
        author.push(article.author)
        description.push(article.description)
        id.push(article._id)

      });

      // console.log(title);
      // console.log(author);
      // console.log(description);
      // console.log(id);
      
      res.render(__dirname +'/views/white/index.ejs',{'diary_cards': cards(title,author,description,id)});

    }).catch((error) => {
      console.log(error)
    });

    
  });

router.get('/article/:id', (req , res) => {
  //get the data from the db
  //import db
  const db = require('../database/database');
  const ObjectId = require('mongodb').ObjectId;
  //import db model
  const Article = require('../database/models/article');
  //get all articles
  let id = req.params.id;
  let o_id = ObjectId(id);
  Article.findOne({_id: o_id}, (err, article) => {
    console.log(article);
    if (err) return console.error(err);
    else{
      res.render(__dirname +'/views/white/article.ejs',{'title': article.title, 'author': article.author, 'content': article.content});
    }

  })
});
module.exports = router;
