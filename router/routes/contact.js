'use strict'

var express = require('express');
var router = express.Router();
var request = require('request');
var nodemailer = require('nodemailer');
var secrets = require('../../modules/secret.js');

// reusable transporter object for nodemailer
var transporter = nodemailer.createTransport('smtps://mattailes@gmail.com:' + secrets.nodemailer + '@smtp.gmail.com');

router.route('/')
  // default for contact page. nothing much going on
  .get(function (req, res, next) {
    var context = {
      title: 'Contact Matthew Ailes',
      contact: ' class="active"'
    }

    res.render('contact', context);
  })

  // post router for contact
  // process the form information and send it using nodemailer
  // check with google to make sure not a bot
  .post(function (req, res, next) {
    var context = {
      title: 'Contact Matthew Ailes',
      contact: ' class="active"',
      message: ''
    }
    var mailOptions = {
      from: '"My Server" <mattailes@gmail.com>',
      to: 'mattailes@gmail.com',
      subject: 'Email from: ' + req.body.fName + ' ' + req.body.lName,
      text: 'Email: ' + req.body.inEmail + ' Message: ' + req.body.inText
    }
    var formData = {
      secret: secrets.recaptcha,
      response: req.body["g-recaptcha-response"]
    }

    request.post({url:'https://www.google.com/recaptcha/api/siteverify', formData: formData}, function optionalCallback(err, httpResponse, body) {
      if (err) {
        return console.error('upload failed:', err);
      }

      body = JSON.parse(body);

      if (body.success == true) {
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            return console.log(error);
          }
        });
        context.message = 'Message Sent!';
      }
      else if (body.success == false) {
        context.message = 'Captcha error! Please try again.';
      }

      res.render('contact', context);
    })
  });

module.exports = router;
