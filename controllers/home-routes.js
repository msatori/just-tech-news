//set up main homepage route


//no need to use res.sendFile because of handlebars - res.render performs this action. Connect to the page needed to render 
const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

module.exports = router;