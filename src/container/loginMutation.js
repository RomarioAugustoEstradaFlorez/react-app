import React from 'react'
import { Mutation } from 'react-apollo'
import { login } from '../hoc/login'

export const LoginMutation = ({ children }) => {
  return <Mutation mutation={login}>
    {children}
  </Mutation>
}