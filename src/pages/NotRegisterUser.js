import React, { Fragment, useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/registerMutation'
import { LoginMutation } from '../container/loginMutation'

export const NotRegisterUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <Fragment>

      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              let input = { email, password }
              let variables = { input }
              register({ variables }).then(({ data }) => {
                const { signup } = data;
                activateAuth(signup)
              }) // this authentic the user because is a mutation, we can use promises like then
            }

            const errMsg = error && "El usuario que intenta registrar ya existe."
            return (
              <UserForm title="Registrarse" buttonText="Registrarse" onSubmit={onSubmit} error={errMsg} loading={loading} />
            )
          }
        }
      </RegisterMutation>

      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              let input = { email, password }
              let variables = { input }
              login({ variables }).then(({ data }) => {
                const { login } = data;
                activateAuth(login)
              }) // this authentic the user because is a mutation, we can use promises like then
            }

            const errMsg = error && "El password o el correo son incorrectos."

            return (
              <UserForm title="Iniciar Sesión" buttonText="Iniciar" onSubmit={onSubmit} error={errMsg} loading={loading} />
            )
          }
        }
      </LoginMutation>

    </Fragment>
  )
}