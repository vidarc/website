import { gql, makeExecutableSchema } from 'apollo-server-cloud-functions'
import merge from 'lodash.merge'

import { EmployeeTypeDef, employeeResolvers } from './Employee'

const Query = gql`
  type Query {
    _empty: String
  }
`

const resolvers = {}

const licosSchema = makeExecutableSchema({
  typeDefs: [Query, EmployeeTypeDef],
  resolvers: merge(resolvers, employeeResolvers),
})

export default licosSchema
