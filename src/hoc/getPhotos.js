import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost' // thi is to understand the syntax graphql in asimple string

export const getPhotos = graphql(gql`
query getPhotos( $categoryId: ID ) {
  photos( categoryId: $categoryId ) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`)