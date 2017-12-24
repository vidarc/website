import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import compression from 'compression'
import fs from 'fs'
import handlebars from 'handlebars'
import dotenv from 'dotenv'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'

import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import schema from './schema'
import connectMongo from './connectors/mongo'

import App from '../client/components/App'
import logger from './logger'
import { authenticate } from './authentication'

dotenv.config()

const start = async () => {
  const mongo = await connectMongo()
  const server = express()

  server.set('port', process.env.PORT || 3000)
  server.use(compression())
  server.use(express.static(path.resolve(`${__dirname}/`), { index: false }))
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: false }))

  const buildOptions = async (req, res) => {
    const user = await authenticate(req, mongo.Users)
    return {
      context: { mongo, user },
      schema,
    }
  }
  server.use('/graphql', bodyParser.json(), graphqlExpress(buildOptions))
  server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

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
    const { address, port } = serverConfig.address()
    logger.info(`Express server running at: ${address} on port ${port}`)
  })
}

start()
