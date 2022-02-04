//use router from express then export the router
const router = require('express').Router();

router.get('/', (req , res) => {
    res.render(__dirname +'/views/white/404.ejs')
  });
  
module.exports = router;
  

