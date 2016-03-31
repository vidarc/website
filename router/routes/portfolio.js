'use strict'

var express = require('express');
var request = require('request');
var secret = require('./secret.js');
var router = express.Router();

router.get('/', function (req, res, next) {
  var context = {
    portfolio: ' active',
    js: [
      {
        name: 'Placeholder',
        link: '/#',
        image: '/images/placeholder.jpg',
        description: 'Bacon ipsum dolor amet veniam beef brisket, shoulder pig adipisicing labore hamburger officia ea cow ball tip short ribs nisi. Doner sint consequat ullamco ribeye nulla ut andouille eiusmod in aliquip in alcatra ground round.'
      },
      {
        name: 'Placeholder',
        link: '/#',
        image: '/images/placeholder.jpg',
        description: 'Bacon ipsum dolor amet veniam beef brisket, shoulder pig adipisicing labore hamburger officia ea cow ball tip short ribs nisi. Doner sint consequat ullamco ribeye nulla ut andouille eiusmod in aliquip in alcatra ground round.'
      }
    ],
    node: [
      {
        name: 'Album Releases',
        link: '/portfolio/steam',
        image: '/images/placeholder.jpg',
        description: 'A page that will allow you to search for all types of information from the <a href="http://www.steampowered.com/">Steam</a> service using their handy API.'
      }
    ]
  };
	res.render('portfolio', context);
});

router.get('/steam', function (req, res, next) {
  var context = {};
  var base = 'http://api.steampowered.com/';
  var getID = 'ISteamUser/ResolveVanityURL/v1/'

  var options = {
    url: base + getID + '?key=' + secret.steam + "&vanityurl=vidarc",
  };

  function callback (error, response, body) {
    if (!error && response.statusCode < 400) {
      context = JSON.parse(body);
      res.render('portfolio_views/steam', context);
    }
    else {
      if (response) {
        console.log(response.statusCode);
      }
      next(error);
    }
  }

  request(options, callback);
});

module.exports = router;
