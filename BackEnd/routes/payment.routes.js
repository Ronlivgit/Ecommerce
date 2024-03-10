const { Router } = require("express")
const router = Router()
const { Authentication } = require("../middleware/authentication")
const { Payment } = require("../models/payment.model")
const { Authorize } = require("../middleware/autherization")
const { createOrder, getOrders, createOrder2 } = require('../controllers/payment.controller')


router.post("/createOrder", createOrder2);

router.post("/createOrder/:orderID/capture", getOrders);

// serve index.html
router.get("/", (req, res) => {
    res.sendFile(path.resolve("./client/checkout.html"));
});

module.exports = router