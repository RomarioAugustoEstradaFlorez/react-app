import React from 'react'
import { Mutation } from 'react-apollo'
import { signUp } from '../hoc/signUp'

export const RegisterMutation = ({ children }) => {
  return <Mutation mutation={signUp}>
    {children}
  </Mutation>
}