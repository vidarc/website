import { ApolloServer, mergeSchemas } from 'apollo-server-express'

import express from 'express'

import logger from '../logger'
import starwarsSchema from './starwars'

const graphql = () => {
  logger.info('setting up graphql server')

  const app = express()

  const schema = mergeSchemas({ schemas: [starwarsSchema] })

  const server = new ApolloServer({ schema })
  server.applyMiddleware({
    app
  })

  return app
}

export default graphql
