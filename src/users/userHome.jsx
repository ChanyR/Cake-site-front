import React from 'react'
import BakerList from '../bakers/bakersList'

import { useNavigate } from 'react-router'
import { getUserInfo } from '../services/functionApiService'

const UserHome = () => {
  const navigate = useNavigate();

  const startOrder = async() => {
    // let userInfo=await getUserInfo();
    // console.log(userInfo.role);
    navigate(`/cake-order`);
  }

  return (
    <div className='container w-100'>
      
      <button onClick={startOrder}>התחל הזמנה</button>
      <BakerList />
    </div>


  )
}

export default UserHome