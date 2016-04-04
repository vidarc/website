'use strict'

var express = require('express');
var request = require('request');
var secret = require('../../lib/secret.js');
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
        name: 'Steam API',
        link: '/portfolio/steam',
        image: '/images/steam.jpg',
        description: 'A page that will allow you to search for all types of information from the <a href="http://www.steampowered.com/">Steam</a> service using their handy API.'
      }
    ],
    cpp: [
      {
        name: 'Library CLI',
        link: 'https://github.com/vidarc/Library',
        image: '/images/library.png',
        description: 'A CLI for a library. Allows you to add/remove members and books, checkout and return books, pay fines, and save/load a database written to a file.'
      },
      {
        name: 'Max Sub-Array',
        link: 'https://github.com/vidarc/Max-Subarray',
        image: '/images/placeholder.jpg',
        description: 'A quick program that shows off 4 algorithms in which to solve the max sub-array problem. USed in my algorithms class to show the various run times of the algorithms.'
      }
    ]
  };
	res.render('portfolio', context);
});

router.route('/steam')
  // get route for steam
  // default showing of the information (blank stuff)
  .get(function (req, res, next) {
    var context = {};
    var base = 'http://api.steampowered.com/';
    var getID = 'ISteamUser/ResolveVanityURL/v1/';

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
  })

  // post route
  // will take a search term passed in and search the Steam API for it
  // then display information
  .post(function (req, res, next) {
    var context = {};
    var base = 'http://api.steampowered.com/';
    var getID = 'ISteamUser/ResolveVanityURL/v1/';

    var vanity = req.body.searchTerm;
    console.log(vanity);

    res.render('portfolio_views/steam', context);
  });

module.exports = router;
