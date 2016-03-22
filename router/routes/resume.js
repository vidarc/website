'use strict'

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  var context = {
    resume: ' class="active"',
    content: {
      name: 'Matthew Ailes',
      address: '103 S Boulevard #2, Richmond, VA 23220',
      phone: '804-836-4208',
      email: 'mattailes@gmail.com',
      college: [
        { name: 'Oregon State University',
          date: '2016',
          degree: 'Bachelor of Science -- Computer Science',
          gpa: '3.0'},
        { name: 'Virginia Commonwealth University',
          date: '2013',
          degree: 'Bachelor of Arts -- Political Science'}
      ],
      skills: [
        { name: 'HTML5 / CSS3',
          level: '90'},
        { name: 'JavaScript',
          level: '75'}
      ],
      work: [
        { employer: 'Domino\'s Pizza',
          title: 'Delivery Driver',
          joined: 'January 2007',
          left: 'Current',
          }
      ]
    }
  };
	res.render('resume', context);
});

module.exports = router;
