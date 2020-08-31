import React from "react";
import ReactDom from "react-dom";

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import Context from './Context'

// Components
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://api-pet.vercel.app/graphql',
  request: ope => {
    const token = sessionStorage.getItem("token");
    const Authorization = token ? `Bearer ${token}` : ""

    ope.setContext({
      headers: {
        Authorization
      }
    })
  },
  onError: error => {
    const { networkError } = error

    if (networkError && networkError.result.code === "invalid_token") {
      window.sessionStorage.removeItem("token")
      window.location.href = "/"
    }
  }
})

ReactDom.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
)

// ReactDom.render(<App />, document.getElementById("app"));
