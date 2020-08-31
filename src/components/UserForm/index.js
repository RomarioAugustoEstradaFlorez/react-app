import React, { Fragment } from 'react'
import { UseInputValue } from '../../hooks/useInputValue'
import { Error, Form, Input, Button, Title } from './styles'

export const UserForm = ({ error, loading, onSubmit, title, buttonText }) => {
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
      <Form disbaled={loading} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input placeholder="Ingresar correco electrónico" type="email" {...email} disbaled={loading} />
        <Input placeholder="Ingresar contraseña" type="password" {...password} disbaled={loading} />
        <Button disbaled={loading}>{buttonText}</Button>
      </Form>

      {
        loading && <p>Enviando datos al API...</p>
      }
      <Error className="form__message--error">
        <p>{error}</p>
      </Error>
    </Fragment>
  )
}