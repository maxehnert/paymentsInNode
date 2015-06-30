var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Transactions = require('../models/transactions.js');

/* GET /transactions listing. */
router.get('/', function(req, res, next) {

  // /*Render the view and HBS */
  // res.render('transactions', {pageTitle: 'Transaction History'});

  Transactions.find(function (err, transactions) {
    if (err) return next(err);
    res.json(transactions);
  });


});

/* POST /transactions */
router.post('/', function(req, res, next) {
  // Transactions.create(req.body, function (err, post) {
  //   if (err) return next(err);
  //   res.json(post);
  // });

  new Transactions({email : req.body.email})
    .save(function(err, comment) {
      console.log(email)
      // res.redirect('success');
    });

  // /* POST form. */
  // router.post('/', function(req, res) {
  //
  //   // The simply saves a new comment, which again is grabbed from the form via req.body.comment
  //   new Comment({title : req.body.comment})
  //   .save(function(err, comment) {
  //     console.log(comment)
  //     res.redirect('form');
  //   });
  // });

  /* Mongoose middlewhere */
  //next();

});

/* GET /transactions/id */
router.get('/:id', function(req, res, next) {
  Transactions.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* PUT /transactions/:id */
router.put('/:id', function(req, res, next) {
  Transactions.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* DELETE /transactions/:id */
router.delete('/:id', function(req, res, next) {
  Transactions.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
