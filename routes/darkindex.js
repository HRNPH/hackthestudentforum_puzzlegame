//use router from express then export the router
const router = require('express').Router();

router.get('/index/main', (req , res) => {
    res.render(__dirname +'/views/dark/index.ejs')
  });

router.get('/article/:id', (req , res) => {
    res.render(__dirname +'/views/dark/article.ejs',{id:req.params.id})
  });

module.exports = router;