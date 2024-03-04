const { Router } = require("express")
const router = Router()
const { Authentication } = require("../middleware/authentication")
const { Order } = require("../models/order.model")
const { createOrder, getorder } = require('../controllers/order.controller')

router.get('/', Authentication, getorder)


module.exports = router