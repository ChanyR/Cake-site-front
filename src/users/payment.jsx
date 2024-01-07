import React from 'react'
import Paypal from '../general/paypal'
import { useContext } from 'react';
import { AppContext } from '../context/context';
import './payment.css'
const Payment = () => {
  const { total, setTotal } = useContext(AppContext);

  return (
    <div className='payment'>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2 >🎂🧁🍨...עוד צעד אחד והעוגה בדרך אילך</h2>
      <h2>הסכום לתשלום:<span style={{ color: 'gold' }}>{total}</span>שח</h2>
      <h2>נא בחר אמצעי תשלום</h2>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="centered-container">
        <Paypal />
      </div>
    </div>
  )
}

export default Payment