// import my sql
const mysql = require('mysql');
// setup express server
const express = require('express');
const app = express();
const port = 3000;
//import website router
const router = require(__dirname + '/routes/index');

//set static folder
app.use(express.static(__dirname + '/public'));

//set view engine to ejs
app.set('view engine', 'ejs');

// create webserver with node js
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});