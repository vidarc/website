import { https } from 'firebase-functions'
import graphql from './graphql'

const graphqlServer = graphql()

export const api = https.onRequest(graphqlServer)
