import { https } from 'firebase-functions'
import graphql from './graphql'

const graphqlServer = graphql()

// eslint-disable-next-line
export const api = https.onRequest(graphqlServer)
