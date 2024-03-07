const { config } = require('../config')
const { Payment } = require("../models/payment.model");
const { User } = require('../models/user.model');
const { generateToken, verifyToken } = require("../utils/jwt")
const paypal = require('@paypal/checkout-server-sdk');

// const getPaymentByuser = async (req, res) => {
//     const idBuyer = req.params.id.toString();
//     const query = req.query
//     try {
    
//         const updatePayment = payments.find(payment => payment.buyerId === idBuyer)
//         const payments = await updatePayment.find({ ...query })
//         return res.send(payments)
//     } catch (err) {
//         console.log(err);
//         return res.status(404).send(err)
//     }
// }

const environment = new paypal.core.SandboxEnvironment(config.PAYPAL_CLIENT_ID, config.PAYPAL_SECRET_KEY);
const client = new paypal.core.PayPalHttpClient(environment);

const getPayments = async (req, res) => {
    const query = req.query
    try {
        const payments = await Payment.find({ ...query })
        return res.send(payments)
    } catch (err) {
        console.log(err);
        return res.status(404).send(err)
    }
}

const createPayment = async (req, res) => {
    const body = req.body
    try {
        // Extract user ID and payment details from request

        // Create payment object
        const request = new paypal.orders.OrdersCreateRequest();
        request.prefer("return=representation");
        request.requestBody({
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'USD',
                    value: body.amount
                }
            }],
            application_context: {
                return_url: 'YOUR_RETURN_URL',
                cancel_url: 'YOUR_CANCEL_URL'
            }
        });

        //* Execute payment request
        const response = await client.execute(request);

        //   { 
        // Update user's balance
        //     // const user = await User.findById(body.userId);
        //     // if (!user) {
        //         // return res.status(404).json({ error: 'User not found' });
        //     // }
        //     // user.balance += amount;
        //     // await user.save();
        // }

        //* Respond with payment approval URL
        res.json({ response });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing the payment' });
    }
};

module.exports = { createPayment, getPayments }