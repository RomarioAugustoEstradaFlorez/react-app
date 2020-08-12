import React from 'react'
import { Mutation } from 'react-apollo'
import { pushLiked } from '../hoc/pushLiked'

export const ToggleLikeMutation = ({ children }) => {
  return <Mutation mutation={pushLiked}>
    {children}
  </Mutation>
}