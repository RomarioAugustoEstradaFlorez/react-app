import React from 'react'
import Context from '../Context'

export const NotRegisterUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          // <h1>NotRegisterUser</h1>
          <form onSubmit={activateAuth}>
            <button>Iniciar Sesión</button>
          </form>
        )
      }
    }
  </Context.Consumer>
)