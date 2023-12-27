import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppContext } from './context/context'
import Login from './general/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './general/singup'
import ClientNav from './navbar/clientNav'
import Home from './general/home'

function App() {
  const [user, setUser] = useState([]);

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ user, setUser }}>

        <Routes>
          {/* <Route path="/admin/*" element={<HeaderAdmin />} />
          <Route path="/test/*" element={<HeaderTest />} /> */}
          <Route path="/*" element={<ClientNav />} />
        </Routes>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<h2>Page 404</h2>} />


          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

        </Routes>
      </AppContext.Provider>
    </BrowserRouter>

  )
}

export default App
