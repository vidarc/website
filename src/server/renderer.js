import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import { Provider } from 'react-redux'
import fs from 'fs'
import path from 'path'

import App from '../client/App'
import logger from './logger'
import routes from '../client/routes.config'
import configureStore from '../client/store/configureStore'

/** **********************************************
 * Server routing using React Router server side *
 * rendering.                                    *
 *********************************************** */
const store = configureStore()

const staticRouter = url => (
  <Provider store={store}>
    <StaticRouter context={{}} location={url}>
      <App />
    </StaticRouter>
  </Provider>
)

export default (req, res) => {
  const match = routes.reduce((acc, route) => matchPath(req.params[0], route) || acc, null)

  if (!match) {
    logger.error(`404 on route: ${req.params[0]}`)
    res.send('page not found')
    return
  }

  fs.readFile(path.resolve(__dirname, 'index.html'), 'utf8', (err, htmlData) => {
    logger.info(`routing to: ${req.params[0]}`)
    const reactApp = renderToString(staticRouter(req.params[0]))

    res.status(200).send(htmlData.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`))
  })
}
