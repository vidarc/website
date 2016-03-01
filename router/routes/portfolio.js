'use strict'

var express = require('express');
var router = express.Router();

router.get('/portfolio', function (req, res, next) {
  var context = {
    portfolio: ' active'
  };
	res.render('portfolio', context);
});

module.exports = router;
