import React, { Fragment } from 'react'
import { FavsWithQuery } from '../container/getFavorites'

export const Favs = () => (
  <Fragment>
    <h1>Tus favoritas</h1>
    <FavsWithQuery />
  </Fragment>
)