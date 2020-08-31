import React from 'react'
import { FavsWithQuery } from '../container/getFavorites'
import { SeoBehaviour } from '../components/SeoBehaviour'

export const Favs = () => (
  <SeoBehaviour title="Tus mascotas favoritas" description="Aquí encontrará el listado de mascotas que te han gustado!" showTitle={true} showDescription={true}>
    <FavsWithQuery />
  </SeoBehaviour>
)