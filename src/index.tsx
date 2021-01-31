import React from 'react'
import { render } from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import App from './components/App/App'

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache({ addTypename: false }),
})

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app-root'),
)
