var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.sendFile('home', { title: 'words' });
});

module.exports = router;
