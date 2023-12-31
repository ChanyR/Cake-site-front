import React from 'react'
import BakerList from '../bakers/bakersList'
import DesignCake from '../general/designCake'
// import ImageGenerator from '../general/imageGenerator'
import {fetchData} from '../general/imageGenerator'
const UserHome = () => {
  return (
    <div className='container w-100'>
      <label>הדף הרגיל שיראו שמתחברים לאתר- תחילת קניית עוגה, זהה לכל המשתמשים</label>
<button onClick={fetchData}  >fetchData</button>

      <BakerList/>
    </div>


  )
}

export default UserHome