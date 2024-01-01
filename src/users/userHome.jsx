import React from 'react'
import BakerList from '../bakers/bakersList'
import DesignCake from '../general/designCake'
// import ImageGenerator from '../general/imageGenerator'
import { fetchData } from '../general/imageGenerator'
import { useNavigate } from 'react-router'
import { getUserInfo } from '../services/functionApiService'

const UserHome = () => {
  const navigate = useNavigate();

  const startOrder = async() => {
    let userInfo=await getUserInfo();
    console.log(userInfo.role);
    navigate(`${userInfo.role}/cake-order`);
  }

  return (
    <div className='container w-100'>
      <DesignCake />
      <button onClick={fetchData} className='button button-info'  >הצג הדמיה</button>
      <button onClick={fetchData}  >fetchData</button>
      <button onClick={startOrder}>התחל הזמנה</button>
      <BakerList />
    </div>


  )
}

export default UserHome