'use strict'

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  var context = {
    contact: ' class="active"'
  };
  res.render('contact', context);
});

module.exports = router;
