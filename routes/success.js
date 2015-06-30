var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('success', {pageTitle: 'Send Money'})
});

module.exports = router;
