import { createContext, useContext, useState } from "react";

const Context = createContext();

const MyContextProvider = ({ children }) => {
  const [issidebaropen, setSidebarOpen] = useState(false)
  const value = {
    issidebaropen,
    setSidebarOpen
  }
  return (
    <Context value={value}>
      {children}
    </Context>
  )
}

const useMyContext = () => {
  return useContext(Context)
}

export { MyContextProvider, useMyContext }