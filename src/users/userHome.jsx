import React, { useContext } from 'react'
import BakerList from '../bakers/bakersList'

import { useNavigate } from 'react-router'
import { getUserInfo } from '../services/functionApiService'
import { AppContext } from '../context/context'

const UserHome = () => {
  const navigate = useNavigate();
  const {activeStep, setActiveStep} = useContext(AppContext);


  const startOrder = async() => {
    // let userInfo=await getUserInfo();
    // console.log(userInfo.role);
    setActiveStep(0)
    navigate(`/cake-order`);
  }

  return (
    <div className='container w-100'>
      
      <button onClick={startOrder}>התחל הזמנה</button>
      {/* <BakerList /> */}
    </div>


  )
}

export default UserHome