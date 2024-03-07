const {Router} = require("express")
const router = Router()
// const {Authentication} = require("../middleware/authentication")
const {Order} = require("../models/order.model")
const { Authentication } = require("../middleware/authentication")
const { createOrder, getOrder , updateStatus } = require('../controllers/order.controller')

router.get('/', Authentication, getOrder)

router.post('/create', Authentication, createOrder)

//! Patch to update order status
router.patch('/update/:orderId', Authentication, updateStatus)





module.exports = router