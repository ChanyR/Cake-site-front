import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppContext } from './context/context'
import Login from './general/login'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [user, setUser] = useState([]);

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ user, setUser }}>
        <Login />
      </AppContext.Provider>
    </BrowserRouter>

  )
}

export default App
