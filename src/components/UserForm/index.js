import React, { Fragment } from 'react'
import { UseInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title } from './styles'

export const UserForm = ({ onSubmit, title, buttonText }) => {
  const email = UseInputValue('')
  const password = UseInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault() // this is to do the next lines and not the normal behaviour of the submit
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input placeholder="Ingresar correco electrónico" type="email" {...email} />
        <Input placeholder="Ingresar contraseña" type="password" {...password} />
        <Button>{buttonText}</Button>
      </Form>
    </Fragment>
  )
}