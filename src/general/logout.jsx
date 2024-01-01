import Cookies from 'js-cookie'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { AppContext } from '../context/context';

const Logout = () => {

  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    Cookies.remove('token');
    setUser(null);
    navigate("/");
  })

  return (
    <div>Logout</div>
  )
}

export default Logout