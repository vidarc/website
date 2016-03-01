'use strict'

module.exports = function (app) {
  app.use('/', require('./routes/home'));
  app.use('/about', require('./routes/about'));
  app.use('/contact', require('./routes/contact'));
  app.use('/portfolio', require('./routes/portfolio'));
  app.use('/resume', require('./routes/resume'));
};
