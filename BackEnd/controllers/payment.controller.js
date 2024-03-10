const { config } = require('../config')
const { Payment } = require("../models/payment.model");
const { User } = require('../models/user.model');

const paypal = require('paypal-rest-sdk');
paypal.configure({
    mode: 'sandbox', // 'sandbox' or 'live'
    client_id: config.PAYPAL_CLIENT_ID,
    client_secret: config.PAYPAL_SECRET_KEY
});
// const environment = new paypal.core.SandboxEnvironment(config.PAYPAL_CLIENT_ID, config.PAYPAL_SECRET_KEY);
// const client = new paypal.core.PayPalHttpClient(environment);
const { createNewOrder, captureOrder } = require('../utils/payPal');

const createOrder2 = (req, res) => {
    const paymentData = {
        intent: 'sale',
        payer: {
            payment_method: 'paypal'
        },
        redirect_urls: {
            return_url: '<http://yourwebsite.com/success>',
            cancel_url: '<http://yourwebsite.com/cancel>'
        },
        transactions: [{
            amount: {
                total: '10.00',
                currency: 'USD'
            },
            description: 'Sample payment description'
        }]
    }
    paypal.payment.create(paymentData, (error, payment) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            // Redirect the user to the approval URL
            const approvalUrl = payment.links.find(link => link.rel === 'approval_url').href;
            res.json({ approvalUrl });
        }
    });
};


const createOrder = async (req, res) => {
    try {
        // use the cart information passed from the front-end to calculate the order amount detals
        const { cart } = req.body;
        console.log(cart);
        const { jsonResponse, httpStatusCode } = await createNewOrder(cart);
        res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
        console.error("Failed to create order:", error);
        res.status(500).json({ error: "Failed to create order." });
    }
}

const getOrders = async (req, res) => {
    try {
        const { orderID } = req.params;
        const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
        res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
        console.error("Failed to create order:", error);
        res.status(500).json({ error: "Failed to capture order." });
    }
}

module.exports = { createOrder, createOrder2, getOrders }