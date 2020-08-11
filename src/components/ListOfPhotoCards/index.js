import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { List } from './styles'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost' // thi is to understand the syntax graphql in asimple string

const withPhotos = graphql(gql`
query getPhotos {
  photos {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`)

// export const ListOfPhotoCards = () => {
//   return (
//     <List>
//       {[1, 2, 3, 4, 5, 6].map(id => <PhotoCard key={id} id={id} />)}
//     </List>
//   )
// }
// const ListOfPhotoCardsComponent = (props) => { // debug only
const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => { // directly to the images
  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)