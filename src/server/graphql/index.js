import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'

import logger from './../logger'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

const graphql = () => {
  const server = express()

  logger.info('setting up graphql server')

  server.use(compression())

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  })

  // The GraphQL endpoint
  server.use('/graphql', bodyParser.json(), graphqlExpress({ schema, tracing: true }))

  // GraphiQL, a visual editor for queries
  server.use('/graphiql', graphiqlExpress({ endpointURL: 'graphql' }))

  return server
}

export default graphql
