var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var http = require ('http');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');
var hbs = require('hbs');
var moment = require('moment');

var routes = require('./routes/index');
var transactions = require('./routes/transactions');
var sendMoney = require('./routes/sendMoney');
var success = require('./routes/success');

/*
mongoose.connect('mongodb://localhost:27017/paypalExercise', function(err) {
  if(err) {
      console.log('connection error', err);
  } else {
      console.log('connection successful');
  }
});
*/

var uri = process.env.MONGOLAB_URI ||
          process.env.MONGOHQ_URL ||
          'mongodb://localhost/HelloMongoose';

mongoose.connect(uri, { server: { auto_reconnect: true } }, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uri + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uri);
  }
});


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
// brought in local bootstrap and jquery so I can work offline
// app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/', routes);
app.use('/send', sendMoney);
app.use('/send', transactions);
app.use('/success', success);
app.use('/transactions', transactions);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
/*
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
*/

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
