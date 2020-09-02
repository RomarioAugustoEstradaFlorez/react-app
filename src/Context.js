import React, { createContext, useState } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, pushIsAuth] = useState(() => {
    return window.sessionStorage.getItem("token")
  })

  const value = {
    isAuth,
    activateAuth: token => {
      pushIsAuth(true)
      window.sessionStorage.setItem("token", token)
    },
    removeAuth: token => {
      pushIsAuth(true)
      window.sessionStorage.removeItem("token", token)
      window.location.href = "/user"
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