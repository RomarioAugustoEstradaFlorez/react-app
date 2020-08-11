import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost' // thi is to understand the syntax graphql in asimple string

const GET_PHOTOS = gql`
query getPhotos( $categoryId: ID ) {
  photos( categoryId: $categoryId ) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}`

export const getPhotos = graphql(GET_PHOTOS)