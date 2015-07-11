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
    //res.json(transactionsArray);
    }
  }).sort({"updated_at": -1});
});

/* POST /transactions */
router.post('/', function(req, res, next) {

  var newTransaction = new Transaction(req.body).save(

    function(err, body ) {

      if(err) {
        console.log(err);
      } else {
        console.log(newTransaction);
        res.redirect('success');
      }
    });
});

/* DELETE /:id item to Delete */
router.delete('/:id', function(req, res) {
  Transaction.findByIdAndRemove(req.params.id, req.body, function (err) {
    if(err) {
      console.log(err);
    }
    // this is temporary
    // was getting pending status without sending back something
    res.send('');
  }).update();
});

module.exports = router;
