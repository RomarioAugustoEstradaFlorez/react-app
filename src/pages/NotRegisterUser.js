import React, { Fragment } from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/registerMutation'

export const NotRegisterUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <Fragment>

            <RegisterMutation>
              {
                (register, { data, loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    let input = { email, password }
                    let variables = { input }
                    register({ variables }).then(activateAuth) // this authentic the user because is a mutation, we can use promises like then
                  }

                  const errMsg = error && "El usuario que intenta registrar ya existe."
                  return (
                    <UserForm title="Registrarse" buttonText="Registrarse" onSubmit={onSubmit} error={errMsg} loading={loading} />
                  )
                }
              }
            </RegisterMutation>

            <UserForm title="Iniciar Sesión" buttonText="Iniciar" onSubmit={activateAuth} />
          </Fragment>
        )
      }
    }
  </Context.Consumer>
)