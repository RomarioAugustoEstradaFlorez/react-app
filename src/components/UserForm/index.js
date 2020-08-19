import React from 'react'
import { UseInputValue } from '../../hooks/useInputValue'

export const UserForm = ({ onSubmit }) => {
  const email = UseInputValue('')
  const password = UseInputValue('')

  return (
    <form onSubmit={onSubmit}>
      <input placeholder="Ingresar correco electrónico" type="email" {...email} />
      <input placeholder="Ingresar contraseña" type="password" {...password} />
      <button>Iniciar Sesión</button>
    </form>
  )
}