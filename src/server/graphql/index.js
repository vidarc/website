import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { mergeSchemas } from 'graphql-tools'

import logger from './../logger'
import starwarsSchema from './starwars'

const graphql = () => {
  const server = express()

  logger.info('setting up graphql server')

  server.use(compression())

  const schema = mergeSchemas({ schemas: [starwarsSchema] })

  // The GraphQL endpoint
  server.use('/graphql', bodyParser.json(), graphqlExpress({ schema, tracing: true }))

  // GraphiQL, a visual editor for queries
  server.use('/graphiql', graphiqlExpress({ endpointURL: 'graphql' }))

  return server
}

export default graphql
