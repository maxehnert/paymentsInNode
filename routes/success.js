var express = require('express');
var mongoose = require('mongoose');
var Transaction = require('../models/transaction.js');

var router = express.Router();

/* GET Newest Record */
router.get('/', function(req, res) {
  Transaction.find(function (err, data) {
    if(err) {
      console.log(err);
      }
    else {
     res.render('success', { pageTitle: 'Send Money', data: data});
    }
  }).sort({"updated_at": -1}).limit(1);

});

module.exports = router;
