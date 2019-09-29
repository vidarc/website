/* eslint-disable import/first */
import * as functions from 'firebase-functions'
import admin from 'firebase-admin'

admin.initializeApp()

import graphql from './graphql'
import weatherApi from './weather'
import { onCreate, onDelete } from './user'

export const api = functions.https.onRequest((req, res) => {
  const graphqlServer = graphql()
  graphqlServer(req, res)
})

export const weather = functions.https.onRequest(weatherApi)

export const onUserCreation = functions.auth.user().onCreate(onCreate)
export const onUserDeletion = functions.auth.user().onDelete(onDelete)
