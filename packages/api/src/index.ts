import * as functions from 'firebase-functions'
import graphql from './graphql'
import weatherApi from './weather'

const graphqlServer = graphql()
const weatherCache: Map<string, { timestamp: Date; data: any }> = new Map()

export const api = functions.https.onRequest(graphqlServer)

export const weather = functions.https.onRequest((req, res) => weatherApi(req, res, weatherCache))
