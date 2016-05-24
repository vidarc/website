'use strict'

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  var context = {
    title: 'Matthew Ailes\' Resume',
    resume: ' class="active"',
    content: {
      college: [
        { name: 'Oregon State University',
          date: '2016',
          degree: 'Bachelor of Science -- Computer Science',
          gpa: '3.0'
        },
        { name: 'Virginia Commonwealth University',
          date: '2013',
          degree: 'Bachelor of Arts -- Political Science'
        }
      ],
      skills: [
        { name: 'HTML5 / CSS3',
          level: '90'
        },
        { name: 'JavaScript',
          level: '75'
        },
        { name: 'Node.js',
          level: '50'
        },
        { name: 'Express with Handlebars',
          level: '50'
        },
        { name: 'MySQL',
          level: '50'
        },
        { name: 'C/C++',
          level: '75'
        },
        { name: 'Python',
          level: '20'
        }
      ],
      work: [
        { employer: 'Domino\'s Pizza',
          title: 'Delivery Driver',
          joined: 'January 2007',
          left: 'Current',
          duties: [
            'Deliver food to the customer and take orders in the store.',
            'Help with any complaints or concerns the customers may have.',
            'Keep the store in a clean and efficient manner.',
            'Help the manager with any other type of issues.'
          ]
        }
      ]
    }
  };
	res.render('resume', context);
});

module.exports = router;
