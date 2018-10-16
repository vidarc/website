import * as React from 'react'

import { Provider } from 'react-redux'
import { render } from 'react-dom'

import App from './App'
import configureStore from './ducks'

const store = configureStore()

function renderApp(Component: React.Node) {
  render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root'),
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const Next = import('./App')
    renderApp(Next)
  })
}
