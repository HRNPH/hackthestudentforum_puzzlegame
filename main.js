// setup express server
const express = require('express');
const app = express();
const port = 3000;
//import body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//import website router
const index = require(__dirname + '/routes/index');
const darkindex = require(__dirname + '/routes/darkindex');
const article_creator = require(__dirname + '/routes/article_creator');
//import mongooose
const mongoose = require('mongoose');
//get database
const db = require(__dirname + '/database/database');
//get model
const user = require(__dirname + '/database/models/user');
const Article = require(__dirname + '/database/models/article');

//set static folder
app.use(express.static(__dirname + '/public'));

//set view engine to ejs
app.set('view engine', 'ejs');

//set up routes
app.use('/', index);

app.use('/dark', darkindex);

app.use('/create', article_creator);

db.then((result) => {
    // create webserver with node js
    app.listen(port, (err) => {
        if (err){
            console.log(err);
        }
        console.log(`listening on port ${port}`);
    })

});
