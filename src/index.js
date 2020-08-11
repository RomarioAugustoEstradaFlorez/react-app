import React from "react";
import ReactDom from "react-dom";

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

// Components
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://api-pet.vercel.app/graphql'
})

ReactDom.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
)

// ReactDom.render(<App />, document.getElementById("app"));
