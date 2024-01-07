import { useEffect, useState } from 'react'
import './App.css'
import { AppContext } from './context/context'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



import Home from './general/home'
import SignUp from './general/singup'
import Login from './general/login'
import UserHome from './users/userHome'
import Logout from './general/logout'
import UsersManagement from './admin/usersManagement'
import BakersManagement from './admin/bakersManagement'
import CakeOrdering from './users/cakeOrdering'
import NotFound from './general/notFound'
import UserOrders from './users/userOrders'
import BakersLike from './users/bakersLike'
import UserPropile from './users/userPropile'
import AppRoutes from './navbar/appRoutes'
import Cookies from 'js-cookie'
import BakerPage from './bakers/bakerPage'
import BakerImage from './bakers/bakerImage'
import ForgetPassword from './users/forgetPassword'
import BakerProfile from './bakers/bakerProfile'


function App() {

  
  const [user, setUser] = useState(null);
  const [bakers, setBakers] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [chosenBaker, setChosenBaker] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ user, setUser, bakers, setBakers, usersList, setUsersList,chosenBaker,setChosenBaker,activeStep,setActiveStep ,total, setTotal}}>

        <Routes>
          {/* <Route path="/user/*" element={<UserNav />} />
          <Route path="/baker/*" element={<BakerNav />} />
          <Route path="/admin/*" element={<AdminNav />} /> 
          <Route path="/*" element={<HomeNav />} />*/}
          <Route path="/*" element={<AppRoutes/>}/>
        </Routes>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<UserHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/myOrders" element={<UserOrders/>} />
          <Route path="/like" element={<BakersLike/>} />
          <Route path="/profile" element={<UserPropile/>} />
          <Route path="/cake-order" element={<CakeOrdering />} />
          <Route path="/usersManagement" element={<UsersManagement />} />
          <Route path="/bakersManagement" element={<BakersManagement />} />
          <Route path="/bakerPage" element={<BakerPage />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/bakerProfile" element={<BakerProfile />} />
          <Route path='/*' element={<NotFound/>}/>
          {/* <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/user" element={<UserHome />} />
          <Route path="/user/cake-order" element={<CakeOrdering />} />
          <Route path="/baker" element={<UserHome />} />
          <Route path="/baker/cake-order" element={<CakeOrdering />} />
          <Route path="/admin" element={<UserHome />} />
          <Route path="/admin/cake-order" element={<CakeOrdering />} />
          <Route path="/admin/usersManagement" element={<UsersManagement />} />
          <Route path="/admin/bakersManagement" element={<BakersManagement />} />
          <Route path="/*" element={<NotFound/>} /> */}
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>

  )
}

export default App
