import React from 'react'

import typography from '@mattailes/typography'
import { defineCustomElements } from '@mattailes/ui/dist/loader'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { hydrate, render } from 'react-dom'
import { Provider } from 'react-redux'

import '@mattailes/ui/www/build/mattailes.css'

import App from './components/App'
import { configureStore, rootSaga, sagaMiddleware } from './ducks'

const store = configureStore()
sagaMiddleware.run(rootSaga)
const client = new ApolloClient({
  uri: 'https://us-central1-server-b6f04.cloudfunctions.net/api/graphql',
})

typography.injectStyles()

function initApp(Component: any, element: HTMLElement) {
  if (element.hasChildNodes()) {
    renderApp(Component, element, hydrate)
  } else {
    renderApp(Component, element, render)
  }

  defineCustomElements(window)
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
