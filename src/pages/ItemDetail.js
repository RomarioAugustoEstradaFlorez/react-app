import React, { Fragment } from "react"
import { PhotoCardWithQuery } from '../container/photoCardWithQuery'

export const ItemDetail = ({ itemId }) => {
  return (
    <PhotoCardWithQuery id={itemId} />
  )
}