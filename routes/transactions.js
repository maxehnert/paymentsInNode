var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Transaction = require('../models/transaction.js');

/* GET /transactions listing. */
router.get('/', function(req, res, next) {

  Transaction.find(function (err, transactionsArray) {
    if(err){console.log(err)}
    else {
      res.render('transactions', { pageTitle: 'Transaction History', transactions: transactionsArray});
    }
    // res.json(transactions);
  });


});

/* POST /transactions */
router.post('/', function(req, res, next) {

  var newTransaction = new Transaction(req.body)

    .save(function(err, body ) {
      if(err) {
        console.log(err);
      }
      else {
        console.log(newTransaction);
        //res.redirect('success');

      }
    });
    next();
}, function (req, res) {
  res.redirect('success');
});

// /* GET /transactions/id */
// router.get('/:id', function(req, res, next) {
//   Transaction.findById(req.params.id, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });
//
//
// /* PUT /transactions/:id */
// router.put('/:id', function(req, res, next) {
//   Transaction.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });
//
//
// /* DELETE /transactions/:id */
// router.delete('/:id', function(req, res, next) {
//   Transaction.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

module.exports = router;
