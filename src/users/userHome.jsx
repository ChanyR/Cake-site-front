import React from 'react'
import BakerList from '../bakers/bakersList'
import DesignCake from '../general/designCake'

const UserHome = () => {
  return (
    <div className='container w-100'>
      <label>הדף הרגיל שיראו שמתחברים לאתר- תחילת קניית עוגה, זהה לכל המשתמשים</label>
      <BakerList/>
    </div>


  )
}

export default UserHome