var express = require('express');
// var mongoose = require('mongoose');
// var Transactions = require('../models/transactions.js');

var router = express.Router();

router.get('/', function(req, res) {
   res.render('success', {pageTitle: 'Send Money'});

  // Transactions.find(function (err, transactions) {
  //   if (err) return next(err);
  //   res.render('success', {pageTitle: 'Send Money'}, function(err, transactions) {
  //     res.set(transactions);
  //   })
  //   //res.json(transactions);
  // });

});

module.exports = router;
