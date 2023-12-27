import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const Logout = () => {

    const navigate=useNavigate();

    useEffect(()=>{
        Cookies.remove('token');
        navigate("/")
    })

  return (
    <div>Logout</div>
  )
}

export default Logout