import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import compression from 'compression'
import dotenv from 'dotenv'

import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import schema from './schema'
import connectMongo from './connectors/mongo'

import renderer from './renderer'
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
  server.use('*', renderer)

  const serverConfig = server.listen(server.get('port'), () => {
    const { address, port } = serverConfig.address()
    logger.info(`Express server running at: ${address} on port ${port}`)
  })
}

start()
