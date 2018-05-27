// @flow

import React from 'react'
import routeHelper from './utils/routeHelper'
import routes from './routes.config'

const App = () => <div>{routeHelper(routes)}</div>

export default App
