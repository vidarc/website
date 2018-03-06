import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import dotenv from 'dotenv'

import renderer from './renderer'
import logger from './logger'

dotenv.config()

const setup = () => {
  const server = express()

  logger.info('setting up the server')

  server.use(compression())
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: false }))

  server.use('*', renderer)

  return server
}

export default setup
