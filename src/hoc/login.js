import { gql } from 'apollo-boost' // thi is to understand the syntax graphql in asimple string

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login (input: $input)
  }
`
export const login = LOGIN