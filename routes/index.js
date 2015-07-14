var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('choice', { pageTitle: 'What are we Doing?' });
});

router.get('/about', function(req, res) {
  res.render('about', { pageTitle: 'About This Project' });
});

module.exports = router;
