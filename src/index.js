// @flow

import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './client/store/configureStore'
import App from './client/components/App'
import './client/style/main.css'
import './client/style/semantic/semantic.min.css'

const store = configureStore()

function render(Component) {
  hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./client/components/App', () => {
    const Next = require('./client/components/App').default
    render(Next)
  })
}
