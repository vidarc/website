import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import colors from 'colors'
import path from 'path'
import compression from 'compression'
import fs from 'fs'
import handlebars from 'handlebars'
import dotenv from 'dotenv'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import App from './components/App'

dotenv.config()

const server = express()

server.set('port', process.env.PORT || 3000)
server.use(compression())
server.use(express.static(path.resolve(`${__dirname}/`), { index: false }))
server.use(logger('dev'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))

/** **********************************************
 * Server routing using React Router server side *
 * rendering.                                    *
 *********************************************** */
const routes = ['']
const staticRouter = url => (
  <StaticRouter context={{}} location={url}>
    <App />
  </StaticRouter>
)

server.get('*', (req, res) => {
  const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null)

  if (!match) {
    res.send('page not found')
    return
  }

  fs.readFile(path.resolve(__dirname, 'index.html'), 'utf8', (err, htmlData) => {
    const reactApp = renderToString(staticRouter(req.url))
    const context = { body: reactApp }
    const template = handlebars.compile(htmlData)
    res.send(template(context))
  })
})

const serverConfig = server.listen(server.get('port'), () => {
  const { host, port } = serverConfig.address()
  const message = `Express server running at: ${host} on port ${port}`

  console.log(message.red.underline)
})
