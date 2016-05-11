'use strict'

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  var context = {
    title: 'Everything You Need to Know About Matthew Ailes',
    about: ' class="active"',
    section: [
      { header: 'The Basics',
        image: '/images/resized/kylo_me.jpg',
        alt: 'Kylo Me',
        description: 'I\'m a guy of many interests these days. I am a lover of music, soccer, my growing guitar collection, video games, programming, and computers. I fell in love with computers and the interenet the day my mom first hooked up our computer to dial-up. Since then computers have been a continuing hobby of mine. Until a few years ago though it never really occured to me to turn it into a career. When I\'m not doing school work or working on my programming, I can be found listening to any number of music genres, playing my guitar, watching soccer (COYS!), or playing some video game.'
      },
      { header: 'My Love of Music',
        image: '/images/resized/lcfc.jpg',
        alt: 'LCFC',
        description: 'These days I can be found listening to any number of genres, but I always find myself returning to the favorites in Indie Rock, Post-Hardcore, Blues Rock, and Rap. While my tastes and favorite bands can change on a months notice, my current (that I highly recommend) are as follows, and in no particular order: Los Campesinos!, Run the Jewels, These Arms Are Snakes, Arctic Monkeys, The Black Keys, Jimi Hendrix, Rage Against the Machine, and Radiohead. Feel free to add me on my Last.fm profile or just check it out, link is on the top of the page.'
      }
    ]
  };
  res.render('about', context);
});

module.exports = router;
