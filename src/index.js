/* @flow */

import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import configureStore from './client/store/configureStore'
import App from './client/App'
import './client/style/main.css'
import './client/style/semantic/semantic.min.css'

const client = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache(),
})

const store = configureStore()

function render(Component) {
  hydrate(
    <Provider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </ApolloProvider>
    </Provider>,
    document.getElementById('root'),
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./client/App', () => {
    const Next = import('./client/App')
    render(Next)
  })
}
