import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Div, Title, Description } from './styles'

export const SeoBehaviour = ({ children, title, description, showTitle = false, showDescription = false }) => {
  return (
    <Fragment>
      <Helmet>
        {title && <title>Pettagram 🐶| {title}</title>}
        {description && <meta name='description' content={description} />}
      </Helmet>
      <Div>
        {(title && showTitle) && <Title>{title}</Title>}
        {(description && showDescription) && <Description>{description}</Description>}
        {children}
      </Div>
    </Fragment>
  )
}
