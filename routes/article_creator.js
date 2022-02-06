// create article and save in mongodb
//import express router
const router = require('express').Router();
//import db
const db = require('../database/database');
//import db model
const Article = require('../database/models/article');
const User = require('../database/models/user');

const timestamp = new Date();

//create route

//create article
router.post('/create_article/create', (req, res) => {
    //create article
    const article = new Article({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        hidden: req.body.hidden,
        content: req.body.content,
        date: timestamp,

        key: req.body.key,
        secret_title: req.body.secret_title,
        secret_description: req.body.secret_description,
        secret_content: req.body.secret_content,

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
router.post('/create_user/create', (req,res) => {
    
    const user = new User({
        username: req.body.username,
        password: req.body.password,
    })
    //save user
    user.save().then((result) => {
        res.json({
            message: 'user saved',
            user: result
        })
    }).catch((err) => {
        res.json({
            message: 'error saving user',
            error: err
        })
    })
});

//create article page
router.get('/article/:meow', (req, res) => {
    res.render(__dirname +'/views/create/create_article.ejs')
});

// export router
module.exports = router;
