import { ApolloServer, mergeSchemas } from 'apollo-server-express'
import express from 'express'
import { config } from 'firebase-functions'

import starwarsSchema from './starwars'

const graphql = () => {
  const app = express()

  const schema = mergeSchemas({ schemas: [starwarsSchema] })

  const server = new ApolloServer({ schema, engine: { apiKey: config().graphql.enginekey }, tracing: true })

  server.applyMiddleware({
    app,
    cors: true,
  })

  return app
}

export default graphql
