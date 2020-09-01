import React from "react"
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/listOfPhotoCards'
import { SeoBehaviour } from '../components/SeoBehaviour'

const HomePage = (path) => {
  return (
    <SeoBehaviour title="Mascotas para todo gusto" description="Aquí verás un stock de animales para el hogar muy bonitos y por categorías!" >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={path.cateId} />
    </SeoBehaviour>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.cateId === props.cateId
})