// @flow

import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import serviceWorker from './serviceWorker'
import './style/main.css'
import './style/semantic/semantic.min.css'

const appStore = createStore(App)

function render(Component, store) {
  hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
  )
  serviceWorker()
}

render(App, appStore)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const Next = require('./components/App').default
    render(Next, appStore)
  })
}
