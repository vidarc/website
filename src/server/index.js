import { https } from 'firebase-functions'
import setup from './setup'

const server = setup()

exports.app = https.onRequest(server)
