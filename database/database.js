//dot env
require('dotenv').config();
//import express router
const router = require('express').Router();

//import mongoose
const mongoose = require('mongoose');

//connect to mongoose localhost
const dburi = `mongodb+srv://mongo:${process.env.mongo_pass}@cluster0.lsa07.mongodb.net/database?retryWrites=true&w=majority`;

module.exports = mongoose.connect(dburi, { useNewUrlParser: true },{useUnifiedTopology: true},(err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connected to mongoose');
    }
});