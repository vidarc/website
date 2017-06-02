// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import serviceWorker from './serviceWorker'
import './style/main.css'
import './style/semantic/semantic.min.css'

function render(Component) {
  ReactDOM.render((
    <BrowserRouter>
      <Component />
    </BrowserRouter>
  ), document.getElementById('root'))
  serviceWorker()
}

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const Next = require('./components/App').default
    render(Next)
  })
}
