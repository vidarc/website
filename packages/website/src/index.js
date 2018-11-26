import * as React from 'react'

import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import ApolloClient from 'apollo-boost'

import App from './components/App'
import configureStore from './ducks'

const store = configureStore()
const client = new ApolloClient({
  uri: 'https://us-central1-server-b6f04.cloudfunctions.net/api/graphql',
})

function renderApp(Component) {
  render(
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component />
      </Provider>
    </ApolloProvider>,
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
