var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionsSchema = new Schema({
  email: {type: String, required: true},
  // completed: Boolean,
  amount: {type: Number, required: true},
  // currency: {type: String, required: true},
  // service: {type: String, required: true},
  message: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Transactions', transactionsSchema);
