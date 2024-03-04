const { Order } = require("../models/order.model")
const { generateToken, verifyToken } = require("../utils/jwt")


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
        await newOrder.save()
        return res.status(201).send(newOrder)
    } catch (err) {
        console.log(err);
        return res.status(404).send(err)
    }
}




module.exports = { getOrder, createOrder }