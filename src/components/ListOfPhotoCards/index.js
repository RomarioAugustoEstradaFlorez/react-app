import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { List } from './styles'
import { getPhotos } from '../../hoc/getPhotos'

// export const ListOfPhotoCards = () => {
//   return (
//     <List>
//       {[1, 2, 3, 4, 5, 6].map(id => <PhotoCard key={id} id={id} />)}
//     </List>
//   )
// }
// const ListOfPhotoCardsComponent = (props) => { // debug only

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => { // directly to the images
  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}