'use strict'

var express = require('express');
var router = express.Router();

module.exports = function (app) {
  app.use('/portfolio', require('./routes/portfolio'));
}

/* GET home page. */
router.get('/', function (req, res, next) {
  var context = {
    home: ' class="active"'
  };
  res.render('home', context);
});

router.get('/resume', function (req, res, next) {
  var context = {
    resume: ' class="active"'
  };
	res.render('resume', context);
});

router.get('/about', function (req, res, next) {
  var context = {
    about: ' class="active"'
  };
  res.render('about', context);
});

router.get('/contact', function (req, res, next) {
  var context = {
    contact: ' class="active"'
  };
  res.render('contact', context);
});

module.exports = router;
