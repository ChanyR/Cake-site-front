import React from 'react'
import DesignCake from '../general/designCake'
// import ImageGenerator from '../general/imageGenerator'
import { fetchData } from '../general/imageGenerator'

const BakersLike = () => {
  return (
    <div>
      <div>BakersLike</div>
      <DesignCake />
      <button onClick={fetchData} className='button button-info'  >הצג הדמיה</button>
    </div>
    
  )
}

export default BakersLike