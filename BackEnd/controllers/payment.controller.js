const { config } = require('../config')
const { Payment } = require("../models/payment.model");
const { User } = require('../models/user.model');

const paypal = require('@paypal/checkout-server-sdk');

const environment = new paypal.core.SandboxEnvironment(config.PAYPAL_CLIENT_ID, config.PAYPAL_SECRET_KEY);
const client = new paypal.core.PayPalHttpClient(environment);
const { createNewOrder, captureOrder } = require('../utils/payPal');


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

const getOrders =async (req, res) => {
    try {
        const { orderID } = req.params;
        const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
        res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
        console.error("Failed to create order:", error);
        res.status(500).json({ error: "Failed to capture order." });
    }
}

    module.exports = { createOrder, getOrders }