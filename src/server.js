import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import colors from 'colors'
import mongodb from 'mongodb'
import assert from 'assert'
import path from 'path'
import compression from 'compression'
import fs from 'fs'
import handlebars from 'handlebars'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import App from './components/app/App'

const server = express()

server.set('port', process.env.PORT || 3000)
server.use(compression())
server.use(express.static(path.resolve(__dirname + '/'), {
  index: false
}))
server.use(logger('dev'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

let db
const mongoClient = mongodb.MongoClient
mongoClient.connect('mongodb://localhost:27017/website', (err, database) => {
  if (err) {
    console.log('unable to connect to the database')
  }
  else {
    db = database
  }
})

server.get('/art/images', (req, res) => {
  db.collection('art_images').aggregate([
    { $match: { 'Is Public Domain': 'True' } },
    { $sample: { size: 50 } },
    { $project: {
      'department': '$Department',
      'title': '$Title',
      'artist': '$Artist Display Name',
      'artist_bio': '$Artist Display Bio',
      'date': '$Object Date',
      'medium': '$Medium'
    } }
  ]).toArray((err, result) => {
    res.json(result)
  })
})

const routes = [
  '',
  '/about',
  '/admin',
  '/blog',
  '/contact',
  '/login',
  '/projects',
  '/projects/art',
  '/resume'
]

server.get('*', function (req, res) {
  const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null)

  if (!match) {
    res.send('page not found')
    return
  }

  fs.readFile(path.resolve(__dirname, 'index.html'), 'utf8', (err, htmlData) => {
    let reactApp = renderToString(
      <StaticRouter context={{}} location={req.url}>
        <App />
      </StaticRouter>
    )
    let context = { body: reactApp }
    let template = handlebars.compile(htmlData)
    res.send(template(context))
  })
})

const serverConfig = server.listen(server.get('port'), function () {
  const host = serverConfig.address().address
  const port = serverConfig.address().port
  const message = 'Express server running at: ' + host + ' on port ' + port

  console.log(message.red.underline)
})
