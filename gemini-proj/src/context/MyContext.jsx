import { createContext, useContext, useEffect, useState } from "react";
// Create a context
const MyContext = createContext();


// Provide the Context
const MyContextProvider = ({ children }) => {
  const [recentSearch, setRecentSearch] = useState([])
  // const [recentSearch, setRecentSearch] = useState(() => {
  //   const saveData = localStorage.getItem('localSearches')
  //   return saveData ? JSON.parse(saveData) : [];
  // })
  const [tab, setTab] = useState(null)

  // 2.1. Automatically save to localStorage every time a new item is added
  // useEffect(() => {
  //   localStorage.setItem('localSearches', JSON.stringify(recentSearch));
  // }, [recentSearch]);

  const value = {
    recentSearch,
    setRecentSearch,
    tab,
    setTab
  }
  return (
    <MyContext value={value}>
      {children}
    </MyContext>
  )
}
// 3.Use the Context
const useMyContext = () => {
  return useContext(MyContext)
}
export { MyContextProvider, useMyContext };