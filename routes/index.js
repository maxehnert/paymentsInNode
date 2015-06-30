var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/', function(req, res) {
//   res.render('index', {title: 'my App', age: '25'});
// });

router.get('/', function(req, res) {
  res.render('choice', {pageTitle: 'What are we Doing?', pageFooter: ''});
});

module.exports = router;
