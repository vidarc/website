'use strict'

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var context = {
    nav1: 'class="active"',
    nav2: '',
    nav3: '',
    nav4: '',
    nav5: ''
  };
  res.render('home', context);
});

router.get('/portfolio', function (req, res, next) {
	res.render('portfolio');
});

router.get('/resume', function (req, res, next) {
	res.render('resume');
});

router.get('/about', function (req, res, next) {
  res.render('about');
});

router.get('/contact', function (req, res, next) {
  res.render('contact');
});

module.exports = router;
