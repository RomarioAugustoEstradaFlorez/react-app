import React, { createContext, useState } from 'react'

const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, pushIsAuth] = useState(false)

  const value = {
    isAuth,
    activateAuth: () => {
      pushIsAuth(true)
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
};