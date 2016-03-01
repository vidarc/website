'use strict'

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  var context = {
    home: ' class="active"'
  };
  res.render('home', context);
});

module.exports = router;
