const functions = require('firebase-functions')
const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')

const renderer = require('./build/renderer.bundle.js').default

const server = express()

server.use(compression())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))

server.get('*', (request, response) => {
  renderer(request, response)
})

exports.server = functions.https.onRequest(server)
