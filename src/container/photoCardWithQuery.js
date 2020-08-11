import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { PhotoCardFetch } from '../fetching/PhotoCardFetch'
import { Query } from 'react-apollo'

import { getDetailPhoto } from '../hoc/getDetailPhoto'

const dataCard = ({ loading, error, data }) => {
  if (loading) {
    return <PhotoCardFetch />
  }
  if (error) {
    return <p>Hay un error: ${error}</p>
  }
  if (!loading) {
    const { photo = {} } = data // is the same as data.photo but better because of this -> {}
    return <PhotoCard {...photo} />
  }
  return null;
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={getDetailPhoto} variables={{ id }}>
    {dataCard}
  </Query>
)