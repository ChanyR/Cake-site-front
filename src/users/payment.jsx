import React from 'react'
import Paypal from '../general/paypal'
import { useContext } from 'react';
import { AppContext } from '../context/context';
import './payment.css'
const Payment = () => {
  const { total, setTotal } = useContext(AppContext);

  return (
    <div className='container payment'>
      <div className="my-3">
        <p>One more step and the cake is on its way to you...  🎂🧁🍨</p>
        <p>Amount to be paid:<span > {total}.00 </span>$</p>
        <p>Please select a payment method</p>
      </div>

      <div className="centered-container w-50 mt-3">
        <Paypal />
      </div>
    </div>
  )
}

export default Payment