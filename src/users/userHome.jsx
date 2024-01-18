import React, { useContext, useEffect } from 'react'
import BakerList from '../bakers/bakersList'

import { useNavigate } from 'react-router'
import { getUserInfo } from '../services/functionApiService'
import { AppContext } from '../context/context'
import './userHome.css'

const UserHome = () => {
  const navigate = useNavigate();
  const { activeStep, setActiveStep } = useContext(AppContext);

  const { chosenBaker, setChosenBaker } = useContext(AppContext);
  const { total, setTotal } = useContext(AppContext);
  const { isPay, setIsPay } = useContext(AppContext);

  useEffect(() => {
    setChosenBaker(null)
    setTotal(0);
    setIsPay(false)
  })

  const startOrder = async () => {
    // let userInfo=await getUserInfo();
    // console.log(userInfo.role);
    setActiveStep(0)
    navigate(`/cake-order`);
  }

  return (
    <div className='container-fluid img'>
      <div className='btn-div w-100'>
        <button onClick={startOrder} class="button-48" role="button"><span class="text">START YOUR ORDER</span></button>
      </div>
    </div>
  )
}

export default UserHome