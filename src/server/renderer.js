import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import fs from 'fs'
import path from 'path'

import App from '../client/components/App'

/** **********************************************
 * Server routing using React Router server side *
 * rendering.                                    *
 *********************************************** */
const routes = ['']
const staticRouter = url => (
  <StaticRouter context={{}} location={url}>
    <App />
  </StaticRouter>
)

export default (req, res) => {
  const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null)

  if (!match) {
    res.send('page not found')
    return
  }

  fs.readFile(path.resolve(__dirname, 'index.html'), 'utf8', (err, htmlData) => {
    const reactApp = renderToString(staticRouter(req.url))

    res.send(htmlData.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`))
  })
}
