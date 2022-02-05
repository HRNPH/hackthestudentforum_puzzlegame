//use router from express then export the router
const router = require('express').Router();

router.get('/', (req , res) => {
    res.render(__dirname +'/views/white/index.ejs')
  });

router.get('/article:id', (req , res) => {
    res.render(__dirname +'/views/white/article.ejs',{id:req.params.id})
  });
module.exports = router;
  

