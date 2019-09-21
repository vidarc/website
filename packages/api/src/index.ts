import * as functions from 'firebase-functions'
import admin from 'firebase-admin'
import graphql from './graphql'
import weatherApi from './weather'

admin.initializeApp()

export const api = functions.https.onRequest((req, res) => {
  const graphqlServer = graphql()
  graphqlServer(req, res)
})

export const weather = functions.https.onRequest(weatherApi)
