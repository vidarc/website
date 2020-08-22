import { gql } from 'apollo-server-cloud-functions'

import { getOne } from '../helpers'

export const EmployeeTypeDef = gql`
  extend type Query {
    getEmployee(id: String): Employee
  }

  type Employee {
    name: String
    position: String
    reportsTo: String
    directReports: [Employee]
  }
`

export const employeeResolvers = {
  Query: {
    getEmployee: (_: any, { id }: { id: string }) => getOne('licos', id),
  },
}
