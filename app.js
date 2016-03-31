var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');
var shortID = require('shortid');
var compression = require('compression');

var app = express();

// disable the x-powered-by header
// recommended by express
app.disable('x-powered-by');

// handlebars helpers
var hbs = handlebars.create({
  defaultLayout: 'main',
  helpers: {
    // simple helper to make an unordered list
    // array is passed as argument in handlebars
    list: function (items, options) {
      var out = "<ul>";
      for(var i=0, l=items.length; i<l; i++) {
        out = out + "<li>" + options.fn(items[i]) + "</li>";
      }
      return out + "</ul>";
    }
  },
  partialsDir: 'views/partials/'
});

// view engine setup
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('view cache', true);
app.use(compression());
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routing
var router = require('./router')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
