var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('choice', { pageTitle: 'What are we Doing?' });
});

module.exports = router;
