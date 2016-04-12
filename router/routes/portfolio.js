'use strict';

var express = require('express');
var request = require('request');
var secret = require('../../modules/secret.js');
var router = express.Router();

router.get('/', function (req, res, next) {
  var context = {
    title: 'Matthew Ailes\' Portfolio',
    portfolio: ' active',
    sections: {
      javascript: {
        name: 'JavaScript',
        projects: [
          { name: 'Placeholder',
            link: '/#',
            image: '/images/placeholder.jpg',
            description: 'Bacon ipsum dolor amet short loin t-bone venison jowl pancetta pork boudin ham strip steak. Pork loin ground round frankfurter porchetta shankle tongue. Pork alcatra sirloin, frankfurter tongue meatloaf jerky corned beef. Pork belly turkey pig, capicola pancetta beef ribs ground round tongue shankle drumstick filet mignon picanha.'
          },
          { name: 'Placeholder',
            link: '/#',
            image: '/images/placeholder.jpg',
            description: 'Bacon ipsum dolor amet short loin t-bone venison jowl pancetta pork boudin ham strip steak. Pork loin ground round frankfurter porchetta shankle tongue. Pork alcatra sirloin, frankfurter tongue meatloaf jerky corned beef. Pork belly turkey pig, capicola pancetta beef ribs ground round tongue shankle drumstick filet mignon picanha.'
          },
        ]
      },
      node: {
        name: 'NodeJS',
        projects: [
          { name: 'My Website',
            link: 'https://github.com/vidarc/Website',
            image: '/images/portfolio/website.png',
            description: 'All the code for this here website. Feel free to take a look and let me know what is good and/or bad.'
          },
          { name: 'Steam API',
            link: '/portfolio/steam',
            image: '/images/portfolio/steam.jpg',
            description: 'A page that will allow you to search for all types of information from the <a href="http://www.steampowered.com/">Steam</a> service using their handy API.'
          }
        ]
      },
      cpp: {
        name: 'C/C++',
        projects: [
          { name: 'Library CLI',
            link: 'https://github.com/vidarc/Library',
            image: '/images/portfolio/library.png',
            description: 'A CLI for a library. Allows you to add/remove members and books, checkout and return books, pay fines, and save/load a database written to a file.'
          },
          { name: 'Max Sub-Array',
            link: 'https://github.com/vidarc/Max-Subarray',
            image: '/images/placeholder.jpg',
            description: 'A quick program that shows off 4 algorithms in which to solve the max sub-array problem. USed in my algorithms class to show the various run times of the algorithms.'
          }
        ]
      }
    }
  };

	res.render('portfolio', context);
});

router.route('/steam')
  // get route for steam
  // default showing of the information (blank stuff)
  .get(function (req, res, next) {
    var context = {
      title: 'Steam API Search'
    };

    res.render('portfolio_views/steam', context);
  })

  // post route
  // will take a search term passed in and search the Steam API for it
  // then display information
  .post(function (req, res, next) {
    var context = {};
    var options = {};
    var base = 'http://api.steampowered.com/';
    var getID = 'ISteamUser/ResolveVanityURL/v1/';
    var steamID = 'ISteamUser/GetPlayerSummaries/v0002/';

    // get the search term we are looking for. either steamid or vanityurl string
    var search = req.body.searchTerm;
    // next get the type. should be either number or vanity
    var type = req.body.searchType;

    // check to see which one we want searched
    // then set the options correctly for the search
    if (type == 'number') {
      var options = {
        url: base + steamID + '?key=' + secret.steam + '&steamids=' + search
      }
      request(options, callbackOne);
    }
    else if (type == 'vanity') {
      var options = {
        url: base + getID + '?key=' + secret.steam + '&vanityurl=' + search
      }
      request(options, callbackTwo);
    }

    // first API call that is the easiest to do
    // searches with the SteamID and returns info about the user
    // then renders up the page
    function callbackOne (error, response, body) {
      if (!error && response.statusCode < 400) {
        context = JSON.parse(body);
        context.title = 'The results for: ' + search;
        res.render('portfolio_views/steam', context);
      }
      else {
        if (response) {
          console.log(response.statusCode);
        }
        next(error);
      }
    }

    // this API call gets us the SteamID of the vanityURL name
    // Steam doesn't have an easier way to do this
    function callbackTwo (error, response, body) {
      if (!error && response.statusCode < 400) {
        context = JSON.parse(body);
        search = context.response.steamid;
        var options = {
          url: base + steamID + '?key=' + secret.steam + '&steamids=' + search
        }
        request(options, callbackOne);
      }
      else {
        if (response) {
          console.log(response.statusCode);
        }
        next(error);
      }
    }
  });

module.exports = router;
