const {Router} = require("express")
const router = Router()
// const {Authentication} = require("../middleware/authentication")
const {Order} = require("../models/order.model")
const { Authentication } = require("../middleware/authentication")
const { createOrder, getOrder } = require('../controllers/order.controller')

router.get('/', Authentication, getOrder)


module.exports = router

