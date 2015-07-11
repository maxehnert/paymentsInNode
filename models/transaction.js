var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var transactionsSchema = Schema({
  email: String,
  amount: String,
  currencySymbol: String,
  service: String,
  message: String,
  updated_at: { type: Date, default: Date.now }
});

transactionsSchema.methods.dateString = function() {
  var date = moment(this.updated_at).format('MM/DD/YYYY');

  return date;
};

var Transaction = mongoose.model('Transactions', transactionsSchema);

module.exports = Transaction;
