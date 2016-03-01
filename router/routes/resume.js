'use strict'

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  var context = {
    resume: ' class="active"'
  };
	res.render('resume', context);
});

module.exports = router;
