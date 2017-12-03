// @flow

import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './components/App'
import './style/main.css'
import './style/semantic/semantic.min.css'

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
  module.hot.accept('./components/App', () => {
    const Next = require('./components/App').default
    render(Next)
  })
}
