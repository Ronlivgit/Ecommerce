const { Router } = require("express")
const router = Router()
const { Authentication } = require("../middleware/authentication")
const { Payment } = require("../models/payment.model")
const { Authorize } = require("../middleware/autherization")
const { createPayment, getPayments } = require('../controllers/payment.controller')

// router.get('/:idBuyer', Authentication, Authorize(['user']), getPaymentByuser)

router.get('/', Authentication, Authorize(['admin']), getPayments)

router.post('/',  createPayment)


module.exports = router