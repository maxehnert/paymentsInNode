var mongoose = require('mongoose');

describe('My test', function() {
  before(function(done) {
    //Another possibility is to check if mongoose.connection.readyState equals 1
    if (mongoose.connection.db) return done();
    mongoose.connect('mongodb://localhost:27017/paypalExercise', done);
  });
});

// You can put one ‘after()’ statement above all else that will run when all tests are finished
after(function(done){
  db.connection.db.dropDatabase(function(){
    db.connection.close(function(){
      done();
    });
  });
});
