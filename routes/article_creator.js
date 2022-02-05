// create article and save in mongodb
//import express router
const router = require('express').Router();
//import db
const db = require('../database/database');
//import db model
const Article = require('../database/models/article');

const timestamp = new Date();

//create route

//create article
router.post('/create_article/create', (req, res) => {
    //create article
    const article = new Article({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        content: req.body.content,
        date: timestamp,
    })
    //save article 
    article.save().then((result) => {
        res.json({
            message: 'article saved',
            article: result
        })
    }).catch((err) => {
        res.json({
            message: 'error saving article',
            error: err
        })
    })
});

//create article page
router.get('/create_article', (req, res) => {
    res.render(__dirname +'/views/create/create_article.ejs')
});

//get all articles
router.get('/', (req, res) => {
    Article.find({}, (err, articles) => {
        if (err) return console.error(err);
        else{
            res.json(articles);
        }
    });
});

// export router
module.exports = router;