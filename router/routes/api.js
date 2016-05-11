'use strict'

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  var object = {
    name: 'hello!',
    description: 'this is just a test. do not panic'
  }

  res.json(object);
});

module.exports = router;
