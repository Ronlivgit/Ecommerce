import React from 'react'
import { PayPalButtons } from "@paypal/react-paypal-js";
import { APIBaseUrl } from '../../config/Api';


//  !yizak worked down here doesnt finish 

export default function PayPalPayment() {
    const token = localStorage.getItem('token');
    const createOrder = async (data) => {
        // Order is created on the server and the order id is returned
        return fetch(`${APIBaseUrl}/payment/createOrder`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${token}`
            },
            // use the "body" param to optionally pass additional order information
            // like product skus and quantities
            body: JSON.stringify({
                product: {
                    description: 'YOUR_DESCRIPTION_HERE',
                    cost: 'YOUR_COST'
                }
            }),
        })
            .then((response) => response.json())
            .then((order) => order.id);
    };
    const onApprove = async (data) => {
        // Order is captured on the server and the response is returned to the browser
        return fetch("/payment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                orderID: 'data.orderID'
            })
        })
            .then((response) => {
                console.log("Payment suucceeded"+response.json());    
                response.json()
            });
    };
    return (
        <div>
            <PayPalButtons  style={{ layout: "horizontal" }} 
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
            />
        </div>
    )
}
