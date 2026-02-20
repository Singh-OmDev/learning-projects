import React from 'react'
import UserContextProvider from './context/UserContextProvider'

const App = () => {
  return (
    <div>
     <UserContextProvider>
       <h1> context api </h1>

     </UserContextProvider>
    </div>
  )
}

export default App
