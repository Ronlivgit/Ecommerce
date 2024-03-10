const { Router } = require("express")
const router = Router()
const { Authentication } = require("../middleware/authentication")
const { Payment } = require("../models/payment.model")
const { Authorize } = require("../middleware/autherization")
const { createOrder, getOrders } = require('../controllers/payment.controller')


router.post("/createOrder", createOrder);

router.post("/createOrder/:orderID/capture", getOrders);

// serve index.html
router.get("/", (req, res) => {
    res.sendFile(path.resolve("./client/checkout.html"));
});

module.exports = router