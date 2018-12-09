import * as React from 'react'

import { ApolloProvider } from 'react-apollo'
import { hydrate, render } from 'react-dom'
import { Provider } from 'react-redux'

import ApolloClient from 'apollo-boost'

import App from './components/App'
import configureStore from './ducks'

const store = configureStore()
const client = new ApolloClient({
  uri: 'https://us-central1-server-b6f04.cloudfunctions.net/api/graphql',
})

function initApp(Component: any, element: HTMLElement) {
  if (element.hasChildNodes()) {
    renderApp(Component, element, hydrate)
  } else {
    renderApp(Component, element, render)
  }
}

function renderApp(Component: any, element: HTMLElement, renderFunction: any) {
  renderFunction(
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component />
      </Provider>
    </ApolloProvider>,
    element,
  )
}

const rootElement = document.getElementById('root')
initApp(App, rootElement)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const Next = import('./components/App')
    renderApp(Next, rootElement, hydrate)
  })
}
