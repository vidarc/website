'use strict'

module.exports = function (app) {
  app.use('/', require('./routes/home'));
  app.use('/about', require('./routes/about'));
  app.use('/contact', require('./routes/contact'));
  app.use('/portfolio', require('./routes/portfolio'));
  app.use('/resume', require('./routes/resume'));

  // global variables
  var d = new Date();
  app.locals.year = d.getFullYear();

  app.locals.social = [
    {name: 'twitter', link: 'https://twitter.com/mattailes', source: '/images/twitter.png'},
    {name: 'linkedin', link: 'https://www.linkedin.com/in/mattailes', source: '/images/linkedin.png'},
    {name: 'last.fm', link: 'http://www.last.fm/user/vidarc', source:'/images/lastfm.png'},
    {name: 'googleplus', link: 'https://plus.google.com/104160854902939371173', source: '/images/googleplus.png'},
    {name: 'github', link: 'https://github.com/vidarc', source: '/images/github.png'},
    {name: 'facebook', link: 'https://www.facebook.com/mattailes', source: '/images/facebook.png'}
  ]
};
