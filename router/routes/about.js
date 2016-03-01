'use strict'

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  var context = {
    about: ' class="active"'
  };
  res.render('about', context);
});

module.exports = router;
