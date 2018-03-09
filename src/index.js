/* @flow */

import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Loadable from 'react-loadable'

import configureStore from './client/store/configureStore'
import App from './client/App'
import './client/style/main.css'
import './client/style/semantic/semantic.min.css'

const store = configureStore()

function render(Component) {
  Loadable.preloadReady().then(() => {
    hydrate(
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>,
      document.getElementById('root'),
    )
  })
}

render(App)

if (module.hot) {
  module.hot.accept('./client/App', () => {
    const Next = import('./client/App')
    render(Next)
  })
}
