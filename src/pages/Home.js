import React, { Fragment } from "react"
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/listOfPhotoCards'

export const Home = (path) => {
  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={path.cateId} />
    </Fragment>
  )
}