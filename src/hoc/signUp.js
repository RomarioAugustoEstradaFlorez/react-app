import { gql } from 'apollo-boost' // thi is to understand the syntax graphql in asimple string

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup (input: $input)
  }
`
export const signUp = REGISTER