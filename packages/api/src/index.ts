import { https } from 'firebase-functions'
import graphql from './graphql'
import weatherApi from './weather'

const graphqlServer = graphql()

export const api = https.onRequest(graphqlServer)

export const weather = https.onRequest(weatherApi)
