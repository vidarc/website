'use strict'

var express = require('express');
var router = express.Router();

// mongodb example for insertion
var insert = function (db, callback) {
  db.collection('blog').insertOne( {
    "name" : {
      "first" : "Matthew",
      "last" : "Ailes"
    },
    "post" : "Hello, this is a test post",
    "date": new Date()
  }, function (err, result) {
    assert.equal(err, null);
    callback();
  });
};

router.get('/', function (req, res, next) {
  var context = {
    home: ' class="active"'
  };
  res.render('home', context);
});

router.get('/test', function (req, res, next) {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    insert(db, function() {
      db.close();
    });
  });
  res.send('Hopefully it worked!');
});

module.exports = router;
