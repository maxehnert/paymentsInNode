var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/', function(req, res) {
//   res.render('index', {title: 'my App', age: '25'});
// });

// router.get('/', function(req, res) {
//   res.render('sendMoney',  function(err, html) {
//   res.send( {pageTitle: 'Send Money',pageFooter: '<a href="#"><button class="btn">Clear</button></a>
//   <a href="#next"><button class="btn">Next</button></a>'})
//   });
// });
router.get('/', function(req, res) {
  res.render('sendMoney', {pageTitle: 'Send Money',});
});


module.exports = router;
