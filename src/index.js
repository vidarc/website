/* @flow */

import React from 'react'
import { hydrate, render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Loadable from 'react-loadable'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import configureStore from './client/store/configureStore'
import App from './client/App'
import './client/style/main.css'
import './client/style/semantic/semantic.min.css'

const store = configureStore()

const apollo = new ApolloClient({ uri: 'https://www.mattailes.net/graphql' })

function renderApp(Component) {
  const renderMethod = module.hot ? render : hydrate

  Loadable.preloadReady().then(() => {
    renderMethod(
      <ApolloProvider client={apollo}>
        <Provider store={store}>
          <BrowserRouter>
            <Component />
          </BrowserRouter>
        </Provider>
      </ApolloProvider>,
      document.getElementById('root'),
    )
  })
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./client/App', () => {
    const Next = import('./client/App')
    renderApp(Next)
  })
}
