import * as React from 'react'

import { Provider } from 'react-redux'
import { render } from 'react-dom'

import App from './components/App'
import configureStore from './ducks'

const store = configureStore()

function renderApp(Component) {
  render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root'),
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const Next = import('./components/App')
    renderApp(Next)
  })
}
