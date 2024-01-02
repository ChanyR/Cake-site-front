import React from 'react'
import { PayPalButton } from "react-paypal-button-v2"
import Paypal from '../general/paypal';

const UserOrders = () => {
  return (
    <div>
      <div>UserOrders</div>
      <Paypal/>
    </div>
  )
}

export default UserOrders