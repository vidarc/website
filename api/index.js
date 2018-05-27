import { https } from 'firebase-functions'
import setup from './setup'
import graphql from './graphql'

const server = setup()
const api = graphql()

exports.app = https.onRequest(server)

exports.api = https.onRequest(api)
