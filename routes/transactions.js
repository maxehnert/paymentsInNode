var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Transaction = require('../models/transaction.js');

/* GET /transactions listing. */
router.get('/', function(req, res, next) {

  Transaction.find( function(err, transactionsArray) {

    if(err) {
      console.log(err);
    } else {
      res.render('transactions', { pageTitle: 'Transaction History', transactions: transactionsArray });
    }
  }).sort({"updated_at": -1});
});

/* POST /transactions */
router.post('/', function(req, res, next) {

//  var newTransaction = new Transaction(req.body).save(
    var newTransaction = new Transaction(req.body).insert(

    function(err, body ) {

      if(err) {
        console.log(err);
      } else {
        console.log(newTransaction);
        res.redirect('success');
      }
    });
});

module.exports = router;
