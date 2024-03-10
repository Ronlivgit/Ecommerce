const { Order } = require("../models/order.model")
const { generateToken, verifyToken } = require("../utils/jwt")
const { Product } = require('../models/product.model')

const getOrder = async (req, res) => {
    try {
        const query = req.query
        const orderes = await Order.find({ ...query })
        return res.send({ orderes })
    } catch (err) {
        console.log(err);
        return res.status(404).send(err)
    }
}


const createOrder = async (req, res) => {
    const body = req.body;
    try {
        body.userId = req.body.userId;
        const newOrder = new Order(body)
        let orderTotalPrice = 0
        console.log(newOrder);
        await Promise.all(newOrder.products.map(async (item, index) => {
            const product = await Product.findById(item);
            if (product.discounts.length > 0) {
                product.discounts.map((discount) => {
                    orderTotalPrice = orderTotalPrice + discount.finalPrice
                    newOrder.totalPrice = + orderTotalPrice
                })
            }
            else {
                orderTotalPrice = orderTotalPrice + product.price
                newOrder.totalPrice = + orderTotalPrice
            }
            product.supplyInStock -= product.units
            await product.save()
        }))
        await newOrder.save()
        return res.status(201).send(newOrder)
    } catch (err) {
        console.log(err);
        return res.status(404).send(err)
    }
}
//! OrderStatuses = awaiting (pending for admin), confirmed(admin accept), shipped(admin sent) , ...
//! arrived(Shippment arrived) , confirmed(product arrived) , denied (admin refused)

const updateStatus = async (req, res) => {
    const { orderId } = req.params
    const { orderStatus } = req.body
    try {
        const updateOrderId = await Order.findById(orderId)
        console.log("updateOrderId pre-body : ", updateOrderId);
        updateOrderId.orderStatus = orderStatus
        await updateOrderId.save()
        return res.status(200).send({ message: "Status changed successfully : ", updateOrderId })
    } catch (error) {
        console.error(error);
    }
}






module.exports = { getOrder, createOrder, updateStatus }