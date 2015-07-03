var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Transaction = require('../models/transaction.js');

/* GET /transactions listing. */
router.get('/', function(req, res, next) {

  // Working on trying to implement a true infinite scroll

  // var lastSeen = null;
  //
  // Transaction.find({ "updated_at": { "$gt": lastSeen }})
  //   .sort({ "updated_at": -1 })
  //   .limit(5)
  //   .exec(function(err, transactionsArray) {
  //       lastSeen = transactionsArray.slice(-1).updated_at;
  //       res.render('transactions', { pageTitle: 'Transaction History', transactions: transactionsArray});
  //   });


  Transaction.find(function (err, transactionsArray) {
    if(err) {
      console.log(err);
    }
    else {
      res.render('transactions', { pageTitle: 'Transaction History', transactions: transactionsArray});
    }
    // res.json(transactions);
  }).sort({"updated_at": -1});
});

/* POST /transactions */
router.post('/', function(req, res, next) {

  var newTransaction = new Transaction(req.body).save(
    function(err, body ) {
      if(err) {
        console.log(err);
      }
      else {
        console.log(newTransaction);
        res.redirect('success');
      }
    });
});

module.exports = router;
