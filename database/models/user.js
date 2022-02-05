//import mongoose
const mongoose = require('mongoose');


//create database model
//create user model with mongoose
const User = new mongoose.model('User', {
    username: {type: String, required: true},
    password: {type: Number, required: true},
});

module.exports = User
