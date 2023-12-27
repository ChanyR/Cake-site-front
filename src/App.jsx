import { useState } from 'react'
import './App.css'
import { AppContext } from './context/context'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomeNav from './navbar/homeNav'
import UserNav from './navbar/userNav'
import BakerNav from './navbar/bakerNav'
import AdminNav from './navbar/adminNav'
import Home from './general/home'
import SignUp from './general/singup'
import Login from './general/login'
import UserHome from './users/userHome'

function App() {
  const [user, setUser] = useState({});

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ user, setUser }}>

        <Routes>
          <Route path="/user/*" element={<UserNav/>} />
          <Route path="/baker/*" element={<BakerNav/>} />
          <Route path="/admin/*" element={<AdminNav />} />
          <Route path="/*" element={<HomeNav/>} />
        </Routes>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user" element={<UserHome />} />
          <Route path="/baker" element={<UserHome />} />
          <Route path="/admin" element={<UserHome />} />
          <Route path="/*" element={<h2>Page 404</h2>} />

        </Routes>
      </AppContext.Provider>
    </BrowserRouter>

  )
}

export default App
