import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from './ducks'
import App from './App'

const store = configureStore()

function renderApp(Component: React.Node) {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
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
