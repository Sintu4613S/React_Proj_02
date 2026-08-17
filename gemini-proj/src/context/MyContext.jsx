import { createContext, useContext, useEffect, useState } from "react";
// Create a context
const MyContext = createContext();


// Provide the Context
const MyContextProvider = ({ children }) => {
  const [recentSearch, setRecentSearch] = useState([])
  const [activeIndex, setActiveIndex] = useState(null)
  // const [recentSearch, setRecentSearch] = useState(() => {
  //   const saveData = localStorage.getItem('localSearches')
  //   return saveData ? JSON.parse(saveData) : [];
  // })

  // 2.1. Automatically save to localStorage every time a new item is added
  // useEffect(() => {
  //   localStorage.setItem('localSearches', JSON.stringify(recentSearch));
  // }, [recentSearch]);

  const newChat = () => {
    setRecentSearch([])
    setActiveIndex(null)
  }
  const value = {
    recentSearch,
    setRecentSearch,
    newChat,
    activeIndex,
    setActiveIndex,
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