import { PayPalButton } from "react-paypal-button-v2"
import { useContext } from 'react';
import { AppContext } from '../context/context';
function Paypal() {
  const {total, setTotal } = useContext(AppContext);

    return(
    <PayPalButton 
        currency="ILS"
        amount={total}
        options={{
          clientId:"AahHQeyrTMYMwfwX76hxNdQ4jVbVuCfry5gqvTN_vG9AutdOB3pWVwNU75ve76ka7nrotHdj3DYJav0b"
        }}
        onSuccess={(details, data) => {
          // important info of the transction is in the data like token and orderId
        }}
        onCancel={(err) => {
          console.log(err);
          alert("The payment process been canceld, try again")
        }}
      />
    )
}

export default Paypal

// import React from "react";
// import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

// function PayPalCheckout() {
//     return (
//         <div className="App-body">

//             <PayPalScriptProvider
//             // options={{ "client-id": import.meta.env.VITE_CLIENT_ID }}
//             >
//                 <PayPalButtons
//                     createOrder={(data, actions) => {
//                         return actions.order.create({
//                             purchase_units: [
//                                 {
//                                     amount: {
//                                         value: "13.99",
//                                     },
//                                 },
//                             ],
//                         });
//                     }}
//                     onApprove={async (data, actions) => {
//                         const details = await actions.order.capture();
//                         const name = details.payer.name.given_name;
//                         alert("Transaction completed by " + name);
//                     }}
//                 />
//             </PayPalScriptProvider>
//         </div>
//     );
// }

// export default PayPalCheckout
