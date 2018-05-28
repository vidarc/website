import { https } from 'firebase-functions'
import graphql from './graphql'

const api = graphql()

exports.api = https.onRequest(api)
