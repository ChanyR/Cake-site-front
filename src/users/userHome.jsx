import React from 'react'
import BakerList from '../bakers/bakersList'
import DesignCake from '../general/designCake'
// import ImageGenerator from '../general/imageGenerator'
import { fetchData } from '../general/imageGenerator'
import {startOrder} from './chooseBaker'

const UserHome = () => {
  return (
    <div className='container w-100'>
      <button onClick={fetchData}  >fetchData</button>
      <button onClick={startOrder}>התחל הזמנה</button>
      <BakerList />
    </div>


  )
}

export default UserHome