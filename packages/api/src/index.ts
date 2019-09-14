import * as functions from 'firebase-functions'
import graphql from './graphql'
import weatherApi from './weather'

const graphqlServer = graphql()

export const api = functions.https.onRequest(graphqlServer)

export const weather = functions.https.onRequest(weatherApi)
