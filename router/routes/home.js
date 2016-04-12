'use strict'

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  var context = {
    title: 'Matthew Ailes -- Programmer for Hire',
    home: ' class="active"'
  };
  res.render('home', context);
});

module.exports = router;
