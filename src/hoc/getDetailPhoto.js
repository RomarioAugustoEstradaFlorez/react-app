import { gql } from 'apollo-boost' // thi is to understand the syntax graphql in asimple string

const GET_DETAIL_PHOTO = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}`

export const getDetailPhoto = GET_DETAIL_PHOTO