import { ApolloServer, mergeSchemas } from 'apollo-server-express'
import express from 'express'

import starwarsSchema from './starwars'

const graphql = () => {
  const app = express()

  const schema = mergeSchemas({ schemas: [starwarsSchema] })

  const server = new ApolloServer({ schema })
  server.applyMiddleware({
    app
  })

  return app
}

export default graphql
