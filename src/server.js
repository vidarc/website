import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import colors from 'colors'
import mongoClient from 'mongodb'
import assert from 'assert'
import path from 'path'
import compression from 'compression'
import fs from 'fs'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import App from './components/app/App'

const server = express()

server.set('port', process.env.PORT || 3000)
server.use(compression())
server.use(express.static(__dirname + '/'))
server.use(logger('dev'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))

// // Mongo connection
// const mongoURL = 'mongodb://localhost/website'
//
// MongoClient.connect(mongoURL, function(err, db) {
//   assert.equal(null, err)
//   console.log("connected to the mongo server")
//
//   db.close
// })

const routes = [
  '',
  '/about',
  '/admin',
  '/blog',
  '/contact',
  '/login',
  '/playground',
  '/playground/art',
  '/resume'
]

server.get('*', function (req, res) {
  const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null)

  if (!match) {
    res.send('page not found')
    return
  }

  fs.readFile(path.resolve(__dirname, 'index.html'), 'utf8', (err, htmlData) => {
    let markup = renderToString(
      <StaticRouter context={{}} location={req.url}>
        <App />
      </StaticRouter>
    )

    let renderedPage = htmlData.replace('`', markup)

    res.send(renderedPage)
  })
})

const serverConfig = server.listen(server.get('port'), function () {
  const host = serverConfig.address().address
  const port = serverConfig.address().port
  const message = 'Express server running at: ' + host + ' on port ' + port

  console.log(message.red.underline)
})
