'use strict'

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var context = {
    home: 'class="active"',
    portfolio: '',
    resume: '',
    about: '',
    contact: ''
  };
  res.render('home', context);
});

router.get('/portfolio', function (req, res, next) {
  var context = {
    home: '',
    portfolio: 'class="active"',
    resume: '',
    about: '',
    contact: ''
  };
	res.render('portfolio', context);
});

router.get('/resume', function (req, res, next) {
  var context = {
    home: '',
    portfolio: '',
    resume: 'class="active"',
    about: '',
    contact: ''
  };
	res.render('resume', context);
});

router.get('/about', function (req, res, next) {
  var context = {
    home: '',
    portfolio: '',
    resume: '',
    about: 'class="active"',
    contact: ''
  };
  res.render('about', context);
});

router.get('/contact', function (req, res, next) {
  var context = {
    home: '',
    portfolio: '',
    resume: '',
    about: '',
    contact: 'class="active"'
  };
  res.render('contact', context);
});

module.exports = router;
