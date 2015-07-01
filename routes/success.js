var express = require('express');
var mongoose = require('mongoose');
var Transaction = require('../models/transaction.js');

var router = express.Router();

  router.get('/', function(req, res) {
     res.render('success', {pageTitle: 'Send Money', id: req.params.id });

   /* GET /transactions/id */
  //  router.get('/', function(req, res) {
  //    Transaction.findById(req.params.id, function (err, doc) {
  //      if(err){console.log(err)}
  //      else {
  //        //res.render('success', { pageTitle: 'Send Money', transactions: transactionsArray});
  //        res.json(doc)
  //      }
  //    });
  //  });
});
// router.get('/:id', function(req,res) {
//   res.json(req.params.id );
// })
module.exports = router;
