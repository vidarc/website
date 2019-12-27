import { ApolloServer, mergeSchemas } from 'apollo-server-cloud-functions'
import { config } from 'firebase-functions'

import starwarsSchema from './starwars'

const schema = mergeSchemas({ schemas: [starwarsSchema] })

const server = new ApolloServer({
  schema,
  engine: { apiKey: config().graphql.enginekey },
  tracing: true
})

export default server.createHandler({ cors: { origin: 'https://www.mattailes.net' } })
