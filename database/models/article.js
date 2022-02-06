//import mongoose
const mongoose = require('mongoose');

//create article model with mongoose
const Article = mongoose.model('Article', {
    title: {type: String, required: true},
    author: {type: String, required: true},
    description: {type: String, required: true},
    content: {type: String, required: true},
    hidden: {type: Boolean, required: true},

    key: {type: String, required: true},
    secret_title: {type: String, required: true},
    secret_description: {type: String, required: true},
    secret_content: {type: String, required: true},
    
    
    date: {type: Date, required: true},
});

// const newArticle = new Article({
//     title: 'main',
//     author: 'me',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//   });
// newArticle.save();


// You also use a model to create queries:
// const ArticleFromDB = Article.findOne({ name: 'main' },(err, article) => {
//     if (err) return console.error(err);
//     else{
//       console.log(article);
//     }
// });

//export article
module.exports = Article
