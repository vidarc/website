import * as functions from 'firebase-functions'
import admin from 'firebase-admin'

import graphql from './graphql'
import weatherApi from './weather'
import { onCreate, onDelete } from './user'
import generateThumbnail from './images'

admin.initializeApp()

export const api = functions.https.onRequest(graphql)

export const weather = functions.https.onRequest(weatherApi)

export const onUserCreation = functions.auth.user().onCreate(onCreate)
export const onUserDeletion = functions.auth.user().onDelete(onDelete)

export const onFinalizeStorage = functions
  .runWith({ memory: '1GB' })
  .storage.object()
  .onFinalize(generateThumbnail)
