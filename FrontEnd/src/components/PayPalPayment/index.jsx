import React from 'react';
// import { PayPalButton } from "@paypal/react-paypal-js";

import { APIBaseUrl } from '../../config/Api';
import { PayPalButton } from 'react-paypal-button-v2';

export default function PayPalPayment({ prod }) {
    const token = localStorage.getItem('token');

    const createOrder = async (data, actions) => {
        try {
            const response = await fetch(`${APIBaseUrl}/payment/createOrder`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    cart: [
                        {
                            sku: "YOUR_PRODUCT_STOCK_KEEPING_UNIT",
                            quantity: "YOUR_PRODUCT_QUANTITY",
                            cost: "YOUR_PRODUCT_cost"
                        },
                    ],
                }),
            });
            if (!response.ok) {
                throw new Error('Failed to create order');
            }
            const order = await response.json();
            return order.id;
        } catch (error) {
            console.error('Error creating order:', error);
            throw error; // Rethrow the error to propagate it
        }
    };

    const onApprove = async (data, actions) => {
        try {
            const response = await fetch(`${APIBaseUrl}/createOrder/:orderID/capture`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    orderID: data.orderID
                })
            });
            if (!response.ok) {
                throw new Error('Failed to capture order');
            }
            const responseData = await response.json();
            console.log("Payment succeeded", responseData);
            return responseData;
        } catch (error) {
            console.error('Error capturing order:', error);
            throw error;
        }
    };

    return (
        <div>
            <PayPalButton
              options={{
                clientId: "AeI9KWNwRKJpH9pObUAOpxRodfpUOHfC5SnYbt5Zzd1qQc55d69_p1nNtoVUQg1kADuCnhqx_jlcc2ly",
                currency:'USD',
              }}
                amount={prod.price}
                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                onSuccess={(details, data) => {
                    alert("Transaction completed by " + details.payer.name.given_name);

                    // OPTIONAL: Call your server to save the transaction
                    console.log({details, data});
                }}
            />
        </div>
    );
}
